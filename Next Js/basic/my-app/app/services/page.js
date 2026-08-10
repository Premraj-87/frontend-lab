import Link from "next/link";
export default function About() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl text-gree-800 font-bold mb-4"> All Services available</h1>
            <Link href ="/">App Development </Link>
            <Link href ="/services/web-dev">Web Development </Link>
            <Link href ="/services/seo">SEO  </Link>
            <Link href ="/services/digital-marketing">Digital Marketing </Link>
           <Link href="/" className="bg-gray-500 text-white p-2 m-2 rounded">
            Back to Home
           </Link>
           </div> 
        </>
 
    )
}
