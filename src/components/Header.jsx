
const Header = () => {
  return (
    <div className="w-full py-4 bg-gray-300">
       
       <div className="flex items-center justify-between px-24 ">
        
        <div>
          <h2>LOGO</h2>
        </div>

        <ul className="flex gap-5 font-bold cursor-pointer">
          <li className=" hover:text-slate-600">Home</li>
          <li className=" hover:text-slate-600">Events</li>
          <li className=" hover:text-slate-600">Places</li>
          <li className=" hover:text-slate-600">Funds</li>
          <li className=" hover:text-slate-600">Languages</li>
        </ul>

       </div>
    </div>
  )
}

export default Header