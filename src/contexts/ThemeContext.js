import React, {createContext} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component{
    //State degistiginde themeContext render olur. App.js icerisinde Navbar ve Todolist js leri Theme context icerisinde oldugu ıcın onlarda render olur.  
    state={
        isDarkTheme: true,
        lightTheme:{
            text: '#222',
            background: '#d8ddf1'
        },
        darkTheme:{
            text: '#fff',
            background: '#5c5c5c'
        }
    };

    //Changetheme func: Koyu temayı açık tema ile, açık temayı koyu tema ile değiştir
    changeTheme = () =>{
        this.setState({isDarkTheme: !this.state.isDarkTheme });
    }

    render() {
        return(
            <ThemeContext.Provider value={{ ...this.state, changeTheme: this.changeTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
export default ThemeContextProvider;