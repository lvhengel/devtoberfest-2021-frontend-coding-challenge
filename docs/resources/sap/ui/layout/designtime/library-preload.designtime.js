//@ui5-bundle sap/ui/layout/designtime/library-preload.designtime.js
/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/layout/designtime/BlockLayout.designtime",[],function(){"use strict";return{palette:{group:"LAYOUT",icons:{svg:"sap/ui/layout/designtime/BlockLayout.icon.svg"}},aggregations:{content:{domRef:":sap-domref",actions:{move:"moveControls"}}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/layout/designtime/BlockLayoutCell.designtime",[],function(){"use strict";return{aggregations:{content:{domRef:":sap-domref",actions:{move:"moveControls"}}},actions:{remove:{changeType:"hideControl"},rename:{changeType:"rename",domRef:function(e){return e.$().find(".sapUiBlockCellTitle")[0]}},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/layout/designtime/BlockLayoutRow.designtime",[],function(){"use strict";return{aggregations:{content:{domRef:":sap-domref",actions:{move:"moveControls"}}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/layout/designtime/DynamicSideContent.designtime",[],function(){"use strict";return{aggregations:{mainContent:{domRef:":sap-domref > div",actions:{move:"moveControls"}},sideContent:{domRef:":sap-domref > [id$='SCGridCell']",actions:{move:"moveControls"}}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/layout/designtime/FixFlex.designtime",[],function(){"use strict";return{aggregations:{fixContent:{domRef:":sap-domref > .sapUiFixFlexFixed",actions:{move:"moveControls"}},flexContent:{domRef:":sap-domref > .sapUiFixFlexFlexible"}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/layout/designtime/Grid.designtime",[],function(){"use strict";return{actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}},aggregations:{content:{domRef:":sap-domref",actions:{move:"moveControls"}}},name:{singular:"GRID_CONTROL_NAME",plural:"GRID_CONTROL_NAME_PLURAL"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/layout/designtime/HorizontalLayout.designtime",[],function(){"use strict";return{name:{singular:"HORIZONTAL_LAYOUT_CONTROL_NAME",plural:"HORIZONTAL_LAYOUT_CONTROL_NAME_PLURAL"},palette:{group:"LAYOUT",icons:{svg:"sap/ui/layout/designtime/HorizontalLayout.icon.svg"}},aggregations:{content:{domRef:":sap-domref",actions:{move:"moveControls"}}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/layout/designtime/Splitter.designtime",[],function(){"use strict";return{aggregations:{contentAreas:{domRef:":sap-domref",actions:{move:"moveControls"}}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/layout/designtime/VerticalLayout.designtime",[],function(){"use strict";return{name:{singular:"VERTICAL_LAYOUT_CONTROL_NAME",plural:"VERTICAL_LAYOUT_NAME_PLURAL"},palette:{group:"LAYOUT",icons:{svg:"sap/ui/layout/designtime/VerticalLayout.icon.svg"}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}},aggregations:{content:{domRef:":sap-domref",actions:{move:"moveControls"}}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/layout/designtime/form/Form.designtime",["sap/ui/layout/form/Form"],function(e){"use strict";function t(e){return e.getParent()&&e.getParent().isA("sap.ui.layout.form.FormElement")}function n(t){if(t instanceof e&&t.getLayout()&&t.getLayout().getMetadata().getName()==="sap.ui.layout.form.GridLayout"){return false}return true}return{palette:{group:"LAYOUT",icons:{svg:"sap/ui/layout/designtime/form/Form.icon.svg"}},aggregations:{title:{ignore:true},toolbar:{ignore:function(e){return!e.getToolbar()},domRef:function(e){return e.getToolbar().getDomRef()}},formContainers:{propagateRelevantContainer:true,propagateMetadata:function(e){if(t(e)){return{actions:"not-adaptable"}}},childNames:{singular:"GROUP_CONTROL_NAME",plural:"GROUP_CONTROL_NAME_PLURAL"},domRef:":sap-domref",actions:{move:function(e){if(n(e)){return"moveControls"}else{return null}},createContainer:function(e){if(n(e)){return{changeType:"addGroup",isEnabled:true,getCreatedContainerId:function(e){return e}}}else{return null}}}}},actions:{localReset:"localReset"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/layout/designtime/form/FormContainer.designtime",["sap/ui/thirdparty/jquery","sap/ui/layout/form/Form"],function(e,t){"use strict";function n(e){return e.getFormElements().every(function(e){return e.getVisible()===false})}function r(e){if(e&&!(e instanceof t)){return r(e.getParent())}return e}function i(e){var t=r(e);if(t&&t.getLayout()&&t.getLayout().getMetadata().getName()==="sap.ui.layout.form.GridLayout"){return false}return true}return{palette:{group:"LAYOUT",icons:{svg:"sap/ui/layout/designtime/form/FormContainer.icon.svg"}},isVisible:function(e){return e.isVisible()},actions:{remove:function(e){if(i(e)){return{changeType:"hideControl"}}else{return null}},rename:function(t){if(i(t)){return{changeType:"renameGroup",domRef:function(t){if(!t.getRenderedDomRef()){var n=t.getTitle()||t.getToolbar();return n.getDomRef()}return e(t.getRenderedDomRef()).find(".sapUiFormTitle")[0]},isEnabled:function(e){return!(e.getToolbar()||!e.getTitle())}}}else{return null}}},aggregations:{formElements:{childNames:{singular:"FIELD_CONTROL_NAME",plural:"FIELD_CONTROL_NAME_PLURAL"},domRef:function(t){var r=t.getRenderedDomRef();var i=t.getTitle()||t.getToolbar();if(r){return r}if(t.getFormElements().length===0||n(t)){if(i instanceof sap.ui.core.Element){return i.getDomRef()}if(typeof i==="string"){return e(r).find(".sapUiFormTitle").get(0)}}return undefined},actions:{move:function(e){if(i(e)){return{changeType:"moveControls"}}else{return null}},add:{delegate:function(e){if(i(e)){return{changeType:"addFormField",changeOnRelevantContainer:true,supportsDefaultDelegate:true}}}}}},toolbar:{domRef:function(e){var t=e.getToolbar();if(t){return t.getDomRef()}}}},name:{singular:"GROUP_CONTROL_NAME",plural:"GROUP_CONTROL_NAME_PLURAL"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/layout/designtime/form/FormElement.designtime",["sap/ui/layout/form/Form","sap/ui/layout/form/FormContainer","sap/ui/layout/form/ResponsiveGridLayout"],function(e,t,n){"use strict";function r(t){if(t&&!(t instanceof e)){return r(t.getParent())}return t}function o(e){var t=r(e);if(t&&t.getLayout()&&t.getLayout().getMetadata().getName()==="sap.ui.layout.form.GridLayout"){return false}return true}return{palette:{group:"LAYOUT",icons:{svg:"sap/ui/layout/designtime/form/FormElement.icon.svg"}},isVisible:function(e){return e.isVisible()},domRef:function(r){var o=r.getParent();if(o instanceof t){o=o.getParent();if(o instanceof e){var i=o.getLayout();if(i instanceof n){var u=r.getFields();var a=r.getLabelControl();if(a){u.unshift(a)}return u.filter(function(e){return e.getDomRef&&e.getDomRef()}).map(function(e){var t=e.getDomRef();return t.parentNode})}}}},actions:{remove:function(e){if(o(e)){return{changeType:"hideControl"}}else{return null}},rename:function(e){if(o(e)&&e.getLabelControl()){return{changeType:"renameField",domRef:function(e){return e.getLabelControl().getDomRef()}}}else{return null}},reveal:function(e){if(o(e)){return{changeType:"unhideControl"}}else{return null}}},name:{singular:"FIELD_CONTROL_NAME",plural:"FIELD_CONTROL_NAME_PLURAL"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/layout/designtime/form/SimpleForm.designtime",["sap/m/Title","sap/ui/core/Title","sap/ui/fl/Utils"],function(e,t,n){"use strict";function a(e){var t=[];var n;var a;if(e.getMetadata().getName()==="sap.ui.layout.form.FormElement"){n=e.getLabel();if(n){t.push(n)}t=t.concat(e.getFields())}else if(e.getMetadata().getName()==="sap.ui.layout.form.FormContainer"){a=e.getTitle()||e.getToolbar();if(a){t[0]=a}e.getFormElements().forEach(function(e){n=e.getLabel();if(n){t.push(n)}t=t.concat(e.getFields())})}else if(e.getMetadata().getName()==="sap.ui.layout.form.Form"){t.push(e)}return t}function r(e){if(e.getMetadata().getName()==="sap.ui.layout.form.SimpleForm"){return e}else if(e.getParent()){return r(e.getParent())}}function o(e){var t=r(e);return t&&t.getContent().every(function(e){return n.checkControlId(e)})}var i={aggregations:{formContainers:{childNames:{singular:"GROUP_CONTROL_NAME",plural:"GROUP_CONTROL_NAME_PLURAL"},getIndex:function(e,t){var n=e.getFormContainers();if(t){return n.indexOf(t)+1}if(n.length>0&&n[0].getFormElements().length===0&&n[0].getTitle()===null){return 0}return n.length},beforeMove:function(e){if(e){e._bChangedByMe=true}},afterMove:function(e){if(e){e._bChangedByMe=false}},actions:{move:function(e){if(o(e)){return{changeType:"moveSimpleFormGroup"}}},createContainer:{changeType:"addSimpleFormGroup",changeOnRelevantContainer:true,isEnabled:function(e){var t=e.getFormContainers();for(var n=0;n<t.length;n++){if(t[n].getToolbar&&t[n].getToolbar()){return false}}return true},getCreatedContainerId:function(e){var t=sap.ui.getCore().byId(e);var n=t.getParent().getId();return n}}}}},actions:{localReset:{changeType:"localReset",changeOnRelevantContainer:true}},getStableElements:a};var l={name:{singular:"GROUP_CONTROL_NAME",plural:"GROUP_CONTROL_NAME_PLURAL"},aggregations:{formElements:{childNames:{singular:"FIELD_CONTROL_NAME",plural:"FIELD_CONTROL_NAME_PLURAL"},beforeMove:function(e){if(e){e._bChangedByMe=true}},afterMove:function(e){if(e){e._bChangedByMe=false}},actions:{move:function(e){if(o(e)){return{changeType:"moveSimpleFormField"}}},add:{delegate:{changeType:"addSimpleFormField",changeOnRelevantContainer:true,supportsDefaultDelegate:true}}}}},actions:{rename:function(e){return{changeType:"renameTitle",changeOnRelevantContainer:true,isEnabled:!(e.getToolbar()||!e.getTitle()),domRef:function(e){if(e.getTitle&&e.getTitle()){return e.getTitle().getDomRef()}}}},remove:function(n){return{changeType:"removeSimpleFormGroup",changeOnRelevantContainer:true,isEnabled:!!(n.getToolbar()||n.getTitle()),getConfirmationText:function(n){var a=false;if(n.getMetadata().getName()==="sap.ui.layout.form.FormContainer"&&n.getToolbar&&n.getToolbar()){var r=n.getToolbar().getContent();if(r.length>1){a=true}else if(r.length===1&&!r[0].getMetadata().isInstanceOf("sap.ui.core.Label")&&!(r[0]instanceof t)&&!(r[0]instanceof e)){a=true}}if(a){var o=sap.ui.getCore().getLibraryResourceBundle("sap.ui.layout.designtime");return o.getText("MSG_REMOVING_TOOLBAR")}}}}},getStableElements:a};var u={name:{singular:"FIELD_CONTROL_NAME",plural:"FIELD_CONTROL_NAME_PLURAL"},actions:{rename:{changeType:"renameLabel",changeOnRelevantContainer:true,domRef:function(e){return e.getLabel().getDomRef()}},remove:{changeType:"hideSimpleFormField",changeOnRelevantContainer:true,jsOnly:true},reveal:{changeType:"unhideSimpleFormField",changeOnRelevantContainer:true,jsOnly:true}},getStableElements:a};return{palette:{group:"LAYOUT",icons:{svg:"sap/ui/layout/designtime/form/SimpleForm.icon.svg"}},aggregations:{content:{ignore:true},title:{ignore:true},toolbar:{ignore:function(e){return!e.getToolbar()},domRef:function(e){return e.getToolbar().getDomRef()}},form:{ignore:false,propagateMetadata:function(e){var t=e.getMetadata().getName();if(t==="sap.ui.layout.form.Form"){return i}else if(t==="sap.ui.layout.form.FormContainer"){return l}else if(t==="sap.ui.layout.form.FormElement"){return u}else{return{actions:null}}},propagateRelevantContainer:true}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/layout/designtime/library.designtime",[],function(){"use strict";return{}});
