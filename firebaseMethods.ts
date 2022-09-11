
import "firebase/firestore";
import { Alert } from "react-native";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export async function registration(email: string, password: string, lastName: string, firstName: string) {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const currentUser = firebase.auth().currentUser;

        if (currentUser) {
            const db = firebase.firestore();
            db.collection("users")
                .doc(currentUser.uid)
                .set({
                    email: currentUser.email,
                    lastName: lastName,
                    firstName: firstName,
                });
        }

    } catch (err: any) {
        Alert.alert("There is something wrong!!!!", err.message);
    }
}

export async function signIn(email: string, password: string) {
    try {
        await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
    } catch (err: any) {
        Alert.alert("There is something wrong!", err.message);
    }
}

export async function loggingOut() {
    try {
        await firebase.auth().signOut();
    } catch (err: any) {
        Alert.alert('There is something wrong!', err.message);
    }
}