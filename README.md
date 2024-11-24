# Keep Notes React App

A simple and interactive note-taking application built with React, allowing users to add, edit, search, archive, unarchive, move to trash, restore, and permanently delete their notes. This project uses modern React features, including hooks and context API for state management, to provide a smooth user experience.

## Features

- **Add Notes**: Create new notes with a title and body.
- **Edit Notes**: Modify existing notes.
- **Search Notes**: Search through notes based on their title and body content.
- **Archive Notes**: Archive notes for future reference.
- **Unarchive Notes**: Move archived notes back to active notes.
- **Trash**: Move notes to the trash for potential recovery.
- **Restore Notes**: Recover notes from the trash.
- **Permanent Delete**: Permanently delete notes from the system.
- **Responsive Design**: Custom hook to adjust the layout based on screen size for mobile and desktop devices.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **useContext**: To handle global state management for storing and managing notes data.
- **React Router (react-router-dom)**: For routing between different pages (e.g., Home, Archive, Trash).
- **React Icons (npm-react-icons)**: Used for adding icons throughout the app.
- **Custom Hook**: To detect and adjust the UI layout based on screen size.
- **CSS**: For styling the app.
- **Netlify**: For deploying the app.

## Setup Instructions

Follow these steps to get the project up and running locally:

### 1. Clone the repository:

git clone `https://github.com/jonasnavin/keep-notes.git`

`cd your-repository-name`

### 2. Install dependencies:

Run the following command to install the required npm packages:

`npm install`

### 3. Run the app:

To start the development server and view the app locally, run:

`npm start`

This will start the app on `http://localhost:3000`.

## App Structure
- src/components/: Contains React components such as Home, AddNote, ArchivedNotes, etc.
- src/context/: Holds the context and provider for managing global state.
- src/hooks/: Contains custom hooks like useWindowSize for screen responsiveness.

## Screenshots

### Desktop

![alt text](/src/images/image.png)

### Mobile App

![alt text](/src/images/image-1.png) ![alt text](/src/images/image-2.png)

## Deployment
This app is deployed on Netlify. You can view the live demo here:

[Keep Notes - Netlify](https://jn-keep-notes.netlify.app/)

## Contributing
Feel free to fork this repository, open issues, and submit pull requests! Contributions are always welcome.