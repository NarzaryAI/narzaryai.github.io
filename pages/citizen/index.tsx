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
export default function CitizenServicesHome() {
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
				title="Citizen Services | Narzary Engineering & Consultancy Pvt. Ltd."
				description="Explore our citizen services: ITR Filings, Tax Exemption, Govt. Schemes, Training, Skill Development, and more."
				image="seekgpt.png"
			/>

			<Box mx={{ initial: "5", xs: "6", sm: "7", md: "9" }} position="relative">
				<Section size={{ initial: "2", md: "4" }}>
					<Container>
						<SerifHeading mb="3" style={{ maxWidth: 720 }}>
							Citizen Services
						</SerifHeading>

						<Box style={{ maxWidth: 800 }}>
							<Text size="5" as="p" mb="6" color="gray">
								Narzary Engineering & Consultancy offers a range of citizen services to help individuals and families with government processes, documentation, training, and more. Explore our offerings below and reach out for personalized support.
							</Text>
						</Box>

						<Grid columns={{ sm: "3" }} gap={{ initial: "7", sm: "6", md: "9" }}>
							<Box style={{ maxWidth: 540 }}>
								<Heading size="4" as="h3" mb="2">ITR Filings</Heading>
								<Text as="p" size="3" mb="2">Income Tax Return filing support for individuals, professionals, and businesses.</Text>
								<NextLink href="/citizen/itr-filings" passHref legacyBehavior>
									<Link color="gray">Learn more</Link>
								</NextLink>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Heading size="4" as="h3" mb="2">Tax Exemption (ST)</Heading>
								<Text as="p" size="3" mb="2">Guidance and documentation for Section 10(26) and Sixth Schedule tax exemption.</Text>
								<NextLink href="/citizen/tax-exemption" passHref legacyBehavior>
									<Link color="gray">Learn more</Link>
								</NextLink>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Heading size="4" as="h3" mb="2">Govt. Schemes</Heading>
								<Text as="p" size="3" mb="2">Support for accessing government schemes, subsidies, and welfare programs.</Text>
								<NextLink href="/citizen/govt-schemes" passHref legacyBehavior>
									<Link color="gray">Learn more</Link>
								</NextLink>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Heading size="4" as="h3" mb="2">Training</Heading>
								<Text as="p" size="3" mb="2">Skill development, vocational, and technical training for citizens.</Text>
								<NextLink href="/citizen/training" passHref legacyBehavior>
									<Link color="gray">Learn more</Link>
								</NextLink>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Heading size="4" as="h3" mb="2">Skill Development</Heading>
								<Text as="p" size="3" mb="2">Programs for technical, vocational, and professional growth.</Text>
								<NextLink href="/citizen/skill-development" passHref legacyBehavior>
									<Link color="gray">Learn more</Link>
								</NextLink>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Heading size="4" as="h3" mb="2">Any Other</Heading>
								<Text as="p" size="3" mb="2">Custom requests, documentation, and government-related assistance.</Text>
								<NextLink href="/citizen/other" passHref legacyBehavior>
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


