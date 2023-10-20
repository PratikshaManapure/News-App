import React, { useEffect } from "react";
import { useState } from "react";
import './Home.css';
import axios from "axios";
import NewsArticles from "../../components/NewsArticles/NewsArticles";

export default function Home() {
    const [news, setNews] = useState([]);
    const[searchQuery, setSearchQuery] = useState('tesla')

    const loadNews = async () => {
        try{
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-09-20&sortBy=publishedAt&apiKey=${process.env.React_APP_API_KEY}`)
        setNews(response.data.articles)
        }
        catch(error){
            console.log(error)
        }
        
    }

    useEffect(() => {
        loadNews();
    }, [])

    useEffect(() => {
        loadNews()
    },[searchQuery])
    return (
        <div>
            <h1 className="heading">News App</h1>
            <input type="text"value={searchQuery}
            onChange={(e)=> {
                setSearchQuery(e.target.value)
            }} 
            className="input"/>
            

            <div className="news-container">
                {
                    news.map((newsArticle, index) => {
                        const { author, title, description, url, urlToImage, publishedAt } = newsArticle;
                        return (
                            <NewsArticles author={author} title={title} description={description} url={url} urlToImage={urlToImage}
                                publishedAt={publishedAt}key={index} />
                        )
                    })
                }
            </div>
        </div>
    );
}