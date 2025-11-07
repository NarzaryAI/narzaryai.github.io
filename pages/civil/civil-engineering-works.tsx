import * as React from "react";
import NextLink from "next/link";
import { Container, Section, Box, Separator, Heading, Text, Link } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { BenefitsSection } from "@components/marketing/BenefitsSection";
import { StatsSection } from "@components/marketing/StatsSection";
import { FancyBackground } from "@components/marketing/FancyBackground";
import { PrimitivesHeader } from "@components/PrimitivesHeader";
import { PrimitivesMobileMenu } from "@components/PrimitivesMobileMenu";
import { SerifHeading } from "@components/SerifHeading";

export default function CivilEngineeringWorksPage() {
  return (
    <MobileMenuProvider>
      <PrimitivesMobileMenu />

      <TitleAndMetaTags
        title="Civil Engineering Works | Narzary Engineering & Consultancy Pvt. Ltd."
        description="Civil engineering services — estimation, DPR-ready designs, construction supervision, roads, bridges, buildings, and infrastructure projects with procurement-friendly deliverables."
        image="narzary.png"
      />

      <Box style={{ height: 0 }}>
        <PrimitivesHeader ghost />
      </Box>

      <FancyBackground>
        {/* lightweight hero layout */}
        <Section size={{ initial: "2", md: "4" }}>
          <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
            <SerifHeading mb="3" style={{ maxWidth: 720 }}>
              Civil Engineering Works
            </SerifHeading>

            <Box style={{ maxWidth: 800 }}>
              <Text size="5" as="p" mb="6" color="gray">
                End-to-end civil engineering services: estimation & costing, DPR
                preparation, detailed design, construction supervision and maintenance for
                roads, bridges, buildings and infrastructure projects.
              </Text>
            </Box>
            <Box mb="6">
              <NextLink href="/consultancy/estimation-and-costing" passHref legacyBehavior>
                <Link color="gray">Request an estimate</Link>
              </NextLink>
            </Box>
          </Container>
        </Section>
      </FancyBackground>

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
            <Heading as="h3" size="5">Our civil services</Heading>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>
                <Text size="2">Estimation & Costing, tender-ready BOQs and budget projections</Text>
              </li>
              <li>
                <Text size="2">DPR and detailed design for roads, bridges and buildings</Text>
              </li>
              <li>
                <Text size="2">Construction supervision, quality assurance and contract management</Text>
              </li>
              <li>
                <Text size="2">Infrastructure planning: drainage, water supply, site development</Text>
              </li>
              <li>
                <Text size="2">Post-construction handover, maintenance guidance and lifecycle planning</Text>
              </li>
            </ul>
          </Box>
          <Box mt="6">
            <Heading as="h3" size="5">How we deliver</Heading>
            <ol style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>
                <Text size="2">Site assessment, topo/GIS survey and stakeholder consultation</Text>
              </li>
              <li>
                <Text size="2">DPR / tender documentation and approvals support</Text>
              </li>
              <li>
                <Text size="2">Detailed design, BOQ preparation and procurement support</Text>
              </li>
              <li>
                <Text size="2">Construction supervision, reporting and quality checks</Text>
              </li>
              <li>
                <Text size="2">Operational handover and maintenance schedules</Text>
              </li>
            </ol>
          </Box>
          <Box mt="6" mb="8">
            <Heading as="h3" size="5">Projects & compliance</Heading>
            <Text size="2" style={{ marginTop: 12 }}>
              We prepare procurement-friendly documentation aligned with government
              requirements, perform vendor evaluation and periodic compliance checks during
              construction. Our reporting includes GIS-enabled progress maps and QC records.
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
