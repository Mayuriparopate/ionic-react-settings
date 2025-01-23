import { SessionRequestOptionsData } from "../session/request/SessionRequestOptionsData";
import { makeObservable, observable, action, computed, makeAutoObservable } from "mobx";
import { CustomerAccount } from "../session/request/SessionRequestState";
import { hasOneOrMoreRecords } from "../../lib/utils/utils";

export interface OptionsData{
    loadOptionsData?: (authHeaderValue?: string) => Promise<any>;
    resourcePath: string;
    localStorageItemKey: string;
    optionsData: any[];
    updateOptionsData?: (data: any[]) => void;
    fetchRemoteData?: () => Promise<any>;
    setLoading?: (loading: boolean) => void;
    setFetchError?: (err: any) => void;
    setAuthHeaderValue?: (val: string) => void;
}

export interface AccountOptionsData extends OptionsData {
    filterText: string;
    updateFilterText: (update: string) => void;
    viewData: CustomerAccount[];
    removeSuspended: () => void;
}

function initOptionsData(resourcePath: string, localStoreKey: string){
    const optionsData: OptionsData = {
        resourcePath, 
        localStorageItemKey: localStoreKey, 
        optionsData: [],

        // The original loadOptionsData function was extracted from SessionRequestOptionsData.
        async loadOptionsData(authHeaderValue?: string){
            const funcName = 'loadOptionsData:';
            console.log(funcName, 'Getting data...', this.localStorageItemKey, this.resourcePath);
            authHeaderValue && (this?.setAuthHeaderValue?.(authHeaderValue) );

            await this.fetchRemoteData?.();

            // If we decide to use the cached data in the future, we can uncomment the lines below:
            // if(!hasOneOrMoreRecords(this.optionsData)){
            //     this.updateOptionsData?.(retrieveFromLocalStorage(this.localStorageItemKey));
            // }
    
            console.log(funcName,'instance data:', this.optionsData);
            return this.optionsData;
        }
    }
    optionsData.updateOptionsData = SessionRequestOptionsData.prototype.updateOptionsData.bind(optionsData);
    optionsData.fetchRemoteData = SessionRequestOptionsData.prototype.fetchRemoteData.bind(optionsData);
    optionsData.setLoading = SessionRequestOptionsData.prototype.setLoading.bind(optionsData);
    optionsData.setFetchError = SessionRequestOptionsData.prototype.setFetchError.bind(optionsData);
    optionsData.setAuthHeaderValue = SessionRequestOptionsData.prototype.setAuthHeaderValue.bind(optionsData);

    return optionsData;
}

const accountOptions = initOptionsData('/accounts','nex:cd:acct') as AccountOptionsData;
Object.defineProperty(accountOptions, 'filterText', {
    value: ''
    ,writable: true
    ,configurable: true
});
Object.defineProperty(accountOptions, 'updateFilterText', {
    value: function(filterText: string){
        console.log('updateFilterText', filterText, this.filterText);
        this.filterText = filterText;
        console.log('updateFilterText', this.filterText);
    }
    ,configurable: true
    ,writable: false
});

Object.defineProperty(accountOptions, 'removeSuspended', {
    value: function(){
        const suspendedItems = this.optionsData?.filter?.((item: { suspended: boolean}) => item.suspended===true);
        if(hasOneOrMoreRecords(suspendedItems)){
            this?.updateOptionsData(this.optionsData?.filter((item: { suspended: boolean}) => item.suspended===false));
        }
    }
    ,configurable: true
    ,writable: false
});

Object.defineProperty(accountOptions, 'viewData', {
    get: function(){
        this.removeSuspended();
        if(this.filterText){
            const lowerCaseFilter = this.filterText.toLowerCase();
            return this.optionsData?.filter((d: CustomerAccount) => d["account-no"].includes(lowerCaseFilter) || d.description.toLowerCase().includes(lowerCaseFilter) );
        }
        return this.optionsData;
    }
    ,configurable: true
});

console.log('accountOptions initialized:', accountOptions);

export const accountOptionsObservable = makeAutoObservable(accountOptions);