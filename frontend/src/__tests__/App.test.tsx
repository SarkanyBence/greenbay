import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import store from "../redux/store";

describe("App component tests", () => {
  it("App snapshot test", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it.skip ("App renders correctly test", () => {
    render(<App />);
    const elements = screen.getAllByText("greenBay");
    expect(elements).toHaveTextContent("greenBay");
  });
});
