import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { salonsData, salonsGrid } from "../data/dummy";
import { Header } from "../components";

const Salons = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete", "Search", "Add", "Edit", "Cancel"];
  const searchSettings = {
    fields: [
      "CustomerID",
      "CustomerName",
      "Username",
      "Status",
      "Gender",
      "City",
      "RegisteredAt",
    ],
    key: "",
    ignoreCase: true,
  };
  const editing = {
    allowAdding: true,
    allowDeleting: true,
    allowEditing: true,
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-4 md:p-10 bg-white rounded-3xl">
      <Header title="Salons" />
      <GridComponent
        dataSource={salonsData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        searchSettings={searchSettings}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective >
          {salonsGrid.map((item, index) => (
                
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Salons;
