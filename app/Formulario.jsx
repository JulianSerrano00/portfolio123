"use client";

import React, { useContext, useState } from 'react'
import { UsuarioContext } from './Context/UsuarioContext';


const Formulario = () => {

  const {Usuario, setUsuario} = useContext(UsuarioContext);
  const [name, setname] = useState("");
  const [comentario, setcomentario] = useState("");

  const addName = ({target}) =>{
    setname(target.value)
  }

  const addComentario = ({target})=>{
    setcomentario(target.value)
  }
  async function handleSubmit(event) {

    setUsuario([...Usuario, {
      titulo:"Cometarios:",
      comentario,
      usuario:name
    }])

    event.preventDefault();
    const formData = new FormData(event.target)
    try {
  
        const response = await fetch('/api/contact', {
            method: 'post',
            body: formData,
        });
  
        if (!response.ok) {
            console.log("falling over", response)
            throw new Error(`response status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log(responseData['message'])
  
        alert('Message successfully sent');
    } catch (err) {
        console.error(err);
        alert("Error, please try resubmitting the form");
    }
  };
  return (
    <form className="w-full max-w-lg formulario" id="contact-form" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="form-group w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-teal-200 text-xs font-bold mb-2" >
            Full Name
          </label>
          <input className="form-control appearance-none block w-full bg-gray-200 text-gray-800 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text" placeholder="Name" onChange={addName}
                id="form-name" autoComplete="name" maxLength={50} name="name" />
          <p className="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div className="form-group w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-teal-200 text-xs font-bold mb-2">
            Email 
          </label>
          <input className="form-control appearance-none block w-full bg-gray-200 text-gray-800 border 
          border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
            focus:border-gray-500" type="text" placeholder="example@gmail.com"
            required autoComplete="email" maxLength={80} name="email" id="exampleInputEmail1"/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="form-group  w-full px-3">
          <label className="block uppercase tracking-wide text-teal-200 text-xs font-bold mb-2" >
            Message
          </label>
          <input className="form-control appearance-none block w-full bg-gray-200 text-gray-800 border
          border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
            focus:border-gray-500" type="text" placeholder=""
            id="form-message" required name="message" />
          <p className="text-gray-600 text-xs italic"></p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-teal-200 text-xs font-bold mb-2">
            Deja tu Comentario
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-800 border
          border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
            focus:border-gray-500" id="grid-password" type="text" placeholder="" onChange={addComentario}/>
          <p className="text-gray-600 text-xs italic"></p>
        </div>
      </div>
    <button type="submit" className="btn btn-secondary">Send Email</button>              

  </form>
  )
}

export default Formulario
