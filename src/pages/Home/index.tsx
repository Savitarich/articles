import React from "react";
import style from "./Home.module.css";

import { Search } from "../../components/Search";
import { ArticleList } from "../../components/ArticleList";

export const Home: React.FC = () => {
    const { row } = style;
    return (
        <>
            <div className='container'>
                <div className={row}>
                    <Search></Search>
                    <ArticleList></ArticleList>
                </div>
            </div>
        </>
    );
};
