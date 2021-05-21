module.exports = {
    entry: {
        fetchPolyfills: "whatwg-fetch",
        objectAssignPolyfill: "es6-object-assign/auto.js",
        homeBundle: "./TypeScripts/app/HomeApp.tsx",
        adminBundle: "./TypeScripts/app/AdminApp.tsx",
        userRequest:"./TypeScripts/app/UserRequestApp.tsx",
        bundle: "./TypeScripts/app/App.tsx"
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/Scripts/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "none",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "redux": "Redux",
        "react-redux": "ReactRedux",
       // "react-datepicker": "DatePicker"
    }
};