// import { Router, Routes, Route} from 'react-router-dom';
import AppBar from "./component/appBar";
import { useState } from "react";
import SideBar from "./component/sideBar";
import { GiGraduateCap } from "react-icons/gi";
import { IoHomeSharp } from "react-icons/io5";
import { IoPersonAdd } from "react-icons/io5";
import { IoMdStats } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import SchoolToDoList from "./pages/schoolPage";
import { Routes, Route } from "react-router-dom";
import HouseAsignment from "./pages/housePage";
import PersonalAsignment from "./pages/personalPage";
import GoogleBarChart from "./pages/statisticsPage";
import Calander from "./component/calander";
import Reminder from "./component/reminder";
import PopMenu from "./component/popMenu";






function App() {

  const [dropdown,setDropDown] = useState(false);

  let taskInfo = [
    {
      title: "School Tasks",
      logo: <GiGraduateCap />,
      url: '/',
      id: 1
    },
    {
      title: "Home Tasks",
      logo: <IoHomeSharp />,
      url: '/hometask',
      id: 2
    },
    {
      title: "Personal Tasks",
      logo: < IoPersonAdd />,
      url: '/personaltask',
      id: 3
    },
    {
      title: "Statistics ",
      logo: <IoMdStats />,
      url: '/statistics',
      id: 4
    },
    {
      title: "Settings",
      logo: <IoIosSettings />,
      url: '/settings',
      id: 5
    }

  ]

  const schoolAssignment = [
    {
      id: 1,
      task: "Submit assignment on react Components"
    },
    {
      id: 2,
      task: "Calculus II assignment by Monday"
    },
    {
      id: 3,
      task: "Java tutorial"
    },
    {
      id: 4,
      task: "Course resgistration online"
    },
  ]

  const houseAssignment = [
    {
      id: 1,
      task: "Wash daddy's car"
    },
    {
      id: 2,
      task: "Trim the flower"
    },
    {
      id: 3,
      task: "Cook for the child"
    },
    {
      id: 4,
      task: "Go to the back to redraw some money for mum"
    }
  ]

  const personalAssignment = [
    {
      id: 1,
      task: "Visit a friend at Kumasi"
    },
    {
      id: 2,
      task: "Go to church for prayer meeting"
    },
    {
      id: 3,
      task: "Wash my clothes by Monday"
    },
    {
      id: 4,
      task: "Join Atta at the gym tommorrow"
    }
  ]

  return (
    <>
      <AppBar setDropDown = {setDropDown}/>
      <SideBar taskInfo={taskInfo} />

      <Routes>
        <Route path="/" element={<SchoolToDoList schoolAssignment= {schoolAssignment} />} />
        <Route path="/hometask" element={<HouseAsignment houseAssignment= {houseAssignment}/>} />
        <Route path="/personaltask" element={<PersonalAsignment personalAssignment= {personalAssignment}/>} />
        <Route path="/statistics" element={<GoogleBarChart />} />
      </Routes>

      <Calander />
      <Reminder />
      {
        dropdown &&  <PopMenu />

      }

    </>
  )
}

export default App;