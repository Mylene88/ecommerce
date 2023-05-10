import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';


function Login() {
  const[username, setUsername] = useState('');
  const[email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
 
  async function handleLogin(event) {
    event.preventDefault();
    setIsLoading(true);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        email: email, 
        password: password
      })
    };

    const response = await fetch('/api/authenticate', requestOptions);
    const data = await response.json();

    if (response.status === 200) {
        // Authentification réussie
        localStorage.setItem('token', data.token);
        setIsLoading(false);
        // Rediriger l'utilisateur vers la page d'accueil
        history.push('/products');
      } else {
        // Afficher un message d'erreur
        setError('Nom d\'utilisateur ou mot de passe incorrect');
        setIsLoading(false);
      }
  }

  return (
    <Container className="mt-5">
      <Form onSubmit={handleLogin}>
      <FormGroup>
          <Label for="username">Username</Label>
          <Input type="username" name="username" id="username" placeholder="Votre username" value={username} onChange={e => setUsername(e.target.value)} className="form-control" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Adresse e-mail</Label>
          <Input type="email" name="email" id="email" placeholder="Votre adresse e-mail" value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Mot de passe</Label>
          <Input type="password" name="password" id="password" placeholder="Votre mot de passe" value={password} onChange={e => setPassword(e.target.value)} className="form-control" />
        </FormGroup>
        <Button type="submit" color="primary" className="mt-3" disabled={isLoading}>{isLoading ? 'Connexion en cours...' : 'Se connecter'}Se connecter</Button>
      </Form>
    </Container>
  );
}

export default Login;