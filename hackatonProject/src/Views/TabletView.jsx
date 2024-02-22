
const TabletView = () => {
    return (
            <div className='m-5 mb-3'>

        <h1>Móviles</h1>
      <Row xs={1} md={3} className="g-5">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
             <ListGroup.Item>Cras justo odio</ListGroup.Item>
             <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
             <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      ))}
    </Row>
     
      </div>
    );
  };
  
  export default TabletView;
  