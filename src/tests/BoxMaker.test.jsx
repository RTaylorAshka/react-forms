import { render, fireEvent, queryByLabelText, queryAllByAttribute } from "@testing-library/react";
import BoxMaker from "../BoxMaker";

it("should render BoxMaker without crashing", () => {
    render(<BoxMaker />);
})

it("matches snapshot", () => {
    const { asFragment } = render(<BoxMaker />)
    expect(asFragment()).toMatchSnapshot();
})

it("should add a new box", () => {
    const { container } = render(<BoxMaker />)
    let boxes = container.querySelectorAll('div.box')
    expect(boxes.length).toEqual(0);


})