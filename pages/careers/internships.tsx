import * as React from "react";
import { Container, Section, Box, Separator, Heading, Text } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { SerifHeading } from "@components/SerifHeading";
import { PrimitivesMobileMenu } from "@components/PrimitivesMobileMenu";
import { PrimitivesHeader } from "@components/PrimitivesHeader";
import { FancyBackground } from "@components/marketing/FancyBackground";

export default function InternshipsPage() {
  return (
    <MobileMenuProvider>
      <PrimitivesMobileMenu />
      <TitleAndMetaTags
        title="Internships | Narzary Engineering & Consultancy Pvt. Ltd."
        description="Internship opportunities for students and graduates in engineering, technology, and management."
        image="seekgpt.png"
      />
      <Box style={{ height: 0 }}>
        <PrimitivesHeader ghost />
      </Box>

      <FancyBackground>
        <Section size={{ initial: "2", md: "4" }}>
          <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
            <SerifHeading mb="3" style={{ maxWidth: 720 }}>
              Internships
            </SerifHeading>

            <Box style={{ maxWidth: 800 }}>
              <Text size="5" as="p" mb="6" color="gray">
                Narzary Engineering & Consultancy offers internship opportunities for students and recent graduates in engineering, technology, and management. Interns gain hands-on experience, mentorship, and exposure to real-world projects in civil engineering, IT, planning, and consultancy domains.
              </Text>
            </Box>

            <Heading as="h3" size="5" mb="2">Internship Areas</Heading>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li><Text size="2">Civil Engineering & Construction (AutoCAD, ArchSoft, STAAD, Revit, and other professional civil engineering technologies)</Text></li>
              <li><Text size="2">Information Technology & Computer Science (Software Development, Artificial Intelligence, Machine Learning, Internet of Things, Cybersecurity, and related IT technologies)</Text></li>
              <li><Text size="2">Project Planning & Design (Urban planning, architectural design, interior/exterior design, space planning)</Text></li>
              <li><Text size="2">GIS & Surveying</Text></li>
              <li><Text size="2">Business Development & Marketing</Text></li>
            </ul>

            <Heading as="h3" size="5" mt="6" mb="2">Internship Process</Heading>
            <ol style={{ marginTop: 12, paddingLeft: 20 }}>
              <li><Text size="2">Application submission (CV, cover letter, area of interest)</Text></li>
              <li><Text size="2">Screening and interview</Text></li>
              <li><Text size="2">Project assignment and onboarding</Text></li>
              <li><Text size="2">Mentorship and training</Text></li>
              <li><Text size="2">Project work and evaluation</Text></li>
              <li><Text size="2">Certificate and career guidance</Text></li>
            </ol>

            <Heading as="h3" size="5" mt="6" mb="2">Benefits</Heading>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li><Text size="2">Practical experience on real projects</Text></li>
              <li><Text size="2">Mentorship from industry experts</Text></li>
              <li><Text size="2">Skill development and training</Text></li>
              <li><Text size="2">Networking and career opportunities</Text></li>
              <li><Text size="2">Internship certificate upon completion</Text></li>
            </ul>

            <Box mt="6">
              <Text size="4" as="p" color="bronze" weight="bold">
                Ready to start your career journey? Email your CV and cover letter to <a href="mailto:careers@narzary.com">careers@narzary.com</a> or visit our Careers page for current openings.
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