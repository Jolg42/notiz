import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { SeoService } from '@services/seo.service';
import { ScullyContentService } from '@services/scully-content.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogPosts$: Observable<ScullyRoute[]>;
  tags$: Observable<ScullyRoute[]>;

  constructor(
    private scullyContentService: ScullyContentService,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.seo.generateTags({ title: 'notiz blog' });

    this.blogPosts$ = this.scullyContentService.blogPosts();
    this.tags$ = this.scullyContentService.tags();
  }
}
