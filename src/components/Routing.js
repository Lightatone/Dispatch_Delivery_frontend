import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'; 
// import Login from './Login';
import Createorder from './Createorder';
import Homepage from './Homepage';
class Routing extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route exact path='/' element={<Homepage></Homepage>}></Route>
                    <Route exact path='/creatorder' element={<Createorder></Createorder>}></Route>
                    {/* <Route exact path='/login' element={<Login></Login>}></Route> */}
                </Routes>
            </div>
        );
    }
}

export default Routing;