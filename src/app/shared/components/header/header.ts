import { Component,Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';





@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  @Input() title: string = 'Welcome back! 👋';
  @Input() subtitle: string = "Here's what's happening with your site today";
  @Input() showActions: boolean = true;
}
