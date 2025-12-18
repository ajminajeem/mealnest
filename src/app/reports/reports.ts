import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface ReportCard {
  id: number;
  icon: string;
  title: string;
  description: string;
  lastGenerated: string;
  iconBgClass: string;
  iconColorClass: string;
}

interface StatCard {
  icon: string;
  value: string;
  label: string;
}

@Component({
  selector: 'app-reports',
  imports: [CommonModule, FormsModule],
  templateUrl: './reports.html',
  styleUrl: './reports.css',
})
export class Reports {
   selectedSite: string = 'all';
  selectedPeriod: string = 'last7days';
  fromDate: string = '2025-12-01';
  toDate: string = '2025-12-15';

  sites: Array<{ value: string; label: string }> = [
    { value: 'all', label: 'All Sites' },
    { value: 'sydney', label: 'DNATA Sydney' },
    { value: 'melbourne', label: 'DNATA Melbourne' },
    { value: 'brisbane', label: 'DNATA Brisbane' },
    { value: 'perth', label: 'DNATA Perth' }
  ];

  periods: Array<{ value: string; label: string }> = [
    { value: 'last7days', label: 'Last 7 Days' },
    { value: 'last30days', label: 'Last 30 Days' },
    { value: 'lastquarter', label: 'Last Quarter' },
    { value: 'lastyear', label: 'Last Year' },
    { value: 'custom', label: 'Custom Range' }
  ];

  quickStats: StatCard[] = [
    { icon: 'fas fa-file-alt', value: '24', label: 'Total Reports' },
    { icon: 'fas fa-download', value: '156', label: 'Downloads This Month' },
    { icon: 'fas fa-calendar', value: '8', label: 'Scheduled Reports' },
    { icon: 'fas fa-clock', value: '2 hrs', label: 'Avg. Processing Time' }
  ];

  reports: ReportCard[] = [
    {
      id: 1,
      icon: 'fas fa-print',
      title: 'Batch Print Log',
      description: 'Complete log of all batch printing activities including timestamps, users, and label counts',
      lastGenerated: 'Today',
      iconBgClass: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
      iconColorClass: 'text-emerald-600'
    },
    {
      id: 2,
      icon: 'fas fa-utensils',
      title: 'Dish Usage Report',
      description: 'Analysis of dish popularity, batch frequency, and label volumes per dish type',
      lastGenerated: 'Yesterday',
      iconBgClass: 'bg-gradient-to-br from-green-50 to-green-100',
      iconColorClass: 'text-green-700'
    },
    {
      id: 3,
      icon: 'fas fa-user-clock',
      title: 'User Activity Report',
      description: 'Track user actions, login times, batch creations, and system interactions by role',
      lastGenerated: '2 days ago',
      iconBgClass: 'bg-gradient-to-br from-blue-50 to-blue-100',
      iconColorClass: 'text-blue-600'
    },
    {
      id: 4,
      icon: 'fas fa-database',
      title: 'Dish Master Export',
      description: 'Complete database export of all dishes with versions, ingredients, and metadata',
      lastGenerated: '3 days ago',
      iconBgClass: 'bg-gradient-to-br from-orange-50 to-orange-100',
      iconColorClass: 'text-orange-600'
    },
    {
      id: 5,
      icon: 'fas fa-chart-pie',
      title: 'Print Tier Usage',
      description: 'Monitor label printing against tier limits with site-by-site breakdowns and alerts',
      lastGenerated: 'Today',
      iconBgClass: 'bg-gradient-to-br from-teal-50 to-teal-100',
      iconColorClass: 'text-teal-700'
    },
    {
      id: 6,
      icon: 'fas fa-bell',
      title: 'Alerts & Notifications',
      description: 'Summary of all system alerts including tier warnings and critical notifications',
      lastGenerated: 'Today',
      iconBgClass: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
      iconColorClass: 'text-emerald-600'
    }
  ];

  ngOnInit(): void {
    // Initialize component
  }

  updateFilters(): void {
    console.log('Filters updated:', {
      site: this.selectedSite,
      period: this.selectedPeriod,
      fromDate: this.fromDate,
      toDate: this.toDate
    });
    // Add your filter update logic here
  }

  downloadReport(report: ReportCard): void {
    console.log('Downloading report:', report.title);
    // Add your download logic here
  }


}
