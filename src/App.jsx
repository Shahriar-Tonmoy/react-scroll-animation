import { Children, useState } from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <div className='bg-black flex justify-center items-center text-white h-screen'>
        Top div
      </div>
      <ParallaxBanner
      layers={[
        { image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg', speed: -30 },
        {
          speed: -30,
          children: (
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-8xl text-white font-thin">Hello World!</h1>
            </div>
          ),
        },
        { image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png",speed: -10 },
      ]}
      className="aspect-[2/1]"
    />
      <div className='bg-black flex justify-center items-center text-white h-screen'>
        Top div
      </div>
    </div>

  )
}

export default App
