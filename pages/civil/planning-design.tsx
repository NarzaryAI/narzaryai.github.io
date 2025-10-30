import * as React from "react";
import { Container, Section, Box, Separator, Heading, Text } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { ColorsHeader } from "@components/ColorsHeader";
import { ColorsMobileMenu } from "@components/ColorsMobileMenu";
import Head from "next/head";

export default function PlanningDesignPage() {
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
        title="Planning & Design | Narzary Engineering & Consultancy Pvt. Ltd."
        description="Urban, site, and infrastructure planning; architectural and engineering design."
        image="seekgpt.png"
      />
      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
          <Heading as="h1" size="6" mb="4">Planning & Design</Heading>
          <Text size="4" as="p" mb="6" color="gray">
            We offer planning and design services for urban, site, and infrastructure projects. Our team provides architectural, engineering, and master planning solutions tailored to client needs and regulatory requirements.
          </Text>
          <Heading as="h3" size="5" mb="2">Planning & design services</Heading>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Urban and site master planning</Text></li>
            <li><Text size="2">Architectural and engineering design</Text></li>
            <li><Text size="2">Infrastructure layout and utilities</Text></li>
            <li><Text size="2">Regulatory approvals and compliance</Text></li>
            <li><Text size="2">Project management and coordination</Text></li>
          </ul>
          <Heading as="h3" size="5" mt="6" mb="2">Process</Heading>
          <ol style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Needs assessment and concept development</Text></li>
            <li><Text size="2">Design and stakeholder review</Text></li>
            <li><Text size="2">Approvals and documentation</Text></li>
            <li><Text size="2">Implementation and monitoring</Text></li>
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