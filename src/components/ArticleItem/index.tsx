import React from "react";
import style from "./ArticleItem.module.css";
import { Link } from "react-router-dom";

export const ArticleItem: React.FC = () => {
    const { card, mainImage, date, title, container, description, button } =
        style;
    return (
        <>
            <div className={card}>
                <img
                    className={mainImage}
                    src='img/Articles/01.jpg'
                    alt='img/Articles/01.jpg'
                />
                <div className={container}>
                    <p className={date}>
                        <span>
                            <img
                                src='img/Articles/date-icon.svg'
                                alt='date-icon'
                            />
                        </span>
                        June 29th, 2021
                    </p>
                    <h3 className={title}>
                        The 2020 World's Most Valuable Brands
                    </h3>
                    <p className={description}>
                        <span>
                            Non sed molestie tortor massa vitae in mattis. Eget
                            vel consequat hendrerit commodo libero aliquam. Urna
                            arcu nunc tortor vitae pharetra
                        </span>
                        ...
                    </p>
                    <Link
                        to='/article'
                        className={button}
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
