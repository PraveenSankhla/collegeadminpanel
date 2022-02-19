import './App.css';
import { useState } from "react";

function App() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [allEntry, setAllEntry]= useState([]);

const submitform = (e) =>{
  e.preventDefault();
  const newEntry = {
    email : email,
    password : password
  }

  setAllEntry([...allEntry, newEntry]);
  // console.log(allEntry)

  if(newEntry.email=="pk54451636465@gmail.com"){
    return(
      <div>
        <a href='https://collegeproject-27765.web.app/'></a>
      </div>
    )
  }
  else{
    print("enter Valid login Info")
  }
}
  
  return (
    <>
    <form action='' onSubmit={submitform}>
    <div className='slider'>
      <div className='container'>
        <div className='headr'>
          <img src='./img/01.png'></img>
          <h1> SignUp</h1>
        </div>
        <div className='fom'>
        <input type='email' placeholder='E-mail' name='email' id='email' value={email}
        onChange={(e)=>setEmail(e.target.value)}></input>
        <div className='tog'>
        <input type={passwordShown ? "text" : "password"} placeholder='Password' id='password' value={password}
        onChange={(e)=>setPassword(e.target.value)}>
        </input>
        <input type="checkbox" onClick={togglePassword} id='tg'></input>
        </div>
        <input type='submit' value='Submit' className='sub' id='submit'></input>
        </div>
      </div>
    </div>
    </form>
    </>
  );
}

export default App;
