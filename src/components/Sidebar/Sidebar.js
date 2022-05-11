import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const Sidebar = () => {
    const sideManueItems = [
        {
            icon: <HomeIcon />,
            name: "Dashbord",
            link: "/dashbord"
        },
        {
            icon: <WorkIcon />,
            name: "Post Job",
            link: "/postjob"
        },
        {
            icon: <SpeakerNotesIcon />,
            name: "Results",
            link: "/results"
        },
        {
            icon: <ExitToAppIcon />,
            name: "Log Out",
            link: "/logout"
        }
    ]
    return (
        <div>
            <ul className='sidebar-root'>
                {/* <Link to='dashbord' className='link'> <li className='sidebar-item'> <span className='slidebar-item-icon'><HomeIcon /></span>Dashbord</li></Link>
                <Link to='postjob' className='link'> <li className='sidebar-item'> <span className='slidebar-item-icon'><WorkIcon /></span>PostJob</li></Link>
                <Link to='results' className='link'> <li className='sidebar-item'> <span className='slidebar-item-icon'><SpeakerNotesIcon /></span>Results</li></Link>
                <Link to='logout' className='link'> <li className='sidebar-item'> <span className='slidebar-item-icon'><ExitToAppIcon /></span>Logout</li></Link> */}

                {
                    sideManueItems.map((val) => {
                        return (
                            <Link to={val.link} className='link'> <li className='sidebar-item'> <span className='slidebar-item-icon'>{val.icon}</span> {val.name}</li></Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Sidebar