import * as React from "react";
import { Container, Section, Box, Separator, Heading, Text } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { ColorsHeader } from "@components/ColorsHeader";
import Head from "next/head";
import { ColorsMobileMenu } from "@components/ColorsMobileMenu";
import { SerifHeading } from "@components/SerifHeading";

export default function ConstructionsPage() {
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
                title="Constructions | Narzary Engineering & Consultancy Pvt. Ltd."
                description="Complete construction services for buildings, infrastructure, and public works."
                image="narzary.png"
            />
            <Section size={{ initial: "2", md: "4" }}>
                <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
                    <SerifHeading mb="3" style={{ maxWidth: 720 }}>
                        Constructions
                    </SerifHeading>

                    <Box style={{ maxWidth: 800 }}>
                        <Text size="5" as="p" mb="6" color="gray">
                            We deliver end-to-end civil engineering solutions for public and private sector projects: from construction and infrastructure to buildings, roads, bridges, and planning & design. Our team provides estimation, DPRs, supervision, and lifecycle support.
                        </Text>
                    </Box>
                    
                    <Heading as="h3" size="5" mb="2">Our construction services</Heading>
                    <ul style={{ marginTop: 12, paddingLeft: 20 }}>
                        <li><Text size="2">Site preparation, excavation, and foundation works</Text></li>
                        <li><Text size="2">Structural construction: RCC, steel, masonry</Text></li>
                        <li><Text size="2">Finishing: plastering, painting, flooring, roofing</Text></li>
                        <li><Text size="2">MEP: electrical, plumbing, HVAC installations</Text></li>
                        <li><Text size="2">Project management, safety, and compliance</Text></li>
                    </ul>
                    <Heading as="h3" size="5" mt="6" mb="2">Process</Heading>
                    <ol style={{ marginTop: 12, paddingLeft: 20 }}>
                        <li><Text size="2">Site survey and planning</Text></li>
                        <li><Text size="2">Procurement and mobilization</Text></li>
                        <li><Text size="2">Construction and supervision</Text></li>
                        <li><Text size="2">Quality checks and handover</Text></li>
                    </ol>
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