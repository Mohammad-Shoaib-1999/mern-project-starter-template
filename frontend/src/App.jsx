import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  HomePage,
  LoginPage,
  SignupPage,
  ProductsPage,
  ProductDetailsPage,
} from "./routes/Routes.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
