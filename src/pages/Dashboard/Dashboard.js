import React, { useState } from "react";
import {
	AppBar,
	Typography,
	IconButton,
	Toolbar,
	Button,
	Box,
	Modal,
	Chip,
	Grid,
	Stack,
	FormControl,
	Select,
	MenuItem,
	OutlinedInput,
} from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { useAuth } from "../../provider/AuthProvider.js";
import { Route, Routes } from "react-router-dom";
import Main from "./Main.js";
import RemovedEmployees from "./RemovedEmployees.js";
import { useNavigate } from "react-router-dom";

function Dashboard() {
	//Change Page
	const [changePage, setChangePage] = React.useState(false);
	const [loading, setLoading] = useState(false);
	const handleRemovedPage = () => setChangePage(true);
	const handleMainPage = () => setChangePage(false);
	const { logout } = useAuth();
	const { currentUser } = useAuth();
	const navigate = useNavigate();

	console.log(currentUser);

	async function handleOut(e) {
		e.preventDefault();
		setLoading(true);
		await logout();
		navigate("/");
	}

	const names = ["Oliver Hansen", "Van Henry", "April Tucker"];
	function getStyles(name, personName, theme) {
		return {
			fontWeight:
				personName.indexOf(name) === -1
					? theme.typography.fontWeightRegular
					: theme.typography.fontWeightMedium,
		};
	}

	return (
		<Box className="BG-W">
			<AppBar position="static" sx={{ mb: 6.25, borderRadius: "20px" }}>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<PeopleOutlineIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Employee Management App
					</Typography>
					<Button color="inherit" onClick={handleOut} disable={loading}>
						LogOut
					</Button>
				</Toolbar>
			</AppBar>
			<Routes>
				<Route path="/" element={<Main />} exact />
				<Route path="removedEmployees" element={<RemovedEmployees />} />
			</Routes>
		</Box>
	);
}

export default Dashboard;
