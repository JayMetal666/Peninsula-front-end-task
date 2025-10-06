// src/components/FileItem.tsx
import React from "react";

// States the fact of a file with contents
interface Props {
  name: string; //The name of the file
  type: string; //The file type
  added?: string; //Additonal section like date
}

export default function FileItem({ name, type, added }: Props) {
  return (
    // Set layout structure for the files
    <div
      className="file-row"
      role="listitem"
      style={{ display: "flex", gap: 12, alignItems: "center", padding: 8 }}
    >
      <div style={{ width: 28 }}>
        {/* type icon */}
        {type}
      </div>
      <div style={{ flex: 1 }}>{name}</div>
      <div style={{ width: 120, textAlign: "right" }}>
        {added ? new Date(added).toLocaleDateString() : ""}
      </div>
    </div>
  );
}
