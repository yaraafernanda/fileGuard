import { Component, OnInit } from '@angular/core';
import * as AWS from 'aws-sdk';
import credentials from '../../../aws-credentials';

AWS.config.update({
  region: 'us-east-2',
  accessKeyId: credentials.accessKey,
  secretAccessKey: credentials.secretKey
});

@Component({
  selector: 'app-tablefiltered',
  templateUrl: './tablefiltered.component.html',
  styleUrls: ['./tablefiltered.component.css']
})
export class TablefilteredComponent implements OnInit {

  movs: any[] = [];

  dynamodb = new AWS.DynamoDB();
  docClient = new AWS.DynamoDB.DocumentClient();

  constructor() { }

  ngOnInit() {
    // AWS
    const paramsMovs = {
      TableName: 'Movimientos'
    };

    // OBTENER MOVIMIENTOS
    this.docClient.scan(paramsMovs, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        this.fillMovs(data.Items);
        console.log('movs: ', this.movs);
      }
    });
  }

  fillMovs(data: any[] | AWS.DynamoDB.DocumentClient.AttributeMap[]) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < data.length; i++) {
      this.movs.push(data[i]);
    }
  }

  myFunction(vari) {
    // Declare variables
    // tslint:disable-next-line: one-variable-per-declaration
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('sailorTable');
    tr = table.getElementsByTagName('tr');

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[vari];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }

  sortTable(n) {
    // tslint:disable-next-line: no-var-keyword
    // tslint:disable-next-line: one-variable-per-declaration
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById('sailorTable');
    switching = true;
    // Set the sorting direction to ascending:
    dir = 'asc';
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName('TD')[n];
        y = rows[i + 1].getElementsByTagName('TD')[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir === 'asc') {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir === 'desc') {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount === 0 && dir === 'asc') {
          dir = 'desc';
          switching = true;
        }
      }
    }
  }

}
