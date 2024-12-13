// import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
// import './Tab2.css';

// const Tab2: React.FC = () => {
//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Tab 2</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent fullscreen>
//         <IonHeader collapse="condense">
//           <IonToolbar>
//             <IonTitle size="large">Tab 2</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <ExploreContainer name="Tab 2 page" />
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Tab2;

import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonRange,
  IonButton,
  IonToggle,
  IonSegment,
  IonSegmentButton,
  IonList,
} from "@ionic/react";
import "./Tab2.css"; // Import custom CSS for responsiveness

const SettingsPage: React.FC = () => {
  const [audioInput, setAudioInput] = useState<string>("default");
  const [audioOutput, setAudioOutput] = useState<string>("default");
  const [inputVolume, setInputVolume] = useState<number>(50);
  const [outputVolume, setOutputVolume] = useState<number>(50);
  const [backgroundNoise, setBackgroundNoise] = useState<boolean>(false);
  const [adjustMicVolume, setAdjustMicVolume] = useState<boolean>(false);
  const [unmuteSpaceBar, setUnmuteSpaceBar] = useState<boolean>(true);
  const [segment, setSegment] = useState<string>("audio");

  const testMic = () => {
    alert("Testing Mic...");
  };

  const testSpeaker = () => {
    alert("Testing Speaker...");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* Segment Tabs */}
        <IonSegment
          value={segment}
          onIonChange={(e) => setSegment(e.detail.value! as string)}
          className="responsive-segment"
        >
          <IonSegmentButton value="audio">
            <IonLabel>Audio</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="camera">
            <IonLabel>Camera</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="general">
            <IonLabel>General</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {segment === "audio" && (
          <div className="responsive-layout">
            {/* Audio Input Section */}
            <div className="audio-settings">
              <IonList>
                <IonItem className="responsive-item">
                  <IonLabel>Audio Input</IonLabel>
                  <IonSelect
                    value={audioInput}
                    placeholder="Select Input"
                    onIonChange={(e) => setAudioInput(e.detail.value)}
                  >
                    <IonSelectOption value="default">
                      System Default
                    </IonSelectOption>
                    <IonSelectOption value="microphone">
                      Microphone
                    </IonSelectOption>
                  </IonSelect>
                </IonItem>
                <div className="flex-item">
                  <div className="flex-item-resp">
                    <IonLabel>Input Volume:</IonLabel>
                    <IonRange
                      min={0}
                      max={100}
                      value={inputVolume}
                      onIonChange={(e) =>
                        setInputVolume(e.detail.value as number)
                      }
                    />
                  </div>
                </div>

                <IonButton expand="block" onClick={testMic}>
                  Test Mic
                </IonButton>
              </IonList>
            </div>

            {/* Audio Output Section */}
            <div className="audio-settings">
              <IonList>
                <IonItem className="responsive-item">
                  <IonLabel>Audio Output</IonLabel>
                  <IonSelect
                    value={audioOutput}
                    placeholder="Select Output"
                    onIonChange={(e) => setAudioOutput(e.detail.value)}
                  >
                    <IonSelectOption value="default">
                      System Default
                    </IonSelectOption>
                    <IonSelectOption value="speakers">Speakers</IonSelectOption>
                  </IonSelect>
                </IonItem>

                <IonItem>
                  <IonLabel>Output Volume:</IonLabel>
                  <IonRange
                    min={0}
                    max={100}
                    value={outputVolume}
                    onIonChange={(e) =>
                      setOutputVolume(e.detail.value as number)
                    }
                  />
                </IonItem>
                <IonButton expand="block" onClick={testSpeaker}>
                  Test Speaker
                </IonButton>
              </IonList>
            </div>

            {/* Additional Settings */}
            <div className="additional-settings">
              <IonItem>
                <IonLabel>Background Noise Removal</IonLabel>
                <IonToggle
                  checked={backgroundNoise}
                  onIonChange={(e) => setBackgroundNoise(e.detail.checked)}
                />
              </IonItem>
              <IonItem>
                <IonLabel>Automatically adjust microphone volume</IonLabel>
                <IonToggle
                  checked={adjustMicVolume}
                  onIonChange={(e) => setAdjustMicVolume(e.detail.checked)}
                />
              </IonItem>
              <IonItem>
                <IonLabel>Unmute temporary by holding the space bar</IonLabel>
                <IonToggle
                  checked={unmuteSpaceBar}
                  onIonChange={(e) => setUnmuteSpaceBar(e.detail.checked)}
                />
              </IonItem>
            </div>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
