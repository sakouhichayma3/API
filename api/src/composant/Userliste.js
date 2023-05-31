import React,{useEffect,useState} from 'react';
import axios from 'axios'
const Userliste = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{setData(response.data)
console.log(response)
})
    },[])
  return (
    <div>
      {data.map((e)=>(<div>
        nameis:{e.name}
      </div>))}
    </div>
  );
}

export default Userliste;
