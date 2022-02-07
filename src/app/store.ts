import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {
  allSubgraphSliceEndpoints,
  createApiWithReactHooks,
  initializeSubgraphSlice
} from "@superfluid-finance/sdk-redux";

// This is initialization of the SDK that causes issues for Webstorm. Visual Studio Code has no issues.
const sfSubgraph = initializeSubgraphSlice(createApiWithReactHooks).injectEndpoints(allSubgraphSliceEndpoints);

// Code completion *especially* dies here. It should offer many "useSomethingQuery" & "usLazySomethingQuery but shows a loader forever instead...
// const foo = sfSubgraph.use

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
