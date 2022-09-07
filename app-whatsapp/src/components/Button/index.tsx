import { Container, Text } from "./styles";

export function Button ({ title, ...args }) {
    return (
        <Container {...args}>
            <Text>{title}</Text>
        </Container>
    );
}