import { ArticleInterface } from "src/app/shared/types/article.ingterface";

export interface GetFeedResponseInterface {
  articles: ArticleInterface[]
  articlesCount: number
}
