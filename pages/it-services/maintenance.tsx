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

export default function MaintenancePage() {
  return (
    <MobileMenuProvider>
      <PrimitivesMobileMenu />

      <TitleAndMetaTags
        title="Support & Maintenance | Narzary Engineering & Consultancy Pvt. Ltd."
        description="Operational support, maintenance contracts, SLAs and feature roadmaps for project software — bug fixes, security patching, monitoring and prioritized enhancements."
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
              Support & Maintenance
            </Heading>
            <Text size="3" style={{ marginBottom: 24 }}>
              Long-term operational support for software and systems. We offer tiered
              maintenance contracts (bug fixes, security updates, performance tuning),
              monitoring and a clear roadmap process so systems remain secure and useful.
            </Text>
            <Text size="2">
              <NextLink href="/consultancy/estimation" passHref legacyBehavior>
                <Link color="gray">Request support estimate</Link>
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
            <Heading as="h3" size="5">Maintenance tiers</Heading>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>
                <Text size="2">Basic: security patches, emergency fixes and monthly health checks</Text>
              </li>
              <li>
                <Text size="2">Standard: includes Bi-weekly monitoring, minor feature tweaks and SLA response</Text>
              </li>
              <li>
                <Text size="2">Premium: priority response, dedicated support hours and roadmap delivery</Text>
              </li>
            </ul>
          </Box>
          <Box mt="6">
            <Heading as="h3" size="5">How support works</Heading>
            <ol style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>
                <Text size="2">Log support requests via ticketing with prioritization</Text>
              </li>
              <li>
                <Text size="2">We triage, estimate and schedule fixes or enhancements</Text>
              </li>
              <li>
                <Text size="2">Monthly review with a roadmap and incident reports</Text>
              </li>
              <li>
                <Text size="2">Optional dedicated engineers for large portfolios</Text>
              </li>
            </ol>
          </Box>
          <Box mt="6" mb="8">
            <Heading as="h3" size="5">SLAs & onboarding</Heading>
            <Text size="2" style={{ marginTop: 12 }}>
              SLAs are defined per-project. Typical packages include an initial onboarding
              period to stabilise the system, a known change window, and agreed response
              / resolution timelines. We document runbooks and hand over operational
              procedures during onboarding.
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
