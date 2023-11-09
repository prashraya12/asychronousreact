// #fetching data with Hooks
import './App.css';
import { useEffect , useState } from 'react';



function App() {

const [data, setData] = useState(null);

useEffect(()=>{

const data = fetch("https://api.github.com/users/defunkt").then((response) => response.json())
.then(setData);


}, []);

if(data){

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

  return (
    <h1>Data</h1>
  );
}

export default App;
