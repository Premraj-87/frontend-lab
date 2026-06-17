 const  page  = async ({params}) => {
  const {blogID,commentID}=await params;
  return (
    <div>
        <h1 className="flex flex-col">This is comment page
          <p>Comment No.<i>{commentID} on</i>{blogID}</p>
          
        </h1>

    </div>
  )
}
export default page