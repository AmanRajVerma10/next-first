import Link from "next/link";
import { Fragment } from "react";

function AboutUs(){
    return(
    <Fragment><h1>About Us
        <p>Our Developers:</p>
    </h1>
    <h2><Link href="aboutus/1">Yash</Link></h2>
    <h2><Link href="aboutus/2">Vaibhav</Link></h2>
    <h2><Link href="aboutus/3">Suresh</Link></h2>
    </Fragment>
)}

export default AboutUs;