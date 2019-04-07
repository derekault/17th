import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isOpen: boolean;
  title = 'Gay things';

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
    this.getVotes();
  }

  getVotes() {
    this.isOpen = true;
    this.displayVotes();
  }

  displayVotes() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.isOpen ? '#7fc03f' : '#df5a54'; 
    this.title = this.isOpen ? 'Open' : 'Closed';
  }

  vote(vote: boolean) {
    // Update count and change the color
    this.isOpen = vote;
    this.displayVotes();
  }
}
