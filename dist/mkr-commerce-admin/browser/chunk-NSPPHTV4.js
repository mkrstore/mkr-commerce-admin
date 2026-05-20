import {
  extractErrorMessage
} from "./chunk-XY6GHRJG.js";
import {
  AppInputComponent,
  AppSelectComponent
} from "./chunk-BGHSUHJG.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-OOFYAVIO.js";
import {
  AuthService,
  ROLE_META,
  ROLE_ORDER
} from "./chunk-WXBPIA4S.js";
import {
  USER_ENDPOINTS
} from "./chunk-O3NE7GYO.js";
import {
  HttpClient,
  Router
} from "./chunk-CADB6C7J.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-MBTJ2QPL.js";
import {
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PEVOVQSE.js";

// src/app/pages/users/users.component.ts
function UsersComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function UsersComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275elementStart(1, "span", 24);
    \u0275\u0275text(2, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Add Staff ");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", r_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.roleName(r_r3));
  }
}
function UsersComponent_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function UsersComponent_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(1, "Clear");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_29_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 34);
    \u0275\u0275element(5, "div", 35);
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275element(7, "div", 36)(8, "div", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 30);
    \u0275\u0275element(10, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 31);
    \u0275\u0275element(12, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275element(14, "div", 40);
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "table", 28)(2, "thead")(3, "tr")(4, "th", 29);
    \u0275\u0275text(5, "Emp ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Member");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 30);
    \u0275\u0275text(9, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 31);
    \u0275\u0275text(11, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, UsersComponent_div_29_tr_15_Template, 15, 0, "tr", 32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.skeletonRows);
  }
}
function UsersComponent_div_30_p_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1, " Try adjusting your filters or ");
    \u0275\u0275elementStart(2, "button", 47);
    \u0275\u0275listener("click", function UsersComponent_div_30_p_6_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(3, "clear all");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "span", 43);
    \u0275\u0275text(3, "person_add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 44);
    \u0275\u0275text(5, "No staff members found");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, UsersComponent_div_30_p_6_Template, 4, 0, "p", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.hasActiveFilters);
  }
}
function UsersComponent_div_31_tr_16_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "Pending setup");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_31_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 50);
    \u0275\u0275listener("click", function UsersComponent_div_31_tr_16_Template_tr_click_0_listener() {
      const member_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetail(member_r7.id));
    });
    \u0275\u0275elementStart(1, "td", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 34)(5, "div", 52);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 53)(8, "span", 54);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, UsersComponent_div_31_tr_16_span_10_Template, 2, 0, "span", 55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td", 30)(12, "span", 56);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 57);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 58);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 59)(20, "span", 24);
    \u0275\u0275text(21, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const member_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatEmpId(member_r7.employeeId));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r1.roleColor(member_r7.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.initials(member_r7));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r7.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r7.invitationPending);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.roleColor(member_r7.role) + "1a")("color", ctx_r1.roleColor(member_r7.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.roleName(member_r7.role), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r7.department || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", member_r7.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", member_r7.isActive ? "Active" : "Inactive", " ");
  }
}
function UsersComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "table", 28)(2, "thead")(3, "tr")(4, "th", 29);
    \u0275\u0275text(5, "Emp ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Member");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 30);
    \u0275\u0275text(9, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 31);
    \u0275\u0275text(11, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, UsersComponent_div_31_tr_16_Template, 22, 15, "tr", 49);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r1.staff());
  }
}
function UsersComponent_div_32_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_32_ng_container_4_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function UsersComponent_div_32_ng_container_4_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const p_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r10));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r10 === ctx_r1.currentPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r10 + 1);
  }
}
function UsersComponent_div_32_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UsersComponent_div_32_ng_container_4_span_1_Template, 2, 0, "span", 63)(2, UsersComponent_div_32_ng_container_4_button_2_Template, 2, 3, "button", 64);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r10 === -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r10 !== -1);
  }
}
function UsersComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "button", 62);
    \u0275\u0275listener("click", function UsersComponent_div_32_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() - 1));
    });
    \u0275\u0275elementStart(2, "span", 24);
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, UsersComponent_div_32_ng_container_4_Template, 3, 2, "ng-container", 32);
    \u0275\u0275elementStart(5, "button", 62);
    \u0275\u0275listener("click", function UsersComponent_div_32_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() + 1));
    });
    \u0275\u0275elementStart(6, "span", 24);
    \u0275\u0275text(7, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage() === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.pageNumbers());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage() + 1 >= ctx_r1.totalPages());
  }
}
function UsersComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275listener("click", function UsersComponent_div_33_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_div_34_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74)(2, "span", 75);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5, "Staff member added!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 76)(9, "button", 77);
    \u0275\u0275listener("click", function UsersComponent_div_34_div_7_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275text(10, "Add Another");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 78);
    \u0275\u0275listener("click", function UsersComponent_div_34_div_7_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275text(12, "Done");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.createSuccess);
  }
}
function UsersComponent_div_34_div_8_div_19_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "span", 95);
    \u0275\u0275text(2, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 96);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.previewFullName());
  }
}
function UsersComponent_div_34_div_8_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 85)(2, "app-input", 86);
    \u0275\u0275listener("valueChange", function UsersComponent_div_34_div_8_div_19_Template_app_input_valueChange_2_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.form.firstName = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-input", 87);
    \u0275\u0275listener("valueChange", function UsersComponent_div_34_div_8_div_19_Template_app_input_valueChange_3_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.form.middleName = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-input", 88);
    \u0275\u0275listener("valueChange", function UsersComponent_div_34_div_8_div_19_Template_app_input_valueChange_4_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.form.lastName = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, UsersComponent_div_34_div_8_div_19_div_5_Template, 5, 1, "div", 89);
    \u0275\u0275elementStart(6, "div", 90)(7, "app-input", 91);
    \u0275\u0275listener("valueChange", function UsersComponent_div_34_div_8_div_19_Template_app_input_valueChange_7_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.form.email = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "app-select", 92);
    \u0275\u0275listener("valueChange", function UsersComponent_div_34_div_8_div_19_Template_app_select_valueChange_8_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.form.role = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "app-input", 93);
    \u0275\u0275listener("valueChange", function UsersComponent_div_34_div_8_div_19_Template_app_input_valueChange_9_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.form.department = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 76)(11, "button", 77);
    \u0275\u0275listener("click", function UsersComponent_div_34_div_8_div_19_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275text(12, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 78);
    \u0275\u0275listener("click", function UsersComponent_div_34_div_8_div_19_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.tryNextStep());
    });
    \u0275\u0275text(14, " Next ");
    \u0275\u0275elementStart(15, "span", 24);
    \u0275\u0275text(16, "arrow_forward");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("required", true)("touched", ctx_r1.step1Touched)("value", ctx_r1.form.firstName);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.form.middleName);
    \u0275\u0275advance();
    \u0275\u0275property("required", true)("touched", ctx_r1.step1Touched)("value", ctx_r1.form.lastName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.firstName || ctx_r1.form.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275property("required", true)("touched", ctx_r1.step1Touched)("value", ctx_r1.form.email);
    \u0275\u0275advance();
    \u0275\u0275property("required", true)("touched", ctx_r1.step1Touched)("options", ctx_r1.roleSelectOptions())("value", ctx_r1.form.role);
    \u0275\u0275advance();
    \u0275\u0275property("required", true)("touched", ctx_r1.step1Touched)("value", ctx_r1.form.department);
  }
}
function UsersComponent_div_34_div_8_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 90)(2, "app-input", 97);
    \u0275\u0275listener("valueChange", function UsersComponent_div_34_div_8_div_20_Template_app_input_valueChange_2_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.form.mobileNumber = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-input", 98);
    \u0275\u0275listener("valueChange", function UsersComponent_div_34_div_8_div_20_Template_app_input_valueChange_3_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.form.alternativePhone = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 76)(5, "button", 77);
    \u0275\u0275listener("click", function UsersComponent_div_34_div_8_div_20_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.prevStep());
    });
    \u0275\u0275elementStart(6, "span", 24);
    \u0275\u0275text(7, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 78);
    \u0275\u0275listener("click", function UsersComponent_div_34_div_8_div_20_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.tryNextStep());
    });
    \u0275\u0275text(10, " Next ");
    \u0275\u0275elementStart(11, "span", 24);
    \u0275\u0275text(12, "arrow_forward");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("required", true)("touched", ctx_r1.step2Touched)("value", ctx_r1.form.mobileNumber);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.form.alternativePhone);
  }
}
function UsersComponent_div_34_div_8_div_21_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.createError);
  }
}
function UsersComponent_div_34_div_8_div_21_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 110);
  }
}
function UsersComponent_div_34_div_8_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "p", 99);
    \u0275\u0275text(2, "All address fields are optional.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 90)(4, "app-input", 100);
    \u0275\u0275listener("valueChange", function UsersComponent_div_34_div_8_div_21_Template_app_input_valueChange_4_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.form.addressBuilding = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-input", 101);
    \u0275\u0275listener("valueChange", function UsersComponent_div_34_div_8_div_21_Template_app_input_valueChange_5_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.form.addressStreet = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 90)(7, "app-input", 102);
    \u0275\u0275listener("valueChange", function UsersComponent_div_34_div_8_div_21_Template_app_input_valueChange_7_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.form.addressCity = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "app-input", 103);
    \u0275\u0275listener("valueChange", function UsersComponent_div_34_div_8_div_21_Template_app_input_valueChange_8_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.form.addressState = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 90)(10, "app-input", 104);
    \u0275\u0275listener("valueChange", function UsersComponent_div_34_div_8_div_21_Template_app_input_valueChange_10_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.form.addressPostalCode = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "app-input", 105);
    \u0275\u0275listener("valueChange", function UsersComponent_div_34_div_8_div_21_Template_app_input_valueChange_11_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.form.addressCountry = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, UsersComponent_div_34_div_8_div_21_div_12_Template, 2, 1, "div", 106);
    \u0275\u0275elementStart(13, "div", 76)(14, "button", 77);
    \u0275\u0275listener("click", function UsersComponent_div_34_div_8_div_21_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.prevStep());
    });
    \u0275\u0275elementStart(15, "span", 24);
    \u0275\u0275text(16, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 107);
    \u0275\u0275listener("click", function UsersComponent_div_34_div_8_div_21_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.submitCreate());
    });
    \u0275\u0275template(19, UsersComponent_div_34_div_8_div_21_span_19_Template, 1, 0, "span", 108);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.form.addressBuilding);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.form.addressStreet);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.form.addressCity);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.form.addressState);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.form.addressPostalCode);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.form.addressCountry);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.createError);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.creating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.creating);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.creating ? "Sending\u2026" : "Send Invitation", " ");
  }
}
function UsersComponent_div_34_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 79)(2, "div", 80)(3, "span", 81);
    \u0275\u0275text(4, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 82);
    \u0275\u0275text(6, "Personal & Role");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "div", 83);
    \u0275\u0275elementStart(8, "div", 80)(9, "span", 81);
    \u0275\u0275text(10, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 82);
    \u0275\u0275text(12, "Contact");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "div", 83);
    \u0275\u0275elementStart(14, "div", 80)(15, "span", 81);
    \u0275\u0275text(16, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 82);
    \u0275\u0275text(18, "Address");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, UsersComponent_div_34_div_8_div_19_Template, 17, 18, "div", 84)(20, UsersComponent_div_34_div_8_div_20_Template, 13, 4, "div", 84)(21, UsersComponent_div_34_div_8_div_21_Template, 21, 10, "div", 84);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.formStep === 1)("done", ctx_r1.formStep > 1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r1.formStep === 2)("done", ctx_r1.formStep > 2);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r1.formStep === 3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.formStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formStep === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formStep === 3);
  }
}
function UsersComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275listener("click", function UsersComponent_div_34_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 69)(2, "span", 70);
    \u0275\u0275text(3, "Add Staff Member");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 71);
    \u0275\u0275listener("click", function UsersComponent_div_34_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275elementStart(5, "span", 24);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, UsersComponent_div_34_div_7_Template, 13, 1, "div", 72)(8, UsersComponent_div_34_div_8_Template, 22, 13, "div", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.createSuccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.createSuccess);
  }
}
var CREATABLE_BY = {
  SUPER_ADMIN: ["ADMIN", "SALES", "INVENTORY", "SUPPORT"],
  ADMIN: ["ADMIN", "SALES", "INVENTORY", "SUPPORT"],
  SALES: ["SALES", "INVENTORY", "SUPPORT"],
  INVENTORY: [],
  SUPPORT: []
};
var UsersComponent = class _UsersComponent {
  http;
  router;
  auth;
  EP = USER_ENDPOINTS;
  // ── List state ────────────────────────────────────────────────────────────
  staff = signal([]);
  loading = signal(true);
  totalCount = signal(0);
  currentPage = signal(0);
  totalPages = signal(0);
  roleFilter = "";
  statusFilter = "";
  searchQuery = "";
  skeletonRows = Array(8);
  // ── Create modal ──────────────────────────────────────────────────────────
  createOpen = false;
  createSuccess = "";
  createError = "";
  creating = false;
  formStep = 1;
  step1Touched = false;
  step2Touched = false;
  form = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    role: "",
    department: "",
    mobileNumber: "",
    alternativePhone: "",
    addressBuilding: "",
    addressStreet: "",
    addressCity: "",
    addressState: "",
    addressPostalCode: "",
    addressCountry: ""
  };
  // ── Computed ──────────────────────────────────────────────────────────────
  creatableRoles = computed(() => {
    const role = this.auth.currentUser()?.role;
    return role ? CREATABLE_BY[role] ?? [] : [];
  });
  canCreate = computed(() => this.creatableRoles().length > 0);
  visibleRoles = computed(() => {
    const role = this.auth.currentUser()?.role;
    if (role === "SUPER_ADMIN" || role === "ADMIN")
      return ROLE_ORDER;
    return CREATABLE_BY[role ?? "SUPPORT"] ?? [];
  });
  previewFullName = computed(() => [this.form.firstName, this.form.middleName, this.form.lastName].filter((p) => p.trim()).join(" "));
  pageNumbers = computed(() => {
    const total = this.totalPages();
    const cur = this.currentPage();
    if (total <= 7)
      return Array.from({ length: total }, (_, i) => i);
    const pages = [0];
    if (cur > 2)
      pages.push(-1);
    for (let i = Math.max(1, cur - 1); i <= Math.min(total - 2, cur + 1); i++)
      pages.push(i);
    if (cur < total - 3)
      pages.push(-1);
    pages.push(total - 1);
    return pages;
  });
  allRoles = ROLE_ORDER;
  roleSelectOptions = computed(() => this.creatableRoles().map((r) => ({ value: r, label: this.roleName(r) })));
  get hasActiveFilters() {
    return !!(this.searchQuery || this.roleFilter || this.statusFilter);
  }
  constructor(http, router, auth) {
    this.http = http;
    this.router = router;
    this.auth = auth;
  }
  ngOnInit() {
    this.loadStaff();
  }
  // ── Load ──────────────────────────────────────────────────────────────────
  loadStaff(page = 0) {
    this.loading.set(true);
    const params = { page: String(page), size: "20" };
    if (this.roleFilter)
      params["role"] = this.roleFilter;
    if (this.statusFilter)
      params["active"] = this.statusFilter;
    if (this.searchQuery)
      params["search"] = this.searchQuery.trim();
    this.http.get(this.EP.BASE, { params }).subscribe({
      next: (res) => {
        this.staff.set(res.data?.content ?? []);
        this.totalCount.set(res.data?.totalElements ?? 0);
        this.totalPages.set(res.data?.totalPages ?? 0);
        this.currentPage.set(res.data?.number ?? 0);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  onFilterChange() {
    this.loadStaff(0);
  }
  clearFilters() {
    this.searchQuery = "";
    this.roleFilter = "";
    this.statusFilter = "";
    this.loadStaff(0);
  }
  goToPage(page) {
    if (page >= 0 && page < this.totalPages())
      this.loadStaff(page);
  }
  // ── Row click → detail page ───────────────────────────────────────────────
  openDetail(id) {
    this.router.navigate(["/users", id]);
  }
  // ── Create ────────────────────────────────────────────────────────────────
  openCreate() {
    this.form = {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      role: this.creatableRoles()[0] ?? "",
      department: "",
      mobileNumber: "",
      alternativePhone: "",
      addressBuilding: "",
      addressStreet: "",
      addressCity: "",
      addressState: "",
      addressPostalCode: "",
      addressCountry: ""
    };
    this.createError = "";
    this.createSuccess = "";
    this.creating = false;
    this.formStep = 1;
    this.step1Touched = false;
    this.step2Touched = false;
    this.createOpen = true;
  }
  closeCreate() {
    this.createOpen = false;
    this.createSuccess = "";
  }
  tryNextStep() {
    if (this.formStep === 1) {
      this.step1Touched = true;
      if (!this.step1Valid())
        return;
    } else if (this.formStep === 2) {
      this.step2Touched = true;
      if (!this.step2Valid())
        return;
    }
    if (this.formStep < 3)
      this.formStep++;
  }
  nextStep() {
    if (this.formStep < 3)
      this.formStep++;
  }
  prevStep() {
    if (this.formStep > 1)
      this.formStep--;
  }
  step1Valid() {
    return !!(this.form.firstName.trim() && this.form.lastName.trim() && this.form.email.trim() && this.form.role && this.form.department.trim());
  }
  step2Valid() {
    return !!this.form.mobileNumber.trim();
  }
  submitCreate() {
    if (!this.step1Valid() || !this.step2Valid())
      return;
    this.createError = "";
    this.createSuccess = "";
    this.creating = true;
    const payload = {
      firstName: this.form.firstName.trim(),
      middleName: this.form.middleName.trim() || null,
      lastName: this.form.lastName.trim(),
      email: this.form.email.trim(),
      role: this.form.role,
      department: this.form.department.trim(),
      mobileNumber: this.form.mobileNumber.trim(),
      alternativePhone: this.form.alternativePhone.trim() || null,
      addressBuilding: this.form.addressBuilding.trim() || null,
      addressStreet: this.form.addressStreet.trim() || null,
      addressCity: this.form.addressCity.trim() || null,
      addressState: this.form.addressState.trim() || null,
      addressPostalCode: this.form.addressPostalCode.trim() || null,
      addressCountry: this.form.addressCountry.trim() || null
    };
    this.http.post(this.EP.BASE, payload).subscribe({
      next: (res) => {
        this.creating = false;
        this.createSuccess = res.message ?? "Invitation sent.";
        this.loadStaff(0);
      },
      error: (e) => {
        this.creating = false;
        this.createError = extractErrorMessage(e, "Failed to create staff member.");
      }
    });
  }
  // ── Helpers ───────────────────────────────────────────────────────────────
  initials(member) {
    const f = member.firstName?.[0] ?? "";
    const l = member.lastName?.[0] ?? "";
    return (f + l).toUpperCase() || (member.name?.[0]?.toUpperCase() ?? "?");
  }
  roleName(role) {
    return ROLE_META[role]?.name ?? role;
  }
  roleColor(role) {
    return ROLE_META[role]?.color ?? "#6B7280";
  }
  formatEmpId(id) {
    return "EMP-" + String(id).padStart(4, "0");
  }
  static \u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 13, consts: [[1, "page"], [1, "page-hd"], [1, "page-hd-left"], [1, "page-hd-title"], [1, "page-hd-sub"], [1, "page-hd-right"], ["class", "btn btn-primary btn-sm", 3, "click", 4, "ngIf"], [1, "filter-bar"], [1, "search-bar"], [1, "sb-icon", "icon", "icon-sm"], ["type", "text", "placeholder", "Search name or email\u2026", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "f-select-sm", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "true"], ["value", "false"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], ["class", "btn btn-ghost btn-sm", 3, "click", 4, "ngIf"], [1, "tbl-card"], ["class", "tbl-wrap", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "pgn", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "modal", 3, "click", 4, "ngIf"], [1, "icon", "icon-sm"], [3, "value"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "tbl-wrap"], [1, "tbl"], [2, "width", "100px"], [1, "hide-sm"], [1, "hide-md"], [4, "ngFor", "ngForOf"], [1, "sk", 2, "width", "54px", "height", "13px"], [1, "member-cell"], [1, "sk", "avatar-sk"], [1, "sk", 2, "width", "110px", "height", "13px", "margin-bottom", "5px"], [1, "sk", 2, "width", "68px", "height", "10px"], [1, "sk", 2, "width", "80px", "height", "22px", "border-radius", "99px"], [1, "sk", 2, "width", "90px", "height", "13px"], [1, "sk", 2, "width", "60px", "height", "22px", "border-radius", "99px"], [1, "empty"], [1, "empty-icon"], [1, "icon", "icon-xl", "icon-muted"], [1, "empty-title"], ["class", "empty-sub", 4, "ngIf"], [1, "empty-sub"], [1, "link-btn", 3, "click"], [1, "th-arrow"], ["class", "tbl-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "tbl-row", 3, "click"], [1, "emp-id"], [1, "avatar"], [1, "member-info"], [1, "member-name"], ["class", "invite-badge", 4, "ngIf"], [1, "role-chip"], [1, "hide-md", "t-muted"], [1, "status-chip"], [1, "td-arrow"], [1, "invite-badge"], [1, "pgn"], [1, "pgn-btn", 3, "click", "disabled"], ["class", "pgn-ellipsis", 4, "ngIf"], ["class", "pgn-btn", 3, "active", "click", 4, "ngIf"], [1, "pgn-ellipsis"], [1, "pgn-btn", 3, "click"], [1, "overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-hd"], [1, "modal-title"], [1, "modal-close", 3, "click"], ["class", "modal-body", 4, "ngIf"], [1, "modal-body"], [1, "modal-success-state"], [1, "icon", "icon-xl", 2, "color", "var(--green)"], [1, "modal-actions"], [1, "btn", "btn-ghost", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "steps"], [1, "step"], [1, "step-num"], [1, "step-lbl"], [1, "step-line"], [4, "ngIf"], [1, "form-row", "three-col"], ["label", "First Name", "placeholder", "e.g. Ravi", 3, "valueChange", "required", "touched", "value"], ["label", "Middle Name", "optLabel", "optional", "placeholder", "optional", 3, "valueChange", "value"], ["label", "Last Name", "placeholder", "e.g. Kumar", 3, "valueChange", "required", "touched", "value"], ["class", "name-preview", 4, "ngIf"], [1, "form-row", "two-col"], ["label", "Company Email", "type", "email", "errorMsg", "Valid email is required", "placeholder", "ravi.kumar@mkr.com", 3, "valueChange", "required", "touched", "value"], ["label", "Role", "placeholder", "Select role", 3, "valueChange", "required", "touched", "options", "value"], ["label", "Department", "placeholder", "e.g. Operations, Sales, Warehouse", 3, "valueChange", "required", "touched", "value"], [1, "name-preview"], [1, "preview-label"], [1, "preview-value"], ["label", "Mobile Number", "type", "tel", "errorMsg", "Mobile number is required", "placeholder", "+91 9876543210", 3, "valueChange", "required", "touched", "value"], ["label", "Alternative Phone", "optLabel", "optional", "type", "tel", "placeholder", "optional", 3, "valueChange", "value"], [1, "step-note"], ["label", "Building / Flat No", "placeholder", "e.g. 4B, Tower A", 3, "valueChange", "value"], ["label", "Street", "placeholder", "e.g. MG Road", 3, "valueChange", "value"], ["label", "City", "placeholder", "e.g. Bengaluru", 3, "valueChange", "value"], ["label", "State", "placeholder", "e.g. Karnataka", 3, "valueChange", "value"], ["label", "Postal Code", "placeholder", "e.g. 560001", 3, "valueChange", "value"], ["label", "Country", "placeholder", "e.g. India", 3, "valueChange", "value"], ["class", "alert alert-error", "style", "margin-bottom:8px", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn-spinner", 4, "ngIf"], [1, "alert", "alert-error", 2, "margin-bottom", "8px"], [1, "btn-spinner"]], template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "Staff Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275template(8, UsersComponent_button_8_Template, 4, 0, "button", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "span", 9);
      \u0275\u0275text(12, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function UsersComponent_Template_input_keyup_enter_13_listener() {
        return ctx.loadStaff(0);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Template_select_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.roleFilter, $event) || (ctx.roleFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function UsersComponent_Template_select_change_14_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(15, "option", 12);
      \u0275\u0275text(16, "All Roles");
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, UsersComponent_option_17_Template, 2, 2, "option", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Template_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function UsersComponent_Template_select_change_18_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(19, "option", 12);
      \u0275\u0275text(20, "All Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "option", 14);
      \u0275\u0275text(22, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "option", 15);
      \u0275\u0275text(24, "Inactive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "button", 16);
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_25_listener() {
        return ctx.loadStaff(0);
      });
      \u0275\u0275text(26, "Search");
      \u0275\u0275elementEnd();
      \u0275\u0275template(27, UsersComponent_button_27_Template, 2, 0, "button", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 18);
      \u0275\u0275template(29, UsersComponent_div_29_Template, 16, 1, "div", 19)(30, UsersComponent_div_30_Template, 7, 1, "div", 20)(31, UsersComponent_div_31_Template, 17, 1, "div", 19)(32, UsersComponent_div_32_Template, 8, 3, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(33, UsersComponent_div_33_Template, 1, 0, "div", 22)(34, UsersComponent_div_34_Template, 9, 2, "div", 23);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.totalCount(), " members");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.canCreate());
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.roleFilter);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.visibleRoles());
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.hasActiveFilters);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.staff().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.staff().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalPages() > 1 && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.createOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.createOpen);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, AppInputComponent, AppSelectComponent], styles: ['\n\n.th-arrow[_ngcontent-%COMP%] {\n  width: 24px;\n  padding: 0 !important;\n}\n.td-arrow[_ngcontent-%COMP%] {\n  color: var(--t3);\n  padding-right: 12px !important;\n  transition: color 0.12s;\n}\n.tbl-row[_ngcontent-%COMP%]:hover   .td-arrow[_ngcontent-%COMP%] {\n  color: var(--blue);\n}\n.member-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n  letter-spacing: 0.5px;\n}\n.member-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.member-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--t1);\n  white-space: nowrap;\n}\n.avatar-sk[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.role-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 10px;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 700;\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.status-chip[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.status-chip.active[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.1);\n  color: #16a34a;\n}\n.invite-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 99px;\n  background: rgba(245, 158, 11, 0.12);\n  color: #d97706;\n}\n.emp-id[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 12px;\n  color: var(--t3);\n}\n.t-muted[_ngcontent-%COMP%] {\n  color: var(--t2) !important;\n}\n@media (max-width: 900px) {\n  .hide-md[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 600px) {\n  .hide-sm[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.modal-success-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 20px 0 8px;\n  text-align: center;\n}\n.modal-success-state[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 800;\n  color: var(--t1);\n}\n.modal-success-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--t2);\n}\n.steps[_ngcontent-%COMP%] {\n  padding: 14px 0 18px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.two-col[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n.three-col[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr 1fr;\n}\n.name-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: var(--surface2);\n  border-radius: var(--radius);\n  margin-bottom: 14px;\n  font-size: 13px;\n}\n.preview-label[_ngcontent-%COMP%] {\n  color: var(--t3);\n  font-size: 11px;\n}\n.preview-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--t1);\n}\n.step-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--t3);\n  margin-bottom: 14px;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 18px;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--blue);\n  cursor: pointer;\n  font-size: 13px;\n  text-decoration: underline;\n}\n@media (max-width: 540px) {\n  .form-row.two-col[_ngcontent-%COMP%], \n   .form-row.three-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=users.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src\\app\\pages\\users\\users.component.ts", lineNumber: 52 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-NSPPHTV4.js.map
