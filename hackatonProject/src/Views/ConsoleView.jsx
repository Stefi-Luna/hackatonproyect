import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';


const ConsoleView = () => {
  return (
   <div className='m-5 mb-3'>

    <CardGroup className="g-5">
      <Card>
        <Card.Img variant="top" src="https://img.pccomponentes.com/articles/32/323078/1684-microsoft-xbox-series-x-1tb.jpg" />
        <Card.Body>
          <Card.Title>Microsoft Xbox Series X 1TB Negra</Card.Title>
          <Card.Text>
          CPU. CPU Zen 2 personaliza de 8 núcleos a 3,8 GHz (3,66 GHz con SMT)
          GPU. GPU de 12 TERAFLOPS, 52 CU a 1,825 GHz con RDNA 2 personalizada.
          Tamaño de troquel SOC. 360,45 mm.
          Proceso. Mejorado de 7 nm.
          Memoria. GDDR6 de 16 GB con bus de 320 bits de ancho.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Alta Gama</ListGroup.Item>
        <ListGroup.Item>Stock: 5</ListGroup.Item>
        <ListGroup.Item>€1600</ListGroup.Item>
      </ListGroup>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://img.pccomponentes.com/articles/1080/10801089/2286-sony-playstation-5-review.jpg"/>
        <Card.Body>
          <Card.Title>Sony PlayStation 5 Slim</Card.Title>
          <Card.Text>
            Diseño compacto y ligero.
            Almacenamiento SSD de 1TB.
            Tecnología de Audio 3D.
            Retroalimentación Háptica.
            Gatillos Adaptativos.
            Incluye ASTRO'S Playroom
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Alta Gama</ListGroup.Item>
        <ListGroup.Item>Stock: 5</ListGroup.Item>
        <ListGroup.Item>€620</ListGroup.Item>
      </ListGroup>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://gizchina.es/wp-content/uploads/2024/02/XiaoU.jpg" />
        <Card.Body>
          <Card.Title>Xiaomi 14 Ultra</Card.Title>
          <Card.Text>
            Pantalla: Dynamic LTPO AMOLED 2X de 6,8 pulgadas.
            Chip: Snapdragon 8 Gen 3 con CPU de 8 núcleos.
            Cámara: Principal de 200 MP, periscopio telefoto de 50 MP, telefoto de 10 MP, ultrawide de 12 MP.
            Dimensiones: 162,3 x 79 x 8,6 mm.
            Peso: 232 g o 233 g.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Alta Gama</ListGroup.Item>
        <ListGroup.Item>Stock: 5</ListGroup.Item>
        <ListGroup.Item>€1400</ListGroup.Item>
      </ListGroup>
      </Card>
    </CardGroup>
     
      </div>
  )
}

export default ConsoleView