import * as React from "react";
import NextLink from "next/link";
import { useState } from "react";
import {
    Box,
    Text,
    Grid,
    Heading,
    Container,
    Section,
    Button,
    Card,
} from "@radix-ui/themes";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { Footer } from "@components/Footer";
import { ColorsHeader } from "@components/ColorsHeader";
import { MobileMenuProvider } from "@components/MobileMenu";
import Head from "next/head";
import { SerifHeading } from "@components/SerifHeading";

const EstimationPage: React.FC = () => {
    const [projectType, setProjectType] = useState("small");
    const [projectValue, setProjectValue] = useState<number>(0);
    const [notes, setNotes] = useState("");
    const [estimate, setEstimate] = useState<number | null>(null);

    const handleCalculate = () => {
        const pv = Number(projectValue) || 0;
        let percent = 0.025;
        if (projectType === "medium") percent = 0.05;
        if (projectType === "large") percent = 0.10;
        const total = pv * percent;
        setEstimate(total);
    };

    const formatINR = (value: number) =>
        value.toLocaleString("en-IN", { style: "currency", currency: "INR" });

    const reset = () => {
        setProjectType("small");
        setProjectValue(0);
        setNotes("");
        setEstimate(null);
    };

    return (
        <MobileMenuProvider>
            <Head>
                <title>Estimation & Costing — Consultancy</title>
            </Head>

            <ColorsHeader ghost />

            <Box mx={{ initial: "5", xs: "6", sm: "7", md: "9" }} position="relative">
                <TitleAndMetaTags
                    title="Estimation & Costing | Narzary Engineering & Consultancy"
                    description="Estimate project costs quickly by entering your total project value — the estimator returns 2.5% of the project value as the consultancy cost."
                    image="seekgpt.png"
                />

                <Section size={{ initial: "2", md: "4" }}>
                    <Container>
                        <SerifHeading mb="3" style={{ maxWidth: 720 }}>
                            Estimation &amp; Costing
                        </SerifHeading>

                        <Box style={{ maxWidth: 800 }}>
                            <Text size="5" as="p" mb="6" color="gray">
                                A successful project—whether it's a new building, a custom software application, or a comprehensive town plan—begins long before the first shovel hits the ground or the first line of code is written. It begins with a number. An accurate, reliable, and transparent number.

                            </Text>
                        </Box>

                        

                        <Grid columns={{ initial: "1", md: "2" }} gap="4">
                            <Card style={{ padding: "1rem" }}>
                                <Heading size="5" mb="3">Project Details</Heading>

                                <Box mb="3">
                                    <Text as="label" size="2" weight="bold">
                                        Project Type
                                    </Text>
                                    <select
                                        value={projectType}
                                        onChange={(e) => setProjectType(e.target.value)}
                                        style={{ width: "100%", padding: 8, marginTop: 8 }}
                                    >
                                        <option value="small">Small — single module / minor enhancements</option>
                                        <option value="medium">Medium — multi-module or moderate scope</option>
                                        <option value="large">Large — full-scale project</option>
                                    </select>
                                </Box>

                                <Box mb="3">
                                    <Text as="label" size="2" weight="bold">
                                        Project Value (INR)
                                    </Text>
                                    <input
                                        type="number"
                                        value={projectValue}
                                        onChange={(e) => setProjectValue(Number(e.target.value) || 1000000)}
                                        style={{ width: "100%", padding: 8, marginTop: 8 }}
                                        placeholder="Enter total project value in INR"
                                    />
                                </Box>

                                <Box mb="3">
                                    <Text as="label" size="2" weight="bold">
                                        Notes (optional)
                                    </Text>
                                    <textarea
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                        rows={4}
                                        style={{ width: "100%", padding: 8, marginTop: 8 }}
                                    />
                                </Box>

                                <Box style={{ display: "flex", gap: 8, marginTop: 12 }}>
                                    <Button variant="solid" color="bronze" onClick={handleCalculate}>
                                        Calculate Estimate
                                    </Button>
                                    <Button variant="soft" onClick={reset}>Reset</Button>
                                </Box>
                            </Card>

                            <Card style={{ padding: "1rem" }}>
                                <Heading size="5" mb="3">Estimate Summary</Heading>

                                {estimate == null ? (
                                    <Text as="p" color="gray">No estimate calculated yet. Click "Calculate Estimate" to see results.</Text>
                                ) : (
                                    <Box>
                                        <Text as="p" mb="2">Project Type: <strong>{projectType}</strong></Text>
                                        <Text as="p" mb="2">Project Value: <strong>{formatINR(projectValue)}</strong></Text>
                                        <Text as="p" size="5" weight="bold" mb="2">Consultancy Cost (2.5%): <strong>{formatINR(estimate)}</strong></Text>

                                        <Box mt="3">
                                            <Text as="p" color="gray">This is a preliminary estimate for budgeting only. For a formal proposal and scope-of-work, contact our consultancy team.</Text>
                                            <Box mt="3">
                                                <Button asChild variant="solid" color="bronze">
                                                    <NextLink href="/consultancy/contact">Request Formal Quote</NextLink>
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                )}
                            </Card>
                        </Grid>

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

export default EstimationPage;
