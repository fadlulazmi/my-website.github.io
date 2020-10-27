import React, { useState } from 'react'
import {Animated} from "react-animated-css";
import './styles.scoped.css'

export default function Home() {
    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const location = window.location
    return (
        <Animated animationIn="fadeInDown" animationOut="fadeOutUp" animationInDuration="1000" animationOutDuration="1000">
            <section className="home" >
                <div/>
                <div>
                    <Animated animationIn="fadeInUp" animationInDuration="500">
                        {first ? (
                            <p 
                                className="animate clickable" 
                                onClick={() => location.href='/about'}
                                onMouseLeave={() => setFirst(false)} 
                            >
                                About
                            </p>
                        ) : (
                            <p className="animate" onMouseEnter={() => setFirst(true)}>Hi.</p>
                        )}
                    </Animated>
                    <Animated animationIn="fadeInUp" animationInDuration="1500">
                    {second ? (
                        <p 
                            className="animate clickable" 
                                onClick={() => location.href='/#'}
                                onMouseLeave={() => setSecond(false)}
                        >
                            Resume
                        </p>
                    ) : (
                        <p className="animate" onMouseEnter={() => setSecond(true)}>I am</p>
                    )}
                    </Animated>
                    <Animated animationIn="fadeInUp" animationInDuration="2500">
                    {third ? (
                        <p 
                            className="animate clickable" 
                                onClick={() => location.href='/#'}
                                onMouseLeave={() => setThird(false)}
                        >
                            Portfolio
                        </p>
                    ) : (
                        <p className="animate" onMouseEnter={() => setThird(true)}>Fadlul Azmi</p>
                    )}
                    </Animated>
                </div>
            </section>
        </Animated>
    )
}
