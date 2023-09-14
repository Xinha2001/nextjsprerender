import useSwr from "swr"

const fetcher = async()=>
{
    const response = await fetch ("http://localhost:4000/dashboard")
    const data = response.json()
    console.log(data)
    return data
}

function DashboardSWR()
{
    const {data, error} = useSwr('dashboard', fetcher)
    if (error) return "An error has occured"
    if (!data) return "Page is loading"
    return(
        <div>
            <span>Posts-{data.posts}</span>
            <span>Likes-{data.likes}</span>
            <span>Followers-{data.followers}</span>
            <span>Following-{data.following}</span>
            
        </div>
    )

}

export default DashboardSWR