import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// Checking for the response from the above BreakpointObserver for mobile layout
import { Observable } from 'rxjs';

// Check the Observable and filter the results passed back
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(private BreakpointObserver: BreakpointObserver) { }

  // Creating a Variable that will tell the application if we are inside of a mobile 
  // device
  isHandset$: Observable<boolean> = this.BreakpointObserver.observe([Breakpoints.Handset])
        .pipe(
          map(result => result.matches),shareReplay()
        )

  ngOnInit(): void {
  }

}
