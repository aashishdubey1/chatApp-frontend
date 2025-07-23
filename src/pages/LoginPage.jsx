import { toast } from 'sonner';
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader,CardTitle, CardFooter} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'

const LoginPage = () => {
  const navigate = useNavigate()

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('');
  const [loading,setLoading] = useState(false)

  async function handleSubmit (e){
    try {
      e.preventDefault()
      setLoading(true)
      const res = await fetch("http://localhost:4000/api/auth/login",{method:"POST",body:JSON.stringify({email,password}),headers:{"Content-Type":"application/json"}})

      const data = await res.json()

      if(!res.ok || !data.token){
        throw new Error(data.message || "Login Failed") 
      }

      localStorage.setItem("token",data.token)
      toast.success("Logged in! 🎊")

      setEmail("")
      setPassword("")

      navigate('/')


    } catch (err) {
      setLoading(false)
      toast.error(err.message)
      return
    }
  }

  return (
    <>
      <h1 className='text-3xl sm:text-5xl font-bold mt-10 transition-all tracking-tighter text-white'>Let’s get you Onboard</h1>

    <Card className="bg-transparent p-6 shadow-md w-80 md:w-96 mt-28 sm:ml-10 md:ml-30">
      <CardHeader>
          <CardTitle className="text-center text-2xl text-white">Login</CardTitle>
          <Separator
            className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent border-0"
          />
        </CardHeader>
        <CardContent>
          <form className="space-y-4 text-white" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email" className='text-lg font-medium mb-2'>Email</Label>
              <Input onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="Enter your email" className="text-sm font-light border border-white/20 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none focus:border-white/40" />
            </div>
            <div className='mb-4'>
                <Label htmlFor="password" className='text-lg font-medium mb-2'>Password</Label>
                <Input onChange={(e) => setPassword(e.target.value)} id="password" type="password" placeholder="*********" className="text-sm font-light border border-white/20 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none focus:border-white/40" />
            </div>
            <Button disabled={loading} type="submit" className="w-full mt-4 bg-white/80 text-black border border-white/20 hover:bg-white/20 hover:text-white transition-all   disabled:bg-gray-400 disabled:cursor-crosshair">Submit</Button>
          </form>
        </CardContent>
        {/* <Separator className="my-4 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent border-0" /> */}
        <CardFooter className="text-sm  w-full justify-center">
          <span className="text-white/70 mr-1">Need access?&nbsp;</span>
          <Link to="/auth/signup" className="text-white hover:underline">
            Sign up
          </Link>
        </CardFooter>
    </Card> 
    </>
  )
}

export default LoginPage