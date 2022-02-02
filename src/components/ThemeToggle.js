import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


class ThemeToggle extends Component {
   static contextType = ThemeContext;
   state = {  } 
   render() { 
      const { toggleTheme } = this.context;
      return (
         <button onClick={toggleTheme}>Change Theme</button>
      );
   }
}
 
export default ThemeToggle;