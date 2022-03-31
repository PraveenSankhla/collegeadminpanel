import './App.css';
import { useState, useEffect} from "react";
import fire from './fire'

function App() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [hasAccount, setHasAccount] = useState(false);

const handleLogin = () =>{
  fire
  .auth
  .signInWithEmailAndPassword(email, password)
  .catch(err =>{
    
  })
}
// const [allEntry, setAllEntry]= useState([]);

// const submitform = (e) =>{
//   e.preventDefault();
//   const newEntry = {
//     email : email,
//     password : password
//   }

//   setAllEntry([...allEntry, newEntry]);
  // console.log(allEntry)

//   const submitform = ()=>{
//   if(email=="pk54451636465@gmail.com"){
//     return(
//       <div>
//       console.log("hello")
//       </div>
//     )
//   }
//   else{
//     console.log("enter Valid login Info")
//   }
// }
  
  return (
    <>
    <div className='slider'>
      <div className='container'>
        <div className='header'>
          <img src='./img/01.png'></img>
          <h1> SignUp</h1>
        </div>
      <form>
        <input type='email' placeholder='E-mail' name='email' id='email'></input>
        {/* <div className='toggle'> */}
        <input type={passwordShown ? "text" : "password"} placeholder='Password' id='password'>
        </input>
        <input type="checkbox" onClick={togglePassword} id='tg'></input>
        {/* </div> */}
        <input type='submit' value='Submit' className='sub' id='submit'></input>
        </form>
      </div>
    </div>
    </>
  );
}

export default App;
