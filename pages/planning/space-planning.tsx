import * as React from "react";
import { Container, Section, Box, Separator, Heading, Text } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { ColorsHeader } from "@components/ColorsHeader";
import { ColorsMobileMenu } from "@components/ColorsMobileMenu";
import Head from "next/head";
import { SerifHeading } from "@components/SerifHeading";

export default function SpacePlanningPage() {
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
        title="Space Planning | Narzary Engineering & Consultancy Pvt. Ltd."
        description="Space planning services for residential, commercial, and institutional projects. Layout, optimization, and functional design."
        image="seekgpt.png"
      />
      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
          <SerifHeading mb="3" style={{ maxWidth: 720 }}>
            Space Planning
          </SerifHeading>

          <Box style={{ maxWidth: 800 }}>
            <Text size="5" as="p" mb="6" color="gray">
              Narzary Engineering & Consultancy provides space planning services for residential, commercial, and institutional projects. We optimize layouts for functionality, aesthetics, and efficient use of space, ensuring every area serves its intended purpose.
            </Text>
          </Box>

          <Heading as="h3" size="5" mb="2">Our Services</Heading>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Space analysis and requirements gathering</Text></li>
            <li><Text size="2">Layout optimization and functional design</Text></li>
            <li><Text size="2">Furniture and fixture planning</Text></li>
            <li><Text size="2">Integration with interior and exterior design</Text></li>
            <li><Text size="2">Project management and site coordination</Text></li>
          </ul>

          <Heading as="h3" size="5" mt="6" mb="2">Process</Heading>
          <ol style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Consultation and requirements gathering</Text></li>
            <li><Text size="2">Space analysis and concept design</Text></li>
            <li><Text size="2">Detailed layout and documentation</Text></li>
            <li><Text size="2">Site supervision and implementation</Text></li>
            <li><Text size="2">Project handover and post-occupancy support</Text></li>
          </ol>

          <Heading as="h3" size="5" mt="6" mb="2">Benefits</Heading>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Optimized use of available space</Text></li>
            <li><Text size="2">Functional and aesthetic layouts</Text></li>
            <li><Text size="2">Efficient project management and delivery</Text></li>
            <li><Text size="2">Expert support from concept to completion</Text></li>
            <li><Text size="2">Confidentiality and data security</Text></li>
          </ul>

          <Box mt="6">
            <Text size="4" as="p" color="bronze" weight="bold">
              Need space planning for your project? Email <a href="mailto:planning@narzary.com">planning@narzary.com</a> or visit our Planning & Design page for more details.
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