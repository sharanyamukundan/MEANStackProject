import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ReviewserviceService } from '../reviewservice.service';

@Component({
  selector: 'app-addrev',
  templateUrl: './addrev.component.html',
  styleUrls: ['./addrev.component.css']
})
export class AddrevComponent implements OnInit {

  constructor(private reviewService: ReviewserviceService,private router:Router) { }
   movieItem={
     filmName:'',
     filmYear:'',
     filmLanguage:'',
     filmGenre:'',
     filmRating:'',
     filmDesc:'',
     filmImage:''

   }
  ngOnInit(): void {
  }
  AddReview(){
    this.reviewService.newReview(this.movieItem);
    console.log("called");
    this.router.navigate(['/rev']);
  }
  

}
