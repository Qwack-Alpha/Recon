import "./Topbar.css";

import {
    MdNotificationsNone,
    MdSearch,
    MdMenu,
} from "react-icons/md";

import { useAuth } from "../../auth/useAuth";

interface Props {
    onMenu?: () => void;
}

export default function Topbar({ onMenu }: Props) {

    const { user } = useAuth();

    const initials = user
        ? `${user.first_name[0]}${user.last_name[0]}`
        : "?";

    return (

        <header className="topbar">

            <button
                className="iconButton menuButton"
                onClick={onMenu}
                aria-label="Open menu"
            >
                <MdMenu size={24} />
            </button>

            <div className="searchBox">

                <MdSearch size={20} />

                <input
                    placeholder="Search transactions, cases..."
                />

            </div>

            <div className="topbarRight">

                <button className="iconButton">

                    <MdNotificationsNone size={22} />

                </button>

                <div className="profile">

                    <div className="profileAvatar">

                        {initials.toUpperCase()}

                    </div>

                    <div>

                        <div className="profileName">

                            {user?.first_name} {user?.last_name}

                        </div>

                        <div className="profileRole">

                            {user?.role}

                        </div>

                    </div>

                </div>

            </div>

        </header>

    );

}