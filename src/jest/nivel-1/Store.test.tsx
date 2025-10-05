import { render, screen, fireEvent } from "@testing-library/react";
import Store from "../../zustand/nivel-1/Store.tsx";
import "@testing-library/jest-dom";

describe("Component Store", () => {
  it("should increment correctly in text", () => {
    render(<Store />);
    const button = screen.getByRole("button", { name: "Increment" });
    const text = document.getElementById("count") as HTMLElement;
    expect(text).toHaveTextContent("0");
    fireEvent.click(button);
    expect(text).toHaveTextContent("1");
  });
  it("should decrement correctly in text", () => {
    render(<Store />);
    const button = screen.getByRole("button", { name: "Decrement" });
    const text = document.getElementById("count") as HTMLElement;
    expect(text).toHaveTextContent("1");
    fireEvent.click(button);
    expect(text).toHaveTextContent("0");
  });
  // Verifica se a funcao foi chamada ao ser clicado no button Increment
  it("should call function increment correctly", () => {
    const onCLick = jest.fn();
    render(<Store changeIn={onCLick} />);
    const button = screen.getByRole("button", { name: "Increment" });
    fireEvent.click(button);
    expect(onCLick).toHaveBeenCalled();
  });
});
