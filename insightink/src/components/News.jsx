import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import './News.css'
import { Link } from 'react-router-dom';
import Shery from "sheryjs";
import Loading from './Loading';


function News({ category }) {
    const [data, setData] = useState(null);
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    Shery.imageMasker(".div-masker" , {
        //Parameters are optional.
        mouseFollower: true,
        text: "OPEN",
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });


    var url =
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=55bd8649913d4c87bf04785e7e8bbdca`;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const fetchedData = await response.json();
                setData(fetchedData);
                setArticles(fetchedData.articles);
                setLoading(false); // Set loading to false when data is fetched
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [url]);

    console.log(data);

    if (loading) {
        return <Loading/>;
    }

    return (

        <div className="news-container">
            <nav className="navbar">
                <div className="news-left">
                    <Link to="/">(Close)</Link>
                </div>
                <div className="centre">

                    <a href="#insightink">InsightInk: Insights about {category}</a>
                </div>
                <div className="right">
                <Link to=" " >(Top Headlines)</Link>
                </div>
            </nav>
            <div className="line">

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {articles.map((article, index) => (
                    article.title && article.description && article.urlToImage && article.url ? (
                        <NewsCard
                            key={index}
                            country={'in'}
                            category={'general'}
                            title={article.title}
                            desc={article.description}
                            img={article.urlToImage}
                            fullArticle={article.url}
                            className={'div-masker'}
                        />
                    ) : null
                ))}

            </div>
        </div>

    )
}

export default News;
