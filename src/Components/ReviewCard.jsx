import { star } from "../assets/icons";

const ReviewCard = ({customerName,imgURL,rating,feedback}) => {
  return (
    <div className="p-6 max-sm:px-12 flex flex-col justify-center items-center text-center">
    <img
      src={imgURL}
      alt="review"
      width={120}
      height={120}
      className="rounded-full mb-6"
    />
    <p className="text-center font-xl info-text max-w-sm">{feedback}</p>
    <div className="flex gap-3 m-3">
      <img src={star} alt="rating icon" width={24} height={24} />
      <p className="info-text">({rating})</p>
    </div>
    <p className="text-xl font-palanquin font-bold">{customerName}</p>
  </div>
  )
}

export default ReviewCard