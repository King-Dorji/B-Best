import React from "react";
import { Link } from "react-router-dom";
import "./card..module.scss";

const Card = ({ blog }) => {
  const {
    id,
    title,
    image,
    category,
    author,
    authorPic,
    published_date,
    reading_time,
    tags,
    content,
  } = blog;

  return (
    <div className="card-container">
      <Link className="card-link" to={`/blogs/${blog.id}`}>
        <div
          className="card-image"
          style={{ backgroundImage: `url(${image})` }}
          title={title}
        ></div>
        <div className="card-content">
          <div>
            <div className="card-title">{title}</div>
            <p className="card-description">{content}</p>
            <p className="card-tags">
              Tags:{" "}
              {tags.map((tag, ind) => (
                <span key={ind} className="tag">
                  {tag}
                </span>
              ))}
            </p>
          </div>
          <div className="card-footer">
            <img
              src={authorPic}
              className="author-pic"
              alt={`Author ${author}`}
            />
            <div className="author-details">
              <p className="author-name">{author}</p>
              <p className="published-date">{published_date}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
