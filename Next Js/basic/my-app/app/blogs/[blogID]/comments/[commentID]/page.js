
const  Comment = async ({params}) => {
  console.log( await params)
  const {blogID, commentID} = await params
  return (
    <div>
     Comment {commentID} for Blog {blogID}  
      page
    </div>
  )
}

export default Comment
