import React from "react";
import './NewsArticles.css';


export default function NewsArticles({author, title, description, url, urlToImage, publishedAt}) {
    return(
        <div className="news-article-card">
        <img src={urlToImage} alt="image" className="news-article-img"/>
        <h1 className="title">{title}</h1>
        <div className="info">
            <p className="article-author" >{author}</p>
            <p className="article-publishedAt">{publishedAt}</p>
        </div>
        <p>{description}</p>
        <a href={url} target='blank'>Read More...</a>
        </div>
    )
}