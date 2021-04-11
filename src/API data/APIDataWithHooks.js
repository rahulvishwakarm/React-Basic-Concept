import React,{useState,useEffect} from 'react'

function APIDataWithHooks() {
    const [data,setData] = useState([]);

    // useEffect  - By using this Hook, you tell React that your component needs to do something after render
    useEffect(()=>{
        // useState is a Hook (function) that allows you to have state variables in functional components
        fetch("http://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(
            (result) => {
                setData(result);
            }
        )

    },[])
    return (
        <div>
            <div>
                Use Effect
            </div>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        {item.id} {item.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default  APIDataWithHooks;