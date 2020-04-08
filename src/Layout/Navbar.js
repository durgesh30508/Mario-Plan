import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLink'
import SignedOutLinks from './SignedOutLink'
const Navbar = (props) => {
    const {auth,profile} = props
    //console.log('hello',auth)
    const Links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />  
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">MarioPlan</Link>
                {auth.isLoaded && Links}
            </div>
        </nav>
    )
}
const mapStateToProps = (state) =>{
//console.log(state)
return{
auth:state.firebase.auth,
profile:state.firebase.profile
}
}
export default connect(mapStateToProps)(Navbar)