import React from 'react'
import Header from './childs/header'
import Library from './childs/library'
import Footer from './childs/footer'
import { useSelector } from 'react-redux'

const SidebarMain = () => {

  const formVals = useSelector((state) => state.changeVal.value)

  console.log(formVals)
  return (
    <div>
     
        <Header />
        <Library/>
        <Footer/>
    </div>
  )
}

export default SidebarMain
