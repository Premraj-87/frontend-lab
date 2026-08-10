import Link from "next/link";

export default function Home() {


  return<>
  <div className="flex flex-col">
  <Link href="/about" className="bg-blue-500 text-white p-2 m-2 rounded">About</Link>
  <Link href="/blogs" className="bg-red-500 text-white p-2 m-2 rounded">Blogs</Link>
  <Link href="/services" className="bg-green-500 text-white p-2 m-2 rounded">Services</Link>
  </div>
  </>
}