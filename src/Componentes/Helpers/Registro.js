import React from "react";
//import { useForm } from "react-hook-form";

export const Registro = () =>{
  
  return (
    <div className="sesion-container">
    <h1>Formulario de Registro Usuario</h1>
    <br/>
    <form method="post" action="registered.html" id="registration-form">
            <div>
              <label for="first-name">Nompre completo:</label>
              <input type="text" id="nombre" name="FirstName" required="required" autofocus="autofocus"/>
            </div>
            <br/>
            <div>
              <label for="last-name">Apellido:</label>
              <input type="text" id="apellido" name="LastName" required="required" />
            </div>
            <br/>
            <div>
              <label for="email-address">Email address:</label>
              <input type="email" id="email" name="EmailAddress" required="required" />
            </div>
            <br/>
            <div>
              <label for="password">Choose a password:</label>
              <input type="password" id="password" name="Password" required="required" pattern="[a-zA-Z0-9]{5,}"
                title="At least 5 letters and numbers" />
            </div>
            <br/>
            <div>
              <label for="confirm-password">Confirm your password:</label>
              <input type="password" id="confirm-password" name="ConfirmPassword" required="required" />
            </div>
            <br/>
            <div>
              <input type="button" onclick="guardarDatos()" value="Guardar datos" />
              <p id="datos" class="he-sub2">Pulsa para ver tu nombre y tu password.</p>
              <input type="button" onclick="recuperarDatos()" value="Recuperar datos"/>
            </div>
            <br/>
          </form>
          </div>
  )
}