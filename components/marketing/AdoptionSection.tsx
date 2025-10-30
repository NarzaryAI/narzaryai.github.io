import * as React from "react";
import NextLink from "next/link";
import {
	Box,
	Button,
	Container,
	Grid,
	Heading,
	Section,
	Text,
} from "@radix-ui/themes";
import { MarketingCaption } from "./MarketingCaption";

export const AdoptionSection = () => {
	return (
		<Section size={{ initial: "2", md: "4" }}>
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Box mb="8">
					<MarketingCaption mb="1">Trusted partners</MarketingCaption>
					<Heading as="h2" size="7" mb="5">
						Proven in government and field projects
					</Heading>
					<Button asChild size={{ initial: "3", xs: "4" }} color="gray" highContrast>
						<NextLink href="/consultancy/estimation-and-costing">Get an estimate</NextLink>
					</Button>
				</Box>

				<Grid
					columns={{ initial: "1", sm: "2" }}
					gap={{ initial: "7", sm: "5" }}
				>
					<Box>
						<Heading as="h3" size="4" mb="2">
							Proven deployment patterns
						</Heading>
						<Text as="p" size="3" mr={{ sm: "5", md: "7", lg: "9" }}>
							We deliver solutions used by municipalities and contractors —
							small pilots ramp into district- or state-wide deployments with
							documented operations and data governance practices.
						</Text>
					</Box>

					<Box>
						<Heading as="h3" size="4" mb="2">
							Training, docs and handover
						</Heading>
						<Text as="p" size="3" mr={{ sm: "5", md: "7", lg: "9" }}>
							We provide implementation guides, operator training and handover
							materials so your teams can run and maintain systems after
							deployment.
						</Text>
					</Box>
				</Grid>
			</Container>
		</Section>
	);
};
