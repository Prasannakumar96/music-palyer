import React, { useEffect, useState } from 'react'
import bodyStyles from "./styles/body.module.scss"
import Header from './childs/header'
import Body from './childs/body'
import { useDispatch } from 'react-redux'
import { getSongs } from '../redux/slices/changeval'
const BodyMain = () => {

  const [inputVal , setInputVal ] =useState("")

  const dispatch = useDispatch()

  useEffect(()=> {

    dispatch(getSongs(inputVal))

  },[inputVal])

  return (
    <div className={bodyStyles.container}>
      <Header inputVal={inputVal} setInputVal={setInputVal} />
      <Body  inputVal={inputVal} setInputVal={setInputVal} />
    </div>
  )
}

export default BodyMain
