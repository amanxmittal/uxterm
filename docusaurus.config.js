module.exports = {
	title: 'UX Terms',
	tagline: 'All the tools you need to start building a modern WordPress project, using all the latest front end development tools.',
	url: 'https://uxterm.amanmittal.me',
	// baseUrl: '/eightshift-docs/',
	baseUrl: '/',
	favicon: 'img/favicon1.png',
	organizationName: 'amanmittal',
	projectName: 'ux-terms',
	staticDirectories: ['static'],
	scripts: [
		{
			src: 'https://buttons.github.io/buttons.js',
			async: true,
			defer: true,
		}
	],
	themeConfig: {
		navbar: {
			logo: {
				alt: 'UX Guide by Aman Mittal Logo',
				src: 'img/ux-guide-by-aman-mittal-logo.svg',
			},
			// items: [
			// 	{
			// 		to: '/get-started',
			// 		activeBasePath: 'pages',
			// 		label: 'Get Started',
			// 		position: 'right',
			// 	},
			// 	{
			// 		to: 'docs/welcome',
			// 		activeBasePath: 'welcome',
			// 		label: 'Docs',
			// 		position: 'right',
			// 	},
			// 	{
			// 		to: '/blog',
			// 		activeBasePath: 'blog',
			// 		label: 'Blog',
			// 		position: 'right',
			// 	},
			// 	{
			// 		to: '/storybook/',
			// 		activeBasePath: 'storybook',
			// 		label: 'Storybook',
			// 		position: 'right',
			// 	},
			// 	{
			// 		to: '/sass',
			// 		activeBasePath: 'sass',
			// 		label: 'Sass',
			// 		position: 'right',
			// 	},
			// 	{
			// 		to: '/showcase',
			// 		activeBasePath: 'showcase',
			// 		label: 'Showcase',
			// 		position: 'right',
			// 	},
			// ],
		},

		// footer: {
		// 	style: 'dark',
		// 	links: [
		// 	  {
		// 		title: 'Docs',
		// 		items: [
		// 		  {
		// 			label: 'Tutorial',
		// 			to: '/docs/intro',
		// 		  },
		// 		],
		// 	  },
		// 	  {
		// 		title: 'Community',
		// 		items: [
		// 		  {
		// 			label: 'Stack Overflow',
		// 			href: 'https://stackoverflow.com/questions/tagged/docusaurus',
		// 		  },
		// 		  {
		// 			label: 'Discord',
		// 			href: 'https://discordapp.com/invite/docusaurus',
		// 		  },
		// 		  {
		// 			label: 'Twitter',
		// 			href: 'https://twitter.com/docusaurus',
		// 		  },
		// 		],
		// 	  },
		// 	  {
		// 		title: 'More',
		// 		items: [
		// 		  {
		// 			label: 'Blog',
		// 			to: '/blog',
		// 		  },
		// 		  {
		// 			label: 'GitHub',
		// 			href: 'https://github.com/facebook/docusaurus',
		// 		  },
		// 		],
		// 	  },
		// 	],
		// 	copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
		//   },
		tableOfContents: {
			minHeadingLevel: 2,
			maxHeadingLevel: 5,
		  },
		prism: {
			theme: require('prism-react-renderer/themes/dracula'),
			additionalLanguages: ['php'],
		},
		algolia: {
			appId: 'CWB1S6U3C4',
			apiKey: 'cbae3fc769aee256328548eff1e91c1c',
			indexName: 'infinum_eightshift',
		},
		colorMode: {
			disableSwitch: true
		},
		trailingSlash: false
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					routeBasePath: '/', // Serve the docs at the site's root
					sidebarPath: require.resolve('./sidebars.js'),
				},
				gtag: {
					trackingID: 'GTM-P5GG5DH',
					anonymizeIP: true,
				},
				theme: {
					customCss: require.resolve('./src/scss/application.scss'),
				},
				blog: false, 
				// 	{
				// 	blogTitle: 'Tutorials and articles about Eightshift development kit',
				// 	blogDescription: 'Tutorials and articles about Eightshift development kit',
				// 	blogSidebarTitle: 'Latest posts',
				// 	showReadingTime: true,
				// 	postsPerPage: 6,
				// },
				sitemap: {
					changefreq: 'weekly',
					priority: 0.5,
				},
			},
		],
	],
	plugins: [
		'docusaurus-plugin-sass',
	],
	customFields: {
		keywords: [
			'wordpress tools',
			 'development tools',
			 'wordpress project',
			 'Gutenberg blocks',
			 'development kit',
			 'wordpress kit'
		],
		image: 'img-why-boilerplate@2x.png',
	}
};
