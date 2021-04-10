import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SuggService } from '../sugg.service';

@Component({
  selector: 'app-viewrev',
  templateUrl: './viewrev.component.html',
  styleUrls: ['./viewrev.component.css']
})
export class ViewrevComponent implements OnInit {
  suggests=[{
    name:'',
    year:'',
    language:'',
    genre:''  
  }]
  constructor(private suggReview:SuggService,private router:Router) { }


  ngOnInit(): void {
    console.log("working");
    this.suggReview.getSuggests().subscribe((data)=>{
      this.suggests=JSON.parse(JSON.stringify(data));
    })
  }

}
