// src/components/FileTree.tsx
import React from "react";
import type { FileNode } from "../types";
import FileItem from "./FileItem";
import FolderItem from "./FolderItem";

// created files and folders in same tree structure to make it easier
interface Props {
  nodes: FileNode[]; // Indicating the files and folders to appear on screen
  expandedMap: Record<string, boolean>; //Helps navigate which folder is being opened at
  toggleExpanded: (id: string) => void; // this is being pulled alerting when a filer or folder is opened
}

export default function FileTree({
  nodes,
  expandedMap,
  toggleExpanded,
}: Props) {
  //Makes a single node parreling which could be folder or file
  const renderNode = (node: FileNode) => {
    if (node.type === "folder") {
      //Chooses a specific id to identify a folder
      const id = node.id ?? node.name;
      const expanded = !!expandedMap[id]; //questions if the folder is opened

      //Creates the parent folder with its childern the files
      return (
        <FolderItem
          key={id}
          node={node}
          expanded={expanded}
          onToggle={() => toggleExpanded(id)}
        >
          {node.files.map((child) => (
            <div key={(child as any).id ?? (child as any).name}>
              {child.type === "folder" ? (
                //Initalising the child folder

                renderNode(child)
              ) : (
                //The child is these categories
                <FileItem
                  name={child.name}
                  type={child.type}
                  added={(child as any).added}
                />
              )}
            </div>
          ))}
        </FolderItem>
      );
    } else {
      //Makes a file with no attributes (child with attributes)
      const id = node.id ?? node.name;
      return (
        <FileItem
          key={id}
          name={node.name}
          type={node.type}
          added={(node as any).added}
        />
      );
    }
  };

  //List of nodes
  return <div role="list">{nodes.map(renderNode)}</div>;
}
