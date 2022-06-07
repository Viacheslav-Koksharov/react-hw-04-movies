import { useState, useEffect } from "react";
import { Title, List, LinkItem } from "./HomePage.styled.js";
import { getTrendings } from "../../servises/api.js";
const HomePage = () => {
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    getTrendings().then((trendings) => setTrending(trendings.results));
  }, []);
  return (
    <>
      <Title>Trending today</Title>
      <List>
        {trending?.map((trend) => (
          <li key={trend.id}>
            <LinkItem to={`/movies/${trend.id}`}>{trend.title}</LinkItem>
          </li>
        ))}{" "}
      </List>
    </>
  );
};

export default HomePage;
