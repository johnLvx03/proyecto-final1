import Productos from './componentes/Productos/Productos'
import ProductosLista from './componentes/Productos/ProductosLista'
import './App.css'
import { useState } from 'react';

function App() {

  const productosPrueba = [
    { id: 1, title: "Fjallraven Backpack", precio: 109.95, imagen: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { id: 2, title: "Mens Casual T-Shirts", precio: 22.3, imagen: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX385_.jpg" },
    { id: 3, title: "Mens Cotton Jacket", precio: 55.99, imagen: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png" },
    { id: 4, title: "Mens Casual Slim Fit", precio: 15.99, imagen: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png" },
    { id: 5, title: "John Hardy Women's Legends Naga Gold & Silver Bracelet", precio: 695, image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png" },
    { id: 6, title: "Solid Gold Petite Micropave", precio: 168, imagen: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png" },
    { id: 7, title: "White Gold Plated Princess", precio: 9.99, imagen: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png" },
    { id: 8, title: "Pierced Owl Rose Gold Plated Stainless Steel", precio: 10.99, imagen: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png" },
    { id: 9, title: "WD 2TB Elements Portable External Hard Drive", precio: 64, imagen: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png" },
    { id: 10, title: "SanDisk SSD PLUS 1TB Internal SSD", precio: 109, imagen: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png" }
    
  ];

  const [carrito, setCarrito] = useState([])
  const [busqueda, setBusqueda] = useState("")

  const agregarAlCarrito = (Productos) =>{
    setCarrito((prev) => [...prev, Productos]);
  }

  const eliminarDelCarrito = (id) =>{
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  }

  const productosFiltrados = productosPrueba.filter((prod) => 
  prod.title.toLowerCase(). includes(busqueda.toLowerCase())
 );
 

  return (
    <>
    <h1>Catalogo de productos</h1>
    <ProductosLista Productos={productosPrueba}/>
    </>
  )
}

export default App
