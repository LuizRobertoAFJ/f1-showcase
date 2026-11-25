import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';


@Component({
  imports: [RouterOutlet, MatIconModule, MatButtonModule, MatSidenavModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('f1-showcase');
  teams: string[] = [
    "Mercedes",
    "Ferrari",
    "Red Bull Racing",
    "McLaren",
    "Racing Bulls",
    "Alpine",
    "Haas F1 Team",
    "Audi",
    "Williams",
    "Aston Martin",
    "Cadillac"
  ]
  
  openSidebar(){
    console.log("OI!");
  }


}
