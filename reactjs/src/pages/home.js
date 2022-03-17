import React from 'react'
import {FaqContainer} from '../containers/faqs'
import {FooterContainer} from '../containers/footer'
import {JumbotronContainer} from '../containers/jumbotron'

export default function Home() {
  return (
    <>
        <JumbotronContainer/>
        <FaqContainer/>   
        <FooterContainer/>
    </>
  )
}
