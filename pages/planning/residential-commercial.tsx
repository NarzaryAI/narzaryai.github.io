import * as React from "react";
import { Container, Section, Box, Separator, Heading, Text } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { SerifHeading } from "@components/SerifHeading";
import { PrimitivesMobileMenu } from "@components/PrimitivesMobileMenu";
import { PrimitivesHeader } from "@components/PrimitivesHeader";
import { FancyBackground } from "@components/marketing/FancyBackground";

export default function ResidentialCommercialPage() {
  return (
    <MobileMenuProvider>
      <PrimitivesMobileMenu />
      <TitleAndMetaTags
        title="Residential & Commercial Planning | Narzary Engineering & Consultancy Pvt. Ltd."
        description="Planning and design services for residential and commercial buildings: concept, drawings, approvals, and project management."
        image="narzary.png"
      />
      <Box style={{ height: 0 }}>
        <PrimitivesHeader ghost />
      </Box>

      <FancyBackground>
        <Section size={{ initial: "2", md: "4" }}>
          <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
            <SerifHeading mb="3" style={{ maxWidth: 720 }}>
              Residential & Commercial Planning
            </SerifHeading>

            <Box style={{ maxWidth: 800 }}>
              <Text size="5" as="p" mb="6" color="gray">
                Narzary Engineering & Consultancy provides planning and design services for residential and commercial buildings. We deliver concept development, detailed drawings, regulatory approvals, and project management for new constructions and renovations.
              </Text>
            </Box>

            <Heading as="h3" size="5" mb="2">Our Services</Heading>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li><Text size="2">Concept development and feasibility studies</Text></li>
              <li><Text size="2">Architectural drawings and 3D visualizations</Text></li>
              <li><Text size="2">Regulatory approvals and compliance documentation</Text></li>
              <li><Text size="2">Project management and site coordination</Text></li>
              <li><Text size="2">Renovation and retrofit design</Text></li>
            </ul>

            <Heading as="h3" size="5" mt="6" mb="2">Process</Heading>
            <ol style={{ marginTop: 12, paddingLeft: 20 }}>
              <li><Text size="2">Consultation and requirements gathering</Text></li>
              <li><Text size="2">Concept design and client review</Text></li>
              <li><Text size="2">Detailed drawings and documentation</Text></li>
              <li><Text size="2">Approvals, tendering, and site supervision</Text></li>
              <li><Text size="2">Project handover and post-occupancy support</Text></li>
            </ol>

            <Heading as="h3" size="5" mt="6" mb="2">Benefits</Heading>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li><Text size="2">Tailored designs for residential and commercial needs</Text></li>
              <li><Text size="2">Compliance with local regulations</Text></li>
              <li><Text size="2">Efficient project management and delivery</Text></li>
              <li><Text size="2">Expert support from concept to completion</Text></li>
              <li><Text size="2">Confidentiality and data security</Text></li>
            </ul>

            <Box mt="6">
              <Text size="4" as="p" color="bronze" weight="bold">
                Need planning or design for your building? Email <a href="mailto:necpl25@gmail.com">necpl25@gmail.com</a> or visit our Planning & Design page for more details.
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
      </FancyBackground>
    </MobileMenuProvider>
  );
}