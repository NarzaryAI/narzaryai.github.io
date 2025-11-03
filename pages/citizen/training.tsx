import * as React from "react";
import { Container, Section, Box, Separator, Heading, Text } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { ColorsHeader } from "@components/ColorsHeader";
import Head from "next/head";
import { ColorsMobileMenu } from "@components/ColorsMobileMenu";
import { SerifHeading } from "@components/SerifHeading";

export default function TrainingPage() {
    return (
        <MobileMenuProvider>
            <ColorsMobileMenu />

            <Head>
                <style>
                    {`
                        :is(.dark, .dark-theme) :is(body, .radix-themes) {
                            --color-background: #0b0b0b;
                            --color-panel-solid: var(--gray-1);
                        }
                    `}
                </style>
            </Head>

            <Box
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: 480,
                    opacity: 0.6,
                    background:
                        "linear-gradient(to bottom, var(--crimson-4), var(--amber-2), transparent)",
                }}
            />

            <ColorsHeader ghost />
            <TitleAndMetaTags
                title="Training | Narzary Engineering & Consultancy Pvt. Ltd."
                description="Skill development, vocational, and technical training for citizens."
                image="seekgpt.png"
            />
            <Section size={{ initial: "2", md: "4" }}>
                <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
                    <SerifHeading mb="3" style={{ maxWidth: 720 }}>
                        Training & Skill Development
                    </SerifHeading>

                    <Box style={{ maxWidth: 800 }}>
                        <Text size="5" as="p" mb="6" color="gray">
                            Narzary Engineering & Consultancy offers training and skill development programs for citizens, focusing on employability, entrepreneurship, and technical expertise. Our courses cover vocational, IT, civil engineering, and soft skills, empowering individuals for career growth and self-reliance.
                        </Text>
                    </Box>

                    <Heading as="h3" size="5" mb="2">Training Programs Offered</Heading>
                    <ul style={{ marginTop: 12, paddingLeft: 20 }}>
                        <li><Text size="2">Vocational training (plumbing, electrical, masonry, carpentry)</Text></li>
                        <li><Text size="2">IT and digital skills (basic computer, web, office tools)</Text></li>
                        <li><Text size="2">Civil engineering basics and site supervision</Text></li>
                        <li><Text size="2">Entrepreneurship and business skills</Text></li>
                        <li><Text size="2">Soft skills: communication, teamwork, leadership</Text></li>
                    </ul>

                    <Heading as="h3" size="5" mt="6" mb="2">Process</Heading>
                    <ol style={{ marginTop: 12, paddingLeft: 20 }}>
                        <li><Text size="2">Enrollment and orientation</Text></li>
                        <li><Text size="2">Training sessions (online/offline)</Text></li>
                        <li><Text size="2">Assessment and certification</Text></li>
                        <li><Text size="2">Placement support and follow-up</Text></li>
                    </ol>

                    <Heading as="h3" size="5" mt="6" mb="2">Benefits</Heading>
                    <ul style={{ marginTop: 12, paddingLeft: 20 }}>
                        <li><Text size="2">Industry-relevant skills and certifications</Text></li>
                        <li><Text size="2">Improved employability and career prospects</Text></li>
                        <li><Text size="2">Entrepreneurship and self-employment opportunities</Text></li>
                        <li><Text size="2">Expert trainers and practical learning</Text></li>
                    </ul>

                    <Box mt="6">
                        <Text size="4" as="p" color="bronze" weight="bold">
                            Interested in training programs? Email <a href="mailto:training@narzary.com">training@narzary.com</a> or visit our Citizen Services page for details.
                        </Text>
                    </Box>
                </Container>
            </Section>
            <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
                <Separator size="2" />
                <Section size={{ initial: "2", md: "4" }} pb="0">
                    <Footer />
                </Section>
            </Container>
        </MobileMenuProvider>
    );
}