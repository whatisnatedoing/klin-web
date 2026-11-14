module.exports = [
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/apps/web/app/opengraph-image--metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/opengraph-image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
;
;
const imageModule = {
    alt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["alt"],
    contentType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentType"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"]
};
async function __TURBOPACK__default__export__(props) {
    const { __metadata_id__: _, ...params } = await props.params;
    const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fillMetadataSegment"])("/", params, "opengraph-image", false);
    function getImageMetadata(imageMetadata, idParam) {
        const data = {
            alt: imageMetadata.alt,
            type: imageMetadata.contentType || 'image/png',
            url: imageUrl + (idParam ? '/' + idParam : '') + '?' + "d0f8f6f0d31e3f62"
        };
        const { size } = imageMetadata;
        if (size) {
            data.width = size.width;
            data.height = size.height;
        }
        return data;
    }
    return [
        getImageMetadata(imageModule, '')
    ];
}
}),
"[project]/apps/web/app/opengraph-image--metadata.js [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/app/opengraph-image--metadata.js [app-rsc] (ecmascript)"));
}),
"[project]/apps/web/app/opengraph-image.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alt",
    ()=>alt,
    "contentType",
    ()=>contentType,
    "default",
    ()=>Image,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/og.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$brand$2d$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/brand-paths.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const alt = 'Klin. Love, in all the little things.';
const size = {
    width: 1200,
    height: 630
};
const contentType = 'image/png';
async function Image() {
    const dir = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), 'app/fonts');
    const [serif, sans] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(dir, 'dm-serif-display-latin-400-normal.woff')),
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(dir, 'dm-sans-latin-500-normal.woff'))
    ]);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImageResponse"](/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            height: '100%',
            background: '#F6EDE7',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 96px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "560",
                height: Math.round(560 * 348 / 952),
                viewBox: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$brand$2d$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WORDMARK_VIEWBOX"],
                fill: "none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$brand$2d$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WORDMARK_PATH"],
                    fill: "#17151C"
                }, void 0, false, {
                    fileName: "[project]/apps/web/app/opengraph-image.tsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/app/opengraph-image.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: 'DM Serif Display',
                    fontSize: 52,
                    color: '#17151C',
                    marginTop: 56
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].tagline
            }, void 0, false, {
                fileName: "[project]/apps/web/app/opengraph-image.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/app/opengraph-image.tsx",
        lineNumber: 19,
        columnNumber: 7
    }, this), {
        ...size,
        fonts: [
            {
                name: 'DM Serif Display',
                data: serif,
                style: 'normal',
                weight: 400
            },
            {
                name: 'DM Sans',
                data: sans,
                style: 'normal',
                weight: 500
            }
        ]
    });
}
}),
"[project]/apps/web/components/brand-paths.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Generated by the logo build from docs/branding/logo. Do not edit by hand.
__turbopack_context__.s([
    "SYMBOL_PATH",
    ()=>SYMBOL_PATH,
    "SYMBOL_VIEWBOX",
    ()=>SYMBOL_VIEWBOX,
    "WORDMARK_PATH",
    ()=>WORDMARK_PATH,
    "WORDMARK_VIEWBOX",
    ()=>WORDMARK_VIEWBOX
]);
const WORDMARK_VIEWBOX = '0 0 952 348';
const WORDMARK_PATH = 'M40 0L0 40L0 87L40 87L0 127L0 174L40 174L0 214L0 261L40 261L0 301L0 348L57 348L97 308L97 261L154 261L194 221L194 261L234 261L194 301L194 348L251 348L291 308L291 261L251 261L291 221L291 174L234 174L194 214L194 174L154 174L194 134L194 87L251 87L291 47L291 0L234 0L194 40L194 87L137 87L97 127L97 87L57 87L97 47L97 0ZM403 0L460 0L460 221L420 261L500 261L500 308L460 348L363 348L363 301L403 261L363 261L363 40ZM574 0L631 0L631 47L591 87L534 87L534 40ZM582 103L631 103L631 300L583 348L534 348L534 151ZM735 103L888 103L952 167L952 300L904 348L855 348L855 190L768 190L768 300L720 348L671 348L671 167Z';
const SYMBOL_VIEWBOX = '0 0 291 348';
const SYMBOL_PATH = 'M40 0L0 40L0 87L40 87L0 127L0 174L40 174L0 214L0 261L40 261L0 301L0 348L57 348L97 308L97 261L154 261L194 221L194 261L234 261L194 301L194 348L251 348L291 308L291 261L251 261L291 221L291 174L234 174L194 214L194 174L154 174L194 134L194 87L251 87L291 47L291 0L234 0L194 40L194 87L137 87L97 127L97 87L57 87L97 47L97 0Z';
}),
"[project]/apps/web/lib/site.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasStoreLinks",
    ()=>hasStoreLinks,
    "nav",
    ()=>nav,
    "primaryCta",
    ()=>primaryCta,
    "site",
    ()=>site
]);
const state = process.env.NEXT_PUBLIC_LAUNCH_STATE ?? 'prelaunch';
const site = {
    name: 'Klin',
    tagline: 'Love, in all the little things.',
    description: 'Klin brings your relationship closer with a private space to talk, share memories, make plans and keep the moments that matter.',
    url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, ''),
    launchState: state,
    appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL || '',
    playStoreUrl: process.env.NEXT_PUBLIC_PLAY_STORE_URL || '',
    betaUrl: process.env.NEXT_PUBLIC_BETA_URL || '',
    supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || '',
    // Legal pages stay noindex until counsel has reviewed them.
    legalReviewed: process.env.NEXT_PUBLIC_LEGAL_REVIEWED === '1',
    legalUpdated: '13 November 2026',
    // Credit shown in the footer. Add NEXT_PUBLIC_BUILDER_URL to make it a link.
    builder: {
        credit: 'Built by Danbury',
        url: process.env.NEXT_PUBLIC_BUILDER_URL || ''
    },
    social: {
        instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || '',
        x: process.env.NEXT_PUBLIC_SOCIAL_X || '',
        tiktok: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK || ''
    }
};
const hasStoreLinks = ()=>Boolean(site.appStoreUrl || site.playStoreUrl);
function primaryCta() {
    switch(site.launchState){
        case 'live':
            return {
                label: 'Get started',
                href: '#download'
            };
        case 'beta':
            return {
                label: 'Join the beta',
                href: '#download'
            };
        default:
            return {
                label: 'Join the waitlist',
                href: '#download'
            };
    }
}
const nav = [
    {
        label: 'About',
        href: '/about'
    },
    {
        label: 'Features',
        href: '/features'
    },
    {
        label: 'Support',
        href: '/support'
    }
];
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0me6ffkl4a1gh._.js.map