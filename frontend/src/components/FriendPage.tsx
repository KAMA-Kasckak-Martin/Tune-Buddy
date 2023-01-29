import React, {ChangeEvent, useEffect, useState} from "react";
import {User} from "./models/User";
import axios from "axios";
import Friend from "./Friend";

export type FriendProps={
    user: User
}

export default function FriendPage(props: FriendProps){
    const [allUsers, setAllUsers] =  useState<Array<User>>([])
    const [searchText, setSearchText] = useState<string>("")
    const filterFriends:User[]=allUsers.filter(user=> user.name.toLowerCase().includes(searchText.toLowerCase()))

    function onSearchChange(event:ChangeEvent<HTMLInputElement>){
        setSearchText(event.target.value)
    }

    useEffect(() => {
        axios.get("/api/users/")
            .then(response => {
                setAllUsers(response.data.filter((u: { id: string; })=> { return  u.id !== props.user.id}))
            })
            .catch(console.error)
    }, [])

    return(
        <div>
            <input placeholder={"Search User"} value={searchText} onChange={onSearchChange}/>
            <div>{filterFriends.map((user, index)=><Friend key={index} user={user}/>)}</div>
        </div>
    )
}