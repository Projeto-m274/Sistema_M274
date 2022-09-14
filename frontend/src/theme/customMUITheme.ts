import { createMuiTheme } from "@material-ui/core";
import theme from "./theme";

export const customMUITheme = createMuiTheme({
  palette: {
    primary: {
      main: theme.colors.primary.orange,
    },
    secondary: {
      main: theme.colors.primary.orange,
    },
  },

});