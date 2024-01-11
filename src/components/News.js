import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };
  capitalize = (s) => {
    return s[0].toUpperCase() + s.slice(1);
  };
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      hasMore : false,
    };
    document.title = `${this.capitalize(this.props.category)} -News`;
  }

  updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3f501550961a464bbc8455e580bcd286&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.state.articles.length === this.state.totalResults ?  this.setState({ loading: false }): this.setState({ loading: true })
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.props.setProgress(10);
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3f501550961a464bbc8455e580bcd286&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });

    this.props.setProgress(100);
  };
  
  render() {
    return (
      <>
        
        <div className="container">
            <h1 style={{textAlign:"center"}} className="mx-3 text-danger">
              {this.capitalize(this.props.category)} Headlines
            </h1>
          </div>
          {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
           endMessage={
             <p style={{ textAlign: "center" }}>
               <b>Yay! You have seen it all</b>
             </p>
           }
        >
          
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
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
}

export default News;
