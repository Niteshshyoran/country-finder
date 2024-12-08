import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Navbar from './components/navbar'
import {createContext} from 'react'
import {ContextCountry} from './components/countryRoute'





// const ThemeContext = createContext();

// function App(){
//   // const [theme,setTheme] = useState("lighttheme");
//   return(
//     <div>
//       <div>
//       hello world
//       </div>
//       {/* <ThemeContext.Provider>
//         <theme/>
//       </ThemeContext.Provider> */}
//     </div>
//   )
// }



function App() {
  const [country, setCountry] = useContext(countryRoute)
  const fetchHandler = () =>{
    const fetchData = async (UrlData) => {
      try{
        const response = await fetch (UrlData);
        const data = await response.json()
        setCountry(data)
      }
      catch(error){
        console.log("Something went wrong", error)
      }
    }
  }

  fetchData("https://restcountries.com/v3.1/all")

  return (
    <>
    <div className='heading'>
      <H1>country main page</H1>
    </div>
    <div>
    <button onClick={fetchHandler}>
        fetchData
      </button>
    </div>
    <div>
      {country?.map((item)=>{
        return <div>       
        <strong>FLAG</strong>
        <P>{item.flags}</P>
        <strong>language</strong>
        <p>{item.language}</p>
        </div>
      })}
      
    </div>
    </>
  )
}

export default App
export {ContextCountry}