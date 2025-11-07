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
export default function CareersHome() {
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

			<ColorsHeader ghost />
			<TitleAndMetaTags
				title="Careers | Narzary Engineering & Consultancy Pvt. Ltd."
				description="Explore career opportunities, internships, certifications, workshops, mentorship, and counseling at Narzary Engineering & Consultancy."
				image="narzary.png"
			/>

			<Box mx={{ initial: "5", xs: "6", sm: "7", md: "9" }} position="relative">
				<Section size={{ initial: "2", md: "4" }}>
					<Container>
						<SerifHeading mb="3" style={{ maxWidth: 720 }}>
							Careers at Narzary Engineering & Consultancy
						</SerifHeading>

						<Box style={{ maxWidth: 800 }}>
							<Text size="5" as="p" mb="6" color="gray">
								Discover your next opportunity with Narzary Engineering & Consultancy. We offer a range of career paths for engineers, IT professionals, project managers, and more. Explore job openings, internships, certifications, workshops, mentorship, and career counseling to grow your skills and advance your career.
							</Text>
						</Box>

						<Grid columns={{ sm: "2", md: "3" }} gap={{ initial: "7", sm: "6", md: "9" }}>
							<Box style={{ maxWidth: 540 }}>
								<Heading size="4" as="h3" mb="2">Job Openings</Heading>
								<Text as="p" size="3" mb="2">Current roles for engineers, IT professionals, managers, and support staff.</Text>
								<NextLink href="/careers/job-openings" passHref legacyBehavior>
									<Link color="gray">View jobs</Link>
								</NextLink>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Heading size="4" as="h3" mb="2">Internships</Heading>
								<Text as="p" size="3" mb="2">Hands-on experience for students and graduates in engineering, IT, and management.</Text>
								<NextLink href="/careers/internships" passHref legacyBehavior>
									<Link color="gray">Learn more</Link>
								</NextLink>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Heading size="4" as="h3" mb="2">Certifications</Heading>
								<Text as="p" size="3" mb="2">Professional certifications in civil engineering, IT, and related fields.</Text>
								<NextLink href="/careers/certifications" passHref legacyBehavior>
									<Link color="gray">Get certified</Link>
								</NextLink>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Heading size="4" as="h3" mb="2">Workshops & Bootcamps</Heading>
								<Text as="p" size="3" mb="2">Skill-building workshops and bootcamps for practical learning.</Text>
								<NextLink href="/careers/workshops-bootcamps" passHref legacyBehavior>
									<Link color="gray">See events</Link>
								</NextLink>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Heading size="4" as="h3" mb="2">Mentorship</Heading>
								<Text as="p" size="3" mb="2">Guidance and support from industry experts for career growth.</Text>
								<NextLink href="/careers/mentorship" passHref legacyBehavior>
									<Link color="gray">Find a mentor</Link>
								</NextLink>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Heading size="4" as="h3" mb="2">Career Counseling</Heading>
								<Text as="p" size="3" mb="2">Personalized career advice and planning for students and professionals.</Text>
								<NextLink href="/careers/career-counseling" passHref legacyBehavior>
									<Link color="gray">Get advice</Link>
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


