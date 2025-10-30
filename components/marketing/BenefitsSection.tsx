import { MarketingCaption } from "./MarketingCaption";
import {
	Box,
	Section,
	Grid,
	Container,
	Heading,
	Em,
	Text,
} from "@radix-ui/themes";

export const BenefitsSection = () => {
	return (
		<Section size={{ initial: "2", md: "4" }} position="relative" overflow="hidden">
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Box mb="7">
					<MarketingCaption mb="1">Why Narzary IT Services</MarketingCaption>
					<Heading as="h2" size="7">
						Technology that helps
						<br />
						infrastructure projects deliver
					</Heading>
				</Box>

				<Grid columns={{ initial: "1", sm: "2" }} gap={{ initial: "7", sm: "5" }}>
					<Box>
						<Heading as="h3" size="4" mb="2">
							Turn field data into decisions
						</Heading>
						<Text as="p" size="3" mr={{ sm: "5", md: "7", lg: "9" }}>
							Collecting inspection, survey and sensor data is only useful when it's
							reliable and accessible. Narzary builds tools that transform raw field
							inputs into dashboards and reports so teams can make timely,
							evidence-based decisions.
						</Text>
					</Box>

					<Box>
						<Heading as="h3" size="4" mb="2">
							Reduce risk, increase uptime
						</Heading>
						<Text as="p" size="3" mr={{ sm: "5", md: "7", lg: "9" }}>
							We design secure cloud platforms, automated deployments and monitoring
							so systems remain available and auditable. That means fewer
							surprises on site and predictable, cost-conscious operations.
						</Text>
					</Box>
				</Grid>
			</Container>
		</Section>
	);
};
