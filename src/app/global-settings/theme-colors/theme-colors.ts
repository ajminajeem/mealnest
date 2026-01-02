import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Breadcrumbs } from '../../shared/components/breadcrumbs/breadcrumbs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-theme-colors',
  imports: [CommonModule, RouterModule, Breadcrumbs, FormsModule],
  templateUrl: './theme-colors.html',
  styleUrl: './theme-colors.css',
})
export class ThemeColors {
  breadcrumbs = [{ label: 'Dashboard', link: '/dashboard' }, { label: 'Theme & Colors' }];

  presets = [
    { name: 'Fresh Green', colors: ['#2d9b6e', '#e8f5e9', '#4caf78'] },
    { name: 'Ocean Blue', colors: ['#2196f3', '#e3f2fd', '#64b5f6'] },
    { name: 'Royal Purple', colors: ['#9c27b0', '#f3e5f5', '#ba68c8'] },
    { name: 'Sunset Orange', colors: ['#ff5722', '#fbe9e7', '#ff7043'] },
    { name: 'Corporate Gray', colors: ['#607d8b', '#eceff1', '#78909c'] },
  ];

  selectedPreset = 'Fresh Green';

  selectPreset(name: string) {
    this.selectedPreset = name;
  }

  backgroundGradientEnd = '#E8F5E9';
  primaryColor = '#2D9B6E';
  secondaryColor = '#4CAF78';
  accentColor = '#FF9F5A';
  successColor = '#4CAF78';
  backgroundColor = '#F8FBF9';
}
