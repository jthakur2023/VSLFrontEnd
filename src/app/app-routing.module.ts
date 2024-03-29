import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { ListingsListComponent } from './myListing components/listings-list/listings-list.component';
import {  ListingDetailsComponent } from './myListing components/listing-details/listing-details.component';
import { AddListingComponent } from './myListing components/add-listing/add-listing.component';
import { AllListingsComponent } from './all-listings/all-listings.component';
import { CommentsComponent } from './comments/comments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

const routes: Routes = [
  // {path: '', component: AppLayoutComponent,
  //               children: [
  //                 { path: 'allListings', component: AllListingsComponent },
  //               ]
  // },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'allListings', component: AllListingsComponent },
  { path: 'listings', component: ListingsListComponent },
  { path: 'listings/:id', component:  ListingDetailsComponent },
  { path: 'add', component: AddListingComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
