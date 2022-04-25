import styled from 'styled-components';
import Navigation from '../../components/Navigation/Navigation';

export default function Home() {
  return (
    <HomePage>
      <Bubble>
        Deciding where and what to eat for Breakfast Lunch or Dinner can be
        super easy, but it can also be really tough.
        <p>Let W.D.W.E help you figuring it out!</p>
      </Bubble>
      <Gif
        src="https://media.giphy.com/media/GDqDZOPSZJC00/giphy.gif"
        alt="two people discussing where to eat"
      />

      <Navigation />
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
  @media screen and (min-width: 700px) {
    width: 600px;
  }
`;

const Bubble = styled.div`
  position: relative;
  background: #000000;
  color: white;
  font-family: Arial;
  font-size: 14px;
  line-height: 25px;
  text-align: start;
  width: 250px;
  height: 130px;
  border-radius: 10px;
  padding: 6px;
  padding-left: 12px;
  border: goldenrod solid 1px;
  margin-bottom: 12px;
  p {
    color: gold;
    font-size: large;
    text-align: center;
    font-weight: bold;
    margin-top: 12px;
    padding-bottom: 24px;
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
