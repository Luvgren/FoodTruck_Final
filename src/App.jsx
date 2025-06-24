import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'

import { RouterProvider } from 'react-router-dom';  
import router from './router/router';

function App() {

  /*
    YES - Det ska gå att hämta och visa menyn
    YES - Det ska gå att kunna lägga till produkter i en varukorg
    YES - Det ska gå att kunna ta bort produkter från en varukorg

    Det ska gå att kunna växla mellan vyer (menyn, till varukorgen, till se beställning, till se kvitto)
    Det ska gå och kunna lägga en beställning och få tillbaka ett ordernummer och en ETA (Estimated Time of Arrival)
    Det ska gå och kunna se sitt kvitto på sin beställning
  */

  /*
   - fixa css
   - fixa ./../.. vägar
   - visa vilka som är valda
   - lägg till drickor
   - onclick fort. i cart i listan
   - when click back förlorar js counter, kanske ska lägga på det direkt i dispatch
   - kolla över btn så vi kan använda det på mer än 1 ställe och lägg till onclick
   */
  return (
    <div className='main'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
