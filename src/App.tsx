import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage.tsx"
import RegisterPage from "./pages/RegisterPage.tsx"
import HomePage from "./pages/HomePage.tsx"
import CartPage from "./pages/CartPage.tsx"
import ProductsPage from "./pages/ProductsPage.tsx"
import ViewProductPage from "./pages/ViewProductPage.tsx"
import OrderHistoryPage from "./pages/OrderHistoryPage.tsx"



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/viewproduct" element={<ViewProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
