// import firebase from "firebase/app";
// import "firebase/auth";

// export const AuthService = {
// 	logout: async () => {
// 		await firebase.auth().signOut();
// 	},
// 	createUser: async (email, password) => {
// 		try {
// 			const userCred = await firebase
// 				.auth()
// 				.createUserWithEmailAndPassword(email, password);
// 			await userCred.user.sendEmailVerification({
// 				url: "http://localhost:3000",
// 			});
// 			return {
// 				user: userCred.user,
// 			};
// 		} catch (e) {
// 			return {
// 				error: e.message,
// 			};
// 		}
// 	},
// 	signIn: async (email, password) => {
// 		try {
// 			const userCred = await firebase
// 				.auth()
// 				.signInWithEmailAndPassword(email, password);
// 			return {
// 				user: userCred.user,
// 			};
// 		} catch (e) {
// 			return {
// 				error: e.message,
// 			};
// 		}
// 	},
// };
