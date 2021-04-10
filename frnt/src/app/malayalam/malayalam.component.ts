import { Component, OnInit } from '@angular/core';
import { ReviewserviceService } from '../reviewservice.service';

@Component({
  selector: 'app-malayalam',
  templateUrl: './malayalam.component.html',
  styleUrls: ['./malayalam.component.css']
})
export class MalayalamComponent implements OnInit {
  reviews=[{
    filmName :'',
    filmYear:'',
    filmLanguage:'',
    filmGenre:'',
    filmRating:'',
    filmDesc:'',
    filmImage:''
  }];
  constructor(private reviewService:ReviewserviceService) { }

  ngOnInit(): void {
    this.reviewService.getMalReviews().subscribe((data)=>{
      this.reviews=JSON.parse(JSON.stringify(data));
  console.log(this.reviews);

  })
  }

}
