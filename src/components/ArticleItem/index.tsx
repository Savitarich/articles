import React, { useEffect, useRef } from "react";
import style from "./ArticleItem.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setId } from "../../redux/slices/articleSlice";
import { RootState } from "../../redux/store";

type ArticleItemProps = {
    id: number;
    title: string;
    desctiption: string;
    date: string;
    image: string;
};

export const ArticleItem: React.FC<ArticleItemProps> = ({
    id,
    title,
    desctiption,
    date,
    image,
}) => {
    const {
        card,
        mainImage,
        dateStyle,
        titleStyle,
        container,
        description,
        button,
    } = style;

    const titleRef = useRef<HTMLHeadingElement>(document.createElement("h3"));
    const desriptionRef = useRef<HTMLSpanElement>(
        document.createElement("span")
    );
    const dispatch = useDispatch();

    const searchValue = useSelector(
        (state: RootState) => state.search.searchValue
    );

    const openArticlePage = () => {
        dispatch(setId(id));
    };

    useEffect(() => {
        const searchValueArr: string[] = searchValue.split(" ");
        const titleArr: string[] = title.split(" ");
        const desctiptionArr: string[] = desctiption.split(" ");
        searchValueArr.forEach((elem) => {
            if (elem !== "") {
                titleArr.forEach((item, index) => {
                    if (elem === item) {
                        titleArr.splice(index, 1, `<mark>${item}</mark>`);
                    }
                });
                desctiptionArr.forEach((item, index) => {
                    if (elem === item) {
                        desctiptionArr.splice(index, 1, `<mark>${item}</mark>`);
                    }
                });
            }
        });
        titleRef.current.innerHTML = titleArr.join(" ");
        desriptionRef.current.innerHTML = desctiptionArr.join(" ");
    }, [searchValue]);
    return (
        <>
            <div className={card}>
                <img
                    className={mainImage}
                    src={image}
                    alt={image}
                />
                <div className={container}>
                    <p className={dateStyle}>
                        <span>
                            <img
                                src='img/Articles/date-icon.svg'
                                alt='date-icon'
                            />
                        </span>
                        {date}
                    </p>
                    <h3
                        className={titleStyle}
                        ref={titleRef}
                    ></h3>
                    <p className={description}>
                        <span ref={desriptionRef}></span>
                        ...
                    </p>
                    <Link
                        to='/article'
                        className={button}
                        onClick={() => openArticlePage()}
                    >
                        <p>
                            Read more
                            <span>
                                <img
                                    src='img/Articles/arrow.svg'
                                    alt='arrow'
                                />
                            </span>
                        </p>
                    </Link>
                </div>
            </div>
        </>
    );
};
