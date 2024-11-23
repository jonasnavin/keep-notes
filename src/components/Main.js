import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddNote from "./AddNote";
import ArchivedNote from "./ArchivedNote";
import DeletedNote from "./DeletedNote";
import EditNote from "./EditNote";
import Note from "./Note";
import DataContext from "../context/DataContext";

const Main = () => {

    return (
        <>
            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/note/:id" element={<Note />} />
                    <Route path="/edit-note/:id" element={<EditNote />} />
                    <Route path="/add-note" element={<AddNote />} />
                    <Route path="/archived-notes" element={<ArchivedNote />} />
                    <Route path="/trash" element={<DeletedNote />} />
                </Routes>
            </main>
        </>
    );
};

export default Main;
