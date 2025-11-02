export const colorsRoutes = [
	{
		label: "Overview",
		pages: [
			{
				title: "About Us",
				slug: "company/docs/overview/about-us",
				draft: false,
			},
			{
				title: "Consultancy Services",
				slug: "company/docs/overview/consultancy",
				draft: false,
			},
			{
				title: "Information Technology Services",
				slug: "company/docs/overview/information-technology",
				draft: false,
			},
			{
				title: "Civil Engineering Services",
				slug: "company/docs/overview/civil-engineering",
				draft: false,
			},
			{
				title: "Planning & Design Services",
				slug: "company/docs/overview/planning-and-design",
				draft: false,
			},
			{
				title: "Citizen Services",
				slug: "company/docs/overview/citizen-services",
				draft: false,
			},
		],
	},

	{
		label: "Opportunities",
		pages: [
			{
				title: "Careers",
				slug: "company/docs/opportunities/careers",
				draft: false,
			},
			{
				title: "Internships",
				slug: "company/docs/opportunities/internships",
				draft: false,
			},
			{
				title: "Referrals",
				slug: "company/docs/opportunities/referrals",
				draft: false,
			},
		],
	},
	{
		label: "Contacts",
		pages: [
			{
				title: "Contact Us",
				slug: "company/docs/contacts/contacts",
				draft: false,
			},
			
		],
	},
];

export const allColorsRoutes = colorsRoutes.reduce<
	{ title: string; slug: string; draft: boolean }[]
>((acc, curr) => {
	acc = [...acc, ...curr.pages.filter((p) => p.draft !== true)];
	return acc;
}, []);
