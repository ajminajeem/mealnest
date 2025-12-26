import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface NutritionInfo {
   key: keyof NutritionInfo;
  calories: string;
  protein: string;
  carbs: string;
  fat: string;
  sodium: string;
  fiber: string;
}

interface AirlineInfo {
  code: string;
  name: string;
  route: string;
  flightNumber: string;
  serviceType: string;
}

interface HACCPInfo {
  reheating: string;
  safety: string;
  iddsi: string;
  temperature: string;
}

interface DietaryOption {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-create-dish',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-dish.html',
  styleUrl: './create-dish.css',
})
export class CreateDish {

   formData = {
    dishName: '',
    description: '',
    mealType: '',
    serviceClass: '',
    ingredients: '',
    dietaryTags: [] as string[],
    allergens: [] as string[],
    nutrition: {
      calories: '',
      protein: '',
      carbs: '',
      fat: '',
      sodium: '',
      fiber: ''
    } as NutritionInfo,
    airline: {
      code: '',
      name: '',
      route: '',
      flightNumber: '',
      serviceType: ''
    } as AirlineInfo,
    haccp: {
      reheating: '',
      safety: '',
      iddsi: '',
      temperature: ''
    } as HACCPInfo
  };

  dietaryOptions: DietaryOption[] = [
    { id: 'vegetarian', label: 'Vegetarian', icon: '🌿' },
    { id: 'vegan', label: 'Vegan', icon: '🌱' },
    { id: 'gluten-free', label: 'Gluten Free', icon: '🌾' },
    { id: 'dairy-free', label: 'Dairy Free', icon: '🧀' },
    { id: 'halal', label: 'Halal', icon: '☪️' },
    { id: 'kosher', label: 'Kosher', icon: '✡️' }
  ];

  allergenOptions: string[] = [
    'Peanuts', 'Tree Nuts', 'Dairy', 'Eggs', 'Fish',
    'Shellfish', 'Soy', 'Wheat/Gluten', 'Sesame'
  ];

nutritionFields: {
  key: keyof NutritionInfo;
  label: string;
  placeholder: string;
}[] = [
  { key: 'calories', label: 'Calories (kcal)', placeholder: '420' },
  { key: 'protein', label: 'Protein (g)', placeholder: '38' },
  { key: 'carbs', label: 'Carbohydrates (g)', placeholder: '22' },
  { key: 'fat', label: 'Fat (g)', placeholder: '18' },
  { key: 'sodium', label: 'Sodium (mg)', placeholder: '580' },
  { key: 'fiber', label: 'Fiber (g)', placeholder: '4' }
];

  toggleTag(tag: string, type: 'dietaryTags' | 'allergens'): void {
    const index = this.formData[type].indexOf(tag);
    if (index > -1) {
      this.formData[type].splice(index, 1);
    } else {
      this.formData[type].push(tag);
    }
  }

  getTagClass(tag: string, type: 'dietaryTags' | 'allergens'): string {
    const isSelected = this.formData[type].includes(tag);
    return `px-4 py-2 rounded-xl border-2 font-semibold text-sm transition-all ${
      isSelected
        ? 'bg-green-600 border-green-600 text-white'
        : 'bg-white border-gray-200 text-gray-700 hover:border-green-500 hover:bg-green-50'
    }`;
  }

  getDietaryLabel(id: string): string {
    const option = this.dietaryOptions.find(o => o.id === id);
    return option ? option.label : id;
  }

  createDish(): void {
    console.log('Creating dish:', this.formData);
    // Add your submission logic here
    alert('Dish created successfully!');
  }

}
