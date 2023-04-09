import { getLocalStorageData } from "../components/Utilities/fakeDB";

const productsAndCartData = async() =>{
    const data = await fetch('products.json');
    const loadData = await data.json();


    const savedCart = getLocalStorageData();


    let cart = [];
    for(const id in savedCart){
      const value =  loadData.find(p=>p.id===id)
      if(value){
        value.quantity = savedCart[id];
        cart.push(value)
      }
    }
    return cart;
    
} 

export {productsAndCartData}