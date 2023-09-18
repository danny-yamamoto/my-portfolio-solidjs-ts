import { Component } from "solid-js";
import { IFooter, IIntroduction } from "../types";
import { Link } from "solid-start";

const Footer: Component<{ footer: IFooter }> = props => {
    return (
        <><Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></Link>
        <footer>
            <p>&copy; 2023 {props.footer.titile}. All rights reserved.</p>
            <div class="social-links">
                <a target="_blank" href={props.footer.github}><i class="fab fa-github"></i></a>
                <a target="_blank" href={props.footer.twitter}><i class="fab fa-twitter"></i></a>
            </div>
        </footer></>
    );
};

export default Footer;
