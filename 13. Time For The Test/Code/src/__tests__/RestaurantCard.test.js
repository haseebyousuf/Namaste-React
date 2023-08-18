import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardData.json";
import "@testing-library/jest-dom";

test("should render restaurant card with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Taste by Infinity");
  expect(name).toBeInTheDocument();
});
