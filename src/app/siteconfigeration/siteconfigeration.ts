import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-siteconfigeration',
  standalone: true, // <-- must be standalone
  imports: [CommonModule, ReactiveFormsModule], // add ReactiveFormsModule here
  templateUrl: './siteconfigeration.html',
  styleUrls: ['./siteconfigeration.css'],
})
export class Siteconfigeration {
 form: FormGroup;
  isSaving = false;

  timezones = [
    'Australia/Sydney (UTC+11)',
    'Australia/Melbourne (UTC+11)',
    'Australia/Brisbane (UTC+10)',
    'Australia/Perth (UTC+8)',
  ];

  dateFormats = ['DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD'];

  languages = ['English', 'French', 'German', 'Spanish'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      siteName: ['', Validators.required],
      siteId: [{ value: 'ENT-00001-S001', disabled: true }],
      timezone: ['', Validators.required],
      dateFormat: ['', Validators.required],
      language: ['', Validators.required],
    });

    this.form.patchValue({
      siteName: 'DNATA Sydney',
      timezone: this.timezones[0],
      dateFormat: this.dateFormats[0],
      language: this.languages[0],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSave() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSaving = true;

    setTimeout(() => {
      console.log('Saved:', this.form.getRawValue());
      this.isSaving = false;
    }, 1500);
  }

  onCancel() {
    this.form.reset({
      siteName: 'DNATA Sydney',
      siteId: 'ENT-00001-S001',
      timezone: this.timezones[0],
      dateFormat: this.dateFormats[0],
      language: this.languages[0],
    });
  }

}
