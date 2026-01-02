import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Breadcrumbs } from '../../shared/components/breadcrumbs/breadcrumbs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-typography',
  imports: [CommonModule, RouterModule, Breadcrumbs, FormsModule],
  templateUrl: './typography.html',
  styleUrl: './typography.css',
})
export class Typography {
  breadcrumbs = [{ label: 'Dashboard', link: '/dashboard' }, { label: 'Typography' }];
}
