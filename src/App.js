import './App.css';
import Card from "./components/Card";
import UserCard from "./components/UserCard";
import {useState} from "react";

import {people as data} from "./data/people"

function App() {
  const [people, setPeople] = useState(data)
  const clearAll = () => {
    setPeople([]);
  }

  let cards = people.map( (person) => {
     return (
      <UserCard name={person.name} img={person.img} age={person.age}/>
     )
  });
  return (
    <>
      <Card>
          <h1>{people.length} birthdays today</h1>
          {cards}
          <button className={"btn"} type={"button"} onClick={clearAll}>Clear All</button>
      </Card>
    </>
  );
}

export default App;
