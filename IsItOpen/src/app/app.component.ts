import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isOpen: boolean;
  alreadyVoted: boolean;
  openCount: number;
  closedCount: number;
  title = 'Gay things';

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
    this.getVotes();
  }

  getVotes() {
    // Fake data until we get the backend set up
    this.isOpen = true;
    this.openCount = 4;
    this.closedCount = 2;
    // Check to see if they have voted in that last 12 hours
    const lastTimeVoted = JSON.parse(localStorage.getItem('lastTimeVoted'));
    const diffInMs: number = Date.now() - lastTimeVoted;
    const diffInHours: number = diffInMs / 1000 / 60 / 60;
    if (diffInHours <= 12 && lastTimeVoted != null) {
      this.alreadyVoted = true;
    } else {
      this.alreadyVoted = false;
    }
    this.displayVotes();
  }

  displayVotes() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.isOpen ? '#7fc03f' : '#df5a54'; 
    this.title = this.isOpen ? 'Open' : 'Closed';
    this.isOpen ? this.openCount++ : this.closedCount++;
  }

  vote(vote: boolean) {
    // Update count and change the color
    this.isOpen = vote;
    this.alreadyVoted = true;
    const date = Date.now();
    localStorage.setItem('lastTimeVoted', JSON.stringify(date));
    this.displayVotes();
  }
}
