
import { createHashRouter, createRoutesFromElements, HashRouter, Route,Routes, RouterProvider } from 'react-router-dom';
// import Rootlayout from './layouts/Rootlayout';
import Main from './component/Main';
import Error from './component/Error';
import Aboutpage from './component/AboutPage'
import Navbar from './component/Navbar';
import LogReg from './component/LogReg'
import AboutPage from './component/AboutPage';




// const router = createHashRouter(
//   createRoutesFromElements(
//     <> 

    
//     <Route path='/' element={<Main/>} />

//       <Route path='body' element={<Aboutpage/>}/></>
     
      
//   )
// )

function App() {
  return (

  <>
  <HashRouter>
    <Navbar />
    <Routes >
      
    <Route path='/' element={<Main/>} ></Route>
    <Route path='body' element={<LogReg/>}/>
    <Route path='about' element={<AboutPage/>}/>
    </Routes>
    </HashRouter>
    </>
  );
  }

export default App;
