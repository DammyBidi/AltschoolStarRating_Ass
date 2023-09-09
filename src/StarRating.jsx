import { range } from './utils';

function StarRating({ rating }) {

  return (
    <div className="star-wrapper">
      {range(0, rating).map((ratingIndex) => {
        return (
          <img
            key={ratingIndex}
            alt="Gold star for rating"
            className="gold-star"
            src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
          />
        );
      })}
    </div>
  );
}

export default StarRating;
