// src/hooks/useFiles.ts
import { useMemo, useState } from 'react';
import type { FileNode } from '../types';

//Filtering the name or date for file
export type SortBy = 'name' | 'date';

//Filtering but narrowing down the state for managing the files
export function useFiles(initial: FileNode[]) {

  //Text bar for searching and filtering for file
  const [filter, setFilter] = useState('');
  
  //Sorting the date or name
  const [sortBy, setSortBy] = useState<SortBy>('name');

  // Keeping tabs on which folder has been opened
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  //Pulling the id of what folder has been opened by user
  const toggleExpanded = (id: string) =>
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  //Process of filters in place for nodes
  const processNodes = (nodes: FileNode[]): FileNode[] => {
    const filtered = nodes
      .map(node => {
        //A folder than can process its children
        if (node.type === 'folder') {
          const files = processNodes(node.files);
          return { ...node, files };
        }
        return node;
      })
      .filter(node => {
        //Filter or not keep everything
        if (!filter) return true;
        return node.name.toLowerCase().includes(filter.toLowerCase());
      });

    // Styles the sort list
    const comparator = (a: FileNode, b: FileNode) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        // date - folders sort by name but files by added
        const aDate = (a as any).added ?? '';
        const bDate = (b as any).added ?? '';
        return bDate.localeCompare(aDate); // newest first
      }
    };

    return filtered.sort(comparator);
  };
   
  //Processes data if order changes with date name etc
  const nodes = useMemo(() => processNodes(initial), [initial, filter, sortBy]);
  
  //All components return to state
  return {
    filter,
    setFilter,
    sortBy,
    setSortBy,
    expanded,
    toggleExpanded,
    nodes
  };
}
