import {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";


export type LoginProps={
    login: (name: string, password: string) => Promise<string>
}

const Login = (props: LoginProps) => {

    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const navigate = useNavigate()

    function onChangeName(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    }

    function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
    }

    function onLoginSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        props.login(name, password)
            .then(user => {
                navigate("/")
            })
    }

    return(
        <div>
            <h2>Login</h2>
            <div>
                <form onSubmit={onLoginSubmit}></form>
                <input onChange={onChangeName}
                value={name}
                type={"text"}
                placeholder={"Name"}/>
                <input/>
                <input onChange={onChangePassword}
                value={password}
                type={"password"}
                placeholder={"schreib deine 1234 rein"}/>
                <button type={"submit"}>Rein da</button>
            </div>
        </div>
    )
}
