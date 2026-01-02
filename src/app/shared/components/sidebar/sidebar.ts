import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

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
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  /** 🔥 Notify layout to close sidebar (mobile) */
  @Output() closeSidebar = new EventEmitter<void>();

  /** 🔥 Collapse state */
  isCollapsed = false;

  /** 🔥 Toggle collapse */
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  navGroups: NavGroup[] = [
    {
      title: 'Main',
      items: [
        { icon: 'fas fa-chart-line', label: 'Dashboard', route: '/dashboard' },
        { icon: 'fas fa-utensils', label: 'Dishes', route: '/dishes' },
        { icon: 'fas fa-layer-group', label: 'Batches', route: '/batch-details' },
        { icon: 'fas fa-print', label: 'Print Labels', route: '/print-labels' },
        { icon: 'fas fa-print', label: 'Print Counter', route: '/print-counter' },
      ],
    },
    {
      title: 'Management',
      items: [
        { icon: 'fas fa-building', label: 'Sites', route: '/sites' },
        { icon: 'fas fa-users', label: 'Users & Roles', route: '/users' },
        { icon: 'fas fa-qrcode', label: 'QR Codes', route: '/qr-code-view' },
        { icon: 'fas fa-history', label: 'Version History', route: '/version-history' },
      ],
    },
    {
      title: 'Reports',
      items: [
        { icon: 'fas fa-file-alt', label: 'Batch Print Log', route: '/batch-log' },
        { icon: 'fas fa-chart-bar', label: 'Usage Reports', route: '/usage-reports' },
        { icon: 'fas fa-history', label: 'User Activity', route: '/user-activity' },
      ],
    },

    {
      title: 'General',
      items: [
        { icon: 'fas fa-file-alt', label: 'Site Configuration', route: '/site-configuration' },
        { icon: 'fas fa-print', label: 'Printer Settings', route: '/printer-settings' },
        { icon: 'fas fa-bell', label: 'Feature Configuration', route: '/feature-configuration' },
      ],
    },
    {
      title: 'Appearance',
      items: [
        { icon: 'fas fa-palette', label: 'Theme Color', route: '/theme-color' }
      ]
    }

    {
      title: 'Appearance',
      items: [
        { icon: 'fa-solid fa-palette', label: 'Theme & Colors', route: '/theme-colors' },
        { icon: 'fa fa-image', label: 'Branding', route: '/branding' },
        { icon: 'fa fa-a', label: 'Typography', route: '/typography' },
      ],
    },
  ];

  userInfo = {
    name: 'Site Admin',
    role: 'DNATA Sydney',
    initials: 'SA',
  };

  /** 🔥 Close drawer on mobile when link clicked */
  onNavClick() {
    if (window.innerWidth < 768) {
      this.closeSidebar.emit();
    }
  }
}
