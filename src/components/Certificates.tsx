import { Component } from "solid-js";
import { ICertificates, IExperience } from "../types";

const Certificates: Component<{ certificates: ICertificates }> = props => {
    return (
        <section>
            <h1>{props.certificates.title}</h1>
            <ul>
                {props.certificates.detail && props.certificates.detail.map(({ blockchainId, title }) => (
                    <li id={blockchainId}>{title}</li>
                ))}
            </ul>
        </section>
    );
};

export default Certificates;
