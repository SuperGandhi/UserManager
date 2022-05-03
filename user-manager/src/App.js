import { useState } from 'react';
import Card from './components/Card';
import Container from './components/Container';
import Userform from './components/Userform';


function App() {
  const [usuarios, setUsuarios]= useState([])

  const submit = usuario =>{
    setUsuarios([
      ...usuarios,
      usuario,
    ])
  } 

  return (
    
  <div style={{marginTop: '15px'}}>
    <Container>
    <Card>
      <div style={{padding: 20}}>   
      <Userform submit={submit}/>  
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
