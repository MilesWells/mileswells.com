export type Job = {
	title: string;
	company: string;
	location: string;
	dates: string;
	bullets: string[];
};
export type SkillGroup = { name: string; items: string[] };

export const resume = {
	jobs: [
		{
			title: 'Staff Software Engineer',
			company: 'SVT Robotics',
			location: 'Remote, Norfolk, VA',
			dates: 'Jul 2019 – Sep 2026',
			bullets: [
				'Sole UI engineer for the company; owned end-to-end front-end architecture across multiple applications built with TypeScript and Next.js',
				'Partnered directly with the product designer as the primary technical voice on UX decisions, translating design intent into performant, production-ready interfaces',
				'Established testing standards for UI projects (role-based visual regression, role-based interaction testing, E2E coverage, and schema-based validation of external service integrations), cutting test effort from days to the roughly one hour it takes to run the full automated suite',
				'Isolated E2E tests to eliminate flaky failures and the reruns they caused',
				'Added automated Largest Contentful Paint and Cumulative Layout Shift testing to critical user paths, and used the results to bring LCP under 2.5 seconds and CLS under 0.1',
				"Built AI tooling that lets anyone at the company with GitHub access create proof-of-concept features directly inside our applications using real data, with each one going through the normal dev review process. This shortened the path from idea to customers' hands and saved developer time"
			]
		},
		{
			title: 'Frontend Developer',
			company: 'Validic',
			location: 'Durham, NC',
			dates: 'Mar 2018 – Mar 2019',
			bullets: [
				'Built a professional services product for remote monitoring of diabetes patients using React Router and Redux',
				'Worked on the Impact team on a remote patient monitoring platform using React, TypeScript, and GraphQL, with a Node middleware layer enabling SSO via SAML or OIDC'
			]
		},
		{
			title: 'Software Engineer',
			company: 'Dude Solutions',
			location: 'Cary, NC',
			dates: 'Jun 2016 – Mar 2018',
			bullets: [
				'Designed and implemented features for a work order management platform, building RESTful APIs in .NET with an Entity Framework data layer',
				'Led adoption of new technology for the Maintenance Manager product, including Node services and Socket.IO real-time alerts',
				'Built an eventing system for preventative maintenance scheduling using Quartz.NET'
			]
		}
	] satisfies Job[],
	skills: [
		{
			name: 'Languages & Frameworks',
			items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', '.NET / C#']
		},
		{
			name: 'Testing',
			items: [
				'Chromatic',
				'Storybook',
				'Playwright',
				'Schema Validation',
				'Visual Regression',
				'E2E'
			]
		},
		{
			name: 'Data',
			items: ['REST APIs', 'WebSockets', 'Elasticsearch', 'PostgreSQL', 'RabbitMQ']
		},
		{ name: 'Auth', items: ['OAuth', 'OIDC', 'SAML'] }
	] satisfies SkillGroup[]
};
