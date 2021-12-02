import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ProjectDetails from './Component/ProjectDetails/ProjectDetails';
import React, { useState } from 'react';
import { WifiLoader } from "react-awesome-loaders";
import Footer from './Component/Shared/Footer/Footer';
import Navigation from './Component/Shared/Navigation/Navigation';

function App() {
  const [loading, setLoading] = useState(true);
  window.addEventListener('load', (event) => {
    setTimeout(() => { setLoading(false) }, 2500);
    console.log('page is fully loaded');
  });
  return (
    <div style={{ background: '#324370' }}>
      {
        loading ? <div className="d-flex justify-content-center align-items-center min-vh-100">
          <WifiLoader
            background={"transparent"}
            desktopSize={"150px"}
            mobileSize={"150px"}
            text={""}
            backColor="#E8F2FC"
            frontColor="#4645F6"
          />
        </div>
          : <div className="App">
            <BrowserRouter>
              <Navigation></Navigation>
              <Routes>
                <Route path="/" element={<Home></Home>}>
                </Route>
                <Route path="/home" element={<Home></Home>}>
                </Route>
                <Route path="/projects/:projectId" element={<ProjectDetails></ProjectDetails>}>
                </Route>
              </Routes>
              <Footer></Footer>
            </BrowserRouter>

          </div>
      }
    </div>
  );
}

export default App;

{/* <div className="App">
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home></Home>}>
    </Route>
    <Route path="/home" element={<Home></Home>}>
    </Route>
    <Route path="/projects/:projectId" element={<ProjectDetails></ProjectDetails>}>
    </Route>
  </Routes>
</BrowserRouter>

</div> */}
