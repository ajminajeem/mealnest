import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-version-history',
  imports: [CommonModule],
  templateUrl: './version-history.html',
  styleUrl: './version-history.css',
})
export class VersionHistory {
   versions = [
    {
      number: 'Version 2.2',
      badge: 'Previous',
      author: 'John Smith',
      date: '28 Nov 2025',
      timeAgo: '14 days ago',
      changes: [
        'Updated nutrition information with more accurate protein content',
        'Modified cooking temperature to 165°C from 160°C',
        'Added "May contain traces of shellfish" to allergen warnings'
      ],
      stats: {
        batches: 28,
        labels: '2,340',
        period: '14 days'
      }
    },
    {
      number: 'Version 2.2',
      badge: 'Previous',
      author: 'John Smith',
      date: '28 Nov 2025',
      timeAgo: '14 days ago',
      changes: [
        'Updated nutrition information with more accurate protein content',
        'Modified cooking temperature to 165°C from 160°C',
        'Added "May contain traces of shellfish" to allergen warnings'
      ],
      stats: {
        batches: 28,
        labels: '2,340',
        period: '14 days'
      }
    },
    {
      number: 'Version 2.1',
      badge: 'Archived',
      author: 'Emily Davis',
      date: '14 Nov 2025',
      timeAgo: '28 days ago',
      changes: [
        'Updated portion size from 180g to 200g',
        'Changed packaging material to eco-friendly option',
        'Added preparation time to label'
      ],
      stats: {
        batches: 45,
        labels: '3,780',
        period: '21 days'
      }
    }
  ];

}
