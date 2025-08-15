import { Link } from "@radix-ui/themes";
import { Header, HeaderProps } from "./Header";
import { useRouter } from "next/router";

export const PrimitivesHeader = (props: HeaderProps) => {
	const router = useRouter();

	return (
		<Header gitHubLink="https://github.com/radix-ui/primitives" {...props}>
			<Link
				size="2"
				color="gray"
				href="/products/docs/overview/introduction"
				highContrast={router.pathname.includes("/products/docs")}
			>
				Documentation
			</Link>
			<Link
				size="2"
				color="gray"
				href="/products/case-studies"
				highContrast={router.pathname.includes("/products/case-studies")}
			>
				Case studies
			</Link>
		</Header>
	);
};
