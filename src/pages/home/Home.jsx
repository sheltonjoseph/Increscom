import React from 'react'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./home.css"

export default function Home() {
    return (
        <div className="home">
            <Sidebar/>
            <Posts/>
            
        </div>
    )
}
