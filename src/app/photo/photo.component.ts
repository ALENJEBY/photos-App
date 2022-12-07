import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor() { }

  albumId=""
  Id=""
  title=""
  thumbnailUrl=""


  ngOnInit(): void {
  }

  read=()=>{
    let data={

      "albumId":this.albumId,
      "Id":this.Id,
      "title":this.title,
      "thumbnailUrl":this.thumbnailUrl
    }
    console.log(data)
  }

}
