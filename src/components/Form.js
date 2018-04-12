import React from 'react';
import TextField from 'material-ui/TextField';

const Form = () => (

  <div>
    <h1> Complete el siguiente formulario </h1>
    <TextField
      hintText="Nombre(s)"
      errorText="This field is required"
      floatingLabelText="Nombre(s)"
    /> <br />
    <TextField
      hintText="Apellidos"
      errorText="This field is required"
      floatingLabelText="Apellidos"
    /> <br />
    <TextField
      hintText="Marca automóvil"
      errorText="This field is required"
      floatingLabelText="Marca automóvil"
    /> <br />
    <TextField
      hintText="Modelo automóvil"
      errorText="This field is required"
      floatingLabelText="Modelo automóvil"
    /> <br />
    <TextField
      hintText="Color automóvil"
      errorText="This field is required"
      floatingLabelText="Color automóvil"
    /> <br />
    <TextField
      hintText="Placas"
      errorText="This field is required"
      floatingLabelText="Placas"
    /> <br />
    <TextField
      hintText="Proporcione alguna referencia de donde se encuentra"
      errorText="This field is required."
      floatingLabelText="Observaciones"
      multiLine={true}
      rows={2}
    /><br />
  </div>
);

export default Form;