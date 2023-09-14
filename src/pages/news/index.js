import { Link } from "react-router-dom"

function newsArticleList({news})
{
    return(
        <div>
            <h1>Headline news article</h1>
            {news.map((news)=>
            (
                <ul>
          
                    <li key={news.id}>
                        <span>{news.id}</span>
                        <span>{news.title}</span>
                        <span>{news.price}</span>
                        <span>{news.description}</span>
                    </li>
              
                </ul>
            ))}
        </div>
    )
}
export default newsArticleList

export async function getServerSideProps()
{
    const response=await fetch("http://localhost:4000/news")
    const data= await response.json()
    return{
        props:
        {
            news:data
        }
    }
} 