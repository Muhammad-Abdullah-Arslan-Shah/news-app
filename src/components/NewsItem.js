import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
   let {title, description,imgSrc,url,author,date } = this.props;
    return (
      <>
      
      <div className="card" >
  <img  className="card-img-top" src= {!imgSrc?"https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg":imgSrc} alt='tasveer'/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text"> {description}</p>
    <p class="card-text"><small class="text-muted">{!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={url} target='-blank' className="btn btn-danger">Read more</a>
  </div>
</div>
      </>
    )
  }
}

export default NewsItem
