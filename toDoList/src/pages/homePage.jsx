import '../css/homePage.css';
import InputTask from '../component/inputTask';
import SchoolToDoListTitle from '../component/schoolToDoList';



function SchoolToDoList() {
    return (
        <div className="home-page">
            <SchoolToDoListTitle/>
            <InputTask />

        </div>
    )
}

export default SchoolToDoList;