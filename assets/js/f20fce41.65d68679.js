"use strict";(self.webpackChunkunoparty_docs=self.webpackChunkunoparty_docs||[]).push([[836],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),h=c(n),u=r,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return n?a.createElement(m,i(i({ref:e},p),{},{components:n})):a.createElement(m,i({ref:e},p))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},956:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},l="Enhanced Asset Info",c={unversionedId:"assets/enhanced-asset",id:"assets/enhanced-asset",title:"Enhanced Asset Info",description:"When initially setting or changing your asset's (token's) description, you can enable enhanced functionality (such as an token image and a longer description) by providing a URL to a specially formatted .json file (e.g. http://www.mydomain.com/foo.json) as the description. This allows the token owner to provide enhanced information to the token's holders, and enhances the user experience for these holders for wallet implementations that support this spec.",source:"@site/docs/assets/enhanced-asset.md",sourceDirName:"assets",slug:"/assets/enhanced-asset",permalink:"/docs/assets/enhanced-asset",editUrl:"https://github.com/terhnt/unoparty-docs/tree/main/packages/create-docusaurus/templates/shared/docs/assets/enhanced-asset.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"intro",previous:{title:"An incencentivization token",permalink:"/docs/what-is-unoparty/An-incencentivization-token"},next:{title:"Enhanced Feed Info",permalink:"/docs/assets/enhanced-feed"}},p={},d=[{value:"Token Info URL format",id:"token-info-url-format",level:2},{value:"Token Info JSON format",id:"token-info-json-format",level:2},{value:"Examples",id:"examples",level:2},{value:"Other Topics",id:"other-topics",level:2},{value:"Validity and refreshing",id:"validity-and-refreshing",level:3},{value:"Validating your JSON data",id:"validating-your-json-data",level:3}],h={toc:d};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"enhanced-asset-info"},"Enhanced Asset Info"),(0,o.kt)("p",null,"When initially setting or changing your asset's (token's) description, you can enable enhanced functionality (such as an token image and a longer description) by providing a URL to a specially formatted .json file (e.g. ",(0,o.kt)("a",{parentName:"p",href:"http://www.mydomain.com/foo.json"},"http://www.mydomain.com/foo.json"),") as the description. This allows the token owner to provide enhanced information to the token's holders, and enhances the user experience for these holders for wallet implementations that support this spec."),(0,o.kt)("h2",{id:"token-info-url-format"},"Token Info URL format"),(0,o.kt)("p",null,"The URL itself in the broadcast text field must conform to the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Must fully fit within the text field space allowed"),(0,o.kt)("li",{parentName:"ul"},'May or may not start with "http://" or "https://". If the URL does not start with either, "http://" is assumed'),(0,o.kt)("li",{parentName:"ul"},'Must end with ".json"'),(0,o.kt)("li",{parentName:"ul"},'It is recommended that the server return the JSON data with the correct MIME type set (e.g. "application/json")'),(0,o.kt)("li",{parentName:"ul"},"A HTTP 200 response code must be returned (redirects, e.g. 301, 302, etc. are not allowed)")),(0,o.kt)("h2",{id:"token-info-json-format"},"Token Info JSON format"),(0,o.kt)("p",null,"The JSON object/mapping the URL points to must contain the following data:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Status"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"asset")),(0,o.kt)("td",{parentName:"tr",align:null},"Required"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the token. Must match your token's name exactly. 24 characters max.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"description")),(0,o.kt)("td",{parentName:"tr",align:null},"Optional"),(0,o.kt)("td",{parentName:"tr",align:null},"A longish description about this token. 2048 characters max.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"image")),(0,o.kt)("td",{parentName:"tr",align:null},"Optional"),(0,o.kt)("td",{parentName:"tr",align:null},'A link a 48x48 PNG image to represent the token on the leaderboard and portfolio views. The text itself must be a valid URL that starts with "http://" or "https://" (100 characters max). The image the URL references must be in PNG format (the URL must end in .png). It must be 48x48, and it must use the RGB or RGBA color palette. If any of these are not correct, the system will reject it.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"image_large")),(0,o.kt)("td",{parentName:"tr",align:null},"Optional"),(0,o.kt)("td",{parentName:"tr",align:null},'A link to the full size PNG image to represent the asset. The text itself must be a valid URL that starts with "http://" or "https://" (100 characters max). The image the URL references must be in PNG format (the URL must end in .png). It must use the RGB or RGBA color palatte. If any of these are not correct, the system will reject it.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"website")),(0,o.kt)("td",{parentName:"tr",align:null},"Optional"),(0,o.kt)("td",{parentName:"tr",align:null},'A link to the website for the token. 100 characters max. Must be a valid URL that starts with "http://" or "https://"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"pgpsig")),(0,o.kt)("td",{parentName:"tr",align:null},"Optional"),(0,o.kt)("td",{parentName:"tr",align:null},'A link to a pgp signature text/file that will or can be used to sign messages by the issuer of this token. 100 characters max. Must be a valid URL that starts with "http://" or "https://"')))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Here's an example for a token called ",(0,o.kt)("strong",{parentName:"p"},"MYTOKEN:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    {\n        "asset": "MYTOKEN",\n        "description": "This is a description of MYTOKEN",\n        "image": "http://www.mysite.com/mytoken.png",\n        "image_large": "http://www.mysite.com/mytokenLarge.png",\n        "website": "http://www.mysite.com",\n        "pgpsig": "http://www.mysite.com/MYTOKEN.pgp"\n    }\n')),(0,o.kt)("h2",{id:"other-topics"},"Other Topics"),(0,o.kt)("h3",{id:"validity-and-refreshing"},"Validity and refreshing"),(0,o.kt)("p",null,"Every 30-60 minutes, the Unowallet system will query this URL provided to validate and fetch the necessary information. If the information you provided is reachable and valid (within a 1 second response time), your token's information will be enhanced based on this data. In order for this data file to be deemed as valid for a specific token/asset, there must have been either an initial issuance, or a description change transaction for that asset, and the text field of that description must have been set to the URL of ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/CounterpartyXCP/counterblock/master/counterblock/schemas/asset.schema.json"},"this")," JSON file. If the information you provided is reachable and valid (within a 5 second response time), your token's information will be enhanced based on this data. If it is not, unoblockkd will retry up to 2 additional times, over the next 30 or so minutes, and then give up until another transaction is made that changes the description field (it may be to the same URL, but another description change transaction is necessary to reinitialize the validity check by unoblockd)."),(0,o.kt)("h3",{id:"validating-your-json-data"},"Validating your JSON data"),(0,o.kt)("p",null,"Your JSON data must respect and validate against this JSON schema. If the validation fails on any level, unoblockd will not accept the data."),(0,o.kt)("p",null,"To check your data against this schema, go ",(0,o.kt)("a",{parentName:"p",href:"http://json-schema-validator.herokuapp.com/"},"here"),". Paste the schema from the link above into the Schema field, and place your example output into the Data field. Then click the Validate button"))}u.isMDXComponent=!0}}]);