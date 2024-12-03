import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Accordion, AccordionSummary } from "@mui/material";

function AccordionComponent({ children, title, expanded, name, handler }:any) {
    return (
        <Accordion
            expanded={expanded === name}
            onChange={handler(name)}
            sx={{ "&:before": { height: "0px" } }}
            style={{
                border: 0,
                boxShadow: "none",
            }}
            disableGutters
        >
            <AccordionSummary
                expandIcon={<ExpandMoreRoundedIcon fontSize="small" />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                    margin: "0px !important",
                    border: 0,
                    height: "40px",
                    minHeight: "40px",
                    fontWeight: 300,
                    boxShadow: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    fontSize: "14px",
                    color: "#616161",
                    padding: "12px 0px 12px 16px",
                    borderRadius: "8px",
                    width: "100%",
                    transition: "color 0.3s ease-out",
                    "&.Mui-expanded": {
                        minHeight: "0px",
                        height: "40px",
                    },
                }}
            >
                {title}
            </AccordionSummary>
            {children}
        </Accordion>
    );
}

export default AccordionComponent;
