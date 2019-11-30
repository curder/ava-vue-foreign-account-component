function page(path) {
    return () => import( /* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
    { path: '/', name: 'home', component: page('Home.vue') },

    { path: '/foreign-account', name: 'foreign-account', component: page('Index.vue') },
    { path: '/foreign-real-account', name: 'foreign-real-account', component: page('Real.vue') },
    { path: '/foreign-demo-account', name: 'foreign-demo-account', component: page('Demo.vue') },
    { path: '/foreign-login-account', name: 'foreign-login-account', component: page('Login.vue') },

    { path: '*', component: page('errors/404.vue') }
]
