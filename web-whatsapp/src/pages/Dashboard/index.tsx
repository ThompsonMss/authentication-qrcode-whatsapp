import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Load } from "../../components/Load";
import { API, User } from "../../services/api";
import { Auth } from "../AuthQrCode";

import { Container, ContainerLoad } from "./styles";

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
            setTimeout(() => setLoading(false), 2000)
        }
    }

    function logout () {
        localStorage.setItem(`@devsapp:1.0.0`, '');
        navigate("/", { replace: true });
    }

    if (loading) {
        return (
            <ContainerLoad>
                <Load />
            </ContainerLoad>
        )
    }

    return (
        <Container>
            <header>
                <h1>Bem vindo(a), <b>{user?.user.name}</b></h1>
            </header>

            <main>

                <p>Seu ID: {user?.user._id}</p>

                <button onClick={logout}>
                    <span>Sair</span>
                </button>

            </main>
        </Container>
    );
}