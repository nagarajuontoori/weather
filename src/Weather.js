import React, { useEffect, useState } from "react";

const Weather = ()=>{

  const [city,setCity] = useState(null);
  const [search,setSearch] = useState("mumbai");
  useEffect(()=>{
    const fetchApi = async ()=>{
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=83782228a0c2a8955f9e98893b7de729`
      const response=await fetch(url);
      
      const resJson = await response.json();
      setCity(resJson.main);
    }
    fetchApi();
 },[search] )
  return (
    
    <>
      <div className="box">
      
          <div className="inputdata">
              <input type="search"
              value={search}
              placeholder="city" className="inputfeild1" onChange={(event)=>{
              setSearch(event.target.value) 
              }}/>
           </div>
           {!city?(
                <p className="is-error">no data found</p>
           ):(


     <div>
            <div className="info">
            <h2 className="location">
           
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
   <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
   <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
 </svg><b>{search}</b> 
              
            </h2>
            <h1 className="temp">
                   {city.temp}  celsius
  
            </h1>
            <h3 className="tempmin-max">min:{city.temp_min}|    max:{city.temp_max}</h3>
 
 
       </div>
       <div className="wave-one"></div>
       <div className="wave-two"></div>
       <div className="wave-three"></div>
 

</div>

           
           )}
      


      </div>

   </>   
      
  
  

  );
  }

export default Weather;