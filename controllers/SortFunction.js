module.exports = (array) => {
	let sortedArray = array;

	if (sortedArray.length <= 1) return sortedArray;

	const quickSort = (arr, start, end) => {
		let i = start;
		let j = end;

		let pivot = arr[Math.floor(start + (end - start) / 2)];
		while (i <= j) {
			while (arr[i].name.localeCompare(pivot.name) < 0) i++;

			while (arr[j].name.localeCompare(pivot.name) > 0) j--;

			if (i <= j) {
				[arr[i], arr[j]] = [arr[j], arr[i]];
				i++;
				j--;
			}
		}

		if (j > start) quickSort(arr, start, j);

		if (i < end) quickSort(arr, i, end);
	};

	quickSort(sortedArray, 0, sortedArray.length - 1);

	return sortedArray;
};
