import { useEffect, useState } from "react"

const HomePage = () => {


  const [data,setData] = useState([]);
  const [find,setFind] = useState('');


 const getData = async( )=>{
  const url = `https://booking-com.p.rapidapi.com/v1/hotels/locations?name=${find}&locale=en-gb`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c54efde8eamsh5048cee7e468a4ap1e6043jsnab7fc7d5db96',
		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  setData(result);
	console.log(result);
  setFind("");
} catch (error) {
	console.error(error);
}
 }

  useEffect(()=>{
    // getData();
  },[])


  return (
    <div className="flex flex-col items-center justify-center bg-orange-400">
      
      <div className="flex gap-5 items-center">
        <input placeholder="Serach Countary" className="p-4  border border-black rounded-md" onChange={(e)=>{setFind(e.target.value)}}/>
        <button className="p-4 m-3 bg-blue-400 rounded-lg" onClick={()=>{
          getData();
          console.log('data aa raha hai');
         
        }}>Find</button>
      </div>

      <h1 className="font-bold text-xl pt-5">Hotels Details{data.length}</h1>

      {
        data?.map((mp,index) =>(
        <div key={index} className="h-[200px] w-[350px] p-3 m-3  flex items-center justify-center font-bold shadow-xl rounded-lg hover:bg-gray-300 duration-500 bg-slate-400 shadow-slate-200"> 

         <div className="w-3/12 ">
         <img src={mp.image_url} className=" rounded-lg object-cover hover:scale-125 duration-700 h-full w-full"/>
          </div>
           
           <div className="p-3 m-4 w-9/12">
           <h2 className="text-xl">{mp.name}</h2>
          <h2>Hotels Numbers:  {mp.hotels}</h2> </div>

        </div>
        ))
      }
    </div>
  )
}

export default HomePage