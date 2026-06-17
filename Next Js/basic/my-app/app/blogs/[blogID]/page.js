import Link from "next/link";

 const  page  = async ({params}) => {
  const {blogID}=await params;
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