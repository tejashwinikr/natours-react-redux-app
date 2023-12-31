import React from 'react';

const ReviewCard = ({ review }) => {
  const renderStars = () => {
    const stars = [1, 2, 3, 4, 5];
    return stars.map((star) => (
      <svg
        key={star}
        className={`reviews__star reviews__star--${
          review.rating >= star ? 'active' : 'inactive'
        }`}
      >
        <use xlinkHref="/img/icons.svg#icon-star" />
      </svg>
    ));
  };

  return (
    <div className="reviews__card">
      <div className="reviews__avatar">
        <img
          className="reviews__avatar-img"
          src={`/img/users/${review.user.photo}`}
          alt={review.user.name}
        />
        <h6 className="reviews__user">{review.user.name}</h6>
      </div>
      <p className="reviews__text">{review.review}</p>
      <div className="reviews__rating">{renderStars()}</div>
    </div>
  );
};

export default ReviewCard;
