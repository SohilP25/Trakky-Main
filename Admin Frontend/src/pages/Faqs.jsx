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
import { faqsData, faqsGrid } from "../data/dummy";
import { Header } from "../components";

const Faqs = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete", "Search", "Add", "Edit", "Cancel"];
  const searchSettings = {
    fields: ["FaqID", "FaqGroupName", "Title", "Description", "UpdatedAt"],
    key: "",
    ignoreCase: true,
  };
  const editing = {
    allowAdding: true,
    allowDeleting: true,
    allowEditing: true,
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="FAQ's" />
      <GridComponent
        dataSource={faqsData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        searchSettings={searchSettings}
        editSettings={editing}
        allowSorting
        allowTextWrap={true}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {faqsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Faqs;
