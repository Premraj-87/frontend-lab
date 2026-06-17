 const  page  = async ({params}) => {
  const {blogID}=await params;
  return (
    <div>
        <h1 className="flex flex-col">This is comment page
          <p>Comments {blogID}</p>
          
        </h1>

    </div>
  )
}
export default page