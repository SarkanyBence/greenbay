import Login from "../components/Login";
import * as ReactDom from "react-dom";
import renderer from "react-test-renderer";
import { UserState } from "../redux/UserSlice";
import * as reactRedux from "react-redux";
import { Provider } from "react-redux";
import store from "../redux/store";

describe("Login tests", () => {
  let container: HTMLDivElement;
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  const initialState: UserState = {
    userName: "Guest",
    isLoggedIn: false,
  };

  const mockDispatch = jest.fn();
  jest.mock("react-redux", () => ({
    useAppSelector: jest.fn(),
    useAppDispatch: () => mockDispatch,
  }));

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDom.render(
      <Provider store={store}>
        <Login />
      </Provider>,
      container
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Login snapshot test", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Login />{" "}
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it.skip("renders correctly", () => {
    useSelectorMock.mockReturnValue({ initialState });
    const inputs = document.getElementsByClassName("input");
    expect(inputs.length).toBe(2);
  });
});
