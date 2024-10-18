import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import Menu from './Components/Menu/menu'
import { Users } from './Components/Users/user'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Users userid={1} name={"samad"} gender={"Male"} age={23}/>
    
  </StrictMode>,
)
