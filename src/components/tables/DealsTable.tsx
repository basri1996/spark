import { Box, Card } from "@mui/material";
import { useState } from "react";
import DataTable from "react-data-table-component";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useStyles } from "./useStyles";
import { IDealsResponseObjectTypes } from "../../common/types";
import { useNavigate } from "react-router-dom";

function DealsTable({
  list,
  handlePageChange,
  handlePerRowsChange,
  totalRows,
  isPending,
}: {
  list: IDealsResponseObjectTypes[] | undefined;
  handlePageChange: (pageSize: number) => void;
  handlePerRowsChange: (pageSize: number, pageNumber: number) => void;
  totalRows: number | undefined;
  isPending: boolean;
}) {
  const styles = useStyles();
  const navigate = useNavigate();
  const [expandedRowId, setExpandedRowId] = useState<string | number | null>(
    null
  );

  const columns = [
    {
      name: "",
      width: "50px",
      cell: (row: IDealsResponseObjectTypes) =>
        row.leads && (
          <Box sx={styles.tableBoxStyles}>
            {expandedRowId === row.id ? (
              <ExpandMoreRoundedIcon onClick={() => handleRowClick(row.id)} />
            ) : (
              <ChevronRightRoundedIcon onClick={() => handleRowClick(row.id)} />
            )}
          </Box>
        ),
    },
    {
      name: "ID",
      width: "80px",
      sortable: true,
      cell: (row: IDealsResponseObjectTypes) => (
        <Box
          onClick={() => navigate(`/deals/${row.id}`)}
          sx={styles.tableBoxStyles}
        >
          {row.id}
        </Box>
      ),
    },
    {
      name: "Name",
      selector: (row: IDealsResponseObjectTypes) => row.name,
      sortable: true,
    },
    {
      name: "Id Number",
      selector: (row: IDealsResponseObjectTypes) => row.personalId,
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: (row: IDealsResponseObjectTypes) => row.mobilePhone,
      sortable: true,
    },
    {
      name: "Channel",
      selector: (row: IDealsResponseObjectTypes) => row.channel,
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row: IDealsResponseObjectTypes) => row.createDate,
      sortable: true,
    },
  ];

  const ExandedColumns = [
    ...columns,
    {
      name: "Amount",
      selector: (row: IDealsResponseObjectTypes) => row.amount,
      sortable: true,
    },
    {
      name: "Currency",
      selector: (row: IDealsResponseObjectTypes) => row.ccy,
      sortable: true,
    },
  ];

  const handleRowClick = (rowId: string | number) => {
    setExpandedRowId(expandedRowId === rowId ? null : rowId);
  };

  return (
    <Card>
      <DataTable
        columns={columns}
        data={list || []}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handlePerRowsChange}
        progressPending={isPending}
        fixedHeaderScrollHeight="670px"
        fixedHeader
        expandableRows
        onRowClicked={(row) => handleRowClick(row.id)}
        expandableRowsHideExpander
        expandableRowExpanded={(row) => row.id === expandedRowId}
        expandableRowsComponent={({ data }) => {
          if (data?.leads) {
            return (
              <DataTable
                columns={ExandedColumns}
                data={data.leads}
                noTableHead={true}
                customStyles={styles.tableMainStyles}
              />
            );
          }
          return null;
        }}
        customStyles={styles.tableSecondaryStyles}
      />
    </Card>
  );
}

export default DealsTable;
