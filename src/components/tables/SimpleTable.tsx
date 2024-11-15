import { Box, Card } from "@mui/material";
import DataTable from "react-data-table-component";
import { useStyles } from "./useStyles";
import { IDealsResponseObjectTypes, Lead } from "../../common/types";

function SimpleTable({ list }: { list: Lead[] }) {
  const styles = useStyles();

  const columns = [
    {
      name: "ID",
      width: "80px",
      sortable: true,
      cell: (row: Lead) => <Box sx={styles.tableBoxStyles}>{row.id}</Box>,
    },
    {
      name: "Name",
      selector: (row: Lead) => row.name,
      sortable: true,
    },
    {
      name: "Id Number",
      selector: (row: Lead) => row.personalId,
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: (row: Lead) => row.mobilePhone,
      sortable: true,
    },
    {
      name: "Channel",
      selector: (row: Lead) => row.channel,
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row: Lead) => row.createDate,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row: Lead) => row.amount,
      sortable: true,
    },
    {
      name: "Currency",
      selector: (row: Lead) => row.ccy,
      sortable: true,
    },
  ];
  const customStyles = {
    cells: {
      style: {
        borderRight: "1px solid #0000000A",
      },
    },
  };

  return (
    <Card
      sx={{
        borderTop: "1px solid #0000000A",
        borderLeft: "1px solid #0000000A",
        borderBottom: "1px solid #0000000A",
      }}
    >
      <DataTable
        columns={columns}
        data={list || []}
        customStyles={customStyles}
        noTableHead
      />
    </Card>
  );
}

export default SimpleTable;
