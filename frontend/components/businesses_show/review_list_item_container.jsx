import React from 'react';
import { connect } from 'react-redux';

const Review = ({ review, author }) => {
  const { rating, body } = review;
  return (
    <div>
      <ul>

        <li>Rating: {rating}</li>
        <br/>
        <li>{body} - by {author.username}</li>
        <br/>
<br/>
      </ul>
    </div>
  );
};

const mapStateToProps = ({entities: { users }}, { review }) => {
  return {
    author: users[review.author_id]
  };
};

export default connect(mapStateToProps)(Review);
