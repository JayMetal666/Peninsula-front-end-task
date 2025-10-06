// src/data/mockFiles.ts
import type { FileNode } from '../types';

// These are examples for the Front-End Task mock data from Github source
export const mockFiles: FileNode[] = [

  //On it own files
  { type: 'pdf', name: 'Employee Handbook', added: '2017-01-06', id: 'f1' },
  { type: 'pdf', name: 'Public Holiday policy', added: '2016-12-06', id: 'f2' },

  {
    // A folder that has some files embedded
    type: 'folder',
    name: 'Expenses',
    id: 'fld1',
    files: [
      { type: 'doc', name: 'Expenses claim form', added: '2017-05-02', id: 'f3' },
      { type: 'doc', name: 'Fuel allowances', added: '2017-05-03', id: 'f4' }
    ]
  },
  // A singular file 
  { type: 'csv', name: 'Cost centres', added: '2016-08-12', id: 'f5' },
  {
    //Mix of file types within folder
    type: 'folder',
    name: 'Misc',
    id: 'fld2',
    files: [
      { type: 'doc', name: 'Christmas party', added: '2017-12-02', id: 'f6' },
      { type: 'mov', name: 'Welcome to the company!', added: '2015-04-24', id: 'f7' }
    ]
  }
];
