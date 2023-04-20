// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItemDetails
  return (
    <Link to={`/blogs/${id}`} className="blog-link-item">
      <li className="blog-item-main-container">
        <img src={imageUrl} alt={`item${id}`} className="blog-image" />
        <div className="blog-item-card-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-image-container">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar-image" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
