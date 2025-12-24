import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';

export interface Site {
  name: string;
  id: string;
  printed: number;
  limit: number;
  avgDaily: number;
  status?: 'good' | 'warning' | 'critical';
}

export interface EnterpriseTier {
  totalLimit: number;
  totalPrinted: number;
  totalRemaining: number;
  daysUntilReset: number;
  avgDailyUsage: number;
  usagePercentage?: number;
}

export interface Alert {
  type: 'warning' | 'info';
  title: string;
  message: string;
  icon: string;
}

@Component({
  selector: 'app-print-counter',
  imports: [CommonModule, ProgressBarModule, ButtonModule, CardModule, TagModule, DividerModule],
  templateUrl: './print-counter.html',
  styleUrl: './print-counter.css',
})
  export class PrintCounter implements OnInit {
  
  // Enterprise tier data - MODIFY THIS DATA AS NEEDED
  enterpriseTier: EnterpriseTier = {
    totalLimit: 200000,
    totalPrinted: 136540,
    totalRemaining: 63460,
    daysUntilReset: 156,
    avgDailyUsage: 876,
    usagePercentage: 0
  };

  // Sites data - MODIFY THIS ARRAY AS NEEDED
  sites: Site[] = [
    {
      name: 'DNATA Sydney',
      id: 'ENT-00001-S001',
      printed: 46000,
      limit: 50000,
      avgDaily: 234
    },
    {
      name: 'DNATA Melbourne',
      id: 'ENT-00001-S002',
      printed: 32500,
      limit: 50000,
      avgDaily: 165
    },
    {
      name: 'DNATA Brisbane',
      id: 'ENT-00001-S003',
      printed: 28040,
      limit: 40000,
      avgDaily: 143
    },
    {
      name: 'DNATA Perth',
      id: 'ENT-00001-S004',
      printed: 30000,
      limit: 40000,
      avgDaily: 153
    },
    {
      name: 'DNATA Adelaide',
      id: 'ENT-00001-S005',
      printed: 10000,
      limit: 20000,
      avgDaily: 51
    }
  ];

  // Alerts - MODIFY THIS ARRAY AS NEEDED
  alerts: Alert[] = [
    {
      type: 'warning',
      title: 'Sydney Approaching Limit',
      message: 'DNATA Sydney has used 92% of their 50,000 label tier. Consider upgrading or redistributing allocation.',
      icon: 'pi-exclamation-triangle'
    },
    {
      type: 'info',
      title: 'Tier Reset Coming',
      message: 'Your annual print tier will reset on June 1st, 2026. All counters will return to zero.',
      icon: 'pi-info-circle'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Calculate derived values on init
    this.calculateDerivedData();
  }

  // Calculate all derived data (percentages, status, etc.)
  private calculateDerivedData(): void {
    // Calculate enterprise tier percentage
    this.enterpriseTier.usagePercentage = Math.round(
      (this.enterpriseTier.totalPrinted / this.enterpriseTier.totalLimit) * 100
    );

    // Calculate status for each site
    this.sites = this.sites.map(site => ({
      ...site,
      status: this.calculateStatus(site.printed, site.limit)
    }));
  }

  // Calculate site status based on usage percentage
  private calculateStatus(printed: number, limit: number): 'good' | 'warning' | 'critical' {
    const percentage = (printed / limit) * 100;
    if (percentage >= 90) return 'critical';
    if (percentage >= 75) return 'warning';
    return 'good';
  }

  // Get percentage for a site
  getPercentage(site: Site): number {
    return Math.round((site.printed / site.limit) * 100);
  }

  // Get remaining labels for a site
  getRemaining(site: Site): number {
    return site.limit - site.printed;
  }

  // Get CSS class for site status badge
  getStatusClass(status: string): string {
    const classes: { [key: string]: string } = {
      'critical': 'status-critical',
      'warning': 'status-warning',
      'good': 'status-good'
    };
    return classes[status] || 'status-good';
  }

  // Get CSS class for alert background
  getAlertBgClass(type: string): string {
    return type === 'warning' ? 'bg-orange-50' : 'bg-emerald-50';
  }

  // Get CSS class for alert icon background
  getAlertIconClass(type: string): string {
    return type === 'warning' ? 'bg-orange-400' : 'bg-emerald-500';
  }

  // Get CSS class for alert border
  getAlertBorderClass(type: string): string {
    return type === 'warning' ? 'border-orange-400' : 'border-emerald-500';
  }

  // Get CSS class for alert title
  getAlertTitleClass(type: string): string {
    return type === 'warning' ? 'text-orange-600' : 'text-emerald-600';
  }

  // Simulate data update (optional - for testing dynamic updates)
  updateData(): void {
    // Example: Increment printed labels
    this.enterpriseTier.totalPrinted += 100;
    this.enterpriseTier.totalRemaining -= 100;

    // Update a random site
    const randomSite = this.sites[Math.floor(Math.random() * this.sites.length)];
    randomSite.printed += 50;

    // Recalculate derived data
    this.calculateDerivedData();
  }

  // Add new site dynamically
  addSite(site: Site): void {
    this.sites.push(site);
    this.calculateDerivedData();
  }

  // Remove site by id
  removeSite(siteId: string): void {
    this.sites = this.sites.filter(s => s.id !== siteId);
    this.calculateDerivedData();
  }

  // Update site data
  updateSite(siteId: string, updates: Partial<Site>): void {
    const siteIndex = this.sites.findIndex(s => s.id === siteId);
    if (siteIndex !== -1) {
      this.sites[siteIndex] = { ...this.sites[siteIndex], ...updates };
      this.calculateDerivedData();
    }
  }

  // Add alert
  addAlert(alert: Alert): void {
    this.alerts.push(alert);
  }

  // Remove alert by index
  removeAlert(index: number): void {
    this.alerts.splice(index, 1);
  }

}
