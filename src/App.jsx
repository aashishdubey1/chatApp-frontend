import {createBrowserRouter,Navigate,RouterProvider} from 'react-router'


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
        element:<SignupPage />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}
export default App
