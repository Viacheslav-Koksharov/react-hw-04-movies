import {
  NavigationStyled,
  NavList,
  NavItem,
  LinkStyled,
} from "./Navigation.styled.js";

const Navigation = () => {
  return (
    <NavigationStyled>
      <NavList>
        <NavItem>
          <LinkStyled exact="true" to="/">
            Home
          </LinkStyled>
        </NavItem>
        <NavItem>
          <LinkStyled to="/movies">Movies</LinkStyled>
        </NavItem>
      </NavList>
    </NavigationStyled>
  );
};

export default Navigation;
