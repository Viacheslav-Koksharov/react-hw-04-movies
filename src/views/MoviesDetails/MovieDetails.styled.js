import styled from "styled-components";
import { Link } from "react-router-dom";

const ContainerMovieDetails = styled.div`
display:flex;
margin-top-20px;
`;

const Title = styled.h2`
  font-size: 30px;
`;

const GoBackButton = styled.button`
  min-width: 80px;
  margin-bottom: 25px;
  padding: 5px;
  color: black;
  background-color: #ff6b08;
  font-size: 15px;
  text-align: center;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
`;
const ImageContainer = styled.div`
  margin: 0 auto;
`;

const InfoContainer = styled.div`
  height: 100%;
  object-fit: cover;
  margin: 0 0 0 10px;
`;

const MovieTitle = styled.h3`
  margin: 0 0 15px 0;
  font-size: 26px;
`;
const UserScore = styled.p`
  margin: 0 0 15px 0;
  font-size: 20px;
`;

const Owerwiew = styled.p`
  margin: 0 0 15px 0;
  font-size: 20px;
`;

const Genres = styled.p`
  margin: 0;
  font-size: 20px;
`;

const List = styled.ul`
  margin: 0 auto;
`;
const LinkItem = styled(Link)`
  display: block;
  color: black;
  margin: 15px 0 0 0;
  font-size: 20px;
  text-decoration: underline;
`;
export {
  ContainerMovieDetails,
  Title,
  GoBackButton,
  ImageContainer,
  InfoContainer,
  MovieTitle,
  UserScore,
  Owerwiew,
  Genres,
  List,
  LinkItem,
};
