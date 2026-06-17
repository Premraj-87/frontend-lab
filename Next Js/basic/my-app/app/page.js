import Link from "next/link";

export default  function Page() {

  return<>
  <div className="flex flex-col">
  <h1 className="font-bold text-white">Welcome Prem</h1>
  <Link href="/about">About</Link>
  <Link href="/blogs">blogs
  </Link>
  <Link href="/projects">projects</Link>
  <Link href="/contact">contact</Link>
  <Link href="/services">services</Link>
  </div>
  </>
}