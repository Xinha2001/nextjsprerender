import Router from "next/router"
import Link from "next/link"
function ProductList({products})
{
    return (
        <div>
        <h1>List of products given below</h1>
            <ul>
                {products.map((product)=>(
                    <Link href={`/products/${product.id}` }passHref>
                    <li key={product.id}>
                        <span>{product.title}</span><br/>
                        <span>{product.price}</span><br/>
                        <hr/>
                    </li>
                    </Link>
                    
                ))}
            </ul>
        </div>
    )
}
export default ProductList

export async function getStaticProps()
{
    const response = await fetch ("http://localhost:4000/products")
    const data = await response.json()
    return{
        props:{
            products:data
        }
    }
}