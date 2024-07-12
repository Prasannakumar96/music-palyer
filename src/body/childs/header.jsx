import React, { useEffect, useState } from 'react'
import HeaderStyles from "../styles/header.module.scss";
import { ArrowLeftOutlined, ArrowRightOutlined, CaretLeftOutlined, CaretRightOutlined, SearchOutlined } from '@ant-design/icons';


const Header = ({inputVal , setInputVal}) => {

  return (
    <div className={HeaderStyles.container}>
        <div className={HeaderStyles.containerLeft}>
            <div className={HeaderStyles.navStyle}>
                <button> <CaretLeftOutlined /> </button>
                <button> <CaretRightOutlined /> </button>
            </div>
            <div className={HeaderStyles.searchBar}>
                <SearchOutlined />
                <input placeholder='Search a song' onChange={(e)=>setInputVal(e.target.value)} />
            </div>
        </div>

        <div className={HeaderStyles.containerRight}>
            <button>Sign Up</button>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Header
