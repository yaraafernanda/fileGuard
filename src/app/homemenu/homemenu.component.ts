import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homemenu',
  templateUrl: './homemenu.component.html',
  styleUrls: ['./homemenu.component.css']
})
export class HomemenuComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  showData() {
    this.router.navigate(['/view']);
  }

  showDataFiltered() {
    this.router.navigate(['/filteredFile']);
  }

  showDataFilteredByUser() {
    this.router.navigate(['/filteredUser']);
  }

}
