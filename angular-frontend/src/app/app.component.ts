// src/app/app.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  selectedFile: File | undefined;  // Declare selectedFile property

  constructor(private http: HttpClient) {}

  fetchData() {
    this.http.get('http://localhost:3000/api/data').subscribe((data) => {
      console.log('Data from backend:', data);
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);

      this.http.post('http://localhost:4000/api/upload', formData).subscribe((response) => {
        console.log('Image upload response:', response);
      });
    } else {
      console.error('No file selected.');
    }
  }
}
