import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  list:Recipe[] = [
    {id:1,
    name:"לחמניות כוסמין",
    author:"אמא",
    categories:["מאפים בריאים","לחמים"],
    ingredients:["קילו קמח כוסמין לבן","כף שטוחה מלח","חצי כוס סוכר","3 כפות שמרים","2.5 כוסות מים","חצי כוס שמן"],
    Preparation:["מניחים את החומרים בקערה מערבבים 10 דקות נותנים לבצק לנוח 10 דקות אחרי כן מערבבים שוב ל10 דקות ומניחים להתפחה","אחרי התפחה של כשעתיים ניתן ליצור צורות של לחמניות","לאפות כרבע שעה על חום של 190 מעלות"],
    picture_link:"C:\Users\Ruti\Desktop\לימודים\cooking book\cooking-book\src\assets\KRT_0726-764x512.jpg"
  }
  ]
  
  ngOnInit() {
  }



}
class Recipe{
  id:number
  name:string;
  categories:string[];
  picture_link:string;
  ingredients: string[];
  Preparation: string[];
  author:string;
}