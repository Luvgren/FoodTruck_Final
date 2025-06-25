import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'

import { RouterProvider } from 'react-router-dom';  
import router from './router/router';

function App() {
  /*

- Viktigt se över hur swagger namnger, kanske behöver ändra mitt... Receipt


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
