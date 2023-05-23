"use strict";

const table = document.querySelector('table');

const sortTable = function (index, type) {
 const tbody = table.querySelector('tbody');

 const compare = function (rowA, rowB) {
   const rowDataA = rowA.cells[index].innerHTML;
   const rowDataB = rowB.cells[index].innerHTML;

   switch (type) {
    case 'integer':
    case 'noninteger':  
      return rowDataA - rowDataB;
      break;
    case 'text': 
     if (rowDataA.toLowerCase() < rowDataB.toLowerCase()) return -1;
     else if (rowDataA.toLowerCase() > rowDataB.toLowerCase()) return 1;
     return 0; 
     break;
   }
 }

 let rows = [].slice.call(tbody.rows);
 rows.sort(compare);

 table.removeChild(tbody);
 for (let i = 0; i < rows.length; i++) {
  tbody.appendChild(rows[i]);
 }
  table.appendChild(tbody);
};

table.addEventListener('click', (event) => {
  const element = event.target;
  if(element.nodeName !== 'TH') return;
  const index = element.cellIndex;
  const type = element.getAttribute('data-type');

  sortTable(index, type);
});


 

