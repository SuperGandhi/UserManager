import { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Container from './components/Container';
import Input from './components/Input';
import useFormulario from './hooks/useFormulario'

function App() {
  const [usuarios, setUsuarios]= useState([])
  const [formulario, handleChange, reset] = useFormulario({name:'', lastname: '', mail: ''})

  const submit = e =>{
    e.preventDefault();
    setUsuarios([
      ...usuarios,
      formulario,
    ])
    reset()
  }

  return (
    
  <div style={{marginTop: '15px'}}>
    <Container>
    <Card>
      <div style={{padding: 20}}>
        <form onSubmit={submit}>
          <Input label="Nombre: " name="name" value={formulario.name} onChange={handleChange} placeholder='Nombre' />
          <Input label="Apellido: " name="lastname" value={formulario.lastname} onChange={handleChange} placeholder='Apellido'/>
          <Input label="Correo: " name="mail" value={formulario.mail} onChange={handleChange} placeholder='Correo'/>
          <Button>Send</Button>
        </form>        
      </div>
    </Card>
    <Card>
      <ul>
        {usuarios.map(x=>
          <li key={x.mail}>{`${x.name} ${x.lastname}: ${x.mail}`}</li>)}
      </ul>
    </Card>
    </Container>
  </div>
  );
}

export default App;
