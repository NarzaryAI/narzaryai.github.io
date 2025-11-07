import * as React from "react";
import { Container, Section } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { AccessibilitySection } from "@components/marketing/AccessibilitySection";
import { AdoptionSection } from "@components/marketing/AdoptionSection";
import { BenefitsSection } from "@components/marketing/BenefitsSection";
import { CaseStudiesSection } from "@components/marketing/CaseStudiesSection";
import { CommunitySection } from "@components/marketing/CommunitySection";
import { ComponentHighlightsSection } from "@components/marketing/ComponentHighlightsSection";
import { DeveloperExperienceSection } from "@components/marketing/DeveloperExperienceSection";
import { FancyBackground } from "@components/marketing/FancyBackground";
import { PrimitivesHero } from "@components/marketing/PrimitivesHero";
import { StatsSection } from "@components/marketing/StatsSection";
import { Box, Separator } from "@radix-ui/themes";
import { PrimitivesHeader } from "@components/PrimitivesHeader";
import { PrimitivesMobileMenu } from "@components/PrimitivesMobileMenu";
import { SolutionsHeader } from "@components/seekgpt/SolutionsHeader";

export default function ProductsHome() {
	return (
		<MobileMenuProvider>
			<TitleAndMetaTags
				title="Products | Narzary Engineering & Consultancy Pvt. Ltd."
				description="Explore Narzary's suite of products: SeekGPT, Buntha AI, GitSpot, Komkart, and Dotma. Innovative platforms for AI, development, ecommerce, and content management."
				image="seekgpt.png"
			/>
			<Section size={{ initial: "2", md: "4" }}>
				<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
					<h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 24 }}>Our Products</h1>
					<p style={{ fontSize: 18, color: '#666', maxWidth: 700, marginBottom: 40 }}>
						Narzary Engineering & Consultancy develops innovative products for AI, development, ecommerce, and content management. Explore our platforms below.
					</p>
								<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
									<li style={{ marginBottom: 32 }}>
										<Box style={{ background: '#f8fafc', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px #0001' }}>
											<h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>SeekGPT</h2>
											<p style={{ fontSize: 16, marginBottom: 0 }}>
												An open source AI platform to manage, maintain, and deploy AI models. SeekGPT empowers organizations to build, fine-tune, and serve advanced AI solutions with transparency and control.
											</p>
										</Box>
									</li>
									<li style={{ marginBottom: 32 }}>
										<Box style={{ background: '#f8fafc', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px #0001' }}>
											<h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>Buntha AI</h2>
											<p style={{ fontSize: 16, marginBottom: 0 }}>
												A desktop-based application to use AI for productivity, creativity, and automation. Buntha AI brings the power of generative AI to your desktop, enabling offline and secure workflows.
											</p>
										</Box>
									</li>
									<li style={{ marginBottom: 32 }}>
										<Box style={{ background: '#f8fafc', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px #0001' }}>
											<h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>GitSpot</h2>
											<p style={{ fontSize: 16, marginBottom: 0 }}>
												A developer platform for code collaboration, version control, and project management. GitSpot streamlines the software development lifecycle for teams and individuals.
											</p>
										</Box>
									</li>
									<li style={{ marginBottom: 32 }}>
										<Box style={{ background: '#f8fafc', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px #0001' }}>
											<h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>Komkart</h2>
											<p style={{ fontSize: 16, marginBottom: 0 }}>
												An ecommerce platform designed for seamless online selling and buying. Komkart offers robust features for merchants, buyers, and marketplace operators.
											</p>
										</Box>
									</li>
									<li style={{ marginBottom: 32 }}>
										<Box style={{ background: '#f8fafc', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px #0001' }}>
											<h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>Dotma</h2>
											<p style={{ fontSize: 16, marginBottom: 0 }}>
												A modern Content Management System (CMS) for creating, managing, and publishing digital content. Dotma is built for flexibility, scalability, and ease of use.
											</p>
										</Box>
									</li>
								</ul>
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
