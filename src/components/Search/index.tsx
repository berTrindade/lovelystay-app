import {
    ChangeEvent,
    FormEvent, useCallback, useEffect, useState,
  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRequest } from '../../store/ducks/repositories/actions';
import { Container, ErrorMessage } from './styles';
import { useNavigate } from 'react-router-dom';
import { ApplicationState } from '../../store';

  
export function Search() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const history = useNavigate();

    const { error, loading } = useSelector((state: ApplicationState) => state.repositories);  
  
    console.log('error', error)

    const handleInputChanges = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      
      const { value } = e.target;

      setUsername(value);
    };
  
    const handleSubmit = useCallback((e: FormEvent) => {
      e.preventDefault();

      dispatch(loadRequest(username));

      console.log("loading", loading);
      console.log('error', error)

      if(!error && loading) return;
      else history(`/profile/${username}`);

    }, [username]);

    return (
      <Container>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            className="input"
            placeholder="Username"
            value={username}
            onChange={(e) => handleInputChanges(e)}
          />
          <button
            className="submit-button"
            aria-label="Submit"
            type="submit"
            disabled={!username}
          >
            Search
          </button>
        </form>
        {error ? <ErrorMessage>Error</ErrorMessage> : null}
      </Container>
    );
  }
  