import React, { memo } from "react";

import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";

import { ICustomTableProps } from "../../models/ICustomTable";
import Checkbox from "../Checkbox";
import { MuiThemeProvider } from "@material-ui/core";
import { customMUITheme } from "../../theme/customMUITheme";

const CustomTable: React.FC<ICustomTableProps> = ({
  title,
  columns,
  data,
  options,
}) => {
  return (
    <MuiThemeProvider theme={customMUITheme}>
      <MaterialTable
        title={title}
        columns={columns}
        data={data}
        options={
          options?.exportData
            ? {
                exportMenu: [
                  {
                    label: "Exportar para PDF",
                    exportFunc: (cols, datas) =>
                      ExportPdf(cols, datas, options?.exportFileName || ""),
                  },
                  {
                    label: "Exportar para CSV",
                    exportFunc: (cols, datas) =>
                      ExportCsv(cols, datas, options?.exportFileName || ""),
                  },
                ],
                selection: true,
              }
            : {
                selection: true,
              }
        }
        style={{ margin: "30px 90px" }}
      />
    </MuiThemeProvider>
  );
};

export default memo(CustomTable);
