import React from "react";
import style from "./Search.module.css";

export const Search: React.FC = () => {
    const { row, title, search, inputText, results } = style;
    return (
        <>
            <div className={row}>
                <p className={title}>Filter by keywords</p>
                <div className={search}>
                    <input
                        type='text'
                        className={inputText}
                        placeholder='search'
                    />
                    <img
                        src='img/Search/search-icon.svg'
                        alt='search-icon'
                    />
                </div>
                <div className={results}>
                    <p>Results: 6</p>
                    <hr />
                </div>
            </div>
        </>
    );
};
