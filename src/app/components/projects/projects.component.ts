import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  project_title_text = "Dakota's Projects";

  block_a = {
    title_text: "Category 1",
    place: 0,
    cards:[
      {
        title: "Card A",
        content: "Card A Content"
      },
      {
        title: "Card B",
        content: "Card B Content"
      },
      {
        title: "Card C",
        content: "Card C Content"
      },
      {
        title: "Card D",
        content: "Card D Content"
      }
    ]
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  scrollBlock(block:string, direction:string){
    if(block == "A"){
      if(direction == "right"){

      }
    }
  }

}
