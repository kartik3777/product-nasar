import React from 'react'
import './home.css'
import ProductCard from './ProductCard'
import { useNavigate } from 'react-router-dom'

const Data =[
    {
        "name": "Product-1",
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet",
        "price": "100",
        "Available_Quantity": "40",
    },
    {
        "name": "Product-2",
        "description": "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor",
        "price": "200",
        "Available_Quantity": "40",
    },
    {
        "name": "Product-3",
        "description": "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor",
        "price": "300",
        "Available_Quantity": "40",
    },
    {
        "name": "Product-4",
        "description": "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor",
        "price": "400",
        "Available_Quantity": "40",
    },
    {
        "name": "Product-1",
        "description": "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor",
        "price": "200",
        "Available_Quantity": "40",
    },
    {
        "name": "Product-1",
        "description": "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor",
        "price": "200",
        "Available_Quantity": "40",
    },
    {
        "name": "Product-1",
        "description": "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor",
        "price": "200",
        "Available_Quantity": "40",
    },
    {
        "name": "Product-1",
        "description": "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor",
        "price": "200",
        "Available_Quantity": "40",
    },
    {
        "name": "Product-1",
        "description": "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor",
        "price": "200",
        "Available_Quantity": "40",
    },
]

function Home() {

    const navigate = useNavigate(); // Hook to navigate

    const handleAddProduct = () => {
      navigate('/add-product'); // Navigate to Add Product page
    };

  return (
    <>
    <div className='main-upper'>
     <p className='main-upper-txt'>This page display infromation about products you can view, edit and delete them</p> 
     <button className='new-product' onClick={handleAddProduct}>Add New Product</button>
    </div>
    <div className='main-page'>
        {
            Data.map((item, index) => {
                return <ProductCard 
                  key ={index}
                  name = {item.name}
                  price ={item.price}
                  description ={item.description}
                  quantity ={item.Available_Quantity}
                />
            })
        }
    </div>
    </>
  
  )
}

export default Home
