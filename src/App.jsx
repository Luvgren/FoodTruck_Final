import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css'
import './css/other/btn.css'
import './css/other/header.css'

import { RouterProvider } from 'react-router-dom';  
import router from './router/router';

function App() {
  return (
    <div className='main'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
