import { useRouter } from "next/router"

function Postlist({post})
{   const router=useRouter();
    if(router.isFallback)
    {
        return <h1>Page is loading</h1>
    }
    return(
        <div>
            <span>{post.id}</span>
            <span>{post.title}</span><br/>
            <p>{post.description}</p>
        </div>
    )
}
export default Postlist

export async function getStaticPaths()
{
    const response = await fetch ("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    const paths=data.map((post)=>
        {
            return{
                params:{
                postid:`${post.id}`
            }}
        })

    return {
        paths:paths,
        fallback:true
    }
}

export async function getStaticProps(context)
{
    const {params}=context
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
    const data=await response.json()
    console.log(`Generating page for /posts/${params.postid}`)
    if(!data.id)
    {
        return{
            notFound:true
        }
    }
    return{
        props:
        {
            post:data,
        },
    }
}