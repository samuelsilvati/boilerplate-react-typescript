import { Link } from 'react-router-dom';
import Container from './styles';

function NotFound() {
  return (
    <Container>
      <h1>Not Found</h1>
      <Link to="/">GO HOME</Link>
    </Container>
  );
}

export default NotFound;
