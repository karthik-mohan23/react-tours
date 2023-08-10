import { useState } from "react";

const TourCard = (props) => {
  const { info, image, price, name } = props;

  const [readMore, setReadMore] = useState(true);

  return (
    <div>
      <div className="w-60 h-40">
        <img
          src={image}
          alt="name"
          className="w-full h-full object-cover block"
        />
      </div>
      <h2>{name}</h2>
      <p>{price}</p>
      {readMore ? (
        <>
          <p>{info.substring(0, 200)} </p>
          <button
            onClick={() => setReadMore((prevState) => !prevState)}
            className="text-green-500">
            Read more...
          </button>
        </>
      ) : (
        <>
          <p>{info}</p>
          <button
            onClick={() => setReadMore((prevState) => !prevState)}
            className="text-green-500">
            Show less
          </button>
        </>
      )}
    </div>
  );
};
export default TourCard;
