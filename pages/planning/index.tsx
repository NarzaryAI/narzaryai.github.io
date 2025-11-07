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
export default function PlanningDesignHome() {
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
				description="Explore our planning and design services: Architectures, Residential/Commercial, Town/City Planning, Interior/Exterior Design, Space Planning."
				image="narzary.png"
			/>

			<Box mx={{ initial: "5", xs: "6", sm: "7", md: "9" }} position="relative">
				<Section size={{ initial: "2", md: "4" }}>
					<Container>
						<SerifHeading mb="3" style={{ maxWidth: 720 }}>
							Planning & Design
						</SerifHeading>

						<Box style={{ maxWidth: 800 }}>
							<Text size="5" as="p" mb="6" color="gray">
								Narzary Engineering & Consultancy provides comprehensive planning and design services for residential, commercial, and institutional projects. Our team delivers innovative solutions tailored to client needs, ensuring optimal functionality, aesthetics, and compliance.
							</Text>
						</Box>

						<Grid columns={{ sm: "3" }} gap={{ initial: "7", sm: "6", md: "9" }}>
							<Box style={{ maxWidth: 540 }}>
								<Heading size="4" as="h3" mb="2">Architectures</Heading>
								<Text as="p" size="3" mb="2">Architectural planning and design for all project types.</Text>
								<NextLink href="/planning/architectures" passHref legacyBehavior>
									<Link color="gray">Learn more</Link>
								</NextLink>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Heading size="4" as="h3" mb="2">Residential/Commercial</Heading>
								<Text as="p" size="3" mb="2">Planning and design for homes, apartments, offices, and commercial spaces.</Text>
								<NextLink href="/planning/residential-commercial" passHref legacyBehavior>
									<Link color="gray">Learn more</Link>
								</NextLink>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Heading size="4" as="h3" mb="2">Town/City Planning</Heading>
								<Text as="p" size="3" mb="2">Urban and regional planning for towns and cities.</Text>
								<NextLink href="/planning/town-city-planning" passHref legacyBehavior>
									<Link color="gray">Learn more</Link>
								</NextLink>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Heading size="4" as="h3" mb="2">Interior/Exterior Design</Heading>
								<Text as="p" size="3" mb="2">Interior and exterior design for functional and aesthetic spaces.</Text>
								<NextLink href="/planning/interior-exterior-design" passHref legacyBehavior>
									<Link color="gray">Learn more</Link>
								</NextLink>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Heading size="4" as="h3" mb="2">Space Planning</Heading>
								<Text as="p" size="3" mb="2">Optimizing layouts and space utilization for all project types.</Text>
								<NextLink href="/planning/space-planning" passHref legacyBehavior>
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


