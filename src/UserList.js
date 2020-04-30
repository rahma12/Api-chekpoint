import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers } from './action/UserAction'

const UserList = ({globState, getUsers}) => {
    

    useEffect(() => {
        getUsers()
    })
    
    return (
        <div>
            {globState.loading ? <h1>....LOADING</h1> : globState.posts.map(el => <div style={{color: 'white'}}>
                    <h4>{el.name}</h4>
                    <h5>{el.username}</h5>
                    <h6>{el.email}</h6>
    <p>{el.address.street}</p>
                    <p>{el.body}</p>
                </div>)}
        </div>
    )
}
const mapStateToProps = state => {
    return{
        globState: state.CounterReducer
    }
}

export default connect(mapStateToProps, { getUsers})(UserList)
