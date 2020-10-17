import React, { useState, Fragment } from 'react';
import { 
  Container,
  Row,
  Button,
} from 'react-bootstrap';
import './Users.css';

// import { Container } from './styles';

function Users() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [documentId, setDocumentId] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighbour, setNeighbour] = useState('');
  const [complement, setComplement] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const submitForm = async () => {
    const user = {
      name,
      password,
      email,
      documentId,
      zipCode,
      street,
      number,
      neighbour,
      complement,
      city,
      state
    }
    console.log('user: ', user);
  }


  return (
    <Fragment>
      <div className="Users">
        <header className="Users-header">
          <p>
            Cadastro de Usuário
          </p>
        </header>
        <Container className="Users-content">
          <Row>
              <label htmlFor={'account'}>
                Conta
              </label>
          </Row>
          <Row>
              <input
                id={'name'}
                name={'name'}
                placeholder="Nome"
                value={name}
                className='Users-input'
                onChange={e => setName(e.target.value)}
                required={true}
              />
          </Row>
          <Row>
              <input
                id={'password'}
                name={'password'}
                placeholder="Password"
                value={password}
                className='Users-input'
                onChange={e => setPassword(e.target.value)}
                required={true}
              />
          </Row>
          <Row>
              <input
                id={'email'}
                name={'email'}
                placeholder="E-mail"
                value={email}
                className='Users-input'
                onChange={e => setEmail(e.target.value)}
                required={true}
              />
          </Row>
          <Row>
              <input
                id={'documentid'}
                name={'documentid'}
                placeholder="CPF"
                value={documentId}
                className='Users-input'
                onChange={e => setDocumentId(e.target.value)}
                required={true}
              />
          </Row>
          <Row>
            <label className='Users-label' htmlFor={'address'}>
              Endereço
            </label>
          </Row>
          <Row>
            <input
              id={'zipcode'}
              name={'zipcode'}
              placeholder="CEP"
              value={zipCode}
              className='Users-input'
              onChange={e => setZipCode(e.target.value)}
              required={true}
            />
          </Row>
          <Row>
            <input
              id={'street'}
              name={'street'}
              placeholder="Rua"
              value={street}
              className='Users-input'
              onChange={e => setStreet(e.target.value)}
              required={true}
            />
          </Row>
          <Row>
            <input
              id={'number'}
              name={'number'}
              placeholder="Número"
              value={number}
              className='Users-input'
              onChange={e => setNumber(e.target.value)}
              required={true}
            />
          </Row>
          <Row>
            <input
              id={'neighbour'}
              name={'neighbour'}
              placeholder="Bairro"
              value={neighbour}
              className='Users-input'
              onChange={e => setNeighbour(e.target.value)}
              required={true}
            />
          </Row>
          <Row>
            <input
              id={'complement'}
              name={'complement'}
              placeholder="Complemento"
              value={complement}
              className='Users-input'
              onChange={e => setComplement(e.target.value)}
              required={true}
            />
          </Row>
          <Row>
            <input
              id={'city'}
              name={'city'}
              placeholder="Cidade"
              value={city}
              className='Users-input'
              onChange={e => setCity(e.target.value)}
              required={true}
            />
          </Row>
          <Row>
            <input
              id={'state'}
              name={'state'}
              placeholder="Estado"
              value={state}
              className='Users-input'
              onChange={e => setState(e.target.value)}
              required={true}
            />
          </Row>
          <Row>
            <Button
              className='Users-button'
              variant='outline-primary'
              onClick={submitForm}
            >
              Cadastrar
            </Button>
          </Row>
      </Container>
      </div>
      
    </Fragment>
  );
}

export default Users;