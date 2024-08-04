import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imageurl,url,author,date}=this.props;
    return (
      <div>
        <div className="card" style={{width:'16rem'}}>
  <img src={!imageurl?"https://static.foxnews.com/foxnews.com/content/uploads/2024/07/clark-smile-asg.jpg":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body ">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm  btn-dark">Read More</a>
  </div>
  <div className="card-footer text-body-secondary">
    By {author} on {new Date(date).toGMTString()}
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
