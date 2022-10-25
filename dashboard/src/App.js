import Home from "./pages/home/Home";
import {BrowserRouter as Router ,Route ,Routes } from "react-router-dom";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import {productsInputs, userInputs} from "./formSource";
import "./pages/style/dark.scss"
import {dark} from "@mui/material/styles/createPalette";
import {useContext} from "react";
import {DarkModeContext, DarkModeContextProvider} from "./context/darkModeContext";


export default function App(){
    const {darkMode } = useContext(DarkModeContext);
    return(
       <>

                <div className={darkMode ? "app dark" : "app"}>
                    <Router>
                        <Routes>
                            <Route path ="/">
                                <Route index element ={ <Home/> }/>
                                <Route path ="login" element ={ <Login/> }/>
                            </Route>

                            <Route path="users">
                                <Route index element ={<List/> }/>
                                <Route path=":userId" element ={ <Single/> } />
                                <Route path="new" element={<New inputs={userInputs} title="Add New User"/> }/>
                            </Route>

                            <Route path="products">
                                <Route index element ={<List/> }/>
                                <Route path=":productId" element ={ <Single/> } />
                                <Route path="new" element={<New inputs={productsInputs} title="Add New Product"/> }/>
                            </Route>

                        </Routes>
                    </Router>
                </div>


              </>


    )
}