import React from 'react'
import { LoadingScreen } from '../../components/layout/LoadingScreen/LoadingScreen'
import { AppRoutes } from '../../routes/AppRoutes'
import { LoginRoutes } from '../../routes/LoginRoutes'
import { UserContext } from '../../stateManagement/context/UserProvider'
const Home = () => {
    const {user} = React.useContext(UserContext)
    return (
        <>
        {/* <LoadingScreen/> */}
        {
            user.state == null ? (<LoadingScreen/>)  : (user.state? (<AppRoutes />): ( <LoginRoutes/>))
        }
        </>
    )
}

export default Home
