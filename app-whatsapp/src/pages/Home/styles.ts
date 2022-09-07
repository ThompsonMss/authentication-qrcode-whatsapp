import styled from "styled-components/native"
import { LinearGradient } from 'expo-linear-gradient';

export const Header = styled(LinearGradient).attrs({
    colors: ['#15B29F', '#57D08C']
})`
   width: 100%;

   height: 150px;

   align-items: center;

   position: relative;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const NameUser = styled.Text`
    color: white;
    font-size: 20px;
    margin-top: 70px;

    text-align: center;
`;

export const MaskRound = styled.View`
    width: 100%;
    height: 70px;

    background-color: #f6f6fa;

    position: absolute;
    bottom: -43px;

    border-radius: 200px;
`;

export const ContainerForm = styled.View`

   width: 100%;
   flex: 3;

   background-color: #f6f6fa;

   align-items: center;
   flex-direction: column;

`;

export const Logo = styled.Image`
    height: 60px;
    width: 60px;

    margin-top: -55px;
`;

export const TitleForm = styled.Text`

    font-size: 22px;
    margin-top: 30px;

    color: #3e3e3e;
    text-align: center;
    width: 100%;

`;

export const Content = styled.View`

    background-color: #f6f6fa;
    flex: 1;
    width: 100%;

    padding: 25px 20px 20px 20px;

    align-items: center;
    justify-content: center;

    position: relative;
`;

export const TextID = styled.Text`
    font-size: 16px;
    text-align: center;
    color: #3e3e3e;
    margin-bottom: 20px;
`;

export const ButtonQrCode = styled.TouchableOpacity`
    width: 100%;
    height: 50px;

    background-color: #57D08C;

    border-radius: 4px;

    align-items: center;
    justify-content: center;
`;

export const TextQrCode = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: white;

    text-transform: uppercase;
`;

export const ButtonLogout = styled.TouchableOpacity`
    height: 50px;

    background-color: #ccc;

    border-radius: 4px;

    padding: 0px 20px;

    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 10px;
`;

export const TextLogout = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #3e3e3e;

    text-transform: uppercase;
`;

export const ContainerLoad = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const TextLoad = styled.Text`
    font-size: 16px;
`;
