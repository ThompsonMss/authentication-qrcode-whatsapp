import { Container, ContainerInput, Label } from "./styles";

export function Input ({ label, ...args }) {
    return (
        <Container>
            <Label>{label}</Label>
            <ContainerInput {...args} />
        </Container>
    );
}