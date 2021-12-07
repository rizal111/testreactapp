import React from "react";
import Typography from "@mui/material/Typography";
import {
	Box,
	TextField,
	Stack,
	Grid,
	Button,
	Card,
	CardActions,
	CardContent,
	SvgIcon,
	IconButton,
	Modal,
} from "@mui/material/";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 450,
	padding: "9px",
	borderRadius: "20px",
};

const postStyle = {
	width: "220px",
};

const select = [
	{ value: "USD", label: "$" },
	{
		value: "EUR",
		label: "€",
	},
];

const TextSelect = ({ label, select }) => {
	const [AddressSelect, setAddressSelect] = React.useState("EUR");

	const handleChange = (event) => {
		setAddressSelect(event.target.value);
	};
	return (
		<TextField
			select
			label={label}
			value={AddressSelect}
			onChange={handleChange}
			SelectProps={{
				native: true,
			}}
		>
			{select.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</TextField>
	);
};

const AddEmployee = () => {
	return (
		<Card sx={style}>
			<CardContent>
				<Stack spacing={2}>
					<Typography variant="h6" color="text.primary">
						Add Employee
					</Typography>
					<TextField id="username" label="Employee Name" />
					<Stack direction="row" spacing={2}>
						<Box sx={postStyle}>
							<TextField
								sx={postStyle}
								id="usernaame"
								label="Current Position"
							/>
						</Box>
						<TextField
							sx={{ width: "100%" }}
							id="usernaame"
							label="Employee ID"
						/>
					</Stack>
					<TextSelect label="Work Address" select={select} />
					<TextSelect label="Role" select={select} />
					<Button variant="contained" color="primary">
						Save
					</Button>
				</Stack>
			</CardContent>
		</Card>
	);
};

const EditEmployee = ({}) => {
	return (
		<Card sx={style}>
			<CardContent>
				<Stack spacing={2}>
					<Grid
						container
						direction="row"
						justifyContent="space-between"
						alignItems="center"
					>
						<Typography iteem variant="h6" color="text.primary">
							Edit Employee
						</Typography>
						<IconButton item>
							<SvgIcon color="error">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
										clip-rule="evenodd"
									/>
								</svg>
							</SvgIcon>
						</IconButton>
					</Grid>
					<TextField id="username" label="Employee Name" />
					<Stack direction="row" spacing={2}>
						<Box>
							<TextField
								sx={postStyle}
								id="usernaame"
								label="Current Position"
							/>
						</Box>
						<TextField
							sx={{ width: "100%" }}
							id="usernaame"
							label="Employee ID"
						/>
					</Stack>
					<TextSelect label="Work Address" select={select} />
					<TextSelect label="Role" select={select} />
					<Button variant="contained" color="primary">
						Save
					</Button>
				</Stack>
			</CardContent>
		</Card>
	);
};

export { AddEmployee, EditEmployee };
