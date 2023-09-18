import { Component } from "solid-js";
import { IArticles } from "../types";

const Articles: Component<{ articles: IArticles }> = props => {
    return (
        <section id="articles">
            <h1>{props.articles.title}</h1>
            <ul>
                {props.articles.detail && props.articles.detail.map(({ title, url, id }) => (
                    <li id={id}>
                        <a href={url} target="_blank">{title}</a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Articles;
