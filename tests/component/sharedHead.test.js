import renderer from "react-test-renderer";
import SharedHead from "../../components/sharedHead";

it("renders correctly", () => {
  const tree = renderer.create(<SharedHead />).toJSON();
  expect(tree).toMatchSnapshot();
});
