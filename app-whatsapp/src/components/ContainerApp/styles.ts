import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${(props) => props.theme.background};
`

export const ContainerStatusBar = styled.View<{ statusBarAjuste: number }>`
    background-color: #15B29F;
    margin-top: -${props => props.statusBarAjuste}px;
`;