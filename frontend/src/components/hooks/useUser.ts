import {useEffect, useState} from "react";
import axios from "axios";
import {User} from "../models/User";
import {Car} from "../models/Car";
import {TuningPart} from "../models/TuningPart";
import {useNavigate} from "react-router-dom";

export default function useUser(){

    const emptyTuningPart:Array<TuningPart>=[{
        "id": "",
        "name": "",
        "shopUrl": ""
    }]
    const emptyCar:Car={
        "id": "",
        "img": "",
        "description": "",
        "tuningParts":emptyTuningPart
    }
    const  emptyUser:User={
        "id":"",
        "name": "",
        "password": "",
        "email": "",
        "car":emptyCar
    }

    const [user, setUser] = useState<User>(emptyUser)

    useEffect(()=>{
        axios.get("/api/users/me")
            .then(result => result.data)
            .then(setUser)
    },[])

    function login(username: string, password: string){
        return axios.post("/api/users/login", undefined, {
            auth: {
                username,
                password
            },
        })
            .then((result)=> result.data)
            .then(data => {
                setUser(data)
                return data
            })
    }

    function logout() {
        return axios.post("/api/users/logout")
            .then((result) => result.data)
            .then((data) => {
                setUser(data)
                return data
            })
    }

    function register(name: string, email: string, password: string){
        axios.post("/api/users", {
            name: name,
            email: email,
            password: password
        }).catch(e => console.error(e))
    }
    function setUpdatedUser(user: User) {
        setUser(user)
    }

    return {user, setUpdatedUser, login, logout, register}
}