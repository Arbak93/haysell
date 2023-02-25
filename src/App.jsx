import {React} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Routes, Route } from "react-router-dom";
import { Menu } from "./components/menu/menu";
import { Main } from './components/main/Main';
import './components/main/stayle.scss';
import { Devices } from './components/Devices';
import { Footers } from "./components/Footer/footer";
import { Forms } from './components/forma/form';
import { Blog } from './components/Blog/index';
import { Bloginfos } from './components/Blog/bloginfo';
//import { Photo } from './components/Blog/photo';



function App() {

 
  return (
    <div className="App ">
      
      <AppBar
        sx={{
           background: "rgb(931, 916,290)",
          display: 'flex',
          boxShadow: "none",
          width:'100%',
          zIndex:10
         }} className="men">
        <Toolbar sx={{ }}>
          <Menu />
        </Toolbar>
      </AppBar>

        <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/" element={<Main/>}/>
        <Route path="/Սարքավորումներ" element={<Devices/>}/>
        <Route path="/form" element={<Forms/>}/>
        <Route path="/blog/:id" element={<Bloginfos/>}/>
        <Route path="/blogs" element={<Blog/>}/>
       </Routes>
     
       <Footers/>
    
    </div>
  );
}

export default App;
