import * as React from "react";
import NextLink from "next/link";
import { Box, Text, Heading, Container, Section, Button, Card, Grid } from "@radix-ui/themes";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { Footer } from "@components/Footer";
import { ColorsHeader } from "@components/ColorsHeader";
import { MobileMenuProvider } from "@components/MobileMenu";
import Head from "next/head";
import { SerifHeading } from "@components/SerifHeading";

const ProjectManagementPage: React.FC = () => {
    return (
        <MobileMenuProvider>
            <Head>
                <title>Project Management — Consultancy</title>
            </Head>

            <ColorsHeader ghost />

            <Box mx={{ initial: "5", xs: "6", sm: "7", md: "9" }} position="relative">
                <TitleAndMetaTags
                    title="Project Management | Narzary Engineering & Consultancy"
                    description="Comprehensive project management consultancy for civil, IT, and infrastructure projects. Planning, execution, monitoring, and delivery."
                    image="seekgpt.png"
                />

                <Section size={{ initial: "2", md: "4" }}>
                    <Container>
                        <SerifHeading mb="3" style={{ maxWidth: 720 }}>
                            Project Management
                        </SerifHeading>

                        <Box style={{ maxWidth: 800 }}>
                            <Text size="5" as="p" mb="6" color="gray">
                                Narzary Engineering & Consultancy offers end-to-end project management services for civil, IT, and infrastructure projects. We ensure successful delivery through expert planning, execution, monitoring, and control, tailored to client goals and regulatory requirements.
                            </Text>
                        </Box>

                        <Grid columns={{ initial: "1", md: "2" }} gap="6">
                            <Card style={{ padding: "1rem" }}>
                                <Heading size="5" mb="3">Core Services</Heading>
                                <ul style={{ paddingLeft: 20 }}>
                                    <li><Text as="span">Project planning and scheduling</Text></li>
                                    <li><Text as="span">Resource allocation and budgeting</Text></li>
                                    <li><Text as="span">Risk management and mitigation</Text></li>
                                    <li><Text as="span">Quality assurance and compliance</Text></li>
                                    <li><Text as="span">Stakeholder coordination and reporting</Text></li>
                                    <li><Text as="span">Procurement and contract management</Text></li>
                                    <li><Text as="span">Site supervision and progress monitoring</Text></li>
                                </ul>
                            </Card>

                            <Card style={{ padding: "1rem" }}>
                                <Heading size="5" mb="3">Why partner with us</Heading>
                                <Text as="p" mb="2">Our experienced project managers deliver results on time and within budget, using proven methodologies and local expertise.</Text>
                                <ul style={{ paddingLeft: 20 }}>
                                    <li><Text as="span">Certified project management professionals</Text></li>
                                    <li><Text as="span">Integrated approach for civil, IT, and infrastructure projects</Text></li>
                                    <li><Text as="span">Transparent communication and reporting</Text></li>
                                    <li><Text as="span">Commitment to safety, sustainability, and compliance</Text></li>
                                    <li><Text as="span">Strong relationships with contractors and suppliers</Text></li>
                                </ul>
                            </Card>

                            <Card style={{ padding: "1rem" }}>
                                <Heading size="5" mb="3">Typical Deliverables</Heading>
                                <ul style={{ paddingLeft: 20 }}>
                                    <li><Text as="span">Project management plans and schedules</Text></li>
                                    <li><Text as="span">Budget and resource allocation reports</Text></li>
                                    <li><Text as="span">Risk assessment and mitigation plans</Text></li>
                                    <li><Text as="span">Quality assurance documentation</Text></li>
                                    <li><Text as="span">Progress reports and stakeholder updates</Text></li>
                                    <li><Text as="span">Final project completion and handover documentation</Text></li>
                                </ul>
                            </Card>

                            <Card style={{ padding: "1rem" }}>
                                <Heading size="5" mb="3">Our Process</Heading>
                                <ol style={{ paddingLeft: 20 }}>
                                    <li><Text as="span">Project initiation and requirements gathering</Text></li>
                                    <li><Text as="span">Planning and resource allocation</Text></li>
                                    <li><Text as="span">Execution and site supervision</Text></li>
                                    <li><Text as="span">Monitoring, reporting, and quality assurance</Text></li>
                                    <li><Text as="span">Project closure and handover</Text></li>
                                </ol>
                            </Card>
                        </Grid>

                        <Box mt="6">
                            <Text as="p" mb="3">From concept to completion, our team ensures your project is delivered efficiently, safely, and to the highest standards.</Text>
                            <Button asChild variant="solid" color="bronze">
                                <NextLink href="/consultancy/contact">Request Project Management Consultation</NextLink>
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

export default ProjectManagementPage;
