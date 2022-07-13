import React from 'react'

import { useGlobalAuthContext } from '../../Context/authContext'

const Profile = () => {
    const { user, logout } = useGlobalAuthContext()
    return (
        <>
            <h1>PROFILE PAGE</h1>
            <h1>Welcome {user}</h1>
        </>
    )
}

export default Profile