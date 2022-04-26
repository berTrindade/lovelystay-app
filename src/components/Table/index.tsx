import { Wrapper } from './styles';

interface TableProps {
    columns: string[]
    widths?: string[]
}

export function Table<TableProps>({ children, widths, columns }) {
  return (
    <Wrapper>
      <thead>
        <tr>
          {columns.map((column, i) => (
            <th key={column} style={widths && widths[i] ? { width: widths[i] } : undefined}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Wrapper>
  );
}