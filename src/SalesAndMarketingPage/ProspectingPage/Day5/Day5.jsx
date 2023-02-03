import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Day5Style } from './Day5.style'
import gsap from 'gsap'
import { useContext } from 'react'
import { DataContext } from '../../../App'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




export default function Day5() {

  const {day5} = useContext(DataContext)

  const scrollIntoView = ( ()=>{

let scrollItem = day5.current.querySelectorAll('.scroll-item')


scrollItem.forEach(item => {
  ScrollTrigger.create({
    trigger: item,
    start: "top center",
    toggleActions: "restart none none none",

    onEnter: () => {
      gsap.to(item,1, {
        opacity: 1,
        bottom:0,
      });
    },

    onLeave: () => {
      gsap.to(item,1, {
        opacity: 0,
        bottom:'70px',
      });
    },

    onLeaveBack: () => {
      gsap.to(item,1, {
        opacity: 0,
        bottom:'70px',
      });
    },

    onEnterBack: () => {
      gsap.to(item,1, {
        opacity: 1,
        bottom:0,
      });
    },
  })

})


  } )



useEffect( ()=>{
  scrollIntoView()
} )


  return (
    <Day5Style ref={day5}>
      <div className="content">




<div className="header3 scroll-item">
Who is this course for?
</div>

<div className="summary2 ">
  <ul>
<li className='scroll-item'>Young and Intending Sales Professionals</li>
<li className='scroll-item'>Account Executives</li>
<li className='scroll-item'>Sales Executives</li>
<li className='scroll-item'>SME Owners </li>
<li className='scroll-item'>Young Graduates </li>
<li className='scroll-item'>Freelance Marketers</li>
<li className='scroll-item'>Coaches and Mentors</li>
<li className='scroll-item'>Business Executives & Entrepreneurs</li>
<li className='scroll-item'>Sales Consultants</li>
<li className='scroll-item'>CEOs</li>
</ul>
</div>


<div className="header3 scroll-item">
Training Fee: N43,950 for 3 days
</div>

<div className="header3 scroll-item">
Training Fee: N14,950 per day
</div>


<Link to='#'>

<div className='get-started-btn scroll-item'>
<span>BUY NOW</span>
</div></Link>
</div>



    


    </Day5Style>
  )
}
