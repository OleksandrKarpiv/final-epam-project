import { dataAuthUsers, friends } from "src/dataHelper/dataHelper"
import { authInterface } from "src/models/authInterface";
import { IFriend } from "src/models/friendsInterface";
import { DataUser } from "src/models/userInterface";



export const apiService = {
    checkUserExistAndCheckPass: ({email, password}: DataUser): authInterface => {
        const userExist = dataAuthUsers.find((user) => {
            return user.email === email;
        })

        if (!userExist) {
            return {
                message: "User doesn't exist",
                auth: false
            };
        }

        const IsPasswordTrue = userExist.password === password ? true : false;

        if (!IsPasswordTrue) {
            return {
                message: "Wrong password, try again",
                auth: false
            }
        }

        return {
            message: "Welcome",
            auth: true
        }
    },

    getListFriends(): Array<IFriend> {
            return friends;
    },

    registerUser: ( email : string) => {
        const isExist = dataAuthUsers.find((user) => {
            return user.email === email;
        });

        if (isExist) {
            return {
                message: "This email already exist",
                auth: false
            };
        }

        return {
            message: "Welcome",
            auth: true
        }
    }
    
}