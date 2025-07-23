import React from 'react'

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShineBorder } from "../components/ui/shineBorder";
import { Separator } from '@radix-ui/react-separator';
import Noise from '@/components/ui/Animations/Noise/Noise';


export const HomePage = () => {
  return (
    <div className='h-dvh w-full flex flex-col justify-center items-center bg-[#080808]'>
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
      />
      <Card className="relative overflow-hidden bg-transparent border-px border-white/20 w-[80vw] lg:w-[40vw]">
      <ShineBorder shineColor={["white"]}/>
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-white text-center">Chaaty</CardTitle>
        <CardDescription className="text-center">
          Let the Party begin 
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Input
              className="py-5 border-white/90 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none text-white"
               id="roomcode" type="text" placeholder="Room Code" />
            </div>
            <div className="grid gap-2">
              <Input
              className="py-5 border-white/90 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none text-white"
              id="username" type="text" placeholder="Username" />
            </div>
          </div>
        </form>
        <Button className="w-full bg-white text-black text-md font-md mt-6 hover:bg-white/80 transition-colors duration-100 cursor-pointer">Join Room</Button>
         <Separator
            className="h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent border-0 mt-6"
            />
          
          <Button className="w-full bg-[#800020] hover:bg-[#800020]/80 text-white text-md font-md mt-4 transition-colors duration-100 cursor-pointer">Create Room</Button>
          <p className='text-sm text-white mt-3 hover:scale-110 transition-all cursor-pointer text-center'>See Rooms Lists</p>
  
        </CardContent>
    </Card>
    </div>
  )
}
