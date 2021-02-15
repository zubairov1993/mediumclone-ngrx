import { Action, createReducer, on } from "@ngrx/store";
import { PopularTagsStateInterface } from "../types/popularTagsState.interface";
import { getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction } from "./actions/getPopularTags.actions";

const initialState: PopularTagsStateInterface = {
  data: null,
  error: null,
  isLoading: false
}

const populatTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getPopularTagsSuccessAction,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.popularTags
    })
  ),
  on(
    getPopularTagsFailureAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false
    })
  )
)

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return populatTagsReducer(state, action)
}
