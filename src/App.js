import './App.css';
import image1 from "./Images/blackBusinessWoman.jpeg";
import Display from "./Display";
import Button from "./Button";
import {useState} from "react";
import {FaHeart, FaGithub} from "react-icons/fa";
import SocialMedia from "./SocialMedia"
// import { Link } from 'react-router-dom';

function App() {

  const [aboutMe, setState] = useState("I'm a Frontend Developer.");

  const handleName = () => {
    setState("My name is Selina.");
  }

  const handleSkills = () => {
    setState("I'm a Frontend Developer.");
  }

  const [count, setCount] = useState(0);

  return (
    <div className="appStyling">

        <img src = {image1} alt = "BlackWomen" className = "woman"/>
        
          <h1 className = "firstBox">Hi!</h1>
        
          <Display info = {aboutMe} className = "info"/>

          <div  className = "btns">
            <Button clickHandler = {handleName}  btnText= {"Name"} />
            <Button clickHandler = {handleSkills} btnText= {"Skills"} />
          </div>

          <p>{count}<button onClick={() => setCount(count + 1)} className = "likeBtn">
            <FaHeart size = "2em" color="red"/>
          </button></p>

          <SocialMedia  className = "smStyle"/>

          {/* btnClick(){
            window.open("https://github.com/seltow")
          }
          render(){
            return
          } */}

          
          {/* <Link to = {"https://github.com/seltow"}>
            <button a = ""> 
              <FaGithub className = "socialMedia"/>
            </button>
            </Link> */}

    </div>
  );
}

export default App;
