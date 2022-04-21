import { NavLink } from 'react-router-dom';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { AiOutlineMail, AiOutlineHome } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { GoGlobe } from 'react-icons/go';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <StyledNavigation>
      <Link to="/">
        <AiOutlineHome />
        <span>Home</span>
      </Link>
      <Link to="/RestaurantCard">
        <GiPerspectiveDiceSixFacesRandom />
        <span>Random</span>
      </Link>
      <Link to="/ContactForm">
        <AiOutlineMail />
        <span>Contact</span>
      </Link>
      <Link to="/Categories">
        <BiCategory />
        <span>Categories</span>
      </Link>
      <Link to="/GeoMap">
        <GoGlobe />
        <span>Map</span>
      </Link>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  border-top: solid 2px goldenrod;
  background-color: black;
  position: fixed;
  bottom: 0;
`;

const Link = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  color: goldenrod;
  text-decoration: none;
  opacity: 0.5;

  span {
    font-size: small;
  }
  &.active {
    color: gold;
    opacity: 1;
  }
`;
