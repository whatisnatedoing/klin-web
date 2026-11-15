module.exports = [
"[turbopack-node]/transforms/postcss.ts?config=[project]/postcss.config.cjs { CONFIG => \"[project]/postcss.config.cjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/[root-of-the-server]__0-br10f939hu2._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts?config=[project]/postcss.config.cjs { CONFIG => \"[project]/postcss.config.cjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];