import React from 'react'
import {Animated} from "react-animated-css";
import './styles.scoped.css'

export default function Home() {
    return (
        <section className="home">
            <div></div>
            <div>
                <Animated animationIn="fadeInUp" animationInDuration="500">
                    <p className="animate">Hi.</p>
                </Animated>
                <Animated animationIn="fadeInUp" animationInDuration="1500">
                    <p className="animate">I am</p>
                </Animated>
                <Animated animationIn="fadeInUp" animationInDuration="2500">
                    <p className="animate">Fadlul Azmi</p>
                </Animated>
            </div>
        </section>
    )
}
