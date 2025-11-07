import * as React from "react";
import NextLink from "next/link";
import { Box, Text, Heading, Container, Section, Button, Card, Grid } from "@radix-ui/themes";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { Footer } from "@components/Footer";
import { ColorsHeader } from "@components/ColorsHeader";
import { MobileMenuProvider } from "@components/MobileMenu";
import Head from "next/head";
import { SerifHeading } from "@components/SerifHeading";

const DPRPage: React.FC = () => {
  return (
    <MobileMenuProvider>
      <Head>
        <title>DPR Preparation — Consultancy</title>
      </Head>

      <ColorsHeader ghost />

      <Box mx={{ initial: "5", xs: "6", sm: "7", md: "9" }} position="relative">
        <TitleAndMetaTags
          title="DPR Preparation | Narzary Engineering & Consultancy"
          description="Comprehensive Detailed Project Report (DPR) preparation services: feasibility, designs, BOQ, costing, and tender-ready documentation."
          image="narzary.png"
        />

        <Section size={{ initial: "2", md: "4" }}>
          <Container>
            <SerifHeading mb="3" style={{ maxWidth: 720 }}>
              DPR Preparation
            </SerifHeading>

            <Box style={{ maxWidth: 800 }}>
              <Text size="5" as="p" mb="6" color="gray">
                We prepare Detailed Project Reports (DPRs) that turn ideas into implementable, fundable projects. Our DPRs combine technical rigor, financial clarity, and regulatory compliance so your project is ready for appraisal, funding, and execution.

              </Text>
            </Box>


            <Grid columns={{ initial: "1", md: "2" }} gap="6">
              <Card style={{ padding: "1rem" }}>
                <Heading size="5" mb="3">What we deliver</Heading>
                <ul style={{ paddingLeft: 20 }}>
                  <li><Text as="span">Comprehensive feasibility studies and site assessments.</Text></li>
                  <li><Text as="span">Preliminary and detailed engineering designs.</Text></li>
                  <li><Text as="span">Complete Bill of Quantities (BoQ) and detailed cost estimates.</Text></li>
                  <li><Text as="span">Implementation schedules, cash-flow projections and phasing plans.</Text></li>
                  <li><Text as="span">Tender-ready documents and bid evaluation support.</Text></li>
                  <li><Text as="span">Statutory and environmental compliance inputs where applicable.</Text></li>
                </ul>
              </Card>

              <Card style={{ padding: "1rem" }}>
                <Heading size="5" mb="3">Why choose our DPR service</Heading>
                <Text as="p" mb="2">Our DPRs are designed for decision-makers: clear, evidence-backed and oriented to secure approvals and financing.</Text>
                <ul style={{ paddingLeft: 20 }}>
                  <li><Text as="span">Multi-disciplinary team of engineers, planners and financial analysts.</Text></li>
                  <li><Text as="span">Local market knowledge ensuring realistic costings and schedules.</Text></li>
                  <li><Text as="span">Experience preparing DPRs for government, development agencies and private clients.</Text></li>
                  <li><Text as="span">Practical focus on implementability and lifecycle costs.</Text></li>
                </ul>
              </Card>

              <Card style={{ padding: "1rem" }}>
                <Heading size="5" mb="3">Our DPR process</Heading>
                <ol style={{ paddingLeft: 20 }}>
                  <li><Text as="span">Consultation & scope definition — align objectives, deliverables and constraints.</Text></li>
                  <li><Text as="span">Field surveys & data collection — site, geotechnical and stakeholder inputs.</Text></li>
                  <li><Text as="span">Design, costing & drafting — detailed engineering, BoQ and cost estimates.</Text></li>
                  <li><Text as="span">Report compilation & submission — ready-to-use DPR and tender documents.</Text></li>
                </ol>
              </Card>

              <Card style={{ padding: "1rem" }}>
                <Heading size="5" mb="3">Typical sectors</Heading>
                <Text as="p" mb="2">We have experience across multiple sectors including:</Text>
                <ul style={{ paddingLeft: 20 }}>
                  <li><Text as="span">Roads, bridges and civil infrastructure.</Text></li>
                  <li><Text as="span">Water supply, sanitation and drainage projects.</Text></li>
                  <li><Text as="span">Public buildings, schools and healthcare facilities.</Text></li>
                  <li><Text as="span">Urban planning and town development schemes.</Text></li>
                </ul>
              </Card>
            </Grid>

            <Box mt="6">
              <Text as="p" mb="3">Ready to move from concept to funded project? Contact our DPR team to discuss scope, timelines and a tailored quote.</Text>
              <Button asChild variant="solid" color="bronze">
                <NextLink href="/consultancy/contact">Request DPR Consultation</NextLink>
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

export default DPRPage;
