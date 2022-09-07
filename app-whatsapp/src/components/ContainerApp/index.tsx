import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Container, ContainerStatusBar } from "./styles";

export function ContainerApp ({ children, statusBarAjuste = 24 }) {

    return (
        <>
            <ContainerStatusBar statusBarAjuste={statusBarAjuste}>
                <StatusBar backgroundColor="#15B29F" barStyle="light-content" />
            </ContainerStatusBar>

            <Container>
                {children}
            </Container>
        </>

    );

}