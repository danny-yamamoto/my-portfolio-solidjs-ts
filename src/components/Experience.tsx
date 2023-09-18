import { Component } from "solid-js";
import { IExperience } from "../types";

const Experience: Component<{ experience: IExperience }> = props => {
    return (
        <section>
            <h1>{props.experience.title}</h1>
            <ul>
                {props.experience.detail && props.experience.detail.map(({ id, company, position }) => (
                    <li id={id}>{id}: {position} @ {company}</li>
                ))}
            </ul>
        </section>
    );
};

export default Experience;
