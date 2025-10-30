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

export default function WebHostingPage() {
  return (
    <MobileMenuProvider>
      <PrimitivesMobileMenu />

      <TitleAndMetaTags
        title="Web & Cloud Hosting | Narzary Engineering & Consultancy Pvt. Ltd."
        description="Reliable web and cloud hosting for project portals, GIS services, and enterprise apps — secure deployments, backups, monitoring, and SLAs for government and enterprise workloads."
        image="seekgpt.png"
      />

      <Box style={{ height: 0 }}>
        <PrimitivesHeader ghost />
      </Box>

      <FancyBackground>
        <SolutionsHeader />
      </FancyBackground>

      <Section size={{ initial: "3", md: "4" }}>
        <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
          <Box>
            <Heading as="h1" size="6" style={{ marginBottom: 16 }}>
              Web & Cloud Hosting
            </Heading>
            <Text size="3" style={{ marginBottom: 24 }}>
              We provide secure, compliant, and cost-effective hosting for public-sector
              project portals, GIS servers, APIs and enterprise applications — including
              managed infrastructure, monitoring, backups and periodic audits to keep your
              systems resilient and procurement-friendly.
            </Text>
            <Text size="2">
              <NextLink href="/consultancy/estimation" passHref legacyBehavior>
                <Link color="gray">Request hosting estimate</Link>
              </NextLink>
            </Text>
          </Box>
        </Container>
      </Section>

      <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
        <Separator size="2" />
      </Container>

      <Box overflow="hidden">
        <BenefitsSection />
        <StatsSection />
      </Box>

      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
          <Box mt="6">
            <Heading as="h3" size="5">Hosting services we provide</Heading>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>
                <Text size="2">Public cloud deployments (AWS, GCP, Azure) and private/cloud-hybrid setups</Text>
              </li>
              <li>
                <Text size="2">Managed web & API hosting with SSL, WAF and DDoS protections</Text>
              </li>
              <li>
                <Text size="2">GIS server & tile hosting (PostGIS, GeoServer, static tiles)</Text>
              </li>
              <li>
                <Text size="2">Automated backups, DR planning and recovery testing</Text>
              </li>
              <li>
                <Text size="2">Monitoring, alerting, patching and monthly operational reports</Text>
              </li>
            </ul>
          </Box>
          <Box mt="6">
            <Heading as="h3" size="5">Operating model</Heading>
            <ol style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>
                <Text size="2">Assess current systems and compliance requirements</Text>
              </li>
              <li>
                <Text size="2">Choose the right hosting model and sizing for cost-effectiveness</Text>
              </li>
              <li>
                <Text size="2">Provision infrastructure, secure configuration and run pilot tests</Text>
              </li>
              <li>
                <Text size="2">Hand over operations documentation and run a defined SLA period</Text>
              </li>
            </ol>
          </Box>
          <Box mt="6" mb="8">
            <Heading as="h3" size="5">Why choose our hosting</Heading>
            <Text size="2" style={{ marginTop: 12 }}>
              We focus on procurement-friendly hosting (audit trails, access controls),
              low-cost operations for public projects, and clear SLAs for uptime and
              incident response. We operate the environment so your teams can focus on
              project outcomes.
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
