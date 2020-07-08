const mobile = [
	{
		path: '/',
		redirect: {
			name: 'Welcome',
		},
		component: (resolve) => require(['@/views/mobile/layout'], resolve),
		children: [
			// {
			//   path: '/',
			//   component: (resolve) => require(['@/views/Pc/Welcome/Welcome'], resolve),
			//   meta: { requiresAuth: true } // 需驗證
			// },
			{
				path: '/welcome',
				name: 'Welcome',
				meta: {},
				component: (resolve) => require(['@/views/mobile/Welcome/Welcome'], resolve),
				meta: { requiresAuth: true }, // 需驗證
			},
			// {
			//   path: '/resume',
			//   name: 'Resume',
			//   meta: {},
			//   component: (resolve) => require(['@/views/mobile/Resume/Resume'], resolve),
			//   meta: { requiresAuth: true } // 需驗證
			// },
			// {
			//   path: '/uicomponents',
			//   name: 'UIComponents',
			//   meta: {},
			//   component: (resolve) => require(['@/views/mobile/UIComponents/UIComponents'], resolve),
			//   meta: { requiresAuth: true } // 需驗證
			// },
			// {
			//   path: '/projects',
			//   name: 'Projects',
			//   meta: {},
			//   component: (resolve) => require(['@/views/mobile/Projects/Projects'], resolve),
			//   meta: { requiresAuth: true } // 需驗證
			// },
			// {
			//   path: '/contact',
			//   name: 'Contact',
			//   meta: {},
			//   component: (resolve) => require(['@/views/mobile/Contact/Contact'], resolve),
			//   meta: { requiresAuth: true } // 需驗證
			// }
		],
	},
]

export default mobile
