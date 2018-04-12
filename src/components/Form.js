import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
    margin: 12,
};

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            lastname:"",
            autobrand:"",
            automodel:"",
            autocolor:"",
            placas:"",
            reference:""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        console.log(event.target.name);
        const inputSelected = event.target.name;
        this.setState({
        [inputSelected]:event.target.value

            // name: event.target.value,
            // lastname: event.target.value
            
        })
    }

    handleSubmit(event) {
        //console.log(event.state.value);
        event.preventDefault();
        alert('Su grua esta en camino');
        const objectState = this.state;
        console.log(objectState);

    }


    render(){
        return (
            <div>
                <TextField name="name" value={this.state.name} onChange={this.handleChange.bind(this)}
                    hintText="Nombres(s)"
                    errorText="This field is required"
                /><br />
                <TextField name="lastname" value={this.state.lastname} onChange={this.handleChange.bind(this)}
                    hintText="Apellidos"
                    errorText="The error text can be as long as you want, it will wrap."
                /><br />
                <TextField name="autobrand" value={this.state.autobrand} onChange={this.handleChange.bind(this)}
                    hintText="Marca automovil"
                    errorText="This field is required"
                /><br />
                <TextField name="automodel" value={this.state.automodel} onChange={this.handleChange.bind(this)}
                    hintText="Modelo Automovil"
                    errorText="This field is required"
                /><br />
                <TextField name="autocolor" value={this.state.autocolor} onChange={this.handleChange.bind(this)}
                    hintText="Color Automovil"
                    errorText="This field is required"
                /><br />
                <TextField name="placas" value={this.state.placas} onChange={this.handleChange.bind(this)}
                    hintText="Placas"
                    errorText="This field is required"
                /><br />
                <TextField name="reference" value={this.state.reference} onChange={this.handleChange.bind(this)}
                    hintText="Observaciones"
                    errorText="This field is required"
                    floatingLabelText="Proporcione alguna referencia de donde se encuentra"
                    multiLine={true}
                    rows={4}
                /><br />
                <RaisedButton name="button" type="submit" label="Grua" primary={true} style={style} onClick={this.handleSubmit} />   
            </div>

        );
    }
}




export default Form;