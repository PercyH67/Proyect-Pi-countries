import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from "./Views/Home/Home"
import Landing from "./Views/Landing/Landing"
import Form from "./Views/Form/Form"
import Detail from "./Views/Detail/Detail"
import NavBar from './Components/NavBar/NavBar';

function App() {

  // useEffect(async ()=>{
  //   const response = await (axios.get("http://localhost:3001/countries")).data

  // })



  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/"  element={<Landing/>}/>
        <Route path="/home"  element={<Home/>}/>
        <Route path="/countries/:id"  element={<Detail/>}/>
        <Route path="/form"  element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
