import * as React from "react";
import { Container, Section, Box, Separator, Heading, Text } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { ColorsHeader } from "@components/ColorsHeader";
import { ColorsMobileMenu } from "@components/ColorsMobileMenu";
import Head from "next/head";
import { SerifHeading } from "@components/SerifHeading";

export default function WorkshopsBootcampsPage() {
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
        title="Workshops & Bootcamps | Narzary Engineering & Consultancy Pvt. Ltd."
        description="Hands-on workshops and bootcamps in civil engineering, IT, and related fields."
        image="narzary.png"
      />
      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
          <SerifHeading mb="3" style={{ maxWidth: 720 }}>
            Workshops & Bootcamps
          </SerifHeading>

          <Box style={{ maxWidth: 800 }}>
            <Text size="5" as="p" mb="6" color="gray">
              Narzary Engineering & Consultancy organizes hands-on workshops and bootcamps for students and professionals in civil engineering, information technology, and related domains. These programs are designed to build practical skills, foster innovation, and connect participants with industry experts.
            </Text>
          </Box>

          <Heading as="h3" size="5" mb="2">Topics & Areas</Heading>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">AutoCAD, ArchSoft, STAAD, Revit, and civil engineering software</Text></li>
            <li><Text size="2">Project management and planning</Text></li>
            <li><Text size="2">Software development, Artificial Intelligence, Machine Learning, IoT, Cybersecurity</Text></li>
            <li><Text size="2">GIS & Surveying</Text></li>
            <li><Text size="2">Design and architecture (interior/exterior, space planning)</Text></li>
            <li><Text size="2">Entrepreneurship and business skills</Text></li>
          </ul>

          <Heading as="h3" size="5" mt="6" mb="2">How It Works</Heading>
          <ol style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Select your workshop or bootcamp</Text></li>
            <li><Text size="2">Register online or contact our team</Text></li>
            <li><Text size="2">Attend sessions (online or in-person)</Text></li>
            <li><Text size="2">Participate in hands-on activities and projects</Text></li>
            <li><Text size="2">Receive certificate of participation</Text></li>
          </ol>

          <Heading as="h3" size="5" mt="6" mb="2">Benefits</Heading>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Practical, industry-relevant skills</Text></li>
            <li><Text size="2">Mentorship from experts</Text></li>
            <li><Text size="2">Networking and career opportunities</Text></li>
            <li><Text size="2">Certificate of participation</Text></li>
            <li><Text size="2">Access to resources and materials</Text></li>
          </ul>

          <Box mt="6">
            <Text size="4" as="p" color="bronze" weight="bold">
              Interested in upcoming workshops or bootcamps? Email <a href="mailto:workshops@narzary.com">workshops@narzary.com</a> or visit our Careers page for schedules and registration.
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