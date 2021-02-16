import { createAction, props } from "@ngrx/store";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { ActionTypes } from "../actionTypes";

export const updateArticleAction = createAction(
  ActionTypes.EDIT_ARTICLE,
  props<{slug: string, articleInput: ArticleInputInterface}>()
)

export const updateArticleSuccessAction = createAction(
  ActionTypes.EDIT_ARTICLE_SUCCESS,
  props<{article: ArticleInterface}>()
)

export const updateArticleFailureAction = createAction(
  ActionTypes.EDIT_ARTICLE_FAILURE,
  props<{errors: BackendErrorsInterface}>()
)
