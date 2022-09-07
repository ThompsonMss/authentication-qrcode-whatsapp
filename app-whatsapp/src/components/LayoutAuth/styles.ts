import styled from "styled-components/native"
import { LinearGradient } from 'expo-linear-gradient';

export const Header = styled(LinearGradient).attrs({
    colors: ['#15B29F', '#57D08C']
})`
   width: 100%;

   height: 200px;

   align-items: center;
   justify-content: center;
   position: relative;
`;

export const NameOfApp = styled.Text`
    color: white;
    font-size: 30px;
    font-weight: bold;

    margin-bottom: 0px;
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

export const Children = styled.ScrollView`

    background-color: #f6f6fa;
    flex: 1;
    width: 100%;

    padding: 25px 20px 20px 20px;
`;