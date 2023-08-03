import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("should load heading in Contact component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("should load button in Contact component", () => {
  render(<Contact />);
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("should load contact text in Contact component", () => {
  render(<Contact />);
  const text = screen.getByText("Contact Us");

  expect(text).toBeInTheDocument();
});

test("should load input name inside Contact component", () => {
  render(<Contact />);
  const nameInput = screen.getByPlaceholderText("Name");

  expect(nameInput).toBeInTheDocument();
});

test("should load two input fields inside Contact component", () => {
  render(<Contact />);
  const inputs = screen.getAllByRole("textbox");

  expect(inputs.length).toBe(2);
});
