(self.webpackChunkpersonal_portfolio=self.webpackChunkpersonal_portfolio||[]).push([[295],{295:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>E});var i=n(43),a=n(475),s=n(551),r=n(579);const c=e=>{let{data:t}=e;return(0,r.jsx)("article",{className:"degree-container",children:(0,r.jsxs)("header",{children:[(0,r.jsx)("h4",{className:"degree",children:t.degree}),(0,r.jsxs)("p",{className:"school",children:[(0,r.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},o=e=>{let{data:t}=e;return(0,r.jsxs)("div",{className:"education",children:[(0,r.jsx)("div",{className:"link-to",id:"education"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:"Education"})}),t.map((e=>(0,r.jsx)(c,{data:e},e.school)))]})};o.defaultProps={data:[]};const l=o;var u=n(446),d=n.n(u),h=n(574);const m=e=>{let{data:{name:t,position:n,url:i,startDate:a,endDate:s,summary:c,highlights:o}}=e;return(0,r.jsxs)("article",{className:"jobs-container",children:[(0,r.jsxs)("header",{children:[(0,r.jsxs)("h4",{children:[(0,r.jsx)("a",{href:i,children:t})," - ",n]}),(0,r.jsxs)("p",{className:"daterange",children:[" ",d()(a).format("MMMM YYYY")," -"," ",s?d()(s).format("MMMM YYYY"):"PRESENT"]})]}),c?(0,r.jsx)(h.Ay,{options:{overrides:{p:{props:{className:"summary"}}}},children:c}):null,o?(0,r.jsx)("ul",{className:"points",children:o.map((e=>(0,r.jsx)("li",{children:e},e)))}):null]})},g=e=>{let{data:t}=e;return(0,r.jsxs)("div",{className:"experience",children:[(0,r.jsx)("div",{className:"link-to",id:"experience"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:"Experience"})}),t.map((e=>(0,r.jsx)(m,{data:e},`${e.name}-${e.position}`)))]})};g.defaultProps={data:[]};const y=g,p=e=>{let{handleClick:t,active:n,label:i}=e;return(0,r.jsx)("button",{className:"skillbutton "+(n[i]?"skillbutton-active":""),type:"button",onClick:()=>t(i),children:i})},f=e=>{let{data:t,categories:n}=e;const{category:i,competency:a,title:s}=t,c={background:n.filter((e=>i.includes(e.name))).map((e=>e.color))[0]},o={...c,width:`${String(Math.min(100,Math.max(a/5*100,0)))}%`};return(0,r.jsxs)("div",{className:"skillbar clearfix",children:[(0,r.jsx)("div",{className:"skillbar-title",style:c,children:(0,r.jsx)("span",{children:s})}),(0,r.jsx)("div",{className:"skillbar-bar",style:o}),(0,r.jsxs)("div",{className:"skill-bar-percent",children:[a," / 5"]})]})};f.defaultProps={categories:[]};const v=f,b=e=>{let{skills:t,categories:n}=e;const a=Object.fromEntries([["All",!1]].concat(n.map((e=>{let{name:t}=e;return[t,!1]})))),[s,c]=(0,i.useState)(a),o=e=>{const t=Object.keys(s).reduce(((t,n)=>({...t,[n]:e===n&&!s[n]})),{});t.All=!Object.keys(s).some((e=>t[e])),c(t)};return(0,r.jsxs)("div",{className:"skills",children:[(0,r.jsx)("div",{className:"link-to",id:"skills"}),(0,r.jsxs)("div",{className:"title",children:[(0,r.jsx)("h3",{children:"Skills"}),(0,r.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,r.jsx)("div",{className:"skill-button-container",children:Object.keys(s).map((e=>(0,r.jsx)(p,{label:e,active:s,handleClick:o},e)))}),(0,r.jsx)("div",{className:"skill-row-container",children:(()=>{const e=Object.keys(s).reduce(((e,t)=>s[t]?t:e),"All");return t.sort(((e,t)=>{let n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((t=>"All"===e||t.category.includes(e))).map((e=>(0,r.jsx)(v,{categories:n,data:e},e.title)))})()})]})};b.defaultProps={skills:[],categories:[]};const D=b,j=e=>{let{data:t,last:n}=e;return(0,r.jsxs)("li",{className:"course-container",children:[(0,r.jsxs)("a",{href:t.link,children:[(0,r.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,r.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,r.jsx)("div",{className:"course-dot",children:(0,r.jsx)("p",{className:"course-name",children:" \u2022"})})]})};j.defaultProps={last:!1};const x=j,S=e=>e.sort(((e,t)=>{let n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map(((t,n)=>(0,r.jsx)(x,{data:t,last:n===e.length-1},t.title))),$=e=>{let{data:t}=e;return(0,r.jsxs)("div",{className:"courses",children:[(0,r.jsx)("div",{className:"link-to",id:"courses"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:"Selected Courses"})}),(0,r.jsx)("ul",{className:"course-list",children:S(t)})]})};$.defaultProps={data:[]};const M=$,k=()=>(0,r.jsxs)("div",{className:"references",children:[(0,r.jsx)("div",{className:"link-to",id:"references"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)(a.N_,{to:"/contact",children:(0,r.jsx)("h3",{children:"References are available upon request"})})})]}),w=[{title:"Applied Statistics",number:"MATH 611",link:"https://math.njit.edu/sites/math/files/Math%20661-111%20F22.pdf",university:"NJIT"},{title:"Deep Learning",number:"DS 677",link:"https://digitalcommons.njit.edu/cgi/viewcontent.cgi?article=1393&context=cs-syllabi",university:"NJIT"},{title:"Machine Learning",number:"DS 675",link:"https://digitalcommons.njit.edu/cgi/viewcontent.cgi?article=1013&context=ds-syllabi",university:"NJIT"},{title:"Introduction to Big Data",number:"DS 644",link:"https://digitalcommons.njit.edu/cgi/viewcontent.cgi?article=1389&context=cs-syllabi",university:"NJIT"},{title:"Artificial Intelligence",number:" CS 670",link:"https://digitalcommons.njit.edu/cgi/viewcontent.cgi?article=1455&context=cs-syllabi",university:"NJIT"},{title:"Data Analytics with R Program",number:"CS 636",link:"https://digitalcommons.njit.edu/cgi/viewcontent.cgi?article=1157&context=cs-syllabi",university:"NJIT"},{title:"Data Mining",number:"CS 634",link:"https://web.njit.edu/~hseuming/CS-634.html",university:"NJIT"},{title:"Web Systems Development",number:"IS 601",link:"https://digitalcommons.njit.edu/cgi/viewcontent.cgi?params=/context/info-syllabi/article/1130/&path_info=IS_601_852_202010.pdf",university:"NJIT"},{title:"Data Analytics for Info System",number:"IS 665",link:"https://digitalcommons.njit.edu/cgi/viewcontent.cgi?article=1202&context=info-syllabi",university:"NJIT"},{title:"Data Management System Design",number:"CS 631",link:"https://web.njit.edu/~wangj/631-summer-syllabus.pdf",university:"NJIT"}],N=[{school:"New Jersey Institute of Technology",degree:"M.S. Data Science",link:"https://www.njit.edu/",year:2022},{school:"Sreyas Institute of Engineering and Technology",degree:"B. Tech. Electronics and Communication Engineering",link:"https://sreyas.ac.in/",year:2017}],L=[{name:"Mayo Clinic",position:"Software Developer",url:"https://www.mayoclinic.org/",startDate:"2024-02-01",endDate:"2024-10-30",summary:"Designing and implementing data solutions to enhance analytics and operational efficiency.",highlights:["Data Pipeline Development: Designed and implemented scalable ETL pipelines using AWS Glue and Lambda, improving data processing efficiency by 30%.","Machine Learning Integration: Developed and deployed machine learning models for real-time analytics, resulting in a 25% increase in campaign response rates through personalized interventions.","Collaboration on AI Solutions: Worked closely with data scientists and product managers to design AI-driven marketing solutions, improving campaign performance by 20% in six months.","Data Quality Assurance: Established and maintained data validation frameworks, improving data accuracy by 15%."]},{name:"Virinchi Technologies",position:"Software Developer",url:"https://www.virinchi.com/",startDate:"2020-08-01",endDate:"2022-09-30",summary:"Analyzed data to drive business improvements and optimize marketing strategies.",highlights:["Customer Segmentation: Utilized SQL and Python for customer segmentation, increasing targeted marketing effectiveness by 25%.","Data Visualization: Developed interactive dashboards and reports in Tableau, enabling data-driven decisions that reduced campaign costs by 30%.","Automated Reporting: Automated reporting and data extraction workflows, reducing manual processes by 40%."]},{name:"NeoApp Technologies",position:"Software Developer Intern",url:"https://www.neoapptech.com/",startDate:"2019-06-01",endDate:"2020-07-31",summary:"Gained hands-on experience in data analytics and predictive modeling.",highlights:["Predictive Modeling: Developed predictive models to identify key customer behaviors, improving customer retention by 15%.","NLP Analytics: Implemented Natural Language Processing (NLP) techniques to analyze customer feedback, providing actionable insights that increased customer satisfaction by 10%."]}],T=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:4,category:["Web Development","Javascript"]},{title:"React",competency:2,category:["Web Development","Javascript"]},{title:"Bash",competency:3,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:3,category:["Web Development","Tools"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL/Redshift",competency:2,category:["Web Development","Databases","Languages"]},{title:"Data Mining",competency:4,category:["ML Engineering"]},{title:"Flask",competency:2,category:["Web Development","Python"]},{title:"Git/Mercurial",competency:4,category:["Tools"]},{title:"Kubernetes",competency:2,category:["Tools","Data Engineering"]},{title:"Google Cloud Compute",competency:2,category:["Tools","Web Development"]},{title:"AWS",competency:3,category:["Tools","Web Development"]},{title:"Docker",competency:3,category:["Tools","Data Engineering"]},{title:"AWS Lambda",competency:3,category:["Tools","Web Development"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python","ML Engineering"]},{title:"Tensorflow + Keras",competency:3,category:["ML Engineering","Python"]},{title:"PyTorch",competency:3,category:["ML Engineering","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"Typescript",competency:3,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python","ML Engineering"]},{title:"Ruby",competency:2,category:["Languages"]},{title:"Ruby on Rails",competency:3,category:["Web Development","Languages"]},{title:"C++",competency:2,category:["Languages"]},{title:"MATLAB",competency:1,category:["Languages"]},{title:"R",competency:2,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Data Science","Javascript"]},{title:"Pandas",competency:4,category:["Data Engineering","ML Engineering","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","ML Engineering","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","ML Engineering","Python"]},{title:"Spark",competency:2,category:["Data Engineering","ML Engineering"]},{title:"Mypy",competency:2,category:["Python"]}].map((e=>({...e,category:e.category.sort()}))),A=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],I=[...new Set(T.flatMap((e=>{let{category:t}=e;return t})))].sort().map(((e,t)=>({name:e,color:A[t]}))),C={Education:()=>(0,r.jsx)(l,{data:N}),Experience:()=>(0,r.jsx)(y,{data:L}),Skills:()=>(0,r.jsx)(D,{skills:T,categories:I}),Courses:()=>(0,r.jsx)(M,{data:w}),References:()=>(0,r.jsx)(k,{})},E=()=>(0,r.jsx)(s.A,{title:"Resume",description:"Shashank Reddy's Resume. Smile Identity, Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet, and Facebook.",children:(0,r.jsxs)("article",{className:"post",id:"resume",children:[(0,r.jsx)("header",{children:(0,r.jsxs)("div",{className:"title",children:[(0,r.jsx)("h2",{children:(0,r.jsx)(a.N_,{to:"resume",children:"Resume"})}),(0,r.jsx)("div",{className:"link-container",children:Object.keys(C).map((e=>(0,r.jsx)("h4",{children:(0,r.jsx)("a",{href:`#${e.toLowerCase()}`,children:e})},e)))})]})}),Object.entries(C).map((e=>{let[t,n]=e;return(0,r.jsx)(n,{},t)}))]})})},446:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,i="millisecond",a="second",s="minute",r="hour",c="day",o="week",l="month",u="quarter",d="year",h="date",m="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},f=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},v={s:f,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+f(i,2,"0")+":"+f(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(i,l),s=n-a<0,r=t.clone().add(i+(s?-1:1),l);return+(-(i+(n-a)/(s?a-r:r-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:o,d:c,D:h,h:r,m:s,s:a,ms:i,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",D={};D[b]=p;var j="$isDayjsObject",x=function(e){return e instanceof k||!(!e||!e[j])},S=function e(t,n,i){var a;if(!t)return b;if("string"==typeof t){var s=t.toLowerCase();D[s]&&(a=s),n&&(D[s]=n,a=s);var r=t.split("-");if(!a&&r.length>1)return e(r[0])}else{var c=t.name;D[c]=t,a=c}return!i&&a&&(b=a),a||!i&&b},$=function(e,t){if(x(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new k(n)},M=v;M.l=S,M.i=x,M.w=function(e,t){return $(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function p(e){this.$L=S(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[j]=!0}var f=p.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(g);if(i){var a=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(t)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return M},f.isValid=function(){return!(this.$d.toString()===m)},f.isSame=function(e,t){var n=$(e);return this.startOf(t)<=n&&n<=this.endOf(t)},f.isAfter=function(e,t){return $(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<$(e)},f.$g=function(e,t,n){return M.u(e)?this[t]:this.set(n,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,t){var n=this,i=!!M.u(t)||t,u=M.p(e),m=function(e,t){var a=M.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return i?a:a.endOf(c)},g=function(e,t){return M.w(n.toDate()[e].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},y=this.$W,p=this.$M,f=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return i?m(1,0):m(31,11);case l:return i?m(1,p):m(0,p+1);case o:var b=this.$locale().weekStart||0,D=(y<b?y+7:y)-b;return m(i?f-D:f+(6-D),p);case c:case h:return g(v+"Hours",0);case r:return g(v+"Minutes",1);case s:return g(v+"Seconds",2);case a:return g(v+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,t){var n,o=M.p(e),u="set"+(this.$u?"UTC":""),m=(n={},n[c]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[r]=u+"Hours",n[s]=u+"Minutes",n[a]=u+"Seconds",n[i]=u+"Milliseconds",n)[o],g=o===c?this.$D+(t-this.$W):t;if(o===l||o===d){var y=this.clone().set(h,1);y.$d[m](g),y.init(),this.$d=y.set(h,Math.min(this.$D,y.daysInMonth())).$d}else m&&this.$d[m](g);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[M.p(e)]()},f.add=function(i,u){var h,m=this;i=Number(i);var g=M.p(u),y=function(e){var t=$(m);return M.w(t.date(t.date()+Math.round(e*i)),m)};if(g===l)return this.set(l,this.$M+i);if(g===d)return this.set(d,this.$y+i);if(g===c)return y(1);if(g===o)return y(7);var p=(h={},h[s]=t,h[r]=n,h[a]=e,h)[g]||1,f=this.$d.getTime()+i*p;return M.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||m;var i=e||"YYYY-MM-DDTHH:mm:ssZ",a=M.z(this),s=this.$H,r=this.$m,c=this.$M,o=n.weekdays,l=n.months,u=n.meridiem,d=function(e,n,a,s){return e&&(e[n]||e(t,i))||a[n].slice(0,s)},h=function(e){return M.s(s%12||12,e,"0")},g=u||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(y,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return M.s(t.$y,4,"0");case"M":return c+1;case"MM":return M.s(c+1,2,"0");case"MMM":return d(n.monthsShort,c,l,3);case"MMMM":return d(l,c);case"D":return t.$D;case"DD":return M.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,o,2);case"ddd":return d(n.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(s);case"HH":return M.s(s,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(s,r,!0);case"A":return g(s,r,!1);case"m":return String(r);case"mm":return M.s(r,2,"0");case"s":return String(t.$s);case"ss":return M.s(t.$s,2,"0");case"SSS":return M.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(i,h,m){var g,y=this,p=M.p(h),f=$(i),v=(f.utcOffset()-this.utcOffset())*t,b=this-f,D=function(){return M.m(y,f)};switch(p){case d:g=D()/12;break;case l:g=D();break;case u:g=D()/3;break;case o:g=(b-v)/6048e5;break;case c:g=(b-v)/864e5;break;case r:g=b/n;break;case s:g=b/t;break;case a:g=b/e;break;default:g=b}return m?g:M.a(g)},f.daysInMonth=function(){return this.endOf(l).$D},f.$locale=function(){return D[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=S(e,t,!0);return i&&(n.$L=i),n},f.clone=function(){return M.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},p}(),w=k.prototype;return $.prototype=w,[["$ms",i],["$s",a],["$m",s],["$H",r],["$W",c],["$M",l],["$y",d],["$D",h]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),$.extend=function(e,t){return e.$i||(e(t,k,$),e.$i=!0),$},$.locale=S,$.isDayjs=x,$.unix=function(e){return $(1e3*e)},$.en=D[b],$.Ls=D,$.p={},$}()}}]);
//# sourceMappingURL=295.1675cf82.chunk.js.map