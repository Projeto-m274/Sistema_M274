import React, { memo } from 'react';

import MaterialTable from '@material-table/core';
import { ExportCsv, ExportPdf } from '@material-table/exporters';

import { ICustomTableProps } from '../../../models/ICustomTable';
import Checkbox from '../../Checkbox';

const CustomTableActions: React.FC<ICustomTableProps> = ({
  title,
  columns,
  data,
  options
}) => {
  return (
    <MaterialTable
      title={title}
      columns={columns}
      data={data}
      options={options?.exportData ? {
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
  
      }: {}}
      style={{ margin: "30px 90px" }}
    />
  );
};

export default memo(CustomTableActions);