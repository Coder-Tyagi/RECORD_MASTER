import createHistory from 'history/createBrowserHistory';
import React from 'react';
import axios from "axios";
import './Dashboard.css'
const history = createHistory();
export default class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            user: null,
           
        }
        this.data={
            id:'',
            FirstName:'',
            LastName:''
        }
    }
    componentDidMount() {

        fetch('https://api.github.com/users').then((resp) => {
            resp.json().then((result) => {
                console.warn(result)
                this.setState({ user: result })


            })

        })
    }

    setting() {

        history.push('/setting');
        window.location.reload();

    }


    Remove(id) {
        fetch(`https://api.github.com/users/${id} `, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp);
            })
        })

    }
    Add(){
      alert("Data added");
      console.warn(this.data);

        fetch('https://api.github.com/users', {
            method:'POST' ,
            headers:{
                'Accept':'application/json' ,
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.data)
            

        }).then((result)=>{
console.warn(result);
        })
    }

    render() {
        console.warn(this.state);
        return (
            

            <>
                <button className='setting' onClick={() => this.setting()} >Setting</button>
                {/* <button className='btn' onClick={getData} >Fetch</button> */}

                <h1>Dashboard Component</h1>
                {

                    this.state.user ?

                        this.state.user.map((item, i) =>
                            <div >
                                <table border="5px">
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.login}</td>
                                        <td><img className='user_img' src={item.avatar_url} /></td>
                                        <td>
                                            <button className='delete' onClick={() => this.Remove(item.login)} >Remove Employee</button></td>
                                    </tr>


                                </table>


                            </div>

                        )
                        : null
                }
                Want to Add new user ?
                Fill this basic details and click on add user
                   
            <form onSubmit={()=>this.Add()} >  
                <div class="form-field">

             <input onChange={(e)=>this.setState({ id: e.target.value })} type="number" placeholder="id" required />
                       
                </div>

                <div className="form-field">
                    <input  onChange={(e)=>this.setState({ FirstName: e.target.value })} type="text" placeholder="FirstName" required />
                </div>
                <div className="form-field">
                    <input  onChange={(e)=> this.setState({ LastName: e.target.value })} type="text" placeholder="LastName" required />
                </div>

                <div className="form-field">
                    <button className="btn" type="submit">Add User</button>
                </div>
            </form>
                
                



            </>
        )
    }
}
