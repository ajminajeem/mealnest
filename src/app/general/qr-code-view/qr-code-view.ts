import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

interface Tag {
  name: string;
  type: 'vegetarian' | 'gluten-free' | 'dairy-free' | 'halal' | 'allergen';
  icon: string;
}

interface Nutrition {
  label: string;
  value: string;
}

interface InstructionStep {
  step: number;
  text: string;
}

interface BatchItem {
  label: string;
  value: string;
}

interface Dish {
  title: string;
  subtitle: string;
  icon: string;
  version: string;
  tags: Tag[];
  allergens: string;
  ingredients: string;
  nutrition: Nutrition[];
  instructions: InstructionStep[];
  haccp: string[];
  batchInfo: BatchItem[];
}


@Component({
  selector: 'app-qr-code-view',
  imports: [CommonModule,FormsModule],
  templateUrl: './qr-code-view.html',
  styleUrl: './qr-code-view.css',
})
export class QrCodeView {
dish: Dish = {
    title: 'Grilled Salmon Fillet',
    subtitle: 'Business Class • Sydney → Singapore • Flight QF 81',
    icon: 'fish',
    version: '2.3',
    tags: [
      { name: 'Gluten Free', type: 'gluten-free', icon: 'wheat' },
      { name: 'Dairy Free', type: 'dairy-free', icon: 'cheese' }
    ],
    allergens: `<strong>Contains:</strong> Fish, Soy<br><strong>May contain traces of:</strong> Shellfish, Sesame`,
    ingredients: 'Atlantic Salmon (60%), Olive Oil, Lemon Juice, Garlic, Fresh Herbs, Sea Salt, Black Pepper, Asparagus, Potatoes, Tomatoes',
    nutrition: [
      { label: 'Calories', value: '420 kcal' },
      { label: 'Protein', value: '38g' },
      { label: 'Carbs', value: '22g' },
      { label: 'Fat', value: '18g' },
      { label: 'Sodium', value: '580mg' },
      { label: 'Fiber', value: '4g' },
    ],
    instructions: [
      { step: 1, text: 'Remove from refrigeration 10 minutes before heating' },
      { step: 2, text: 'Pierce film lid 3-4 times with a fork' },
      { step: 3, text: 'Heat in convection oven at 165°C (330°F) for 18-20 minutes' },
      { step: 4, text: 'Check internal temperature reaches minimum 75°C (167°F)' },
      { step: 5, text: 'Let stand for 1 minute before serving' },
    ],
    haccp: [
      'Storage Temperature: Keep refrigerated at 0-4°C (32-39°F)',
      'Use By Date: Within 48 hours of production',
      'IDDSI Level: Level 7 - Regular',
      'Critical Control Points: Temperature monitoring during cooking and cooling phases'
    ],
    batchInfo: [
      { label: 'Batch ID:', value: 'TAG-20251215-0087' },
      { label: 'Production Date:', value: '15 Dec 2025' },
      { label: 'Production Time:', value: '08:45 AM' },
      { label: 'Site:', value: 'DNATA Sydney' },
      { label: 'Supervisor:', value: 'John Smith' },
      { label: 'Shift:', value: 'Morning' },
    ]
  };
}
