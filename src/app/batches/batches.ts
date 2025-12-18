import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Breadcrumbs } from '../shared/components/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-batch-creation',
  standalone: true,  
  imports: [
    CommonModule,     // <-- THIS IS REQUIRED FOR ngClass/ngIf/ngFor
    FormsModule,
    Breadcrumbs
  ],
  templateUrl: './batches.html',
  styleUrls: ['./batches.css']
})
export class Batches {
currentStep = 1; 

  steps = [
    { label: 'Select Dish' },
    { label: 'Batch Details' },
    { label: 'Safety Check' },
    { label: 'Generate Labels' }
  ];
 breadcrumbs = [
    { label: 'Dashboard', link: '/dashboard' },
    { label: 'Batches',link: '/batches' },
    { label: 'Create New Batch' },
  ];
  batchId = 'TAG-20251215-0088';
  productionDate: Date = new Date(2025, 11, 15);
  labelQuantity = 250;
  selectedSupervisor = 'john_smith';
  selectedShift = 'morning';
  notes = '';
  selectedPrinter = 'zebra_1';
  selectedLabelSize = 'standard';

safetyChecks: { [key: string]: boolean } = {
  temperature: false,
  sanitized: false,
  expiration: false,
  allergen: false
};


  safetyCheckList = [
    { key: 'temperature', label: 'All temperature checks completed' },
    { key: 'sanitized', label: 'Equipment sanitized' },
    { key: 'expiration', label: 'Ingredients within expiration dates' },
    { key: 'allergen', label: 'Allergen controls implemented' }
  ];

  supervisors = [
    { name: 'John Smith', value: 'john_smith' },
    { name: 'Sarah Johnson', value: 'sarah_johnson' },
    { name: 'Michael Chen', value: 'michael_chen' }
  ];

  shifts = [
    { name: 'Morning Shift', value: 'morning' },
    { name: 'Evening Shift', value: 'evening' },
    { name: 'Night Shift', value: 'night' }
  ];

  printers = [
    { name: 'Zebra 1', value: 'zebra_1' },
    { name: 'Zebra 2', value: 'zebra_2' }
  ];

  labelSizes = [
    { name: 'Standard', value: 'standard' },
    { name: 'Compact', value: 'compact' }
  ];

 goToStep(step: number) {
    this.currentStep = step;
  }

  nextStep() {
    if (this.currentStep < 4) this.currentStep++;
  }

  prevStep() {
    if (this.currentStep > 1) this.currentStep--;
  }

  get allChecksCompleted(): boolean {
    return Object.values(this.safetyChecks).every(check => check);
  }


  generateLabels() {
    console.log('Generating labels', this.getFormData());
  }

  getFormData() {
    return {
      batchId: this.batchId,
      productionDate: this.productionDate,
      labelQuantity: this.labelQuantity,
      supervisor: this.selectedSupervisor,
      shift: this.selectedShift,
      notes: this.notes,
      printer: this.selectedPrinter,
      labelSize: this.selectedLabelSize,
      safetyChecks: this.safetyChecks
    };
  }
}
