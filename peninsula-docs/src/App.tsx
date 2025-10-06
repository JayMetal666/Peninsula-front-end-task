// src/App.tsx
import React from "react";
import { mockFiles } from "./data/mockFiles";
import { useFiles } from "./hooks/useFiles";
import FileTree from "./components/FileTree";

//Main app function showing the document list with the files and folders and sorting bar
function App() {
  const {
    //Customised for managing file data such as dates, names
    filter,
    setFilter,
    sortBy,
    setSortBy,
    nodes,
    expanded,
    toggleExpanded,
  } = useFiles(mockFiles);

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "40px auto",
        fontFamily: "system-ui, Arial",
      }}
    >
      <h1>Documents</h1>

      <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <input
          aria-label="Filter files"
          placeholder="Filter by filename..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ flex: 1, padding: 8 }}
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          aria-label="Sort by"
        >
          <option value="name">Sort by name (A → Z)</option>
          <option value="date">Sort by date (newest)</option>
        </select>
      </div>

      <FileTree
        nodes={nodes}
        expandedMap={expanded}
        toggleExpanded={toggleExpanded}
      />
    </div>
  );
}

export default App;
