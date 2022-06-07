import styled from "styled-components";
import { Link } from "react-router-dom";

const ContainerSearch = styled.div``;

const List = styled.ul`
  margin: 0 auto;
`;

const LinkItem = styled(Link)`
  color: black;
  margin: 15px 0 0 0;
  font-size: 20px;
  text-decoration: underline;
`;

export { ContainerSearch, List, LinkItem };
