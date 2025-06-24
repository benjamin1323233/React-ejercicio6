import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import ItemGrilla from './ItemGrilla';
class Info {
  #color;
  #nombreColor;
  constructor(colorp,nombrep){
    this.#color = colorp;
    this.#nombreColor= nombrep;
  }
  get getcolor(){
        return this.#color  }
        get getnombre(){
        return this.#nombreColor }
}
const FormColores = () => {
  //const [arrayColores,setColores] = useState(JSON.parse(localStorage.getItem("coloreStorage"))||[])
  const [arrayColores, setColores] = useState(() => {
  const datosGuardados = localStorage.getItem("coloreStorage");
  return datosGuardados ? JSON.parse(datosGuardados) : [];
});
  const [infoColor,setColor]=useState("")
  const [infoNombre,setNombre]=useState("")

  useEffect(()=>{
  localStorage.setItem("coloreStorage",JSON.stringify(arrayColores))
},[arrayColores])

 const BorrarTarea = (nombreAEliminar) => {
  const coloresFiltrados = arrayColores.filter(
    (item) => item.nombre !== nombreAEliminar
  );
  setColores(coloresFiltrados);
};
const aniadirCard = (e) => {
  e.preventDefault();
  const nuevaInfo = {
    nombre: infoNombre,
    color: infoColor
  };
  setColores([...arrayColores, nuevaInfo]);
};
return(
        <>
            <Card>
      <Card.Header className='py-3'>Administrar colores</Card.Header>
      <Card.Body className='cajaForm d-flex py-4'>
        <Form className='col-12 col-md-10 col-lg-10' onSubmit={aniadirCard} >
          <Form.Group className="mb-3" controlId="colorForm">
          <Form.Label>selecciona un color</Form.Label>
      <Form.Control
        type="color"
        defaultValue="#563d7c"
        title="Choose your color"
        onChange={(e)=>{setColor(e.target.value)}}
      />
      </Form.Group>
      <Form.Group className="mb-3" controlId="colorForm">
        <Form.Control type="text" placeholder="ingresa aqui el color , ejemplo: black" className='my-2' onChange={(e)=>{setNombre(e.target.value)}} />
      </Form.Group>
<Button variant="primary" type='submit'>Guardar</Button>
    </Form>
      </Card.Body>
    </Card>
    <div className='container d-flex justify-content-center'>
      <section className='row'>
      { arrayColores.map((item, indice)=> <ItemGrilla key={indice} objetoGrilla={item} borrar={BorrarTarea} /> )}
      </section>
      </div>
        </>
    );
};

export default FormColores;