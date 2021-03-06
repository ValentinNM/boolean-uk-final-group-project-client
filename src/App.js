import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CreateClassForm from "./Pages/CreateClassForm";
import CreateTrainerForm from "./Pages/CreateTrainerForm";
import ListOfClasses from "./components/ListOfClasses";
import ListOfMembers from "./components/ListOfMembers";
import ListOfTrainers from "./components/ListOfTrainers";
import CreateMember from "./Pages/CreateMember";
import ViewMember from "./Pages/ViewMemeber"
import EditMemberForm from "./Pages/EditMemberForm";
import Header from "./components/Header"
import EditClassForm from "./Pages/EditClassForm";
import HomePage from "./Pages/HomePage"
import TrainersPage from "./Pages/TrainersPage";
import LogIn from "./components/LogIn";


export default function App() {
  const [trainers, setTrainers] = useState([])
  const [classes, setClasses] = useState([])
  const [members, setMembers] = useState([])
  const [memberToProcess, setMemberToProcess] = useState([])
  const [trainerToView, setTrainerToView] = useState([])
  const [profile, setProfile] = useState([])
  const [address, setAddress] = useState([])
  const [classToProcess, setClassToProcess] = useState([]) // to be used for viewClass

  console.log("classToProcess:", classToProcess)
  
  const API_URL = process.env.REACT_APP_API_URL;

  function fetchClasses() {
    fetch(`${API_URL}/classes`)
      .then((res) => res.json())
      .then((classData) => {
        setClasses(classData);
      });
  }

  function fetchMembers() {
    fetch(`${API_URL}/members`)
      .then((res) => res.json())
      .then((memberData) => {
        setMembers(memberData);
      });
  }

  function fetchTrainers() {
    fetch(`${API_URL}/trainers`)
      .then((res) => res.json())
      .then((trainerData) => {
        setTrainers(trainerData);
      });
  }

  function fetchAddress() {
    fetch(`${API_URL}/address`)
      .then((res) => res.json())
      .then((addressData) => {
        setAddress(addressData);
      });
  }

  function fetchProfile() {
    fetch(`${API_URL}/profile`)
      .then((res) => res.json())
      .then((profileData) => {
        setProfile(profileData);
      });
  }

  useEffect(() => {
    fetchClasses();
    fetchMembers();
    fetchTrainers();
    fetchAddress();
    fetchProfile()
  }, [])

  return (
    <>
      <header className="header">
        < Header />
      </header>
      <Routes>
        <Route path="/" element={<HomePage trainers={trainers}
          setTrainers={setTrainers}
          classes={classes}
          setClasses={setClasses}
          members={members}
          setMembers={setMembers}
          setMemberToProcess={setMemberToProcess}
          memberToProcess={memberToProcess}
          trainerToView={trainerToView}
          setTrainerToView={setTrainerToView}
          setClassToProcess={setClassToProcess}
        />} />
        <Route path="/create-class" element={<CreateClassForm classes={classes} setClasses={setClasses} />} />
        <Route path="/create-member" element={<CreateMember members={members} setMembers={setMembers}  />} />
        <Route path="/members/view/:memberId" element={<ViewMember memberToProcess={memberToProcess} setMembers={setMembers} members={members} />} />
        <Route path="/members/edit/:memberId" element={<EditMemberForm memberToProcess={memberToProcess} members={members} setMembers={setMembers} />} />
        <Route path="/classes" element={<ListOfClasses classes={classes} setClassToProcess={setClassToProcess} setClasses={setClasses}/>} />
        <Route path="/trainers" element={<ListOfTrainers setTrainers={setTrainers} trainers={trainers} />} />
        <Route path="/create-trainer" element={<CreateTrainerForm trainers={trainers} setTrainers={setTrainers} />} />
        <Route path="/classes/:classId/editclass" element={<EditClassForm classes={classes} setClasses={setClasses} trainers={trainers} setTrainers={setTrainers} />} />
        <Route path="/members" element={<ListOfMembers members={members} setMembers={setMembers} setMemberToProcess={setMemberToProcess} />} />
        <Route path="/trainers-page" element={<TrainersPage trainerToView={trainerToView} />} />
      </Routes>
      {/* <Route path="/login" element={ <LogIn/> }  */}
    </>
  );
}

