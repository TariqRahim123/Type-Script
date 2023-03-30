const url https://jsonplaceholder.typicode.com/posts':

fetch(url)
.then(response => response.json())
.then(data => {
     console.log(data);
const jsonData = JSON.parse(data);
console.log(jsonData);
})

const table = document.createElement('table');
const tableHeader = table.createTHead();
const tableRow = tableHeader.insertRow();

const headers = ['userId', 'id', 'title', 'body'];

headers.forEach(header => {
const th= document.createElement('th');
const text = document.createTextNode(header);
th.appendChild(text);
tableRow.appendChild(th);

});

const tableBody = table.createTBody();

jsonData.forEach(rowData => {
const row = tableBody.insertRow();
Object.values(rowData).forEach(val => {
const cell = row. insertCell();
const text = document.create
cell.appendChild(text);

const tableContainer = document.getElementById("table-container');
tableContainer.appendChild(table);