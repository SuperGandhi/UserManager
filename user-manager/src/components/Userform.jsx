import React from "react";
import useFormulario from "../hooks/useFormulario";
import Button from "./Button";
import Input from "./Input";

const Userform = ({submit})=>{
    const [formulario, handleChange, reset] = useFormulario({name:'', lastname: '', mail: ''})
    const handleSubmit= (e)=>{
        e.preventDefault();
        submit(formulario)
        reset()
    }
    return(
        <form onSubmit={handleSubmit}>
        <Input label="Nombre: " name="name" value={formulario.name} onChange={handleChange} placeholder='Nombre' />
        <Input label="Apellido: " name="lastname" value={formulario.lastname} onChange={handleChange} placeholder='Apellido'/>
        <Input label="Correo: " name="mail" value={formulario.mail} onChange={handleChange} placeholder='Correo'/>
        <Button>Send</Button>
        </form>   
    )
}

export default Userform