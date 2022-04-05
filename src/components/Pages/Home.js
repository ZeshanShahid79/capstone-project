import { Link } from 'react-router-dom';
import Button from '../Button/Button';

export default function Home() {
  return (
    <>
      <Link to="/RestaurantCard">
        <Button>Random</Button>
      </Link>
      <Link to="/ContactForm">
        <Button>Contact Us</Button>
      </Link>
    </>
  );
}
