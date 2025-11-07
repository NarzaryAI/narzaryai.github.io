import * as React from "react";
import { Container, Section, Box, Separator, Heading, Text } from "@radix-ui/themes";
import { Footer } from "@components/Footer";
import { MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { ColorsHeader } from "@components/ColorsHeader";
import Head from "next/head";
import { ColorsMobileMenu } from "@components/ColorsMobileMenu";
import { SerifHeading } from "@components/SerifHeading";

export default function CareerCounselingPage() {
    return (
        <MobileMenuProvider>
            <ColorsMobileMenu />

            <Head>
                <style>
                    {`
                        :is(.dark, .dark-theme) :is(body, .radix-themes) {
                            --color-background: #0b0b0b;
                            --color-panel-solid: var(--gray-1);
                        }
                    `}
                </style>
            </Head>

            <Box
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: 480,
                    opacity: 0.6,
                    background:
                        "linear-gradient(to bottom, var(--crimson-4), var(--amber-2), transparent)",
                }}
            />

            <ColorsHeader ghost />
            <TitleAndMetaTags
                title="Career Counseling | Narzary Engineering & Consultancy Pvt. Ltd."
                description="Career counseling services for students and professionals in engineering, IT, and related fields."
                image="narzary.png"
            />
            <Section size={{ initial: "2", md: "4" }}>
                <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
                    <SerifHeading mb="3" style={{ maxWidth: 720 }}>
                        Career Counseling
                    </SerifHeading>

                    <Box style={{ maxWidth: 800 }}>
                        <Text size="5" as="p" mb="6" color="gray">
                            Narzary Engineering & Consultancy provides career counseling services for students and professionals in engineering, information technology, and related fields. Our experienced counselors help you identify your strengths, set career goals, and plan your professional journey.
                        </Text>
                    </Box>

                    <Heading as="h3" size="5" mb="2">Counseling Areas</Heading>
                    <ul style={{ marginTop: 12, paddingLeft: 20 }}>
                        <li><Text size="2">Career planning and goal setting</Text></li>
                        <li><Text size="2">Education and skill development pathways</Text></li>
                        <li><Text size="2">Job search strategies and resume building</Text></li>
                        <li><Text size="2">Interview preparation and soft skills</Text></li>
                        <li><Text size="2">Industry trends and opportunities</Text></li>
                    </ul>

                    <Heading as="h3" size="5" mt="6" mb="2">How It Works</Heading>
                    <ol style={{ marginTop: 12, paddingLeft: 20 }}>
                        <li><Text size="2">Book a counseling session (online or in-person)</Text></li>
                        <li><Text size="2">Meet with a career counselor</Text></li>
                        <li><Text size="2">Discuss your goals, interests, and challenges</Text></li>
                        <li><Text size="2">Receive personalized advice and action plan</Text></li>
                        <li><Text size="2">Follow up for ongoing support</Text></li>
                    </ol>

                    <Heading as="h3" size="5" mt="6" mb="2">Benefits</Heading>
                    <ul style={{ marginTop: 12, paddingLeft: 20 }}>
                        <li><Text size="2">Clarity in career direction</Text></li>
                        <li><Text size="2">Personalized guidance and support</Text></li>
                        <li><Text size="2">Improved job search and interview skills</Text></li>
                        <li><Text size="2">Awareness of industry trends</Text></li>
                        <li><Text size="2">Confidence to pursue your goals</Text></li>
                    </ul>

                    <Box mt="6">
                        <Text size="4" as="p" color="bronze" weight="bold">
                            Ready to plan your career? Email <a href="mailto:careercounseling@narzary.com">careercounseling@narzary.com</a> or visit our Careers page to book a session.
                        </Text>
                    </Box>
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