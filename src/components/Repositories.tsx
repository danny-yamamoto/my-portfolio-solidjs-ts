import { Component } from "solid-js";
import { IArticles, IRepositories } from "../types";

const Repositories: Component<{ repositories: IRepositories }> = props => {
    return (
        <section>
            <h1>{props.repositories.title}</h1>
            <div class="repo-container">
                {props.repositories.detail && props.repositories.detail.map(({ name, description, url }) => (
                    <div id={name} class="repo-tile">
                        <h3 class="repo-name">{name}</h3>
                        <p class="repo-description">{description}</p>
                        <a target="_blank" href={url} id={name}>View on GitHub</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Repositories;
