// nuxt.config.ts

export default {
    buildModules: [
        [
            '@nuxtjs/router',
            {
                path: './',
                fileName: 'router.ts',
            },
        ],
    ],
}