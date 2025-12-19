import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feature-configeration',
  imports: [CommonModule, FormsModule],
  templateUrl: './feature-configeration.html',
  styleUrl: './feature-configeration.css',
})
export class FeatureConfigeration {
   features = [
    {
      key: 'dishVersioning',
      label: 'Dish Versioning',
      description: 'Allow creating and managing multiple versions of dishes',
      enabled: true
    },
    {
      key: 'archiveRestore',
      label: 'Archive & Restore',
      description: 'Enable archiving old batches and restoring them when needed',
      enabled: true
    },
    {
      key: 'multiSite',
      label: 'Multi-Site Mode',
      description: 'Allow viewing and managing data across multiple sites',
      enabled: false
    },
    {
      key: 'sharedLibraries',
      label: 'Shared Libraries',
      description: 'Share dish libraries between sites in the same enterprise',
      enabled: false
    },
    {
      key: 'emailNotifications',
      label: 'Email Notifications',
      description: 'Receive email alerts for tier limits and system updates',
      enabled: true
    }
  ];

  save() {
    const payload = this.features.reduce((acc, f) => {
      acc[f.key] = f.enabled;
      return acc;
    }, {} as any);

    console.log('Saving features:', payload);
    // send payload to API
  }
  saveSettings() {
    console.log('Saving settings:', this.features);
  }

}
