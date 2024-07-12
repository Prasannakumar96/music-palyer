import AppStyles from "./App.module.scss";
import BodyMain from "./body/bodyMain";
import SidebarMain from "./sidebar/sidebarMain";

function App() {
  

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
