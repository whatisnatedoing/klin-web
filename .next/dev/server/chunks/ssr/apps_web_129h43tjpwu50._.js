module.exports = [
"[project]/apps/web/components/sections/DailyDemo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DailyDemo",
    ()=>DailyDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$content$2f$copy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/content/copy.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const qs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$content$2f$copy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sections"].daily.questions;
function DailyDemo() {
    const [i, setI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mine, setMine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [revealed, setRevealed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const current = qs[i];
    const ready = mine.trim().length > 0;
    const next = ()=>{
        setI((v)=>(v + 1) % qs.length);
        setMine('');
        setRevealed(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: `${id}-q`,
                className: "t-title1 max-w-[22ch]",
                children: current.q
            }, void 0, false, {
                fileName: "[project]/apps/web/components/sections/DailyDemo.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 grid gap-10 md:grid-cols-2 md:gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-l-[3px] border-rose-fill pl-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: `${id}-a`,
                                className: "t-caption block",
                                children: "You"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/sections/DailyDemo.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: `${id}-a`,
                                "aria-describedby": `${id}-q`,
                                rows: 3,
                                value: mine,
                                onChange: (e)=>setMine(e.target.value),
                                readOnly: revealed,
                                maxLength: 240,
                                placeholder: "Write something, anything",
                                className: "mt-2 block w-full resize-none border-0 bg-transparent p-0 text-[1.1875rem] leading-8 text-text-primary placeholder:text-text-tertiary focus:outline-none focus-visible:outline-none"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/sections/DailyDemo.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            !revealed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn btn-primary mt-4",
                                disabled: !ready,
                                onClick: ()=>setRevealed(true),
                                children: "Show Sam’s answer"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/sections/DailyDemo.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            !ready && !revealed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "t-small mt-3 text-text-secondary",
                                children: "Answer first. That’s the rule."
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/sections/DailyDemo.tsx",
                                lineNumber: 49,
                                columnNumber: 35
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/sections/DailyDemo.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-l-[3px] border-sage-fill pl-5",
                        "aria-live": "polite",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "t-caption",
                                children: "Sam"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/sections/DailyDemo.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            revealed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fade-in mt-2 text-[1.1875rem] leading-8",
                                children: current.theirs
                            }, "open", false, {
                                fileName: "[project]/apps/web/components/sections/DailyDemo.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-[1.1875rem] leading-8 text-text-secondary",
                                children: ready ? 'Sam has answered. Ready when you are.' : 'Sam has answered. Yours first.'
                            }, "shut", false, {
                                fileName: "[project]/apps/web/components/sections/DailyDemo.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/sections/DailyDemo.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/sections/DailyDemo.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 flex flex-wrap items-center gap-x-6 gap-y-2",
                children: [
                    revealed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-medium",
                        children: "That’s today’s question done."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/sections/DailyDemo.tsx",
                        lineNumber: 65,
                        columnNumber: 22
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: next,
                        className: "link t-small bg-transparent p-0",
                        children: "Try a different question"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/sections/DailyDemo.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "t-caption",
                        children: "This demo stays on your device. Sam’s answers are made up."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/sections/DailyDemo.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/sections/DailyDemo.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/sections/DailyDemo.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/sections/Tour.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tour",
    ()=>Tour
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function Tour({ steps }) {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const els = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!('IntersectionObserver' in window)) return;
        const io = new IntersectionObserver((entries)=>entries.forEach((e)=>{
                if (e.isIntersecting) setActive(Number(e.target.dataset.i));
            }), {
            rootMargin: '-45% 0px -45% 0px'
        });
        els.current.forEach((el)=>el && io.observe(el));
        return ()=>io.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "tour",
        "aria-label": "What is inside Klin",
        className: "wrap grid gap-x-8 lg:grid-cols-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-6",
                children: steps.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        "data-i": i,
                        ref: (el)=>{
                            els.current[i] = el;
                        },
                        className: "flex flex-col justify-center py-16 md:py-24 lg:min-h-[80vh]",
                        children: [
                            s.text,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "aria-hidden": "true",
                                className: "stage mx-auto mt-12 grid w-full max-w-sm place-items-center py-10 [--s:0.72] lg:hidden",
                                style: {
                                    backgroundColor: `var(--${s.tone}-fill)`
                                },
                                children: s.screen
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/sections/Tour.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.id, true, {
                        fileName: "[project]/apps/web/components/sections/Tour.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/components/sections/Tour.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "hidden lg:col-span-6 lg:col-start-7 lg:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 grid h-screen place-items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stage absolute inset-y-[9vh] left-[8%] right-0",
                            style: {
                                backgroundColor: `var(--${steps[active].tone}-fill)`
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/sections/Tour.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative grid place-items-center [--s:0.8] [@media(max-height:780px)]:[--s:0.64]",
                            children: steps.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-active": i === active,
                                    className: "tour-screen col-start-1 row-start-1",
                                    children: s.screen
                                }, s.id, false, {
                                    fileName: "[project]/apps/web/components/sections/Tour.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/sections/Tour.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/sections/Tour.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/sections/Tour.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/sections/Tour.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/sections/WaitlistForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WaitlistForm",
    ()=>WaitlistForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function WaitlistForm({ label = 'Join the waitlist' }) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        kind: 'idle'
    });
    async function onSubmit(e) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        setState({
            kind: 'sending'
        });
        try {
            const res = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: form.get('email'),
                    company: form.get('company')
                })
            });
            if (res.ok) return setState({
                kind: 'done'
            });
            const body = await res.json().catch(()=>({}));
            setState({
                kind: 'error',
                message: body.error ?? 'That did not go through. Try again in a minute.'
            });
        } catch  {
            setState({
                kind: 'error',
                message: 'You seem to be offline. Try again when you are back.'
            });
        }
    }
    if (state.kind === 'done') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            role: "status",
            className: "t-lede",
            children: "Got it. We will email you once, when Klin opens."
        }, void 0, false, {
            fileName: "[project]/apps/web/components/sections/WaitlistForm.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: onSubmit,
        noValidate: true,
        className: "max-w-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "waitlist-email",
                className: "t-small font-medium",
                children: "Your email"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/sections/WaitlistForm.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex flex-col gap-3 sm:flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "waitlist-email",
                        name: "email",
                        type: "email",
                        autoComplete: "email",
                        required: true,
                        className: "field",
                        placeholder: "you@example.com",
                        "aria-describedby": "waitlist-note"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/sections/WaitlistForm.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "company",
                        tabIndex: -1,
                        autoComplete: "off",
                        "aria-hidden": "true",
                        className: "absolute left-[-9999px] h-0 w-0 opacity-0"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/sections/WaitlistForm.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "btn btn-primary shrink-0",
                        disabled: state.kind === 'sending',
                        children: state.kind === 'sending' ? 'Sending' : label
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/sections/WaitlistForm.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/sections/WaitlistForm.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: "waitlist-note",
                className: "t-caption mt-3",
                children: "One email when Klin opens. Nothing else, and you can unsubscribe in it."
            }, void 0, false, {
                fileName: "[project]/apps/web/components/sections/WaitlistForm.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            state.kind === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "t-small mt-3 text-status-error-text",
                children: state.message
            }, void 0, false, {
                fileName: "[project]/apps/web/components/sections/WaitlistForm.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/sections/WaitlistForm.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/content/copy.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// All marketing copy lives here so tone can be reviewed in one place against docs/branding/design-system.md §10.
// Every factual claim is tracked in docs/branding/claims-register.md and must be true at launch.
__turbopack_context__.s([
    "faqs",
    ()=>faqs,
    "featureGroups",
    ()=>featureGroups,
    "hero",
    ()=>hero,
    "sections",
    ()=>sections
]);
const hero = {
    headline: 'Love, in all the little things.',
    support: 'Klin brings your relationship closer with a private space to talk, share memories, make plans and keep the moments that matter.',
    secondary: {
        label: 'Explore Klin',
        href: '#little-world'
    }
};
const sections = {
    world: {
        title: 'A small, private place for the two of you.',
        body: [
            'Klin is made for two people and no one else. There is no feed, no followers and nothing to perform. Just you, your person and whatever you decide to keep here.',
            'Only the two of you can open what is inside your space.'
        ]
    },
    chat: {
        title: 'Conversations that bring you closer.',
        body: 'Talk the way you already do: short messages, photos, voice notes and the occasional long one. Replies, reactions and read receipts are there when you want them. When typing is not enough, call.',
        facts: [
            [
                'Messages',
                'Text, photos and video, with replies, reactions, edits and search.'
            ],
            [
                'Voice notes',
                'For when it is easier to say it out loud.'
            ],
            [
                'Calls',
                'Voice or video, one to one, from the same screen.'
            ]
        ]
    },
    memories: {
        title: 'Memories worth keeping.',
        body: 'Save a photo with a few words, the date and where you were. Sort them into albums, find them again by year or by place, and look back on a monthly recap when you feel like it.'
    },
    calendar: {
        title: 'A calendar for two.',
        body: 'Dates, birthdays, trips and the ordinary Tuesday you do not want to forget. Mark an event as yours alone or as shared, and ask for a yes or a maybe.',
        kinds: [
            'Date nights',
            'Birthdays and anniversaries',
            'Trips',
            'Reminders for small things',
            'Events only you can see'
        ]
    },
    daily: {
        title: 'Little things, every day.',
        body: 'One question a day. You each answer on your own, and the answers appear together once you have both written yours. There are no scores. Skip a day and nothing happens.',
        questions: [
            {
                q: 'What is something small that made you smile this week?',
                theirs: 'That you remembered the name of my dentist’s receptionist.'
            },
            {
                q: 'Which ordinary day with me would you relive?',
                theirs: 'That slow Sunday when the power went out and we ate cereal by candlelight.'
            },
            {
                q: 'What did you need to hear this week that nobody said?',
                theirs: 'That I am allowed to rest without earning it first.'
            }
        ]
    },
    letters: {
        title: 'Letters and shared journals.',
        body: 'Write a letter now, or set it to arrive on your anniversary. Keep a private diary that is only yours, and a shared one for the things you want to remember together.',
        letter: {
            salutation: 'Sam,',
            paragraphs: [
                'You left a note in my coat pocket again. I found it at the bus stop and read it twice before I got on.',
                'I am not going to tell you what it did to my day, but I will be quietly smug until Friday.'
            ],
            closing: 'Yours,',
            from: 'A.',
            arrives: 'Arrives on 14 February'
        }
    },
    ideas: {
        title: 'Date ideas and bucket lists.',
        body: 'Stuck on what to do on Saturday? Browse ideas for at home, outdoors, on a budget or across a few time zones, and save the good ones to a list you share.',
        items: [
            {
                text: 'Cook something neither of you has tried',
                done: true
            },
            {
                text: 'A film night with one rule: no phones',
                done: false
            },
            {
                text: 'Walk somewhere you have never been',
                done: false
            },
            {
                text: 'Plan a visit, then count down the days',
                done: false
            },
            {
                text: 'Write down five places for one day',
                done: false
            }
        ]
    },
    assistant: {
        title: 'A little help finding the right words.',
        body: 'Sometimes you know what you feel but not how to say it. The assistant can suggest ways to start a conversation, draft an appreciation note or help you think through something difficult.',
        points: [
            'It only sees what you choose to show it.',
            'You can turn it off at any time.',
            'It is not a therapist and does not diagnose anything.'
        ],
        link: {
            label: 'How the assistant handles your data',
            href: '/privacy#assistant'
        }
    },
    how: {
        title: 'Three steps to get started.',
        steps: [
            {
                title: 'Create your Klin account',
                body: 'Your name, your birthday and a password, or sign in with Apple or Google. It takes a minute.'
            },
            {
                title: 'Invite your person',
                body: 'Send a code or a link. They look it over and join when they are ready.'
            },
            {
                title: 'Start building your shared world',
                body: 'Send a message, save a photo, plan a date. There is no right order.'
            }
        ]
    },
    story: {
        title: 'Because love lives in the little things.',
        body: [
            'Most relationships are not held together by anniversaries. They are held together by the text about the weather, the song sent at midnight, the photo of a bad sandwich you both still talk about.',
            'We made Klin because those things deserve somewhere to live that is not a crowded group chat or a camera roll nobody scrolls. It is a small space for two people. It will not ask you to perform and it will not keep score.',
            'It just keeps the little things close, so they are easy to find when you want them.'
        ]
    },
    preview: {
        title: 'A look inside.',
        captions: [
            'Home',
            'Chat',
            'Memories',
            'Calendar',
            'Today’s question',
            'A letter'
        ]
    },
    plus: {
        title: 'Free is enough to start.',
        body: 'Klin Plus is there if you want more room. Nothing is charged without your confirmation, and prices appear in the app before you pay, in your own currency.',
        rows: [
            [
                'Pairing and messages',
                'Included',
                'Included'
            ],
            [
                'Memories',
                'A basic vault',
                'More storage and advanced recaps'
            ],
            [
                'Calendar',
                'Shared calendar',
                'Advanced reminders'
            ],
            [
                'Daily questions',
                'One a day',
                'One a day, plus premium activities'
            ],
            [
                'Journaling',
                'Basic journaling',
                'Extended diary'
            ],
            [
                'Assistant',
                'A few messages a day',
                'A higher daily limit'
            ],
            [
                'Anniversaries',
                'Milestones and countdowns',
                'Anniversary experiences'
            ],
            [
                'Look and feel',
                'Light and dark',
                'Custom themes'
            ]
        ]
    },
    download: {
        title: 'Your little world is waiting.',
        prelaunch: 'Klin is not out yet. We will open the doors soon.'
    }
};
const faqs = [
    {
        q: 'What is Klin?',
        a: 'Klin is a private app for two people. Talk, share photos and videos, keep memories, plan dates, write letters and keep journals, all in one shared space.'
    },
    {
        q: 'Is Klin free?',
        a: 'Yes, to start. Free covers pairing, messaging, a basic memory vault, the shared calendar, daily questions and basic journaling. Klin Plus adds more room and some extras.'
    },
    {
        q: 'How do I invite my partner?',
        a: 'Create your space and Klin gives you a code and a link. Send either one. Your partner signs up or logs in, looks over the invitation and chooses to join. Each invitation works once and expires after seven days.'
    },
    {
        q: 'Can we use Klin long-distance?',
        a: 'Yes. Klin shows each of you the other’s local time, counts down to your next visit, suggests things to do apart and can schedule messages and letters to arrive at the right moment.'
    },
    {
        q: 'Is our information private?',
        a: 'Only the two people in a space can open its messages, photos, memories and shared journals. Private diary entries and private mood notes are visible only to the person who wrote them. Your data is encrypted in transit and at rest. Klin is not end-to-end encrypted, which means our servers process your content to run the app, and we would rather tell you that plainly. Klin’s admin tools show account details, not your conversations. The Privacy page has the full detail.'
    },
    {
        q: 'Can I use Klin on Android and iPhone?',
        a: 'Yes. Klin is one app, built for both iPhone and Android.'
    },
    {
        q: 'Can I leave a relationship space?',
        a: 'Yes, whenever you like. Klin shows you exactly what happens first. Shared items become read-only for 30 days so you can export them, and your private diary and mood notes stay yours.'
    },
    {
        q: 'What is Klin Plus?',
        a: 'An optional subscription that gives you more storage, advanced recaps and reminders, custom themes, a higher daily limit for the assistant and anniversary experiences. If either of you subscribes, it covers both of you.'
    },
    {
        q: 'Can I delete my account?',
        a: 'Yes. Go to Profile, then Account, then Delete account. You confirm with your password, and there is a 14 day window to change your mind before your data is removed. Subscriptions are managed in the App Store or Google Play and are not cancelled automatically.'
    }
];
const featureGroups = [
    {
        title: 'Talk',
        items: [
            [
                'Private chat',
                'Messages, photos, video and voice notes, with replies, reactions, edits, read receipts and search.'
            ],
            [
                'Calls',
                'Voice and video calls between the two of you, with a call history.'
            ],
            [
                'Little appreciations',
                'Send a quick thank-you without opening the whole conversation.'
            ]
        ]
    },
    {
        title: 'Keep',
        items: [
            [
                'Memory vault',
                'Photos and videos with captions, dates and places, in albums, by year or by event.'
            ],
            [
                'Recaps',
                'A monthly look back, and a longer one on your anniversary.'
            ],
            [
                'Timeline',
                'Memories, milestones and finished plans in the order they happened.'
            ],
            [
                'Our places',
                'The restaurants, trips and corners that mean something to you.'
            ]
        ]
    },
    {
        title: 'Plan',
        items: [
            [
                'Shared calendar',
                'Dates, birthdays, trips and reminders. Shared or just yours.'
            ],
            [
                'Milestones',
                'Anniversaries, first dates and countdowns to the next time you see each other.'
            ],
            [
                'Shared lists',
                'Shopping, packing and anything else you keep in two heads.'
            ],
            [
                'Bucket list',
                'Things you want to do together, with target dates, photos and a place to attach the memory once you have done them.'
            ]
        ]
    },
    {
        title: 'Write',
        items: [
            [
                'Love letters',
                'Write now, schedule for later, or surprise them. Drafts and an archive included.'
            ],
            [
                'Personal diary',
                'Private by default. Text and photos.'
            ],
            [
                'Shared diary',
                'Entries you both can read, with room to reply.'
            ],
            [
                'Little surprises',
                'Notes and reminders that arrive when you choose.'
            ]
        ]
    },
    {
        title: 'Reflect',
        items: [
            [
                'Daily question',
                'Answer on your own, then see each other’s answers together.'
            ],
            [
                'Mood check-ins',
                'Share how you are feeling, or keep it to yourself. Notes stay private unless you share them.'
            ],
            [
                'Streaks, if you want them',
                'Off by default. You decide what counts, and a missed day carries no penalty.'
            ],
            [
                'The assistant',
                'Help with words, ideas and reflection. It only sees what you show it.'
            ]
        ]
    },
    {
        title: 'Discover',
        items: [
            [
                'Date ideas',
                'At home, outdoors, on a budget, long-distance, movie nights, cooking challenges and more.'
            ],
            [
                'Shared music',
                'Songs with dedications and links to the service you already use.'
            ],
            [
                'Long-distance mode',
                'Two clocks, shared countdowns and ideas for dates apart.'
            ]
        ]
    }
];
}),
];

//# sourceMappingURL=apps_web_129h43tjpwu50._.js.map