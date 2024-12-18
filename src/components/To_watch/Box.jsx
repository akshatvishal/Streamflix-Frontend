import React, { useState, useEffect, useContext } from "react";
import { Datacontext } from "../../Context/dataContext";
import "./Box.css";
import { useNavigate } from "react-router-dom";

const Box = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track which movie is being hovered over
  const { data } = useContext(Datacontext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Update loading state when data is available
    if (data && data.length > 0) {
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return <p>Loading movies...</p>;
  }

  if (!data || data.length === 0) {
    return <p>No movies available.</p>;
  }

  return (
    <div className="Boxes">
      {data.map((item, index) => (
        <div
          key={index}
          className="Box"
          onClick={() => {
            navigate(`/Home/${item.id}`);
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="show">
            <img
              src={item.poster}
              alt={item.title || "Movie Poster"}
              className="BoxPoster"
            />
            {hoveredIndex === index && (
              <div className="pop">
                <p className="BoxTitle">{item.title}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Box;
