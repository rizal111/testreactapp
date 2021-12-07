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
	width: "114px",
};

const AddAddress = () => {
	return (
		<Card sx={style}>
			<CardContent>
				<Stack spacing={2}>
					<Typography variant="h6" color="text.primary">
						Add New Address
					</Typography>
					<TextField type="Text" id="username" label="Address Name" />
					<TextField type="Text" id="password" label="Unit/Block/Building" />
					<TextField type="Text" id="password" label="Street" />
					<Stack direction="row" spacing={2}>
						<Box>
							<TextField sx={postStyle} id="username" label="Postcode" />
						</Box>
						<TextField sx={{ width: "100%" }} id="username" label="Country" />
					</Stack>
					<Button variant="contained" color="primary">
						Save
					</Button>
				</Stack>
			</CardContent>
		</Card>
	);
};

const EditAddress = () => {
	return (
		<Card sx={style}>
			<CardContent>
				<Stack spacing={2}>
					<Typography variant="h6" color="text.primary">
						Edit Address
					</Typography>
					<TextField type="Text" id="username" label="Address Name" />
					<TextField type="Text" id="password" label="Unit/Block/Building" />
					<TextField type="Text" id="password" label="Street" />
					<Stack direction="row" spacing={2}>
						<Box>
							<TextField sx={postStyle} id="username" label="Postcode" />
						</Box>
						<TextField sx={{ width: "100%" }} id="username" label="Country" />
					</Stack>
					<Button variant="contained" color="primary">
						Save
					</Button>
				</Stack>
			</CardContent>
		</Card>
	);
};

export { AddAddress, EditAddress };
