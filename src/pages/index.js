import Link from "next/link"
function Home()
{
  return (<>
    <h1>Pre rendering</h1>
    <Link href="/users">
      Link to users
    </Link>
    <Link href='/posts'>
    View posts
    </Link>
    <Link href="/news">
    news</Link>
    </>
  )
}
export default Home