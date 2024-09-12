import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-addflavour',
  templateUrl: './addflavour.component.html',
  styleUrl: './addflavour.component.css'
})
export class AddflavourComponent {
  logout():void{

  }
  constructor(private http: HttpClient) { }


  onImageSelected(event: any) {
    const files: FileList = event.target.files;
    const formData = new FormData();

    // Handle selected image files
    for (let i = 0; i < files.length; i++) {
      const file: File = files[i];
      console.log('Selected image:', file);
      formData.append('image', file);
    }

    // Get text field values
    const flavourid = (document.querySelector('input[name="flavour_id"]')as HTMLInputElement).value;
    const flavourName = (document.querySelector('input[name="flavour_name"]') as HTMLInputElement).value;
    const flavourPrice = (document.querySelector('input[name="flavour_price"]') as HTMLInputElement).value;

    // Append text field values to form data
    formData.append('flavour_id', flavourid);
    formData.append('flavour_name', flavourName);
    formData.append('flavour_price', flavourPrice);

    // Send HTTP request to upload image
    this.http.post('http://localhost:5000/upload-image', formData).subscribe(response => {
      console.log('Upload response:', response);
      // Handle response as needed
    });
  }
}