import Card from './components/Card';
import Container from './components/Container';
import Input from './components/Input';
import useFormulario from './hooks/useFormulario'

function App() {
  const [formulario, handleChange] = useFormulario({name:'', lastname: ''})
  return (
    <Container>
    <Card>
      <div style={{padding: 20}}>
        <form>
          <Input label="Nombre: " name="name" value={formulario.name} onChange={handleChange}/>
          <Input label="Apellido: " name="lastname" value={formulario.lastname} onChange={handleChange}/>
        </form>        
      </div>
    </Card>
    </Container>
  );
}

export default App;
