import './App.css';
import { useEffect, useState } from 'react';
import List from './components/List';
import Wave from './components/Wave';

function App() {

  // state variables
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  let counter = 0

  // load data from api endpoint
  useEffect(() => {
    // fetch data function
    const fetchData = async () => {
      try {
        const response = await fetch('https://panorbit.in/api/users.json')
        const data = await response.json()
        console.log(data)
        setUserData(data.users)
        setLoading(false)
      } catch (error) {
        counter++;
        counter < 5 ? fetchData() : setError(true)
        setLoading(false)
      }
    }
    // on load
    setTimeout(() => {
      fetchData()
    }, 1000)
  }, [counter])

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <Wave />
      <List userData={userData} loading={loading} error={error} />
    </div>
  );
}

export default App;
