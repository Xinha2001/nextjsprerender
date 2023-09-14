import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Router from "next/router"

function eventlist({eventList})
{   const [events, setEvents] = useState(eventList)
    const router= useRouter()
    const fetchSports = async() =>
    {
        const response = await fetch ("http://localhost:4000/events?category=sports")
        const data = await response.json()
        setEvents(data)
        router.push("/events?category=sports", undefined, {shallow:true})
    }
    return(
        <div>
            <h1>List of events</h1>
            <p>
                Visit sports events List
                <button onClick={()=>fetchSports()}>Sports Events</button>
            </p>
            {events.map((events)=>
            (
                <ul>
                    <li key={events.id}>
                    <span>{events.id}</span><br/>
                    <span>{events.title}</span><br/>
                    <span>{events.category}</span><br/>
                    <span>{events.date}</span><br/>
                    <hr/>
                    </li>
                </ul>
            ))}
        </div>
    )
}
export default eventlist

export async function getServerSideProps(context)
{   const {query} = context
    const {category} = query
    const queryList =  category? "category=sports":""
    
    const response = await fetch (`http://localhost:4000/events?${queryList}`)
    const data = await response.json()
    console.log(data)
    return {
        props:{
            eventList:data,

        }
    }

}