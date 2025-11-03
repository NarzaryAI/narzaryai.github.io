import * as React from "react";
import NextLink from "next/link";
import { Container, Section, Box, Separator, Heading, Text, Link } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { BenefitsSection } from "@components/marketing/BenefitsSection";
import { StatsSection } from "@components/marketing/StatsSection";
import { FancyBackground } from "@components/marketing/FancyBackground";
import { PrimitivesHeader } from "@components/PrimitivesHeader";
import { PrimitivesMobileMenu } from "@components/PrimitivesMobileMenu";
import { SerifHeading } from "@components/SerifHeading";

export default function JobOpeningsPage() {
  return (
    <MobileMenuProvider>
      <PrimitivesMobileMenu />

      <TitleAndMetaTags
        title="Job Openings | Narzary Engineering & Consultancy Pvt. Ltd."
        description="Current job openings at Narzary Engineering & Consultancy for civil engineering, IT, and management roles."
        image="seekgpt.png"
      />

      <Box style={{ height: 0 }}>
        <PrimitivesHeader ghost />
      </Box>

      <FancyBackground>
        <Section size={{ initial: "2", md: "4" }}>
          <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
            <SerifHeading mb="3" style={{ maxWidth: 720 }}>
              Job Openings
            </SerifHeading>

            <Box style={{ maxWidth: 800 }}>
              <Text size="5" as="p" mb="6" color="gray">
                Explore current job openings at Narzary Engineering & Consultancy. We offer opportunities for engineers, IT professionals, project managers, and support staff. Join our team and contribute to impactful projects in civil engineering, technology, and consultancy.
              </Text>
            </Box>

            <Heading as="h3" size="5" mb="2">Current Openings</Heading>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li><Text size="2">Civil Engineer (Site, Design, Supervision)</Text></li>
              <li><Text size="2">Software Developer (Web, Mobile, ERP)</Text></li>
              <li><Text size="2">Project Manager (Civil/IT)</Text></li>
              <li><Text size="2">GIS Specialist / Surveyor</Text></li>
              <li><Text size="2">Business Development Executive</Text></li>
              <li><Text size="2">Support Staff (Admin, Accounts, HR)</Text></li>
            </ul>

            <Heading as="h3" size="5" mt="6" mb="2">How to Apply</Heading>
            <ol style={{ marginTop: 12, paddingLeft: 20 }}>
              <li><Text size="2">Review the job openings and select your desired role</Text></li>
              <li><Text size="2">Prepare your CV and cover letter</Text></li>
              <li><Text size="2">Email your application to <a href="mailto:jobs@narzary.com">jobs@narzary.com</a></Text></li>
              <li><Text size="2">Shortlisted candidates will be contacted for interview</Text></li>
              <li><Text size="2">Join our team and start your career journey</Text></li>
            </ol>

            <Heading as="h3" size="5" mt="6" mb="2">Why Join Us?</Heading>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li><Text size="2">Work on impactful projects in civil engineering and IT</Text></li>
              <li><Text size="2">Collaborate with experienced professionals</Text></li>
              <li><Text size="2">Opportunities for growth and skill development</Text></li>
              <li><Text size="2">Supportive work environment</Text></li>
              <li><Text size="2">Competitive compensation and benefits</Text></li>
            </ul>

            <Box mt="6">
              <Text size="4" as="p" color="bronze" weight="bold">
                Ready to apply? Email <a href="mailto:jobs@narzary.com">jobs@narzary.com</a> or visit our Careers page for more details.
              </Text>
            </Box>
          </Container>
        </Section>
      </FancyBackground>

      <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
        <Separator size="2" />
        <Section size={{ initial: "2", md: "4" }} pb="0">
          <Footer />
        </Section>
      </Container>
    </MobileMenuProvider>
  );
}
