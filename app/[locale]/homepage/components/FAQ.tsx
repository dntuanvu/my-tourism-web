import { Collapse } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type FAQProps = {
  question: string;
  answer: string;
};

const FAQ = ({ question, answer }: FAQProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Box
      onClick={handleOpen}
      sx={{
        cursor: "pointer",
        padding: 2,
        boxShadow: 2,
        borderRadius: 2,
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">{question}</Typography>
        <Box
          sx={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
          }}
        >
          <KeyboardArrowDownIcon />
        </Box>
      </Box>
      <Collapse in={open}>
        <Typography variant="body1" mt={2}>
          {answer}
        </Typography>
      </Collapse>
    </Box>
  );
};

export default FAQ;
