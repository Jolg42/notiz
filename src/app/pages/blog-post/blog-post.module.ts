import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogPostComponent } from './blog-post.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '@components/components.module';
import { NewsletterSignupModule } from 'src/app/components/newsletter-signup/newsletter-signup.module';
import { BreadcrumbModule } from '@components/breadcrumb/breadcrumb.module';
import { ArticleModule } from '@components/article/article.module';
import { TableOfContentsModule } from '@notiz/ngx-design';
import { CommentsModule } from '@components/comments/comments.module';

@NgModule({
  declarations: [BlogPostComponent],
  imports: [
    CommonModule,
    ScullyLibModule,
    IonicModule,
    ComponentsModule,
    NewsletterSignupModule,
    BreadcrumbModule,
    ArticleModule,
    TableOfContentsModule,
    CommentsModule
  ],
})
export class BlogPostModule {}
