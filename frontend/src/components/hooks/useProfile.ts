import {useEffect, useState} from "react";
import axios from "axios";
import {User} from "../models/User";

export default function useProfile() {

    function updateImages(user: User) {

        axios.put("/api/users/" + user.id , user)
            .then(response => response.data)
    }

    return {updateImages}
}
