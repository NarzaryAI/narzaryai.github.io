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
					title="Consultancy Services | Narzary Engineering & Consultancy Pvt. Ltd."
					description="Learn about the consultancy services offered by Narzary Engineering & Consultancy Pvt. Ltd., including IT services, civil engineering works, planning, and citizen services."
					image="seekgpt.png"
				/>
				<Section size={{ initial: "2", md: "4" }}>
					<Container>
						<SerifHeading mb="3" style={{ maxWidth: 720 }}>
							Consultancy Services
							
						</SerifHeading>
						
						<Box style={{ maxWidth: 800 }}>
							<Text size="5" as="p" mb="6" color="gray">
								We provide comprehensive engineering, technology, and design services to individuals, government bodies, corporations, and other entities in India and abroad.
							</Text>
						</Box>
						

						<Flex gap="4">
							<ColorsMarketingButton asChild size={{ initial: "3", xs: "4" }}>
								<NextLink href="/consultancy/estimation-and-costing">
									Estimation & Costing 
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
								<NextLink href="/consultancy/dpr-preparation">DPR Preparation</NextLink>
							</Button>
							<Button
								highContrast
								variant="soft"
								color="gray"
								size={{ initial: "3", xs: "4" }}
								asChild
							>
								<NextLink href="/consultancy/roads-bridges-buildings">Roads, Bridges & Buildings</NextLink>
							</Button>
							
							
						</Flex>
						<Flex gap="4" mt="4" style={{ justifyContent: "flex-center" }}>
							<Button
								highContrast
								variant="soft"
								color="gray"
								size={{ initial: "3", xs: "4" }}
								asChild
							>
								<NextLink href="/consultancy/it-related-services">IT Related Services</NextLink>
							</Button>
							<Button
								highContrast
								variant="soft"
								color="gray"
								size={{ initial: "3", xs: "4" }}
								asChild
							>
								<NextLink href="/consultancy/planning-and-designs">Planning &amp; Designs</NextLink>
							</Button>
						</Flex>
					</Container>
				</Section>
			</Box>

			<Box mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Section size={{ initial: "2", md: "4" }}>
					<Container>
						<Grid
							columns={{ sm: "3" }}
							gap={{ initial: "7", sm: "6", md: "9" }}
						>
							<Box style={{ maxWidth: 540 }}>
								<Flex mb="3">
									<EyeOpenIcon width="30" height="30" />
								</Flex>
								<Heading size="4" as="h3" mb="2">
									Estimation & Costing
								</Heading>
								<Text as="p" size="3">
									Accurate project estimation and cost analysis to ensure
									efficient resource allocation and budgeting.
								</Text>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Flex mb="3">
									<MoonIcon width="30" height="30" />
								</Flex>
								<Heading size="4" as="h3" mb="2">
									DPR Preparation
								</Heading>
								<Text as="p" size="3">
									Comprehensive DPR preparation services to facilitate
									effective project planning and execution.
								</Text>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Flex mb="3">
									<TransparencyGridIcon width="30" height="30" />
								</Flex>
								<Heading size="4" as="h3" mb="2">
									Roads, Bridges & Buildings
								</Heading>
								<Text as="p" size="3">
									Comprehensive services for the design and construction of
									roads, bridges, and buildings.
								</Text>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Flex mb="3">
									<Half2Icon width="30" height="30" />
								</Flex>
								<Heading size="4" as="h3" mb="2">
									IT Related Services
								</Heading>
								<Text as="p" size="3">
									Comprehensive IT-related services to support your business
									needs, including software development, system integration, and
									IT consulting.
								</Text>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Flex mb="3">
									<DesktopIcon width="30" height="30" />
								</Flex>
								<Heading size="4" as="h3" mb="2">
									Planning & Designs
								</Heading>
								<Text as="p" size="3">
									Comprehensive planning and design services to ensure
									efficient project execution and optimal resource utilization.
								</Text>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Flex mb="3">
									<InputIcon width="30" height="30" />
								</Flex>
								<Heading size="4" as="h3" mb="2">
									Citizen Services
								</Heading>
								<Text as="p" size="3">
									Services aimed at improving public infrastructure and
									amenities for citizens.
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


