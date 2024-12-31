import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
// import AudioSettings from "./Tab1";
import { act } from "react";
import AudioSettingsTest from "./Test";


beforeAll(() => {
    global.MediaStream = class {
      constructor() {
        this.getTracks = vi.fn(() => []); // Mock `getTracks` method
      }
    };
  
    global.navigator.mediaDevices = {
      getUserMedia: vi.fn().mockResolvedValue(new MediaStream()),
      enumerateDevices: vi.fn().mockResolvedValue([
        {
          kind: "audioinput",
          deviceId: "device1",
          label: "Microphone 1",
        },
        {
          kind: "audioinput",
          deviceId: "device2",
          label: "Microphone 2",
        },
      ]), // Mock devices
    };
  
    global.AudioContext = vi.fn().mockImplementation(() => ({
      createGain: vi.fn(),
      close: vi.fn(),
      createMediaStreamSource: vi.fn(),
      createAnalyser: vi.fn(),
      destination: {},
    }));
  });
  
  afterAll(() => {
    vi.restoreAllMocks();
  });

  describe


it("renders the component and displays default segment", () => {
//   render(<AudioSettings />);
  const { baseElement } = render(<AudioSettingsTest />);
  expect(baseElement).toBeDefined();

  const settingsTitle = baseElement.querySelector("ion-title");
  expect(settingsTitle).toBeInTheDocument();
  expect(settingsTitle).toHaveTextContent("Settings");

//   expect(screen.getByText("Settings")).toBeInTheDocument();
//   expect(screen.getByText("Audio")).toBeInTheDocument();
//   expect(screen.getByText("Audio Input")).toBeInTheDocument();

});

it("handles microphone testing", async () => {
  const mockGetUserMedia = vi
    .spyOn(navigator.mediaDevices, "getUserMedia")
    .mockResolvedValueOnce({ getTracks: vi.fn(() => [{ stop: vi.fn() }]) });

  console.log(mockGetUserMedia, "mockGetUserMedia");

  await act(async () => {
    render(<AudioSettingsTest />);
});

  const testMicButton = await screen.getByText("Test Mic");
  fireEvent.click(testMicButton);

  expect(screen.getByText("Stop Mic")).toBeInTheDocument(); // Button text should be "Stop Mic"

  fireEvent.click(screen.getByText("Stop Mic"));
  expect(screen.getByText("Test Mic")).toBeInTheDocument();
});


it("changes volume dynamically", async () => {
    await act(async () => {
        render(<AudioSettingsTest />);
    });

    const rangeInput:any = await screen.getByTestId("input-volume-slider");
    fireEvent.change(rangeInput, { target: { value: 70} });

    await waitFor(() => {
      expect(rangeInput.value).toBe(70);
    });
  });




  it("selects an input device", async () => {
    // Mock input devices
    const mockDevices = [
      { kind: "audioinput", deviceId: "device1", label: "Microphone 1" },
      { kind: "audioinput", deviceId: "device2", label: "Microphone 2" },
    ];
    
    // Mock the enumerateDevices method to return mock devices
    global.navigator.mediaDevices.enumerateDevices = vi.fn().mockResolvedValue(mockDevices);
  
    await act(async () => {
        render(<AudioSettingsTest />);
    });
  
    // Wait for the input devices to be loaded and the select dropdown to appear
    await waitFor(() => {
      expect(screen.getByRole("combobox")).toBeInTheDocument();
    });
  
    // Open the IonSelect dropdown
    const selectInput = screen.getByRole("combobox");
    fireEvent.click(selectInput);
  
    // Select the first device ("Microphone 1")
    const option1 = screen.getByText("Microphone 1");
    fireEvent.click(option1);
  
    // Wait for the UI to reflect the selected device
    await waitFor(() => {
      expect(screen.getByText("Microphone 1")).toBeInTheDocument();
    });
  
    // Verify the selected device ID is reflected in the component's state
    expect(screen.getByRole("combobox")).toHaveValue("device1");
  });