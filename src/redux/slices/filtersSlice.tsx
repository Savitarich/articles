import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        searchValue: "",
    },
    reducers: {
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
    },
});
export const { setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
