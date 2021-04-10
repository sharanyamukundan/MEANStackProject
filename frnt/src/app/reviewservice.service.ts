import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReviewserviceService {
  item ={
    filmName:'',
     filmYear:'',
     filmLanguage:'',
     filmGenre:'',
     filmRating:'',
     filmDesc:'',
     filmImage:''

  }
  constructor(private http:HttpClient) { }
  getReview(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  
  newReview(item:any){
    console.log("service working!!");
    return this.http.post("http://localhost:3000/insert",{"review":item})
    .subscribe(data =>{console.log(data)});
  }
  getReviews(){
    console.log("getting reviews");
    return this.http.get("http://localhost:3000/reviews");
  }
  getMalReviews(){
    console.log("getting reviews");
    return this.http.get("http://localhost:3000/malreviews");
  }
  editReview(review:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/update",review)
    .subscribe(data =>{console.log(data)})
  }
  deleteReview(id:any)
  {

    return this.http.delete("http://localhost:3000/remove/"+id)

  }
}
