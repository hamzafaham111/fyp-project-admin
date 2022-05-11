import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
const Sidebar = () => {
    const sideManueItems = [
        {
            icon: <HomeIcon />,
            name: "Dashbord",
            link: "/"
        },
        {
            name: "Post Job",
            link: "/postjob"
        },
        {
            name: "Results",
            link: "/results"
        },
        {
            name: "Log Out",
            link: "/logout"
        }
    ]
    return (
        <div>
            <ul className='sidebar-root'>
                {
                    sideManueItems.map((val) => {
                        return (

                            <Link to={val.link} className='link'> <span>{val.icon}</span> <li className='sidebar-item'>{val.icon} {val.name}</li></Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Sidebar