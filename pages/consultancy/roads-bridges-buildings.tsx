import * as React from "react";
import NextLink from "next/link";
import { Box, Text, Heading, Container, Section, Button, Card, Grid } from "@radix-ui/themes";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { Footer } from "@components/Footer";
import { ColorsHeader } from "@components/ColorsHeader";
import { MobileMenuProvider } from "@components/MobileMenu";
import Head from "next/head";
import { SerifHeading } from "@components/SerifHeading";

const RoadsPage: React.FC = () => {
    return (
        <MobileMenuProvider>
            <Head>
                <title>Roads, Bridges & Buildings — Consultancy</title>
            </Head>

            <ColorsHeader ghost />

            <Box mx={{ initial: "5", xs: "6", sm: "7", md: "9" }} position="relative">
                <TitleAndMetaTags
                    title="Roads, Bridges & Buildings | Narzary Engineering & Consultancy"
                    description="Design, engineering, and construction supervision services for roads, bridges and buildings. Structural design, BoQ, tendering, and project management."
                    image="seekgpt.png"
                />

                <Section size={{ initial: "2", md: "4" }}>
                    <Container>
                        <SerifHeading mb="3" style={{ maxWidth: 720 }}>
                            Roads, Bridges &amp; Buildings
                        </SerifHeading>

                        <Box style={{ maxWidth: 800 }}>
                            <Text size="5" as="p" mb="6" color="gray">
                                We deliver end-to-end civil engineering services for transportation and building infrastructure — from feasibility and design through construction supervision and handover.
                            </Text>
                        </Box>


                        <Grid columns={{ initial: "1", md: "2" }} gap="6">
                            <Card style={{ padding: "1rem" }}>
                                <Heading size="5" mb="3">Core Services</Heading>
                                <ul style={{ paddingLeft: 20 }}>
                                    <li><Text as="span">Preliminary and detailed design for roads, bridges and buildings.</Text></li>
                                    <li><Text as="span">Structural analysis and design (RC, steel and composite structures).</Text></li>
                                    <li><Text as="span">Quantity estimation, BOQ preparation and cost planning.</Text></li>
                                    <li><Text as="span">Tender document preparation and bid evaluation.</Text></li>
                                    <li><Text as="span">Construction supervision, quality assurance and project management.</Text></li>
                                </ul>
                            </Card>

                            <Card style={{ padding: "1rem" }}>
                                <Heading size="5" mb="3">Why partner with us</Heading>
                                <Text as="p" mb="2">We combine local experience with technical excellence to deliver practical, buildable designs on time and within budget.</Text>
                                <ul style={{ paddingLeft: 20 }}>
                                    <li><Text as="span">Experienced structural and highway engineers with local project experience.</Text></li>
                                    <li><Text as="span">Practical construction insights to reduce delays and cost overruns.</Text></li>
                                    <li><Text as="span">Strong relationships with local contractors and suppliers to support procurement.</Text></li>
                                    <li><Text as="span">Commitment to safety, sustainability and regulatory compliance.</Text></li>
                                </ul>
                            </Card>

                            <Card style={{ padding: "1rem" }}>
                                <Heading size="5" mb="3">Typical Deliverables</Heading>
                                <ul style={{ paddingLeft: 20 }}>
                                    <li><Text as="span">Feasibility and site assessment reports.</Text></li>
                                    <li><Text as="span">Detailed design drawings and structural calculations.</Text></li>
                                    <li><Text as="span">Bill of Quantities, cost estimates and construction schedules.</Text></li>
                                    <li><Text as="span">Tender documents and bid evaluation reports.</Text></li>
                                    <li><Text as="span">Construction supervision reports and final handover documentation.</Text></li>
                                </ul>
                            </Card>

                            <Card style={{ padding: "1rem" }}>
                                <Heading size="5" mb="3">Our Process</Heading>
                                <ol style={{ paddingLeft: 20 }}>
                                    <li><Text as="span">Site assessment & data collection — surveys, geotech and environmental inputs.</Text></li>
                                    <li><Text as="span">Preliminary design & options appraisal — select optimal alignment and typology.</Text></li>
                                    <li><Text as="span">Detailed design & BoQ — engineering drawings, calculations and quantities.</Text></li>
                                    <li><Text as="span">Tendering & contractor selection — documentation and bid evaluation support.</Text></li>
                                    <li><Text as="span">Construction supervision & QA — site inspections, testing and progress reporting.</Text></li>
                                </ol>
                            </Card>
                        </Grid>

                        <Box mt="6">
                            <Text as="p" mb="3">Whether you are upgrading an existing road, building a new bridge, or delivering a public building, our team provides technical leadership from concept to completion.</Text>
                            <Button asChild variant="solid" color="bronze">
                                <NextLink href="/consultancy/contact">Request a Consultation</NextLink>
                            </Button>
                        </Box>

                        <Box mt="6">
                            <NextLink href="/consultancy">← Back to Consultancy</NextLink>
                        </Box>
                    </Container>
                </Section>
            </Box>

            <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
                <Section size={{ initial: "2", md: "4" }} pb="0">
                    <Footer />
                </Section>
            </Container>
        </MobileMenuProvider>
    );
};

export default RoadsPage;
