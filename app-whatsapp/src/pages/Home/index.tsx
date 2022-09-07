import { useEffect, useState } from "react";
import { Alert, AsyncStorage } from "react-native";
import { ContainerApp } from "../../components/ContainerApp";
import { API, LoginResponse, User } from "../../services/api";
import { Bold, ButtonLogout, ButtonQrCode, ContainerForm, ContainerLoad, Content, Header, MaskRound, NameUser, TextID, TextLoad, TextLogout, TextQrCode } from "./styles";

export function Home ({ navigation, route }) {

    const qrCodecodeObject = route.params?.qrCodecodeObject;

    const [load, setLoad] = useState(true);
    const [loadQrCode, setLoadQrCode] = useState(false);

    const [user, setUser] = useState<User | null>(null);

    const [token, setToken] = useState<string | null>(null);

    async function verifyUserAuth () {
        const dataUser: any = await AsyncStorage.getItem('@devesap:1.0.0');

        if (!dataUser) {
            navigation.navigate('Login')
        } else {
            const auth = JSON.parse(dataUser);
            setToken(auth.token);
            getDashboard(auth.token);
        }
    }

    useEffect(() => {
        verifyUserAuth();
    }, [])

    async function handleLogout () {
        await AsyncStorage.setItem('@devesap:1.0.0', '');
        navigation.replace('Login');
    }

    async function getDashboard (myToken: string) {
        try {
            setLoad(true);

            const response: any = await API.dashboard(myToken);
            setUser(response.user);

        } catch (error) {
            Alert.alert('Atenção', error.message)
        } finally {
            setLoad(false);
        }
    }

    useEffect(() => {
        if (qrCodecodeObject) {
            handleLoginQrCode(qrCodecodeObject);
        }
    }, [qrCodecodeObject]);

    async function handleLoginQrCode (qrcode) {
        try {
            setLoadQrCode(true);

            await API.loginQrCode(qrcode, token);
            Alert.alert('Sucesso', 'Dispositivo conectado com sucesso.');

        } catch (error) {
            Alert.alert('Atenção', error.message)
        } finally {
            setLoadQrCode(false);
        }
    }

    if (load) {
        return (
            <ContainerApp>
                <ContainerLoad>
                    <TextLoad>Carregando dados</TextLoad>
                </ContainerLoad>
            </ContainerApp>
        );
    }

    return (
        <ContainerApp statusBarAjuste={48}>
            <Header>
                <NameUser>Bem vindo(a), <Bold>{user?.name}</Bold></NameUser>
                <MaskRound />
            </Header>
            <ContainerForm>
                <Content>

                    <TextID>Seu ID: {user?._id}</TextID>

                    <ButtonQrCode onPress={() => navigation.navigate('ReadQrCode')}>
                        <TextQrCode>{loadQrCode ? "Conectando" : "Conectar na Web"}</TextQrCode>
                    </ButtonQrCode>

                    <ButtonLogout onPress={handleLogout}>
                        <TextLogout>Sair</TextLogout>
                    </ButtonLogout>
                </Content>
            </ContainerForm>
        </ContainerApp>
    );
}