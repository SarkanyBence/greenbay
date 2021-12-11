import Register from "../components/Register";
import * as ReactDom from "react-dom";
import renderer from "react-test-renderer";

describe("Register tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDom.render(<Register />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Register snapshot test", () => {
    const tree = renderer.create(<Register />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it.skip ("renders correctly", () => {
    const inputs = document.getElementsByName("input");
    expect(inputs.length).toBe(4);
  });
});