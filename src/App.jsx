import './App.css'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';

function App() {

  return (
    <>
      <FontAwesomeIcon icon={faInstagram} />
      <Button variant="primary">Primary</Button>
    </>
  )
}

export default App
