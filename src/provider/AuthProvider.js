import React, { useContext, useState, useEffect } from "react";
import {
	signOut,
	getAuth,
	createUserWithEmailAndPassword,
	sendEmailVerification,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [loading, setLoading] = useState(true);
	const [currentUser, setCurrentUser] = useState(null);
	const [errorMsg, setErrorMsg] = useState("this error message");
	const auth = getAuth();

	const user = { email: " " };

	function signup(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	//send email verification
	function sendemailver() {
		return onAuthStateChanged(auth, (user) => {
			if (user) {
				setCurrentUser(user);
				sendEmailVerification(user);
			} else {
			}
		});
	}

	async function login(email, password) {
		let error = "";
		try {
			await signInWithEmailAndPassword(auth, email, password).then(
				(userCredential) => {
					if (userCredential.user.emailVerified) {
						error = "verified";
					} else {
						error = "not";
					}
				}
			);
		} catch (e) {
			error = e.code;
		}
		return error;
	}

	//email verified guard
	function guardemailver() {
		return user.emailVerified;
	}

	function logout() {
		getUser();
		signOut(auth)
			.then(() => {
				console.log("logout");
			})
			.catch((error) => {
				// An error happened.
			});
	}

	function getUser() {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				// console.log(user.email);
				// ...
			} else {
				// User is signed out
				// ...
			}
		});
	}

	function checkUser() {
		let msg;
		if (currentUser) {
			msg = true;
			return msg;
		} else {
			msg = false;
			return msg;
		}
	}

	useEffect(() => {
		const unsubcribe = onAuthStateChanged(auth, (user) => {});
		return () => unsubcribe();
	}, []);

	const value = {
		errorMsg,
		currentUser,
		login,
		signup,
		logout,
		sendemailver,
		guardemailver,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
