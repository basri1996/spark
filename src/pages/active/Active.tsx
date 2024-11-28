import {
  Box,
  Button,
  debounce,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import ActiveColumn from "./ActiveColumn";
import { useStyles } from "./useStyles";
import useGetActiveDealsListQuery from "../../common/queries/useGetActiveDealsListQuery";
import { useRef, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useAuth } from "../../context/AuthContext";
import expanded from "../../assets/icons/expanded.svg";
import TextInput from "../../components/fields/TextInput";
import Modal from "../../components/common/Modal";
import useGetSubStatusListQuery from "../../common/queries/useGetSubStatusListQuery";
import useGetLoanProductListQuery from "../../common/queries/useGetLoanProductListQuery";
import MultiSelect from "../../components/fields/MultiSelect";
import { useSearchParams } from "react-router-dom";
function Active() {
  const styles = useStyles();
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState({
    productCodes: searchParams.getAll("productCodes"),
    progressSubStatuses: searchParams.getAll("progressSubStatuses"),
  });

  const [expandedModalVisible, setExpandedModalVisible] = useState(false);
  const { principal } = useAuth();
  const { data: activeColumns } = useGetActiveDealsListQuery({
    dealStatuses: "ACTIVE",
    ownerExternalIds: principal?.sub,
    searchText: searchParams.get("searchText") ?? "",
    productCodes: searchParams.getAll("productCodes"),
    progressSubStatuses: searchParams.getAll("progressSubStatuses"),
  });
  const { data: subStatusList } = useGetSubStatusListQuery();
  const { data: productList } = useGetLoanProductListQuery();
  const ScrollRef = useRef<HTMLElement | null>(null);

  const category =
    searchParams.get("searchText") ??
    "" +
      searchParams.getAll("productCodes") +
      searchParams.getAll("progressSubStatuses");

  const scrollToMaxLeft = () => {
    if (ScrollRef.current) {
      ScrollRef.current.scrollLeft = 0;
    }
  };

  const scrollToMaxRight = () => {
    ScrollRef.current?.scrollTo({
      left: ScrollRef.current.scrollWidth,
      behavior: "smooth",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setSearchParams((searchParams) => {
      if (value === "") {
        searchParams.delete("searchText");
      } else {
        searchParams.set("searchText", value);
      }
      return searchParams;
    });
  };

  const handleMultiSelectChange = (field: string) => {
    return function (value: SelectChangeEvent<string[]>) {
      setParams((prev) => ({
        ...prev,
        [field]: value,
      }));
    };
  };

  const handleApply = () => {
    setExpandedModalVisible(false);
    setSearchParams((searchParams) => {
      searchParams.delete("progressSubStatuses");
      searchParams.delete("productCodes");
      params.productCodes.forEach((code) => {
        searchParams.append("productCodes", code);
      });
      params.progressSubStatuses.forEach((status) => {
        searchParams.append("progressSubStatuses", status);
      });

      return searchParams;
    });
  };

  return (
    <Box sx={styles.ActiveMainBoxStyles}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={styles.ActiveTypographyStyles}>
              Active Deals
            </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <KeyboardArrowLeftIcon
              sx={{ fontSize: 40, cursor: "pointer" }}
              onClick={scrollToMaxLeft}
            />
            <KeyboardArrowRightIcon
              sx={{ fontSize: 40, cursor: "pointer" }}
              onClick={scrollToMaxRight}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "200px" }}>
            <TextInput
              type="text"
              placeholder="Search"
              value={searchParams.get("searchText") ?? ""}
              onChange={debounce(handleInputChange, 1000)}
            />
          </Box>
          <Box
            component="img"
            src={expanded}
            alt="expanded"
            sx={{ height: "56px", width: "56px", cursor: "pointer" }}
            onClick={() => setExpandedModalVisible(true)}
          />
        </Box>
      </Box>

      <Box ref={ScrollRef} sx={styles.ActiveSecondaryBoxStyles}>
        {activeColumns?.map((el) => (
          <ActiveColumn
            key={category +el.status.id}
            label={el.status.label}
            deals={el.deals}
            ref={ScrollRef}
          />
        ))}
      </Box>
      <Modal
        title={"Expanded Filters"}
        isDialogOpen={expandedModalVisible}
        handleDialogClose={() => {
          setExpandedModalVisible(false);
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "20px",
              width: "500px",
            }}
          >
            <MultiSelect
              options={productList || []}
              label="პროდუქტი"
              value={params.productCodes}
              onChange={handleMultiSelectChange("productCodes")}
              inputValueKey="productCode"
            />
            <MultiSelect
              options={subStatusList || []}
              label="საბ სტატუსი"
              inputValueKey="subStatus"
              content="label"
              value={params.progressSubStatuses}
              onChange={handleMultiSelectChange("progressSubStatuses")}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              sx={{
                backgroundColor: (theme) => theme.palette.primary.main,
                paddingX: "30px",
                color: (theme) => theme.palette.text.secondary,
                borderRadius: "4px",
              }}
              onClick={handleApply}
            >
              Apply
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default Active;
