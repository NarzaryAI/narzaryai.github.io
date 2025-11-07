import * as React from "react";
import NextLink from "next/link";
import { Link } from "@radix-ui/themes";
import {
	Box,
	Text,
	Grid,
	Heading,
	Container,
	Section,
	Separator,
	Flex,
	ScrollArea,
	Button,
} from "@radix-ui/themes";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { Footer } from "@components/Footer";
import { ColorsHeader } from "@components/ColorsHeader";
import { MobileMenuProvider } from "@components/MobileMenu";
import { ColorsMarketingButton } from "@components/ColorsMarketingButton";
import { SerifHeading } from "@components/SerifHeading";
import { ColorsMobileMenu } from "@components/ColorsMobileMenu";
import {
	DesktopIcon,
	EyeOpenIcon,
	Half2Icon,
	InputIcon,
	MoonIcon,
	TransparencyGridIcon,
} from "@radix-ui/react-icons";
import { Swatch } from "@components/Swatch";
import Head from "next/head";
import styles from "./index.module.css";
import { ColorUsageRange } from "@components/ColorUsageRange";
import { ColorStepLabel } from "@components/ColorStepLabel";
import { RadixLogo } from "@components/RadixLogo";
import { BoxLink } from "@components/BoxLink";
import { AccessibleIcon } from "@radix-ui/themes";
import { NarzaryAILogo } from "@components/NarzaryAILogo"
export default function ColorsHome() {
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
				title="Civil Engineering Works | Narzary Engineering & Consultancy Pvt. Ltd."
				description="Explore our civil engineering services: constructions, infrastructures, buildings/houses, roads & bridges, planning & design."
				image="narzary.png"
			/>

			<Box mx={{ initial: "5", xs: "6", sm: "7", md: "9" }} position="relative">
				<Section size={{ initial: "2", md: "4" }}>
					<Container>
						<SerifHeading mb="3" style={{ maxWidth: 720 }}>
							Civil Engineering Works
						</SerifHeading>

						<Box style={{ maxWidth: 800 }}>
							<Text size="5" as="p" mb="6" color="gray">
								We deliver end-to-end civil engineering solutions for public and private sector projects: from construction and infrastructure to buildings, roads, bridges, and planning & design. Our team provides estimation, DPRs, supervision, and lifecycle support.
							</Text>
						</Box>

						<Grid columns={{ sm: "3" }} gap={{ initial: "7", sm: "6", md: "9" }}>
							<Box style={{ maxWidth: 540 }}>
								<Heading size="4" as="h3" mb="2">Constructions</Heading>
								<Text as="p" size="3" mb="2">Complete construction services for buildings, infrastructure, and public works.</Text>
								<NextLink href="/civil/constructions" passHref legacyBehavior>
									<Link color="gray">Learn more</Link>
								</NextLink>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Heading size="4" as="h3" mb="2">Infrastructures</Heading>
								<Text as="p" size="3" mb="2">Planning, design, and delivery of infrastructure projects: water, drainage, roads, utilities.</Text>
								<NextLink href="/civil/infrastructures" passHref legacyBehavior>
									<Link color="gray">Learn more</Link>
								</NextLink>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Heading size="4" as="h3" mb="2">Buildings / Houses</Heading>
								<Text as="p" size="3" mb="2">Residential, commercial, and institutional building design and construction.</Text>
								<NextLink href="/civil/buildings-houses" passHref legacyBehavior>
									<Link color="gray">Learn more</Link>
								</NextLink>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Heading size="4" as="h3" mb="2">Roads & Bridges</Heading>
								<Text as="p" size="3" mb="2">Design, construction, and maintenance of roads, highways, and bridges.</Text>
								<NextLink href="/civil/roads-bridges" passHref legacyBehavior>
									<Link color="gray">Learn more</Link>
								</NextLink>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Heading size="4" as="h3" mb="2">Planning & Design</Heading>
								<Text as="p" size="3" mb="2">Urban, site, and infrastructure planning; architectural and engineering design.</Text>
								<NextLink href="/civil/planning-design" passHref legacyBehavior>
									<Link color="gray">Learn more</Link>
								</NextLink>
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


