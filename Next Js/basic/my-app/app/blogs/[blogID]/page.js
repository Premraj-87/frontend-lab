
const  Blog1 = async ({params}) => {
  console.log( await params)
  const {blogID} = await params
  return (
    <div>
     Blog 1{blogID}
    </div>
  )
}

export default Blog1
