import * as React from "react";
import NextLink from "next/link";
import { Container, Section, Box, Separator, Heading, Text, Link, Button } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { BenefitsSection } from "@components/marketing/BenefitsSection";
import { StatsSection } from "@components/marketing/StatsSection";
import { FancyBackground } from "@components/marketing/FancyBackground";
import { PrimitivesHeader } from "@components/PrimitivesHeader";
import { PrimitivesMobileMenu } from "@components/PrimitivesMobileMenu";
import { SolutionsHeader } from "@components/seekgpt/SolutionsHeader";

export default function GetStartedPage() {
  return (
    <MobileMenuProvider>
      <PrimitivesMobileMenu />

      <TitleAndMetaTags
        title="Get Started | Narzary Engineering & Consultancy"
        description="Start a project with Narzary: request an estimate, schedule a discovery call, or ask about DPR and procurement-ready deliverables."
        image="narzary.png"
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
              Get started with Narzary
            </Heading>
            <Text size="3" style={{ marginBottom: 24 }}>
              A short, predictable process to move from idea to procurement-ready deliverables.
            </Text>
            <Box mb="5">
              <NextLink href="/consultancy/estimation-and-costing" passHref legacyBehavior>
                <Button asChild size={{ initial: "3", xs: "4" }} color="gray" highContrast>
                  <a>Request an estimate</a>
                </Button>
              </NextLink>
            </Box>
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
            <Heading as="h3" size="5">How to begin</Heading>
            <ol style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>
                <Text size="2">Request an estimate — share project scope or procurement documents</Text>
              </li>
              <li>
                <Text size="2">Schedule a discovery call to align stakeholders and constraints</Text>
              </li>
              <li>
                <Text size="2">We deliver a proposal, timeline and a DPR/tender-ready scope where needed</Text>
              </li>
              <li>
                <Text size="2">Kickoff: pilot, field tests and phased delivery with clear handovers</Text>
              </li>
            </ol>
          </Box>
          <Box mt="6" mb="8">
            <Heading as="h3" size="5">Contact & procurement notes</Heading>
            <Text size="2" style={{ marginTop: 12 }}>
              For government procurement we produce procurement-friendly documentation (DPRs,
              tender-ready scopes and bill of quantities). Use the estimator link above or
              reach out to the contact in the footer for specific procurement questions.
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
