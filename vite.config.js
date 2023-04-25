export default {
    resolve: {
        alias: {
            vue: '@vue/compat'
        }
    },
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    compatConfig: {
                        MODE: 2
                    }
                }
            }
        })
    ]
}