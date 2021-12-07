import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./provider/AuthProvider.js";

import Front from "./pages/Front/Front.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";

import "@fontsource/open-sans";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import ProtectedRoute from "./services/PrivateRoute";

const theme = createTheme({
	palette: {
		type: "light",
		primary: {
			main: "#50D492",
			active: "rgba(0,0,0,0.6)",
			dark: "#389466",
			contrastText: "#ffffff",
		},
		secondary: {
			main: "#243665",
		},
		error: {
			main: "#F44336",
		},
		text: {
			secondary: "rgba(0,0,0,0.6)",
			grey: "#9E9E9E",
			grey600: "#757575",
			primary: "rgba(0,0,0,0.87)",
			disabled: "#00000061",
		},
		action: {
			active: "rgba(0, 0, 0, 0.54)",
		},
	},
	typography: {
		fontFamily: "Exo",
		h2: {
			fontSize: 20,
		},
		h3: {
			fontSize: 16,
		},
		h4: {
			fontSize: 34,
		},
		button: {
			fontSize: 15,
		},
		body2: {
			fontFamily: "Open Sans",
			fontSize: 14,
			fontWeight: 400,
		},
		body1: {
			fontFamily: "Open Sans",
			fontSize: "16px",
			fontWeight: 400,
		},
		h6: {
			fontSize: 20,
			fontWeight: 500,
			lineHeight: "27px",
		},
		overline: {
			fontSize: 12,
			fontWeight: 400,
			lineHeight: "25px",
		},
		button: {
			fontSize: 15,
		},
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: "out" },
					style: {
						border: `1px solid rgba(80, 212, 146, 0.5)`,
						color: "#50D492",
						borderRadius: "10px",
						fontSize: "15px",
						paddingTop: "4px",
						paddingBottom: "4px",
					},
				},
				{
					props: { variant: "Grey" },
					style: {
						color: "#0000008A",
						fontSize: "14px",
					},
				},
			],
		},
		MuiCardContent: {
			variants: [
				{
					props: { variant: "footer" },
					style: {
						backgroundColor: "#F5F5F5",
						padding: "12px",
						paddingBottom: 0,
					},
				},
			],
		},
		MuiLink: {
			styleOverrides: {
				root: {
					fontWeight: 600,
				},
			},
		},
	},
});

function App() {
	return (
		<AuthProvider>
			<ThemeProvider theme={theme}>
				<Router>
					<Routes>
						<Route path="/" element={<Front />} exact />
						{/* <Route
							path="/dashboard"
							element={<ProtectedRoute component={Dashboard} />}
						/> */}
					</Routes>
				</Router>
			</ThemeProvider>
		</AuthProvider>
	);
}

export default App;
