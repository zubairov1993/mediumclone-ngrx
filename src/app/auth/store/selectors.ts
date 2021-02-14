import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { AuthStateInterface } from "../types/authState.interface";

export const authFetureSelector = createFeatureSelector<AppStateInterface, AuthStateInterface>('auth')

export const isSubmittingSelector = createSelector(
  authFetureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  authFetureSelector,
  (authState: AuthStateInterface)  => authState.validationErrors
)

export const isLoggedInSelector = createSelector(
  authFetureSelector,
  (authState: AuthStateInterface)  => authState.isLoggedIn
)

export const isAnonymousSelector = createSelector(
  authFetureSelector,
  (authState: AuthStateInterface)  => authState.isLoggedIn === false
)

export const currentUserSelector = createSelector(
  authFetureSelector,
  (authState: AuthStateInterface)  => authState.currentUser
)
