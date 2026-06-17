import Link from "next/link";

const page = () => {
  return (
    <div className="flex gap-1 flex-col">
      <h1>This is Web Development Service</h1>
      <Link href="/services">services Page</Link>
    </div>
  );
};
export default page;
