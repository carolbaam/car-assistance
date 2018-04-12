import React from 'react';
import AppBar from 'material-ui/AppBar';
import MenuItem from "./MenuItem"
 
class Bar extends React.Component {
  // Constructor para inicializar el estado
  constructor(props){
    super(props);
    this.state =
    {
      visible: false
    }

  }
  render (){
    return (
      <div >
        <AppBar className = "menuitem"
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        >
        <MenuItem name ="1"/>
        </AppBar>
        
      </div>
    );
  }
}
export default Bar;