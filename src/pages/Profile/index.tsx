import { useDispatch, useSelector } from 'react-redux';
import { Table } from '../../components/Table';
import { ApplicationState } from '../../store';
import { Container, OwnerContainer } from './styles';
import avatarFallbackImage from '../../assets/GitHub-Mark-120px-plus.png';
import { Header } from '../../components/Header';

export function Profile() {
  const repositories = useSelector((state: ApplicationState) => state.repositories);  

  const { data } = repositories || {};

  const { owner } = data[0] || {};

  return (
    <>
      <Header />
      <Container>
        <OwnerContainer>
          <img src={owner ? owner.avatar_url : avatarFallbackImage} alt="Avatar" />
          <h1>{owner && owner.login}</h1>
        </OwnerContainer>
      
        {repositories ? (
        <Table columns={['NAME', 'DESCRIPTION']} widths={['auto', '', '']}>
          {data.map((repository) => (
            <tr key={repository.id}>
              <td>{repository.name}</td>
              <td>{repository.description}</td>
            </tr>
          ))}
        </Table>
        ) : null }
      </Container>
    </>
  );
}