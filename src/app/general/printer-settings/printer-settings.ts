import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-printer-settings',
  imports: [CommonModule, FormsModule],
  templateUrl: './printer-settings.html',
  styleUrl: './printer-settings.css',
})
export class PrinterSettings {
  tier = {
    limit: 50000,
    used: 37000,
    percent: 74
  };

  printers: string[] = [
    'Zebra ZD621 - Kitchen Station 1',
    'Zebra ZD621 - Kitchen Station 2',
    'Zebra ZT411 - Main Production'
  ];

  labelSizes = [
    { label: '4" x 6" (Standard)', value: '4x6' },
    { label: '3" x 5" (Compact)', value: '3x5' },
    { label: '4" x 8" (Extended)', value: '4x8' }
  ];

  settings = {
    primaryPrinter: this.printers[0],
    backupPrinter: '',
    labelSize: '4x6'
  };

  testPrint() {
    console.log('Testing printer:', this.settings.primaryPrinter);
  }

  saveSettings() {
    console.log('Saving settings:', this.settings);
  }

}
