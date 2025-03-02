import {
    IonButtons,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import NexusContent from "./NexusContent";

interface NexusPageLayoutProps {
    children: React.ReactNode;
    title?: string;
}

const NexusHeader = styled(IonHeader)`
    background: var(--ion-color-secondary);
`

const NexusTitle = styled(IonTitle)`
    color: var(--ion-header-text-color)
`

const NexusMenuButton = styled(IonMenuButton)`
    color: var(--ion-header-text-color)
`



export default function NexusPageLayout({
    children,
    title,
}: NexusPageLayoutProps) {



    return (
        <>
            <IonPage id="page-layout">
                <NexusHeader>
                    <IonToolbar 
                    >
                        <IonButtons slot="start">
                            <NexusMenuButton />
                        </IonButtons>
                        <NexusTitle>
                            {title ? title : "Cyracom Interpreter Services"}
                        </NexusTitle>
                    </IonToolbar>
                </NexusHeader>
                <NexusContent>{children}</NexusContent>
            </IonPage>
        </>
    );
}