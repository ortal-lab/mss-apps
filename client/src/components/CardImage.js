import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardImage=({image})=> {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image.webformatURL} />
    </Card>
  );
}

export default CardImage;