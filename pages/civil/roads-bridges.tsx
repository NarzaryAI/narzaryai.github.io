import * as React from "react";
import { Container, Section, Box, Separator, Heading, Text } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { ColorsHeader } from "@components/ColorsHeader";
import Head from "next/head";
import { ColorsMobileMenu } from "@components/ColorsMobileMenu";

export default function RoadsBridgesPage() {
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
        title="Roads & Bridges | Narzary Engineering & Consultancy Pvt. Ltd."
        description="Design, construction, and maintenance of roads, highways, and bridges."
        image="seekgpt.png"
      />
      <Section size={{ initial: "2", md: "4" }}>
        <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
          <Heading as="h1" size="6" mb="4">Roads & Bridges</Heading>
          <Text size="4" as="p" mb="6" color="gray">
            We provide design, construction, and maintenance for roads, highways, and bridges. Our expertise covers alignment, structural design, materials, and lifecycle management for public infrastructure.
          </Text>
          <Heading as="h3" size="5" mb="2">Roads & bridges services</Heading>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Alignment and geometric design</Text></li>
            <li><Text size="2">Structural design for bridges and culverts</Text></li>
            <li><Text size="2">Construction and supervision</Text></li>
            <li><Text size="2">Materials selection and quality control</Text></li>
            <li><Text size="2">Maintenance and lifecycle management</Text></li>
          </ul>
          <Heading as="h3" size="5" mt="6" mb="2">Process</Heading>
          <ol style={{ marginTop: 12, paddingLeft: 20 }}>
            <li><Text size="2">Survey and alignment planning</Text></li>
            <li><Text size="2">Design and approvals</Text></li>
            <li><Text size="2">Construction and supervision</Text></li>
            <li><Text size="2">Maintenance and reporting</Text></li>
          </ol>
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