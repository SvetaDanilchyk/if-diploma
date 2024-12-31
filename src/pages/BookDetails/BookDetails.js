import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

//components
import { Loader } from "../../components/Loader/Loader";
import { Card } from "../../components/Card";

export const BookDetails = () => {
  const { bookId } = useParams();
  const { homeBooks, error, loading } = useSelector((state) => state.search);

  const book = homeBooks.find((element) =>
    element.id === bookId ? element : false,
  );

  if (loading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return <>{book && <Card dataHomes={book} />}</>;
};
