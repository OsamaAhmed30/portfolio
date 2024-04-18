import{T as c,o as x,f as p,a as i,u as t,w as a,F as u,Z as b,b as e,e as f,i as _,B as h,t as r,j as g,d as v,O as w}from"./app-1c9bb75b.js";import{_ as y}from"./AuthenticatedLayout-d465dd03.js";import"./ApplicationLogo-9e6de1e1.js";import"./_plugin-vue_export-helper-c27b6911.js";const k=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Add New Skill ",-1),B={class:"py-12"},D={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},S={class:"flex items-center justify-center p-12"},j={class:"mx-auto w-full max-w-[550px] bg-white"},C=["value"],N={class:"mb-5"},O=e("label",{for:"name",class:"mb-3 block text-base font-medium text-[#07074D]"}," Skill Name: ",-1),A=["textContent"],F={class:"mb-6 pt-4"},T=e("label",{class:"mb-5 block text-xl font-semibold text-[#07074D]"}," Upload Skill Image ",-1),V={class:"mb-8"},I=["textContent"],E=e("label",{for:"file",class:"relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"},[e("div",null,[e("span",{class:"mb-2 block text-xl font-semibold text-[#07074D]"}," Drop Image here "),e("span",{class:"mb-2 block text-base font-medium text-[#6B7280]"}," Or "),e("span",{class:"inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"}," Browse ")])],-1),M={class:"flex justify-between"},U=e("button",{class:"hover:bg-[#5951eb] w-50 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"}," Add ",-1),G={__name:"Edit",props:{skill:Object},setup(m){const n=m,s=c({name:n.skill.name,image:null});let d=()=>{w.post(`/skills/${n.skill.id}`,{_method:"put",name:s.name,image:s.image})};return($,o)=>(x(),p(u,null,[i(t(b),{title:"New Skill"}),i(y,null,{header:a(()=>[k]),default:a(()=>[e("div",B,[e("div",D,[e("div",S,[e("div",j,[e("form",{class:"py-6 px-9",onSubmit:o[2]||(o[2]=f((...l)=>t(d)&&t(d)(...l),["prevent"])),method:"POST",enctype:"multipart/form-data"},[e("input",{type:"hidden",value:n.skill.id},null,8,C),e("div",N,[O,_(e("input",{type:"text",name:"name",id:"name",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md","onUpdate:modelValue":o[0]||(o[0]=l=>t(s).name=l)},null,512),[[h,t(s).name]]),e("div",{class:"text-red-500",textContent:r(t(s).errors.name)},null,8,A)]),e("div",F,[T,e("div",V,[e("input",{accept:"image/jpeg, image/png, image/gif",type:"file",name:"file",id:"file",class:"sr-only",onInput:o[1]||(o[1]=l=>t(s).image=l.target.files[0])},null,32),e("div",{class:"text-red-500",textContent:r(t(s).errors.image)},null,8,I),E])]),e("div",M,[U,i(t(g),{class:"w-50 rounded-md bg-red-500 py-3 px-8 text-center text-base font-semibold text-white outline-none hover:bg-red-700"},{default:a(()=>[v(" Cancel ")]),_:1})])],32)])])])])]),_:1})],64))}};export{G as default};
