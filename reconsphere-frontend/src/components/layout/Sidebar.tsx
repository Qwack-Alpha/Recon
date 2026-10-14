import "./Sidebar.css";

import { NavLink, useNavigate } from "react-router-dom";

import { MdLogout } from "react-icons/md";

import { navigation } from "../../constants/navigation";

import { useAuth } from "../../auth/useAuth";

interface Props {
    open?: boolean;
    onClose?: () => void;
}

export default function Sidebar({ open, onClose }: Props) {

    const {
        user,
        logout,
    } = useAuth();

    const navigate = useNavigate();

    const items = navigation.filter(

        item =>

            user?.role

                ? item.roles.includes(user.role)

                : false

    );

    function handleLogout() {

        logout();

        navigate("/login", {

            replace: true,

        });

    }

    return (

        <aside className={open ? "sidebar open" : "sidebar"}>

            <div className="logo">

                ReconSphere AI

            </div>

            <nav className="sidebarNav">

                {

                    items.map(item => {

                        const Icon = item.icon;

                        return (

                            <NavLink

                                key={item.path}

                                to={item.path}

                                end={item.path === "/"}

                                onClick={onClose}

                                className={({ isActive }) =>

                                    isActive

                                        ? "sidebarLink active"

                                        : "sidebarLink"

                                }

                            >

                                <Icon size={20} />

                                <span>

                                    {item.label}

                                </span>

                            </NavLink>

                        );

                    })

                }

            </nav>

            <button

                className="logoutButton"

                onClick={handleLogout}

            >

                <MdLogout size={20} />

                <span>

                    Logout

                </span>

            </button>

        </aside>

    );

}
