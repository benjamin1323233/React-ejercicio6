import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
const ItemGrilla = ({objetoGrilla,borrar}) => {
    return (
      <>
    <Card style={{ width: '18rem' }} className='col-12 col-md-6 col-lg-4 m-3'>
      <ListGroup variant="flush">
        <ListGroup.Item>{objetoGrilla.nombre}</ListGroup.Item>
        <ListGroup.Item className='d-flex justify-content-center'>
           <div className="cajaColorItem" style={{ backgroundColor: objetoGrilla.color }}></div>
        </ListGroup.Item>
        <ListGroup.Item>
             <Button variant="danger" onClick={() => borrar(objetoGrilla.nombre)}>Borrar</Button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
          </>
  );
};

export default ItemGrilla;