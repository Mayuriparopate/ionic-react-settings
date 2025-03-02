import React, { useEffect, useState, useCallback } from 'react';
import { IonContent } from '@ionic/react';
import styled from 'styled-components';

interface NexusContentProps {
    children: React.ReactNode;
    backgroundColor?: string;
}


const NexusContent: React.FC<NexusContentProps> = ({ 
    children, 
}) => {


    return (
        <IonContent scrollEvents={true} fullscreen={true}
        >
            {children}
        </IonContent>
    );
};

export default NexusContent;