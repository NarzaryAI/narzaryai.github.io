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
import { AppDevHeader } from "@components/seekgpt/AppDevHeader";

export default function AppDevelopmentPage() {
  return (
    <MobileMenuProvider>
      <PrimitivesMobileMenu />

      <TitleAndMetaTags
        title="App Development Services | Narzary Engineering & Consultancy Pvt. Ltd."
        description="Mobile and cross-platform app development (React Native / Expo) for field-data collection, worker workflows and contractor apps, with offline-first capabilities and GIS integration."
        image="seekgpt.png"
      />

      <Box style={{ height: 0 }}>
        <PrimitivesHeader ghost />
      </Box>

      <FancyBackground>
        <AppDevHeader />
      </FancyBackground>

      <Section size={{ initial: "3", md: "4" }}>
        <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
          <Box>
            <Heading as="h1" size="6" style={{ marginBottom: 16 }}>
              App Development Services
            </Heading>
            <Text size="3" style={{ marginBottom: 24 }}>
              We build mobile apps for field teams and stakeholders — offline-capable
              data collection, GPS-enabled workflows, push-enabled notifications, and
              integrations with GIS and backend systems. We prioritise usability in low-connectivity environments.
            </Text>
            <Text size="2">
              <NextLink href="/consultancy/estimation" passHref legacyBehavior>
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
        <BenefitsSection />
        <StatsSection />
      </Box>

      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
          <Box mt="6">
            <Heading as="h3" size="5">What we deliver</Heading>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>
                <Text size="2">Offline-first mobile apps (React Native / Expo) with sync and conflict resolution</Text>
              </li>
              <li>
                <Text size="2">GPS-enabled forms, media capture and validation rules</Text>
              </li>
              <li>
                <Text size="2">Push notifications, role-based access and secure auth</Text>
              </li>
              <li>
                <Text size="2">Integration to GIS, APIs and backend systems</Text>
              </li>
              <li>
                <Text size="2">Deployment to Play Store / App Store and enterprise distribution</Text>
              </li>
            </ul>
          </Box>
          <Box mt="6">
            <Heading as="h3" size="5">How we work</Heading>
            <ol style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>
                <Text size="2">Discovery with field visits and persona mapping</Text>
              </li>
              <li>
                <Text size="2">Rapid prototyping and pilot testing with field teams</Text>
              </li>
              <li>
                <Text size="2">Iterative builds with feedback cycles and store submissions</Text>
              </li>
              <li>
                <Text size="2">Support, analytics and roadmap planning post-launch</Text>
              </li>
            </ol>
          </Box>
          <Box mt="6" mb="8">
            <Heading as="h3" size="5">Technologies</Heading>
            <Text size="2" style={{ marginTop: 12 }}>
              React Native / Expo, TypeScript, SQLite for local storage, background sync,
              and integrations with Postgres/PostGIS and standard backend stacks.
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
