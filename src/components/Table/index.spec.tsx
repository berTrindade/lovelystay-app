
import { render } from "@testing-library/react";
import { Table } from "./index";

const ItemMock = () => (
    <>
        <tr>
            <td>John Doe</td>
            <td>React Project</td>
        </tr>
        <tr>
            <td>Sara Smith</td>
            <td>Node Project</td>
        </tr>
        <tr>
            <td>John Lewis</td>
            <td>Elixir Project</td>
        </tr>
    </>
)

const tablePropsMock = {
    children: <ItemMock />,
    columns: ['NAME', 'DESCRIPTION'],
    width: ['auto', '', '']
}

describe("Table component", () => {
    it("should render list items", () => {
        const { getByText } = render(
        <Table 
            columns={tablePropsMock.columns} 
            widths={tablePropsMock.width} 
            children={tablePropsMock.children} 
        />)

        expect(getByText("John Doe")).toBeInTheDocument();
        expect(getByText("Sara Smith")).toBeInTheDocument();
        expect(getByText("Elixir Project")).toBeInTheDocument();
    })
});