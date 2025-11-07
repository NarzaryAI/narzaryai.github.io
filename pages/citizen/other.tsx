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

export default function OtherCitizenServicesPage() {
  return (
    <MobileMenuProvider>
      <PrimitivesMobileMenu />

      <TitleAndMetaTags
        title="Other Citizen Services | Narzary Engineering & Consultancy Pvt. Ltd."
        description="Support for miscellaneous citizen services: custom requests, documentation, government-related assistance, and more."
        image="narzary.png"
      />

      <Box style={{ height: 0 }}>
        <PrimitivesHeader ghost />
      </Box>

      <FancyBackground>
        <Section size={{ initial: "2", md: "4" }}>
          <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
            <SerifHeading mb="3" style={{ maxWidth: 720 }}>
              Other Citizen Services
            </SerifHeading>

            <Box style={{ maxWidth: 800 }}>
              <Text size="5" as="p" mb="6" color="gray">
                Narzary Engineering & Consultancy provides support for a wide range of citizen services beyond our core offerings. If you have a custom request, need help with documentation, or require assistance with government-related processes, our team is here to help you navigate and resolve your needs efficiently.
              </Text>
            </Box>
            <Box mb="6">
              <Text size="3" color="bronze" weight="bold">
                For any other citizen service requests, email <a href="mailto:citizen@narzary.com">citizen@narzary.com</a> or contact us through our Citizen Services page.
              </Text>
            </Box>
          </Container>
        </Section>
      </FancyBackground>

      <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
        <Separator size="2" />
      </Container>

      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
          <Box mt="6">
            <Heading as="h3" size="5">Examples of Other Services</Heading>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>
                <Text size="2">Custom documentation and affidavits</Text>
              </li>
              <li>
                <Text size="2">Support for government applications and certificates</Text>
              </li>
              <li>
                <Text size="2">Assistance with local authority processes</Text>
              </li>
              <li>
                <Text size="2">Help with online portals and e-governance</Text>
              </li>
              <li>
                <Text size="2">General queries and citizen support</Text>
              </li>
            </ul>
          </Box>
          <Box mt="6">
            <Heading as="h3" size="5">How We Help</Heading>
            <ol style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>
                <Text size="2">Consultation to understand your needs</Text>
              </li>
              <li>
                <Text size="2">Guidance on documentation and process</Text>
              </li>
                <li>
                <Text size="2">Assistance with application and submission</Text>
              </li>
              <li>
                <Text size="2">Follow-up and resolution support</Text>
              </li>
            </ol>
          </Box>
          <Box mt="6" mb="8">
            <Heading as="h3" size="5">Why Choose Us?</Heading>
            <Text size="2" style={{ marginTop: 12 }}>
              We offer personalized, confidential, and reliable support for all types of citizen service requests. Our team is experienced in handling diverse requirements and ensures smooth, hassle-free service delivery.
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
