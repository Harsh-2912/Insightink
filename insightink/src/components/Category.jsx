import React, { useState } from 'react'
import './Category.css'
import Home from './Home';
import { Link } from 'react-router-dom';


function Category() {

    const [toggle, setToggle] = useState(true);

    if (toggle) {
        return (
            <div className='wrapper'>
                <nav className="cat-navbar">
                    <div className="cat-left" onClick={() => setToggle(false)}>
                        <Link to="/">(Close)</Link>
                    </div>
                    <div className="cat-centre">
                        <a href="#insightink">InsightInk</a>
                    </div>
                    <div className="cat-right">
                    <Link to="/general" className='right'>(Top Headlines)</Link>
                    </div>
                </nav>

                <div className="cat-container">
                    <div className="general">
                        <Link to="/general" className='anchor'>general</Link>
                    </div>
                    <div className="science">
                    <Link to="/science" className='anchor'>science</Link>
                    </div>
                    <div className="technology">
                        <Link to="/technology" className='anchor'>technology</Link>
                    </div>
                    <div className="entertainment">
                        <Link to="/entertainment" className='anchor'>entertainment</Link>
                    </div>
                    <div className="sports">
                        <Link to="/sports" className='anchor'>sports</Link>
                    </div>
                    <div className="health">
                        <Link to="/health" className='anchor'>health</Link>
                    </div>

                </div>

                <div className="social">
                    <div className="Linkedin">
                        <a href="https://www.linkedin.com/in/prince-kumar-jha-66083b230/" target="_blank" rel="noreferrer" className='anchor'>(Linkedin)</a>
                    </div>
                    <div className="Instagram">
                        <a href="https://www.instagram.com/the_hindu/?hl=en" target="_blank" rel="noreferrer" className='anchor'>(Instagram)</a>
                    </div>
                    <div className="Pinterest">
                        <a href="#Pinterest" className='anchor'>(Pinterest)</a>
                    </div>
                    <div className="Twitter">
                        <a href="https://twitter.com/the_hindu?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noreferrer" className='anchor'>(Twitter)</a>
                    </div>
                </div>
            </div>
        )

    } else {
        return <Home />
    }


}

export default Category
