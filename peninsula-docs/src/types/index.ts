// src/types/index.ts
export type FileNode = FolderNode | LeafFile;

// The file items 
export interface LeafFile {
  type: 'pdf' | 'doc' | 'csv' | 'mov' | 'other';
  name: string; // Name of file
  added: string; // date
  id?: string; // Additonal ID 
}

// the files and folders
export interface FolderNode {
  type: 'folder';
  name: string; // The folder name
  files: FileNode[]; // Inside the folder
  id?: string; // Additonal Id
}
