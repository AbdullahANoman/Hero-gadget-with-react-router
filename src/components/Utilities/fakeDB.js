import { json } from "react-router-dom";

const addToDB = (id) => {
  let shoppingCart = {};

  const storedCart = localStorage.getItem('shopping-cart');
  if(storedCart){
    shoppingCart = JSON.parse(storedCart);
  }
  
  const quantity = shoppingCart[id];
  if(quantity){
    const newQuantity = quantity+1;
    shoppingCart[id] = newQuantity;
  }
  else{
    shoppingCart[id] = 1;
  }
  localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
};

const getLocalStorageData = () =>{
    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
}

export { addToDB ,getLocalStorageData};
