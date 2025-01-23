import React, { useState } from "react";
import { IonIcon, IonSegment, IonSegmentButton, IonLabel, IonSearchbar } from "@ionic/react";
import {
  searchOutline,
  funnelOutline,
  ellipsisVertical,
  starOutline,
  mapOutline,
} from "ionicons/icons";
import "./Tab3.css";

// Common SearchBox Component
// const SearchBox: React.FC<{
//   placeholder: string;
//   value: string;
//   onChange: (value: string) => void;
//   onClear: () => void;
// }> = ({ placeholder, value, onChange, onClear }) => {
//   return (
//     <div className="search-bar">
//       <IonIcon icon={searchOutline} className="search-icon" />
//       <input
//         type="text"
//         placeholder={placeholder}
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className="search-input"
//       />
//       {value && (
//         <button className="clear-btn" onClick={onClear}>
//           ✕
//         </button>
//       )}
//     </div>
//   );
// };

const SearchBox: React.FC<{
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}> = ({ placeholder, value, onChange, onClear }) => {
  return (
    <div className="search-bar">
      <IonSearchbar
        value={value}
        onIonInput={(e: any) => onChange(e.target.value)}
        placeholder={placeholder}
        className="ionic-searchbar"
        showClearButton="always"
        onIonClear={onClear}
      />
    </div>
  );
};

const Tab3: React.FC = () => {
  const [activeTab, setActiveTab] = useState("languages");
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    // Implement filtering logic here
    console.log("Search Value:", value);
  };

  const handleClearSearch = () => {
    setSearchValue("");
    console.log("Search Cleared");
  };

  return (
    <div className="tab3-container">
      <IonSegment
        value={activeTab}
        className="tabs-header"
        onIonChange={(e: any) => setActiveTab(e.detail.value!)}
      >
        <IonSegmentButton
          value="languages"
          className={`tab-item ${activeTab === "languages" ? "active" : ""}`}
        >
          <IonLabel>Languages</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton
          value="favorites"
          className={`tab-item ${activeTab === "favorites" ? "active" : ""}`}
        >
          <IonIcon icon={starOutline} className="tab-icon" />
          <IonLabel>Favorites</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton
          value="map"
          className={`tab-item ${activeTab === "map" ? "active" : ""}`}
        >
          <IonIcon icon={mapOutline} className="tab-icon" />
          <IonLabel>Map</IonLabel>
        </IonSegmentButton>
      </IonSegment>

      {/* Search and Filter */}
      <div className="search-filter-container">
        <SearchBox
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearchChange}
          onClear={handleClearSearch}
        />
        <div className="filter-icons">
          <IonIcon icon={funnelOutline} className="filter-icon" />
        </div>
        <div className="filter-icons">
          <IonIcon icon={ellipsisVertical} className="filter-icon" />
        </div>
      </div>
    </div>
  );
};

export default Tab3;






// import React, { useState } from "react";
// import { IonIcon, IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";
// import {
//   searchOutline,
//   funnelOutline,
//   ellipsisVertical,
//   starOutline,
//   mapOutline,
// } from "ionicons/icons";
// import "./Tab3.css";

// const Tab3: React.FC = () => {
//   const [activeTab, setActiveTab] = useState("languages");

//   return (
//     <div className="tab3-container">
//       {/* Tabs using IonSegment */}
//       <IonSegment
//         value={activeTab}
//         className="tabs-header"
//         onIonChange={(e: any) => setActiveTab(e.detail.value!)}
//       >
//         <IonSegmentButton
//           value="languages"
//           className={`tab-item ${activeTab === "languages" ? "active" : ""}`}
//         >
//           <IonLabel>Languages</IonLabel>
//         </IonSegmentButton>
//         <IonSegmentButton
//           value="favorites"
//           className={`tab-item ${activeTab === "favorites" ? "active" : ""}`}
//         >
//           <IonIcon icon={starOutline} className="tab-icon" />
//           <IonLabel>Favorites</IonLabel>
//         </IonSegmentButton>
//         <IonSegmentButton
//           value="map"
//           className={`tab-item ${activeTab === "map" ? "active" : ""}`}
//         >
//           <IonIcon icon={mapOutline} className="tab-icon" />
//           <IonLabel>Map</IonLabel>
//         </IonSegmentButton>
//       </IonSegment>

//       {/* Search and Filter */}
//       <div className="search-filter-container">
//         <div className="search-bar">
//           <IonIcon icon={searchOutline} className="search-icon" />
//           <input type="text" placeholder="China" className="search-input" />
//           <button className="clear-btn">✕</button>
//         </div>
//         <div className="filter-icons">
//           <IonIcon icon={funnelOutline} className="filter-icon" />
//           <IonIcon icon={ellipsisVertical} className="filter-icon" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tab3;


