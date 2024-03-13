import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CommonModule } from '@angular/common';
import { SignuppageComponent } from './signuppage/signuppage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LandingpageComponent, SignuppageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstproject';
  // public, private, protected
  public firstname ='Gaius'
  public lastname ='Dammy'
  // Typescript
}
