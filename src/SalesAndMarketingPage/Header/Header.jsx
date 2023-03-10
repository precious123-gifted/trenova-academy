import React from 'react'
import { HeaderStyle } from './Header.styled'
import salesHeaderSvg from '../../assets/sales-header-svg.png'
import helpingHandsMobileSvg from '../../assets/HELPING HANDS FRAME mobile.png'
import { useContext } from 'react'
import { DataContext } from '../../App'
import { useEffect } from 'react'
import gsap from 'gsap'



export default function Header() {

  var mobileScreens = window.matchMedia("(max-width: 700px)")
  var desktopScreens = window.matchMedia("(min-width: 700px)")



  const {Header} = useContext(DataContext)



  const displayHeaderContent = () =>{
    let headerText = Header.current.querySelector('.header-text')
    let getStartedButton = Header.current.querySelector('.get-started-btn')
    let helpingHandSvg = Header.current.querySelector('.helping-hand')
   gsap.to(headerText,1,{top:0,opacity:1,})
   gsap.to(getStartedButton,0.4,{opacity:1,})
   gsap.to(helpingHandSvg,1,{opacity:1,marginTop:0,})

  }
  
  
  useEffect(() => {
  displayHeaderContent()
  },)

  return (
    <HeaderStyle ref={Header}>
<div className='content'>
<div className='section1'>
<div className='header-text'>
PROFESSIONAL SALES AND
MARKETING MASTER CLASS
</div>


</div>
<div className='section2'>
{
desktopScreens.matches?<img draggable="false"  src={salesHeaderSvg} className='helping-hand' alt="" srcset="" />
 : mobileScreens.matches?<img draggable="false"  src={salesHeaderSvg} className='helping-hand' alt="" srcset="" />
 :null
}


</div>
</div>

    </HeaderStyle>
  )
}
