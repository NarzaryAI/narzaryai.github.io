import * as React from "react";
import NextLink from "next/link";
import {
	Box,
	Grid,
	Text,
	Flex,
	Link,
	Heading,
	AccessibleIcon,
} from "@radix-ui/themes";
import { RadixLogo } from "./RadixLogo";
import { useRouter } from "next/router";
import { BoxLink } from "./BoxLink";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import styles from "./Footer.module.css";

export const Footer = () => {
	const router = useRouter();
	const isColors = router.pathname.includes("/company");

	return (
		<Grid asChild pb="9" gapX="7" gapY="3" className={styles.Footer}>
			<footer>
				<Box>
					<Heading as="h6" size="3">
						Consultancy
					</Heading>
					<ul>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/consultancy/estimation-and-costing" passHref legacyBehavior>
									<Link color="gray">Estimation & Costing</Link>
								</NextLink>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/consultancy/dpr-preparations" passHref legacyBehavior>
									<Link color="gray">DPR Preparations</Link>
								</NextLink>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/consultancy/roads-bridges-buildings" passHref legacyBehavior>
									<Link color="gray">Roads, Bridges & Buildings</Link>
								</NextLink>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/it-services" passHref legacyBehavior>
									<Link color="gray">IT Related Services</Link>
								</NextLink>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/consultancy/project-management" passHref legacyBehavior>
									<Link color="gray">Project Management</Link>
								</NextLink>
							</Text>
						</li>
					</ul>
				</Box>

				<Box>
					<Heading as="h6" size="3">
						IT Services
					</Heading>
					<ul>
						
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/it-services/software-development" passHref legacyBehavior>
									<Link color="gray">Software Development</Link>
								</NextLink>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/it-services/app-development" passHref legacyBehavior>
									<Link color="gray">App Development</Link>
								</NextLink>
							</Text>
						</li>
						
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/it-services/web-hosting" passHref legacyBehavior>
									<Link color="gray">Web Hosting</Link>
								</NextLink>
							</Text>
						</li>
					
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/it-services/maintenance" passHref legacyBehavior>
									<Link color="gray">Maintenance</Link>
								</NextLink>
							</Text>
						</li>
						
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/it-services/erp-solutions" passHref legacyBehavior>
									<Link color="gray">ERP Solutions</Link>
								</NextLink>
							</Text>
						</li>
					</ul>
				</Box>


				<Box>
					<Heading as="h6" size="3">
						Civil Engineering Works
					</Heading>
					<ul>
						
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/civil/constructions" passHref legacyBehavior>
									<Link color="gray">Constructions</Link>
								</NextLink>
							</Text>
							</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/civil/infrastructures" passHref legacyBehavior>
									<Link color="gray">Infrastructures</Link>
								</NextLink>
							</Text>
							</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/civil/buildings-houses" passHref legacyBehavior>
									<Link color="gray">Buildings / Houses</Link>
								</NextLink>
							</Text>
							</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/consultancy/roads-bridges-buildings" passHref legacyBehavior>
									<Link color="gray">Roads &amp; Bridges</Link>
								</NextLink>
							</Text>
							</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/civil/planning-design" passHref legacyBehavior>
									<Link color="gray">Planning &amp; Design</Link>
								</NextLink>
							</Text>
							</li>
					</ul>
				</Box>

				<Box>
					<Heading as="h6" size="3">
						Planning &amp; Design
					</Heading>
					<ul>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/planning/architectures" passHref legacyBehavior>
									<Link color="gray">Architectures</Link>
								</NextLink>
							</Text>
							</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/planning/residential-commercial" passHref legacyBehavior>
									<Link color="gray">Residential / Commercial</Link>
								</NextLink>
							</Text>
							</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/planning/town-city-planning" passHref legacyBehavior>
									<Link color="gray">Town / City Plannings</Link>
								</NextLink>
							</Text>
							</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/planning/interior-exterior-design" passHref legacyBehavior>
									<Link color="gray">Interior / Exterior Design</Link>
								</NextLink>
							</Text>
							</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/planning/space-planning" passHref legacyBehavior>
									<Link color="gray">Space Planning</Link>
								</NextLink>
							</Text>
							</li>
					</ul>
				</Box>
				<Box>
					<Heading as="h6" size="3">
						Career &amp; Skill Development
					</Heading>
					<ul>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/careers/job-openings" passHref legacyBehavior>
									<Link color="gray">Job Openings</Link>
								</NextLink>
							</Text>
							</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/careers/internships" passHref legacyBehavior>
									<Link color="gray">Internships</Link>
								</NextLink>
							</Text>
							</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/careers/certifications" passHref legacyBehavior>
									<Link color="gray">Certifications</Link>
								</NextLink>
							</Text>
							</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/careers/workshops-bootcamps" passHref legacyBehavior>
									<Link color="gray">Workshops &amp; Bootcamps</Link>
								</NextLink>
							</Text>
							</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/careers/career-counseling" passHref legacyBehavior>
									<Link color="gray">Career Counseling</Link>
								</NextLink>
							</Text>
							</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/careers/mentorship" passHref legacyBehavior>
									<Link color="gray">Mentorship</Link>
								</NextLink>
							</Text>
							</li>
					</ul>
				</Box>
				<Box>
					<Heading as="h6" size="3">
						Citizen Services
					</Heading>
					<ul>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/citizen/itr-filings" passHref legacyBehavior>
									<Link color="gray">ITR Filings</Link>
								</NextLink>
							</Text>
							</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/citizen/tax-exemption" passHref legacyBehavior>
									<Link color="gray">Tax Exemption (ST)</Link>
								</NextLink>
							</Text>
							</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/citizen/govt-schemes" passHref legacyBehavior>
									<Link color="gray">Govt. Schemes</Link>
								</NextLink>
							</Text>
							</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/citizen/training" passHref legacyBehavior>
									<Link color="gray">Training</Link>
								</NextLink>
							</Text>
							</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/citizen/skill-development" passHref legacyBehavior>
									<Link color="gray">Skill Development</Link>
								</NextLink>
							</Text>
							</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/citizen/other" passHref legacyBehavior>
									<Link color="gray">Any Other</Link>
								</NextLink>
							</Text>
							</li>
					</ul>
				</Box>
				<Box>
					<Heading as="h6" size="3">
						Company
					</Heading>
					<ul>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/company/about" passHref legacyBehavior>
									<Link color="gray">About Us</Link>
								</NextLink>
							</Text>
							</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink href="/company/careers" passHref legacyBehavior>
									<Link color="gray">Careers</Link>
								</NextLink>
							</Text>
							</li>
						<li>
							<Text as="p" size="2" mt="3">
								<Link
									href="https://github.com/seekgpt"
									color="gray"
									target="_blank"
									style={{ display: "inline-flex", alignItems: "center" }}
								>
									GitHub
									<Flex asChild ml="2" style={{ color: "var(--gray-8)" }}>
										<ArrowTopRightIcon />
									</Flex>
								</Link>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<Link
									href="https://fb.com/seekgpt"
									color="gray"
									target="_blank"
									style={{ display: "inline-flex", alignItems: "center" }}
								>
									Facebook
									<Flex asChild ml="2" style={{ color: "var(--gray-8)" }}>
										<ArrowTopRightIcon />
									</Flex>
								</Link>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<Link
									href="https://twitter.com/seekgpt"
									color="gray"
									target="_blank"
									style={{ display: "inline-flex", alignItems: "center" }}
								>
									Twitter
									<Flex asChild ml="2" style={{ color: "var(--gray-8)" }}>
										<ArrowTopRightIcon />
									</Flex>
								</Link>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<Link
									href="https://huggingface.co/seekgpt"
									color="gray"
									target="_blank"
									style={{ display: "inline-flex", alignItems: "center" }}
								>
									Huggingface
									<Flex asChild ml="2" style={{ color: "var(--gray-8)" }}>
										<ArrowTopRightIcon />
									</Flex>
								</Link>
							</Text>
						</li>
					</ul>
				</Box>
				<Flex
					align="start"
					direction="column"
					className={styles.RadixLogo}
					mb="5"
				>
					<NextLink href="/" passHref legacyBehavior>
						<BoxLink>
							<Heading as="h6" size="3">
								Address
							</Heading>
						</BoxLink>
					</NextLink>
					<Box pr="8" mt="5">
						<Heading
							as="h6"
							size="2"
							style={{
								lineHeight: "20px",
								color: "var(--gray-10)",
								fontWeight: "inherit",
							}}
						>
							<b>Narzary Engineering &amp; Consultancy Pvt. Ltd.</b><br />
							JD Road, Oppositite Pagla Baba Sgiv Mandir, Near BTC Secretarat, BTC, Kokrajhar, Assam - 783347.
						</Heading>
					</Box>

				</Flex>
			</footer>
		</Grid>
	);
};
