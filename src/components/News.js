import React, { useState,useEffect} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
 const [ articles,setArticles] = useState([]);
 const [ loading,setLoading] = useState(true); 
 const [ page,setPage] = useState(1); 
 const [totalResults ,setTotalResults] = useState(0); 

 
  const capitalize = (s) => {
    return s[0].toUpperCase() + s.slice(1);
  };
  
  

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3f501550961a464bbc8455e580bcd286&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults);
    
  };
useEffect(()=>{
     document.title = `${capitalize(props.category)} -News`;
  updateNews();
  // eslint-disable-next-line
},[])
  
 const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3f501550961a464bbc8455e580bcd286&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    
  };
  
 
    return (
      <>
        
        
            <h1 style={{textAlign:"center", marginTop: '90px'}} className="mx-3 text-danger">
              {capitalize(props.category)} Headlines
            </h1>
         
          {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
           endMessage={
             <p style={{ textAlign: "center" }}>
               <b>Yay! You have seen it all</b>
             </p>
           }
        >
          
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div key={element.url} className="my-3 col-md-4">
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imgSrc={element.urlToImage}
                      url={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }

News.defaultProps = {
  country: "us",
  pageSize: 6,
  category: "general",
};
 News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
