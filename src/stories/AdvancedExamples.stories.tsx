import { useState, type ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  AtomGridTable,
  AtomGridTableProvider,
  type TableProps,
  type CustomComponents,
  type IconButtonProps,
  type SelectProps,
  type CheckboxProps,
  IconButtonType,
} from "@sanbira/atom-grid-table";
import "@sanbira/atom-grid-table/style.css";
import { Checkbox, IconButton, MenuItem, Select, Skeleton, Tooltip, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const meta = {
  title: "Examples/Advanced Examples",
  component: AtomGridTable,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AtomGridTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// Create a separate React component for the SelectionExample story
const SelectionExampleComponent = () => {
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>(["1", "3"]);

  return (
    <AtomGridTable
      colOptions={[{ label: "ID" }, { label: "Name", width: "2fr" }, { label: "Email", width: "2fr" }]}
      rows={[
        {
          selectIdentifier: "1",
          cells: [{ content: "1" }, { content: "John Doe" }, { content: "john@example.com" }],
        },
        {
          selectIdentifier: "2",
          cells: [{ content: "2" }, { content: "Jane Smith" }, { content: "jane@example.com" }],
        },
        {
          selectIdentifier: "3",
          cells: [{ content: "3" }, { content: "Bob Johnson" }, { content: "bob@example.com" }],
        },
      ]}
      isHasSelect={true}
      selectedRows={selectedRows}
      setSelected={(selected) => setSelectedRows(selected)}
    />
  );
};

export const SelectionExample: Story = {
  render: () => <SelectionExampleComponent />,
  args: {
    colOptions: [{ label: "ID" }, { label: "Name", width: "2fr" }, { label: "Email", width: "2fr" }],
    rows: [
      {
        selectIdentifier: "1",
        cells: [{ content: "1" }, { content: "John Doe" }, { content: "john@example.com" }],
      },
      {
        selectIdentifier: "2",
        cells: [{ content: "2" }, { content: "Jane Smith" }, { content: "jane@example.com" }],
      },
      {
        selectIdentifier: "3",
        cells: [{ content: "3" }, { content: "Bob Johnson" }, { content: "bob@example.com" }],
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
  );
};
        `,
      },
    },
  },
};

// Create a component with AtomGridTable wrapped in AtomGridTableProvider
const ContextExampleComponent = (props: {
  defaultTableOptions?: Partial<TableProps>;
  customComponents?: CustomComponents;
  agtProps?: Partial<TableProps>;
}) => {
  const { defaultTableOptions, customComponents, agtProps } = props;
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);

  return (
    <AtomGridTableProvider defaultTableOptions={defaultTableOptions} customComponents={customComponents}>
      <AtomGridTable
        colOptions={[{ label: "ID" }, { label: "Name", width: "2fr" }, { label: "Email", width: "2fr" }]}
        rows={[
          {
            selectIdentifier: "1",
            cells: [{ content: "1" }, { content: "John Doe" }, { content: "john@example.com" }],
          },
          {
            selectIdentifier: "2",
            cells: [{ content: "2" }, { content: "Jane Smith" }, { content: "jane@example.com" }],
          },
          {
            selectIdentifier: "3",
            cells: [{ content: "3" }, { content: "Bob Johnson" }, { content: "bob@example.com" }],
          },
        ]}
        {...agtProps}
        selectedRows={selectedRows}
        setSelected={setSelectedRows}
      />
    </AtomGridTableProvider>
  );
};

export const ContextExample: StoryObj<typeof meta> = {
  render: () => (
    <ContextExampleComponent
      defaultTableOptions={{
        tableStyleOptions: {
          isZebra: true,
          isStickyHeader: true,
          isNoXCellBorders: true,
        },
      }}
    />
  ),
  args: {
    colOptions: [{ label: "ID" }, { label: "Name", width: "2fr" }, { label: "Email", width: "2fr" }],
    rows: [
      { cells: [{ content: "1" }, { content: "John Doe" }, { content: "john@example.com" }] },
      { cells: [{ content: "2" }, { content: "Jane Smith" }, { content: "jane@example.com" }] },
      { cells: [{ content: "3" }, { content: "Bob Johnson" }, { content: "bob@example.com" }] },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `
import { AtomGridTable, AtomGridTableProvider } from '@sanbira/atom-grid-table';

const ContextExample = () => {
  return (
    <AtomGridTableProvider 
      defaultTableOptions={{
        tableStyleOptions: {
          isZebra: true,
          isStickyHeader: true,
          isNoXCellBorders: true
        }
      }}
    >
      <AtomGridTable
        colOptions={[
          { label: 'ID' },
          { label: 'Name', width: '2fr' },
          { label: 'Email', width: '2fr' },
        ]}
        rows={[
          { cells: [{ content: '1' }, { content: 'John Doe' }, { content: 'john@example.com' }] },
          { cells: [{ content: '2' }, { content: 'Jane Smith' }, { content: 'jane@example.com' }] },
          { cells: [{ content: '3' }, { content: 'Bob Johnson' }, { content: 'bob@example.com' }] },
        ]}
      />
    </AtomGridTableProvider>
  );
};
        `,
      },
    },
  },
};

export const MUIComponentsExample: StoryObj<typeof meta> = {
  render: () => (
    <ContextExampleComponent
      defaultTableOptions={{
        tableStyleOptions: {
          loaderRowsCount: 3,
        },
      }}
      customComponents={{
        tooltip: Tooltip,
        typography: Typography,
        skeleton: Skeleton,
        iconButton: (props: IconButtonProps) => {
          const { icon, iconType, ...rest } = props;

          let muiIcon = icon;
          if (iconType === IconButtonType.ArrowLeft) {
            muiIcon = <ArrowBack />;
          } else if (iconType === IconButtonType.ArrowRight) {
            muiIcon = <ArrowForward />;
          }

          return <IconButton {...rest}>{muiIcon}</IconButton>;
        },
        select: (props: SelectProps) => {
          const { options, onChange, ...rest } = props;

          return (
            <Select onChange={onChange as ComponentProps<typeof Select>["onChange"]} {...rest}>
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label ?? option.value}
                </MenuItem>
              ))}
            </Select>
          );
        },
        checkbox: (props: CheckboxProps) => {
          const { onClick, ...rest } = props;

          return <Checkbox onChange={onClick} {...rest} />;
        },
      }}
      agtProps={{
        colOptions: [
          { label: "ID", tooltip: "This is a tooltip!" },
          { label: "Name", width: "2fr" },
          { label: "Email", width: "2fr" },
        ],
        tableStyleOptions: {
          colorScheme: "light",
        },
        isHasSelect: true,
        paginationOptions: {
          rowCount: 3,
        },
        isPagination: true,
      }}
    />
  ),
  args: {
    colOptions: [
      { label: "ID", tooltip: "This is a tooltip!" },
      { label: "Name", width: "2fr" },
      { label: "Email", width: "2fr" },
    ],
    rows: [
      { cells: [{ content: "1" }, { content: "John Doe" }, { content: "john@example.com" }] },
      { cells: [{ content: "2" }, { content: "Jane Smith" }, { content: "jane@example.com" }] },
      { cells: [{ content: "3" }, { content: "Bob Johnson" }, { content: "bob@example.com" }] },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `
import React, { useState, type ComponentProps } from 'react';
import { AtomGridTable, AtomGridTableProvider, IconButtonType } from '@sanbira/atom-grid-table';
import { 
  Checkbox, 
  IconButton, 
  MenuItem, 
  Select, 
  Skeleton, 
  Tooltip, 
  Typography 
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

function MUIComponentsExample() {
  const [selectedRows, setSelectedRows] = useState([]);

  return (
    <AtomGridTableProvider 
      defaultTableOptions={{
        tableStyleOptions: {
          loaderRowsCount: 3
        }
      }}
      customComponents={{
        tooltip: Tooltip,
        typography: Typography,
        skeleton: Skeleton,
        iconButton: (props) => {
          const { icon, iconType, ...rest } = props;
 
          let muiIcon = icon;
          if (iconType === IconButtonType.ArrowLeft) {
            muiIcon = <ArrowBack />;
          } else if (iconType === IconButtonType.ArrowRight) {
            muiIcon = <ArrowForward />;
          }
 
          return <IconButton {...rest}>{muiIcon}</IconButton>;
        },
        select: (props) => {
          const { options, onChange, ...rest } = props;
 
          return (
            <Select onChange={onChange as ComponentProps<typeof Select>["onChange"]} {...rest}>
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label ?? option.value}
                </MenuItem>
              ))}
            </Select>
          );
        },
        checkbox: (props) => {
          const { onClick, ...rest } = props;
 
          return <Checkbox onChange={onClick} {...rest} />;
        },
      }}
    >
      <AtomGridTable
        colOptions={[
          { label: 'ID', tooltip: 'This is a tooltip!' },
          { label: 'Name', width: '2fr' },
          { label: 'Email', width: '2fr' },
        ]}
        rows={[
          {
            selectIdentifier: '1',
            cells: [{ content: '1' }, { content: 'John Doe' }, { content: 'john@example.com' }],
          },
          {
            selectIdentifier: '2',
            cells: [{ content: '2' }, { content: 'Jane Smith' }, { content: 'jane@example.com' }],
          },
          {
            selectIdentifier: '3',
            cells: [{ content: '3' }, { content: 'Bob Johnson' }, { content: 'bob@example.com' }],
          },
        ]}
        tableStyleOptions={{
          colorScheme: 'light',
        }}
        isHasSelect={true}
        selectedRows={selectedRows}
        setSelected={setSelectedRows}
        paginationOptions={{
          rowCount: 3,
        }}
        isPagination={true}
      />
    </AtomGridTableProvider>
  );
}
        `,
      },
    },
  },
};
