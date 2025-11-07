import * as React from "react";
import NextLink from "next/link";
import { Container, Section, Box, Separator, Heading, Text, Link } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { BenefitsSection } from "@components/marketing/BenefitsSection";
import { ComponentHighlightsSection } from "@components/marketing/ComponentHighlightsSection";
import { DeveloperExperienceSection } from "@components/marketing/DeveloperExperienceSection";
import { AdoptionSection } from "@components/marketing/AdoptionSection";
import { StatsSection } from "@components/marketing/StatsSection";
import { FancyBackground } from "@components/marketing/FancyBackground";
import { PrimitivesHeader } from "@components/PrimitivesHeader";
import { PrimitivesMobileMenu } from "@components/PrimitivesMobileMenu";
import { SolutionsHeader } from "@components/seekgpt/SolutionsHeader";
import { AppDevHeader } from "@components/seekgpt/AppDevHeader";

export default function SoftwareDevelopmentPage() {
  return (
    <MobileMenuProvider>
      <PrimitivesMobileMenu />

      <TitleAndMetaTags
        title="Software Development Services | Narzary Engineering & Consultancy Pvt. Ltd."
        description="Custom software development from Narzary: enterprise applications, field-data apps, GIS integrations, cloud-native systems, and long-term maintenance for public and private sector projects."
        image="narzary.png"
      />

      <Box style={{ height: 0 }}>
        <PrimitivesHeader ghost />
      </Box>

      <FancyBackground>
        <AppDevHeader />
      </FancyBackground>

      {/* Hero / Overview specific to Software Development */}
      <Section size={{ initial: "3", md: "4" }}>
        <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
          <Box>
            <Heading as="h1" size="6" style={{ marginBottom: 16 }}>
              Software Development Services
            </Heading>
            <Text size="3" style={{ marginBottom: 24 }}>
              We build production-ready software for government agencies, contractors and
              enterprises — from field-data collection apps and GIS-integrated systems to
              cloud-native platforms and custom enterprise solutions. Our focus is on
              deliverables that work in the field, meet procurement requirements, and are
              easy to operate and maintain.
            </Text>
            <Text size="2">
              <NextLink href="/consultancy/estimation-and-costing" passHref legacyBehavior>
                <Link color="gray">Request an estimate</Link>
              </NextLink>
            </Text>
          </Box>
        </Container>
      </Section>

      <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
        <Separator size="2" />
      </Container>

      <Box overflow="hidden">
        {/* Reuse the Benefits/Stats sections from the IT landing to keep messaging consistent */}
        <BenefitsSection />
        <StatsSection />
      </Box>

    
      {/* Software Development — Deliverables & Process */}
      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
          <Box mt="6">
            <Heading as="h3" size="5">What we deliver</Heading>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>
                <Text size="2">Scoping & requirements documentation suitable for tender/DPR</Text>
              </li>
              <li>
                <Text size="2">Custom web and mobile applications (offline-capable where needed)</Text>
              </li>
              <li>
                <Text size="2">GIS & mapping integration, spatial data workflows</Text>
              </li>
              <li>
                <Text size="2">APIs, system integration, and cloud deployments</Text>
              </li>
              <li>
                <Text size="2">Handover, training, and 6–12 month maintenance/SLAs</Text>
              </li>
            </ul>
          </Box>
          <Box mt="6">
            <Heading as="h3" size="5">How we work</Heading>
            <ol style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>
                <Text size="2">Discovery & stakeholder alignment</Text>
              </li>
              <li>
                <Text size="2">Design, prototyping and pilot field tests</Text>
              </li>
              <li>
                <Text size="2">Iterative development with regular demos</Text>
              </li>
              <li>
                <Text size="2">Deployment, training and operational handover</Text>
              </li>
              <li>
                <Text size="2">Ongoing support, monitoring and feature roadmap</Text>
              </li>
            </ol>
          </Box>
          <Box mt="6" mb="8">
            <Heading as="h3" size="5">Technologies we use</Heading>
            <Text size="2" style={{ marginTop: 12 }}>
              React, React Native / Expo, Node.js, PostgreSQL + PostGIS, Docker, Kubernetes,
              AWS/GCP/Azure, QGIS and standard GIS tooling. We pick the right stack per-project.
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
