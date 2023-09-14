import { render, fireEvent, screen } from "@testing-library/react";
import ToDo from "../ToDo";

it("should render ToDo without crashing", () => {
    render(<ToDo />);
})

it("matches snapshot", () => {
    const { asFragment } = render(<ToDo />)
    expect(asFragment()).toMatchSnapshot();
})


//NEEDS BUGFIXING
it("should add a new task", () => {
    const { queryByText, getByLabelText } = render(<ToDo />)
    expect(queryByText("Walk the fish")).not.toBeInTheDocument();
    const input = getByLabelText('New Task:', { exact: false });
    console.log('INPUTTTTTT: ', input);
    const button = queryByText("add");
    fireEvent.change(input, { target: { value: 'Walk the fish' } });
    fireEvent.click(button);
    expect(queryByText("Walk the fish")).toBeInTheDocument();




})