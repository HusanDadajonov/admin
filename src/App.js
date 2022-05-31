import ThemeProvider from "../src/theme/ThemeProvider"
import GridTable from "./GridTable/GridTable";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import SignIn from "./SignIn/SignIn";



function App() {

  console.log(window.location.pathname);
  return (
    <BrowserRouter>
       <ThemeProvider>
        <div className="App">
          <Routes>
            <Route path="/signIn" element={<SignIn />} />
          </Routes>
          {
            window.location.pathname !== "/signIn" ?
            (
              <>
                <Header />
                <SideBar />
                <div style={{marginTop:"100px",paddingLeft:'100px'}}>
                  <GridTable />
                </div>
              </>
            ) : null
          }
          
        </div>
    </ThemeProvider>
    </BrowserRouter>
   
    
  );
}

export default App;