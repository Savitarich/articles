import React from "react";
import style from "./Home.module.css";

import { Search } from "../../components/Search";

export const Home: React.FC = () => {
    const { row } = style;
    return (
        <>
            <div className='container'>
                <div className={row}>
                    <Search></Search>
                </div>
            </div>
        </>
    );
};
