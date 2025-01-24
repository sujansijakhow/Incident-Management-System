import './App.css'
import Card from "./component/card";
import { useState } from "react";

function App() {

   // const [formInput, setformInput] = useState({id:"", title : ""});
   const [IncidentNumber, setIncidentNumber] = useState("");
   const [Title, setTitle] = useState("");
   const [Time, setTime] = useState("");
   const [Priority, setPriority] = useState("");
   const [Status, setStatus] = useState("");

   const [CardList, SetCardList] = useState([
      {
         incidentNumber: "INC0021001",
         title: "Please remove item 1 from my computer",
         time: "2023-10-09",
         priority: "3- Low",
         status: "on_hold",
      },
      {
         incidentNumber: "INC0021002",
         title: "Please remove item 2 from my computer",
         time: "2023-10-09",
         priority: "3- Low",
         status: "in_progress",
      },

   ])

   const handleIncidentChange = (e) => setIncidentNumber(e.target.value);
   const handleTitleChange = (e) => setTitle(e.target.value);
   const handleTimeChange = (e) => setTime(e.target.value);
   const handlePriorityChange = (e) => setPriority(e.target.value);
   const handleStatusChange = (e) => setStatus(e.target.value);

   const handleDelete = (cardId) => {
      // console.log(`the card with num ${cardId} is deleted`);
      const newCardList = CardList.filter(Card => Card.incidentNumber !== cardId)
      SetCardList(newCardList);
   }

   const handleEventAdd = () => {

      if (!IncidentNumber || !Title || !Time || !Priority || !Status) {
         alert("Please fill in all the input fields before adding a card.");
         return;
       }
       
      const newCardList =
      {
         incidentNumber: IncidentNumber,
         title: Title,
         time: Time,
         priority: Priority,
         status: Status,
      };
      

      SetCardList([...CardList, newCardList])
      setIncidentNumber("");
      setTitle("");
      setTime("");
      setPriority("");
      setStatus("");
      // console.log(CardList)
   }

   //   const handleForm = (changeState) =>{
   //    setformInput({
   //       ...formInput,
   //       ...changeState
   //    } )

   return (
      <div className="App">
       
         <div className='header'>
   
            <h1>Incident Management System</h1>
            <p>Track and manage incidents efficiently. Report and view incidents in one place.</p>
         </div>
         <div className='input-buttons'>
            <p> Add Incidents...</p>
            <div>status:<br></br><input onChange={handleStatusChange} value={Status} /><br></br> </div>
            <div>IncidentNumber:<br></br><input onChange={handleIncidentChange} value={IncidentNumber} /><br></br></div>

            <div>Title:<br></br><input onChange={handleTitleChange} value={Title} /><br></br></div>
            <div>Time:<br></br><input onChange={handleTimeChange} value={Time} /> <br></br></div>
            <div>Priority:<br></br><input onChange={handlePriorityChange} value={Priority} /><br></br></div>
            <div><button onClick={handleEventAdd}>AddCard</button></div>
        </div>
        <div className='body'>
        {
            CardList.map((card, index) => {
               return (
                  < Card key={index}
                     incidentNumber={card.incidentNumber}
                     title={card.title}
                     time={card.time}
                     priority={card.priority}
                     status={card.status}
                     delete={handleDelete}
                  />
               )
            })
         }
        </div>
         


      </div>
   );
}

export default App;