import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function Home() {
  return (
    <div className="home">
      <div className="content">
        <h1>Bienvenue sur mon site</h1>
        <div className="buttons">
          <Link to="/login"><Button color="primary">Se connecter</Button></Link>
          <Link to="/register"><Button color="secondary">S'inscrire</Button></Link>
        </div>
      </div>
      <footer>
        <p>Copyright © Mon Site</p>
      </footer>
    </div>
  );
}

export default Home;