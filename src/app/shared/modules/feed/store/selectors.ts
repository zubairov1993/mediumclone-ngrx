import { createFeatureSelector, createSelector } from "@ngrx/store"
import { AppStateInterface } from "src/app/shared/types/appState.interface"
import { FeedStateInterface } from "../types/feedState.interface"

export const feedFetureSelector = createFeatureSelector<
  AppStateInterface,
  FeedStateInterface>('feed')

export const isLoadingSelector = createSelector(
  feedFetureSelector,
  (feedState: FeedStateInterface) => feedState.isLoading
)

export const errorSelector = createSelector(
  feedFetureSelector,
  (feedState: FeedStateInterface) => feedState.error
)

export const feedSelector = createSelector(
  feedFetureSelector,
  (feedState: FeedStateInterface) => feedState.data
)
