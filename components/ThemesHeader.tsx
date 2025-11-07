import { Link } from "@radix-ui/themes";
import { Header, HeaderProps } from "./Header";
import { useRouter } from "next/router";

export const ThemesHeader = (props: HeaderProps) => {
	const router = useRouter();

	return (
		<Header gitHubLink="https://github.com/radix-ui/themes" {...props}>
			
			<Link
				size="2"
				color="gray"
				href="/products"
				highContrast={router.pathname.includes("/products")}
			>
				Products
			</Link>
		</Header>
	);
};
