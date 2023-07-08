import React, { useCallback, useRef }  from 'react'
import useCycle from './Hooks/useCycle'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import googleLogo from './assets/google.svg'
import telegramLogo from './assets/telegram.svg'
import whatsappLogo from './assets/whatsapp.svg'
import teslaLogo from './assets/tesla.svg'
import vueLogo from './assets/vue.svg'
import facebookLogo from './assets/facebook.svg'
import discordLogo from './assets/discord.svg'

const images = [
  viteLogo,
  reactLogo,
  googleLogo,
  telegramLogo,
  whatsappLogo,
  teslaLogo,
  discordLogo,
  facebookLogo,
  vueLogo
]
function Counter() {

  const [current, next] = useCycle(images)
  const stepInputRef = useRef(null)
  console.log(current)
  
  const onClick = useCallback(() => {
    next(stepInputRef.current?.value ?? 0)
  }, [])

  return (
    <div className='wrap'>
      <div className='wrapper'>
        <img className='wrapper__img' src={images[current]} key={current} />
      </div>
      <div>
        <label style={{display: 'block', fontSize: '.8rem', marginBottom:'.8rem'}} >Enter Steps, then click button below</label>
        <input type='number' defaultValue={0} ref={stepInputRef} placeholder='next...'style={{marginBottom: '1rem', padding:'8px'}}/>
        <span style={{marginLeft: '8px', fontSize: '.8em'}}>Max: 8</span>
      </div>
      <button onClick={onClick}>Current: {current}</button>
    </div>
  )
}



export default Counter