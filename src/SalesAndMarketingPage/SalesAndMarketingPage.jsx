import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { DataContext } from '../App'
import { SalesAndMarketingStyle } from './SalesAndMarketing.style'
import Header from './Header/Header'
import CoursesWeOffer from './CoursesWeOffer/CoursesWeOffer'
import CourseOutline from './CourseOutline/CourseOutline'
import ProfessionalTelemarketingSection from './ProfessionalTelemarketingSection/ProfessionalTelemarketingSection'
import ProspectingSection from './ProspectingSection/ProspectingSection'
import ObjectionSection from './ObjectionSection/ObjectionSection'




export default function SalesAndMarketingPage() {

 


  return (
    <SalesAndMarketingStyle>
        <Header/>
        <CoursesWeOffer/>
        <CourseOutline/>
        <ProfessionalTelemarketingSection/>
    <ObjectionSection/>
    <ProspectingSection/>
   
    </SalesAndMarketingStyle>
   
  )
}