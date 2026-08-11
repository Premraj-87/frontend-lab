
const  Blog1 = async ({params}) => {
  console.log( await params)
  const {blogID} = await params
  return (
    <div>
     All comments for Blog {blogID}  
      page
    </div>
  )
}

export default Blog1
