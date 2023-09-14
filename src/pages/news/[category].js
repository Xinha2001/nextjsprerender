function Sortarticle({articles, category})
{
    return(
        <div key={articles.id}>
            <h1>Showing details for <i>{category}</i></h1>
            {articles.map((article)=>
            (   <div key={article.id}>
                <h2>{article.id} {article.title}</h2>
                <p>{article.description}</p>
                </div>
            ))}
        </div>
    )
}
export default Sortarticle

export async function getServerSideProps(context)
{
    const {params, req, res, query} = context
    console.log(query)
    console.log(req.headers.cookie)
    res.setHeader(`Set-Cookie`,[`name= `])

    const {category} = params
    const response = await fetch (`http://localhost:4000/news?category=${category}`)
    const data = await response.json()
    return {
        props:
        {
            articles:data,
            category
        }
    }

}