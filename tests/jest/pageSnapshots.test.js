import { render } from "@testing-library/react";
import Home from "../../pages/index";
import Showrunner from "../../pages/showrunner";
import ThisMerchantLife from "../../pages/this-merchant-life";
import Presskit from "../../pages/presskit";

it("renders Home page unchanged", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});

it("renders Showrunner page unchanged", () => {
  const { container } = render(<Showrunner />);
  expect(container).toMatchSnapshot();
});

it("renders This Merchant Life page unchanged", () => {
  const { container } = render(<ThisMerchantLife />);
  expect(container).toMatchSnapshot();
});

it("renders Presskit page unchanged", () => {
  const { container } = render(<Presskit />);
  expect(container).toMatchSnapshot();
});
