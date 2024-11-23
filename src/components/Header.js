import React, { useContext } from "react";
import { BiSolidAddToQueue } from "react-icons/bi";
import { MdArchive, MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { TbTrashXFilled } from "react-icons/tb";
import DataContext from "../context/DataContext";
import useWindowSize from "../hooks/useWindowSize";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    const {
        activeSection,
        handleClick,
        menu,
        toggleSidebar,
        handleSearchbarVisiblity,
    } = useContext(DataContext);

    const { width } = useWindowSize();

    return (
        <header className="header">
            <div className="logo">
                <div className={`menu  ${width < 720 ? "" : "visible"}`}>
                    <GiHamburgerMenu className="menu-bar" onClick={toggleSidebar} />
                </div>
                <Link to="/" onClick={() => handleClick("home")}>
                    <img src={logo} alt="logo" />
                </Link>
                <h2 onClick={() => handleClick("home")}>
                    <Link to="/">Keep Notes</Link>
                </h2>
            </div>
            <nav className={`navigation ${width < 720 && menu ? "visible" : ""}`}>
                <div className="nav">
                    <Link to="/" onClick={toggleSidebar}>
                        <button
                            title="Home"
                            className={`nav-button ${activeSection === "home" ? "active" : ""}`}
                            onClick={() => handleClick("home")}
                        >
                            <MdHome /> Home
                        </button>
                    </Link>
                    <Link to="/add-note" onClick={toggleSidebar}>
                        <button
                            title="Add Note"
                            className={`nav-button ${activeSection === "add" ? "active" : ""}`}
                            onClick={() => handleClick("add")}
                        >
                            <BiSolidAddToQueue /> Add
                        </button>
                    </Link>
                    <Link to="/archived-notes" onClick={toggleSidebar}>
                        <button
                            title="Archived"
                            className={`nav-button ${activeSection === "archive" ? "active" : ""}`}
                            onClick={() => handleClick("archive")}
                        >
                            <MdArchive /> Archive
                        </button>
                    </Link>
                    <Link to="/trash" onClick={toggleSidebar}>
                        <button
                            title="Trash"
                            className={`nav-button ${activeSection === "trash" ? "active" : ""}`}
                            onClick={() => handleClick("trash")}
                        >
                            <TbTrashXFilled />
                            Trash
                        </button>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
