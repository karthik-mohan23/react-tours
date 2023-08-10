import { useState, useEffect } from "react";
import TourCard from "./TourCard";
import Loader from "./Loader";

const Tours = () => {
  const [tours, setTours] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://course-api.com/react-tours-project"
      );
      const data = await response.json();
      setTours(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <h1 className="text-center text-4xl font-semibold mb-10">Our Tours</h1>

      <div className="max-w-3xl mx-auto grid  grid-cols-3 gap-10">
        {tours.map((tour) => (
          <TourCard key={tour.id} {...tour} />
        ))}
      </div>
    </>
  );
};

export default Tours;
