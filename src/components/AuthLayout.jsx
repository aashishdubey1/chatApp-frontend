import { Outlet } from 'react-router'
import Noise from '../components/ui/Animations/Noise/Noise'
import MagnetLines from './ui/Animations/MagnetLines/MagnetLines'

const AuthLayout = () => {
  return (
    <div className='flex flex-col items-center sm:items-start sm:px-16 md:px-26 lg:px-36 h-[100vh] bg-[#4A0404]'>
         <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
      />
          <Outlet />
          <MagnetLines className='absolute top-40 right-44 invisible lg:right-60 lg:top-44 lg:visible'
            rows={9}
            columns={9}
            containerSize="50vmin"
            lineColor="tomato"
            lineWidth="0.3vmin"
            lineHeight="3vmin"
            baseAngle={45}
            style={{ margin: "2rem auto" }}
        />
    </div>
  )
}

export default AuthLayout