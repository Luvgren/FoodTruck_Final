import { useState } from 'react'
import CartPage from './page/cart';
import Confirm from './page/confirm';
import Order from './page/order';
import Menu from './page/menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'
//import getKey from './utils';

function App() {
  const [count, setCount] = useState(0)
  //getKey();

  
  /*

  Fixa upp hämtning, kanske inte behövs på mer än 1 sida
  Fixa css om tid finns

    Det ska gå att hämta och visa menyn
    Det ska gå att kunna lägga till produkter i en varukorg
    Det ska gå att kunna ta bort produkter från en varukorg
    Det ska gå att kunna växla mellan vyer (menyn, till varukorgen, till se beställning, till se kvitto)
    Det ska gå och kunna lägga en beställning och få tillbaka ett ordernummer och en ETA (Estimated Time of Arrival)
    Det ska gå och kunna se sitt kvitto på sin beställning
  */

  return (
    <div className='main'>
      <Menu />
    </div>
  )
}

export default App
