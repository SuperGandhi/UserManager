import Input from './components/Input';
import useFormulario from './hooks/useFormulario'

function App() {
  const [formulario, handleChange] = useFormulario({name:'', lastname: ''})
  return (
    <form>
      <Input label="Nombre: " name="name" value={formulario.name} onChange={handleChange}/>
      <Input label="Apellido: " name="lastname" value={formulario.lastname} onChange={handleChange}/>
    </form>
  );
}

export default App;
