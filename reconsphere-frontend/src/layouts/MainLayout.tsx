import "./MainLayout.css";

import { useState } from "react";

import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";

import Topbar from "../components/layout/Topbar";

export default function MainLayout() {

    const [open, setOpen] = useState(false);

    return (

        <div className="layout">

            <Sidebar open={open} onClose={() => setOpen(false)} />

            {open && (
                <div
                    className="sidebarOverlay"
                    onClick={() => setOpen(false)}
                />
            )}

            <div className="layoutContent">

                <Topbar onMenu={() => setOpen(true)} />

                <main className="pageContent">

                    <Outlet />

                </main>

            </div>

        </div>

    );

}