import { useEffect, useState } from "react";
import { Keyboard } from "react-native"

import { ContainerApp } from "../../components/ContainerApp";
import { ContainerForm, Header, Logo, MaskRound, TitleForm, Children, NameOfApp } from "./styles";

import logo from "../../../assets/logo-wpp.png";

export function LayoutAuth ({ title, children }) {

    return (
        <ContainerApp>
            <Header>
                <NameOfApp>Devsapp</NameOfApp>
                <MaskRound />
            </Header>
            <ContainerForm>
                <Logo source={logo} />
                <TitleForm>{title}</TitleForm>
                <Children>{children}</Children>
            </ContainerForm>
        </ContainerApp>
    );
}