const PC = [
  {
    path: '/',
    redirect: {
      name: 'Welcome',
    },
    component: (resolve) => require(['@/views/Pc/layout'], resolve),
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
        component: (resolve) => require(['@/views/Pc/Welcome/Welcome'], resolve),
        meta: { requiresAuth: true } // 需驗證
      },
      {
        path: '/resume',
        name: 'Resume',
        meta: {},
        component: (resolve) => require(['@/views/Pc/Resume/Resume'], resolve),
        meta: { requiresAuth: true } // 需驗證
      },
      {
        path: '/uicomponents',
        name: 'UIComponents',
        meta: {},
        component: (resolve) => require(['@/views/Pc/UIComponents/UIComponents'], resolve),
        meta: { requiresAuth: true } // 需驗證
      },
      {
        path: '/projects',
        name: 'Projects',
        meta: {},
        component: (resolve) => require(['@/views/Pc/Projects/Projects'], resolve),
        meta: { requiresAuth: true } // 需驗證
      },
      {
        path: '/contact',
        name: 'Contact',
        meta: {},
        component: (resolve) => require(['@/views/Pc/Contact/Contact'], resolve),
        meta: { requiresAuth: true } // 需驗證
      }
    ]
  }
]

export default PC
