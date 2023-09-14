import User from "./components/user"

function Userfunction({user})
{
    return  (
        <>
            {user.map((users)=>
            (
                <User user={users}/>
            ))}
        </>
    )
    
}
export default Userfunction

export async function getStaticProps()
{
    const response = await fetch ("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
   console.log(data)
   return {
    props:{
        user:data
    }
   }

   
}

