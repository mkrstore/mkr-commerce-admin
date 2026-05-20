import {
  extractErrorMessage
} from "./chunk-XY6GHRJG.js";
import {
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
  ActivatedRoute,
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
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PEVOVQSE.js";

// src/app/pages/user-detail/user-detail.component.ts
function UserDetailComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 5);
    \u0275\u0275element(2, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275element(4, "div", 8);
    \u0275\u0275elementStart(5, "div", 9);
    \u0275\u0275element(6, "div", 10)(7, "div", 11)(8, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function UserDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 14);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275listener("click", function UserDetailComponent_div_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275elementStart(6, "span", 17);
    \u0275\u0275text(7, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Back to Staff ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.pageError);
  }
}
function UserDetailComponent_ng_container_3_div_6_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function UserDetailComponent_ng_container_3_div_6_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.resendInvitation());
    });
    \u0275\u0275elementStart(1, "span", 48);
    \u0275\u0275text(2, "forward_to_inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Resend Invitation ");
    \u0275\u0275elementEnd();
  }
}
function UserDetailComponent_ng_container_3_div_6_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function UserDetailComponent_ng_container_3_div_6_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openRoleModal());
    });
    \u0275\u0275elementStart(1, "span", 48);
    \u0275\u0275text(2, "manage_accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Change Role ");
    \u0275\u0275elementEnd();
  }
}
function UserDetailComponent_ng_container_3_div_6_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 49);
  }
}
function UserDetailComponent_ng_container_3_div_6_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function UserDetailComponent_ng_container_3_div_6_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openStatusModal());
    });
    \u0275\u0275elementStart(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r8 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275classProp("danger", s_r8.isActive)("success", !s_r8.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r8.isActive ? "block" : "play_circle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r8.isActive ? "Deactivate Account" : "Activate Account", " ");
  }
}
function UserDetailComponent_ng_container_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "button", 42);
    \u0275\u0275listener("click", function UserDetailComponent_ng_container_3_div_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleActions());
    });
    \u0275\u0275text(2, " Actions ");
    \u0275\u0275elementStart(3, "span", 29);
    \u0275\u0275text(4, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 43);
    \u0275\u0275template(6, UserDetailComponent_ng_container_3_div_6_button_6_Template, 4, 0, "button", 44)(7, UserDetailComponent_ng_container_3_div_6_button_7_Template, 4, 0, "button", 44)(8, UserDetailComponent_ng_container_3_div_6_div_8_Template, 1, 0, "div", 45)(9, UserDetailComponent_ng_container_3_div_6_button_9_Template, 4, 6, "button", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r8 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classProp("open", ctx_r1.actionsOpen);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r8.invitationPending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSuperAdmin());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r8.invitationPending || ctx_r1.isSuperAdmin());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAdminLevel() && ctx_r1.canManage());
  }
}
function UserDetailComponent_ng_container_3_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "Invitation pending");
    \u0275\u0275elementEnd();
  }
}
function UserDetailComponent_ng_container_3_button_45_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.auditLogs().length);
  }
}
function UserDetailComponent_ng_container_3_button_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function UserDetailComponent_ng_container_3_button_45_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.activeTab = "activity");
    });
    \u0275\u0275text(1, " Activity ");
    \u0275\u0275template(2, UserDetailComponent_ng_container_3_button_45_span_2_Template, 2, 1, "span", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "activity");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.auditLogs().length);
  }
}
function UserDetailComponent_ng_container_3_div_46_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1, "Invitation pending");
    \u0275\u0275elementEnd();
  }
}
function UserDetailComponent_ng_container_3_div_46_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Completed");
    \u0275\u0275elementEnd();
  }
}
function UserDetailComponent_ng_container_3_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "div", 55);
    \u0275\u0275text(3, "Account Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 56)(5, "span", 57);
    \u0275\u0275text(6, "Employee ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 58);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 57);
    \u0275\u0275text(10, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 58);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 57);
    \u0275\u0275text(14, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 58)(16, "span", 59)(17, "span", 29);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "span", 57);
    \u0275\u0275text(21, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 58);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 57);
    \u0275\u0275text(25, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 58)(27, "span", 60);
    \u0275\u0275element(28, "span", 26);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "span", 57);
    \u0275\u0275text(31, "Account Setup");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 58);
    \u0275\u0275template(33, UserDetailComponent_ng_container_3_div_46_span_33_Template, 2, 0, "span", 61)(34, UserDetailComponent_ng_container_3_div_46_span_34_Template, 2, 0, "span", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 57);
    \u0275\u0275text(36, "Member Since");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 58);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const s_r8 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatEmpId(s_r8.employeeId));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r8.name);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", ctx_r1.roleColor(s_r8.role) + "18")("color", ctx_r1.roleColor(s_r8.role))("border-color", ctx_r1.roleColor(s_r8.role) + "30");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.roleIcon(s_r8.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.roleName(s_r8.role), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r8.department || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", s_r8.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", s_r8.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", s_r8.invitationPending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !s_r8.invitationPending);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(s_r8.createdAt));
  }
}
function UserDetailComponent_ng_container_3_div_47_a_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r8 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("href", "tel:" + s_r8.alternativePhone, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r8.alternativePhone, " ");
  }
}
function UserDetailComponent_ng_container_3_div_47_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function UserDetailComponent_ng_container_3_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "div", 55);
    \u0275\u0275text(3, "Contact Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 56)(5, "span", 57);
    \u0275\u0275text(6, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 58)(8, "a", 63);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 57);
    \u0275\u0275text(11, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 58)(13, "a", 63);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "span", 57);
    \u0275\u0275text(16, "Alt. Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 58);
    \u0275\u0275template(18, UserDetailComponent_ng_container_3_div_47_a_18_Template, 2, 2, "a", 64)(19, UserDetailComponent_ng_container_3_div_47_span_19_Template, 2, 0, "span", 65);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const s_r8 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(8);
    \u0275\u0275property("href", "mailto:" + s_r8.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r8.email);
    \u0275\u0275advance(4);
    \u0275\u0275property("href", "tel:" + s_r8.mobileNumber, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r8.mobileNumber);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", s_r8.alternativePhone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !s_r8.alternativePhone);
  }
}
function UserDetailComponent_ng_container_3_div_48_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275text(1, " No address on file. ");
    \u0275\u0275elementEnd();
  }
}
function UserDetailComponent_ng_container_3_div_48_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "span", 57);
    \u0275\u0275text(2, "Building / Flat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 57);
    \u0275\u0275text(6, "Street");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 58);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 57);
    \u0275\u0275text(10, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 58);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 57);
    \u0275\u0275text(14, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 58);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 57);
    \u0275\u0275text(18, "Postal Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 58);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 57);
    \u0275\u0275text(22, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 58);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r8 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r8.addressBuilding || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r8.addressStreet || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r8.addressCity || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r8.addressState || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r8.addressPostalCode || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r8.addressCountry || "\u2014");
  }
}
function UserDetailComponent_ng_container_3_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "div", 55);
    \u0275\u0275text(3, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, UserDetailComponent_ng_container_3_div_48_div_4_Template, 2, 0, "div", 67)(5, UserDetailComponent_ng_container_3_div_48_div_5_Template, 25, 6, "div", 68);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r8 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.hasAddress(s_r8));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasAddress(s_r8));
  }
}
function UserDetailComponent_ng_container_3_div_49_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "div", 74)(2, "div", 75)(3, "div", 76);
    \u0275\u0275elementEnd();
  }
}
function UserDetailComponent_ng_container_3_div_49_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275text(1, " No activity recorded yet. ");
    \u0275\u0275elementEnd();
  }
}
function UserDetailComponent_ng_container_3_div_49_div_6_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", entry_r10.detail, "");
  }
}
function UserDetailComponent_ng_container_3_div_49_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275element(1, "div", 81);
    \u0275\u0275elementStart(2, "div", 82)(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 83)(6, "div", 84);
    \u0275\u0275text(7);
    \u0275\u0275template(8, UserDetailComponent_ng_container_3_div_49_div_6_div_1_span_8_Template, 2, 1, "span", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 86)(10, "span", 87);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 88);
    \u0275\u0275text(13, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 89);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const entry_r10 = ctx.$implicit;
    const last_r11 = ctx.last;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("last", last_r11);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.auditColor(entry_r10.action) + "15")("border-color", ctx_r1.auditColor(entry_r10.action) + "40")("color", ctx_r1.auditColor(entry_r10.action));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.auditIcon(entry_r10.action));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.auditLabel(entry_r10.action), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", entry_r10.detail);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r10.actorName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(entry_r10.createdAt));
  }
}
function UserDetailComponent_ng_container_3_div_49_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275template(1, UserDetailComponent_ng_container_3_div_49_div_6_div_1_Template, 16, 13, "div", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.auditLogs());
  }
}
function UserDetailComponent_ng_container_3_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "div", 55);
    \u0275\u0275text(3, "Activity Log");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, UserDetailComponent_ng_container_3_div_49_div_4_Template, 4, 0, "div", 70)(5, UserDetailComponent_ng_container_3_div_49_div_5_Template, 2, 0, "div", 71)(6, UserDetailComponent_ng_container_3_div_49_div_6_Template, 2, 1, "div", 72);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.auditLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.auditLoading && ctx_r1.auditLogs().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.auditLoading && ctx_r1.auditLogs().length > 0);
  }
}
function UserDetailComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 5)(2, "button", 18);
    \u0275\u0275listener("click", function UserDetailComponent_ng_container_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Staff ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, UserDetailComponent_ng_container_3_div_6_Template, 10, 6, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 20)(8, "div", 21);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 22)(11, "div", 23)(12, "h1", 24);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 25);
    \u0275\u0275element(15, "span", 26);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 27)(18, "span", 28)(19, "span", 29);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 30);
    \u0275\u0275text(23, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 31);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 30);
    \u0275\u0275text(27, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 32);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 33)(31, "span", 34);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 30);
    \u0275\u0275text(34, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 35);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, UserDetailComponent_ng_container_3_span_37_Template, 2, 0, "span", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 37)(39, "button", 38);
    \u0275\u0275listener("click", function UserDetailComponent_ng_container_3_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "overview");
    });
    \u0275\u0275text(40, " Overview ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 38);
    \u0275\u0275listener("click", function UserDetailComponent_ng_container_3_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "contact");
    });
    \u0275\u0275text(42, " Contact ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 38);
    \u0275\u0275listener("click", function UserDetailComponent_ng_container_3_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "address");
    });
    \u0275\u0275text(44, " Address ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(45, UserDetailComponent_ng_container_3_button_45_Template, 3, 3, "button", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, UserDetailComponent_ng_container_3_div_46_Template, 39, 17, "div", 40)(47, UserDetailComponent_ng_container_3_div_47_Template, 20, 6, "div", 40)(48, UserDetailComponent_ng_container_3_div_48_Template, 6, 2, "div", 40)(49, UserDetailComponent_ng_container_3_div_49_Template, 7, 3, "div", 40);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r8 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.hasAnyAction());
    \u0275\u0275advance();
    \u0275\u0275styleProp("--role-color", ctx_r1.roleColor(s_r8.role));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.roleColor(s_r8.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.initials(s_r8), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r8.name);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", s_r8.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", s_r8.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.roleColor(s_r8.role) + "18")("color", ctx_r1.roleColor(s_r8.role))("border-color", ctx_r1.roleColor(s_r8.role) + "30");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.roleIcon(s_r8.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.roleName(s_r8.role), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatEmpId(s_r8.employeeId));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r8.department);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r8.email);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Member since ", ctx_r1.formatDate(s_r8.createdAt), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r8.invitationPending);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "overview");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "contact");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "address");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isAdminLevel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "overview");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "contact");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "address");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "activity" && ctx_r1.isAdminLevel());
  }
}
function UserDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275listener("click", function UserDetailComponent_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementEnd();
  }
}
function UserDetailComponent_div_5_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.actionError);
  }
}
function UserDetailComponent_div_5_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 102);
  }
}
function UserDetailComponent_div_5_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.newStatus ? "Activate" : "Deactivate");
  }
}
function UserDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275listener("click", function UserDetailComponent_div_5_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 93)(2, "div", 94)(3, "span", 95);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p")(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, UserDetailComponent_div_5_div_11_Template, 2, 1, "div", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 97)(13, "button", 98);
    \u0275\u0275listener("click", function UserDetailComponent_div_5_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(14, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 99);
    \u0275\u0275listener("click", function UserDetailComponent_div_5_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmStatus());
    });
    \u0275\u0275template(16, UserDetailComponent_div_5_span_16_Template, 1, 0, "span", 100)(17, UserDetailComponent_div_5_span_17_Template, 2, 1, "span", 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("danger", !ctx_r1.newStatus)("success", ctx_r1.newStatus);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.newStatus ? "check_circle" : "block");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.newStatus ? "Activate" : "Deactivate", " account?");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx_r1.staff()) == null ? null : tmp_5_0.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" will ", ctx_r1.newStatus ? "regain access to the portal." : "lose all access immediately.", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.actionError);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.actionLoading);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-danger", !ctx_r1.newStatus)("btn-success", ctx_r1.newStatus);
    \u0275\u0275property("disabled", ctx_r1.actionLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.actionLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.actionLoading);
  }
}
function UserDetailComponent_div_6_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 115);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const r_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", r_r15)("disabled", r_r15 === ((tmp_4_0 = ctx_r1.staff()) == null ? null : tmp_4_0.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.roleName(r_r15), " ");
  }
}
function UserDetailComponent_div_6_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116)(1, "span", 17);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" This will change ", (tmp_2_0 = ctx_r1.staff()) == null ? null : tmp_2_0.name, "'s access level to ", ctx_r1.roleName(ctx_r1.newRole), ". ");
  }
}
function UserDetailComponent_div_6_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.actionError);
  }
}
function UserDetailComponent_div_6_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 102);
  }
}
function UserDetailComponent_div_6_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Change Role");
    \u0275\u0275elementEnd();
  }
}
function UserDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275listener("click", function UserDetailComponent_div_6_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 103)(2, "span", 104);
    \u0275\u0275text(3, "Change Role");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 105)(5, "p", 106);
    \u0275\u0275text(6, " Updating ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "'s role changes their portal access immediately. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 107)(11, "label", 108);
    \u0275\u0275text(12, "Current Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 28)(14, "span", 29);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 107)(18, "label", 108);
    \u0275\u0275text(19, "New Role ");
    \u0275\u0275elementStart(20, "span", 109);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "select", 110);
    \u0275\u0275twoWayListener("ngModelChange", function UserDetailComponent_div_6_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newRole, $event) || (ctx_r1.newRole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(23, UserDetailComponent_div_6_option_23_Template, 2, 3, "option", 111);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, UserDetailComponent_div_6_div_24_Template, 4, 2, "div", 112)(25, UserDetailComponent_div_6_div_25_Template, 2, 1, "div", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 97)(27, "button", 98);
    \u0275\u0275listener("click", function UserDetailComponent_div_6_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(28, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 114);
    \u0275\u0275listener("click", function UserDetailComponent_div_6_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmRole());
    });
    \u0275\u0275template(30, UserDetailComponent_div_6_span_30_Template, 1, 0, "span", 100)(31, UserDetailComponent_div_6_span_31_Template, 2, 0, "span", 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_9_0;
    let tmp_12_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.staff()) == null ? null : tmp_1_0.name);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("background", ctx_r1.roleColor(ctx_r1.staff().role) + "18")("color", ctx_r1.roleColor(ctx_r1.staff().role))("border-color", ctx_r1.roleColor(ctx_r1.staff().role) + "30");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.roleIcon(ctx_r1.staff().role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.roleName(ctx_r1.staff().role), " ");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newRole);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.allRoles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newRole && ctx_r1.newRole !== ((tmp_9_0 = ctx_r1.staff()) == null ? null : tmp_9_0.role));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.actionError);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.actionLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.actionLoading || !ctx_r1.newRole || ctx_r1.newRole === ((tmp_12_0 = ctx_r1.staff()) == null ? null : tmp_12_0.role));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.actionLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.actionLoading);
  }
}
var CREATABLE_BY = {
  SUPER_ADMIN: ["ADMIN", "SALES", "INVENTORY", "SUPPORT"],
  ADMIN: ["SALES", "INVENTORY", "SUPPORT"],
  SALES: ["INVENTORY", "SUPPORT"],
  INVENTORY: [],
  SUPPORT: []
};
var ACTION_META = {
  ACCOUNT_CREATED: { label: "Account created", color: "#7C3AED", icon: "person_add" },
  INVITATION_SENT: { label: "Invitation sent", color: "#2874F0", icon: "mail" },
  INVITATION_RESENT: { label: "Invitation resent", color: "#2874F0", icon: "forward_to_inbox" },
  INVITATION_ACCEPTED: { label: "Account activated", color: "#16A34A", icon: "how_to_reg" },
  ACCOUNT_ACTIVATED: { label: "Account enabled", color: "#16A34A", icon: "play_circle" },
  ACCOUNT_DEACTIVATED: { label: "Account disabled", color: "#EF4444", icon: "block" },
  ROLE_CHANGED: { label: "Role changed", color: "#D97706", icon: "manage_accounts" },
  PASSWORD_RESET: { label: "Password reset", color: "#0891B2", icon: "key" },
  LOGIN: { label: "Signed in", color: "#6B7280", icon: "login" }
};
var UserDetailComponent = class _UserDetailComponent {
  route;
  router;
  http;
  auth;
  EP = USER_ENDPOINTS;
  // ── Page state ────────────────────────────────────────────────────────────
  staff = signal(null);
  loading = signal(true);
  pageError = "";
  // ── Tabs ──────────────────────────────────────────────────────────────────
  activeTab = "overview";
  // ── Audit logs ────────────────────────────────────────────────────────────
  auditLogs = signal([]);
  auditLoading = false;
  // ── Actions dropdown ──────────────────────────────────────────────────────
  actionsOpen = false;
  // ── Modals ────────────────────────────────────────────────────────────────
  modal = "closed";
  newStatus = false;
  newRole = "";
  actionLoading = false;
  actionError = "";
  // ── Static data ───────────────────────────────────────────────────────────
  allRoles = ROLE_ORDER;
  // ── Computed ──────────────────────────────────────────────────────────────
  isSuperAdmin = computed(() => this.auth.currentUser()?.role === "SUPER_ADMIN");
  isAdminLevel = computed(() => this.auth.isAdminLevel());
  canManage = computed(() => {
    const s = this.staff();
    if (!s)
      return false;
    const myRole = this.auth.currentUser()?.role;
    if (myRole === "SUPER_ADMIN")
      return true;
    return (CREATABLE_BY[myRole ?? "SUPPORT"] ?? []).includes(s.role);
  });
  hasAnyAction = computed(() => {
    const s = this.staff();
    if (!s || !this.canManage())
      return false;
    return s.invitationPending || this.isSuperAdmin() || this.isAdminLevel();
  });
  constructor(route, router, http, auth) {
    this.route = route;
    this.router = router;
    this.http = http;
    this.auth = auth;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (!id) {
      this.router.navigate(["/users"]);
      return;
    }
    this.loadStaff(id);
  }
  // ── Data loading ──────────────────────────────────────────────────────────
  loadStaff(id) {
    this.loading.set(true);
    this.http.get(this.EP.BY_ID(id)).subscribe({
      next: (res) => {
        this.staff.set(res.data ?? null);
        this.loading.set(false);
        if (res.data && this.isAdminLevel())
          this.loadAuditLogs(res.data.id);
      },
      error: (e) => {
        this.pageError = extractErrorMessage(e, "Could not load staff member.");
        this.loading.set(false);
      }
    });
  }
  loadAuditLogs(id) {
    this.auditLoading = true;
    this.http.get(this.EP.AUDIT_LOGS(id)).subscribe({
      next: (res) => {
        this.auditLogs.set(res.data ?? []);
        this.auditLoading = false;
      },
      error: () => {
        this.auditLoading = false;
      }
    });
  }
  // ── Navigation ────────────────────────────────────────────────────────────
  goBack() {
    this.router.navigate(["/users"]);
  }
  // ── Actions dropdown ──────────────────────────────────────────────────────
  toggleActions() {
    this.actionsOpen = !this.actionsOpen;
  }
  onDocumentClick(e) {
    const target = e.target;
    if (!target.closest(".ud-actions-wrap"))
      this.actionsOpen = false;
  }
  // ── Status change ─────────────────────────────────────────────────────────
  openStatusModal() {
    const s = this.staff();
    if (!s)
      return;
    this.newStatus = !s.isActive;
    this.actionError = "";
    this.modal = "status";
    this.actionsOpen = false;
  }
  confirmStatus() {
    const s = this.staff();
    if (!s)
      return;
    this.actionLoading = true;
    this.http.patch(this.EP.STATUS(s.id), { active: this.newStatus }).subscribe({
      next: () => {
        this.actionLoading = false;
        this.modal = "closed";
        this.loadStaff(s.id);
      },
      error: (e) => {
        this.actionLoading = false;
        this.actionError = extractErrorMessage(e, "Action failed.");
      }
    });
  }
  // ── Role change ───────────────────────────────────────────────────────────
  openRoleModal() {
    const s = this.staff();
    if (!s)
      return;
    this.newRole = s.role;
    this.actionError = "";
    this.modal = "role";
    this.actionsOpen = false;
  }
  confirmRole() {
    const s = this.staff();
    if (!s || !this.newRole)
      return;
    this.actionLoading = true;
    this.http.patch(this.EP.ROLE(s.id), { role: this.newRole }).subscribe({
      next: () => {
        this.actionLoading = false;
        this.modal = "closed";
        this.loadStaff(s.id);
      },
      error: (e) => {
        this.actionLoading = false;
        this.actionError = extractErrorMessage(e, "Role change failed.");
      }
    });
  }
  // ── Resend invitation ─────────────────────────────────────────────────────
  resendInvitation() {
    const s = this.staff();
    if (!s)
      return;
    this.actionsOpen = false;
    this.http.post(this.EP.RESEND_INVITATION(s.id), {}).subscribe({
      next: () => this.loadAuditLogs(s.id),
      error: (e) => alert(extractErrorMessage(e, "Failed to resend invitation."))
    });
  }
  closeModal() {
    this.modal = "closed";
    this.actionError = "";
  }
  // ── Display helpers ───────────────────────────────────────────────────────
  initials(s) {
    const f = s.firstName?.[0] ?? "";
    const l = s.lastName?.[0] ?? "";
    return (f + l).toUpperCase() || (s.name?.[0]?.toUpperCase() ?? "?");
  }
  roleName(role) {
    return ROLE_META[role]?.name ?? role;
  }
  roleColor(role) {
    return ROLE_META[role]?.color ?? "#6B7280";
  }
  roleIcon(role) {
    return ROLE_META[role]?.icon ?? "\u{1F464}";
  }
  auditLabel(action) {
    return ACTION_META[action]?.label ?? action;
  }
  auditColor(action) {
    return ACTION_META[action]?.color ?? "#6B7280";
  }
  auditIcon(action) {
    return ACTION_META[action]?.icon ?? "\u2022";
  }
  formatEmpId(id) {
    return "EMP-" + String(id).padStart(4, "0");
  }
  formatDate(iso) {
    return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  }
  formatDateTime(iso) {
    return new Date(iso).toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  hasAddress(s) {
    return !!(s.addressBuilding || s.addressStreet || s.addressCity || s.addressState || s.addressPostalCode || s.addressCountry);
  }
  static \u0275fac = function UserDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserDetailComponent, selectors: [["app-user-detail"]], hostBindings: function UserDetailComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function UserDetailComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 6, consts: [[1, "ud-page"], [4, "ngIf"], ["class", "ud-error-state", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "modal modal-sm", 3, "click", 4, "ngIf"], [1, "ud-topbar"], [1, "sk", 2, "width", "80px", "height", "14px"], [1, "ud-hero-card", "sk-hero"], [1, "sk", "ud-sk-avatar"], [1, "ud-sk-lines"], [1, "sk", 2, "width", "180px", "height", "20px", "margin-bottom", "10px"], [1, "sk", 2, "width", "120px", "height", "13px", "margin-bottom", "8px"], [1, "sk", 2, "width", "200px", "height", "13px"], [1, "ud-error-state"], [1, "icon", "icon-xl", 2, "color", "var(--red)"], [1, "ud-error-msg"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "icon", "icon-sm"], [1, "ud-back", 3, "click"], ["class", "ud-actions-wrap", 4, "ngIf"], [1, "ud-hero-card"], [1, "ud-avatar"], [1, "ud-hero-body"], [1, "ud-hero-name-row"], [1, "ud-name"], [1, "ud-status-pill"], [1, "ud-status-dot"], [1, "ud-hero-meta"], [1, "ud-role-badge"], [1, "icon", "icon-xs"], [1, "ud-meta-sep"], [1, "ud-empid"], [1, "ud-dept"], [1, "ud-hero-sub"], [1, "ud-email"], [1, "ud-joined"], ["class", "ud-invite-badge", 4, "ngIf"], [1, "ud-tabs"], [1, "ud-tab", 3, "click"], ["class", "ud-tab", 3, "active", "click", 4, "ngIf"], ["class", "ud-tab-panel", 4, "ngIf"], [1, "ud-actions-wrap"], [1, "ud-actions-btn", 3, "click"], [1, "ud-actions-menu"], ["class", "ud-action-item", 3, "click", 4, "ngIf"], ["class", "ud-action-divider", 4, "ngIf"], ["class", "ud-action-item", 3, "danger", "success", "click", 4, "ngIf"], [1, "ud-action-item", 3, "click"], [1, "ud-action-icon", "icon", "icon-sm"], [1, "ud-action-divider"], [1, "ud-invite-badge"], ["class", "ud-tab-count", 4, "ngIf"], [1, "ud-tab-count"], [1, "ud-tab-panel"], [1, "ud-card"], [1, "ud-card-title"], [1, "ud-info-grid"], [1, "ud-label"], [1, "ud-value"], [1, "ud-role-badge", "sm"], [1, "ud-status-pill", "inline"], ["class", "ud-pending-label", 4, "ngIf"], [1, "ud-pending-label"], [1, "ud-link", 3, "href"], ["class", "ud-link", 3, "href", 4, "ngIf"], ["class", "ud-empty", 4, "ngIf"], [1, "ud-empty"], ["class", "ud-no-address", 4, "ngIf"], ["class", "ud-info-grid", 4, "ngIf"], [1, "ud-no-address"], ["class", "ud-audit-loading", 4, "ngIf"], ["class", "ud-audit-empty", 4, "ngIf"], ["class", "ud-timeline", 4, "ngIf"], [1, "ud-audit-loading"], [1, "sk", 2, "width", "100%", "height", "14px", "margin-bottom", "10px"], [1, "sk", 2, "width", "85%", "height", "14px", "margin-bottom", "10px"], [1, "sk", 2, "width", "65%", "height", "14px"], [1, "ud-audit-empty"], [1, "ud-timeline"], ["class", "ud-tl-item", 3, "last", 4, "ngFor", "ngForOf"], [1, "ud-tl-item"], [1, "ud-tl-line"], [1, "ud-tl-dot"], [1, "ud-tl-body"], [1, "ud-tl-label"], ["class", "ud-tl-detail", 4, "ngIf"], [1, "ud-tl-meta"], [1, "ud-tl-actor"], [1, "ud-tl-sep"], [1, "ud-tl-time"], [1, "ud-tl-detail"], [1, "overlay", 3, "click"], [1, "modal", "modal-sm", 3, "click"], [1, "confirm-body"], [1, "confirm-icon"], [1, "icon", "icon-lg"], ["class", "alert alert-error", "style", "margin:8px 0 0", 4, "ngIf"], [1, "modal-ft"], [1, "btn", "btn-ghost", 3, "click", "disabled"], [1, "btn", 3, "click", "disabled"], ["class", "btn-spinner", 4, "ngIf"], [1, "alert", "alert-error", 2, "margin", "8px 0 0"], [1, "btn-spinner"], [1, "modal-hd"], [1, "modal-title"], [1, "modal-body", 2, "gap", "14px"], [2, "font-size", "13px", "color", "var(--t2)"], [1, "field"], [1, "field-label"], [1, "req"], [1, "f-select", 3, "ngModelChange", "ngModel"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["class", "alert alert-warn", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click", "disabled"], [3, "value", "disabled"], [1, "alert", "alert-warn"], [1, "alert", "alert-error"]], template: function UserDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, UserDetailComponent_ng_container_1_Template, 9, 0, "ng-container", 1)(2, UserDetailComponent_div_2_Template, 9, 1, "div", 2)(3, UserDetailComponent_ng_container_3_Template, 50, 34, "ng-container", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, UserDetailComponent_div_4_Template, 1, 0, "div", 3)(5, UserDetailComponent_div_5_Template, 18, 17, "div", 4)(6, UserDetailComponent_div_6_Template, 32, 17, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.pageError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.staff());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.modal !== "closed");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.modal === "status");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.modal === "role");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.ud-page[_ngcontent-%COMP%] {\n  max-width: 860px;\n  margin: 0 auto;\n  padding: 24px 24px 80px;\n}\n.sk[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n  border-radius: 6px;\n  display: block;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  to {\n    background-position: -200% 0;\n  }\n}\n.ud-sk-avatar[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.sk-hero[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: flex-start;\n}\n.ud-sk-lines[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-top: 6px;\n}\n.ud-error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 80px 24px;\n  text-align: center;\n}\n.ud-error-state[_ngcontent-%COMP%]   .ud-error-icon[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n}\n.ud-error-state[_ngcontent-%COMP%]   .ud-error-msg[_ngcontent-%COMP%] {\n  color: #EF4444;\n  font-size: 14px;\n  max-width: 320px;\n  line-height: 1.5;\n}\n.ud-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.ud-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #6B7280;\n  font-size: 13px;\n  font-weight: 500;\n  padding: 6px 10px 6px 6px;\n  border-radius: 8px;\n  transition: all 0.15s;\n}\n.ud-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.ud-back[_ngcontent-%COMP%]:hover {\n  color: #111827;\n  background: #F3F4F6;\n}\n.ud-actions-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ud-actions-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #fff;\n  border: 1px solid #E5E7EB;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.ud-actions-btn[_ngcontent-%COMP%]:hover {\n  background: #F9FAFB;\n  border-color: #D1D5DB;\n}\n.ud-actions-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 6px);\n  background: #fff;\n  border: 1px solid #E5E7EB;\n  border-radius: 10px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  min-width: 200px;\n  overflow: hidden;\n  z-index: 50;\n  opacity: 0;\n  pointer-events: none;\n  transform: translateY(-4px);\n  transition: opacity 0.15s, transform 0.15s;\n}\n.ud-actions-menu.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateY(0);\n}\n.ud-action-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  background: none;\n  border: none;\n  padding: 11px 16px;\n  text-align: left;\n  font-size: 13px;\n  color: #374151;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.ud-action-item[_ngcontent-%COMP%]:hover {\n  background: #F9FAFB;\n}\n.ud-action-item.danger[_ngcontent-%COMP%] {\n  color: #EF4444;\n}\n.ud-action-item.success[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.ud-action-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 16px;\n  text-align: center;\n}\n.ud-action-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #F3F4F6;\n  margin: 2px 0;\n}\n.ud-hero-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 20px;\n  background: #fff;\n  border: 1px solid #E5E7EB;\n  border-radius: 14px;\n  padding: 24px;\n  border-left: 4px solid var(--role-color, #6366F1);\n  margin-bottom: 4px;\n}\n.ud-avatar[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: -0.5px;\n}\n.ud-hero-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ud-hero-name-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 8px;\n}\n.ud-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n}\n.ud-status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 3px 10px;\n  border-radius: 99px;\n  font-size: 12px;\n  font-weight: 500;\n  background: #FEE2E2;\n  color: #B91C1C;\n}\n.ud-status-pill[_ngcontent-%COMP%]   .ud-status-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #B91C1C;\n}\n.ud-status-pill.active[_ngcontent-%COMP%] {\n  background: #DCFCE7;\n  color: #15803D;\n}\n.ud-status-pill.active[_ngcontent-%COMP%]   .ud-status-dot[_ngcontent-%COMP%] {\n  background: #15803D;\n}\n.ud-status-pill.inline[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.ud-hero-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.ud-meta-sep[_ngcontent-%COMP%] {\n  color: #D1D5DB;\n}\n.ud-empid[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6B7280;\n  font-weight: 500;\n}\n.ud-dept[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6B7280;\n}\n.ud-hero-sub[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  font-size: 13px;\n  color: #6B7280;\n}\n.ud-email[_ngcontent-%COMP%] {\n  color: #4B5563;\n}\n.ud-role-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px;\n  border-radius: 99px;\n  font-size: 12px;\n  font-weight: 500;\n  border: 1px solid transparent;\n}\n.ud-role-badge.sm[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  padding: 2px 8px;\n}\n.ud-invite-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 8px;\n  border-radius: 99px;\n  font-size: 11.5px;\n  font-weight: 500;\n  background: #FEF9C3;\n  color: #92400E;\n  border: 1px solid #FDE68A;\n}\n.ud-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-bottom: 2px solid #F3F4F6;\n  margin-bottom: 20px;\n  margin-top: 24px;\n}\n.ud-tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 10px 18px;\n  font-size: 13.5px;\n  font-weight: 500;\n  color: #6B7280;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.15s;\n}\n.ud-tab[_ngcontent-%COMP%]:hover {\n  color: #374151;\n}\n.ud-tab.active[_ngcontent-%COMP%] {\n  color: #6366F1;\n  border-bottom-color: #6366F1;\n}\n.ud-tab-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #E0E7FF;\n  color: #4338CA;\n  border-radius: 99px;\n  font-size: 10.5px;\n  font-weight: 600;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n}\n.ud-tab-panel[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.15s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(4px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.ud-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E5E7EB;\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 16px;\n}\n.ud-card-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #F3F4F6;\n}\n.ud-info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 140px 1fr;\n  gap: 0;\n}\n.ud-label[_ngcontent-%COMP%] {\n  padding: 11px 0;\n  font-size: 13px;\n  color: #6B7280;\n  font-weight: 500;\n  border-bottom: 1px solid #F9FAFB;\n  display: flex;\n  align-items: center;\n}\n.ud-value[_ngcontent-%COMP%] {\n  padding: 11px 0;\n  font-size: 13px;\n  color: #111827;\n  border-bottom: 1px solid #F9FAFB;\n  display: flex;\n  align-items: center;\n}\n.ud-label[_ngcontent-%COMP%]:last-of-type, \n.ud-value[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.ud-link[_ngcontent-%COMP%] {\n  color: #6366F1;\n  text-decoration: none;\n}\n.ud-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.ud-empty[_ngcontent-%COMP%] {\n  color: #9CA3AF;\n}\n.ud-pending-label[_ngcontent-%COMP%] {\n  color: #D97706;\n  font-weight: 500;\n}\n.ud-no-address[_ngcontent-%COMP%] {\n  color: #9CA3AF;\n  font-size: 13px;\n  padding: 8px 0;\n}\n.ud-timeline[_ngcontent-%COMP%] {\n  padding: 4px 0;\n}\n.ud-tl-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  position: relative;\n  padding-bottom: 20px;\n}\n.ud-tl-item.last[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n.ud-tl-item.last[_ngcontent-%COMP%]   .ud-tl-line[_ngcontent-%COMP%] {\n  display: none;\n}\n.ud-tl-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  top: 28px;\n  bottom: 0;\n  width: 1px;\n  background: #F3F4F6;\n}\n.ud-tl-dot[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  color: #fff;\n  border: 3px solid transparent;\n  box-sizing: border-box;\n}\n.ud-tl-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-top: 4px;\n}\n.ud-tl-label[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 3px;\n}\n.ud-tl-detail[_ngcontent-%COMP%] {\n  color: #6B7280;\n  font-weight: 400;\n}\n.ud-tl-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #9CA3AF;\n}\n.ud-tl-sep[_ngcontent-%COMP%] {\n  color: #E5E7EB;\n}\n.ud-tl-actor[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #6B7280;\n}\n.ud-audit-loading[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.ud-audit-empty[_ngcontent-%COMP%] {\n  color: #9CA3AF;\n  font-size: 13px;\n  padding: 8px 0;\n}\n.dark-mode[_nghost-%COMP%]   .ud-hero-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .ud-hero-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .ud-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .ud-card[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .ud-actions-menu[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .ud-actions-menu[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-color: var(--border);\n  color: var(--t1);\n}\n.dark-mode[_nghost-%COMP%]   .ud-topbar[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .ud-topbar[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .ud-tabs[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .ud-tabs[_ngcontent-%COMP%] {\n  border-color: var(--border);\n}\n.dark-mode[_nghost-%COMP%]   .ud-tab[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .ud-tab[_ngcontent-%COMP%] {\n  color: var(--t3);\n}\n.dark-mode[_nghost-%COMP%]   .ud-tab.active[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .ud-tab.active[_ngcontent-%COMP%] {\n  color: var(--blue);\n  border-color: var(--blue);\n}\n.dark-mode[_nghost-%COMP%]   .ud-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .ud-label[_ngcontent-%COMP%] {\n  color: var(--t2);\n}\n.dark-mode[_nghost-%COMP%]   .ud-value[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .ud-value[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .ud-name[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .ud-name[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   h3[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--t1);\n}\n.dark-mode[_nghost-%COMP%]   .ud-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .ud-label[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .ud-value[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .ud-value[_ngcontent-%COMP%] {\n  border-color: var(--border);\n}\n.dark-mode[_nghost-%COMP%]   .ud-card-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .ud-card-title[_ngcontent-%COMP%] {\n  color: var(--t2);\n  border-color: var(--border);\n}\n.dark-mode[_nghost-%COMP%]   .ud-back[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .ud-back[_ngcontent-%COMP%] {\n  color: var(--t2);\n}\n.dark-mode[_nghost-%COMP%]   .ud-back[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .ud-back[_ngcontent-%COMP%]:hover {\n  color: var(--t1);\n  background: var(--hover);\n}\n.dark-mode[_nghost-%COMP%]   .ud-actions-btn[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .ud-actions-btn[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-color: var(--border);\n  color: var(--t1);\n}\n.dark-mode[_nghost-%COMP%]   .ud-action-item[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .ud-action-item[_ngcontent-%COMP%] {\n  color: var(--t1);\n}\n.dark-mode[_nghost-%COMP%]   .ud-action-item[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .ud-action-item[_ngcontent-%COMP%]:hover {\n  background: var(--hover);\n}\n.dark-mode[_nghost-%COMP%]   .ud-action-divider[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .ud-action-divider[_ngcontent-%COMP%] {\n  background: var(--border);\n}\n.dark-mode[_nghost-%COMP%]   .ud-tl-line[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .ud-tl-line[_ngcontent-%COMP%] {\n  background: var(--border);\n}\n@media (max-width: 600px) {\n  .ud-page[_ngcontent-%COMP%] {\n    padding: 16px 16px 60px;\n  }\n  .ud-hero-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 14px;\n  }\n  .ud-avatar[_ngcontent-%COMP%] {\n    width: 56px;\n    height: 56px;\n    font-size: 18px;\n  }\n  .ud-info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 110px 1fr;\n  }\n  .ud-tab[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=user-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserDetailComponent, { className: "UserDetailComponent", filePath: "src\\app\\pages\\user-detail\\user-detail.component.ts", lineNumber: 72 });
})();
export {
  UserDetailComponent
};
//# sourceMappingURL=chunk-MLQOTSOF.js.map
