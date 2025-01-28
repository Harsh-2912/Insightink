import React, { useRef, useState } from 'react';
import './Home.css';
import gsap from 'gsap';
import Category from './Category';
import { Link } from 'react-router-dom';
import Shery from "sheryjs";

function Home() {

    Shery.mouseFollower();


    document.title = 'DNC JOURNAL';


    const [toggle, setToggle] = useState(false)

    const mainRef = useRef(null);

    const throttleFunction = (func, delay) => {


        let prev = 0;
        return (...args) => {
            let now = new Date().getTime();



            if (now - prev > delay) {
                prev = now;

                return func(...args);
            }
        }
    }


    const handleMouseMove = throttleFunction((event) => {

        var div = document.createElement('div')
        div.classList.add("imageDiv")

        document.body.appendChild(div)

        div.style.left = event.clientX + "px"
        div.style.top = event.clientY + "px"
        // console.log(event.clientX + "px", event.clientY + "px")

        setTimeout(() => {
            div.remove()
        }, 500);

        var img = document.createElement("img")

        var images = [
            "https://images.pexels.com/photos/1094794/pexels-photo-1094794.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/4646816/pexels-photo-4646816.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/4646825/pexels-photo-4646825.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/596132/pexels-photo-596132.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1152853/pexels-photo-1152853.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2907679/pexels-photo-2907679.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1102804/pexels-photo-1102804.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/3889764/pexels-photo-3889764.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/3951353/pexels-photo-3951353.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/9469733/pexels-photo-9469733.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/3410956/pexels-photo-3410956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/18598827/pexels-photo-18598827/free-photo-of-surfers-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/4329919/pexels-photo-4329919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/18998493/pexels-photo-18998493/free-photo-of-a-person-paragliding-with-a-flag-in-the-air.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]

        // console.log(images[0])
        // console.log(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
        img.setAttribute('src', `${images[Math.floor(Math.random() * 16)]}`)

        div.appendChild(img)

        gsap.to(div, {
            rotate: 30,
        })

        gsap.to(img, {
            y: '0',
            ease: 1,
            duration: 0.6
        })

        gsap.to(img, {
            y: "100%",
            ease: 1,
            delay: 0.6
        })
    }, 300);


    if (toggle) {
        // console.log(toggle);
        return <Category />
    } else {
        // console.log(toggle);
        return (
            
                <div className='container'>

                    <nav className="navbar">
                        <div className="left" onClick={() => setToggle(true)}>
                            <Link to="">(News by Category)</Link>
                        </div>
                        <div className="centre">
                            <a href="#insightink">DNC JOURNAL</a>
                        </div>
                        <div className="right">
                        <Link to="/general" className='right'>(Top Headlines)</Link>
                        </div>
                    </nav>
                    <div className="seperator"></div>

                    <div
                        className="main"
                        ref={mainRef}
                        onMouseMove={(event) => handleMouseMove(event)}>
                        <p>We believe</p>
                        <p>narratives shape the</p>
                        <p className='mindset'>mindset</p>
                    </div>
                </div>
        )

    }




}

export default Home
