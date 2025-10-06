# Peninsula-front-end-task
Peninsula-front-end-task Jason Melia

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
# ** Peninsula Front- end Task – Build

## Process ** # # Overview
This project is a **single- page React + TypeScript app** that visualises a folder and file hierarchy using **mock JSON data**.  
Users can explore folders and files, open folders, and utilise sorting and filtering features.

## # Technologies Used
- **React 18 + TypeScript** for type safety and modular components  
- **Vite** for fast development and bundling  
- **Vitest + Testing Library** for unit and component testing  
- **CSS/Basic styles** for visual clarity  

## # Component Structure
- **App.tsx** – Main component; loads `FileTree`.  
- **FileTree.tsx** – Recursively displays files and folders.  
- **FolderItem.tsx** – Presents folders and manages click events to open nested contents.  
- **FileItem.tsx** – Shows file type, name, and creation date.  
- **Hooks** – Custom React hooks for sorting and filtering.  

## # Features Implemented
- Recursive folder expansion for nested viewing  
- Sorting by name and date  
- Filtering by filename  
- Accurate TypeScript types (`FileNode`, `FolderNode`, `LeafFile`)  

## # Development Process 
1. **Project Setup**  
   - Initialised a Vite + React + TypeScript project.  
   - Installed dependencies: React, Vite, Vitest, Testing Library.  

2. **Mock Data Structure**  
   - Created JSON data mimicking folder and file structure.  
   - Defined corresponding TypeScript types.  

3. **Component Design**  
   - Divided UI into reusable components: `FileTree`, `FolderItem`, `FileItem`.  
   - `FileTree` handles folder states, sorting, and filtering.  

4. **Folder and File Logic**  
   - Implemented recursive rendering for nested folders/files.  
   - Added click handlers for folder toggle.  
   - Enabled sorting and filtering with React state.  

5. **Styling & User Experience**  
   - Applied CSS styles to differentiate files and folders.  
   - Used icons/labels to indicate file types.  

6. **Testing**  
   - Developed unit and component tests.  
   - Validated folder expansion, file display, sorting, and filtering.  

7. **Version Control & Workflow**  
   - Frequently committed changes for transparency.  
   - Annotated code with comments and documentation.  

## # Future Enhancements
- Connect to real APIS for document  
- management - Add drag- and- drop upload  
- features - Enhance UI with icons, animations, and responsive design  

## # To Run the App
1. Clone the repo and navigate to the project directory:

''' bash
git clone < your- repo- link>
cd "Peninsula Front- end task" '''

<img width="1893" height="898" alt="peninsula Desktop view screenshot" src="https://github.com/user-attachments/assets/9e93ecac-60d7-4d5d-ac23-50c54b310058" />
<img width="1900" height="897" alt="Peninsula Desktop footer screenshot" src="https://github.com/user-attachments/assets/faee35f9-b1d1-48eb-ab3f-c06bcc677c6d" />
<img width="595" height="887" alt="Peninsula Mobile view screenshot" src="https://github.com/user-attachments/assets/bbd1f596-209a-4d69-b7ac-05617afa2866" />
<img width="595" height="882" alt="Peninsula Mobile drop down menu screenshot" src="https://github.com/user-attachments/assets/2fb87501-82be-4cd9-ac39-713bf9c6bffe" />
