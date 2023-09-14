import { useEffect, useState } from "react";
function dashboard()
{
    const [isLoading, setLoading]=useState(true)
    const [dashData, setDashdata]=useState(null)

    

    useEffect(() => {
      async function fetchData()
      {
        const response = await fetch ("http://localhost:4000/dashboard")
        const data = await response.json()
        setDashdata(data)
        console.log(data)
        setLoading(false)
      }

      fetchData()
    
     
    }, [])
    if(isLoading)
    {
        return <h1>Loading page</h1>
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <h2>Posts-{dashData.posts}</h2>
            <h2>Likes-{dashData.likes}</h2>
            <h2>Followers-{dashData.followers}</h2>
            <h2>Following-{dashData.following}</h2>
            
        </div>
    )
    
}

export default dashboard;
