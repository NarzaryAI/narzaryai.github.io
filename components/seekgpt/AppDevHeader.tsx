import * as React from "react";
import NextLink from "next/link";
import { SerifHeading } from "@components/SerifHeading";
import { Box, Button, Container, Section, Text } from "@radix-ui/themes";



export const AppDevHeader = () => {

    return (

        <Section size={{ initial: "2", md: "4" }}>
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Box mb="6">
					<Box mb="5">
						<SerifHeading mb="3" style={{ maxWidth: 760 }}>
							App Development Services
						</SerifHeading>
						<Text size="5" as="p" mb="6" color="gray" style={{ maxWidth: 720 }}>
							Comprehensive app development services to support your business needs, including mobile app development, web app development, system integration, cloud solutions, GIS, cybersecurity, and ongoing maintenance.
						</Text>
					</Box>
					<NextLink href="/it-services/get-started" passHref legacyBehavior>
						<Button
							asChild
							size={{ initial: "3", xs: "4" }}
							color="gray"
							highContrast
						>
							<a>
								Get started
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
							</a>
						</Button>
					</NextLink>
				</Box>
			</Container>
        </Section>

    );
}