import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {EffectsModule} from '@ngrx/effects'
import {RouterModule} from '@angular/router'
import {StoreModule} from '@ngrx/store'

import {reducers} from 'src/app/article/store/reducers'
import {ErrorMessageModule} from 'src/app/shared/modules/errorMessage/errorMessage.module'
import {LoadingModule} from 'src/app/shared/modules/loading/loading.module'
import {ArticleService as SharedArticleService} from '../shared/services/article.service'
import { GetArticleEffect } from 'src/app/article/store/effects/getArticle.effect'
import { ArticleComponent } from './components/article/article.component'
import { TagListModule } from '../shared/modules/tagList/tagList.module'
import { ArticleService } from './services/article.servicee'
import { DeleteArticleEffect } from './store/effects/deleteArticle.effect'

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    TagListModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArticleComponent],
  exports: [],
  providers: [SharedArticleService, ArticleService]
})
export class ArticleModule {}
