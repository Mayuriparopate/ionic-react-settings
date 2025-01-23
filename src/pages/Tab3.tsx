// import React, { useState } from "react";
// import {
//   IonPage,
//   IonContent,
//   IonHeader,
//   IonToolbar,
//   IonTitle,
//   IonSearchbar,
//   IonSegment,
//   IonSegmentButton,
//   IonLabel,
//   IonIcon,
// } from "@ionic/react";
// import {
//   mapOutline,
//   calendarOutline,
//   micOutline,
//   videocamOutline,
//   funnelOutline,
// } from "ionicons/icons";
import "./Tab3.css";

// const Tabs3: React.FC = () => {
//   const [selectedTab, setSelectedTab] = useState("map");

//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar color="primary">
//           <IonTitle>Languages</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent>
//         <div className="languages-container">
//           {/* Sidebar */}
//           <div className="languages-sidebar">
//             {/* Tabs */}
//             <IonSegment
//               mode="md"
//               value={selectedTab}
//               onIonChange={(e: any) => setSelectedTab(e.detail.value!)}
//               className="tabs-container"
//             >
//               <IonSegmentButton value="map">
//                 <IonIcon icon={mapOutline} />
//                 <IonLabel>Map</IonLabel>
//               </IonSegmentButton>
//               <IonSegmentButton value="schedule">
//                 <IonIcon icon={calendarOutline} />
//                 <IonLabel>Schedule</IonLabel>
//               </IonSegmentButton>
//               <IonSegmentButton value="voice">
//                 <IonIcon icon={micOutline} />
//                 <IonLabel>Voice</IonLabel>
//               </IonSegmentButton>
//               <IonSegmentButton value="video">
//                 <IonIcon icon={videocamOutline} />
//                 <IonLabel>Video</IonLabel>
//               </IonSegmentButton>
//               <IonSegmentButton value="filter">
//                 <IonIcon icon={funnelOutline} />
//                 <IonLabel>Filter</IonLabel>
//               </IonSegmentButton>
//             </IonSegment>

//             {/* Search */}
//             <IonSearchbar placeholder="Search"></IonSearchbar>
//             {/* Language List */}
//             <div className="languages-list">
//               {/* Replace this static list with dynamic data */}
//               <p>Acholi (Sudan-Uganda)</p>
//               <p>Afar</p>
//               <p>Afghani - Pashto</p>
//               <p>Afrikaans</p>
//               <p>Akan</p>
//             </div>
//           </div>
//         </div>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Tabs3;

// import React, { useState } from "react";
// import { IonSegment, IonSegmentButton, IonLabel, IonIcon } from "@ionic/react";
// import { starOutline, mapOutline } from "ionicons/icons";

// const Tabs3: React.FC = () => {
//   const [selectedTab, setSelectedTab] = useState("languages");

//   return (
//     <div className="tabs-container">
//       <IonSegment
//         mode="md"
//         value={selectedTab}
//         onIonChange={(e: any) => setSelectedTab(e.detail.value!)}
//       >
//         <IonSegmentButton value="languages" className="tab-button">
//           <IonLabel>Languages</IonLabel>
//         </IonSegmentButton>
//         <IonSegmentButton value="favorites" className="tab-button">
//           <IonIcon icon={starOutline} />
//           <IonLabel>Favorites</IonLabel>
//         </IonSegmentButton>
//         <IonSegmentButton value="map" className="tab-button">
//           <IonIcon icon={mapOutline} />
//           <IonLabel>Map</IonLabel>
//         </IonSegmentButton>
//       </IonSegment>
//     </div>
//   );
// };

// export default Tabs3;
//
// import React, { useState } from "react";
// import { IonIcon, IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
// import {
//   searchOutline,
//   funnelOutline,
//   ellipsisVertical,
//   star,
//   mapOutline,
//   starOutline,
// } from "ionicons/icons";
// import "./Tab3.css";

// const Tab3: React.FC = () => {
//   const [activeTab, setActiveTab] = useState("languages");

//   return (
//     <>
//       <div className="tab3-container">
//         {/* Tabs */}
//         <div className="tabs-header">
//           <div
//             className={`tab-item ${activeTab === "languages" ? "active" : ""}`}
//             onClick={() => setActiveTab("languages")}
//           >
//             <span>Languages</span>
//           </div>
//           <div
//             className={`tab-item ${activeTab === "favorites" ? "active" : ""}`}
//             onClick={() => setActiveTab("favorites")}
//           >
//             <IonIcon icon={star} className="tab-icon" />
//             <span>Favorites</span>
//           </div>
//           <div
//             className={`tab-item ${activeTab === "map" ? "active" : ""}`}
//             onClick={() => setActiveTab("map")}
//           >
//             <IonIcon icon={mapOutline} className="tab-icon" />
//             <span>Map</span>
//           </div>
//         </div>

//         {/* Search and Filter */}
//         <div className="search-filter-container">
//           <div className="search-bar">
//             <IonIcon icon={searchOutline} className="search-icon" />
//             <input type="text" placeholder="China" className="search-input" />
//             <button className="clear-btn">✕</button>
//           </div>
//           <div className="filter-icons">
//             <IonIcon icon={funnelOutline} className="filter-icon" />
//             <IonIcon icon={ellipsisVertical} className="filter-icon" />
//           </div>
//         </div>
//       </div>
//       {/* <div className="tabs-container">
//         <IonSegment>
//                mode="md"
//                value={selectedTab}
//                onIonChange={(e: any) => setActiveTab(e.detail.value!)}

//               <IonSegmentButton value="languages" className="tab-button">
//                  <IonLabel>Languages</IonLabel>
//               </IonSegmentButton>
//               <IonSegmentButton value="favorites" className="tab-button">
//                <IonIcon icon={starOutline}/>
//               <IonLabel>Favorites</IonLabel>
//                </IonSegmentButton>
//               <IonSegmentButton value="map" className="tab-button">
//                 <IonIcon icon={mapOutline}/>
//                 <IonLabel>Map</IonLabel>
//               </IonSegmentButton>
//             </IonSegment>
//         </div> */}
//     </>
//   );
// };

// export default Tab3;
import React, { useState } from "react";
import { IonIcon, IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";
import {
  searchOutline,
  funnelOutline,
  ellipsisVertical,
  starOutline,
  mapOutline,
} from "ionicons/icons";
import "./Tab3.css";

const Tab3: React.FC = () => {
  const [activeTab, setActiveTab] = useState("languages");

  return (
    <div className="tab3-container">
      {/* Tabs using IonSegment */}
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
        <div className="search-bar">
          <IonIcon icon={searchOutline} className="search-icon" />
          <input type="text" placeholder="China" className="search-input" />
          <button className="clear-btn">✕</button>
        </div>
        <div className="filter-icons">
          <IonIcon icon={funnelOutline} className="filter-icon" />
          <IonIcon icon={ellipsisVertical} className="filter-icon" />
        </div>
      </div>
    </div>
  );
};

export default Tab3;
