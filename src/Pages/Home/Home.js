import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styled from 'styled-components';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';

export default function Home() {
  return (
    <HomePage>
      <Bubble>
        Deciding where and what to eat for lunch or dinner can be super easy,
        but it can also be really tough.
        <p>Let W.D.W.E figure it out!</p>
      </Bubble>
      <Gif
        src="https://media.giphy.com/media/GDqDZOPSZJC00/giphy.gif"
        alt="two people discussing where to eat"
      />

      <Link to="/RestaurantCard">
        <Button>
          <GiPerspectiveDiceSixFacesRandom size={20} />
        </Button>
      </Link>

      <Link to="/ContactForm">
        <Button>Contact Us</Button>
      </Link>

      <Link to="/Categories">
        <Button>Categories</Button>
      </Link>
    </HomePage>
  );
}

const HomePage = styled.main`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Gif = styled.img`
  width: 300px;
  margin-top: 50px;
  margin-bottom: 100px;
  border: solid 1px goldenrod;
`;

const Bubble = styled.div`
  position: relative;
  background: #000000;
  color: gold;
  font-family: Arial;
  font-size: 14px;
  line-height: 25px;
  text-align: center;
  width: 250px;
  height: 120px;
  border-radius: 10px;
  padding: 3px;
  border: goldenrod solid 1px;
  p {
    font-size: 16px;
    margin-top: 4px;
    margin-bottom: 5px;
  }

  :after {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    z-index: 1;
    border-style: solid;
    border-width: 29px 32px 0 0;
    border-color: #000000 transparent transparent transparent;
    bottom: -29px;
    left: 23%;
    margin-left: -16px;
  }
  :before {
    content: '';
    position: absolute;
    width: 0;
    z-index: 0;
    border-style: solid;
    border-width: 30px 33px 0 0;
    border-color: goldenrod transparent transparent transparent;
    bottom: -31px;
    left: 23%;
    margin-left: -17px;
    display: block;
  }
`;
