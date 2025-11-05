// import { Router, Routes, Route} from 'react-router-dom';
import AppBar from "./component/appBar";
import SideBar from "./component/sideBar";
import { GiGraduateCap } from "react-icons/gi";
import { IoHomeSharp } from "react-icons/io5";
import { IoPersonAdd } from "react-icons/io5";
import { IoMdStats } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";






function App(){

  let taskInfo = [
    {
      title:"School Tasks",
      logo:<GiGraduateCap />,
      url:'/schooltask'
    },
    {
      title:"Home Tasks",
      logo:<IoHomeSharp />,
      url:'/hometask'
    },
    {
      title:"Personal Tasks",
      logo:< IoPersonAdd />,
      url:'/personaltask'
    },
    {
      title:"Statistics ",
      logo:<IoMdStats />,
      url:'/statistics'
    },
    {
      title:"Settings",
      logo:<IoIosSettings />,
      url:'/settings'
    }
   
  ]
  return(
    <>
      <AppBar />
      <SideBar taskInfo = {taskInfo}/>

    </>
  )
}

export default App;