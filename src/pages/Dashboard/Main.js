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

import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AddIcon from "@mui/icons-material/Add";
import ListIcon from "@mui/icons-material/List";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import CardAddress from "../../components/CardAddress.js";
import CardEmployee from "../../components/CardEmployee.js";
import { AddEmployee } from "../../components/EmployeeForm.js";
import { AddAddress } from "../../components/AddressForm.js";

const Main = () => {
	const [modal, setModal] = React.useState(false);
	const handleOpen = () => setModal(true);
	const handleClose = () => setModal(false);
	const [modal2, setModal2] = React.useState(false);
	const handleOpen2 = () => setModal2(true);
	const handleClose2 = () => setModal2(false);
	return (
		<Box>
			<Grid
				className="Header"
				container
				direction="row"
				justifyContent="space-between"
				alignItems="flex-start"
			>
				<Stack
					Stack
					direction="row"
					justifyContent="flex-start"
					alignItems="center"
					spacing={2}
				>
					<Typography variant="h4">Employees</Typography>
					<Button onClick={handleOpen} startIcon={<AddIcon />} variant="out">
						ADD NEW EMPLOYEE
					</Button>
					<Modal
						open={modal}
						onClose={handleClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<AddAddress></AddAddress>
					</Modal>
					<Link to="/dashboard/removedEmployees">
						<Button startIcon={<ListIcon />} variant="Grey">
							Remove EMPLOYEE
						</Button>
					</Link>
				</Stack>
				<div>
					<FilterAltIcon />
					{/* <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
									<Select
										multiple
										displayEmpty
										value={personName}
										onChange={handleChange}
										input={<OutlinedInput />}
										renderValue={(selected) => {
											if (selected.length === 0) {
												return <em>Placeholder</em>;
											}
				
											return selected.join(", ");
										}}
										MenuProps={MenuProps}
										inputProps={{ "aria-label": "Without label" }}
									>
										<MenuItem disabled value="">
											<em>Placeholder</em>
										</MenuItem>
										{names.map((name) => (
											<MenuItem
												key={name}
												value={name}
												style={getStyles(name, personName, theme)}
											>
												{name}
											</MenuItem>
										))}
									</Select>
								</FormControl> */}
				</div>
			</Grid>
			<Grid
				className="Content"
				container
				justifyContent="flex-start"
				spacing={2}
			>
				<Grid item xs="4">
					<CardEmployee
						id="card"
						position="Senior"
						addressName="Rymnet Solutions"
						name="Shahrizal"
					/>
				</Grid>
				<Grid item xs="4">
					<CardAddress id="card" />
				</Grid>
				<Grid item xs="4">
					<CardAddress id="card" />
				</Grid>
			</Grid>
			<Grid
				container
				direction="row"
				justifyContent="space-between"
				alignItems="flex-start"
				className="Header"
			>
				<Stack
					Stack
					direction="row"
					justifyContent="flex-start"
					alignItems="center"
					spacing={1}
				>
					<Typography variant="h4">Addresses</Typography>
					<Button onClick={handleOpen2} startIcon={<AddIcon />} variant="out">
						ADD ADDRESS
					</Button>
					<Modal
						open={modal2}
						onClose={handleClose2}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<AddEmployee></AddEmployee>
					</Modal>
				</Stack>
				<div>
					<FilterAltIcon />
				</div>
			</Grid>
			<Grid
				className="Content"
				container
				justifyContent="flex-start"
				spacing={2}
			>
				<Grid item xs="4">
					<CardAddress
						id="card"
						position="senior"
						address="lock B23, Level 3A, Jaya One, Jln Profesor Diraja Ungku Aziz, 46200 Petaling Jaya, Selangor"
						name="Shahrizal"
					/>
				</Grid>
				<Grid item xs="4">
					<CardAddress id="card" />
				</Grid>
				<Grid item xs="4">
					<CardAddress id="card" />
				</Grid>
			</Grid>
		</Box>
	);
};

export default Main;
