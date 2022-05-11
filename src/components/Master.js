import React from 'react'
import Navbar from './Navbar/Navbar'
import Dashbord from './Pages/Dashbord/Dashbord'
import PostJob from './Pages/PostJob/PostJob'
import Sidebar from './Sidebar/Sidebar'

import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Results from './Pages/Results/Result'
import Auth from './Auth/Auth'
const Master = () => {
    const pages = [
        {
            page: <Dashbord />,
            path: '/dashbord'
        },
        {
            page: <PostJob />,
            path: '/postjob'
        },
        {
            page: <Results />,
            path: '/results'
        },
    ]
    return (
        <div>
            <Navbar />
            <div style={{ display: "flex" }}>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <Routes>
                        {
                            pages.map((val) => {
                                return (
                                    <Route path={val.path} element={val.page} />
                                )
                            })
                        }
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Master