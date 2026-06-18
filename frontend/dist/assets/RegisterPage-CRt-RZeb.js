import{At as e,Bt as t,Ct as n,Dt as r,Et as i,Ft as a,Ht as o,It as s,Lt as c,Nt as l,Ot as u,Pt as d,St as f,Tt as p,Vt as m,Wt as h,a as g,bt as _,ft as v,gt as y,it as b,jt as x,kt as S,m as C,mt as w,n as ee,o as T,p as E,qt as D,wt as O,yt as k}from"./index-BmmKaSak.js";import{t as A}from"./button-gxLuxXn5.js";import{t as j}from"./password-DadOFkkG.js";import{n as M}from"./baseinput-BLLuQEt5.js";import{t as te}from"./inputtext-n68RzEa4.js";var N=C.extend({name:`togglebutton`,style:`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-togglebutton p-component`,{"p-togglebutton-checked":t.active,"p-invalid":t.$invalid,"p-togglebutton-fluid":n.fluid,"p-togglebutton-sm p-inputfield-sm":n.size===`small`,"p-togglebutton-lg p-inputfield-lg":n.size===`large`}]},content:`p-togglebutton-content`,icon:`p-togglebutton-icon`,label:`p-togglebutton-label`}}),P={name:`BaseToggleButton`,extends:M,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:`Yes`},offLabel:{type:String,default:`No`},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:N,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}};function F(e){"@babel/helpers - typeof";return F=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},F(e)}function I(e,t,n){return(t=L(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e){var t=R(e,`string`);return F(t)==`symbol`?t:t+``}function R(e,t){if(F(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(F(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var z={name:`ToggleButton`,extends:P,inheritAttrs:!1,emits:[`change`],methods:{getPTOptions:function(e){return(e===`root`?this.ptmi:this.ptm)(e,{context:{active:this.active,disabled:this.disabled}})},onChange:function(e){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,e),this.$emit(`change`,e))},onBlur:function(e){var t,n;(t=(n=this.formField).onBlur)==null||t.call(n,e)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return y(this.onLabel)&&y(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:`\xA0`},dataP:function(){return b(I({checked:this.active,invalid:this.$invalid},this.size,this.size))}},directives:{ripple:T}},B=[`tabindex`,`disabled`,`aria-pressed`,`aria-label`,`aria-labelledby`,`data-p-checked`,`data-p-disabled`,`data-p`],V=[`data-p`];function H(e,t,n,r,i,o){var s=c(`ripple`);return m((l(),p(`button`,x({type:`button`,class:e.cx(`root`),tabindex:e.tabindex,disabled:e.disabled,"aria-pressed":e.d_value,onClick:t[0]||=function(){return o.onChange&&o.onChange.apply(o,arguments)},onBlur:t[1]||=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}},o.getPTOptions(`root`),{"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"data-p-checked":o.active,"data-p-disabled":e.disabled,"data-p":o.dataP}),[f(`span`,x({class:e.cx(`content`)},o.getPTOptions(`content`),{"data-p":o.dataP}),[a(e.$slots,`default`,{},function(){return[a(e.$slots,`icon`,{value:e.d_value,class:h(e.cx(`icon`))},function(){return[e.onIcon||e.offIcon?(l(),p(`span`,x({key:0,class:[e.cx(`icon`),e.d_value?e.onIcon:e.offIcon]},o.getPTOptions(`icon`)),null,16)):O(``,!0)]}),f(`span`,x({class:e.cx(`label`)},o.getPTOptions(`label`)),D(o.label),17)]})],16,V)],16,B)),[[s]])}z.render=H;var U=C.extend({name:`selectbutton`,style:`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`,classes:{root:function(e){var t=e.props;return[`p-selectbutton p-component`,{"p-invalid":e.instance.$invalid,"p-selectbutton-fluid":t.fluid}]}}}),W={name:`BaseSelectButton`,extends:M,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:U,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function G(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=J(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function K(e){return X(e)||Y(e)||J(e)||q()}function q(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(e,t){if(e){if(typeof e==`string`)return Z(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}function Y(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function X(e){if(Array.isArray(e))return Z(e)}function Z(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Q={name:`SelectButton`,extends:W,inheritAttrs:!1,emits:[`change`],methods:{getOptionLabel:function(e){return this.optionLabel?w(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?w(e,this.optionValue):e},getOptionRenderKey:function(e){return this.dataKey?w(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled:function(e){return this.optionDisabled?w(e,this.optionDisabled):!1},isOptionReadonly:function(e){if(this.allowEmpty)return!1;var t=this.isSelected(e);return this.multiple?t&&this.d_value.length===1:t},onOptionSelect:function(e,t,n){var r=this;if(!(this.disabled||this.isOptionDisabled(t)||this.isOptionReadonly(t))){var i=this.isSelected(t),a=this.getOptionValue(t),o;if(this.multiple)if(i){if(o=this.d_value.filter(function(e){return!v(e,a,r.equalityKey)}),!this.allowEmpty&&o.length===0)return}else o=this.d_value?[].concat(K(this.d_value),[a]):[a];else{if(i&&!this.allowEmpty)return;o=i?null:a}this.writeValue(o,e),this.$emit(`change`,{originalEvent:e,value:o})}},isSelected:function(e){var t=!1,n=this.getOptionValue(e);if(this.multiple){if(this.d_value){var r=G(this.d_value),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(v(a,n,this.equalityKey)){t=!0;break}}}catch(e){r.e(e)}finally{r.f()}}}else t=v(this.d_value,n,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return b({invalid:this.$invalid})}},directives:{ripple:T},components:{ToggleButton:z}},ne=[`aria-labelledby`,`data-p`];function re(e,r,o,c,u,m){var h=s(`ToggleButton`);return l(),p(`div`,x({class:e.cx(`root`),role:`group`,"aria-labelledby":e.ariaLabelledby},e.ptmi(`root`),{"data-p":m.dataP}),[(l(!0),p(_,null,d(e.options,function(r,o){return l(),n(h,{key:m.getOptionRenderKey(r),modelValue:m.isSelected(r),onLabel:m.getOptionLabel(r),offLabel:m.getOptionLabel(r),disabled:e.disabled||m.isOptionDisabled(r),unstyled:e.unstyled,size:e.size,readonly:m.isOptionReadonly(r),onChange:function(e){return m.onOptionSelect(e,r,o)},pt:e.ptm(`pcToggleButton`)},i({_:2},[e.$slots.option?{name:`default`,fn:t(function(){return[a(e.$slots,`option`,{option:r,index:o},function(){return[f(`span`,x({ref_for:!0},e.ptm(`pcToggleButton`).label),D(m.getOptionLabel(r)),17)]})]}),key:`0`}:void 0]),1032,[`modelValue`,`onLabel`,`offLabel`,`disabled`,`unstyled`,`size`,`readonly`,`onChange`,`pt`])}),128))],16,ne)}Q.render=re;var ie={class:`min-h-screen flex`},ae={class:`flex-1 flex items-center justify-center bg-gray-50 p-8`},oe={class:`w-full max-w-md`},$={class:`bg-white rounded-2xl shadow-sm border border-gray-200 p-8`},se={key:0,class:`mt-1 text-xs text-red-500`},ce={key:0,class:`mt-1 text-xs text-red-500`},le={key:0,class:`mt-1 text-xs text-red-500`},ue={class:`text-center text-gray-500 mt-6 text-sm`},de=e({__name:`RegisterPage`,setup(e){let n=ee(),i=g(),a=E(),c=o(``),d=o(``),m=o(``),h=o(``),_=o(`student`),v=o(!1),y=o({}),b=[{label:`Student`,value:`student`},{label:`Mentor / Profesor`,value:`mentor`}];async function x(){v.value=!0,y.value={};try{await n.register(c.value,d.value,m.value,h.value,_.value),n.user?.role===`mentor`?i.push(`/mentor/dashboard`):i.push(`/dashboard`),a.add({severity:`success`,summary:`Dobrodošli!`,detail:`Račun je kreiran za ${n.user?.name}.`,life:3e3})}catch(e){e.response?.status===422?y.value=e.response.data.errors||{}:a.add({severity:`error`,summary:`Greška`,detail:`Registracija nije uspjela.`,life:3e3})}finally{v.value=!1}}return(e,n)=>{let i=te,a=j,o=Q,g=A,C=s(`RouterLink`);return l(),p(`div`,ie,[n[15]||=r(`<div class="hidden lg:flex lg:w-1/2 bg-indigo-600 flex-col items-center justify-center p-12"><div class="text-center text-white max-w-md"><div class="w-20 h-20 bg-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-8"><i class="pi pi-graduation-cap text-4xl text-white"></i></div><h1 class="text-4xl font-bold mb-4">ProjectFlow</h1><p class="text-lg text-indigo-200 leading-relaxed"> Pridruži se platformi i počni pratiti napredak svog završnog rada </p><div class="mt-10 bg-indigo-700 rounded-2xl p-6 text-left"><p class="text-sm font-semibold text-indigo-200 uppercase tracking-wider mb-4">Uloge na platformi</p><div class="space-y-3"><div class="flex items-center gap-3"><div class="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center"><i class="pi pi-book text-white text-sm"></i></div><div><p class="text-white text-sm font-medium">Student</p><p class="text-indigo-200 text-xs">Kreira i prati napredak projekta</p></div></div><div class="flex items-center gap-3"><div class="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center"><i class="pi pi-user text-white text-sm"></i></div><div><p class="text-white text-sm font-medium">Mentor / Profesor</p><p class="text-indigo-200 text-xs">Pregledava i ocjenjuje radove</p></div></div></div></div></div></div>`,1),f(`div`,ae,[f(`div`,oe,[n[14]||=f(`div`,{class:`lg:hidden text-center mb-8`},[f(`div`,{class:`w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-3`},[f(`i`,{class:`pi pi-graduation-cap text-2xl text-white`})]),f(`h1`,{class:`text-2xl font-bold text-gray-900`},`ProjectFlow`)],-1),f(`div`,$,[n[12]||=f(`h2`,{class:`text-2xl font-bold text-gray-900 mb-1`},`Kreiraj račun`,-1),n[13]||=f(`p`,{class:`text-gray-500 mb-7 text-sm`},`Ispuni podatke i počni koristiti platformu`,-1),f(`form`,{onSubmit:k(x,[`prevent`]),class:`space-y-5`},[f(`div`,null,[n[5]||=f(`label`,{class:`block text-sm font-medium text-gray-700 mb-1.5`},`Ime i prezime`,-1),S(i,{modelValue:c.value,"onUpdate:modelValue":n[0]||=e=>c.value=e,placeholder:`Marko Horvat`,invalid:!!y.value.name,class:`w-full`,autofocus:``},null,8,[`modelValue`,`invalid`]),y.value.name?(l(),p(`p`,se,D(y.value.name[0]),1)):O(``,!0)]),f(`div`,null,[n[6]||=f(`label`,{class:`block text-sm font-medium text-gray-700 mb-1.5`},`Email adresa`,-1),S(i,{modelValue:d.value,"onUpdate:modelValue":n[1]||=e=>d.value=e,type:`email`,placeholder:`vase@email.com`,invalid:!!y.value.email,class:`w-full`},null,8,[`modelValue`,`invalid`]),y.value.email?(l(),p(`p`,ce,D(y.value.email[0]),1)):O(``,!0)]),f(`div`,null,[n[7]||=f(`label`,{class:`block text-sm font-medium text-gray-700 mb-1.5`},`Lozinka`,-1),S(a,{modelValue:m.value,"onUpdate:modelValue":n[2]||=e=>m.value=e,placeholder:`Min. 8 znakova`,toggleMask:``,feedback:!1,class:`w-full`,inputClass:`w-full`},null,8,[`modelValue`]),y.value.password?(l(),p(`p`,le,D(y.value.password[0]),1)):O(``,!0)]),f(`div`,null,[n[8]||=f(`label`,{class:`block text-sm font-medium text-gray-700 mb-1.5`},`Potvrdi lozinku`,-1),S(a,{modelValue:h.value,"onUpdate:modelValue":n[3]||=e=>h.value=e,placeholder:`Ponovi lozinku`,toggleMask:``,feedback:!1,class:`w-full`,inputClass:`w-full`},null,8,[`modelValue`])]),f(`div`,null,[n[9]||=f(`label`,{class:`block text-sm font-medium text-gray-700 mb-2`},`Uloga`,-1),S(o,{modelValue:_.value,"onUpdate:modelValue":n[4]||=e=>_.value=e,options:b,optionLabel:`label`,optionValue:`value`,class:`w-full`},null,8,[`modelValue`])]),S(g,{type:`submit`,label:`Registriraj se`,icon:`pi pi-arrow-right`,iconPos:`right`,loading:v.value,class:`w-full mt-2`},null,8,[`loading`])],32),f(`p`,ue,[n[11]||=u(` Već imate račun? `,-1),S(C,{to:`/login`,class:`text-indigo-600 font-medium hover:text-indigo-500`},{default:t(()=>[...n[10]||=[u(` Prijavite se `,-1)]]),_:1})])])])])])}}});export{de as default};