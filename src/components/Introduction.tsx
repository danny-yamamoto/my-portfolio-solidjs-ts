import { Component } from "solid-js";
import { IIntroduction } from "../types";

const Introduction: Component<{ introduction: IIntroduction }> = props => {
    return (
        <section id="intro">
            <h1>{props.introduction.title}</h1>
            <p>{props.introduction.description}</p>
        </section>
    );
};

export default Introduction;
