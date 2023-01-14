import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";
import articleSlice from "./slices/articleSlice";

export const store = configureStore({
    reducer: {
        search: searchSlice,
        article: articleSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
