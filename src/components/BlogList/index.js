// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {
    blogData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.onGettingBlogData()
  }

  onGettingBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({
      blogData: formatedData,
      isLoading: false,
    })
  }

  renderLoading = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
    </div>
  )

  renderBlogsList = () => {
    const {blogData} = this.state
    return (
      <ul className="blog-list-ul-container">
        {blogData.map(eachItem => (
          <BlogItem blogItemDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-list-container">
        {isLoading ? this.renderLoading() : this.renderBlogsList()}
      </div>
    )
  }
}

export default BlogList
