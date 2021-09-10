import React from 'react';
import Item from './components/Item';
import Itemslist from './components/Itemslist';
import Navbarr from './components/Navbarr';
import './App.css';
import Footer from './components/Footer';
function App() {
  const itemArray = [
    {
        imageSrc :"https://images.unsplash.com/photo-1630240918587-0532fdea5edd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        name : "Coffee",
        price :"10$",
    },
    {
        imageSrc :"https://images.unsplash.com/photo-1630261234670-b9eaa949593e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
        name : "Chubby",
        price :"30$",
    },
    {
        imageSrc :"https://images.unsplash.com/photo-1630370939214-4c4041b5efc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        name : "Honey",
        price :"40$",
    },
    {
        imageSrc :"https://images.unsplash.com/photo-1504649346668-2cc86afaa2e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80",
        name : "Chicken",
        price :"7$",
    },
    {
        imageSrc :"https://images.unsplash.com/photo-1624300654594-517c05bacb8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        name : "Fraise",
        price :"17$",
    },
    {
        imageSrc :"https://images.unsplash.com/photo-1630240918587-0532fdea5edd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        name : "Coffee",
        price :"10$",
    },
    {
        imageSrc :"https://images.unsplash.com/photo-1630261234670-b9eaa949593e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
        name : "Chubby",
        price :"30$",
    },
    {
        imageSrc :"https://images.unsplash.com/photo-1630370939214-4c4041b5efc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        name : "Honey",
        price :"40$",
    },
    {
        imageSrc :"https://images.unsplash.com/photo-1504649346668-2cc86afaa2e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80",
        name : "Chicken",
        price :"7$",
    },
    {
        imageSrc :"https://images.unsplash.com/photo-1624300654594-517c05bacb8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        name : "Fraise",
        price :"17$",
    }
];
const onClik = (x,y) => {
    alert(`The Price of ${x} is: ${y}`)
}
  return (
    <div className="App">
        <div className="nav">
        <Navbarr  />
        </div>
         
     <div>
     <Itemslist  productList={itemArray} click={onClik}/>
     </div>
     
       <div className="amin" >
      <Footer finish={"It's me Amin Kammoun"}>
          <hr/>
          <h1>Cpoy Right &reg; </h1>

      </Footer>
      </div>
    
    </div>
  );
}

export default App;
