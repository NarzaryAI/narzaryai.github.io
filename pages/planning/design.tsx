import * as React from "react";
import { Container, Section, Box, Separator, Heading, Text, Button, Link } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { ColorsHeader } from "@components/ColorsHeader";
import Head from "next/head";
import { ColorsMobileMenu } from "@components/ColorsMobileMenu";
import { SerifHeading } from "@components/SerifHeading";

export default function ArchitecturesPage() {
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
        description="Planning and design services for residential, commercial, and institutional projects. Concept, drawings, approvals, and project management."
        image="narzary.png"
      />
      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
          <SerifHeading mb="3" style={{ maxWidth: 720 }}>
            Planning & Design
          </SerifHeading>

          <Box style={{ maxWidth: 800 }}>
            <Text size="5" as="p" mb="6" color="gray">
              Narzary Engineering & Consultancy provides architectural planning and design services for residential, commercial, and institutional projects. We deliver concept development, detailed drawings, regulatory approvals, and project management for new builds and renovations.
            </Text>
            <Box mt="3" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button asChild>
                <a href="mailto:necpl25@gmail.com">Request Consultation</a>
              </Button>
              <Button variant="soft" asChild>
                <a href="#scope">View Service Scope</a>
              </Button>
            </Box>
          </Box>

          <Heading as="h3" size="5" mb="2">What we deliver</Heading>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Concept development and feasibility studies</Text></li>
            <li><Text size="2">Architectural drawings and 3D visualizations</Text></li>
            <li><Text size="2">Regulatory approvals and compliance documentation</Text></li>
            <li><Text size="2">Project management and site coordination</Text></li>
            <li><Text size="2">Renovation and retrofit design</Text></li>
          </ul>

          <Heading as="h3" size="5" mt="6" mb="2">How we work</Heading>
          <ol style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Consultation and requirements gathering</Text></li>
            <li><Text size="2">Concept design and client review</Text></li>
            <li><Text size="2">Detailed drawings and documentation</Text></li>
            <li><Text size="2">Approvals, tendering, and site supervision</Text></li>
            <li><Text size="2">Project handover and post-occupancy support</Text></li>
          </ol>

          <Heading as="h3" size="5" mt="6" mb="2">Technologies & Tools</Heading>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">AutoCAD, Revit, SketchUp, BIM</Text></li>
            <li><Text size="2">Industry-standard tools for design, visualization, and documentation</Text></li>
          </ul>

          <Heading id="scope" as="h3" size="5" mt="6" mb="2">Service Scope</Heading>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Residential: houses, apartments, extensions</Text></li>
            <li><Text size="2">Commercial: offices, retail, hospitality</Text></li>
            <li><Text size="2">Institutional: schools, healthcare, government</Text></li>
            <li><Text size="2">Master planning & site layout</Text></li>
            <li><Text size="2">Interior planning & fit-out design</Text></li>
          </ul>

          <Box mt="6" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Button asChild>
              <a href="mailto:necpl25@gmail.com">Start Your Project</a>
            </Button>
            <Text size="2" color="gray">
              Or call +91-XXXXXXXXXX for a quick consultation.
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