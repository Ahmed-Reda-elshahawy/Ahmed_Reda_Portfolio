import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
    Tailwind,
} from "@react-email/components";

type ContactFormEmailProps = {
    message: string;
    email: string;
};


export default function ContactFormEmail({ message, email }: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New message from your portfolio site</Preview>
            <Tailwind>
                <Body className="bg-gray-100 text-black">
                    <Container>
                        <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                            <Heading className="leading-tight">
                                You received the following message from the contact form
                            </Heading>
                            <Text>{message}</Text>
                            <Hr />
                            <Text>
                                The sender&apos;s email is: <span className="font-bold">{email}</span>
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}