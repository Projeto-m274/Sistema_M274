import React, { Fragment } from "react";
import Checkbox from "../../components/Checkbox";
import CustomTable from "../../components/CustomTable";
import Dropdown, { IOptions } from "../../components/Dropdown";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Column, Container, Row } from "./styles";
import { columns, data, options } from "./tableData.mock";

const Imovel: React.FC = () => {
  const cnpjsOptions: IOptions = {
    defaultValue: "...docs",
    value: "000.000.000-00",
  };

  const multableColumn = columns.map((column, index) => {
    return {
      field: column.field,
      title: column.title,
      render: (rowData: any) => {
        return <Checkbox/>
      }
    }
  })

  return (
    <Fragment>
      <Header isAuthenticated />
      <Container>
        <Sidebar />

        <Column>
          <Row>
            <p>Outros cnpjs</p>
            <Dropdown options={[cnpjsOptions]} isLeftSpacing={3} />
          </Row>

          <Row>
            <Checkbox
              inputStyle={{ marginRight: "0.5rem" }}
              labelStyle={{ marginRight: "2rem" }}
              label="Todos"
            />
            <Checkbox
              inputStyle={{ marginRight: "0.5rem" }}
              label="Somente marcados"
            />
          </Row>

          <CustomTable
            title="Imovel"
            columns={multableColumn}
            data={data}
            options={options}
          />
        </Column>
      </Container>
    </Fragment>
  );
};

export default Imovel;
