import * as React from "react";
import { Container, Section, Box, Separator, Heading, Text } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";

export default function BuildingsHousesPage() {
  return (
    <MobileMenuProvider>
      <TitleAndMetaTags
        title="Buildings / Houses | Narzary Engineering & Consultancy Pvt. Ltd."
        description="Residential, commercial, and institutional building design and construction."
        image="seekgpt.png"
      />
      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
          <Heading as="h1" size="6" mb="4">Buildings / Houses</Heading>
          <Text size="4" as="p" mb="6" color="gray">
            We design and construct residential, commercial, and institutional buildings. Our services include architectural design, structural engineering, interior works, and project management from concept to handover.
          </Text>
          <Heading as="h3" size="5" mb="2">Building services</Heading>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Architectural and structural design</Text></li>
            <li><Text size="2">Residential, commercial, and institutional construction</Text></li>
            <li><Text size="2">Interior design and finishing</Text></li>
            <li><Text size="2">Project management and supervision</Text></li>
            <li><Text size="2">Renovation and retrofitting</Text></li>
          </ul>
          <Heading as="h3" size="5" mt="6" mb="2">Process</Heading>
          <ol style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Concept and design development</Text></li>
            <li><Text size="2">Approvals and budgeting</Text></li>
            <li><Text size="2">Construction and supervision</Text></li>
            <li><Text size="2">Finishing and handover</Text></li>
          </ol>
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