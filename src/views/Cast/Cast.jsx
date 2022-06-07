import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast, IMAGE_URL } from "../../servises/api.js";
import { List, ListItem, ImageContainer, NameActor } from "./Cast.styled.js";
import imageDefault from "../../images/tumblr_default.jpg";
const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then((request) => setCast(request.cast));
  }, [movieId]);

  return (
    <List>
      {cast.map((item) => (
        <ListItem key={item.id}>
          <ImageContainer>
            <img
              src={
                item.profile_path === null
                  ? imageDefault
                  : IMAGE_URL + item.profile_path
              }
              alt={item.name}
            />
          </ImageContainer>
          <NameActor>{item.name}</NameActor>
        </ListItem>
      ))}
    </List>
  );
};
export default MovieCast;
