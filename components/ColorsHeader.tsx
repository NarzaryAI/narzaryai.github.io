import { Link } from "@radix-ui/themes";
import { Header, HeaderProps } from "./Header";
import { useRouter } from "next/router";

export const ColorsHeader = (props: HeaderProps) => {
	const router = useRouter();

	return (
		<Header gitHubLink="https://github.com/seekgpt" {...props}>
			<Link
				size="2"
				color="gray"
				href="/company/docs"
				highContrast={router.pathname.includes("/company/docs")}
			>
				Documentation
			</Link>
			<Link
				size="2"
				color="gray"
				href="/company/custom"
				highContrast={router.pathname.includes("/company/custom")}
			>
				Custom palette
			</Link>
		</Header>
	);
};
