import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

jest.mock("./hooks/useFetchPhotos", () => {
  return jest.fn();
});

test("renders App title", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const titleElement = screen.getByText(/Flowbox App/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders Layout component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const layoutElement = screen.getByTestId("layout");
  expect(layoutElement).toBeInTheDocument();
});
