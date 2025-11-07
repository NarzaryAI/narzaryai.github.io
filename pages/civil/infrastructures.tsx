import * as React from "react";
import { Container, Section, Box, Separator, Heading, Text } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { ColorsHeader } from "@components/ColorsHeader";
import { ColorsMobileMenu } from "@components/ColorsMobileMenu";
import Head from "next/head";
import { SerifHeading } from "@components/SerifHeading";

export default function InfrastructuresPage() {
  return (
    <MobileMenuProvider>
      <ColorsMobileMenu />

      <Head>
        <style>
          {`
            :is(.dark, .dark-theme) :is(body, .radix-themes) {
              --color-background: #0b0b0b;
              --color-panel-solid: var(--gray-1);
            }
          `}
        </style>
      </Head>

      <Box
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: 480,
          opacity: 0.6,
          background:
            "linear-gradient(to bottom, var(--crimson-4), var(--amber-2), transparent)",
        }}
      />

      <ColorsHeader ghost />
      <TitleAndMetaTags
        title="Infrastructures | Narzary Engineering & Consultancy Pvt. Ltd."
        description="Planning, design, and delivery of infrastructure projects: water, drainage, roads, utilities."
        image="narzary.png"
      />
      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
          <SerifHeading mb="3" style={{ maxWidth: 720 }}>
            Infrastructures
          </SerifHeading>

          <Box style={{ maxWidth: 800 }}>
            <Text size="5" as="p" mb="6" color="gray">
              We provide end-to-end infrastructure solutions: water supply, drainage, roads, utilities, and site development. Our team handles planning, design, execution, and compliance for public and private sector projects.
            </Text>
          </Box>

          <Heading as="h3" size="5" mb="2">Infrastructure services</Heading>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Water supply and drainage systems</Text></li>
            <li><Text size="2">Roads, highways, and site development</Text></li>
            <li><Text size="2">Utility planning: power, telecom, gas</Text></li>
            <li><Text size="2">Stormwater management and flood control</Text></li>
            <li><Text size="2">Environmental and regulatory compliance</Text></li>
          </ul>
          <Heading as="h3" size="5" mt="6" mb="2">Process</Heading>
          <ol style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Needs assessment and feasibility</Text></li>
            <li><Text size="2">Design and approvals</Text></li>
            <li><Text size="2">Construction and supervision</Text></li>
            <li><Text size="2">Testing, commissioning, and handover</Text></li>
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