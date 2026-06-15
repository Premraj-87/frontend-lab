import Link from "next/link";

const page = () => {
  return (
    <div className="flex gap-1 flex-col">
      <h1>This is Service Page</h1>
     <h2 className="border p-1 rounded inline-block">All Services</h2>
     <div className="service-cont border flex-col flex p-2 rounded">
      <Link href="/">App Development</Link>
      <Link href="/">Web Development</Link>
      <Link href="/">Software Development</Link>
      <Link href="/">Dev Ops</Link>
      <Link href="/">SEO</Link>

     </div>
      <Link href="/">Home Page</Link>
    </div>
  );
};
export default page;
