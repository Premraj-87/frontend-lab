import Link from "next/link";

export default function About() {
  return <h1 className="flex flex-col">This is About Page
   <Link href="/">Home page</Link>
  </h1>;
}