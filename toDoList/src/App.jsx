// import { Router, Routes, Route} from 'react-router-dom';
import AppBar from "./component/appBar";
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






function App() {

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
      task: "Submit assignment on react Components"
    },
    {
      id: 3,
      task: "Submit assignment on react Components"
    },
    {
      id: 4,
      task: "Submit assignment on react Components"
    },
  ]

  const houseAssignment = [
    {
      id: 1,
      task: "Submit assignment on react Components"
    },
    {
      id: 2,
      task: "Submit assignment on react Components"
    },
    {
      id: 3,
      task: "Submit assignment on react Components"
    },
    {
      id: 4,
      task: "Submit assignment on react Components"
    }
  ]

  const personalAssignment = [
    {
      id: 1,
      task: "Submit assignment on react Components"
    },
    {
      id: 2,
      task: "Submit assignment on react Components"
    },
    {
      id: 3,
      task: "Submit assignment on react Components"
    },
    {
      id: 4,
      task: "Submit assignment on react Components"
    }
  ]

  return (
    <>
      <AppBar />
      <SideBar taskInfo={taskInfo} />

      <Routes>
        <Route path="/" element={<SchoolToDoList schoolAssignment= {schoolAssignment}/>} />
        <Route path="/hometask" element={<HouseAsignment houseAssignment= {houseAssignment}/>} />
        <Route path="/personaltask" element={<PersonalAsignment personalAssignment= {personalAssignment}/>} />
      </Routes>

    </>
  )
}

export default App;