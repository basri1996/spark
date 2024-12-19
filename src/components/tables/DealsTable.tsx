import { Box, Card, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import DataTable from "react-data-table-component";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useStyles } from "./useStyles";
import { IDealsResponseObjectTypes } from "../../common/types";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import CustomPagination from "../common/CustomPagination";
import CustomButton from "../common/CustomButton";
import RefreshIcon from "@mui/icons-material/Refresh";

function DealsTable({
  list,
  totalRows,
  isPending,
  type,
  handleRefresh,
}: {
  list: IDealsResponseObjectTypes[] | undefined;
  totalRows: number | undefined;
  isPending: boolean;
  type: string;
  handleRefresh: any;
}) {
  const styles = useStyles();
  const navigate = useNavigate();
  const [expandedRowId, setExpandedRowId] = useState<string | number | null>(
    null
  );
  const location = useLocation();
  const prevUrl = location.pathname + location.search;

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
          onClick={() =>
            row?.dealStatus &&
            navigate(`/${type}/${row.id}`, { state: { prevUrl } })
          }
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
    },
    {
      name: "Id Number",
      id: "Id Number",
      selector: (row: IDealsResponseObjectTypes) => row.personalId,
      sortable: true,
    },
    {
      name: "Phone Number",
      id: "Phone Number",
      selector: (row: IDealsResponseObjectTypes) => row.mobilePhone,
      sortable: true,
    },
    {
      name: "Channel",
      id: "Channel",
      selector: (row: IDealsResponseObjectTypes) => row.channel,
      sortable: true,
    },
    {
      name: "Product",
      id: "Product",
      selector: (row: IDealsResponseObjectTypes) => row.product,
      sortable: true,
    },
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

    {
      name: "Created At",
      id: "Created At",
      selector: (row: IDealsResponseObjectTypes) =>
        moment(row.createDate).format("DD.MM.YY - HH:mm"),
      sortable: true,
    },
    {
      name: "Owner",
      width: "67px",
      cell: (row: IDealsResponseObjectTypes) =>
        row?.owner?.fullName && (
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
        progressPending={isPending}
        noDataComponent={
          <Box
            sx={{
              paddingY: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
              ჩანაწერი არ მოიძებნა
            </Typography>
            <CustomButton sx={{ borderRadius: 2 }} onClick={handleRefresh}>
              <RefreshIcon />
            </CustomButton>
          </Box>
        }
        expandableRows
        onRowClicked={(row) => handleRowClick(row.id)}
        expandableRowsHideExpander
        expandableRowExpanded={(row) => row.id === expandedRowId}
        expandableRowsComponent={({ data }) => {
          if (data?.leads) {
            return (
              <DataTable
                columns={columns}
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
