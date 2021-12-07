import React from "react";
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
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
	{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
	{ id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
	{ id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
	{ id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
	{ id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
	{ id: 6, lastName: "Melisandre", firstName: null, age: 150 },
	{ id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
	{ id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
	{ id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const RemovedEmployees = () => {
	return (
		<Box>
			<Stack
				Stack
				direction="row"
				justifyContent="flex-start"
				alignItems="center"
				spacing={2}
				className="Header"
			>
				<Link to="/dashboard">
					<Button variant="text" startIcon={<ArrowBackIcon />}>
						Back
					</Button>
				</Link>
				<Typography variant="h4">Removed Employees</Typography>
			</Stack>
			<TableContainer
				TableHead
				sx={{ bgcolor: "transparent", boxShadow: "none" }}
				component={Paper}
			>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableRow>
						<TableCell sx={{ width: "200px", padding: "5px" }}>
							<Typography variant="body2" color="text.disabled">
								Employee ID
							</Typography>
						</TableCell>
						<TableCell sx={{ padding: "5px" }} align="left">
							<Typography variant="body2" color="text.disabled">
								Employee Name
							</Typography>
						</TableCell>
						<TableCell sx={{ padding: "5px" }} align="right">
							<Typography variant="body2" color="text.disabled">
								Removed Date
							</Typography>
						</TableCell>
					</TableRow>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.id}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell
									sx={{ borderBottom: "0" }}
									component="th"
									scope="row"
									align="left"
								>
									{row.firstName}
								</TableCell>
								<TableCell sx={{ borderBottom: "0" }} align="left">
									{row.lastName}
								</TableCell>
								<TableCell sx={{ borderBottom: "0" }} align="right">
									{row.age}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default RemovedEmployees;
