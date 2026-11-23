import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
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
