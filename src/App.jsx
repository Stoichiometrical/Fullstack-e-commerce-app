import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/SingleProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Route, Routes , Navigate } from "react-router-dom";



export default function App(){
    const user = true;
    return(
        <>

            <BrowserRouter>
                <Routes>
                    <Route exact  path="/">
                        <Route index element={ <Home/> } />
                        <Route path = "login" element={user ?  <Navigate to ="/" />  : <Login/> } />
                        <Route path = "register" element={user ?  <Navigate to ="/" />  : <Register/> } />
                    </Route>


                    <Route exact path="products">
                        <Route index element={ <ProductList/> } />
                    </Route>

                    <Route exact path="products/:category">
                        <Route index element={ <ProductList/> } />
                    </Route>

                    <Route exact path="product/:id">
                        <Route index element={ <Product/> } />
                    </Route>

                    <Route  path="cart">
                        <Route index element={ <Cart/> } />
                    </Route>

                </Routes>
            </BrowserRouter>

        </>
    )

}