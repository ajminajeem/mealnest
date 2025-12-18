import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';






interface NavItem {
  icon: string;
  label: string;
  route: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  navGroups: NavGroup[] = [
    {
      title: 'Main',
      items: [
        { icon: 'fas fa-chart-line', label: 'Dashboard', route: '/dashboard' },
        { icon: 'fas fa-utensils', label: 'Dishes', route: '/dishes' },
        { icon: 'fas fa-layer-group', label: 'Batches', route: '/batches' },
        { icon: 'fas fa-print', label: 'Print Labels', route: '/print-labels' }
      ]
    },
    {
      title: 'Management',
      items: [
        { icon: 'fas fa-building', label: 'Sites', route: '/sites' },
        { icon: 'fas fa-users', label: 'Users & Roles', route: '/users' },
        { icon: 'fas fa-qrcode', label: 'QR Codes', route: '/qr-codes' }
      ]
    },
    {
      title: 'Reports',
      items: [
        { icon: 'fas fa-file-alt', label: 'Batch Print Log', route: '/batch-log' },
        { icon: 'fas fa-chart-bar', label: 'Usage Reports', route: '/usage-reports' },
        { icon: 'fas fa-history', label: 'User Activity', route: '/user-activity' }
      ]
    }
  ];

  userInfo = {
    name: 'Site Admin',
    role: 'DNATA Sydney',
    initials: 'SA'
  };
}