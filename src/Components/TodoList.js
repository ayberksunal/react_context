import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class TodoList extends React.Component{
    static contextType = ThemeContext;
    render(){
        const { isDarkTheme, darkTheme, lightTheme, changeTheme} = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;

        return(
            <div style={{background: theme.background, color: theme.text, height: '140px', textAlign:'center'}} >
                <p className='item'>Plan the family trip</p>
                <p className='item'>Go to shopping for dinner</p>
                <p className='item'>Do sport!</p>
                <button className='ui button primary' onClick={changeTheme}>change the theme</button>
            </div>
        )
    }
}

export default TodoList;