const TechList = ({ values, handleEvent }) => {
	return (
		<ul style={{ listStyleType: 'none' }}>
			{values.map((item, index) => (
				<li
					style={{ cursor: 'pointer' }}
					key={index}
					onClick={() => handleEvent(index)}>
					<span className="font-weight-bold">X </span>
					{item.property ? item.property + ' : ' + item.value : ''}
				</li>
			))}
		</ul>
	);
};

export default TechList;
