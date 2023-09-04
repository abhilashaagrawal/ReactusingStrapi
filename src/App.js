import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Notfound from './pages/Notfound'
import Layout from './components/Layout'
import { routes } from './routes/Routes'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
               {
                routes.map((cv,index,arr)=>{
                    return <Route path={cv.path} element={cv.element}/>
                })
               }
            </Route>
            <Route path="*" element={<Notfound />}></Route>
        </Routes>
    </BrowserRouter>
  )
}
