import { waitUntilSymbol } from "next/dist/server/web/spec-extension/fetch-event";
import Link from "next/link";


export const getStaticProps = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
        props:{
            data,
        }
    }
}


const blogget = ({data}) => {
    console.log(data)
  return (
    <div>
      {data.slice(0,5).map(element => <Link href={`/blog/${element.id}`}> <h1>{element.title}</h1></Link>)}
    </div>
  )
}

export default blogget;
