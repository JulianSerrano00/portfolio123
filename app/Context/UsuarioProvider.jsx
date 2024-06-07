"use client"
import { UsuarioContext } from "./UsuarioContext"
import { useState } from "react";

export const UsuarioProvider = ({children}) => {

    const [Usuario, setUsuario] = useState("");
   


  return (
    <UsuarioContext.Provider value={{
        Usuario, setUsuario    
        }}>
        {children}
    </UsuarioContext.Provider>
  )
}
