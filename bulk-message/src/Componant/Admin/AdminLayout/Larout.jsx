import React from 'react'
import TopNav from './TopNav'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

export default function Larout() {
    return (
        <>
            <TopNav />
            <SideBar />

            <main id="main" className="main">
                <Outlet />
            </main>
        </>
    )
}
