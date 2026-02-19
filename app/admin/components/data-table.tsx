import { ReactNode } from 'react';

type Column<T> = {
	header: string;
	accessor: keyof T;
};

type DataTableProps<T> = {
	data: T[];
	columns: Column<T>[];
	actions?: (row: T) => ReactNode;
};

export function DataTable<T extends { id: string | number }>({ data, columns, actions }: DataTableProps<T>) {
	return (
		<div className='border border-border rounded-xl overflow-hidden bg-card'>
			<table className='w-full text-sm'>
				<thead className='border-b border-border bg-muted/50'>
					<tr>
						{columns.map(col => (
							<th key={String(col.accessor)} className='text-left px-4 py-3 font-medium text-muted-foreground'>
								{col.header}
							</th>
						))}
						{actions && <th className='px-4 py-3' />}
					</tr>
				</thead>

				<tbody>
					{data.map(row => (
						<tr key={row.id} className='border-b border-border last:border-none'>
							{columns.map(col => (
								<td key={String(col.accessor)} className='px-4 py-3'>
									{String(row[col.accessor])}
								</td>
							))}

							{actions && <td className='px-4 py-3 text-right'>{actions(row)}</td>}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
