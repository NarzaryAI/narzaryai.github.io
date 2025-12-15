import * as React from "react";
import { Container, Section, Box, Separator, Heading, Text } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { ColorsHeader } from "@components/ColorsHeader";
import { ColorsMobileMenu } from "@components/ColorsMobileMenu";
import Head from "next/head";
import { SerifHeading } from "@components/SerifHeading";

export default function SkillDevelopmentPage() {
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
        title="Skill Development | Narzary Engineering & Consultancy Pvt. Ltd."
        description="Skill development programs for citizens: technical, vocational, and professional growth."
        image="narzary.png"
      />
      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
          <SerifHeading mb="3" style={{ maxWidth: 720 }}>
            Skill Development
          </SerifHeading>

          <Box style={{ maxWidth: 800 }}>
            <Text size="5" as="p" mb="6" color="gray">
              Narzary Engineering & Consultancy empowers citizens through skill development initiatives, focusing on technical, vocational, and professional growth. Our programs are designed to enhance employability, entrepreneurship, and lifelong learning for individuals from all backgrounds.
            </Text>
          </Box>

          <Heading as="h3" size="5" mb="2">Skill Development Areas</Heading>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Technical skills: IT, civil engineering, electronics</Text></li>
            <li><Text size="2">Vocational skills: tailoring, carpentry, plumbing, electrical</Text></li>
            <li><Text size="2">Professional skills: project management, business communication</Text></li>
            <li><Text size="2">Digital literacy and online tools</Text></li>
            <li><Text size="2">Entrepreneurship and startup support</Text></li>
          </ul>

          <Heading as="h3" size="5" mt="6" mb="2">Process</Heading>
          <ol style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Registration and assessment</Text></li>
            <li><Text size="2">Skill training sessions (online/offline)</Text></li>
            <li><Text size="2">Practical assignments and projects</Text></li>
            <li><Text size="2">Certification and placement assistance</Text></li>
          </ol>

          <Heading as="h3" size="5" mt="6" mb="2">Benefits</Heading>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Enhanced employability and career growth</Text></li>
            <li><Text size="2">Industry-recognized certifications</Text></li>
            <li><Text size="2">Entrepreneurship and self-employment opportunities</Text></li>
            <li><Text size="2">Access to expert trainers and mentors</Text></li>
          </ul>

          <Box mt="6">
            <Text size="4" as="p" color="bronze" weight="bold">
              Interested in skill development programs? Email <a href="mailto:necpl25@gmail.com">necpl25@gmail.com</a> or visit our Citizen Services page for details.
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