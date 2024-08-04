import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 8
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  articles = [
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Israel: Mother of rescued hostage Noa Argamani dies",
      "description": "Liora Argamani had been reunited with her daughter after an Israeli operation in Gaza last month.",
      "url": "https://www.bbc.co.uk/news/articles/cxw2nmyjdnro",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6abe/live/1ca02b20-3851-11ef-8c4c-0b2da78a9418.jpg",
      "publishedAt": "2024-07-02T10:07:20.4379733Z",
      "content": "The mother of rescued Israeli hostage Noa Argamani has died, three weeks after her daughter was freed in a dramatic raid after being held for eight months by Hamas in Gaza.\r\nLiora Argamani, who was b… [+1750 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Palestinians flee Khan Younis as Israeli forces strike south Gaza",
      "description": "Patients have left a hospital and tent camps as Israel appears poised to launch another assault on the city.",
      "url": "https://www.bbc.co.uk/news/articles/cd1600vl7lzo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/f4ca/live/2cf92260-383d-11ef-ac87-cd19f938c2eb.jpg",
      "publishedAt": "2024-07-02T09:37:13.3277115Z",
      "content": "Palestinians have been fleeing districts to the east of Gazas second city of Khan Younis after Israel issued evacuation orders.\r\nOvernight and into the morning, witnesses reported multiple Israeli st… [+1886 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Mistrial in Karen Read case over killing police boyfriend",
      "description": "She had denied running over the police officer outside a house party one wintry night two years ago.",
      "url": "https://www.bbc.co.uk/news/articles/cv2g3jygnl2o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3af8/live/5e6aa850-34c3-11ef-af44-4d9892e2f146.jpg",
      "publishedAt": "2024-07-02T08:37:13.5793101Z",
      "content": "Some have compared the viral Read case to other true-crime hits involving women accused of violent crimes, such as Casey Anthony, Amanda Knox or Jodi Arias. \r\nAdam Golub, a professor at California St… [+1472 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Biden says Supreme Court immunity ruling on Trump undermines rule of law",
      "description": "The US president condemns a Supreme Court verdict giving his predecessor partial immunity from prosecution.",
      "url": "https://www.bbc.co.uk/news/articles/c51yx1n15y4o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2d8b/live/d7109980-3816-11ef-bdc5-41d7421c2adf.jpg",
      "publishedAt": "2024-07-02T08:07:17.863328Z",
      "content": "In a televised statement late on Monday, President Biden said: \"This nation was founded on the principle that there are no kings in America. Each of us is equal before the law. No one, no one is abov… [+3062 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "NEET: The contentious exam deciding the fate of India’s doctors",
      "description": "The NEET exam has triggered nationwide protests, with students saying it has jeopardised their future.",
      "url": "https://www.bbc.co.uk/news/articles/c51yxv7pd65o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/c66d/live/6cc6a890-3798-11ef-aa0b-5761f82a603d.jpg",
      "publishedAt": "2024-07-02T06:52:12.2501835Z",
      "content": "In 2017, the suicide of a student in Tamil Nadu sparked outrage and let to huge protests against the exam. The daughter of a daily wage labourer, the 17-year-old had scored 98% in her school-leaving … [+1444 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Zhang Zhijie: Chinese teen badminton player's death sparks outcry",
      "description": "Officials are accused of acting too slowly to treat Zhang Zhijie after he collapsed during a match.",
      "url": "https://www.bbc.co.uk/news/articles/cd19xnxdvlko",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/e50f/live/6bda62a0-382e-11ef-8bb9-d9927dd8ccad.jpg",
      "publishedAt": "2024-07-02T06:22:14.5632789Z",
      "content": "The death of a Chinese teenage badminton player who collapsed on court has sparked an outcry across Chinese social media. \r\nZhang Zhijie, 17, was competing in a youth match when he suddenly fell to t… [+2570 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Israel conscription rule stokes ultra-Orthodox fury",
      "description": "But the move marks a significant step towards resolving one of Israel's most divisive issues.",
      "url": "https://www.bbc.co.uk/news/articles/c6p24expzd5o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2c28/live/87535eb0-37de-11ef-bbe0-29f79e992ddd.jpg",
      "publishedAt": "2024-07-02T05:37:15.9211002Z",
      "content": "For decades, there has been controversy over the role of the ultra-Orthodox in Israeli society. From a small minority, the community is now a million-strong, making up 12.9% of the population.\r\nUltra… [+2557 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Trump pushes for felony conviction to be set aside",
      "description": "The ex-president's lawyers cite a new Supreme Court ruling that granted him partial immunity from prosecution.",
      "url": "https://www.bbc.co.uk/news/articles/cw4yp9g7ynwo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1b20/live/b6345e20-3827-11ef-95c8-11ad4ded3245.jpg",
      "publishedAt": "2024-07-02T04:52:11.4354538Z",
      "content": "Donald Trump's lawyers have asked for the former US president's conviction in his hush money criminal case to be set aside and his sentencing this month delayed, American media report.\r\nThey say a le… [+1267 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Fatima Payman: How a Gaza 'stunt' divided Australia's parliament",
      "description": "A senator says she has been \"exiled\" for voting against her party to recognise Palestinian statehood.",
      "url": "https://www.bbc.co.uk/news/articles/c880l1ddpzgo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9d0e/live/121aa000-3779-11ef-a780-47cb50223b50.jpg",
      "publishedAt": "2024-07-02T02:37:11.0136034Z",
      "content": "The contrasting approaches represent the changing demands of the Australian public, according to Kos Samaras - one of the nations leading pollsters.\r\nHe says a growing cohort of young, multicultural … [+1866 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Hurricane Beryl: Airports shut as Caribbean residents urged to shelter",
      "description": "People in the Caribbean are bracing for the hurricane, which has formed unusually early in the season.",
      "url": "https://www.bbc.co.uk/news/articles/cn09xznv4jno",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4567/live/8f02e1c0-378a-11ef-a044-9d4367d5b599.jpg",
      "publishedAt": "2024-07-01T11:22:16.8254757Z",
      "content": "\"It is not a joke,\" said the prime minister of St Vincent and the Grenadines, Ralph Gonsalves, reminding people of the devastation caused by past hurricanes in the Caribbean.\r\nIn a national address f… [+818 chars]"
    }
  ]
  constructor(props) {
    super(props);

    console.log("this is the constructor of the news item")
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1 }
    document.title = `${this.props.category}-News Monkey`
  }
  async componentDidMount(props) {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=e250c344bcf64fdab796a6034e2e865d&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseddata = await data.json()
    console.log(parseddata);
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false
    })
  }
  handlenextclick = async (props) => {
    console.log("next")
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    }
    else {


      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=e250c344bcf64fdab796a6034e2e865d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true })
      let data = await fetch(url);
      let parseddata = await data.json()
      console.log(parseddata);
      //   this.setState({articles:parseddata.articles})
      this.setState({
        page: this.state.page + 1,
        articles: parseddata.articles,
        loading: false
      })
    }
  }
  handleprevclick = async (props) => {
    console.log("previous")
    // console.log("next")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=e250c344bcf64fdab796a6034e2e865d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseddata = await data.json()
    console.log(parseddata);
    //   this.setState({articles:parseddata.articles})
    this.setState({
      page: this.state.page - 1,
      articles: parseddata.articles,
      loading: false
    })
  }
  // fetchMoreData = () => {
  //   // a fake async api call like which sends
  //   // 20 more records in 1.5 secs
  //   setTimeout(() => {
  //     this.setState({
  //       items: this.state.items.concat(Array.from({ length: 20 }))
  //     });
  //   }, 1500);
  // };


  render(props) {
    return (
      <div className="container my-3 mx-3 ">
        <h1 className='container my-3 text-center'>This is our top News
          from `{this.props.category}` category</h1>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <div className='row mx-5' >
            {this.state.articles.map((element) => {
              return <div className='col-md-4 ' style={{margin: '18px 44px'}} key={element.url}>
                <Newsitem title={element.title ? element.title.slice(0, 30) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} className='container my-4' />
              </div>
            })}
          </div>
          </InfiniteScroll>
        <div className='conatiner d-flex justify-content-between'>
          <button type="button" disabled={this.state.page <= 1} onClick={this.handleprevclick} className="btn btn-dark">Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handlenextclick} className="btn btn-dark">Next</button>
        </div>
      </div>
    )
  }
}

export default News
