import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API, User } from "../../services/api";
import { Auth } from "../AuthQrCode";

import { Container } from "./styles";

export function Dashboard () {

    const [user, setUser] = useState<null | User>(null)
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {

        const dataToken: any = localStorage.getItem(`@devsapp:1.0.0`);

        if (!dataToken) {
            navigate("/", { replace: true });
            return;
        }

        const auth: Auth = JSON.parse(dataToken);
        getUser(auth.token)

    }, [])

    async function getUser (token: string) {
        try {
            const dataUser = await API.getDashboard(token);
            setUser(dataUser);
        } catch (error: any) {
            toast.error(`${error.message}`);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container>
            <h1>{user ? user?.user.name : 'nada'}</h1>
        </Container>
    );
}