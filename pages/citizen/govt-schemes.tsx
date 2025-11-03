import * as React from "react";
import { Container, Section, Box, Separator, Heading, Text } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { ColorsHeader } from "@components/ColorsHeader";
import Head from "next/head";
import { ColorsMobileMenu } from "@components/ColorsMobileMenu";
import { SerifHeading } from "@components/SerifHeading";

export default function GovtSchemesPage() {
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
        title="Government Schemes | Narzary Engineering & Consultancy Pvt. Ltd."
        description="Support and guidance for citizens to access government schemes and benefits."
        image="seekgpt.png"
      />
      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
          <SerifHeading mb="3" style={{ maxWidth: 720 }}>
            Government Schemes
          </SerifHeading>

          <Box style={{ maxWidth: 800 }}>
            <Text size="5" as="p" mb="6" color="gray">
              Narzary Engineering & Consultancy helps citizens access and benefit from various government schemes, including subsidies, financial assistance, welfare programs, and skill development initiatives. Our team provides guidance on eligibility, documentation, and application processes to ensure you receive the support you deserve.
            </Text>
          </Box>

          <Heading as="h3" size="5" mb="2">Popular Schemes Supported</Heading>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Subsidies for housing, agriculture, and small businesses</Text></li>
            <li><Text size="2">Financial assistance for education and healthcare</Text></li>
            <li><Text size="2">Welfare programs for women, children, and senior citizens</Text></li>
            <li><Text size="2">Skill development and training initiatives</Text></li>
            <li><Text size="2">Employment generation and entrepreneurship schemes</Text></li>
          </ul>

          <Heading as="h3" size="5" mt="6" mb="2">How We Help</Heading>
          <ol style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Consult with our team to identify suitable schemes</Text></li>
            <li><Text size="2">Get guidance on eligibility and required documents</Text></li>
            <li><Text size="2">Assistance with application and submission</Text></li>
            <li><Text size="2">Follow up for approval and disbursement</Text></li>
          </ol>

          <Heading as="h3" size="5" mt="6" mb="2">Benefits</Heading>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Access to government benefits and subsidies</Text></li>
            <li><Text size="2">Expert guidance and support</Text></li>
            <li><Text size="2">Simplified application process</Text></li>
            <li><Text size="2">Confidentiality and compliance</Text></li>
          </ul>

          <Box mt="6">
            <Text size="4" as="p" color="bronze" weight="bold">
              Need help with government schemes? Email <a href="mailto:schemes@narzary.com">schemes@narzary.com</a> or visit our Citizen Services page for more details.
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