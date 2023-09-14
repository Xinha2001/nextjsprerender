import { useRouter } from "next/router";

function ProductList({product})
{
    const router=useRouter();
    if (router.isFallback)
    {
        return<h1>Page is loading</h1>
    }
    else
    return (
        <div>
            <ul>
                <li key = {product.id}>
                    <span>{product.title}</span><br/>
                    <span>{product.price}</span><br/>
                    <hr/>
                </li>
            </ul>
        </div>
    )
}
export default ProductList

export async function getStaticPaths()
{
    const response= await fetch ("http://localhost:4000/products")
    const data = await response.json()
    const paths = data.map((products)=>
    {
       return{
        params:
        {
            productid:`${products.id}`
        }
       } 
    })
    return{
        paths:paths,
        fallback:true
    }
}

export async function getStaticProps(context)
{
    const {params}=context
    const response=await fetch (`http://localhost:4000/products/${params.productid}`)
    const data = await  response.json()
    console.log(`Generating page for /posts/${params.productid}`)
   return{
    props:{
        product:data
    },
    revalidate:5,
   }
}   