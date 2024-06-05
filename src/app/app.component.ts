import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from './service/data.service';
import { CommentService } from './service/comment.service';
interface Event {
  eventName: string;
  cityName: string;
  date: string;
  weather: string;
  distanceKm: string;
  imgUrl: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-example';
  event1: Event[] = [];
  event2: Event[] = [];
  errorMessage!: string;
  constructor(private data_service: DataService, private comment_service: CommentService) {
    
  }
  ngOnInit() {
    this.data_service.getAllEvents().subscribe({
      next: (event1) => {
        for(var i=0;i<event1.length;i++)
          {
            var  tempUrl= event1[i].imgUrl; 
            var id = "https://drive.google.com/thumbnail?id=";
            id =id+ tempUrl.split('/')[tempUrl.split('/').length-2] ;
            event1[i].imgUrl=id;
          }
        this.event1 = event1;
        console.log(this.event1);
      },
      error: (error) => {
        this.errorMessage = error;
      },
      
    });
    this.comment_service.getAllEvents().subscribe({
      next: (event2) => {
        for(var i=0;i<event2.length;i++)
          {
            var  tempUrl= event2[i].imgUrl; 
            var id = "https://drive.google.com/thumbnail?id=";
            id =id+ tempUrl.split('/')[tempUrl.split('/').length-2] ;
            event2[i].imgUrl=id;
          }
        this.event2 = event2;
        console.log(this.event2);
      },
      error: (error) => {
        this.errorMessage = error;
      },
      
    });
    
  }
  
}
