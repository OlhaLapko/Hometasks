const table = document.createElement('div');
table.className = 'table-container';
document.body.appendChild(table);

function createTable() {
    const headerRow = document.createElement('div');
    headerRow.className = 'row';
    for (let i = 1; i <= 10; i++) {
        const headerCell = document.createElement('div');
        headerCell.className = 'cell header';
        headerCell.textContent = i;
        headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);

    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        const rowHeader = document.createElement('div');
        rowHeader.className = 'cell header';
        rowHeader.textContent = i;
        row.appendChild(rowHeader);

        for (let j = 1; j <= 10; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = j * i;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

createTable();