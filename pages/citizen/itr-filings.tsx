import * as React from "react";
import { Container, Section, Box, Separator, Heading, Text } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { SerifHeading } from "@components/SerifHeading";
import { PrimitivesMobileMenu } from "@components/PrimitivesMobileMenu";
import { PrimitivesHeader } from "@components/PrimitivesHeader";
import { FancyBackground } from "@components/marketing/FancyBackground";

export default function ITRFilingsPage() {
  return (
    <MobileMenuProvider>
      <PrimitivesMobileMenu />
      <TitleAndMetaTags
        title="ITR Filings | Narzary Engineering & Consultancy Pvt. Ltd."
        description="Income Tax Return (ITR) filing services for individuals, professionals, and businesses."
        image="seekgpt.png"
      />
      <Box style={{ height: 0 }}>
        <PrimitivesHeader ghost />
      </Box>

      <FancyBackground>
        <Section size={{ initial: "2", md: "4" }}>
          <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
            <SerifHeading mb="3" style={{ maxWidth: 720 }}>
              ITR Filings
            </SerifHeading>

            <Box style={{ maxWidth: 800 }}>
              <Text size="5" as="p" mb="6" color="gray">
                Narzary Engineering & Consultancy offers hassle-free Income Tax Return (ITR) filing services for individuals, professionals, and businesses. Our team ensures accurate filing, compliance with regulations, and timely submission to help you avoid penalties and maximize your eligible refunds.
              </Text>
            </Box>

            <Heading as="h3" size="5" mb="2">ITR Filing Services</Heading>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li><Text size="2">Preparation and filing of ITR for salaried individuals, professionals, and businesses</Text></li>
              <li><Text size="2">Document verification and tax computation</Text></li>
              <li><Text size="2">E-filing and submission to Income Tax Department</Text></li>
              <li><Text size="2">Support for tax refunds and rectifications</Text></li>
              <li><Text size="2">Guidance on deductions and exemptions</Text></li>
            </ul>

            <Heading as="h3" size="5" mt="6" mb="2">Process</Heading>
            <ol style={{ marginTop: 12, paddingLeft: 20 }}>
              <li><Text size="2">Share your documents and details with our team</Text></li>
              <li><Text size="2">We verify, compute, and prepare your ITR</Text></li>
              <li><Text size="2">E-file and submit your return</Text></li>
              <li><Text size="2">Receive confirmation and support for refunds or queries</Text></li>
            </ol>

            <Heading as="h3" size="5" mt="6" mb="2">Benefits</Heading>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li><Text size="2">Accurate and timely filing</Text></li>
              <li><Text size="2">Compliance with latest tax regulations</Text></li>
              <li><Text size="2">Maximize eligible refunds and deductions</Text></li>
              <li><Text size="2">Expert support and guidance</Text></li>
              <li><Text size="2">Confidentiality and data security</Text></li>
            </ul>

            <Box mt="6">
              <Text size="4" as="p" color="bronze" weight="bold">
                Need help with ITR filing? Email <a href="mailto:sales@narzary.com">sales@narzary.com</a> or visit our Citizen Services page for more details.
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