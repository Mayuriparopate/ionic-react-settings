import {
  IonCol,
  IonGrid,
  IonInput,
  IonLabel,
  IonRow,
  IonSelect,
  IonSelectOption,
  useIonViewWillEnter,
  useIonViewWillLeave,
} from "@ionic/react";
import { useState } from "react";
import styled from "styled-components";

const StyledNexusSelectWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0.75rem 1rem;
  border-radius: 0.65rem;

  > div {
    margin-bottom: 0 !important;

    > ion-label {
      margin-bottom: 0.3rem;
      margin-top: 0.3rem;
      display: block;
    }

    > ion-select {
      border-bottom: 2px solid black;
      --highlight-color-focused: none;
    }
    > ion-select::part(text) {
      color: black !important;
    }
  }

  .helper-text {
    font-size: 0.85rem;
    color: #666;
    margin-top: 0.95rem;
  }
`;

const CustomIonCol = styled(IonCol)`
  padding: 8px;
`;

export const SessionHeader = styled.div`
  ion-label {
    font-size: 2rem;
    p {
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      gap: 5px;
      font-weight: 500;
      margin-top: 15px;
      color: #000000;
    }
  }
`;
const Container = styled.div`
  --padding-size: 20px;

  max-width: 95%;
  margin: 15px auto 0 auto;
  padding: var(--padding-size);
  padding-bottom: 30px;
  width: 100%; /* Ensures it takes full width of the parent */

  @media (max-width: 800px) {
    --padding-size: 18px;
  }

  @media (max-width: 700px) {
    --padding-size: 16px;
  }

  @media (max-width: 600px) {
    --padding-size: 14px;
  }

  @media (max-width: 500px) {
    --padding-size: 12px;
  }

  @media (max-width: 400px) {
    --padding-size: 10px;
  }

  height: 80%;
  overflow-y: auto;
`;

const NexusRow = styled(IonRow)`
  display: flex;
  justify-content: space-between;

  .custom-acc {
    padding: 10px;
  }
`;

type SessionRequestInfoIntakeProps = {
  authHeaderValue?: string;
  selectedAccountId?: number | null;
};

export function SessionRequestInfoIntake(props: SessionRequestInfoIntakeProps) {
  const genderOptions = [
    { label: "No Preference", value: "no preference" },
    { label: "Female", value: "female" },
    { label: "Male", value: "male" },
  ];

  return (
    <>
      <Container>
        <SessionHeader>
          <IonLabel>
            <p>
              Session Request Information
              <span>
                <i className="fas fa-info-circle"></i>
              </span>
            </p>
          </IonLabel>
        </SessionHeader>

        <h2>Session Information</h2>

        <p>
          Please enter all required session information. The call buttons will
          enable once we have tested and optimized the connection.
        </p>

        <IonGrid className="ion-padding-bottom">
          <NexusRow>
            <IonCol
              sizeSm="6"
              sizeXs="12"
              size="6"
              className="ion-no-padding custom-acc"
            >
              <IonSelect
                className="custom-ion-select"
                placeholder="Select Language"
              >
                {genderOptions.map((option) => (
                  <IonSelectOption key={option.value} value={option.value}>
                    {option.label}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonCol>
            <IonCol
              sizeSm="6"
              sizeXs="12"
              size="6"
              className="ion-no-padding custom-acc"
            >
              <IonSelect
                className="custom-ion-select"
                placeholder="Select Name"
              >
                  {genderOptions.map((option) => (
                  <IonSelectOption key={option.value} value={option.value}>
                    {option.label}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonCol>
          </NexusRow>
          <IonRow className="ion-no-padding">
            <CustomIonCol size="12" sizeMd="6">
              <StyledNexusSelectWrapper>
                <IonSelect
                  className="custom-ion-select"
                  placeholder="Select lang"
                >
                    {genderOptions.map((option) => (
                  <IonSelectOption key={option.value} value={option.value}>
                    {option.label}
                  </IonSelectOption>
                ))}
                </IonSelect>
                <div className="helper-text">
                  Changing this may increase wait time to connect.
                </div>
              </StyledNexusSelectWrapper>
            </CustomIonCol>
          </IonRow>
          <IonCol className="ion-no-padding">
            <IonInput
                placeholder="Enter Name"
                className="custom-input"
            ></IonInput>
            <IonInput
                placeholder="Enter age"
                className="custom-input"
            ></IonInput>
            <IonInput
                placeholder="Enter dob"
                className="custom-input"
            ></IonInput>
            <IonInput
                placeholder="Enter year"
                className="custom-input"
            ></IonInput>
            <IonInput
                placeholder="Enter doa"
                className="custom-input"
            ></IonInput>
            <IonInput
                placeholder="Enter field"
                className="custom-input"
            ></IonInput>
            <IonInput
                placeholder="Enter first name"
                className="custom-input"
            ></IonInput>
            <IonInput
                placeholder="Enter last name"
                className="custom-input"
            ></IonInput>

          </IonCol>
        </IonGrid>
      </Container>
    </>
  );
}
