const Contact = () => {
  return (
    <div>    
        <h1 className="font-bold text-3xl text-center">Contact Us</h1>
        <form className="flex justify-center">
          <input className="border border-black m-4 p-1 rounded" type="text" placeholder="Enter name" />
          <input className="border border-black m-4 p-1 rounded" type="text" placeholder="Enter message" />
          <button className="bg-gray-300 flex items-center px-2 py-1 m-4 rounded-md">Submit</button>
        </form>
    </div>
  )
}

export default Contact