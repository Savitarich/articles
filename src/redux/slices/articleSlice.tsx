import { createSlice } from "@reduxjs/toolkit";

interface ArticleSliceState {
    id: number;
    countArticles: number;
}

const initialState: ArticleSliceState = {
    id: 0,
    countArticles: 6,
};

const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        setId(state, action) {
            state.id = action.payload;
        },
        setCountArticles(state, action) {
            state.countArticles = action.payload;
        },
    },
});
export const { setId, setCountArticles } = articleSlice.actions;

export default articleSlice.reducer;
