import React from "react";

const TicketDetails = ({ticket, setList}) => {
   if (ticket !== null && ticket !== undefined ){
       let {
           subject,
           description,
           priority,
           status,
           created_at,
           submitter_id,
           requester_id,
           assignee_id
       } = ticket;
    
       const TranslateTime = (time) => {
           const date = new Date(time);
           return date.toLocaleString("en-US");
       };
    
       created_at = TranslateTime(created_at);
    return (
            <>
                <button
                    className="btn btn-primary my-5"
                    onClick={() => setList(true)}
                    id="button1">
                    Back to Tickets List
                </button>
                <h2 id="header">Subject: {subject === null ? "Unknown" : subject}</h2>
                
                <div className="card">
                    <ul className="list-group list-group-flush fs-6"
                        id="detail-list">
                        <li className="list-group-item py-3"
                            id="description">
                            Description:
                            <p> {description === null ? "Unknown" : description}</p>
                        </li>
                        <li className="list-group-item py-3"
                            id="priority">
                            Priority: {priority === null ? "Unknown" : priority}
                        </li>
                        <li className="list-group-item py-3"
                            id="status">
                            Status: {status === null ? "Unknown" : status}
                        </li>
                        <li id="time" className="list-group-item py-3">
                            Created At: {created_at}
                        </li>
     
                        <li className="list-group-item py-3"
                            id="submitterID">
                            Submitter ID: {submitter_id === null ? "Unknown" : submitter_id}
                        </li>
    
                        <li className="list-group-item py-3"
                            id="requesterID">
                            Requester ID: {requester_id === null ? "Unknown" : requester_id}
                        </li>
    
                        <li className="list-group-item py-3"
                            id="assigneeID">
                            Assignee ID: {assignee_id === null ? "Unknown" : assignee_id}
                        </li>
                    </ul>
                </div>
                
            </>
    )}
   
   else {
       return(
           <>
    
               <button
                   className="btn btn-primary my-5"
                   onClick={() => setList(true)}
                   id="button2">
                   Back to Tickets List
               </button>
               <h3 id="error-header"
                   className="my-5">Oops, the ticket is empty...</h3>
            </>
       )
    }


};
export default TicketDetails;