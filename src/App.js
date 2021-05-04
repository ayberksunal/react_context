import './App.css';
import Navbar from './Components/Navbar'
import TodoList from './Components/TodoList'
import ThemeContextProvider from './contexts/ThemeContext'

function App() {
  return (
    <div className="App">
      <div className='ui raides very padded text container segment'>
        <ThemeContextProvider>
        <Navbar/>
        <TodoList/>
        </ThemeContextProvider>

      </div>
    </div>
  );
}

export default App;
