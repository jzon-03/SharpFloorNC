import { Component, OnInit } from '@angular/core';

import * as articles from '../../../assets/json/articles.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles = articles;
  selectedArticle: any;

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
          this.selectedArticle = this.findArticle("The Real Cost of Custom Software Development: Beyond Dollars and Cents");
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
