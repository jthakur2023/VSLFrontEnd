import { Component } from '@angular/core';
import { Listing } from 'src/app/models/Listing.model';
import { ListingService } from 'src/app/services/listing.service';
import { StorageService } from '../../_services/storage.service';


@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {

  currentUser: any;

  listing: Listing = {
    address: '',
    university: '',
    semester: '',
    rent: '',
  };
  submitted = false;

  constructor(private listingService: ListingService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }

  saveListing(): void {
    const data = {
      address: this.listing.address,
      university: this.listing.university,
      semester: this.listing.semester,
      rent: this.listing.rent,
      userid: this.currentUser.id
    };

    this.listingService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newListing(): void {
    this.submitted = false;
    this.listing = {
      address: '',
      university: '',
      semester: '',
      rent: '',
    };
  }

}