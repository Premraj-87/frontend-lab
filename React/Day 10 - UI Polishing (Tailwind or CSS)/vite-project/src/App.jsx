const App = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row">

      <div className="bg-indigo-300
      p-6 rounded-xl shadow-md hover:shadow-lg transition
      ">Card content</div>
      </div>
      <input 
      type="text"
      placeholder="Enter Name"
      className="w-full
      border
      rounded-lg p-3 focus:outline-none
      focus:ring-1
      focus:ring-blue-500"
      />

    </div>
  )
}
export default App