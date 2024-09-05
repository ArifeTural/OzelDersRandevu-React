import AppointmentList from "../components/AppointmentList"
import Dersler from "../components/Dersler"
import { appointmentData } from "../helper/data";
import { useState } from 'react';

const Home = () => {
  const [appointments, setappointments] = useState(appointmentData);

  const handleAdd= (newAppointment) =>{
    setappointments([...appointments,newAppointment])
  }
  const handleDelete=(id)=>{
    console.log(id)
    const filteredList = appointments.filter((item) => item.id !== id);
    setappointments(filteredList);
  
  }

  const handleDoubleClick = (id) => {
    const updatedList = appointments.map((app) =>
      app.id === id ? { ...app, consulted: !app.consulted } : app
    );
    setappointments(updatedList);
    localStorage.setItem("list", JSON.stringify(updatedList));
  };
  return (
    <main className="text-center mt-2">
      <h1 className="display-5">TURAL AKADEMİ</h1>
      <Dersler handleAdd={handleAdd} />
      <AppointmentList appointments={appointments}
       handleDelete={handleDelete}
       handleDoubleClick={handleDoubleClick} />
    </main>
  )
}

export default Home
