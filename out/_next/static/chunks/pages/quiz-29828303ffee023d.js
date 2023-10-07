(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[498],{6418:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quiz",function(){return n(7338)}])},7472:function(e,t){"use strict";t.Z={src:"/Quizzopia/_next/static/media/quizzopia-logo.d01894f4.png",height:173,width:546,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAaElEQVR4nGMU2bFInoWF5UOQS9THaTZGrCY/mP5ycHAwggA7O/tfRpkNs+P4nr36IJxVfeO7kx0z6/ffLExMTMz/geDfv3+PGTX83JXYOdh/i91++Z5JUpjh2+fPzCAFv379+gmkfwEA9YonQayt8yYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}},7338:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return quiz}});var s,a,o=n(5893),r=n(409),i=n.n(r),l=n(5675),c=n.n(l),u=n(7472),d={src:"/Quizzopia/_next/static/media/loading.96a59f82.gif",height:127,width:235,blurWidth:0,blurHeight:0};(s=a||(a={})).EASY="easy",s.MEDIUM="medium",s.HARD="hard";var f=n(7294),m=n(1163),components_Button=e=>{let{text:t,onClick:n,className:s}=e;return(0,o.jsx)("button",{className:"".concat(s," font-bold h-[45px] min-w-[120px] rounded-[8px]"),onClick:n,children:t})},components_QuizComponent=e=>{let t,{questions:n,totalQuestions:s}=e,[a,r]=(0,f.useState)(0),i=(0,m.useRouter)(),[l,c]=(0,f.useState)(0),[u,d]=(0,f.useState)({}),[x,p]=(0,f.useState)(0),[h,g]=(0,f.useState)(10),_=!!u[a];(0,f.useEffect)(()=>(0===h&&handleSkip(),t=setTimeout(()=>{g(e=>e-1)},1e3),()=>clearTimeout(t)),[h]);let handleOnAnswerClick=(e,t)=>{if(_)return;let s=n[t].correct_answer===e,a=h>7?5:3;s?c(e=>e+a):c(e=>e-1),d(n=>({...n,[t]:e})),g(10)},handleSkip=()=>{x>=2?c(e=>e-2):p(e=>e+1),d(e=>({...e,[a]:"skipped"}));let e=a+1;if(e<0||e>=s){clearTimeout(t),g(-1);return}r(e=>e+1),g(10)},correctAnswer=(e,t,n,s)=>{if(e)return t===s?"bg-green-700 text-gray-100 transition-colors duration-200 ease-in-out":t===n?"bg-red-700 text-gray-100 transition-colors duration-200 ease-in-out":"bg-gray-300 text-gray-700 transition-colors duration-200 ease-in-out"};return(0,o.jsxs)("div",{className:"text-center",children:[(0,o.jsxs)("p",{className:"p-8 font-bold text-2xl text-[#63B69C]",children:["Score: ",l]}),(0,o.jsxs)("p",{className:"text-gray-700 font-bold pb-2 text-sm",children:["Question ",a+1," out of ",s]}),(0,o.jsx)("h2",{className:"".concat((e=>{if(e)return"text-[#3291ff] transition-colors duration-200 ease-in-out"})(_)," max-w-[400px] text-gray-700 font-bold text-2xl pb-4"),dangerouslySetInnerHTML:{__html:n[a].question}}),(0,o.jsx)("div",{className:"grid grid-cols-1 gap-4",children:n[a].answers.map((e,t)=>{var s;return(0,o.jsx)("button",{id:"".concat(e),className:"\n            ".concat(correctAnswer(_,e,u[a],null===(s=n[a])||void 0===s?void 0:s.correct_answer),"\n            bg-gray-200 hover:bg-gray-800 hover:text-gray-200 transition-colors duration-200 ease-in-out font-bold py-2 px-4 rounded"),onClick:()=>handleOnAnswerClick(e,a),children:e},t)})}),(0,o.jsx)("div",{className:"flex justify-center mt-16",children:a!==s-1?(0,o.jsx)(components_Button,{text:"Next",className:"bg-gray-200 hover:bg-gray-400 transition-colors duration-200 ease-in-out text-gray-700 font-bold py-2 px-4 rounded",onClick:handleSkip}):(0,o.jsx)(components_Button,{text:"Finish",className:"bg-gray-200 hover:bg-gray-400 transition-colors duration-200 ease-in-out text-gray-700 font-bold py-2 px-4 rounded",onClick:()=>i.push("/")})}),h>=0?(0,o.jsxs)("p",{className:"text-gray-700 font-bold pb-2 text-sm mt-4",children:["Time Left: ",h]}):null]})};let shuffleArray=e=>[...e].sort(()=>Math.random()-.5),getQuestions=async(e,t)=>{let n="https://opentdb.com/api.php?amount=".concat(e,"&difficulty=").concat(t,"&type=multiple"),s=await (await fetch(n,{cache:"no-store"})).json();return console.log(s),s.results.map(e=>({...e,answers:shuffleArray([...e.incorrect_answers,e.correct_answer])}))};var quiz=()=>{let[e,t]=(0,f.useState)([]);return(0,f.useEffect)(()=>{getQuestions(5,a.EASY).then(e=>t(e)).catch(e=>{console.log(e)})},[]),(0,o.jsxs)("main",{className:"flex flex-col items-center justify-between p-2 ".concat(i().className),children:[(0,o.jsx)(c(),{className:"relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]  w-auto h-36",src:u.Z,alt:"Quizzopia Logo",priority:!0}),(0,o.jsx)("div",{className:"relative flex place-items-center mt-4",children:e.length>0?(0,o.jsx)(components_QuizComponent,{questions:e,totalQuestions:5}):(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center h-full",children:[(0,o.jsx)("div",{className:"animate-pulse flex items-center justify-center",children:(0,o.jsx)(c(),{className:"relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]  w-auto h-36 mt-2 rounded",src:d,alt:"Quizzopia Logo",priority:!0})}),(0,o.jsx)("p",{className:"text-gray-800 font-bold text-3xl mt-4",children:"Loading Questions..."})]})})]})}},409:function(e){e.exports={style:{fontFamily:"'__Inter_5da3de', '__Inter_Fallback_5da3de'",fontStyle:"normal"},className:"__className_5da3de"}},1163:function(e,t,n){e.exports=n(8355)}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=6418)}),_N_E=e.O()}]);