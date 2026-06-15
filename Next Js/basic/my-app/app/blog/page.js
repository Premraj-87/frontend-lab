import Link from "next/link";

const page = () => {
  return (
    <div>
        <h1 className="flex flex-col">This is blog page
          <Link href="/">Home Page</Link>
        </h1>

    </div>
  )
}
export default page