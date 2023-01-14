import React from "react";
import style from "./Search.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/slices/searchSlice";
import { RootState } from "../../redux/store";

export const Search: React.FC = () => {
    const { row, title, search, inputText, results } = style;

    const dispatch = useDispatch();

    const countArticles = useSelector(
        (state: RootState) => state.article.countArticles
    );

    const onChangeInput = (event: any) => {
        dispatch(setSearchValue(event.target.value));
    };

    return (
        <>
            <div className={row}>
                <p className={title}>Filter by keywords</p>
                <div className={search}>
                    <input
                        type='text'
                        className={inputText}
                        placeholder='search'
                        onChange={(event) => onChangeInput(event)}
                    />
                    <img
                        src='img/Search/search-icon.svg'
                        alt='search-icon'
                    />
                </div>
                <div className={results}>
                    <p>Results: {countArticles}</p>
                    <hr />
                </div>
            </div>
        </>
    );
};
