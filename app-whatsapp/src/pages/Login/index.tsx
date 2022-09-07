import { ContainerApp } from "../../components/ContainerApp";
import { Register, TextRegister } from "./styles";

import { LayoutAuth } from "../../components/LayoutAuth";
import { Alert, AsyncStorage, Text } from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { API } from "../../services/api";

export function Login ({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);

    async function verifyUserAuth () {
        const user = await AsyncStorage.getItem('@devesap:1.0.0');

        if (user) {
            navigation.navigate('Home')
        }
    }

    useEffect(() => {
        verifyUserAuth();
    }, [])

    async function handleLogin () {

        if (validateData() !== null) return;

        try {
            setLoading(true);

            const dataLogin = await API.login(email, password);
            await AsyncStorage.setItem('@devesap:1.0.0', JSON.stringify(dataLogin));

            navigation.replace('Home');

        } catch (error: any) {
            Alert.alert('Atenção', 'Dados incorretos.');
        } finally {
            setLoading(false);
        }
    }

    function validateData () {

        if (!email) return Alert.alert('Atenção', 'Preenche o e-mail.');

        if (!password) return Alert.alert('Atenção', 'Preenche a senha.');

        return null;

    }

    return (
        <ContainerApp>
            <LayoutAuth title={"Login"}>
                <Input label="Email" value={email} onChangeText={setEmail} />
                <Input label="Senha" secureTextEntry value={password} onChangeText={setPassword} />

                <Button title={loading ? "Logando" : "Logar"} onPress={handleLogin} />

                <Register onPress={() => navigation.replace('Register')}>
                    <TextRegister>Não tem cadastro? clique aqui!</TextRegister>
                </Register>
            </LayoutAuth>
        </ContainerApp>
    );
}