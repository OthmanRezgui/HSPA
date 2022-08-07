import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
})
export class PropertyDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private housingService : HousingService) {}
  property = new Property();
  public propertyId: number;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit() {
    this.propertyId = this.route.snapshot.params['id'];
this.route.data.subscribe(
  (data : any) =>
  this.property = data['prp']
);

this.galleryOptions = [
  {
    width: '100%',
    height: '465px',
    thumbnailsColumns: 4,
    imageAnimation: NgxGalleryAnimation.Slide,
    preview: true
  }
];

this.galleryImages = [
  {
    small: 'assets/Images/Image1.jpg',
    medium: 'assets/Images/Image1.jpg',
    big: 'assets/Images/Image1.jpg'
  },
  {
    small: 'assets/Images/Image2.jpg',
    medium: 'assets/Images/Image2.jpg',
    big: 'assets/Images/Image2.jpg'
  },
  {
    small: 'assets/Images/Image3.jpg',
    medium: 'assets/Images/Image3.jpg',
    big: 'assets/Images/Image3.jpg'
  }, {
    small: 'assets/Images/Image4.jpg',
    medium: 'assets/Images/Image4.jpg',
    big: 'assets/Images/Image4.jpg'
  }
];
    // this.route.params.subscribe((params) => {
    //   this.propertyId = +params['id'];
    //   this.housingService.getProperty(this.propertyId).subscribe(
    //     (data : any) =>
    //     {
    //       this.property = data;
    //     },
    //     error => this.router.navigate(['/'])
    //   )
    // });
  }

}
