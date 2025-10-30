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
								<NextLink href="/consultancy/estimation" passHref legacyBehavior>
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
					</ul>
				</Box>

				<Box>
					<Heading as="h6" size="3">
						IT Services
					</Heading>
					<ul>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink
									href="/products/docs/overview/introduction"
									passHref
									legacyBehavior
								>
									<Link color="gray">Introduction</Link>
								</NextLink>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink
									href="/products/docs/guides/styling"
									passHref
									legacyBehavior
								>
									<Link color="gray">Styling</Link>
								</NextLink>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink
									href="/products/docs/overview/accessibility"
									passHref
									legacyBehavior
								>
									<Link color="gray">Accessibility</Link>
								</NextLink>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink
									href="/products/docs/overview/releases"
									passHref
									legacyBehavior
								>
									<Link color="gray">Releases</Link>
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
								<NextLink
									href="/company/docs/overview/about-us"
									passHref
									legacyBehavior
								>
									<Link color="gray">About Us</Link>
								</NextLink>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink
									href="/company/docs/palette-composition/scales"
									passHref
									legacyBehavior
								>
									<Link color="gray">Scales</Link>
								</NextLink>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink
									href="/company/docs/palette-composition/composing-a-palette"
									passHref
									legacyBehavior
								>
									<Link color="gray">Palette composition</Link>
								</NextLink>
							</Text>
						</li>
						<li>
							<Text as="p" size="2" mt="3">
								<NextLink
									href="/company/docs/palette-composition/understanding-the-scale"
									passHref
									legacyBehavior
								>
									<Link color="gray">Understanding the scale</Link>
								</NextLink>
							</Text>
						</li>
					</ul>
				</Box>

				<Box>
					<Heading as="h6" size="3">
						Planning & Design
					</Heading>
					<ul>
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
				<Box>
					<Heading as="h6" size="3">
						Career & Skill Development
					</Heading>
					<ul>
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
				<Box>
					<Heading as="h6" size="3">
						Citizen Services
					</Heading>
					<ul>
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
				<Box>
					<Heading as="h6" size="3">
						Company
					</Heading>
					<ul>
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
