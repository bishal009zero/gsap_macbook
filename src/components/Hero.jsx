import React, { useEffect, useRef } from 'react'

const Hero = () => {
  const videoRef = useRef();
  useEffect(() => {
    if(videoRef.current) videoRef.current.playbackRate = 2;
  },[])

  return (
    <section id='hero'>
       <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook Title" />
       </div>

       <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>

       <button>Buy</button>

       <p>from 559 or 399</p>
    </section>
  )
}

export default Hero
