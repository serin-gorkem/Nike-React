import ReviewCard from "../Components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center flex-col text-center">
        <h2 className="font-palanquin text-4xl capitalize font-bold ">
          What Our{" "}
          <span className="text-coral-red">Customers </span>{" "}
          Say ?
        </h2>
        <p className="mt-4 lg:max-w-lg m-auto info-text text-center">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="m-24 w-full grid grid-cols-2 max-md:grid-cols-1">
        {reviews.map((review) => (
          <ReviewCard 
          key={review.customerName}
          imgURL = {review.imgURL}
          customerName = {review.customerName}
          rating = {review.rating}
          feedback = {review.feedback}/>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;