import createHistory from 'history/createBrowserHistory';
import './Setting.css'

const history = createHistory();
export default function Setting(){

    function logout(){
        history.push('/');
        window.location.reload();

    }
    return(
        <>
        <h1>Setting Component</h1>
        <h3>Fist Name:Akshay</h3>
        <h3>Last Name:Tyagi</h3>
      
        <button className="logout" onClick={logout} >logout</button>
        </>
    )
}