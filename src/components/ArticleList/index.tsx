import React, { useState, useEffect } from "react";
import style from "./ArticleList.module.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setCountArticles } from "../../redux/slices/articleSlice";

import { ArticleItem } from "../ArticleItem";

export const ArticleList: React.FC = () => {
    const { row, responseEmpty } = style;

    type AllArticlesTypes = {
        id: number;
        title: string;
        desctiption: string;
        date: string;
        image: string;
        priority: number;
    };
    const [allArticles, setAllArticles] = useState<AllArticlesTypes[]>();
    const [allArticlesFiltered, setAllArticlesFiltered] =
        useState<AllArticlesTypes[]>();

    const searchValue = useSelector(
        (state: RootState) => state.search.searchValue
    );
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get("https://6393666511ed187986b4cb75.mockapi.io/articles")
            .then((res) => setAllArticles(res.data));
    }, []);

    useEffect(() => {
        const searchValueArr = searchValue.split(" ");
        const filteredArticles: AllArticlesTypes[] = [];
        allArticles &&
            allArticles.forEach((article) => {
                let priority: number = 0;
                let changedArticle: AllArticlesTypes = article;
                searchValueArr.forEach((elem) => {
                    if (elem !== "") {
                        if (article.title.includes(elem)) {
                            priority += 1;
                        }
                        if (article.desctiption.includes(elem)) {
                            priority += 0.999;
                        }
                    }
                    changedArticle.priority = priority;
                    changedArticle.priority !== 0 &&
                        filteredArticles.push(changedArticle);
                });
            });
        setAllArticlesFiltered(
            Array.from(new Set(filteredArticles)).sort(
                (a, b) => b.priority - a.priority
            )
        );
    }, [searchValue]);
    useEffect(() => {
        dispatch(setCountArticles(allArticlesFiltered?.length));
    }, [allArticlesFiltered]);

    if (!allArticlesFiltered) {
        return <>Loading...</>;
    }
    return (
        <>
            {searchValue ? (
                allArticlesFiltered.length ? (
                    <div className={row}>
                        {allArticlesFiltered.map((item) => (
                            <ArticleItem
                                key={item.id}
                                {...item}
                            ></ArticleItem>
                        ))}
                    </div>
                ) : (
                    <div className={responseEmpty}>
                        <p>Not found</p>
                    </div>
                )
            ) : (
                <div className={responseEmpty}>
                    <p>Please enter any keywords</p>
                </div>
            )}
        </>
    );
};
