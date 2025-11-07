import * as React from "react";
import NextLink from "next/link";
import {
  Box,
  Text,
  Grid,
  Heading,
  Container,
  Section,
  Separator,
  Flex,
  Button,
} from "@radix-ui/themes";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { Footer } from "@components/Footer";
import { ColorsHeader } from "@components/ColorsHeader";
import { MobileMenuProvider } from "@components/MobileMenu";
import { ColorsMobileMenu } from "@components/ColorsMobileMenu";
import { SerifHeading } from "@components/SerifHeading";
import {
  DesktopIcon,
  InputIcon,
  TransparencyGridIcon,
  Half2Icon,
} from "@radix-ui/react-icons";
import Head from "next/head";

export default function ITServices() {
  return (
    <MobileMenuProvider>
      <ColorsMobileMenu />

      <Head>
        <style>{`:is(.dark, .dark-theme) :is(body, .radix-themes) { --color-background: #0b0b0b; --color-panel-solid: var(--gray-1); }`}</style>
      </Head>

      <Box
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: 420,
          opacity: 0.6,
          background: "linear-gradient(to bottom, var(--crimson-4), var(--amber-2), transparent)",
        }}
      />

      <ColorsHeader ghost />

      <Box mx={{ initial: "5", xs: "6", sm: "7", md: "9" }} position="relative">
        <TitleAndMetaTags
          title="IT Related Services | Narzary Engineering & Consultancy Pvt. Ltd."
          description="IT-related services from Narzary Engineering & Consultancy: software development, system integration, cloud & DevOps, GIS, cybersecurity, and ongoing maintenance."
          image="narzary.png"
        />

        <Section size={{ initial: "2", md: "4" }}>
          <Container>
            <SerifHeading mb="3" style={{ maxWidth: 720 }}>
              IT Related Services
            </SerifHeading>

            <Box style={{ maxWidth: 820 }}>
              <Text size="5" as="p" mb="6" color="gray">
                We provide end-to-end IT services to support engineering and
                infrastructure projects: bespoke software, systems integration,
                cloud architecture, GIS mapping, cybersecurity and long-term
                application maintenance.
              </Text>
            </Box>

            <Flex gap="4">
              <Button asChild size={{ initial: "3", xs: "4" }}>
                <NextLink href="/consultancy/estimation-and-costing">Get an Estimate</NextLink>
              </Button>

              <Button highContrast variant="soft" color="gray" size={{ initial: "3", xs: "4" }} asChild>
                <NextLink href="/contact">Request a Quote</NextLink>
              </Button>
            </Flex>
          </Container>
        </Section>
      </Box>

      <Box mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
        <Section size={{ initial: "2", md: "4" }}>
          <Container>
            <Grid columns={{ sm: "3" }} gap={{ initial: "7", sm: "6", md: "9" }}>
              <Box style={{ maxWidth: 540 }}>
                <Flex mb="3">
                  <DesktopIcon width="30" height="30" />
                </Flex>
                <Heading size="4" as="h3" mb="2">
                  Software Development
                </Heading>
                <Text as="p" size="3">
                  Custom web and mobile applications tailored to project workflows — from data capture and reporting to dashboards and integrations.
                </Text>
              </Box>

              <Box style={{ maxWidth: 540 }}>
                <Flex mb="3">
                  <InputIcon width="30" height="30" />
                </Flex>
                <Heading size="4" as="h3" mb="2">
                  System Integration
                </Heading>
                <Text as="p" size="3">
                  Connect field systems, sensors, ERP and GIS data to create a single source of truth for project teams and stakeholders.
                </Text>
              </Box>

              <Box style={{ maxWidth: 540 }}>
                <Flex mb="3">
                  <TransparencyGridIcon width="30" height="30" />
                </Flex>
                <Heading size="4" as="h3" mb="2">
                  Cloud & DevOps
                </Heading>
                <Text as="p" size="3">
                  Secure cloud architecture, CI/CD pipelines, automated deployments and monitoring for reliable service delivery.
                </Text>
              </Box>

              <Box style={{ maxWidth: 540 }}>
                <Flex mb="3">
                  <Half2Icon width="30" height="30" />
                </Flex>
                <Heading size="4" as="h3" mb="2">
                  GIS & Mapping
                </Heading>
                <Text as="p" size="3">
                  Geospatial data capture, mapping and analysis for planning, design and asset management.
                </Text>
              </Box>

              <Box style={{ maxWidth: 540 }}>
                <Flex mb="3">
                  <DesktopIcon width="30" height="30" />
                </Flex>
                <Heading size="4" as="h3" mb="2">
                  Cybersecurity
                </Heading>
                <Text as="p" size="3">
                  Security assessments, hardening, access control and policies to protect project data and infrastructure.
                </Text>
              </Box>

              <Box style={{ maxWidth: 540 }}>
                <Flex mb="3">
                  <InputIcon width="30" height="30" />
                </Flex>
                <Heading size="4" as="h3" mb="2">
                  Maintenance & Support
                </Heading>
                <Text as="p" size="3">
                  Ongoing support and managed services to keep systems updated, secure and performant.
                </Text>
              </Box>
            </Grid>
          </Container>
        </Section>
      </Box>

      <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
        <Separator size="2" />
        <Section size={{ initial: "2", md: "4" }} pb="0">
          <Footer />
        </Section>
      </Container>
    </MobileMenuProvider>
  );
}
