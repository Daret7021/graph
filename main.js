let table_id="table";
let createTable = (data, table_id) => {
	let table = document.getElementById(table_id);
	if (table) {
		while (table.rows.length > 1) {
			table.deleteRow(1);
		}
	}
	if (table.rows.length === 0) {
		let tr = document.createElement('tr');
		for (let key in data[0]) {
			let th = document.createElement('th');
			th.innerHTML = key;
			tr.appendChild(th);
		}
		table.appendChild(tr);
	}

	data.forEach((item) => {
		let tr = document.createElement('tr');
		for (let key in item) {
			let td = document.createElement('td');
			td.innerHTML = item[key];
			tr.appendChild(td);
		}
		table.appendChild(tr);
	});
}
createTable(data, table_id);