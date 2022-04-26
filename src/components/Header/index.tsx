import { RiArrowGoBackFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Container } from './styles';


export function Header() {

  return (
    <Container>
      <Link to="/"><RiArrowGoBackFill /></Link>
    </Container>
  )
}
