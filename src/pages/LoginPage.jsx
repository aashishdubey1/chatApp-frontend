import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader,CardTitle, CardFooter} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import { Link } from 'react-router'

const LoginPage = () => {
  return (
    <>
      <h1 className='text-3xl sm:text-5xl font-bold mt-10 transition-all tracking-tighter text-white'>Let’s get you Onboard</h1>

    <Card className="bg-transparent p-6 shadow-md w-80 md:w-96 mt-20">
      <CardHeader>
          <CardTitle className="text-center text-2xl text-white">Login</CardTitle>
          <Separator
            className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent border-0"
          />
        </CardHeader>
        <CardContent>
          <form className="space-y-4 text-white">
            <div>
              <Label htmlFor="email" className='text-lg font-medium mb-2'>Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" className="text-sm font-light border border-white/20 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none focus:border-white/40" />
            </div>
            <div className='mb-4'>
                <Label htmlFor="password" classNam  e='text-lg font-medium mb-2'>Password</Label>
                <Input id="password" type="password" placeholder="*********" className="text-sm font-light border border-white/20 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none focus:border-white/40" />
            </div>
            <Button type="submit" className="w-full mt-4 bg-white/80 text-black border border-white/20 hover:bg-white/20 hover:text-white transition-all">Submit</Button>
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