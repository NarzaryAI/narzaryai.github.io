import * as React from "react";
import { Container, Section, Box, Separator, Heading, Text } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { ColorsHeader } from "@components/ColorsHeader";
import { ColorsMobileMenu } from "@components/ColorsMobileMenu";
import Head from "next/head";
import { SerifHeading } from "@components/SerifHeading";

export default function CertificationsPage() {
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
        title="Certifications | Narzary Engineering & Consultancy Pvt. Ltd."
        description="Professional certification programs in civil engineering, IT, and related fields."
        image="narzary.png"
      />
      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
          <SerifHeading mb="3" style={{ maxWidth: 720 }}>
            Certifications
          </SerifHeading>

          <Box style={{ maxWidth: 800 }}>
            <Text size="5" as="p" mb="6" color="gray">
              Narzary Engineering & Consultancy offers professional certification programs for students and working professionals in civil engineering, information technology, and related fields. Our certifications validate your skills and knowledge, helping you advance your career and stand out in the industry.
            </Text>
          </Box>

          <Heading as="h3" size="5" mb="2">Certification Areas</Heading>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">AutoCAD, ArchSoft, STAAD, Revit, and other civil engineering software</Text></li>
            <li><Text size="2">Project management and planning</Text></li>
            <li><Text size="2">Information Technology: Software Development, Artificial Intelligence, Machine Learning, IoT, Cybersecurity</Text></li>
            <li><Text size="2">GIS & Surveying</Text></li>
            <li><Text size="2">Design and architecture (interior/exterior, space planning)</Text></li>
          </ul>

          <Heading as="h3" size="5" mt="6" mb="2">How to Get Certified</Heading>
          <ol style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Choose your certification area</Text></li>
            <li><Text size="2">Register online or contact our team</Text></li>
            <li><Text size="2">Complete training (online or in-person)</Text></li>
            <li><Text size="2">Pass the assessment/exam</Text></li>
            <li><Text size="2">Receive your certificate and digital badge</Text></li>
          </ol>

          <Heading as="h3" size="5" mt="6" mb="2">Benefits</Heading>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Industry-recognized credentials</Text></li>
            <li><Text size="2">Skill validation and career advancement</Text></li>
            <li><Text size="2">Access to training and resources</Text></li>
            <li><Text size="2">Networking with professionals</Text></li>
            <li><Text size="2">Digital certificate and badge</Text></li>
          </ul>

          <Box mt="6">
            <Text size="4" as="p" color="bronze" weight="bold">
              Interested in certification? Email <a href="mailto:certifications@narzary.com">certifications@narzary.com</a> or visit our Careers page for details and registration.
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