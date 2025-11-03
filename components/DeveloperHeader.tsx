import { Link } from "@radix-ui/themes";
import { Header, HeaderProps } from "./Header";
import { useRouter } from "next/router";

export const DeveloperHeader = (props: HeaderProps) => {
	const router = useRouter();

	return (
		<Header gitHubLink="https://github.com/seekgpt" {...props}>
			
			<Link
				size="2"
				color="gray"
				href="/planning"
				highContrast={router.pathname.includes("/planning")}
			>
				Planning
			</Link>
		</Header>
	);
};
