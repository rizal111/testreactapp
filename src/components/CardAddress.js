import React from "react";
import Typography from "@mui/material/Typography";
import {
	Box,
	Grid,
	Button,
	Card,
	CardActions,
	CardContent,
	SvgIcon,
	IconButton,
	Modal,
} from "@mui/material/";

import { EditAddress } from "./AddressForm.js";

const CardAddress = ({ name, address }) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Card sx={{ minWidth: 275, borderRadius: "20px" }}>
			<CardContent>
				<Grid
					container
					justifyContent="space-between"
					alignItems="center"
					spacing={2}
				>
					<Grid item xs="10">
						<Typography variant="h6" color="primary.dark">
							{name}
						</Typography>
					</Grid>
					<Grid item>
						<IconButton>
							<SvgIcon
								sx={{ color: "rgba(0, 0, 0, 0.54)" }}
								onClick={handleOpen}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
									<path
										fill-rule="evenodd"
										d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
										clip-rule="evenodd"
									/>
								</svg>
							</SvgIcon>
						</IconButton>
						<Modal
							open={open}
							onClose={handleClose}
							aria-labelledby="modal-modal-title"
							aria-describedby="modal-modal-description"
						>
							<EditAddress></EditAddress>
						</Modal>
					</Grid>
				</Grid>
				<Typography variant="body1" color="text.primary">
					{name}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CardAddress;
