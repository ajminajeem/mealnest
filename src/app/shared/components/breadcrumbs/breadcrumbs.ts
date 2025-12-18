import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  imports: [CommonModule, RouterModule],
   standalone: true,    
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css',
})
export class Breadcrumbs {
  @Input() items: { label: string; link?: string }[] = [];
}
