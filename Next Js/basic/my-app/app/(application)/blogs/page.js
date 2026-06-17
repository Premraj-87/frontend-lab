import Link from "next/link";

 const  page  = () => {

  return (
    <div>
        <h1 className="flex flex-col">This is blog page
          <p>Blog 1</p>
          <p>Blog 2</p>
          <p>Blog 3</p>
          <Link href="/">Home Page</Link>
        </h1>

    </div>
  )
}
export default page