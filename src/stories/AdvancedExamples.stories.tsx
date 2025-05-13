import type { Meta, StoryObj } from '@storybook/react';
import { AtomGridTable } from '@sanbira/atom-grid-table';
import '@sanbira/atom-grid-table/style.css';

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
  { name: 'id', label: 'ID', width: '70px' },
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
      isFirstRowHeader: true,
      isZebra: true,
      isStickyHeader: true,
    },
  },
};

export const WithPagination: Story = {
  args: {
    colOptions: sampleColumns,
    rows: sampleRows,
    tableStyleOptions: {
      isFirstRowHeader: true,
      isZebra: true,
      isStickyHeader: true,
    },
    paginationOptions: {
      rowCount: 100, // Example total count
      pageSizeOptions: [5, 10, 25, 50],
      getApiParams: (page, pageSize) => ({
        limit: pageSize,
        offset: (page - 1) * pageSize
      }),
    },
  },
};

export const DarkTheme: Story = {
  args: {
    colOptions: sampleColumns,
    rows: sampleRows,
    tableStyleOptions: {
      isFirstRowHeader: true,
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
      isFirstRowHeader: true,
      isZebra: true,
      isStickyHeader: true,
    },
    paginationOptions: {
      rowCount: 100,
      pageSizeOptions: [5, 10, 25, 50],
    },
  },
}; 