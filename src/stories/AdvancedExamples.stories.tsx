import type { Meta, StoryObj } from '@storybook/react';
import { AtomGridTable } from '@sanbira/atom-grid-table';
import '@sanbira/atom-grid-table/style.css';
import React, { useState } from 'react';

const meta = {
  title: 'Examples/Advanced Examples',
  component: AtomGridTable,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AtomGridTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for examples
const sampleColumns = [
  { name: 'id', label: 'ID', width: '100px' },
  { name: 'name', label: 'Name', width: '130px', isResizable: true, resizeOptions: { min: 100, max: 300 } },
  { name: 'email', label: 'Email', width: '200px', isResizable: true },
  { name: 'role', label: 'Role', width: '120px' },
  { name: 'status', label: 'Status', width: '100px' },
];

const sampleRows = [
  { 
    selectIdentifier: 1,
    cells: [
      { content: '1' }, 
      { content: 'John Doe' }, 
      { content: 'john@example.com' },
      { content: 'Admin' },
      { content: 'Active' },
    ] 
  },
  { 
    selectIdentifier: 2,
    cells: [
      { content: '2' }, 
      { content: 'Jane Smith' }, 
      { content: 'jane@example.com' },
      { content: 'Editor' },
      { content: 'Active' },
    ] 
  },
  { 
    selectIdentifier: 3,
    cells: [
      { content: '3' }, 
      { content: 'Bob Johnson' }, 
      { content: 'bob@example.com' },
      { content: 'Viewer' },
      { content: 'Inactive' },
    ] 
  },
  { 
    selectIdentifier: 4,
    cells: [
      { content: '4' }, 
      { content: 'Alice Brown' }, 
      { content: 'alice@example.com' },
      { content: 'Editor' },
      { content: 'Active' },
    ] 
  },
  { 
    selectIdentifier: 5,
    cells: [
      { content: '5' }, 
      { content: 'Charlie Wilson' }, 
      { content: 'charlie@example.com' },
      { content: 'Viewer' },
      { content: 'Active' },
    ] 
  },
];

export const ResizableColumns: Story = {
  args: {
    colOptions: sampleColumns,
    rows: sampleRows,
    tableStyleOptions: {
      isZebra: true,
      isStickyHeader: true,
    },
  },
};

export const DarkTheme: Story = {
  args: {
    colOptions: sampleColumns,
    rows: sampleRows,
    tableStyleOptions: {
      isZebra: true,
      isStickyHeader: true,
      colorScheme: 'dark',
    },
  },
};

export const CombinedFeatures: Story = {
  args: {
    colOptions: sampleColumns,
    rows: sampleRows,
    isHasSelect: true,
    selectedRows: [1, 3],
    tableStyleOptions: {
      isZebra: true,
      isStickyHeader: true,
    },
    paginationOptions: {
      rowCount: 100,
      pageSizeOptions: [5, 10, 25, 50],
    },
  },
};

// Create a separate React component for the SelectionExample story
const SelectionExampleComponent = () => {
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>(['1', '3']);
  
  return (
    <>
      <div style={{ marginBottom: '10px' }}>
        <strong>Selected row IDs:</strong> {selectedRows.join(', ') || 'none'}
      </div>
      <AtomGridTable
        colOptions={[
          { label: 'ID' },
          { label: 'Name', width: '2fr' },
          { label: 'Email', width: '2fr' },
        ]}
        rows={[
          { 
            selectIdentifier: '1',
            cells: [
              { content: '1' }, 
              { content: 'John Doe' }, 
              { content: 'john@example.com' }
            ] 
          },
          { 
            selectIdentifier: '2',
            cells: [
              { content: '2' }, 
              { content: 'Jane Smith' }, 
              { content: 'jane@example.com' }
            ] 
          },
          { 
            selectIdentifier: '3',
            cells: [
              { content: '3' }, 
              { content: 'Bob Johnson' }, 
              { content: 'bob@example.com' }
            ] 
          },
        ]}
        isHasSelect={true}
        selectedRows={selectedRows}
        setSelected={(selected) => setSelectedRows(selected)}
      />
    </>
  );
};

export const SelectionExample: StoryObj<typeof meta> = {
  render: () => <SelectionExampleComponent />,
  args: {
    colOptions: [
      { label: 'ID' },
      { label: 'Name', width: '2fr' },
      { label: 'Email', width: '2fr' },
    ],
    rows: [
      { 
        selectIdentifier: '1',
        cells: [
          { content: '1' }, 
          { content: 'John Doe' }, 
          { content: 'john@example.com' }
        ] 
      },
      { 
        selectIdentifier: '2',
        cells: [
          { content: '2' }, 
          { content: 'Jane Smith' }, 
          { content: 'jane@example.com' }
        ] 
      },
      { 
        selectIdentifier: '3',
        cells: [
          { content: '3' }, 
          { content: 'Bob Johnson' }, 
          { content: 'bob@example.com' }
        ] 
      },
    ],
    isHasSelect: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
import { useState } from 'react';
import { AtomGridTable } from '@sanbira/atom-grid-table';

const SelectionExample = () => {
  // Pre-select rows '1' and '3'
  const [selectedRows, setSelectedRows] = useState(['1', '3']);
  
  return (
    <>
      <div style={{ marginBottom: '10px' }}>
        <strong>Selected row IDs:</strong> {selectedRows.join(', ') || 'none'}
      </div>
      <AtomGridTable
        colOptions={[
          { label: 'ID' },
          { label: 'Name', width: '2fr' },
          { label: 'Email', width: '2fr' },
        ]}
        rows={[
          { 
            selectIdentifier: '1',
            cells: [
              { content: '1' }, 
              { content: 'John Doe' }, 
              { content: 'john@example.com' }
            ] 
          },
          { 
            selectIdentifier: '2',
            cells: [
              { content: '2' }, 
              { content: 'Jane Smith' }, 
              { content: 'jane@example.com' }
            ] 
          },
          { 
            selectIdentifier: '3',
            cells: [
              { content: '3' }, 
              { content: 'Bob Johnson' }, 
              { content: 'bob@example.com' }
            ] 
          },
        ]}
        isHasSelect={true}
        selectedRows={selectedRows}
        setSelected={setSelectedRows}
      />
    </>
  );
};
        `
      }
    }
  }
}; 