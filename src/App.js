import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />

          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/newProduct" element={<NewProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
