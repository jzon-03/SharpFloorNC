import { Component, OnInit } from '@angular/core';

import * as articles from '../../../assets/json/articles.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles',
  standalone: false,
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles = articles;
  selectedArticle: any;
  articleTitles: string[] = [
    'The Real Cost of Custom Software Development: Beyond Dollars and Cents',
    'The Advantages of Custom Manufacturing Execution System Software for Manufacturing Companies',
    'Embracing Software Customization: The Key to Manufacturing Companies\' Success',
    'The Perils of Poor Implementation: Why Manufacturing Companies Fail in Digital Transformation'
  ];

  constructor(
    private _activatedRoute: ActivatedRoute
  ){}

  articleItem = new Promise((resolve, reject)=>{
    this._activatedRoute.queryParams.subscribe({
      next:(data)=>{
        this.selectedArticle = this.findArticle(data['a']);
        if (this.selectedArticle){
          resolve(data['a']);
        }else{
          this.selectedArticle = this.findArticle("Embracing Software Customization: The Key to Manufacturing Companies' Success");
        }
      }
    })
  })

  private findArticle(title: string){
    return this.articles.articles.find(art => art.title == title);
  }

  ngOnInit(): void {

  }
}
