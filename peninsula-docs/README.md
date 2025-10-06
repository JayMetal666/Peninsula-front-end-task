##Front-end task for Junior and Middleweight roles— Peninsula Ireland

##Date: October 2025
##Overview
A single page application using React + Typescript to demonstrate the ability to implement folders, files and a sorting list for admin users to see documents with mock data as an example.

-View files and folders

- Clickable folders open/close
  -Folder icons
- A search bar with sorting list
- React + vite unit tests library
- Navigation bar with links (optional)

##Technical application

-Vite + React + Typescript
-Vitest testing library

##Runs locally

Npm install
Npm run dev

# open http://localhost:5173

# Peninsula Front-end Task – Process of build

## Overview

This is a **single-page React + TypeScript application** to display a folder and file structure using **mock JSON data**.  
Users can view folders and files, open folders, and use sorting and filtering functionality.

## Technologies Used

- **React 18 + TypeScript** for type safety and modular components
- **Vite** for fast development server and bundling
- **Vitest + Testing Library** for unit/component testing
- **CSS/Basic styling** for visual clarity

## Component Structure

- **App.tsx** – Main entry point; renders the `FileTree` component
- **FileTree.tsx** – Recursively renders files and folders
- **FolderItem.tsx** – Displays folders and handles click to open nested files
- **FileItem.tsx** – Displays file type, name, and date added
- **Hooks** – Custom hooks for sorting and filtering logic

## Features Implemented

- Recursive folder opening to view nested files
- Sorting by name and date
- Filtering by filename
- Proper TypeScript typing (`FileNode`, `FolderNode`, `LeafFile`)

## Process / How I Built This

1. **Project Setup**

   - Created a Vite + React + TypeScript project.
   - Installed dependencies: React, Vite, Vitest, and Testing Library.

2. **Mock Data Structure**

   - Defined a JSON structure for files and folders based on the task example.
   - Created TypeScript types (`FileNode`, `FolderNode`, `LeafFile`) for type safety.

3. **Component Design**

   - Broke down the UI into reusable components: `FileTree`, `FolderItem`, `FileItem`.
   - `FileTree` manages folder state, sorting, and filtering.

4. **Folder and File Logic**

   - Implemented recursive rendering for folders containing nested files.
   - Added click handlers to toggle folder expansion.
   - Implemented sorting by name/date and filtering by filename using React state.

5. **Styling & UX**

   - Added basic CSS to distinguish files and folders.
   - Included icons or labels for file types for clarity.

6. **Testing**

   - Wrote unit and component tests with Vitest and Testing Library.
   - Tested folder expansion, file rendering, sorting, and filtering functionality.

7. **Version Control / Workflow**
   - Committed changes frequently to show step-by-step progress.
   - Documented decisions in code comments and Readme.

## Next Steps (if given more time)

- Integrate real API for uploading/viewing documents
- Add drag-and-drop file uploads
- Improve UI with icons, animations, and responsive design

## Running the App

1. Clone the repository and navigate to the project root:

```bash
git clone <your-repo-link>
cd "Peninsula Front-end task"

```
