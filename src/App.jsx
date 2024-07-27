import { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SideNavbar from './pages/Navbar/SideNavbar';
import Spinner from './components/Spinner';
import { MyContext } from './context/MyContext';

function App() {
  // const [themeMode, setthemeMode] = useState("light")
  // const lightTheme = () => {
  //   setthemeMode("light")
  // }
  // const darkTheme = () => {
  //   setthemeMode("dark")
  // }
  // useEffect(() => {
  //   document.querySelector('html').classList.remove("light", "dark")
  //   document.querySelector("html").classList.add(themeMode)
  // }, [themeMode])
  const { loader, setloader } = useContext(MyContext)


  useEffect(() => {
    setloader(true)
  }, [])

  return (
    <>
      {loader ? <Spinner /> : <>
        <Router>
          <div className="grid grid-cols-[auto,1fr] h-screen">
            <SideNavbar />
            <div className="flex-grow p-4 ml-0 sm:ml-[20vw] md:ml-[15vw]">
              <Routes>
                <Route path='/' element={<Home />} />
                {/* Add other routes here */}
              </Routes>
            </div>
          </div>
        </Router>
      </>}


    </>

  );
}

export default App;
