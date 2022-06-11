import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { Route, Routes, Link } from 'react-router-dom';
import 'App.css';
import * as actions from 'actions';

class App extends Component {

    authLogin = (param) => {
        this.props.changeAuth(param);
    }

    renderButton(){
        if(this.props.auth){
            return(
                <button onClick={() => this.authLogin(false)}>Sign Out</button>
            );
        } else {
            return(
                <button onClick={() => this.authLogin(true)}>Sign In</button>
            );
        }
    }
    
    renderHeader(){
        return(
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post</Link></li>
                <li>{this.renderButton()}</li>
            </ul>
        );
    }

    render(){
        return(
            <div className="App">
                {this.renderHeader()}
                <Routes>
                    <Route path="/post" element={<CommentBox/>} />
                    <Route path="/" exact element={<CommentList/>} />   
                </Routes>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
