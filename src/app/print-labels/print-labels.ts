import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Breadcrumbs } from '../shared/components/breadcrumbs/breadcrumbs';

interface Batch {
  id: string;
  name: string;
  productionDate: string;
  supervisor: string;
  version: string;
  site: string;
  allergens: string[];
  tags: string[];
  reheatInstructions: string;
  logo: string;
}

interface Printer {
  id: string;
  name: string;
  location: string;
}

interface PrintTier {
  used: number;
  total: number;
  percentage: number;
}


@Component({
  selector: 'app-print-labels',
 imports: [CommonModule, FormsModule, Breadcrumbs],

  templateUrl: './print-labels.html',
  styleUrl: './print-labels.css',
})
export class PrintLabels {
  selectedSize = '4×6"';
  quantity = 250;
  selectedBatchId = '';
  selectedPrinterId = '';
  currentBatch: Batch | null = null;
   breadcrumbs = [
    { label: 'Dashboard', link: '/dashboard' },
  
    { label: 'Print Labels' },
  ];
  

  sizes = ['3×5"', '4×6"', '4×8"'];
  
  batches: Batch[] = [
    {
      id: 'TAG-20251215-0087',
      name: 'Grilled Salmon Fillet',
      productionDate: '15 Dec 2025, 08:45',
      supervisor: 'John Smith',
      version: '2.3',
      site: 'DNATA Sydney',
      allergens: ['Fish', 'Soy'],
      tags: ['Gluten Free', 'Dairy Free', 'Business Class'],
      reheatInstructions: '165°C (330°F) for 18-20 min',
      logo: 'QANTAS'
    },
    {
      id: 'TAG-20251215-0086',
      name: 'Vegetarian Curry Bowl',
      productionDate: '15 Dec 2025, 10:30',
      supervisor: 'Sarah Johnson',
      version: '1.8',
      site: 'DNATA Melbourne',
      allergens: ['Nuts', 'Coconut'],
      tags: ['Vegan', 'Gluten Free', 'Economy Class'],
      reheatInstructions: '170°C (340°F) for 15-18 min',
      logo: 'QANTAS'
    },
    {
      id: 'TAG-20251214-0085',
      name: 'Beef Tenderloin',
      productionDate: '14 Dec 2025, 14:20',
      supervisor: 'Michael Chen',
      version: '3.1',
      site: 'DNATA Brisbane',
      allergens: ['Dairy', 'Garlic'],
      tags: ['Premium', 'First Class'],
      reheatInstructions: '180°C (355°F) for 22-25 min',
      logo: 'QANTAS'
    },
    {
      id: 'TAG-20251214-0084',
      name: 'Mediterranean Pasta',
      productionDate: '14 Dec 2025, 09:15',
      supervisor: 'Emma Wilson',
      version: '2.0',
      site: 'DNATA Perth',
      allergens: ['Gluten', 'Dairy', 'Eggs'],
      tags: ['Vegetarian', 'Business Class'],
      reheatInstructions: '160°C (320°F) for 16-18 min',
      logo: 'QANTAS'
    },
    {
      id: 'TAG-20251213-0083',
      name: 'Thai Green Curry Chicken',
      productionDate: '13 Dec 2025, 11:45',
      supervisor: 'David Lee',
      version: '1.5',
      site: 'DNATA Sydney',
      allergens: ['Fish Sauce', 'Nuts'],
      tags: ['Gluten Free', 'Premium', 'Business Class'],
      reheatInstructions: '175°C (345°F) for 20-22 min',
      logo: 'QANTAS'
    }
  ];

  printers: Printer[] = [
    { id: 'P001', name: 'Zebra ZD621', location: 'Kitchen Station 1' },
    { id: 'P002', name: 'Zebra ZD621', location: 'Kitchen Station 2' },
    { id: 'P003', name: 'Zebra ZT411', location: 'Main Production' },
    { id: 'P004', name: 'Zebra ZD420', location: 'Packaging Area' },
    { id: 'P005', name: 'Zebra ZT510', location: 'Quality Control' }
  ];

  printTier: PrintTier = {
    used: 37000,
    total: 50000,
    percentage: 74
  };

  ngOnInit(): void {
    // Initialize with first batch
    if (this.batches.length > 0) {
      this.selectedBatchId = this.batches[0].id;
      this.onBatchChange();
    }
    
    // Initialize with first printer
    if (this.printers.length > 0) {
      this.selectedPrinterId = this.printers[0].id;
    }
  }

  onBatchChange(): void {
    this.currentBatch = this.batches.find(b => b.id === this.selectedBatchId) || null;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity = Math.max(1, this.quantity - 10);
    }
  }

  increaseQuantity(): void {
    this.quantity += 10;
  }

  validateQuantity(): void {
    if (this.quantity < 1 || isNaN(this.quantity)) {
      this.quantity = 1;
    }
  }

  formatDate(dateStr: string): string {
    // Simple formatter - you can enhance this based on your needs
    return dateStr.split(',')[0];
  }

  downloadPDF(): void {
    if (!this.currentBatch) {
      alert('Please select a batch first');
      return;
    }
    
    console.log('Downloading PDF preview for:', this.currentBatch.name);
    alert(`PDF Preview for ${this.currentBatch.name} will be downloaded`);
    
    // Implement actual PDF generation/download logic here
    // Example: call your PDF service
    // this.pdfService.generateLabelPDF(this.currentBatch, this.quantity);
  }

  exportZPL(): void {
    if (!this.currentBatch) {
      alert('Please select a batch first');
      return;
    }
    
    const zplCode = this.generateZPLCode();
    console.log('ZPL Code:', zplCode);
    
    // Create blob and download
    const blob = new Blob([zplCode], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${this.currentBatch.id}_label.zpl`;
    link.click();
    window.URL.revokeObjectURL(url);
  }

  generateZPLCode(): string {
    if (!this.currentBatch) return '';
    
    // Basic ZPL template - customize based on your needs
    return `^XA
^FO50,50^A0N,40,40^FD${this.currentBatch.logo}^FS
^FO50,120^A0N,60,60^FD${this.currentBatch.name}^FS
^FO50,200^A0N,30,30^FDBatch: ${this.currentBatch.id}^FS
^FO50,250^A0N,30,30^FDProduction: ${this.currentBatch.productionDate}^FS
^FO50,300^A0N,30,30^FDVersion: ${this.currentBatch.version}^FS
^FO50,350^A0N,30,30^FDSite: ${this.currentBatch.site}^FS
^FO500,100^BQN,2,8^FDQA,${this.currentBatch.id}^FS
^XZ`;
  }

  printLabels(): void {
    if (!this.currentBatch) {
      alert('Please select a batch first');
      return;
    }
    
    const selectedPrinter = this.printers.find(p => p.id === this.selectedPrinterId);
    
    const printData = {
      batch: this.currentBatch,
      printer: selectedPrinter,
      quantity: this.quantity,
      size: this.selectedSize,
      timestamp: new Date().toISOString()
    };
    
    console.log('Print Job:', printData);
    alert(`Printing ${this.quantity} labels for "${this.currentBatch.name}" on ${selectedPrinter?.name} - ${selectedPrinter?.location}`);
    
    // Implement actual print logic here
    // Example: call your print service
    // this.printService.sendToPrinter(printData);
    
    // Update print tier usage
    this.updatePrintTierUsage(this.quantity);
  }

  updatePrintTierUsage(labelCount: number): void {
    this.printTier.used += labelCount;
    this.printTier.percentage = Math.round((this.printTier.used / this.printTier.total) * 100);
    
    if (this.printTier.used > this.printTier.total) {
      alert('Warning: Print tier limit exceeded!');
    }
  }


}
