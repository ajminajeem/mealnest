import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Breadcrumbs } from '../shared/components/breadcrumbs/breadcrumbs';
interface Dish {
  id: string;
  name: string;
  icon: string;
  class: string;
  route: string;
  version: string;
  tags: DishTag[];
  batches: number;
  labels: number;
  updated: string;
}

interface DishTag {
  label: string;
  type: 'vegetarian' | 'gluten-free' | 'dairy-free' | 'halal' | 'vegan';
}

@Component({
  selector: 'app-dishes',
  standalone: true,
  imports: [CommonModule, FormsModule,Breadcrumbs],
  templateUrl: './dishes.html',
  styleUrl: './dishes.css',
})
export class Dishes {
  searchQuery: string = '';
  selectedMealType: string = 'all';
  selectedClass: string = 'all';
  selectedDietary: string = 'all';
   breadcrumbs = [
    { label: 'Dashboard', link: '/dashboard' },
    { label: 'Dishes' },
  ];

  dishes: Dish[] = [
    {
      id: '1',
      name: 'Grilled Salmon Fillet',
      icon: 'fas fa-fish',
      class: 'Business Class',
      route: 'Sydney → Singapore',
      version: 'v2.3',
      tags: [
        { label: 'Gluten Free', type: 'gluten-free' },
        { label: 'Dairy Free', type: 'dairy-free' }
      ],
      batches: 34,
      labels: 2847,
      updated: '2d ago'
    },
    {
      id: '2',
      name: 'Vegetarian Curry Bowl',
      icon: 'fas fa-leaf',
      class: 'Economy',
      route: 'Melbourne → Dubai',
      version: 'v1.8',
      tags: [
        { label: 'Vegetarian', type: 'vegetarian' },
        { label: 'Gluten Free', type: 'gluten-free' },
        { label: 'Halal', type: 'halal' }
      ],
      batches: 28,
      labels: 1920,
      updated: '1w ago'
    },
    {
      id: '3',
      name: 'Beef Tenderloin',
      icon: 'fas fa-drumstick-bite',
      class: 'First Class',
      route: 'Perth → London',
      version: 'v3.1',
      tags: [
        { label: 'Gluten Free', type: 'gluten-free' }
      ],
      batches: 52,
      labels: 4156,
      updated: '3d ago'
    },
    {
      id: '4',
      name: 'Chicken Caesar Salad',
      icon: 'fas fa-salad',
      class: 'Business Class',
      route: 'Brisbane → Tokyo',
      version: 'v1.5',
      tags: [
        { label: 'Gluten Free', type: 'gluten-free' }
      ],
      batches: 19,
      labels: 1543,
      updated: '5d ago'
    },
    {
      id: '5',
      name: 'Pasta Primavera',
      icon: 'fas fa-pizza-slice',
      class: 'Economy',
      route: 'Adelaide → Bangkok',
      version: 'v2.0',
      tags: [
        { label: 'Vegetarian', type: 'vegetarian' }
      ],
      batches: 15,
      labels: 987,
      updated: '1w ago'
    },
    {
      id: '6',
      name: 'Gourmet Burger',
      icon: 'fas fa-burger',
      class: 'Business Class',
      route: 'Darwin → Hong Kong',
      version: 'v1.2',
      tags: [
        { label: 'Halal', type: 'halal' }
      ],
      batches: 22,
      labels: 1765,
      updated: '4d ago'
    }
  ];

  onCreateNewDish() {
    console.log('Create new dish');
  }

  onEditDish(dish: Dish) {
    console.log('Edit dish:', dish);
  }

  onViewHistory(dish: Dish) {
    console.log('View history:', dish);
  }

  onPrintLabels(dish: Dish) {
    console.log('Print labels:', dish);
  }

  onShowQRCode(dish: Dish) {
    console.log('Show QR code:', dish);
  }

  onFilter() {
    console.log('Filter dishes');
  }

  getTagClass(type: string): string {
    const classes: { [key: string]: string } = {
      'vegetarian': 'bg-emerald-100 text-emerald-600',
      'gluten-free': 'bg-orange-100 text-orange-500',
      'dairy-free': 'bg-blue-100 text-blue-600',
      'halal': 'bg-emerald-50 text-emerald-700',
      'vegan': 'bg-green-100 text-green-600'
    };
    return classes[type] || 'bg-gray-100 text-gray-600';
  }
}
