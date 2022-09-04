import { useEffect } from "react";
import QrCode from "qrcode";

import { Card, Container, ContainerQrCode, DescOrientation, Header, Package } from "./styles";

import logoWhatsapp from "../../assets/logo-wpp.svg"
import { useGeneratedQRCode } from "../../hooks/useGeneratedQRCode";
import { socket } from "../../services/io";

export interface Auth {
    _id: string;
    token: string;
}

export function AuthQrCode () {

    function prepareAuthenticationQRCode (channelCode: string) {

        socket.removeAllListeners();

        socket.on(`login-qrcode-${channelCode}`, (data: Auth) => {
            onAuthenticationSuccess(data);
        });

    }

    function onAuthenticationSuccess (data: Auth) {
        alert(JSON.stringify(data));
    }

    const { error, dataQRCode } = useGeneratedQRCode();

    useEffect(() => {
        if (dataQRCode.code && !error) {
            prepareAuthenticationQRCode(dataQRCode.code)
        }
    }, [dataQRCode.code])

    return (
        <Container>
            <header>
                <Package>
                    <Header>
                        <img src={logoWhatsapp} />
                        <p>Devsapp Web</p>
                    </Header>
                </Package>
            </header>

            <Package>
                <Card>
                    <div>
                        <DescOrientation>
                            <h1>Para user o Devsapp no seu computador:</h1>
                            <p>1. Abra o Devsapp no seu celular.</p>
                            <p>2. Toque em <b>Mais opções</b> ou <b>Configuraçoes</b> e selecione <b>Aparelhos conectados.</b></p>
                            <p>3. Aponte seu celular para esta tela para capturar o código.</p>
                        </DescOrientation>

                        <ContainerQrCode>

                            {error && <strong>Erro ao gerar QRCode</strong>}

                            {(dataQRCode.srcImg && !error) && (
                                <img src={dataQRCode.srcImg} height={350} width={350} />
                            )}
                        </ContainerQrCode>
                    </div>
                </Card>
            </Package>
        </Container>
    );
}