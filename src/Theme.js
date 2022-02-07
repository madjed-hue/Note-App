import { grey, teal } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: teal,
          divider: teal[200],
          text: {
            primary: grey[50],
            secondary: grey[200],
          },
        }
      : {
          // palette values for dark mode
          primary: grey[50],
          divider: grey[200],
          background: {
            default: grey[900],
            paper: grey[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});
