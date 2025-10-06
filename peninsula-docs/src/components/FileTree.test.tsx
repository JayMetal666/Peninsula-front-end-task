// src/components/FileTree.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FileTree from "./FileTree";
import { mockFiles } from "../data/mockFiles";

test("renders folders and files and toggles folder open", async () => {
  //Opens with no state but intiates files and folders
  const expanded = {};

  //To check if folder toggle is on
  const toggleExpanded = jest.fn();

  // Making the mock data work within the components
  render(
    <FileTree
      nodes={mockFiles}
      expandedMap={expanded}
      toggleExpanded={(id) => toggleExpanded(id)}
    />
  );

  // Making folder label expenses appear
  expect(screen.getByText(/Expenses/i)).toBeInTheDocument();

  // Opening and closing folder on click
  await userEvent.click(screen.getByText(/Expenses/i));

  //The toggle is being pulled
  expect(toggleExpanded).toHaveBeenCalled();
});
