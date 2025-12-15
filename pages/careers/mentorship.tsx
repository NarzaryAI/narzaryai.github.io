import * as React from "react";
import { Container, Section, Box, Separator, Heading, Text } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { ColorsHeader } from "@components/ColorsHeader";
import Head from "next/head";
import { ColorsMobileMenu } from "@components/ColorsMobileMenu";
import { SerifHeading } from "@components/SerifHeading";

export default function MentorshipPage() {
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
        title="Mentorship | Narzary Engineering & Consultancy Pvt. Ltd."
        description="Mentorship programs for students and professionals in civil engineering, IT, and related fields."
        image="narzary.png"
      />
      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
          <SerifHeading mb="3" style={{ maxWidth: 720 }}>
            Mentorship
          </SerifHeading>

          <Box style={{ maxWidth: 800 }}>
            <Text size="5" as="p" mb="6" color="gray">
              Narzary Engineering & Consultancy offers mentorship programs for students and professionals in civil engineering, information technology, and related fields. Our mentors provide guidance, career advice, and technical expertise to help you grow and succeed in your chosen domain.
            </Text>
          </Box>

          <Heading as="h3" size="5" mb="2">Mentorship Areas</Heading>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Civil engineering and construction</Text></li>
            <li><Text size="2">Information technology, software development, AI, ML, IoT, cybersecurity</Text></li>
            <li><Text size="2">Project planning, management, and design</Text></li>
            <li><Text size="2">GIS, surveying, and mapping</Text></li>
            <li><Text size="2">Business development and entrepreneurship</Text></li>
          </ul>

          <Heading as="h3" size="5" mt="6" mb="2">How It Works</Heading>
          <ol style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Apply for mentorship (online or by email)</Text></li>
            <li><Text size="2">Get matched with a mentor based on your interests</Text></li>
            <li><Text size="2">Participate in regular sessions (online or in-person)</Text></li>
            <li><Text size="2">Receive guidance, feedback, and career advice</Text></li>
            <li><Text size="2">Access resources and networking opportunities</Text></li>
          </ol>

          <Heading as="h3" size="5" mt="6" mb="2">Benefits</Heading>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Personalized guidance and support</Text></li>
            <li><Text size="2">Career development and skill building</Text></li>
            <li><Text size="2">Networking with industry professionals</Text></li>
            <li><Text size="2">Access to resources and opportunities</Text></li>
            <li><Text size="2">Confidence and motivation to succeed</Text></li>
          </ul>

          <Box mt="6">
            <Text size="4" as="p" color="bronze" weight="bold">
              Interested in mentorship? Email <a href="mailto:necpl25@gmail.com">necpl25@gmail.com</a> or visit our Careers page to apply and learn more.
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