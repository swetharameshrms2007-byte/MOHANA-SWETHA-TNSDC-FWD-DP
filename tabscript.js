const table = document.getElementById("studentTable");
const headers = table.querySelectorAll("th");
let sortDirection = true; // true = ascending, false = descending

headers.forEach((header, index) => {
  header.addEventListener("click", () => {
    const type = header.getAttribute("data-type");
    sortTable(index, type);
    sortDirection = !sortDirection;
  });
});

function sortTable(columnIndex, type) {
  const tbody = table.tBodies[0];
  const rows = Array.from(tbody.querySelectorAll("tr"));

  rows.sort((a, b) => {
    let x = a.cells[columnIndex].textContent.trim();
    let y = b.cells[columnIndex].textContent.trim();

    if (type === "number") {
      x = parseFloat(x);
      y = parseFloat(y);
    }

    if (x < y) return sortDirection ? -1 : 1;
    if (x > y) return sortDirection ? 1 : -1;
    return 0;
  });

  rows.forEach(row => tbody.appendChild(row));
}
