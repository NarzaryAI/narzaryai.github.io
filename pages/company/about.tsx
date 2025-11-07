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
import {NarzaryAILogo} from "@components/NarzaryAILogo"
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
	 		<Box mx={{ initial: "5", xs: "6", sm: "7", md: "9" }} position="relative">
	 			<TitleAndMetaTags
	 				title="About Narzary Engineering & Consultancy Pvt. Ltd."
	 				description="Comprehensive engineering, technology, and design services for individuals, government, and organizations in India and abroad. Civil, IT, planning, architecture, and more."
	 				image="narzary.png"
	 			/>
	 			<Section size={{ initial: "2", md: "4" }}>
	 				<Container>
	 					<SerifHeading mb="3" style={{ maxWidth: 720 }}>
	 						Narzary Engineering & Consultancy Pvt. Ltd.
	 					</SerifHeading>
	 					<Box style={{ maxWidth: 800 }}>
	 						<Text size="5" as="p" mb="6" color="gray">
	 							Narzary Engineering & Consultancy Pvt. Ltd. provides comprehensive engineering, technology, and design services to individuals, government bodies, corporations, and organizations in India and abroad. Our main objective is to deliver high-quality solutions across civil engineering, information technology, planning, architecture, and project management.
	 						</Text>
	 					</Box>
	 					<Flex gap="4">
	 						<ColorsMarketingButton asChild size={{ initial: "3", xs: "4" }}>
	 							<NextLink href="/company/docs/overview/about-us">
	 								About Company
	 								<svg
	 									width="14"
	 									height="14"
	 									viewBox="0 0 12 12"
	 									xmlns="http://www.w3.org/2000/svg"
	 									fill="currentcolor"
	 									style={{ opacity: 1, marginRight: -3 }}
	 								>
	 									<path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z" />
	 								</svg>
	 							</NextLink>
	 						</ColorsMarketingButton>
	 						<Button
	 							highContrast
	 							variant="soft"
	 							color="gray"
	 							size={{ initial: "3", xs: "4" }}
	 							asChild
	 						>
	 							<NextLink href="/company/team">Team Members</NextLink>
	 						</Button>
	 					</Flex>
	 					<Flex gap="4" p="8" align={"end"}>
	 						<Box style={{ maxWidth: 500 }}>
	 							<NarzaryAILogo/>
	 						</Box>
	 					</Flex>
	 				</Container>
	 			</Section>
	 		</Box>

		 	<Box mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
		 		<Section size={{ initial: "2", md: "4" }}>
		 			<Container>
		 				<Grid columns={{ sm: "2" }} gap={{ initial: "7", sm: "6", md: "9" }}>
		 					<Box style={{ maxWidth: 540 }}>
		 						<Heading size="4" as="h3" mb="2">Civil Engineering & Project Management</Heading>
		 						<Text as="p" size="3">
		 							We undertake, execute, and manage all forms of civil engineering works, including building construction, infrastructure projects, roads, bridges, and more. Our services include project estimation, costing, quantity surveying, project management, and related consultancy for public and private sector clients.
		 						</Text>
		 					</Box>
		 					<Box style={{ maxWidth: 540 }}>
		 						<Heading size="4" as="h3" mb="2">Planning, Design & Consultancy</Heading>
		 						<Text as="p" size="3">
		 							We provide planning and consultancy services for town planning, urban and regional planning, master planning, site development, land use planning, and smart city solutions. Our team prepares detailed project reports, feasibility studies, and environmental impact assessments for diverse projects.
		 						</Text>
		 					</Box>
		 					<Box style={{ maxWidth: 540 }}>
		 						<Heading size="4" as="h3" mb="2">Information Technology & Software Services</Heading>
		 						<Text as="p" size="3">
		 							We offer software development, customization, implementation, maintenance, and testing services. Our expertise includes web-based applications, websites, e-commerce platforms, portals, and all forms of web development and maintenance for clients in India and abroad.
		 						</Text>
		 					</Box>
		 					<Box style={{ maxWidth: 540 }}>
		 						<Heading size="4" as="h3" mb="2">Architectural & Building Design</Heading>
		 						<Text as="p" size="3">
		 							We provide professional design services including architectural design, building design, interior and exterior decoration, and space planning for residential, commercial, and industrial properties.
		 						</Text>
		 					</Box>
		 					<Box style={{ maxWidth: 540 }}>
		 						<Heading size="4" as="h3" mb="2">Business Operations & Support</Heading>
		 						<Text as="p" size="3">
		 							We acquire, manage, and operate land, buildings, workshops, machinery, and equipment necessary for our business. We enter into contracts, raise funds, invest, and manage intellectual property to support our operations and growth.
		 						</Text>
		 					</Box>
		 					<Box style={{ maxWidth: 540 }}>
		 						<Heading size="4" as="h3" mb="2">People, Promotion & Growth</Heading>
		 						<Text as="p" size="3">
		 							We recruit, train, and employ skilled personnel, managers, and technicians. We market, advertise, and promote our services through various media, always striving to deliver value and excellence to our clients and partners.
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


