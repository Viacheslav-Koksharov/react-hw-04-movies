import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
`;

const ListItem = styled.li`
  width: 100px;
  height: 150px;
  margin: 15px auto;
`;

const ImageContainer = styled.div`
  margin: 10px 10px 10px 0;
  object-fit: cover;
`;

const NameActor = styled.p`
  font-size: 12px;
`;

export { List, ListItem, ImageContainer, NameActor };
