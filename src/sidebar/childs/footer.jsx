import React from 'react'
import footerStyles from "../styles/footer.module.scss"

const Footer = () => {

    const Items = [
        "Legal" ,
        "Saftey & Privacy Center",
        "Privacy Policy",
        "Cookies",
        "About Ads",
        "Accessbility",
        "Cookies",
        
    ]
  return (
    <div className={footerStyles.container}>

        <div className={footerStyles.items}>
            {
                Items.map((item,index)=>{
                    return(
                        <div key={index}>{item}</div>
                    )
                })
            }
        </div>
      
    </div>
  )
}

export default Footer
