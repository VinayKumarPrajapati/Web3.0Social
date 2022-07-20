export const userSchema = {
	name: "users",
	type: "document",
	title: "Users",
	fields: [
		{
			name: "name",
			type: "string",
			title: "Name",
		},
		{
			name: "address",
			type: "string",
			title: "address",
		},
		{
			name: "walletAddress",
			type: "string",
			title: "Wallet Address",
		},
		{
			name: "profileImage",
			type: "string",
			title: "Profile Image",
		},
	],
};
