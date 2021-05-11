import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { LoggedInContext } from '../contexts/LoggedInContext';

const TableList = ({ values, removeValue, name, shiftOrder }) => {
	const [keys, setKeys] = useState(null);

	const [draggedItem, setItem] = useState(null);

	const [dragOverItem, setDragOverItem] = useState(null);

	const loggedIn = useContext(LoggedInContext);

	useEffect(() => {
		if (values.length > 0) setKeys(Object.keys(values[0]));
	}, [values]);

	return keys ? (
		<table>
			<thead>
				<tr>
					{keys.map((key, i) => (
						<th key={i}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{values.map((item, i) => (
					<React.Fragment key={i}>
						{i === dragOverItem && loggedIn ? (
							<tr
								style={{ height: '20px', zIndex: 1 }}
								onDragOver={(e) => e.preventDefault()}
								onDrop={() => shiftOrder(draggedItem, i, name)}>
								<td style={{ opacity: 0 }}></td>
							</tr>
						) : null}

						<tr
							style={loggedIn ? { cursor: 'grab' } : null}
							draggable={loggedIn ? 'true' : 'false'}
							onDragStart={loggedIn ? () => setItem(i) : null}
							onDragEnd={loggedIn ? () => setDragOverItem(null) : null}
							onDrop={
								loggedIn
									? () => {
											shiftOrder(draggedItem, i, name);
											setDragOverItem(null);
									  }
									: null
							}
							onDragOver={
								loggedIn
									? (e) => {
											e.preventDefault();
											setDragOverItem(i);
									  }
									: null
							}>
							{keys.map((key, j) => (
								<td key={j} style={{ whiteSpace: 'pre-line' }}>
									{item[key]}
								</td>
							))}
							{loggedIn ? (
								<td style={{ width: '1px' }}>
									<Button
										className="btn-danger"
										onClick={() => removeValue(name, i)}>
										X
									</Button>
								</td>
							) : null}
						</tr>
					</React.Fragment>
				))}
			</tbody>
		</table>
	) : null;
};

TableList.defaultProps = {
	values: [],
	shiftOrder: () => {},
};

export default TableList;
