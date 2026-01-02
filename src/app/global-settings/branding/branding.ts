import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Breadcrumbs } from '../../shared/components/breadcrumbs/breadcrumbs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-branding',
  imports: [CommonModule, RouterModule, Breadcrumbs, FormsModule],
  templateUrl: './branding.html',
  styleUrl: './branding.css',
})
export class Branding {
  breadcrumbs = [{ label: 'Dashboard', link: '/dashboard' }, { label: 'Branding' }];
}
