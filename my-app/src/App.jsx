//This Functional component
import  Welcome from "./Welcome";
import Aboutus from "./Aboutus";
import Greeting from "./Greeting";
import Name from "./Name";

function App() {
  const fname = "Charan";
  return(
    <div>
     <h1>Welcome to the learning of React!</h1>
     <Name />
     <Greeting name={fname} age="23"/>
    </div>
  )
}


