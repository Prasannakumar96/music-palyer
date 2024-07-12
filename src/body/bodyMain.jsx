import React, { useState } from 'react'
import bodyStyles from "./styles/body.module.scss"
import Header from './childs/header'
import Body from './childs/body'
const BodyMain = () => {

  const [inputVal , setInputVal ] =useState("")

  return (
    <div className={bodyStyles.container}>
      <Header inputVal={inputVal} setInputVal={setInputVal} />
      <Body  inputVal={inputVal} setInputVal={setInputVal} />
    </div>
  )
}

export default BodyMain
