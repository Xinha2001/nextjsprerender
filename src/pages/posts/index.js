import Link from "next/link"

function Postlist({posts})
{
   return(
      <div>
         <h1>List of use posts</h1>
         {posts.map((post)=>
         (
            <ul>
               <Link href={`posts/${post.id}`}passHref >
               <li key={post.id}>
                  <span>{post.id}</span>
                  <span>{post.title}</span><br/>
                  <span>{post.body}</span>
               </li>
               </Link>
               <hr/>
            </ul>
         ))}
      </div>
      
   )
}
export default Postlist

export async function getStaticProps()
{
    const response = await fetch ("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    console.log(data)

    return {
        props:
        {
            posts:data
        }
    }
}