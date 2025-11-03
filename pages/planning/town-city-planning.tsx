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

export default function TownCityPlanningPage() {
  return (
    <MobileMenuProvider>
      <PrimitivesMobileMenu />

      <TitleAndMetaTags
        title="Town & City Planning | Narzary Engineering & Consultancy Pvt. Ltd."
        description="Urban and town planning services: master plans, zoning, infrastructure, and sustainable development."
        image="seekgpt.png"
      />

      <Box style={{ height: 0 }}>
        <PrimitivesHeader ghost />
      </Box>

      <FancyBackground>
        <Section size={{ initial: "2", md: "4" }}>
          <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
            <SerifHeading mb="3" style={{ maxWidth: 720 }}>
              Town & City Planning
            </SerifHeading>

            <Box style={{ maxWidth: 800 }}>
              <Text size="5" as="p" mb="6" color="gray">
                Narzary Engineering & Consultancy provides town and city planning services, including master plans, zoning, infrastructure layout, and sustainable development strategies. We help municipalities, developers, and communities create livable, resilient, and well-organized urban environments.
              </Text>
            </Box>

            <Heading as="h3" size="5" mb="2">Our Services</Heading>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li><Text size="2">Master planning and land use studies</Text></li>
              <li><Text size="2">Zoning, layout, and infrastructure planning</Text></li>
              <li><Text size="2">Sustainable development and green spaces</Text></li>
              <li><Text size="2">Community engagement and stakeholder consultation</Text></li>
              <li><Text size="2">Regulatory compliance and approvals</Text></li>
            </ul>

            <Heading as="h3" size="5" mt="6" mb="2">Process</Heading>
            <ol style={{ marginTop: 12, paddingLeft: 20 }}>
              <li><Text size="2">Site analysis and data collection</Text></li>
              <li><Text size="2">Concept development and stakeholder review</Text></li>
              <li><Text size="2">Drafting master plans and layouts</Text></li>
              <li><Text size="2">Regulatory submissions and approvals</Text></li>
              <li><Text size="2">Implementation and monitoring</Text></li>
            </ol>

            <Heading as="h3" size="5" mt="6" mb="2">Benefits</Heading>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li><Text size="2">Livable and resilient urban environments</Text></li>
              <li><Text size="2">Efficient land use and infrastructure</Text></li>
              <li><Text size="2">Sustainable growth and green spaces</Text></li>
              <li><Text size="2">Community-focused planning</Text></li>
              <li><Text size="2">Expert guidance from concept to implementation</Text></li>
            </ul>

            <Box mt="6">
              <Text size="4" as="p" color="bronze" weight="bold">
                Need town or city planning support? Email <a href="mailto:planning@narzary.com">planning@narzary.com</a> or visit our Planning & Design page for more details.
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
