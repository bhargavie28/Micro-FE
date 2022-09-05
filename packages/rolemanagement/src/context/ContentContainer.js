import "./ContentContainer.css";
import { Box } from "@mui/material";

function ContentContainer({ children }) {
  return <Box className="cmp-content-container">{children}</Box>;
}

export default ContentContainer;
