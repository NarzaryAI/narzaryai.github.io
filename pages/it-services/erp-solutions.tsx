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

export default function ERPSolutionsPage() {
  return (
    <MobileMenuProvider>
      <PrimitivesMobileMenu />

      <TitleAndMetaTags
        title="ERP Solutions | Narzary Engineering & Consultancy Pvt. Ltd."
        description="ERP & management information systems for contractors and agencies — procurement-ready modules for finance, HR, procurement, inventory and project management."
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
              ERP & Management Systems
            </Heading>
            <Text size="3" style={{ marginBottom: 24 }}>
              We design and deliver ERP modules and management information systems tailored
              for contractors, agencies and local governments — covering procurement,
              finance, HR, inventory and project tracking with reporting that fits
              procurement and audit processes.
            </Text>
            <Text size="2">
              <NextLink href="/consultancy/estimation-and-costing" passHref legacyBehavior>
                <Link color="gray">Request an ERP estimate</Link>
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
            <Heading as="h3" size="5">ERP scope examples</Heading>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>
                <Text size="2">Procurement & vendor management modules for transparent workflows</Text>
              </li>
              <li>
                <Text size="2">Finance: accounts, budgets, payments and audit trails</Text>
              </li>
              <li>
                <Text size="2">Project & site tracking with integration to field data and GIS</Text>
              </li>
              <li>
                <Text size="2">Inventory, materials and asset management</Text>
              </li>
              <li>
                <Text size="2">HR and payroll modules with role-based access control</Text>
              </li>
            </ul>
          </Box>
          <Box mt="6">
            <Heading as="h3" size="5">Delivery approach</Heading>
            <ol style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>
                <Text size="2">Domain analysis and mapping to standard modules</Text>
              </li>
              <li>
                <Text size="2">Configuration or customisation of modules with stakeholder reviews</Text>
              </li>
              <li>
                <Text size="2">Pilot deployments and training for users and administrators</Text>
              </li>
              <li>
                <Text size="2">Operational handover and optional managed hosting & support</Text>
              </li>
            </ol>
          </Box>
          <Box mt="6" mb="8">
            <Heading as="h3" size="5">Integrations & reporting</Heading>
            <Text size="2" style={{ marginTop: 12 }}>
              Our ERP solutions prioritise integrations with field-data systems, GIS and
              accounting tools. Reporting is configurable to satisfy procurement and audit
              requirements — exports, dashboards and scheduled reports are included.
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
