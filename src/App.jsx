import {createBrowserRouter,Navigate,RouterProvider} from 'react-router'
import AuthLayout from './components/AuthLayout'
import { HomePage } from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'


const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage />
  },
  {
    path:"/auth",
    element:<AuthLayout />,
    children:[
      {
        index:true,
        element:<Navigate to={'/auth/login'} replace/>
      },
      {
        path:'login',
        element:<LoginPage />
      },
      {
        path:'signup',
        element:<SignUpPage />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}
export default App
