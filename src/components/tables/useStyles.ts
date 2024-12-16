export const useStyles = () => {
  return {
    tableMainStyles: {
      rows: {
        style: {
          color: "#101828",
          fontSize: "14px",
          backgroundColor: "#F1F1F1",
        },
      },
    },
    tableSecondaryStyles: {
      rows: {
        style: {
          color: "#101828",
          fontSize: "14px",
        },
      },
      headRow: {
        style: {
          color: "#667085",
          backgroundColor: "#f9fafb",
        },
      },
      pagination: {
        style: {
          borderBottomLeftRadius: "12px",
          borderBottomRightRadius: "12px",
        },
      },
    },
    tableBoxStyles: { cursor: "pointer", color: "#5080ff", fontWeight:500 },
  };
};
