import { useDispatch } from "react-redux";
import AppStyles from "./App.module.scss";
import BodyMain from "./body/bodyMain";
import SidebarMain from "./sidebar/sidebarMain";
import { useState } from "react";

function App() {

  const [formVals , setFormVals] = useState({

  })
  
  const callMyReduxFun = useDispatch()

  const handleSubmit = () => {
    // callMyReduxFun(changeMyComp(formVals))
  }

  const changeVals = (props) => {

    const name = props.target.name

    setFormVals({...formVals,[name] : props.target.value})
  }
  
  return (
    <div className={AppStyles.App}>
      <div className={AppStyles.sideBar} >

        <SidebarMain />
      </div>

      <div  className={AppStyles.body}>
        <BodyMain />
   
      </div>
    </div>
  );
}

export default App;
