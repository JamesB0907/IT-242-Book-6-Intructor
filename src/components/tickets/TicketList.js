import { useEffect, useState } from 'react';
import './Tickets.css';

export const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);

  const localHoneyUser = localStorage.getItem('honey_user');
  const honeyUserObject = JSON.parse(localHoneyUser);

  useEffect(
    () => {
      // Fetching all the tickets from our API
      fetch(`http://localhost:8088/serviceTickets`)
        // Taking the response and converting it to JSON
        .then((response) => response.json())
        // Taking the parsed JSON and setting it to state
        .then((ticketArray) => {
          // Setting the state of tickets to the ticketArray from the API
          setTickets(ticketArray);
        });
    },
    [] // When this array is empty, you are observing initial component state
  );

  useEffect(
    () => {
        if (honeyUserObject.staff) {

        } else {

        }
    },[tickets]
  );
  return (
    // The fragment is a ghost element that allows us to return multiple elements
    <>
      <h2>List of Tickets</h2>
        {/* Mapping over the tickets state and displaying each ticket */}
      <article className='tickets'>
        {tickets.map((ticket) => {
          return (
            <section className='ticket'>
              <header> {ticket.description}</header>
              {/* We use a ternary operator to display the emergency status */}
              {/* Ternary operators are a one-line if else statement */}
              <footer>Emergency: {ticket.emergency ? '🚨' : 'No'}</footer>
            </section>
          );
        })}
      </article>
    </>
  );
};
