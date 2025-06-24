"use strict";
exports.id = 782;
exports.ids = [782];
exports.modules = {

/***/ 277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Contact_ContactIcons)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons/faGithub"
var faGithub_ = __webpack_require__(8513);
// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons/faFacebookF"
var faFacebookF_ = __webpack_require__(843);
// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons/faInstagram"
var faInstagram_ = __webpack_require__(1125);
// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons/faLinkedinIn"
var faLinkedinIn_ = __webpack_require__(4534);
// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons/faAngellist"
var faAngellist_ = __webpack_require__(357);
// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons/faTwitter"
var faTwitter_ = __webpack_require__(4522);
// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons/faEnvelope"
var faEnvelope_ = __webpack_require__(2705);
;// CONCATENATED MODULE: ./src/data/contact.js







// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.
const data = [
    {
        link: "https://github.com/shashankreddy151",
        label: "Github",
        icon: faGithub_.faGithub
    },
    {
        link: "https://www.facebook.com/shashankreddy151/",
        label: "Facebook",
        icon: faFacebookF_.faFacebookF
    },
    {
        link: "https://www.instagram.com/hank.kallem/",
        label: "Instagram",
        icon: faInstagram_.faInstagram
    },
    {
        link: "https://www.linkedin.com/in/shashank-reddy-kallem/",
        label: "LinkedIn",
        icon: faLinkedinIn_.faLinkedinIn
    },
    {
        link: "https://angel.co",
        label: "Angel List",
        icon: faAngellist_.faAngellist
    },
    {
        link: "https://twitter.com",
        label: "Twitter",
        icon: faTwitter_.faTwitter
    },
    {
        link: "mailto:skallem@outlook.com",
        label: "Email",
        icon: faEnvelope_.faEnvelope
    }
];
/* harmony default export */ const contact = (data);

;// CONCATENATED MODULE: ./src/components/Contact/ContactIcons.js




const ContactIcons = ()=>/*#__PURE__*/ jsx_runtime.jsx("ul", {
        className: "icons",
        children: contact.map((s)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                    href: s.link,
                    "aria-label": s.label,
                    children: /*#__PURE__*/ jsx_runtime.jsx(react_fontawesome_.FontAwesomeIcon, {
                        icon: s.icon
                    })
                })
            }, s.label))
    });
/* harmony default export */ const Contact_ContactIcons = (ContactIcons);


/***/ }),

/***/ 9782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Main)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(3082);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);
;// CONCATENATED MODULE: ./src/components/Template/Analytics.js


const { NODE_ENV , REACT_APP_GA_TRACKING_ID  } = process.env;
if (NODE_ENV === "production") {
    external_react_ga_default().initialize(REACT_APP_GA_TRACKING_ID);
}
const Analytics = ()=>{
    (0,external_react_.useEffect)(()=>{
        if (NODE_ENV === "production") {
            external_react_ga_default().set({
                page: window.location.pathname
            });
            external_react_ga_default().pageview(window.location.pathname);
        }
    }, []);
    return null;
};
/* harmony default export */ const Template_Analytics = (Analytics);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/routes.js
const routes = [
    {
        index: true,
        label: "SHASHANK OPEN NOTEBOOK",
        path: "/"
    },
    {
        label: "About",
        path: "/about"
    },
    {
        label: "Resume",
        path: "/resume"
    },
    {
        label: "Projects",
        path: "/projects"
    },
    {
        label: "Stats",
        path: "/stats"
    },
    {
        label: "Contact",
        path: "/contact"
    }
];
/* harmony default export */ const data_routes = (routes);

;// CONCATENATED MODULE: ./src/components/Template/Hamburger.js




const Menu = /*#__PURE__*/ (0,external_react_.lazy)(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 993, 23)));
const Hamburger = ()=>{
    const [open, setOpen] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "hamburger-container",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("nav", {
                className: "main",
                id: "hambuger-nav",
                children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                    children: open ? /*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: "menu close-menu",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            onClick: ()=>setOpen(!open),
                            className: "menu-hover",
                            children: "✕"
                        })
                    }) : /*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: "menu open-menu",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            onClick: ()=>setOpen(!open),
                            className: "menu-hover",
                            children: "☰"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(external_react_.Suspense, {
                fallback: /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {}),
                children: /*#__PURE__*/ jsx_runtime.jsx(Menu, {
                    right: true,
                    isOpen: open,
                    children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                        className: "hamburger-ul",
                        children: data_routes.map((l)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: l.path,
                                    onClick: ()=>setOpen(!open),
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: l.index && "index-li",
                                        children: l.label
                                    })
                                })
                            }, l.label))
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Template_Hamburger = (Hamburger);

;// CONCATENATED MODULE: ./src/components/Template/Navigation.js





// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        id: "header",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "index-link",
                children: data_routes.filter((l)=>l.index).map((l)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: l.path,
                        children: l.label
                    }, l.label))
            }),
            /*#__PURE__*/ jsx_runtime.jsx("nav", {
                className: "links",
                children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                    children: data_routes.filter((l)=>!l.index).map((l)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: l.path,
                                children: l.label
                            })
                        }, l.label))
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Template_Hamburger, {})
        ]
    });
/* harmony default export */ const Template_Navigation = (Navigation);

// EXTERNAL MODULE: ./src/components/Contact/ContactIcons.js + 1 modules
var ContactIcons = __webpack_require__(277);
;// CONCATENATED MODULE: ./src/components/Template/SideBar.js




const { PUBLIC_URL  } = process.env; // set automatically from package.json:homepage
const SideBar = ()=>{
    // Use a state to determine if we're on the client
    const [isClient, setIsClient] = external_react_default().useState(false);
    external_react_default().useEffect(()=>{
        setIsClient(true);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        id: "sidebar",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                id: "intro",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/",
                        className: "logo",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: `${PUBLIC_URL}/images/me.jpg`,
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                children: "Shashank Reddy"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "mailto:shashankreddy151@outlook.com",
                                    children: "shashankkallem@outlook.com"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "blurb",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        children: "About the author"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        children: [
                            "Shashank Reddy is a graduate with a Master’s degree in Data Science from the",
                            " ",
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "https://computing.njit.edu/",
                                children: "Ying Wu College of Computing"
                            }),
                            " at the",
                            " ",
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "https://www.njit.edu/",
                                children: "New Jersey Institute of Technology"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                        className: "actions",
                        children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                            children: isClient && !window.location.pathname.includes("/resume") ? /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/resume",
                                className: "button",
                                children: "Learn More"
                            }) : /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/about",
                                className: "button",
                                children: "About Me"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                id: "footer",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(ContactIcons/* default */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        className: "copyright",
                        children: [
                            "\xa9 Shashank Reddy Kallem ",
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/",
                                children: "ShashankReddy.com"
                            }),
                            "."
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Template_SideBar = (SideBar);

;// CONCATENATED MODULE: ./src/components/Template/ScrollToTop.js

// See https://reacttraining.com/react-router/web/guides/scroll-restoration/scroll-to-top
const ScrollToTop = ()=>{
    (0,external_react_.useEffect)(()=>{
        window.scrollTo(0, 0);
    }, []);
    return null;
};
/* harmony default export */ const Template_ScrollToTop = (ScrollToTop);

;// CONCATENATED MODULE: ./src/layouts/Main.js








const Main = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Template_Analytics, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Template_ScrollToTop, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: props.title ? `${props.title} | Shashank Reddy` : "Shashank Reddy"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: props.description
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                id: "wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Template_Navigation, {}),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        id: "main",
                        children: props.children
                    }),
                    props.fullPage ? null : /*#__PURE__*/ jsx_runtime.jsx(Template_SideBar, {})
                ]
            })
        ]
    });
Main.propTypes = {
    children: external_prop_types_default().oneOfType([
        external_prop_types_default().arrayOf((external_prop_types_default()).node),
        (external_prop_types_default()).node
    ]),
    fullPage: (external_prop_types_default()).bool,
    title: (external_prop_types_default()).string,
    description: (external_prop_types_default()).string
};
Main.defaultProps = {
    children: null,
    fullPage: false,
    title: null,
    description: "Shashank Reddy's personal website."
};
/* harmony default export */ const layouts_Main = (Main);


/***/ })

};
;