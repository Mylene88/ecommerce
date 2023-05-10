import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister(event) {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        firstName: firstName, 
        lastName: lastName,
        email: email,
        username: username, 
        password: password 
      })
    };

    const response = await fetch('/api/register', requestOptions);
    const data = await response.json();

    if(response.ok){
        // Inscription réussie
        localStorage.setItem('token', data.token); // Stocker le jeton d'authentification dans le stockage local
        history.push('/login'); // Rediriger l'utilisateur vers la page de connexion
    }
    else{
        // Inscription échouée
    alert('Inscription échouée. Veuillez réessayer.'); // Afficher un message d'erreur à l'utilisateur
    }

  }

  return (
    <Container className="mt-5">
    <Form onSubmit={handleRegister}>
    <FormGroup>
      <Label for="Prénom: ">Prenom</Label>
        <Input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className="form-control" />
      </FormGroup>
      <br />
      <FormGroup>
      <Label for="Nom: ">Nom</Label>
        <Input type="text" value={lastName} onChange={e => setLastName(e.target.value)} className="form-control"/>
      </FormGroup>
      <br />
      <FormGroup>
      <Label for="Adresse e-mail: ">email</Label>    
        <Input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control"/>
      </FormGroup>
      <br />
      <FormGroup>
      <Label for="Nom d'utilisateur: ">Username</Label>
        <Input type="text" value={username} onChange={e => setUsername(e.target.value)} className="form-control"/>
      </FormGroup>
      <br />
      <FormGroup>
      <Label for="Mot de passe: ">Mot de passe</Label>
        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control"/>
      </FormGroup>
      <br />
      <Button type="submit">S'inscrire</Button>
    </Form>
    </Container>
  );
}

export default Register;
