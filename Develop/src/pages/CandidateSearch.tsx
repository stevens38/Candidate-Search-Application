import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<{ login: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentUser, setCurrentUser] = useState({name: '', email: '', bio: '', company: '', location: ''});
  useEffect(() => {
    searchGithub().then((data) => {
      setCandidates(data);
    });
  }, []);  
  console.log(candidates);
useEffect(() => {
  if (candidates.length === 0) return;
  searchGithubUser(candidates[currentIndex].login).then((data) => {
    console.log(data);
    setCurrentUser(data);
  });
}, [currentIndex, candidates]);
console.log(currentUser);

  return (
    <div>
      <h1>CandidateSearch</h1>
      <div>
        <h3>{currentUser.name ||"n/a"}</h3>
        <p>{currentUser.email ||"n/a"}</p>
        <p>{currentUser.bio ||"n/a"}</p>
        <p>{currentUser.company ||"n/a"}</p>
        <p>{currentUser.location ||"n/a"}</p>
        <button onClick={() => setCurrentIndex((prev) => prev + 1)}>Next</button>
        </div>
    </div>
  );
};


//set up state for github user data


//set up state for current user index
//set up use affect to call searchGithub when the component mounts



export default CandidateSearch;
