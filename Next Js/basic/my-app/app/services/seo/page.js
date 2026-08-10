import Link from "next/link";
export default function WebDev() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl text-green-800 font-bold mb-4">SEO Services</h1>
           
           <Link href="/" className="bg-gray-500 text-white p-2 m-2 rounded">
            Back to Home
           </Link>
           </div> 
        </>
 
    )
}
