import Card from "react-bootstrap/Card";

function Info({ image }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
          views:{image.views}
          <br></br>
          downloads:{image.downloads}
          <br></br>
          collection:{image.collection}
          <br></br>
          comments:{image.comments}
          <br></br>
          likes:{image.likes}
          <br></br>
        </Card.Text>
        <Card.Link href={image.largeImageURL}>{image.pageURL}</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Info;
