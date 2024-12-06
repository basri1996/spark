import { Box, Card, Pagination, Stack, Tooltip } from "@mui/material";
import { useState } from "react";
import DataTable from "react-data-table-component";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useStyles } from "./useStyles";
import { IDealsResponseObjectTypes } from "../../common/types";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import CustomPagination from "../common/CustomPagination";

function DealsTable({
  list,
  handlePageChange,
  handlePerRowsChange,
  totalRows,
  isPending,
  type,
}: {
  list: IDealsResponseObjectTypes[] | undefined;
  handlePageChange: (pageSize: number) => void;
  handlePerRowsChange: (pageSize: number, pageNumber: number) => void;
  totalRows: number | undefined;
  isPending: boolean;
  type: string;
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
      width: "100px",
      id: "ID",
      sortable: true,

      cell: (row: IDealsResponseObjectTypes) => (
        <Box
          onClick={() => row?.dealStatus && navigate(`/${type}/${row.id}`)}
          sx={styles.tableBoxStyles}
        >
          {row.id}
        </Box>
      ),
    },
    {
      name: "Name",
      id: "Name",
      selector: (row: IDealsResponseObjectTypes) => row.name,
      sortable: true,
      grow: 6,
    },
    {
      name: "Id Number",
      id: "Id Number",
      selector: (row: IDealsResponseObjectTypes) => row.personalId,
      sortable: true,
      grow: 4,
    },
    {
      name: "Phone Number",
      id: "Phone Number",
      selector: (row: IDealsResponseObjectTypes) => row.mobilePhone,
      sortable: true,
      grow: 3,
    },
    {
      name: "Channel",
      id: "Channel",
      selector: (row: IDealsResponseObjectTypes) => row.channel,
      sortable: true,
    },
    {
      name: "Created At",
      id: "Created At",
      selector: (row: IDealsResponseObjectTypes) =>
        moment(row.createDate).format("DD.MM.YY - HH:mm"),
      sortable: true,
      grow: 3,
    },
    {
      name: "Owner",
      width: "67px",
      cell: (row: IDealsResponseObjectTypes) => (
        <Tooltip
          title={row?.owner?.fullName || "N/A"}
          sx={{
            background: (theme) => theme.palette.background.default,
            color: (theme) => theme.palette.text.secondary,
          }}
        >
          <Box
            sx={{
              color: (theme) => theme.palette.text.secondary,
              background: (theme) => theme.palette.primary.main,
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {row?.owner?.shortName.toUpperCase() || "N/A"}
          </Box>
        </Tooltip>
      ),
    },
  ];

  const ExandedColumns = [
    ...columns.filter((el) => el.name !== "Owner"),
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
        paginationComponent={CustomPagination}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handlePerRowsChange}
        progressPending={isPending}
        fixedHeaderScrollHeight="670px"
        noDataComponent={
          <Box sx={{ paddingY: "20px", fontWeight: 600, fontSize: "16px" }}>
            ჩანაწერი არ მოიძებნა
          </Box>
        }
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
