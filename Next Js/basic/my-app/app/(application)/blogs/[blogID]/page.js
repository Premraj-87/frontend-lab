import Link from "next/link";
import { notFound } from "next/navigation";

 const  page  = async ({params}) => {
  const {blogID}=await params;
  if(blogID ==="test"){
    notFound();
  }
  return (
    <div>
      
        <h1 className="flex flex-col">This is blog 1
          <p>Blog {blogID}</p>
          
          <Link href="/">Home Page</Link>
        </h1>

    </div>
  )
}
export default page