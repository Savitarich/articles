import React from "react";
import style from "./ArticleList.module.css";
import { ArticleItem } from "../ArticleItem";

export const ArticleList: React.FC = () => {
    const { row } = style;
    return (
        <>
            <div className={row}>
                <ArticleItem></ArticleItem>
                <ArticleItem></ArticleItem>
                <ArticleItem></ArticleItem>
                <ArticleItem></ArticleItem>
                <ArticleItem></ArticleItem>
                <ArticleItem></ArticleItem>
            </div>
        </>
    );
};
