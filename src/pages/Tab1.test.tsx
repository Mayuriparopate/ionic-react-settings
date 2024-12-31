import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AudioSettingsSection from "../components/AudioSettingsSection";
import { vi } from "vitest";

describe("AudioSettingsSection Component", () => {
  const mockProps = {
    title: "Audio Inputs",
    devices: [
      { deviceId: "1", label: "Device 1" },
      { deviceId: "2", label: "Device 2" },
    ],
    selectedDevice: "1",
    setSelectedDevice: vi.fn(),
    handleDeviceChange: vi.fn(),
    level: 50,
    renderLevelIndicator: vi.fn((level) => (
      <div data-testid="level-indicator">{level}</div>
    )),
    volume: 30,
    handleTest: vi.fn(),
    isTesting: false,
    testLabel: "Mic",
    IndicatorLabel: "Input Levels",
    sliderLabel: "Volume",
    handleVolumeChange: vi.fn(),
    type: "input",
  };

  it("renders component correctly", () => {
    render(<AudioSettingsSection {...mockProps} />);

    expect(screen.getByText(/audio Inputs/i)).toBeInTheDocument();
    expect(screen.getByText(/input levels/i)).toBeInTheDocument();
    expect(screen.getByText(/volume/i)).toBeInTheDocument();
    expect(screen.getByText(/test mic/i)).toBeInTheDocument();
  });

  it("renders devices in the select dropdown", () => {
    render(<AudioSettingsSection {...mockProps} />);
    fireEvent.click(screen.getByRole("combobox"));

    mockProps.devices.forEach((device) => {
      expect(screen.getByText(device.label)).toBeInTheDocument();
    });
  });

  it("handles device change correctly", async () => {
    render(<AudioSettingsSection {...mockProps} />);
    const select = screen.getByRole("combobox");

    //   fireEvent.change(select, { detail: { value: "2" } });
    fireEvent(select, new CustomEvent("ionChange", { detail: { value: "2" } }));

    await waitFor(() => {
        expect(mockProps.setSelectedDevice).toHaveBeenCalledWith('2');
        expect(mockProps.handleDeviceChange).toHaveBeenCalledWith('2');
      });
  });

  it("renders the level indicator", () => {
    render(<AudioSettingsSection {...mockProps} />);
    const levelIndicator = screen.getByTestId("level-indicator");

    expect(levelIndicator).toHaveTextContent("50");
    expect(mockProps.renderLevelIndicator).toHaveBeenCalledWith(50);
  });

  it("handles volume change", async () => {
   render(<AudioSettingsSection {...mockProps} />);
    const rangeInput: any = screen.getByRole("slider");

    // fireEvent.change(rangeInput, { target: { value: 70 } });
    fireEvent(rangeInput, new CustomEvent("ionChange", { detail: { value: 70 } }));

    await waitFor(() => {
    expect(mockProps.handleVolumeChange).toHaveBeenCalledWith(70, 'input');
    console.log("this worked, ")
    })
    console.log(rangeInput.value)
    // expect(mockProps.handleVolumeChange)?.toHaveBeenCalledWith(70, undefined);
    // rerender(<AudioSettingsSection {...mockProps} volume={70} />);
    // await expect(rangeInput.value).toBe(70);
  });

  it("handles test button click", () => {
    render(<AudioSettingsSection {...mockProps} />);
    const button = screen.getByText(/test mic/i);

    fireEvent.click(button);

    expect(mockProps.handleTest).toHaveBeenCalled();
  });

  it("displays stop label when testing", () => {
    render(<AudioSettingsSection {...mockProps} isTesting={true} />);
    const button = screen.getByText(/stop mic/i);

    expect(button).toBeInTheDocument();
  });
});
