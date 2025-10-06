// src/components/FolderItem.tsx
import React from "react";
import type { FileNode } from "../types";
import FileItem from "./FileItem";

// Using a single folder within file tree
//When clicked it shows the childen
interface Props {
  node: FileNode; // Folder data put in like date, type etc
  expanded: boolean; // If the folder is being opened
  onToggle: () => void; // Checking what happens if user opens it or closes
  children?: React.ReactNode; //Folder with the files in it
}

export default function FolderItem({
  node,
  expanded,
  onToggle,
  children,
}: Props) {
  // Only show the node if its a folder
  if (node.type !== "folder") return null;
  return (
    //Column of folders
    <div role="listitem" style={{ marginBottom: 8 }}>
      <div
        onClick={onToggle}
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 8,
          cursor: "pointer",
          background: "#f6f6f6",
        }}
        aria-expanded={expanded}
      >
        <div>
          {expanded ? "📂" : "📁"} {node.name}
        </div>
        <div>{expanded ? "▾" : "▸"}</div>
      </div>

      {expanded && (
        // Folder items when menu is expanded
        <div role="group" style={{ paddingLeft: 16 }}>
          {children}
        </div>
      )}
    </div>
  );
}
