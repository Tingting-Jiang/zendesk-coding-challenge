// import "./App.css";
import React from 'react'
import TicketSummary from './components/index'


function App() {
  return (
      <div className="container my-5">
          <h1 className="text-primary text-center">
              Mobile Ticket Viewer
          </h1>
         <TicketSummary />
     
    </div>
   
  );
}

export default App;
