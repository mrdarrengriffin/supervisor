"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[1642],{57966:(e,t,i)=>{i.d(t,{z:()=>n});const n=e=>(t,i)=>e.includes(t,i)},84627:(e,t,i)=>{i.d(t,{T:()=>s});const n=/^(\w+)\.(\w+)$/,s=e=>n.test(e)},74535:(e,t,i)=>{var n=i(17463),s=(i(73366),i(68144)),a=i(79932),l=i(14516),d=i(47181),o=i(58831),r=i(91741),u=i(85415);i(77576),i(5666),i(52039),i(71281);const c=e=>s.dy`<ha-list-item graphic="avatar" .twoline="${!!e.entity_id}"> ${e.state?s.dy`<state-badge slot="graphic" .stateObj="${e}"></state-badge>`:""} <span>${e.friendly_name}</span> <span slot="secondary">${e.entity_id}</span> </ha-list-item>`;(0,n.Z)([(0,a.Mo)("ha-entity-picker")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean,attribute:"allow-custom-entity"})],key:"allowCustomEntity",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Array,attribute:"include-unit-of-measurement"})],key:"includeUnitOfMeasurement",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Array,attribute:"include-entities"})],key:"includeEntities",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Array,attribute:"exclude-entities"})],key:"excludeEntities",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"hideClearIcon",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({attribute:"item-label-path"})],key:"itemLabelPath",value:()=>"friendly_name"},{kind:"field",decorators:[(0,a.SB)()],key:"_opened",value:()=>!1},{kind:"field",decorators:[(0,a.IO)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"method",key:"open",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.open())}},{kind:"method",key:"focus",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.focus())}},{kind:"field",key:"_initedStates",value:()=>!1},{kind:"field",key:"_states",value:()=>[]},{kind:"field",key:"_getStates",value(){return(0,l.Z)(((e,t,i,n,s,a,l,d,c)=>{let h=[];if(!t)return[];let y=Object.keys(t.states);return y.length?d?(y=y.filter((e=>this.includeEntities.includes(e))),y.map((e=>({...t.states[e],friendly_name:(0,r.C)(t.states[e])||e}))).sort(((e,t)=>(0,u.f)(e.friendly_name,t.friendly_name,this.hass.locale.language)))):(c&&(y=y.filter((e=>!c.includes(e)))),i&&(y=y.filter((e=>i.includes((0,o.M)(e))))),n&&(y=y.filter((e=>!n.includes((0,o.M)(e))))),h=y.map((e=>({...t.states[e],friendly_name:(0,r.C)(t.states[e])||e}))).sort(((e,t)=>(0,u.f)(e.friendly_name,t.friendly_name,this.hass.locale.language))),a&&(h=h.filter((e=>e.entity_id===this.value||e.attributes.device_class&&a.includes(e.attributes.device_class)))),l&&(h=h.filter((e=>e.entity_id===this.value||e.attributes.unit_of_measurement&&l.includes(e.attributes.unit_of_measurement)))),s&&(h=h.filter((e=>e.entity_id===this.value||s(e)))),h.length?h:[{entity_id:"",state:"",last_changed:"",last_updated:"",context:{id:"",user_id:null,parent_id:null},friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_match"),attributes:{friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_match"),icon:"mdi:magnify"}}]):[{entity_id:"",state:"",last_changed:"",last_updated:"",context:{id:"",user_id:null,parent_id:null},friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_entities"),attributes:{friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_entities"),icon:"mdi:magnify"}}]}))}},{kind:"method",key:"shouldUpdate",value:function(e){return!!(e.has("value")||e.has("label")||e.has("disabled"))||!(!e.has("_opened")&&this._opened)}},{kind:"method",key:"willUpdate",value:function(e){(!this._initedStates||e.has("_opened")&&this._opened)&&(this._states=this._getStates(this._opened,this.hass,this.includeDomains,this.excludeDomains,this.entityFilter,this.includeDeviceClasses,this.includeUnitOfMeasurement,this.includeEntities,this.excludeEntities),this._initedStates&&(this.comboBox.filteredItems=this._states),this._initedStates=!0)}},{kind:"method",key:"render",value:function(){return s.dy` <ha-combo-box item-value-path="entity_id" .itemLabelPath="${this.itemLabelPath}" .hass="${this.hass}" .value="${this._value}" .label="${void 0===this.label?this.hass.localize("ui.components.entity.entity-picker.entity"):this.label}" .helper="${this.helper}" .allowCustomValue="${this.allowCustomEntity}" .filteredItems="${this._states}" .renderer="${c}" .required="${this.required}" .disabled="${this.disabled}" @opened-changed="${this._openedChanged}" @value-changed="${this._valueChanged}" @filter-changed="${this._filterChanged}"> </ha-combo-box> `}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const t=e.detail.value;t!==this._value&&this._setValue(t)}},{kind:"method",key:"_filterChanged",value:function(e){const t=e.detail.value.toLowerCase();this.comboBox.filteredItems=this._states.filter((e=>e.entity_id.toLowerCase().includes(t)||(0,r.C)(e).toLowerCase().includes(t)))}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{(0,d.B)(this,"value-changed",{value:e}),(0,d.B)(this,"change")}),0)}}]}}),s.oi)},71193:(e,t,i)=>{i.r(t),i.d(t,{HaEntitySelector:()=>v});var n=i(17463),s=i(34541),a=i(47838),l=i(68144),d=i(79932),o=i(76680),r=i(75012),u=i(33855),c=i(14516),h=i(47181),y=i(84627);i(74535);(0,n.Z)([(0,d.Mo)("ha-entities-picker")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Array})],key:"value",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Array,attribute:"include-unit-of-measurement"})],key:"includeUnitOfMeasurement",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Array,attribute:"include-entities"})],key:"includeEntities",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Array,attribute:"exclude-entities"})],key:"excludeEntities",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:"picked-entity-label"})],key:"pickedEntityLabel",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:"pick-entity-label"})],key:"pickEntityLabel",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"entityFilter",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass)return l.Ld;const e=this._currentEntities;return l.dy` ${e.map((e=>l.dy` <div> <ha-entity-picker allow-custom-entity .curValue="${e}" .hass="${this.hass}" .includeDomains="${this.includeDomains}" .excludeDomains="${this.excludeDomains}" .includeEntities="${this.includeEntities}" .excludeEntities="${this.excludeEntities}" .includeDeviceClasses="${this.includeDeviceClasses}" .includeUnitOfMeasurement="${this.includeUnitOfMeasurement}" .entityFilter="${this._getEntityFilter(this.value,this.entityFilter)}" .value="${e}" .label="${this.pickedEntityLabel}" .disabled="${this.disabled}" @value-changed="${this._entityChanged}"></ha-entity-picker> </div> `))} <div> <ha-entity-picker allow-custom-entity .hass="${this.hass}" .includeDomains="${this.includeDomains}" .excludeDomains="${this.excludeDomains}" .includeEntities="${this.includeEntities}" .excludeEntities="${this.excludeEntities}" .includeDeviceClasses="${this.includeDeviceClasses}" .includeUnitOfMeasurement="${this.includeUnitOfMeasurement}" .entityFilter="${this._getEntityFilter(this.value,this.entityFilter)}" .label="${this.pickEntityLabel}" .helper="${this.helper}" .disabled="${this.disabled}" .required="${this.required&&!e.length}" @value-changed="${this._addEntity}"></ha-entity-picker> </div> `}},{kind:"field",key:"_getEntityFilter",value:()=>(0,c.Z)(((e,t)=>i=>(!e||!e.includes(i.entity_id))&&(!t||t(i))))},{kind:"get",key:"_currentEntities",value:function(){return this.value||[]}},{kind:"method",key:"_updateEntities",value:async function(e){this.value=e,(0,h.B)(this,"value-changed",{value:e})}},{kind:"method",key:"_entityChanged",value:function(e){e.stopPropagation();const t=e.currentTarget.curValue,i=e.detail.value;if(i===t||void 0!==i&&!(0,y.T)(i))return;const n=this._currentEntities;i&&!n.includes(i)?this._updateEntities(n.map((e=>e===t?i:e))):this._updateEntities(n.filter((e=>e!==t)))}},{kind:"method",key:"_addEntity",value:async function(e){e.stopPropagation();const t=e.detail.value;if(!t)return;if(e.currentTarget.value="",!t)return;const i=this._currentEntities;i.includes(t)||this._updateEntities([...i,t])}},{kind:"field",static:!0,key:"styles",value:()=>l.iv`div{margin-top:8px}`}]}}),l.oi);let v=(0,n.Z)([(0,d.Mo)("ha-selector-entity")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_entitySources",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"_hasIntegration",value:function(e){var t;return(null===(t=e.entity)||void 0===t?void 0:t.filter)&&(0,o.r)(e.entity.filter).some((e=>e.integration))}},{kind:"method",key:"render",value:function(){var e,t,i;return this._hasIntegration(this.selector)&&!this._entitySources?l.Ld:null!==(e=this.selector.entity)&&void 0!==e&&e.multiple?l.dy` ${this.label?l.dy`<label>${this.label}</label>`:""} <ha-entities-picker .hass="${this.hass}" .value="${this.value}" .helper="${this.helper}" .includeEntities="${this.selector.entity.include_entities}" .excludeEntities="${this.selector.entity.exclude_entities}" .entityFilter="${this._filterEntities}" .disabled="${this.disabled}" .required="${this.required}"></ha-entities-picker> `:l.dy`<ha-entity-picker .hass="${this.hass}" .value="${this.value}" .label="${this.label}" .helper="${this.helper}" .includeEntities="${null===(t=this.selector.entity)||void 0===t?void 0:t.include_entities}" .excludeEntities="${null===(i=this.selector.entity)||void 0===i?void 0:i.exclude_entities}" .entityFilter="${this._filterEntities}" .disabled="${this.disabled}" .required="${this.required}" allow-custom-entity></ha-entity-picker>`}},{kind:"method",key:"updated",value:function(e){(0,s.Z)((0,a.Z)(i.prototype),"updated",this).call(this,e),e.has("selector")&&this._hasIntegration(this.selector)&&!this._entitySources&&(0,r.m)(this.hass).then((e=>{this._entitySources=e}))}},{kind:"field",key:"_filterEntities",value(){return e=>{var t,i;return null===(t=this.selector)||void 0===t||null===(i=t.entity)||void 0===i||!i.filter||(0,o.r)(this.selector.entity.filter).some((t=>(0,u.lV)(t,e,this._entitySources)))}}}]}}),l.oi)},56007:(e,t,i)=>{i.d(t,{PX:()=>l,V_:()=>d,lz:()=>a,nZ:()=>s,rk:()=>r});var n=i(57966);const s="unavailable",a="unknown",l="off",d=[s,a],o=[s,a,l],r=(0,n.z)(d);(0,n.z)(o)},75012:(e,t,i)=>{i.d(t,{m:()=>a});const n=async(e,t,i,s,a,...l)=>{const d=a,o=d[e],r=o=>s&&s(a,o.result)!==o.cacheKey?(d[e]=void 0,n(e,t,i,s,a,...l)):o.result;if(o)return o instanceof Promise?o.then(r):r(o);const u=i(a,...l);return d[e]=u,u.then((i=>{d[e]={result:i,cacheKey:null==s?void 0:s(a,i)},setTimeout((()=>{d[e]=void 0}),t)}),(()=>{d[e]=void 0})),u},s=(e,t)=>e.callWS({type:"entity/source",entity_id:t}),a=(e,t)=>t?s(e,t):n("_entitySources",3e4,s,(e=>Object.keys(e.states).length),e)}}]);
//# sourceMappingURL=1642-tNSIzU0rXj4.js.map