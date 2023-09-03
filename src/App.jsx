
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

function App() {
  
  const router = createBrowserRouter([
    {
      path:'/',
      element:<h1>Hello This is Home Page</h1>
    },
    {
      path:'/about',
      element:<h1>Hello I'm form <i><b>About</b></i> page</h1>
    },
    {
      path:'/contact',
      element:<h1>Hello I'm form <i><b>Contact</b></i>Page</h1>
    },
  ])

  return (
   <>
    <RouterProvider router = {router}></RouterProvider>
   </>
  )
}

export default App
