import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { UserProvider } from './context/UserContext.tsx'
import { CartProvider } from './context/CartContext.tsx'
import { ProductProvider } from './context/ProductContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>  
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>  
        </ProductProvider>
    </UserProvider>
  </StrictMode>,
)
