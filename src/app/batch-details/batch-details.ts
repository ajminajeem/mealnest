import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DishInfo {
  name: string;
  icon: string;
  class: string;
  route: string;
  version: string;
  tags: string[];
}

interface ProductionInfo {
  date: string;
  time: string;
  supervisor: string;
  shift: string;
  location: string;
  enterprise: string;
}

interface SafetyItem {
  label: string;
  status: string;
}

interface PrintEvent {
  type: string;
  count: number;
  date: string;
  user: string;
  printer: string;
}

interface Statistic {
  label: string;
  value: number;
}

interface BatchData {
  batchId: string;
  status: string;
  dish: DishInfo;
  production: ProductionInfo;
  safety: SafetyItem[];
  printHistory: PrintEvent[];
  statistics: Statistic[];
}

@Component({
  selector: 'app-batch-details',
  imports: [CommonModule],
  templateUrl: './batch-details.html',
  styleUrl: './batch-details.css',
})
export class BatchDetails {
 batchData = {
batchId: 'TAG-20251215-0087',
status: 'Active',
dish: {
name: 'Grilled Salmon Fillet',
icon: 'fas fa-fish',
class: 'Business Class',
route: 'Sydney → Singapore',
version: '2.3',
tags: ['Gluten Free', 'Dairy Free']
},
production: {
date: '15 December 2025',
time: '08:45 AM',
supervisor: 'John Smith',
shift: 'Morning Shift',
location: 'DNATA Sydney',
enterprise: 'DNATA (ENT-00001)'
},
safety: [
{ label: 'Temperature Checks', status: 'Verified' },
{ label: 'Equipment Sanitization', status: 'Confirmed' },
{ label: 'Ingredient Expiration', status: 'Valid' },
{ label: 'Allergen Controls', status: 'Implemented' }
],
printHistory: [
{
type: 'Initial Print',
count: 245,
date: '15 Dec 2025, 08:52 AM',
user: 'John Smith',
printer: 'Zebra ZD621'
},
{
type: 'Reprint',
count: 25,
date: '15 Dec 2025, 10:15 AM',
user: 'Sarah Johnson',
printer: 'Zebra ZD621'
},
{
type: 'Reprint',
count: 15,
date: '15 Dec 2025, 02:30 PM',
user: 'Michael Chen',
printer: 'Zebra ZT411'
}
],
statistics: [
{ label: 'Total Labels Printed', value: 285 },
{ label: 'Print Events', value: 3 },
{ label: 'Days Active', value: 7 },
{ label: 'QR Scans', value: 142 }
]
};

  onExport(): void {
console.log('Exporting batch data...');
// Implement export functionality
}
onReprint(): void {
console.log('Reprinting labels...');
// Implement reprint functionality
}
onDownloadQR(): void {
console.log('Downloading QR code...');
// Implement QR download functionality
}

}
