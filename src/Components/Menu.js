import React, {useContext, useState} from 'react';
import './menu.css';
import { QuizContext } from '../Helpers/contexts'; 
import { Login } from '../Helpers/LoginDetails';



export default function Menu()
{
    const[Username,setUsername] = useState('');
    const[Password,setPassword] = useState('');
    const{quizState,setquizState} = useContext(QuizContext)
    const { User, setUser } = useContext(QuizContext);
    const[EditorUsername,EditorsetUsername] = useState('');
    const[EditorPassword,EditorsetPassword] = useState('');



    const Verify = () =>
    {
        const Username_exists = Login.find((user) => user.Username === Username)
        if(!Username_exists)
        {
            alert("Invalid Username");
        }
        else if (Username_exists.Password===Password){
            setUser(Username);
            setquizState("Quiz");
        }
        else{
            alert("Incorrect Password");
        }
    }

    

    return (
        <div>
        <div><h1> Welcome </h1></div>
            <div className  = "Menu">
                <div className='LoginDetails'>
                    <h3 style = {{marginRight : 'auto'}}>Username</h3>
                    <input value = {Username} onChange={e => setUsername(e.target.value)} />
                    <h3 style = {{marginRight : 'auto'}}>Password</h3>
                    <input type = "password" value = {Password} onChange={e => setPassword(e.target.value)} />

                </div>
                <button class = "Start" onClick={() => {Verify()}}> Start </button>
    
            </div>
            
        </div>
    );
}
