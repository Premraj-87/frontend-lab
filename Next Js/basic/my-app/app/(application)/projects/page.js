import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col">
        <h1>This is Project Page</h1>
         <Link href="/">Home Page</Link>
    </div>
  )
}
export default page