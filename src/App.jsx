import './App.css'
import {puppyList} from './data.js'
import {useState} from 'react'

function App() {
const [puppies, setPuppies] = useState(puppyList)
const [featPupId, setFeatPupId] = useState(null)
console.log("puppyList: ", puppyList);

const handleClick = (puppy) => {
  console.log("puppy id: ", puppy.id);
  setFeatPupId(puppy.id);
};

const featuredPup = puppies.find((pup) => pup.id === featPupId)
console.log("Featured Puppy: ", featuredPup);

return (
  <div className="App">
    {puppies.map((puppy) => {
      return (
        <p onClick={() => handleClick(puppy)} key={puppy.id}>
          {puppy.name}
        </p>
      );
    })}
    {featPupId && (
        <div className="featured">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}

  </div>
);
}

export default App
