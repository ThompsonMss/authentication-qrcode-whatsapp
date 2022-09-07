import { ContainerApp } from "../../components/ContainerApp";
import { Login, TextLogin } from "./styles";

import { LayoutAuth } from "../../components/LayoutAuth";
import { Alert, AsyncStorage, Text } from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { API } from "../../services/api";

export function Register ({ navigation }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);

    async function handleRegister () {

        if (validateData() !== null) return;

        try {
            setLoading(true);

            await API.register(name, email, password);

            Alert.alert('Sucesso', 'Cadastro realizado com sucesso.');

            navigation.replace('Login');

        } catch (error: any) {
            Alert.alert('Atenção', 'Usuário já cadastrado');
        } finally {
            setLoading(false);
        }
    }

    function validateData () {

        if (!name) return Alert.alert('Atenção', 'Preenche o nome.');

        if (!email) return Alert.alert('Atenção', 'Preenche o e-mail.');

        if (!password) return Alert.alert('Atenção', 'Preenche a senha.');

        return null;

    }

    return (
        <ContainerApp>
            <LayoutAuth title={"Cadastro"}>

                <Input label="Nome" value={name} onChangeText={setName} />
                <Input label="Email" value={email} onChangeText={setEmail} />
                <Input label="Senha" secureTextEntry value={password} onChangeText={setPassword} />

                <Button onPress={handleRegister} title={loading ? "Cadastrando" : "Cadastrar"} />

                <Login onPress={() => navigation.navigate('Login')}>
                    <TextLogin>Já tenho cadastro.</TextLogin>
                </Login>
            </LayoutAuth>
        </ContainerApp>
    );
}