"use strict";
(self["webpackChunksharp_floor_nc_UI"] = self["webpackChunksharp_floor_nc_UI"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/about/about.component */ 2468);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/contact/contact.component */ 1782);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_home_home_main_home_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home-main/home-main.component */ 3044);
/* harmony import */ var _components_privacy_notice_privacy_notice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/privacy-notice/privacy-notice.component */ 9528);
/* harmony import */ var _components_custommes_custommes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/custommes/custommes.component */ 1613);
/* harmony import */ var _components_custom_inventory_management_custom_inventory_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/custom-inventory-management/custom-inventory-management.component */ 6135);
/* harmony import */ var _components_quality_management_system_quality_management_system_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/quality-management-system/quality-management-system.component */ 6599);
/* harmony import */ var _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/articles/articles.component */ 9013);
/* harmony import */ var _components_tms_showcase_tms_showcase_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tms-showcase/tms-showcase.component */ 53);
/* harmony import */ var _components_preventive_maintenance_showcase_preventive_maintenance_showcase_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/preventive-maintenance-showcase/preventive-maintenance-showcase.component */ 2087);
/* harmony import */ var _components_inventory_management_showcase_inventory_management_showcase_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/inventory-management-showcase/inventory-management-showcase.component */ 9449);
/* harmony import */ var _components_qms_showcase_qms_showcase_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/qms-showcase/qms-showcase.component */ 3700);
/* harmony import */ var _components_tools_tools_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tools/tools.component */ 1916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);

















const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
  children: [{
    path: '',
    component: _components_home_home_main_home_main_component__WEBPACK_IMPORTED_MODULE_3__.HomeMainComponent
  }, {
    path: 'contact',
    redirectTo: 'contactus',
    pathMatch: 'prefix'
  }, {
    path: 'about',
    component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent
  }, {
    path: 'custommes',
    component: _components_custommes_custommes_component__WEBPACK_IMPORTED_MODULE_5__.CustommesComponent
  }, {
    path: 'custominventory',
    component: _components_custom_inventory_management_custom_inventory_management_component__WEBPACK_IMPORTED_MODULE_6__.CustomInventoryManagementComponent
  }, {
    path: 'qms',
    component: _components_quality_management_system_quality_management_system_component__WEBPACK_IMPORTED_MODULE_7__.QualityManagementSystemComponent
  }, {
    path: 'qms-demo',
    component: _components_qms_showcase_qms_showcase_component__WEBPACK_IMPORTED_MODULE_12__.QmsShowcaseComponent
  }, {
    path: 'tms-demo',
    component: _components_tms_showcase_tms_showcase_component__WEBPACK_IMPORTED_MODULE_9__.TmsShowcaseComponent
  }, {
    path: 'preventive-maintenance-demo',
    component: _components_preventive_maintenance_showcase_preventive_maintenance_showcase_component__WEBPACK_IMPORTED_MODULE_10__.PreventiveMaintenanceShowcaseComponent
  }, {
    path: 'inventory-management-demo',
    component: _components_inventory_management_showcase_inventory_management_showcase_component__WEBPACK_IMPORTED_MODULE_11__.InventoryManagementShowcaseComponent
  }, {
    path: 'contactus',
    component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent
  }, {
    path: 'articles',
    component: _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_8__.ArticlesComponent
  }, {
    path: 'privacy',
    component: _components_privacy_notice_privacy_notice_component__WEBPACK_IMPORTED_MODULE_4__.PrivacyNoticeComponent
  }, {
    path: 'tools',
    component: _components_tools_tools_component__WEBPACK_IMPORTED_MODULE_13__.ToolsComponent
  }]
}
// {path:'**',component: PageNotFoundComponent},
];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AppComponent {
  constructor(_bottomSheet) {
    this._bottomSheet = _bottomSheet;
    this.title = 'template';
  }
  ngOnInit() {
    // this._bottomSheet.open(AllowCookiesComponent, {
    //   hasBackdrop: true,
    //   disableClose: true
    // })
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__.MatBottomSheet));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _modules_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/components/components.module */ 2676);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _modules_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _modules_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule]
  });
})();

/***/ }),

/***/ 6679:
/*!*****************************************************************************!*\
  !*** ./src/app/components/about/about-section1/about-section1.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutSection1Component": () => (/* binding */ AboutSection1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);



class AboutSection1Component {}
AboutSection1Component.ɵfac = function AboutSection1Component_Factory(t) {
  return new (t || AboutSection1Component)();
};
AboutSection1Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AboutSection1Component,
  selectors: [["app-about-section1"]],
  decls: 25,
  vars: 0,
  consts: [[1, "content-section", "animate-slide-in"], [1, "content-card"], [1, "section-header"], [1, "header-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "48", "height", "48", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"], ["d", "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"], [1, "montserrat", "section-title"], [1, "content-grid"], [1, "text-content"], [1, "montserrat", "description-text"], [1, "cta-container"], ["routerLink", "/home/contactus", 1, "cta-button"], ["mat-raised-button", "", "color", "primary", 1, "modern-button"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16"], ["fill-rule", "evenodd", "d", "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"], [1, "image-content"], [1, "image-wrapper"], ["src", "../../../../assets/img/vector-younglady-with-laptop.png", "alt", "Professional working on laptop"]],
  template: function AboutSection1Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5)(6, "path", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " About Sharp Floor NC ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " At Sharp Floor NC, we specialize in providing cutting-edge custom manufacturing software solutions designed specifically for manufacturing companies in the aerospace, military, medical, and automotive industries. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " With years of experience and a dedicated team of experts, we have honed our skills to cater to the unique needs and challenges faced by businesses in these sectors. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11)(16, "a", 12)(17, "button", 13)(18, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Get Started");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16)(23, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton],
  styles: [".content-section[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n    margin: 60px auto;\r\n    padding: 40px 20px;\r\n}\r\n\r\n.content-card[_ngcontent-%COMP%] {\r\n    background: white;\r\n    border-radius: 20px;\r\n    padding: 50px;\r\n    box-shadow: 0 20px 60px rgba(0,0,0,0.1);\r\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.content-card[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 6px;\r\n    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\r\n}\r\n\r\n.content-card[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-5px);\r\n    box-shadow: 0 25px 70px rgba(0,0,0,0.15);\r\n}\r\n\r\n.section-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.header-icon[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n    height: 60px;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    border-radius: 15px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    font-weight: 800;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-clip: text;\r\n    margin: 0;\r\n}\r\n\r\n.content-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 50px;\r\n    align-items: center;\r\n}\r\n\r\n.text-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.description-text[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    line-height: 1.8;\r\n    color: #4a5568;\r\n    text-indent: 0;\r\n    margin: 0;\r\n}\r\n\r\n.image-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.image-wrapper[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    border-radius: 20px;\r\n    overflow: hidden;\r\n    box-shadow: 0 15px 40px rgba(0,0,0,0.15);\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.image-wrapper[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.03);\r\n}\r\n\r\n.image-wrapper[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);\r\n    z-index: 1;\r\n    transition: opacity 0.3s ease;\r\n}\r\n\r\n.image-wrapper[_ngcontent-%COMP%]:hover::before {\r\n    opacity: 0;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n    object-fit: cover;\r\n    display: block;\r\n    opacity: 1;\r\n}\r\n\r\n.cta-container[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n}\r\n\r\n.modern-button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding: 12px 30px !important;\r\n    font-size: 1.1rem !important;\r\n    border-radius: 50px !important;\r\n    transition: all 0.3s ease !important;\r\n    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3) !important;\r\n}\r\n\r\n.modern-button[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4) !important;\r\n}\r\n\r\n.modern-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.modern-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\r\n    transform: translateX(5px);\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .content-card[_ngcontent-%COMP%] {\r\n        padding: 30px 20px;\r\n    }\r\n    \r\n    .content-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n        gap: 30px;\r\n    }\r\n    \r\n    .section-header[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        text-align: center;\r\n    }\r\n    \r\n    .section-title[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n    \r\n    .description-text[_ngcontent-%COMP%] {\r\n        font-size: 1rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC1zZWN0aW9uMS9hYm91dC1zZWN0aW9uMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMscURBQXFEO0lBQ3JELGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiw2REFBNkQ7SUFDN0QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDZEQUE2RDtJQUM3RCw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLHFCQUFxQjtJQUNyQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGNBQWM7SUFDZCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix3Q0FBd0M7SUFDeEMsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsOEZBQThGO0lBQzlGLFVBQVU7SUFDViw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLDBEQUEwRDtBQUM5RDs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiwyREFBMkQ7QUFDL0Q7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLDBCQUEwQjtRQUMxQixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXNlY3Rpb24ge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDYwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDQwcHggMjBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY29udGVudC1jYXJkOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxufVxyXG5cclxuLmNvbnRlbnQtY2FyZDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDI1cHggNzBweCByZ2JhKDAsMCwwLDAuMTUpO1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWljb24ge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjVweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNvbnRlbnQtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgZ2FwOiA1MHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMjBweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgY29sb3I6ICM0YTU1Njg7XHJcbiAgICB0ZXh0LWluZGVudDogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmltYWdlLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW1hZ2Utd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDAgMTVweCA0MHB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uaW1hZ2Utd3JhcHBlcjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xyXG59XHJcblxyXG4uaW1hZ2Utd3JhcHBlcjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjEpIDAlLCByZ2JhKDExOCwgNzUsIDE2MiwgMC4xKSAxMDAlKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmltYWdlLXdyYXBwZXI6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmN0YS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLm1vZGVybi1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDMwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9kZXJuLWJ1dHRvbjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDEycHggMzBweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1vZGVybi1idXR0b24gc3ZnIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5tb2Rlcm4tYnV0dG9uOmhvdmVyIHN2ZyB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY29udGVudC1jYXJkIHtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250ZW50LWdyaWQge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIGdhcDogMzBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRlc2NyaXB0aW9uLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7388:
/*!*****************************************************************************!*\
  !*** ./src/app/components/about/about-section2/about-section2.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutSection2Component": () => (/* binding */ AboutSection2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);



class AboutSection2Component {}
AboutSection2Component.ɵfac = function AboutSection2Component_Factory(t) {
  return new (t || AboutSection2Component)();
};
AboutSection2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AboutSection2Component,
  selectors: [["app-about-section2"]],
  decls: 80,
  vars: 0,
  consts: [[1, "montserrat", "f-weight-800", "sf-taupe-color", "text-center"], [1, "montserrat", "about-description"], ["src", "../../../assets/img/Finger_Touch_Screen_Tablet.jpg", 1, "mobile"], ["src", "../../../../assets/img/Gear_silver.png", "alt", ""], [1, "sf-silver-bg"], ["id", "carouselExampleIndicators", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "2", "aria-label", "Slide 3"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "3", "aria-label", "Slide 4"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "4", "aria-label", "Slide 5"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "5", "aria-label", "Slide 6"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "6", "aria-label", "Slide 7"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "d-block", "w-100"], [1, "text-center"], [1, "bitter", "sf-taupe-color", "f-weight-800"], [1, "carousel-body", "about-description"], [1, "carousel-item"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["routerLink", "/home/contactus", 1, "contact-us"], ["mat-raised-button", "", "color", "primary"]],
  template: function AboutSection2Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "div")(2, "h3", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Our Mission: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " At Sharp Floor NC, our mission is to empower manufacturing companies with tailored software solutions that optimize their processes, enhance efficiency, and boost productivity. We understand that every business has its own distinct requirements, and that's why we are committed to delivering bespoke software that perfectly aligns with your company's goals and objectives. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2)(7, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "button", 7)(12, "button", 8)(13, "button", 9)(14, "button", 10)(15, "button", 11)(16, "button", 12)(17, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 16)(21, "div", 17)(22, "strong", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Tailored to Your Unique Needs: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Our custom software solutions are built from the ground up, ensuring that every feature is crafted to match your specific requirements. Say goodbye to unnecessary clutter and embrace a streamlined system that adapts seamlessly to your processes. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20)(27, "div", 16)(28, "div", 17)(29, "strong", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Enhanced Efficiency: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " By streamlining your workflows and automating repetitive tasks, our custom software significantly improves your operational efficiency. Spend less time on manual tasks and focus more on strategic decision-making. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20)(34, "div", 16)(35, "div", 17)(36, "strong", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Integration Capabilities: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Our custom software is designed to integrate smoothly with your existing systems, such as ERP and CRM, creating a cohesive technology environment. This ensures seamless data flow and minimizes data silos. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20)(41, "div", 16)(42, "div", 17)(43, "strong", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Scalability: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " As your manufacturing company grows, our custom software grows with you. We build solutions that are scalable and flexible, easily accommodating new features and functionality as your business expands. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20)(48, "div", 16)(49, "div", 17)(50, "strong", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Data Security: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " We understand the sensitivity of your manufacturing data and prioritize its security. Our custom software solutions come equipped with robust data encryption and access controls, safeguarding your critical information from unauthorized access. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20)(55, "div", 16)(56, "div", 17)(57, "strong", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Competitive Advantage: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " By utilizing custom software tailored to your business, you gain a significant competitive edge. Efficient processes, real-time data insights, and improved decision-making empower you to stay ahead of the competition. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 20)(62, "div", 16)(63, "div", 17)(64, "strong", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Cost-Effectiveness: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Investing in custom software might seem like a considerable upfront cost, but it pays off in the long run. Eliminate licensing fees and unnecessary features while enjoying the benefits of a tailored solution that precisely meets your needs. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Previous");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 26)(78, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Contact us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton],
  styles: ["section[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    max-width: 800px;\r\n    margin: auto;\r\n    min-height: 80vh;\r\n    padding: 15px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0 ;\r\n    width: 100%;\r\n    opacity: .2;\r\n    object-fit: cover;\r\n    height: 80vh;\r\n}\r\n\r\n\r\n\r\n.carousel[_ngcontent-%COMP%]{\r\n    height: 300px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC1zZWN0aW9uMi9hYm91dC1zZWN0aW9uMi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBOzs7R0FHRzs7QUFFSDtJQUNJLGFBQWE7QUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwIDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3BhY2l0eTogLjI7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGhlaWdodDogODB2aDtcclxufVxyXG5cclxuLyogLmNvbnRhY3QtdXN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDE1cHg7XHJcbn0gKi9cclxuXHJcbi5jYXJvdXNlbHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9418:
/*!*****************************************************************************!*\
  !*** ./src/app/components/about/about-section3/about-section3.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutSection3Component": () => (/* binding */ AboutSection3Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AboutSection3Component {}
AboutSection3Component.ɵfac = function AboutSection3Component_Factory(t) {
  return new (t || AboutSection3Component)();
};
AboutSection3Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AboutSection3Component,
  selectors: [["app-about-section3"]],
  decls: 43,
  vars: 0,
  consts: [[1, "features-section"], [1, "feature-card", "animate-card", 2, "animation-delay", "0.1s"], [1, "card-shine"], [1, "card-icon"], ["src", "../../../../assets/img/Why_custom_SW.png", "height", "60px", "alt", "Custom Software Icon"], [1, "montserrat", "card-title"], [1, "montserrat", "card-text"], [1, "card-footer"], ["routerLink", "/home/contactus", 1, "card-link"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16"], ["fill-rule", "evenodd", "d", "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"], [1, "feature-card", "animate-card", 2, "animation-delay", "0.2s"], ["src", "../../../../assets/img/Our_process.png", "height", "60px", "alt", "Process Icon"], [1, "feature-card", "animate-card", 2, "animation-delay", "0.3s"], ["src", "../../../../assets/img/Elevate_manufacturing.png", "height", "60px", "alt", "Manufacturing Icon"], ["routerLink", "/home/contact", 1, "inline-link"], ["routerLink", "/home/contactus", 1, "card-link", "primary-link"]],
  template: function AboutSection3Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Why Choose Custom Software? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " We firmly believe that one-size-fits-all solutions rarely meet the complex demands of modern manufacturing businesses. Off-the-shelf software might seem convenient, but it often falls short in addressing critical workflows and constraints specific to your industry. That's where custom software shines. When you choose Sharp Floor NC's custom manufacturing software, you unlock a myriad of benefits. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Learn More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Our Process ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " At Sharp Floor NC, we take a collaborative approach to develop your custom manufacturing software. Our team of experts works closely with you to understand your business processes, challenges, and goals. We then craft a detailed plan and design a solution that aligns perfectly with your requirements. Throughout the development process, we maintain open communication, ensuring that you are involved every step of the way. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7)(23, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Get Started ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Let's Elevate Your Manufacturing Efficiency ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Discover the power of custom manufacturing software tailored to your aerospace, military, medical, or automotive company. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Contact us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " today for a consultation, and let's unlock the true potential of your business together. At Sharp Floor NC, we are committed to your success! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7)(39, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Contact Us Now ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "svg", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".features-section[_ngcontent-%COMP%] {\r\n    max-width: 1300px;\r\n    margin: 80px auto;\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    padding: 40px 20px;\r\n    gap: 35px;\r\n}\r\n\r\n.feature-card[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background: white;\r\n    border-radius: 20px;\r\n    padding: 40px 30px;\r\n    box-shadow: 0 10px 40px rgba(0,0,0,0.08);\r\n    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\r\n    overflow: hidden;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 1px solid rgba(102, 126, 234, 0.1);\r\n}\r\n\r\n.feature-card[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 4px;\r\n    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\r\n    transform: scaleX(0);\r\n    transition: transform 0.4s ease;\r\n}\r\n\r\n.feature-card[_ngcontent-%COMP%]:hover::before {\r\n    transform: scaleX(1);\r\n}\r\n\r\n.card-shine[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: -100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);\r\n    transition: left 0.6s ease;\r\n}\r\n\r\n.feature-card[_ngcontent-%COMP%]:hover   .card-shine[_ngcontent-%COMP%] {\r\n    left: 100%;\r\n}\r\n\r\n.feature-card[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-10px) scale(1.02);\r\n    box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);\r\n    border-color: rgba(102, 126, 234, 0.3);\r\n}\r\n\r\n.card-icon[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 80px;\r\n    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);\r\n    border-radius: 16px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 25px;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.feature-card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%] {\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    transform: rotate(5deg) scale(1.1);\r\n}\r\n\r\n.card-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    filter: grayscale(0);\r\n    transition: filter 0.3s ease;\r\n}\r\n\r\n.feature-card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    filter: brightness(0) invert(1);\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    font-weight: 800;\r\n    color: #2d3748;\r\n    margin-bottom: 20px;\r\n    line-height: 1.3;\r\n}\r\n\r\n.card-text[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    line-height: 1.7;\r\n    color: #4a5568;\r\n    flex-grow: 1;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%] {\r\n    margin-top: auto;\r\n    padding-top: 20px;\r\n    border-top: 1px solid rgba(0,0,0,0.05);\r\n}\r\n\r\n.card-link[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    color: #667eea;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n    transition: all 0.3s ease;\r\n    font-size: 1rem;\r\n}\r\n\r\n.card-link[_ngcontent-%COMP%]:hover {\r\n    color: #764ba2;\r\n    gap: 12px;\r\n}\r\n\r\n.card-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.card-link[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\r\n    transform: translateX(3px);\r\n}\r\n\r\n.primary-link[_ngcontent-%COMP%] {\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    color: white;\r\n    padding: 12px 24px;\r\n    border-radius: 50px;\r\n    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);\r\n}\r\n\r\n.primary-link[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);\r\n    transform: translateY(-2px);\r\n    color: white;\r\n}\r\n\r\n.inline-link[_ngcontent-%COMP%] {\r\n    color: #667eea;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n    border-bottom: 2px solid transparent;\r\n    transition: border-color 0.3s ease;\r\n}\r\n\r\n.inline-link[_ngcontent-%COMP%]:hover {\r\n    border-bottom-color: #667eea;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_cardFadeIn {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(30px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n.animate-card[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_cardFadeIn 0.6s ease-out forwards;\r\n    opacity: 0;\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n    .features-section[_ngcontent-%COMP%] {\r\n        grid-template-columns: repeat(2, 1fr);\r\n        gap: 25px;\r\n    }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    .features-section[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n        padding: 20px;\r\n        margin: 40px auto;\r\n    }\r\n    \r\n    .feature-card[_ngcontent-%COMP%] {\r\n        padding: 30px 20px;\r\n    }\r\n    \r\n    .card-title[_ngcontent-%COMP%] {\r\n        font-size: 1.3rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC1zZWN0aW9uMy9hYm91dC1zZWN0aW9uMy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLDREQUE0RDtJQUM1RCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCw0REFBNEQ7SUFDNUQsb0JBQW9CO0lBQ3BCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUZBQW1GO0lBQ25GLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxnREFBZ0Q7SUFDaEQsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiw4RkFBOEY7SUFDOUYsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw2REFBNkQ7SUFDN0Qsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSw2REFBNkQ7SUFDN0QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksK0NBQStDO0lBQy9DLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsb0NBQW9DO0lBQ3BDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLFVBQVU7QUFDZDs7QUFFQTtJQUNJO1FBQ0kscUNBQXFDO1FBQ3JDLFNBQVM7SUFDYjtBQUNKOztBQUVBO0lBQ0k7UUFDSSwwQkFBMEI7UUFDMUIsYUFBYTtRQUNiLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmZlYXR1cmVzLXNlY3Rpb24ge1xyXG4gICAgbWF4LXdpZHRoOiAxMzAwcHg7XHJcbiAgICBtYXJnaW46IDgwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xyXG4gICAgZ2FwOiAzNXB4O1xyXG59XHJcblxyXG4uZmVhdHVyZS1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDQwcHggMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwwLDAsMC4wOCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMSk7XHJcbn1cclxuXHJcbi5mZWF0dXJlLWNhcmQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xyXG59XHJcblxyXG4uZmVhdHVyZS1jYXJkOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbn1cclxuXHJcbi5jYXJkLXNoaW5lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCByZ2JhKDI1NSwyNTUsMjU1LDAuMyksIHRyYW5zcGFyZW50KTtcclxuICAgIHRyYW5zaXRpb246IGxlZnQgMC42cyBlYXNlO1xyXG59XHJcblxyXG4uZmVhdHVyZS1jYXJkOmhvdmVyIC5jYXJkLXNoaW5lIHtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbn1cclxuXHJcbi5mZWF0dXJlLWNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSBzY2FsZSgxLjAyKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4yKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xyXG59XHJcblxyXG4uY2FyZC1pY29uIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjEpIDAlLCByZ2JhKDExOCwgNzUsIDE2MiwgMC4xKSAxMDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5mZWF0dXJlLWNhcmQ6aG92ZXIgLmNhcmQtaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZykgc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLmNhcmQtaWNvbiBpbWcge1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uZmVhdHVyZS1jYXJkOmhvdmVyIC5jYXJkLWljb24gaW1nIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGNvbG9yOiAjMmQzNzQ4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbn1cclxuXHJcbi5jYXJkLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNztcclxuICAgIGNvbG9yOiAjNGE1NTY4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDUpO1xyXG59XHJcblxyXG4uY2FyZC1saW5rIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgY29sb3I6ICM2NjdlZWE7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmNhcmQtbGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogIzc2NGJhMjtcclxuICAgIGdhcDogMTJweDtcclxufVxyXG5cclxuLmNhcmQtbGluayBzdmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmNhcmQtbGluazpob3ZlciBzdmcge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7XHJcbn1cclxuXHJcbi5wcmltYXJ5LWxpbmsge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcclxufVxyXG5cclxuLnByaW1hcnktbGluazpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC40KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmlubGluZS1saW5rIHtcclxuICAgIGNvbG9yOiAjNjY3ZWVhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5pbmxpbmUtbGluazpob3ZlciB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNjY3ZWVhO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNhcmRGYWRlSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hbmltYXRlLWNhcmQge1xyXG4gICAgYW5pbWF0aW9uOiBjYXJkRmFkZUluIDAuNnMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuZmVhdHVyZXMtc2VjdGlvbiB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgICAgICBnYXA6IDI1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLmZlYXR1cmVzLXNlY3Rpb24ge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mZWF0dXJlLWNhcmQge1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2468:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _about_section1_about_section1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-section1/about-section1.component */ 6679);
/* harmony import */ var _about_section2_about_section2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-section2/about-section2.component */ 7388);
/* harmony import */ var _about_section3_about_section3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-section3/about-section3.component */ 9418);




class AboutComponent {
  constructor() {}
  ngOnInit() {}
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) {
  return new (t || AboutComponent)();
};
AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AboutComponent,
  selectors: [["app-about"]],
  decls: 20,
  vars: 0,
  consts: [[1, "about-main"], [1, "hero-section"], [1, "hero-overlay"], [1, "hero-content", "animate-fade-in"], [1, "hero-title"], [1, "hero-subtitle"], [1, "hero-badges"], [1, "badge"]],
  template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Welcome to Sharp Floor NC");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Crafting Custom Manufacturing Software Solutions");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Aerospace");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Military");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Medical");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Automotive");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "app-about-section1")(18, "app-about-section2")(19, "app-about-section3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_about_section1_about_section1_component__WEBPACK_IMPORTED_MODULE_0__.AboutSection1Component, _about_section2_about_section2_component__WEBPACK_IMPORTED_MODULE_1__.AboutSection2Component, _about_section3_about_section3_component__WEBPACK_IMPORTED_MODULE_2__.AboutSection3Component],
  styles: ["section[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    height: calc(100vh - 70px);\r\n    padding: 200px 50px 50px 50px;\r\n    margin: 100px;\r\n}\r\n\r\n.carousel-container[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%]{\r\n    height: calc(100vh - 300px);\r\n    text-align: center;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    object-fit: cover;\r\n    opacity: .5;\r\n    margin: auto;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    text-indent: 50px;\r\n}\r\n\r\n.about-main[_ngcontent-%COMP%]{\r\n    max-width: 1600px;\r\n    margin: auto;\r\n    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\r\n    animation: _ngcontent-%COMP%_fadeIn 0.8s ease-in;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%]{\r\n    padding-bottom: 100px;\r\n}\r\n\r\n.about-description[_ngcontent-%COMP%]{\r\n    font-size: x-large;\r\n}\r\n.img-container[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%]{\r\n    padding: 200px 200px 50px 200px;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]{\r\n    color: aliceblue;\r\n}\r\n\r\n.slide[_ngcontent-%COMP%]{\r\n    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    box-shadow: 0 10px 40px rgba(0,0,0,0.2);\r\n}\r\n\r\n.carousel-title[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    font-weight: 800;\r\n    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);\r\n}\r\n\r\n.carousel-body[_ngcontent-%COMP%]{\r\n    color: aliceblue;\r\n}\r\n\r\n\r\n.hero-section[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 70vh;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    margin-bottom: 60px;\r\n}\r\n\r\n.hero-section[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"rgba(255,255,255,0.1)\" d=\"M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\"></path></svg>') no-repeat bottom;\r\n    background-size: cover;\r\n}\r\n\r\n.hero-overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%);\r\n}\r\n\r\n.hero-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    z-index: 2;\r\n    text-align: center;\r\n    color: white;\r\n    padding: 40px;\r\n}\r\n\r\n.hero-title[_ngcontent-%COMP%] {\r\n    font-size: 3.5rem;\r\n    font-weight: 800;\r\n    margin-bottom: 20px;\r\n    text-shadow: 2px 4px 8px rgba(0,0,0,0.3);\r\n    letter-spacing: -1px;\r\n}\r\n\r\n.hero-subtitle[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    margin-bottom: 30px;\r\n    opacity: 0.95;\r\n    font-weight: 300;\r\n}\r\n\r\n.hero-badges[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 15px;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%] {\r\n    background: rgba(255, 255, 255, 0.2);\r\n    -webkit-backdrop-filter: blur(10px);\r\n            backdrop-filter: blur(10px);\r\n    padding: 10px 25px;\r\n    border-radius: 50px;\r\n    font-weight: 600;\r\n    border: 2px solid rgba(255, 255, 255, 0.3);\r\n    transition: all 0.3s ease;\r\n    cursor: default;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.3);\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 10px 20px rgba(0,0,0,0.2);\r\n}\r\n\r\n\r\n@keyframes _ngcontent-%COMP%_fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_slideInUp {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(30px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n.animate-fade-in[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_fadeIn 1s ease-in;\r\n}\r\n\r\n.animate-slide-in[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_slideInUp 0.8s ease-out;\r\n}\r\n\r\n@media (max-width: 1000px){\r\n    section[_ngcontent-%COMP%]{\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        min-height: calc(100vh - 70px);\r\n        padding: 20px;\r\n        margin: 10px;\r\n        text-align: center;\r\n    }\r\n    .carousel-item[_ngcontent-%COMP%]{\r\n        padding: 10px;\r\n    }\r\n\r\n    .carousel[_ngcontent-%COMP%]{\r\n        padding-bottom: 10px;\r\n    }\r\n}\r\n@media (max-width: 600px){\r\n    section[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n\r\n    .mobile[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiw2REFBNkQ7SUFDN0QsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtRUFBbUU7SUFDbkUsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw2REFBNkQ7SUFDN0QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULG1kQUFtZDtJQUNuZCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULHlGQUF5RjtBQUM3Rjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiwwQ0FBMEM7SUFDMUMseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsMkJBQTJCO0lBQzNCLHVDQUF1QztBQUMzQzs7QUFFQSxlQUFlO0FBQ2Y7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDViwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLDBCQUEwQjtRQUMxQiw4QkFBOEI7UUFDOUIsYUFBYTtRQUNiLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxvQkFBb0I7SUFDeEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztBQUVKIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcclxuICAgIHBhZGRpbmc6IDIwMHB4IDUwcHggNTBweCA1MHB4O1xyXG4gICAgbWFyZ2luOiAxMDBweDtcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcm91c2Vse1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzAwcHgpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5we1xyXG4gICAgdGV4dC1pbmRlbnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5hYm91dC1tYWlue1xyXG4gICAgbWF4LXdpZHRoOiAxNjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVmN2ZhIDAlLCAjYzNjZmUyIDEwMCUpO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC44cyBlYXNlLWluO1xyXG59XHJcblxyXG4uY2Fyb3VzZWx7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi5hYm91dC1kZXNjcmlwdGlvbntcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG4uaW1nLWNvbnRhaW5lcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcm91c2VsLWl0ZW17XHJcbiAgICBwYWRkaW5nOiAyMDBweCAyMDBweCA1MHB4IDIwMHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbSA+IHB7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG4uc2xpZGV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDQwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtdGl0bGV7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLDAsMCwwLjMpO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtYm9keXtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbi8qIEhlcm8gU2VjdGlvbiAqL1xyXG4uaGVyby1zZWN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbn1cclxuXHJcbi5oZXJvLXNlY3Rpb246OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTQ0MCAzMjBcIj48cGF0aCBmaWxsPVwicmdiYSgyNTUsMjU1LDI1NSwwLjEpXCIgZD1cIk0wLDk2TDQ4LDExMkM5NiwxMjgsMTkyLDE2MCwyODgsMTYwQzM4NCwxNjAsNDgwLDEyOCw1NzYsMTIyLjdDNjcyLDExNyw3NjgsMTM5LDg2NCwxMzguN0M5NjAsMTM5LDEwNTYsMTE3LDExNTIsMTAxLjNDMTI0OCw4NSwxMzQ0LDc1LDEzOTIsNjkuM0wxNDQwLDY0TDE0NDAsMzIwTDEzOTIsMzIwQzEzNDQsMzIwLDEyNDgsMzIwLDExNTIsMzIwQzEwNTYsMzIwLDk2MCwzMjAsODY0LDMyMEM3NjgsMzIwLDY3MiwzMjAsNTc2LDMyMEM0ODAsMzIwLDM4NCwzMjAsMjg4LDMyMEMxOTIsMzIwLDk2LDMyMCw0OCwzMjBMMCwzMjBaXCI+PC9wYXRoPjwvc3ZnPicpIG5vLXJlcGVhdCBib3R0b207XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uaGVyby1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMjAlIDUwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjEpIDAlLCB0cmFuc3BhcmVudCA1MCUpO1xyXG59XHJcblxyXG4uaGVyby1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG59XHJcblxyXG4uaGVyby10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCA0cHggOHB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG59XHJcblxyXG4uaGVyby1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjk1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmhlcm8tYmFkZ2VzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLmJhZGdlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG5cclxuLyogQW5pbWF0aW9ucyAqL1xyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVJblVwIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYW5pbWF0ZS1mYWRlLWluIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5hbmltYXRlLXNsaWRlLWluIHtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVJblVwIDAuOHMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpe1xyXG4gICAgc2VjdGlvbntcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtaXRlbXtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJvdXNlbHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgc2VjdGlvbntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vYmlsZXtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1922:
/*!*********************************************************!*\
  !*** ./src/app/components/account/account.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountComponent": () => (/* binding */ AccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _basicnav_basicnav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basicnav/basicnav.component */ 6724);



class AccountComponent {
  constructor() {}
  ngOnInit() {}
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) {
  return new (t || AccountComponent)();
};
AccountComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AccountComponent,
  selectors: [["app-account"]],
  decls: 2,
  vars: 0,
  template: function AccountComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-basicnav")(1, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _basicnav_basicnav_component__WEBPACK_IMPORTED_MODULE_0__.BasicnavComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 760:
/*!*************************************************************************!*\
  !*** ./src/app/components/account/accountmain/accountmain.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountmainComponent": () => (/* binding */ AccountmainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AccountmainComponent {
  constructor() {}
  ngOnInit() {}
}
AccountmainComponent.ɵfac = function AccountmainComponent_Factory(t) {
  return new (t || AccountmainComponent)();
};
AccountmainComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AccountmainComponent,
  selectors: [["app-accountmain"]],
  decls: 2,
  vars: 0,
  template: function AccountmainComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "accountmain works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5872:
/*!*********************************************************************!*\
  !*** ./src/app/components/account/dashboard/dashboard.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DashboardComponent {
  constructor() {}
  ngOnInit() {}
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)();
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 2,
  vars: 0,
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8063:
/*!*****************************************************************!*\
  !*** ./src/app/components/account/profile/profile.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ProfileComponent {
  constructor() {}
  ngOnInit() {}
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)();
};
ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["app-profile"]],
  decls: 2,
  vars: 0,
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5644:
/*!*******************************************************************!*\
  !*** ./src/app/components/account/settings/settings.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SettingsComponent {
  constructor() {}
  ngOnInit() {}
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
  return new (t || SettingsComponent)();
};
SettingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SettingsComponent,
  selectors: [["app-settings"]],
  decls: 2,
  vars: 0,
  template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "settings works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8587:
/*!*********************************************************************!*\
  !*** ./src/app/components/allow-cookies/allow-cookies.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllowCookiesComponent": () => (/* binding */ AllowCookiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);



class AllowCookiesComponent {
  constructor(_botomSheetRef) {
    this._botomSheetRef = _botomSheetRef;
  }
  closeBS() {
    this._botomSheetRef.dismiss(true);
  }
}
AllowCookiesComponent.ɵfac = function AllowCookiesComponent_Factory(t) {
  return new (t || AllowCookiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__.MatBottomSheetRef));
};
AllowCookiesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AllowCookiesComponent,
  selectors: [["app-allow-cookies"]],
  decls: 6,
  vars: 0,
  consts: [["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn"]],
  template: function AllowCookiesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "We collect cookies to analyze our website traffic and performance; we never collect any personal data!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllowCookiesComponent_Template_button_click_2_listener() {
        return ctx.closeBS();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Allow Cookies\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Disable Cookies\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9013:
/*!***********************************************************!*\
  !*** ./src/app/components/articles/articles.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var _assets_json_articles_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlesComponent": () => (/* binding */ ArticlesComponent)
/* harmony export */ });
/* harmony import */ var _assets_json_articles_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/json/articles.json */ 65);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);







const _c0 = function (a0) {
  return {
    "a": a0
  };
};
function ArticlesComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 10)(1, "a", 11)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const title_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, title_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](title_r3);
  }
}
function ArticlesComponent_article_16_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("animation-delay", i_r7 * 0.1 + "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6.listTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6.listBody);
  }
}
function ArticlesComponent_article_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 12)(1, "div", 13)(2, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 15)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "calendar_today");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "time", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 17)(10, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ArticlesComponent_article_16_div_13_Template, 7, 5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 21)(15, "div", 22)(16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "insights");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 25)(23, "a", 26)(24, "button", 27)(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Get Started");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const art_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](art_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](art_r4.dateCreated);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](art_r4.introductionBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", art_r4.list);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](art_r4.conclusionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](art_r4.conclusion);
  }
}
function ArticlesComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "menu_book");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Select an Article");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Choose an article from the list above to start reading");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class ArticlesComponent {
  constructor(_activatedRoute) {
    this._activatedRoute = _activatedRoute;
    this.articles = /*#__PURE__*/ (_assets_json_articles_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_assets_json_articles_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_assets_json_articles_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
    this.articleTitles = ['The Real Cost of Custom Software Development: Beyond Dollars and Cents', 'The Advantages of Custom Manufacturing Execution System Software for Manufacturing Companies', 'Embracing Software Customization: The Key to Manufacturing Companies\' Success', 'The Perils of Poor Implementation: Why Manufacturing Companies Fail in Digital Transformation'];
    this.articleItem = new Promise((resolve, reject) => {
      this._activatedRoute.queryParams.subscribe({
        next: data => {
          this.selectedArticle = this.findArticle(data['a']);
          if (this.selectedArticle) {
            resolve(data['a']);
          } else {
            this.selectedArticle = this.findArticle("Embracing Software Customization: The Key to Manufacturing Companies' Success");
          }
        }
      });
    });
  }
  findArticle(title) {
    return this.articles.articles.find(art => art.title == title);
  }
  ngOnInit() {}
}
ArticlesComponent.ɵfac = function ArticlesComponent_Factory(t) {
  return new (t || ArticlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
};
ArticlesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ArticlesComponent,
  selectors: [["app-articles"]],
  decls: 18,
  vars: 3,
  consts: [[1, "articles-container"], [1, "articles-header", "animate-fade-in"], [1, "page-title"], [1, "page-subtitle"], [1, "articles-nav"], [1, "nav-panel"], [1, "articles-list"], ["class", "article-list-item", 4, "ngFor", "ngForOf"], ["class", "article-content animate-slide-in", 4, "ngIf"], ["class", "no-selection", 4, "ngIf"], [1, "article-list-item"], ["routerLink", "/home/articles", 1, "article-link", 3, "queryParams"], [1, "article-content", "animate-slide-in"], [1, "article-hero"], [1, "article-title"], [1, "article-meta"], [1, "article-date"], [1, "article-intro"], [1, "intro-text"], [1, "article-sections"], ["class", "section-card", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "article-conclusion"], [1, "conclusion-icon"], [1, "conclusion-title"], [1, "conclusion-text"], [1, "article-footer"], ["routerLink", "/home/contactus"], ["mat-raised-button", "", "color", "primary", 1, "cta-button"], [1, "section-card"], [1, "section-number"], [1, "section-title"], [1, "section-body"], [1, "no-selection"]],
  template: function ArticlesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Knowledge Center");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Insights and expertise on manufacturing software solutions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-accordion", 4)(7, "mat-expansion-panel", 5)(8, "mat-expansion-panel-header")(9, "mat-panel-title")(10, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "article");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Browse Articles");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ArticlesComponent_li_15_Template, 6, 4, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ArticlesComponent_article_16_Template, 29, 6, "article", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ArticlesComponent_div_17_Template, 7, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.articleTitles);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedArticle);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.selectedArticle);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionPanelTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon],
  styles: [".articles-container[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 40px 20px;\r\n    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\r\n    min-height: 100vh;\r\n}\r\n\r\n.articles-header[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n    padding: 40px 20px;\r\n}\r\n\r\n.page-title[_ngcontent-%COMP%] {\r\n    font-size: 3.5rem;\r\n    font-weight: 800;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-clip: text;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.page-subtitle[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n    color: #4a5568;\r\n    font-weight: 300;\r\n}\r\n\r\n.articles-nav[_ngcontent-%COMP%] {\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.nav-panel[_ngcontent-%COMP%] {\r\n    background: white !important;\r\n    border-radius: 15px !important;\r\n    box-shadow: 0 10px 40px rgba(0,0,0,0.08) !important;\r\n    overflow: hidden;\r\n}\r\n\r\n.nav-panel[_ngcontent-%COMP%]     .mat-expansion-panel-header {\r\n    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);\r\n    padding: 20px 24px;\r\n    border-radius: 15px;\r\n}\r\n\r\n.nav-panel[_ngcontent-%COMP%]     .mat-expansion-panel-header:hover {\r\n    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);\r\n}\r\n\r\n.nav-panel[_ngcontent-%COMP%]     .mat-panel-title {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 12px;\r\n    font-size: 1.2rem;\r\n    font-weight: 600;\r\n    color: #2d3748;\r\n}\r\n\r\n.nav-panel[_ngcontent-%COMP%]     .mat-panel-title mat-icon {\r\n    color: #667eea;\r\n}\r\n\r\n.articles-list[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 20px 10px;\r\n    margin: 0;\r\n}\r\n\r\n.article-list-item[_ngcontent-%COMP%] {\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.article-link[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding: 15px 20px;\r\n    color: #4a5568;\r\n    text-decoration: none;\r\n    border-radius: 10px;\r\n    transition: all 0.3s ease;\r\n    font-size: 1.05rem;\r\n}\r\n\r\n.article-link[_ngcontent-%COMP%]:hover {\r\n    background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);\r\n    color: #667eea;\r\n    transform: translateX(5px);\r\n}\r\n\r\n.article-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n    color: #667eea;\r\n    font-size: 20px;\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n.article-content[_ngcontent-%COMP%] {\r\n    background: white;\r\n    border-radius: 20px;\r\n    padding: 60px 50px;\r\n    box-shadow: 0 20px 60px rgba(0,0,0,0.1);\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.article-content[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 6px;\r\n    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\r\n}\r\n\r\n.article-hero[_ngcontent-%COMP%] {\r\n    margin-bottom: 40px;\r\n    padding-bottom: 30px;\r\n    border-bottom: 2px solid rgba(102, 126, 234, 0.1);\r\n}\r\n\r\n.article-title[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    font-weight: 800;\r\n    color: #2d3748;\r\n    margin-bottom: 20px;\r\n    line-height: 1.3;\r\n}\r\n\r\n.article-meta[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    color: #718096;\r\n}\r\n\r\n.article-meta[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    width: 18px;\r\n    height: 18px;\r\n}\r\n\r\n.article-date[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    font-style: italic;\r\n}\r\n\r\n.article-intro[_ngcontent-%COMP%] {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.intro-text[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n    line-height: 1.9;\r\n    color: #4a5568;\r\n    padding: 30px;\r\n    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);\r\n    border-radius: 15px;\r\n    border-left: 4px solid #667eea;\r\n}\r\n\r\n.article-sections[_ngcontent-%COMP%] {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.section-card[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background: rgba(102, 126, 234, 0.02);\r\n    border-radius: 15px;\r\n    padding: 30px 30px 30px 80px;\r\n    margin-bottom: 25px;\r\n    border-left: 4px solid #667eea;\r\n    transition: all 0.3s ease;\r\n    animation: _ngcontent-%COMP%_cardFadeIn 0.6s ease-out forwards;\r\n    opacity: 0;\r\n}\r\n\r\n.section-card[_ngcontent-%COMP%]:hover {\r\n    background: rgba(102, 126, 234, 0.05);\r\n    transform: translateX(5px);\r\n    box-shadow: 0 5px 20px rgba(102, 126, 234, 0.1);\r\n}\r\n\r\n.section-number[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 20px;\r\n    top: 30px;\r\n    width: 45px;\r\n    height: 45px;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    color: white;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-weight: 800;\r\n    font-size: 1.2rem;\r\n    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    color: #2d3748;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.section-body[_ngcontent-%COMP%] {\r\n    font-size: 1.05rem;\r\n    line-height: 1.8;\r\n    color: #4a5568;\r\n    margin: 0;\r\n}\r\n\r\n.article-conclusion[_ngcontent-%COMP%] {\r\n    background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);\r\n    border-radius: 20px;\r\n    padding: 40px;\r\n    margin-bottom: 40px;\r\n    text-align: center;\r\n}\r\n\r\n.conclusion-icon[_ngcontent-%COMP%] {\r\n    width: 70px;\r\n    height: 70px;\r\n    margin: 0 auto 25px;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);\r\n}\r\n\r\n.conclusion-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n    font-size: 36px;\r\n    width: 36px;\r\n    height: 36px;\r\n}\r\n\r\n.conclusion-title[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    font-weight: 800;\r\n    color: #2d3748;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.conclusion-text[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    line-height: 1.9;\r\n    color: #4a5568;\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.article-footer[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding-top: 30px;\r\n    border-top: 2px solid rgba(102, 126, 234, 0.1);\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding: 15px 40px !important;\r\n    font-size: 1.2rem !important;\r\n    border-radius: 50px !important;\r\n    transition: all 0.3s ease !important;\r\n    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3) !important;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4) !important;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\r\n    transform: translateX(5px);\r\n}\r\n\r\n.no-selection[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 100px 20px;\r\n    background: white;\r\n    border-radius: 20px;\r\n    box-shadow: 0 10px 40px rgba(0,0,0,0.08);\r\n}\r\n\r\n.no-selection[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n    font-size: 80px;\r\n    width: 80px;\r\n    height: 80px;\r\n    color: #667eea;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.no-selection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    font-weight: 700;\r\n    color: #2d3748;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.no-selection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    color: #718096;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_slideInUp {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(30px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_cardFadeIn {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(20px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n.animate-fade-in[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_fadeIn 0.8s ease-in;\r\n}\r\n\r\n.animate-slide-in[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_slideInUp 0.8s ease-out;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .page-title[_ngcontent-%COMP%] {\r\n        font-size: 2.5rem;\r\n    }\r\n    \r\n    .article-content[_ngcontent-%COMP%] {\r\n        padding: 40px 25px;\r\n    }\r\n    \r\n    .article-title[_ngcontent-%COMP%] {\r\n        font-size: 1.8rem;\r\n    }\r\n    \r\n    .section-card[_ngcontent-%COMP%] {\r\n        padding: 25px 20px 25px 70px;\r\n    }\r\n    \r\n    .section-number[_ngcontent-%COMP%] {\r\n        width: 40px;\r\n        height: 40px;\r\n        left: 15px;\r\n        font-size: 1rem;\r\n    }\r\n    \r\n    .conclusion-title[_ngcontent-%COMP%] {\r\n        font-size: 1.5rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsNkRBQTZEO0lBQzdELGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiw2REFBNkQ7SUFDN0QsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLG1EQUFtRDtJQUNuRCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnR0FBZ0c7SUFDaEcsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDhGQUE4RjtBQUNsRzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0dBQWdHO0lBQ2hHLGNBQWM7SUFDZCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxjQUFj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QUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDViwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSw0QkFBNEI7SUFDaEM7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLFVBQVU7UUFDVixlQUFlO0lBQ25COztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJ0aWNsZXMtY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVmN2ZhIDAlLCAjYzNjZmUyIDEwMCUpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5hcnRpY2xlcy1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIHBhZGRpbmc6IDQwcHggMjBweDtcclxufVxyXG5cclxuLnBhZ2UtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnBhZ2Utc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBjb2xvcjogIzRhNTU2ODtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5hcnRpY2xlcy1uYXYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLm5hdi1wYW5lbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDQwcHggcmdiYSgwLDAsMCwwLjA4KSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm5hdi1wYW5lbCA6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4wNSkgMCUsIHJnYmEoMTE4LCA3NSwgMTYyLCAwLjA1KSAxMDAlKTtcclxuICAgIHBhZGRpbmc6IDIwcHggMjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5uYXYtcGFuZWwgOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMSkgMCUsIHJnYmEoMTE4LCA3NSwgMTYyLCAwLjEpIDEwMCUpO1xyXG59XHJcblxyXG4ubmF2LXBhbmVsIDo6bmctZGVlcCAubWF0LXBhbmVsLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMyZDM3NDg7XHJcbn1cclxuXHJcbi5uYXYtcGFuZWwgOjpuZy1kZWVwIC5tYXQtcGFuZWwtdGl0bGUgbWF0LWljb24ge1xyXG4gICAgY29sb3I6ICM2NjdlZWE7XHJcbn1cclxuXHJcbi5hcnRpY2xlcy1saXN0IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5hcnRpY2xlLWxpc3QtaXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5hcnRpY2xlLWxpbmsge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBjb2xvcjogIzRhNTU2ODtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xyXG59XHJcblxyXG4uYXJ0aWNsZS1saW5rOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4wOCkgMCUsIHJnYmEoMTE4LCA3NSwgMTYyLCAwLjA4KSAxMDAlKTtcclxuICAgIGNvbG9yOiAjNjY3ZWVhO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbn1cclxuXHJcbi5hcnRpY2xlLWxpbmsgbWF0LWljb24ge1xyXG4gICAgY29sb3I6ICM2NjdlZWE7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmFydGljbGUtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDIwcHggNjBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYXJ0aWNsZS1jb250ZW50OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxufVxyXG5cclxuLmFydGljbGUtaGVybyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjEpO1xyXG59XHJcblxyXG4uYXJ0aWNsZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogIzJkMzc0ODtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG59XHJcblxyXG4uYXJ0aWNsZS1tZXRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgY29sb3I6ICM3MTgwOTY7XHJcbn1cclxuXHJcbi5hcnRpY2xlLW1ldGEgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5hcnRpY2xlLWRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uYXJ0aWNsZS1pbnRybyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uaW50cm8tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjk7XHJcbiAgICBjb2xvcjogIzRhNTU2ODtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMDUpIDAlLCByZ2JhKDExOCwgNzUsIDE2MiwgMC4wNSkgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjNjY3ZWVhO1xyXG59XHJcblxyXG4uYXJ0aWNsZS1zZWN0aW9ucyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4wMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMzBweCAzMHB4IDMwcHggODBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICM2NjdlZWE7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgYW5pbWF0aW9uOiBjYXJkRmFkZUluIDAuNnMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi1jYXJkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4wNSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjEpO1xyXG59XHJcblxyXG4uc2VjdGlvbi1udW1iZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHRvcDogMzBweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMyZDM3NDg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi1ib2R5IHtcclxuICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICBjb2xvcjogIzRhNTU2ODtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmFydGljbGUtY29uY2x1c2lvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMDgpIDAlLCByZ2JhKDExOCwgNzUsIDE2MiwgMC4wOCkgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb25jbHVzaW9uLWljb24ge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjVweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XHJcbn1cclxuXHJcbi5jb25jbHVzaW9uLWljb24gbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi5jb25jbHVzaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogIzJkMzc0ODtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jb25jbHVzaW9uLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS45O1xyXG4gICAgY29sb3I6ICM0YTU1Njg7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5hcnRpY2xlLWZvb3RlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMSk7XHJcbn1cclxuXHJcbi5jdGEtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggNDBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3RhLWJ1dHRvbjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDE1cHggNDBweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN0YS1idXR0b24gbWF0LWljb24ge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmN0YS1idXR0b246aG92ZXIgbWF0LWljb24ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbn1cclxuXHJcbi5uby1zZWxlY3Rpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTAwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwwLDAsMC4wOCk7XHJcbn1cclxuXHJcbi5uby1zZWxlY3Rpb24gbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBjb2xvcjogIzY2N2VlYTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5uby1zZWxlY3Rpb24gaDMge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMmQzNzQ4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm5vLXNlbGVjdGlvbiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgY29sb3I6ICM3MTgwOTY7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluVXAge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY2FyZEZhZGVJbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxufVxyXG5cclxuLmFuaW1hdGUtZmFkZS1pbiB7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjhzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5hbmltYXRlLXNsaWRlLWluIHtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVJblVwIDAuOHMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnBhZ2UtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYXJ0aWNsZS1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiA0MHB4IDI1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hcnRpY2xlLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlY3Rpb24tY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAyMHB4IDI1cHggNzBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlY3Rpb24tbnVtYmVyIHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb25jbHVzaW9uLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6724:
/*!***********************************************************!*\
  !*** ./src/app/components/basicnav/basicnav.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicnavComponent": () => (/* binding */ BasicnavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);






const _c0 = function () {
  return {
    exact: true
  };
};
class BasicnavComponent {
  constructor() {}
  ngOnInit() {}
}
BasicnavComponent.ɵfac = function BasicnavComponent_Factory(t) {
  return new (t || BasicnavComponent)();
};
BasicnavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BasicnavComponent,
  selectors: [["app-basicnav"]],
  decls: 61,
  vars: 2,
  consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "sf-isabelline-bg"], [1, "container-fluid"], ["src", "../../../assets/img/logo.png", "width", "25px", "alt", "Sharp Floor NC", "matTooltip", "Sharp Floor NC", 1, "bg-light"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["mat-list-item", "", "routerLinkActive", "is-active sf-melon-bg", "routerLink", "/home", 1, "sf-nav-link", "nav-link", "montserrat", "f-weight-400", 3, "routerLinkActiveOptions"], ["mat-list-item", "", "routerLinkActive", "is-active sf-melon-bg", "routerLink", "/home/about", 1, "sf-nav-link", "nav-link", "montserrat", "f-weight-400"], ["mat-list-item", "", "routerLinkActive", "is-active sf-melon-bg", "routerLink", "/home/contactus", 1, "sf-nav-link", "nav-link", "montserrat", "f-weight-400"], ["mat-list-item", "", "routerLinkActive", "is-active sf-melon-bg", "routerLink", "/home/articles", 1, "sf-nav-link", "nav-link", "montserrat", "f-weight-400"], ["mat-list-item", "", "routerLinkActive", "is-active sf-melon-bg", "routerLink", "/home/tools", 1, "sf-nav-link", "nav-link", "montserrat", "f-weight-400"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", "routerLink", "/home/custommes", "routerLinkActive", "is-active sf-melon-bg", 1, "nav-link", "dropdown-toggle", "montserrat", "f-weight-400"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["routerLink", "/home/custommes", 1, "dropdown-item"], ["routerLink", "/home/custominventory", 1, "dropdown-item"], ["routerLink", "/home/qms", 1, "dropdown-item"], [1, "dropdown-divider"], ["routerLink", "/home/qms-demo", 1, "dropdown-item"], [1, "dropdown-icon"], ["routerLink", "/home/tms-demo", 1, "dropdown-item"], ["routerLink", "/home/preventive-maintenance-demo", 1, "dropdown-item"], ["routerLink", "/home/inventory-management-demo", 1, "dropdown-item"], ["routerLink", "/home/contactus"], ["mat-raised-button", "", "type", "submit"]],
  template: function BasicnavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6)(8, "li", 7)(9, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " HOME ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7)(12, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " ABOUT ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7)(15, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " CONTACT ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7)(18, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " ARTICLES ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 7)(21, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " TOOLS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 13)(24, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Customize Your ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 15)(27, "li")(28, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Manufacturing Execution System(MES)");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li")(31, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Inventory Management");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li")(34, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Quality Management System(QMS)");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li")(39, "a", 20)(40, "mat-icon", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "verified_user");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Quality Management System - Live Demo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li")(44, "a", 22)(45, "mat-icon", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "build");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Tool Management System - Live Demo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li")(49, "a", 23)(50, "mat-icon", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "schedule");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Preventive Maintenance - Live Demo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li")(54, "a", 24)(55, "mat-icon", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "inventory_2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Inventory Management - Live Demo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 25)(59, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItem, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip],
  styles: ["@import url(https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Montserrat:wght@100&display=swap);.dropdown-icon[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    margin-right: 8px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 8px 16px;\r\n}\r\n\r\n.dropdown-divider[_ngcontent-%COMP%] {\r\n    margin: 0.5rem 0;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n}\r\n\r\n.sf-navbar[_ngcontent-%COMP%]{\r\n    padding-left: 50px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n}\r\n\r\n.logo-container[_ngcontent-%COMP%]{\r\n    font-family: 'Hammersmith One', sans-serif;\r\n}\r\n.sf-logo[_ngcontent-%COMP%] {\r\n    color: blue;\r\n}\r\n\r\n.nc-logo[_ngcontent-%COMP%] {\r\n    color: orangered;\r\n}\r\n\r\n.is-active[_ngcontent-%COMP%]{\r\n    border-bottom: 1px solid gray;\r\n}\r\n\r\n.sf-nav-link[_ngcontent-%COMP%]:hover{\r\n    border-bottom: 1px solid gray;\r\n    background-color: var(--melon);\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9iYXNpY25hdi9iYXNpY25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsOEJBQThCO0FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGFtbWVyc21pdGgrT25lJmZhbWlseT1Nb250c2VycmF0OndnaHRAMTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmRyb3Bkb3duLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tZGl2aWRlciB7XHJcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG59XHJcblxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uc2YtbmF2YmFye1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcclxufVxyXG5cclxuLmxvZ28tY29udGFpbmVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdIYW1tZXJzbWl0aCBPbmUnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5zZi1sb2dvIHtcclxuICAgIGNvbG9yOiBibHVlO1xyXG59XHJcblxyXG4ubmMtbG9nbyB7XHJcbiAgICBjb2xvcjogb3JhbmdlcmVkO1xyXG59XHJcblxyXG4uaXMtYWN0aXZle1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbn1cclxuXHJcbi5zZi1uYXYtbGluazpob3ZlcntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVsb24pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5006:
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComponent": () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class BlogComponent {}
BlogComponent.ɵfac = function BlogComponent_Factory(t) {
  return new (t || BlogComponent)();
};
BlogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BlogComponent,
  selectors: [["app-blog"]],
  decls: 2,
  vars: 0,
  template: function BlogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "blog works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5946:
/*!***************************************************************!*\
  !*** ./src/app/components/calculator/calculator.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculatorComponent": () => (/* binding */ CalculatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CalculatorComponent {}
CalculatorComponent.ɵfac = function CalculatorComponent_Factory(t) {
  return new (t || CalculatorComponent)();
};
CalculatorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CalculatorComponent,
  selectors: [["app-calculator"]],
  decls: 2,
  vars: 0,
  template: function CalculatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "calculator works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1782:
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent),
/* harmony export */   "EmailForm": () => (/* binding */ EmailForm)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_mainservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/mainservice.service */ 8815);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);






function ContactComponent_mat_option_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r4, " ");
  }
}
function ContactComponent_mat_error_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r2.fileSize / 1000000, "0.0"), " mb) File too large");
  }
}
class ContactComponent {
  constructor(_fb, _crud, _snackbar) {
    this._fb = _fb;
    this._crud = _crud;
    this._snackbar = _snackbar;
    this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    this.queryMode = "query";
    this.determinateMode = "determinate";
    this.selectedMode = this.determinateMode;
    this.disableButton = false;
    this.isTooLarge = false;
    this.fileSize = 0;
    this.assistList = ["I would like a demo.", "I would like to talk to sales.", "I need customer support."];
    this.fileForm = this._fb.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      businessName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      phone: [''],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      howCanWeAssistYou: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      comments: [''],
      fromPage: [' Contact us']
    });
  }
  ngOnInit() {}
  onSelectedFile(event) {
    this.isTooLarge = false;
    var tempFile = event.target.files[0];
    if (tempFile.size > 10000000) {
      this.isTooLarge = true;
      this.fileSize = tempFile.size;
      console.log("File size too large.");
    } else {
      this.selectedFile = event.target.files[0];
      this.isTooLarge = false;
    }
  }
  onSubmit() {
    this.selectedMode = this.queryMode;
    this.disableButton = true;
    const formData = new FormData();
    const emailForm = new EmailForm(this.fileForm.value);
    formData.append('subject', emailForm.subject);
    formData.append('body', emailForm.body);
    if (this.selectedFile) {
      formData.append('file', this.selectedFile, this.selectedFile.name);
    }
    this.fileForm.disable();
    this._crud.sendEmail(formData).subscribe({
      next: () => {
        console.log("Email sent");
        this.fileForm.reset();
        this.fileForm.enable();
        this.fileForm.controls['fromPage'].setValue(" Contact us");
        this.disableButton = false;
        this.selectedMode = this.determinateMode;
        this._snackbar.open("Message sent ✔!", "Dismiss", {
          duration: 4000
        });
      },
      error: err => {
        console.log("Error ", err);
        this.fileForm.enable();
        this.disableButton = false;
        this.selectedMode = this.determinateMode;
        this._snackbar.open("ERROR sending message" + err.message, "Dismiss", {
          duration: 4000
        });
      }
    });
  }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) {
  return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_mainservice_service__WEBPACK_IMPORTED_MODULE_1__.MainserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar));
};
ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ContactComponent,
  selectors: [["app-contact"]],
  decls: 80,
  vars: 7,
  consts: [[1, "contact-container"], [1, "contact-header"], [1, "montserrat", "page-title"], [1, "page-subtitle"], ["mat-stretch-tabs", "false", "mat-align-tabs", "center", 1, "modern-tabs"], ["label", "Contact Us"], [1, "form-card", "modern-card"], [1, "card-header"], [1, "header-icon-wrapper"], ["src", "../../../assets/img/icons8-megaphone-64.png", "alt", "Contact icon", 1, "header-icon"], [1, "content-title"], [1, "card-description"], [1, "file-form", "modern-form", 3, "formGroup", "ngSubmit"], [1, "form-row"], ["appearance", "outline", 1, "form-field"], ["type", "text", "name", "firstName", "matInput", "", "formControlName", "firstName"], ["type", "text", "name", "lastName", "matInput", "", "formControlName", "lastName"], ["type", "email", "name", "email", "matInput", "", "formControlName", "email"], ["matPrefix", ""], ["type", "text", "name", "businessName", "matInput", "", "formControlName", "businessName"], ["type", "text", "name", "phone", "matInput", "", "formControlName", "phone"], ["type", "text", "name", "howCanWeAssistYou", "matInput", "", "formControlName", "howCanWeAssistYou", 3, "matAutocomplete"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "comment", "matInput", "", "formControlName", "comments", "rows", "5"], [1, "file-upload-section"], ["for", "file", 1, "file-label"], ["type", "file", "name", "file", "id", "file", 1, "file-input", 3, "disabled", "change"], ["class", "file-error", 4, "ngIf"], ["value", "0", 1, "progress-bar", 3, "mode"], ["mat-raised-button", "", "type", "submit", "color", "primary", 1, "submit-button", 3, "disabled"], ["submitButton", ""], ["label", "Your Vision"], [1, "tab-content"], ["label", "Overcome Your Obstacles"], [3, "value"], [1, "file-error"]],
  template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Get In Touch");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Let's unlock the true potential of your business together!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-tab-group", 4)(7, "mat-tab", 5)(8, "mat-card", 6)(9, "div", 7)(10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h2", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Send Us a Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "We're here to help you transform your manufacturing operations");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "form", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_16_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13)(18, "mat-form-field", 14)(19, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "First Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-form-field", 14)(23, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Last Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-form-field", 14)(27, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Work Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 13)(33, "mat-form-field", 14)(34, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Business Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "business");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-form-field", 14)(40, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-form-field", 14)(46, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "How Can We Assist You?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "mat-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "help_outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "mat-autocomplete", 22, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, ContactComponent_mat_option_53_Template, 2, 2, "mat-option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "mat-form-field", 14)(55, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "textarea", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 26)(59, "label", 27)(60, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "attach_file");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " Select file to upload (10Mb limit) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "(Optional)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ContactComponent_Template_input_change_65_listener($event) {
        return ctx.onSelectedFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, ContactComponent_mat_error_66_Template, 3, 4, "mat-error", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "mat-progress-bar", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "button", 31, 32)(70, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "send");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "mat-tab", 33)(75, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "app-your-vision");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "mat-tab", 35)(78, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "app-overcoming-obstacles");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.fileForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matAutocomplete", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.assistList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.disableButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isTooLarge);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", ctx.selectedMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.fileForm.invalid || ctx.disableButton);
    }
  },
  styles: [".contact-container[_ngcontent-%COMP%] {\r\n    max-width: 1400px;\r\n    margin: 0 auto;\r\n    padding: 40px 20px;\r\n    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\r\n    min-height: 100vh;\r\n}\r\n\r\n.contact-header[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n    padding: 40px 20px;\r\n}\r\n\r\n.page-title[_ngcontent-%COMP%] {\r\n    font-size: 3.5rem;\r\n    font-weight: 800;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-clip: text;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.page-subtitle[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n    color: #4a5568;\r\n    font-weight: 300;\r\n}\r\n\r\n.modern-tabs[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n}\r\n\r\n.modern-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-labels {\r\n    justify-content: center;\r\n}\r\n\r\n.modern-tabs[_ngcontent-%COMP%]     .mat-mdc-tab {\r\n    font-size: 1.1rem;\r\n    font-weight: 600;\r\n    min-width: 200px;\r\n}\r\n\r\n.tab-content[_ngcontent-%COMP%] {\r\n    padding: 40px 20px;\r\n    animation: _ngcontent-%COMP%_fadeIn 0.5s ease-in;\r\n}\r\n\r\n.modern-card[_ngcontent-%COMP%] {\r\n    background: white;\r\n    border-radius: 20px;\r\n    box-shadow: 0 20px 60px rgba(0,0,0,0.1);\r\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n    border: 1px solid rgba(102, 126, 234, 0.1);\r\n    overflow: visible;\r\n    animation: _ngcontent-%COMP%_slideInUp 0.6s ease-out;\r\n}\r\n\r\n.modern-card[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 6px;\r\n    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\r\n    border-radius: 20px 20px 0 0;\r\n}\r\n\r\n.form-card[_ngcontent-%COMP%] {\r\n    max-width: 900px;\r\n    margin: 40px auto;\r\n    padding: 60px 50px;\r\n    position: relative;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.header-icon-wrapper[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    margin: 0 auto 25px;\r\n    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.header-icon-wrapper[_ngcontent-%COMP%]:hover {\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    transform: rotate(5deg) scale(1.05);\r\n}\r\n\r\n.header-icon[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n    height: 60px;\r\n    transition: filter 0.3s ease;\r\n}\r\n\r\n.header-icon-wrapper[_ngcontent-%COMP%]:hover   .header-icon[_ngcontent-%COMP%] {\r\n    filter: brightness(0) invert(1);\r\n}\r\n\r\n.content-title[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    font-weight: 700;\r\n    color: #2d3748;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.card-description[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    color: #718096;\r\n}\r\n\r\n.modern-form[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.form-row[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 20px;\r\n}\r\n\r\n.form-field[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.form-field[_ngcontent-%COMP%]     .mat-mdc-form-field-focus-overlay {\r\n    background-color: rgba(102, 126, 234, 0.05);\r\n}\r\n\r\n.form-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper {\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.form-field[_ngcontent-%COMP%]:hover     .mat-mdc-text-field-wrapper {\r\n    background-color: rgba(102, 126, 234, 0.02);\r\n}\r\n\r\n.file-upload-section[_ngcontent-%COMP%] {\r\n    margin: 20px 0;\r\n    padding: 25px;\r\n    background: rgba(102, 126, 234, 0.05);\r\n    border-radius: 12px;\r\n    border: 2px dashed rgba(102, 126, 234, 0.3);\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.file-upload-section[_ngcontent-%COMP%]:hover {\r\n    background: rgba(102, 126, 234, 0.08);\r\n    border-color: rgba(102, 126, 234, 0.5);\r\n}\r\n\r\n.file-label[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    font-size: 1rem;\r\n    color: #4a5568;\r\n    margin-bottom: 15px;\r\n    cursor: pointer;\r\n}\r\n\r\n.file-input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 10px;\r\n    border: 1px solid #e2e8f0;\r\n    border-radius: 8px;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.file-input[_ngcontent-%COMP%]:hover:not(:disabled) {\r\n    border-color: #667eea;\r\n    background-color: rgba(102, 126, 234, 0.02);\r\n}\r\n\r\n.file-error[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.progress-bar[_ngcontent-%COMP%] {\r\n    margin: 20px 0;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    padding: 15px 40px !important;\r\n    font-size: 1.1rem !important;\r\n    border-radius: 50px !important;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    transition: all 0.3s ease !important;\r\n    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3) !important;\r\n    width: 100%;\r\n    max-width: 300px;\r\n    margin-left: auto !important;\r\n    margin-right: auto !important;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:not(:disabled):hover {\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4) !important;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%]:not(:disabled):hover   mat-icon[_ngcontent-%COMP%] {\r\n    transform: translateX(5px);\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_slideInUp {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(30px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .page-title[_ngcontent-%COMP%] {\r\n        font-size: 2.5rem;\r\n    }\r\n    \r\n    .form-card[_ngcontent-%COMP%] {\r\n        padding: 40px 20px;\r\n        margin: 20px;\r\n    }\r\n    \r\n    .form-row[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n        gap: 15px;\r\n    }\r\n    \r\n    .content-title[_ngcontent-%COMP%] {\r\n        font-size: 1.5rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDZEQUE2RDtJQUM3RCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsNkRBQTZEO0lBQzdELDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMscURBQXFEO0lBQ3JELDBDQUEwQztJQUMxQyxpQkFBaUI7SUFDakIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixXQUFXO0lBQ1gsNERBQTREO0lBQzVELDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4RkFBOEY7SUFDOUYsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDZEQUE2RDtJQUM3RCxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLDBEQUEwRDtJQUMxRCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsMkRBQTJEO0FBQy9EOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxVQUFVO1FBQ1Ysd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksMEJBQTBCO1FBQzFCLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTQwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVmN2ZhIDAlLCAjYzNjZmUyIDEwMCUpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jb250YWN0LWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xyXG59XHJcblxyXG4ucGFnZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ucGFnZS1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGNvbG9yOiAjNGE1NTY4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLm1vZGVybi10YWJzIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubW9kZXJuLXRhYnMgOjpuZy1kZWVwIC5tYXQtbWRjLXRhYi1sYWJlbHMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2Rlcm4tdGFicyA6Om5nLWRlZXAgLm1hdC1tZGMtdGFiIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi50YWItY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5tb2Rlcm4tY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDIwcHggNjBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4xKTtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgYW5pbWF0aW9uOiBzbGlkZUluVXAgMC42cyBlYXNlLW91dDtcclxufVxyXG5cclxuLm1vZGVybi1jYXJkOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XHJcbn1cclxuXHJcbi5mb3JtLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICAgIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogNjBweCA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmhlYWRlci1pY29uLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMSkgMCUsIHJnYmEoMTE4LCA3NSwgMTYyLCAwLjEpIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5oZWFkZXItaWNvbi13cmFwcGVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKSBzY2FsZSgxLjA1KTtcclxufVxyXG5cclxuLmhlYWRlci1pY29uIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmhlYWRlci1pY29uLXdyYXBwZXI6aG92ZXIgLmhlYWRlci1pY29uIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XHJcbn1cclxuXHJcbi5jb250ZW50LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzJkMzc0ODtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgY29sb3I6ICM3MTgwOTY7XHJcbn1cclxuXHJcbi5tb2Rlcm4tZm9ybSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4uZm9ybS1yb3cge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGdhcDogMjBweDtcclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIDo6bmctZGVlcCAubWF0LW1kYy1mb3JtLWZpZWxkLWZvY3VzLW92ZXJsYXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjA1KTtcclxufVxyXG5cclxuLmZvcm0tZmllbGQgOjpuZy1kZWVwIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uZm9ybS1maWVsZDpob3ZlciA6Om5nLWRlZXAgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4wMik7XHJcbn1cclxuXHJcbi5maWxlLXVwbG9hZC1zZWN0aW9uIHtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4wNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5maWxlLXVwbG9hZC1zZWN0aW9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4wOCk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC41KTtcclxufVxyXG5cclxuLmZpbGUtbGFiZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogIzRhNTU2ODtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5maWxlLWlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uZmlsZS1pbnB1dDpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICBib3JkZXItY29sb3I6ICM2NjdlZWE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMDIpO1xyXG59XHJcblxyXG4uZmlsZS1lcnJvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggNDBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3VibWl0LWJ1dHRvbjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDEycHggMzBweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b24gbWF0LWljb24ge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b246bm90KDpkaXNhYmxlZCk6aG92ZXIgbWF0LWljb24ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluVXAge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnBhZ2UtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZm9ybS1jYXJkIHtcclxuICAgICAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZm9ybS1yb3cge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIGdhcDogMTVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbnRlbnQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});
class EmailForm {
  constructor(fileForm) {
    this.body = "";
    this.subject = "";
    this.body = `
      <table style="border: 1px solid grey;">
        <thead>
            <tr style="background-color:lightblue">
                <th>Name</th>
                <th>Company</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Assist with</th>
                <th>Reference</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>` + fileForm['firstName'] + ' ' + fileForm['lastName'] + `</td>
                <td>` + fileForm['businessName'] + `</td>
                <td>` + fileForm['phone'] + `</td>
                <td>` + fileForm['email'] + `</td>
                <td>` + fileForm['howCanWeAssistYou'] + `</td>
                <td>` + fileForm['fromPage'] + `</td>
            </tr>
        </tbody>
    </table>
    <pre>` + fileForm['comments'] + `</pre>
    `;
    this.subject = 'Contact us>>' + fileForm['howCanWeAssistYou'];
  }
}

/***/ }),

/***/ 6135:
/*!*************************************************************************************************!*\
  !*** ./src/app/components/custom-inventory-management/custom-inventory-management.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomInventoryManagementComponent": () => (/* binding */ CustomInventoryManagementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);





function CustomInventoryManagementComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 25)(9, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Learn More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const benefit_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-delay", i_r2 * 0.1 + "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", benefit_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", benefit_r1.description, " ");
  }
}
class CustomInventoryManagementComponent {
  constructor() {
    this.listOfBenefits = [{
      title: `1. Improved Inventory Control:`,
      description: `
      Custom inventory management software allows you to gain complete control over your inventory. You can track stock levels
      in real-time, monitor usage patterns, and set automatic re-ordering thresholds. This level of precision minimizes the
      risk of overstocking or stockouts, ensuring you always have the right materials at the right time.`
    }, {
      title: `2. Enhanced Production Planning:`,
      description: `
      With an integrated inventory management system, you can accurately forecast demand based on historical data and customer
      trends. This data-driven approach enables your manufacturing company to plan production schedules more effectively,
      reducing lead times, and improving overall production efficiency.`
    }, {
      title: `3. Optimal Resource Allocation:`,
      description: `
      The software allows you to identify slow-moving or obsolete inventory, thus optimizing resource allocation. You can make
      informed decisions on how to allocate resources to the most profitable products, maximizing operational efficiency and
      minimizing waste.`
    }, {
      title: `4. Real-time Inventory Visibility:`,
      description: `
      Custom inventory management software provides real-time visibility into your entire inventory network. From raw
      materials to finished goods, you can monitor each item's status, location, and movement within the supply chain. This
      transparency enables you to respond quickly to changes in demand or supply disruptions, ensuring uninterrupted
      production.`
    }, {
      title: `5. Inventory Cost Reduction:`,
      description: `
      By streamlining inventory processes and minimizing inventory holding costs, your manufacturing company can achieve
      significant cost reductions. With better inventory control, you can reduce the need for safety stock and eliminate
      unnecessary stockpiling, ultimately freeing up valuable capital for other business investments.`
    }, {
      title: `6. Seamless Integration with Other Systems:`,
      description: `
      Custom inventory management software can be tailored to seamlessly integrate with your existing ERP (Enterprise Resource
      Planning) or MRP (Material Requirements Planning) systems. This integration ensures a smooth flow of information across
      departments, reducing data duplication and enhancing overall organizational efficiency.`
    }, {
      title: `7. Enhanced Quality Control:`,
      description: `
      The software can include quality control checkpoints at different stages of the production process, ensuring that only
      high-quality products are delivered to customers. This proactive approach minimizes defects and rework, resulting in
      improved customer satisfaction and reduced returns.`
    }, {
      title: `8. Scalability and Flexibility:`,
      description: `
      As your manufacturing company grows, the custom inventory management software can be easily scaled up to accommodate
      increased inventory volumes and additional manufacturing facilities. The flexibility of the solution ensures it can
      adapt to your evolving business needs without major disruptions.`
    }];
  }
}
CustomInventoryManagementComponent.ɵfac = function CustomInventoryManagementComponent_Factory(t) {
  return new (t || CustomInventoryManagementComponent)();
};
CustomInventoryManagementComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CustomInventoryManagementComponent,
  selectors: [["app-custom-inventory-management"]],
  decls: 30,
  vars: 1,
  consts: [[1, "inventory-container"], [1, "hero-card", "animate-fade-in"], [1, "hero-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "64", "height", "64", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm0 1h11a1 1 0 0 1 1 1v3H1.5V2a1 1 0 0 1 1-1zm0 13a1 1 0 0 1-1-1V6h13v7a1 1 0 0 1-1 1h-11z"], ["d", "M2 7.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"], [1, "content-title", "hero-title"], [1, "content-body", "hero-description"], [1, "benefits-grid"], ["class", "benefit-card animate-card", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "conclusion-card", "modern-card", "animate-slide-in"], [1, "conclusion-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "48", "height", "48", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"], ["d", "M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"], [1, "conclusion-title"], [1, "content-body"], [1, "cta-section"], ["routerLink", "/home/contactus"], ["mat-raised-button", "", "color", "primary", 1, "cta-button"], [1, "benefit-card", "animate-card"], [1, "card-number"], [1, "card-shine"], [1, "content-title", "card-title"], [1, "content-body", "card-description"], [1, "card-footer"], ["routerLink", "/home/contactus", 1, "card-link"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16"], ["fill-rule", "evenodd", "d", "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"]],
  template: function CustomInventoryManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4)(5, "path", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Enhance Manufacturing Efficiency with Custom Inventory Management Software ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Welcome to Sharp Floor NC! As a manufacturing company, you are well aware of the complexities involved in managing inventory. Traditional inventory management methods can be time-consuming, error-prone, and hinder overall productivity. However, by incorporating a custom Inventory Management Software tailored to your manufacturing processes, your company can unlock a plethora of benefits that lead to streamlined operations and increased profitability. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CustomInventoryManagementComponent_div_11_Template, 13, 5, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 13)(16, "path", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ready to Optimize Your Inventory?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 16)(20, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "In conclusion");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ", investing in a custom inventory management software solution can revolutionize the way your manufacturing company operates. With improved inventory control, production planning, resource allocation, and cost reduction, you can enhance overall efficiency, productivity, and profitability. Trust Sharp Floor NC to develop a tailored solution that aligns with your unique business requirements and sets you on the path to success in the competitive manufacturing landscape. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17)(24, "a", 18)(25, "button", 19)(26, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Contact Us Today");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "arrow_forward");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfBenefits);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
  styles: [".inventory-container[_ngcontent-%COMP%] {\r\n    max-width: 1600px;\r\n    margin: 0 auto;\r\n    padding: 40px 20px;\r\n    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\r\n    min-height: 100vh;\r\n}\r\n\r\n.hero-card[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n    margin: 0 auto 60px;\r\n    padding: 60px 50px;\r\n    background: white;\r\n    border-radius: 20px;\r\n    box-shadow: 0 20px 60px rgba(0,0,0,0.1);\r\n    text-align: center;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.hero-card[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 6px;\r\n    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\r\n}\r\n\r\n.hero-icon[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    margin: 0 auto 30px;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.hero-card[_ngcontent-%COMP%]:hover   .hero-icon[_ngcontent-%COMP%] {\r\n    transform: rotate(5deg) scale(1.1);\r\n}\r\n\r\n.hero-title[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    font-weight: 800;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-clip: text;\r\n    margin-bottom: 25px;\r\n    line-height: 1.3;\r\n}\r\n\r\n.hero-description[_ngcontent-%COMP%] {\r\n    font-size: 1.15rem;\r\n    line-height: 1.8;\r\n    color: #4a5568;\r\n    max-width: 900px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.benefits-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));\r\n    gap: 30px;\r\n    margin: 60px auto;\r\n    max-width: 1600px;\r\n}\r\n\r\n.benefit-card[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background: white;\r\n    border-radius: 20px;\r\n    padding: 40px 35px;\r\n    box-shadow: 0 10px 40px rgba(0,0,0,0.08);\r\n    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\r\n    overflow: hidden;\r\n    border: 1px solid rgba(102, 126, 234, 0.1);\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.benefit-card[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 4px;\r\n    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\r\n    transform: scaleX(0);\r\n    transition: transform 0.4s ease;\r\n}\r\n\r\n.benefit-card[_ngcontent-%COMP%]:hover::before {\r\n    transform: scaleX(1);\r\n}\r\n\r\n.card-shine[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: -100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);\r\n    transition: left 0.6s ease;\r\n}\r\n\r\n.benefit-card[_ngcontent-%COMP%]:hover   .card-shine[_ngcontent-%COMP%] {\r\n    left: 100%;\r\n}\r\n\r\n.benefit-card[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-10px) scale(1.02);\r\n    box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);\r\n    border-color: rgba(102, 126, 234, 0.3);\r\n}\r\n\r\n.card-number[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 20px;\r\n    width: 50px;\r\n    height: 50px;\r\n    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 1.5rem;\r\n    font-weight: 800;\r\n    color: #667eea;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.benefit-card[_ngcontent-%COMP%]:hover   .card-number[_ngcontent-%COMP%] {\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    color: white;\r\n    transform: rotate(15deg) scale(1.1);\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n    font-size: 1.4rem;\r\n    font-weight: 700;\r\n    color: #2d3748;\r\n    margin-bottom: 20px;\r\n    padding-right: 60px;\r\n    line-height: 1.3;\r\n}\r\n\r\n.card-description[_ngcontent-%COMP%] {\r\n    font-size: 1.05rem;\r\n    line-height: 1.8;\r\n    color: #4a5568;\r\n    flex-grow: 1;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%] {\r\n    margin-top: auto;\r\n    padding-top: 20px;\r\n    border-top: 1px solid rgba(0,0,0,0.05);\r\n}\r\n\r\n.card-link[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    color: #667eea;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n    transition: all 0.3s ease;\r\n    font-size: 1rem;\r\n}\r\n\r\n.card-link[_ngcontent-%COMP%]:hover {\r\n    color: #764ba2;\r\n    gap: 12px;\r\n}\r\n\r\n.card-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.card-link[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\r\n    transform: translateX(3px);\r\n}\r\n\r\n.conclusion-card[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n    margin: 60px auto;\r\n    padding: 60px 50px;\r\n    background: white;\r\n    border-radius: 20px;\r\n    box-shadow: 0 20px 60px rgba(0,0,0,0.1);\r\n    text-align: center;\r\n    position: relative;\r\n    overflow: hidden;\r\n    border: 1px solid rgba(102, 126, 234, 0.1);\r\n}\r\n\r\n.conclusion-card[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 6px;\r\n    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\r\n}\r\n\r\n.conclusion-icon[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 80px;\r\n    margin: 0 auto 25px;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);\r\n}\r\n\r\n.conclusion-title[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    font-weight: 800;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-clip: text;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.conclusion-card[_ngcontent-%COMP%]   .content-body[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    line-height: 1.9;\r\n    color: #4a5568;\r\n    max-width: 900px;\r\n    margin: 0 auto 30px;\r\n}\r\n\r\n.cta-section[_ngcontent-%COMP%] {\r\n    margin-top: 40px;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding: 15px 40px !important;\r\n    font-size: 1.2rem !important;\r\n    border-radius: 50px !important;\r\n    transition: all 0.3s ease !important;\r\n    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3) !important;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4) !important;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\r\n    transform: translateX(5px);\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_slideInUp {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(30px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_cardFadeIn {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(30px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n.animate-fade-in[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_fadeIn 0.8s ease-in;\r\n}\r\n\r\n.animate-slide-in[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_slideInUp 0.8s ease-out;\r\n}\r\n\r\n.animate-card[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_cardFadeIn 0.6s ease-out forwards;\r\n    opacity: 0;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n    .benefits-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .hero-card[_ngcontent-%COMP%], .conclusion-card[_ngcontent-%COMP%] {\r\n        padding: 40px 25px;\r\n    }\r\n    \r\n    .hero-title[_ngcontent-%COMP%], .conclusion-title[_ngcontent-%COMP%] {\r\n        font-size: 1.8rem;\r\n    }\r\n    \r\n    .benefit-card[_ngcontent-%COMP%] {\r\n        padding: 30px 20px;\r\n    }\r\n    \r\n    .card-title[_ngcontent-%COMP%] {\r\n        font-size: 1.2rem;\r\n        padding-right: 50px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jdXN0b20taW52ZW50b3J5LW1hbmFnZW1lbnQvY3VzdG9tLWludmVudG9yeS1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQiw2REFBNkQ7SUFDN0QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2REFBNkQ7SUFDN0Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnREFBZ0Q7SUFDaEQseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiw2REFBNkQ7SUFDN0QsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJB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QUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxVQUFVO1FBQ1Ysd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsVUFBVTtBQUNkOztBQUVBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7QUFDSjs7QUFFQTtJQUNJOztRQUVJLGtCQUFrQjtJQUN0Qjs7SUFFQTs7UUFFSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52ZW50b3J5LWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDE2MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1ZjdmYSAwJSwgI2MzY2ZlMiAxMDAlKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uaGVyby1jYXJkIHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gNjBweDtcclxuICAgIHBhZGRpbmc6IDYwcHggNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5oZXJvLWNhcmQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG59XHJcblxyXG4uaGVyby1pY29uIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uaGVyby1jYXJkOmhvdmVyIC5oZXJvLWljb24ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZykgc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLmhlcm8tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbn1cclxuXHJcbi5oZXJvLWRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICBjb2xvcjogIzRhNTU2ODtcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmJlbmVmaXRzLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDUwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG4gICAgbWFyZ2luOiA2MHB4IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDE2MDBweDtcclxufVxyXG5cclxuLmJlbmVmaXQtY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDM1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggNDBweCByZ2JhKDAsMCwwLDAuMDgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4xKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYmVuZWZpdC1jYXJkOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcclxufVxyXG5cclxuLmJlbmVmaXQtY2FyZDpob3Zlcjo6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG59XHJcblxyXG4uY2FyZC1zaGluZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAtMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgcmdiYSgyNTUsMjU1LDI1NSwwLjMpLCB0cmFuc3BhcmVudCk7XHJcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuNnMgZWFzZTtcclxufVxyXG5cclxuLmJlbmVmaXQtY2FyZDpob3ZlciAuY2FyZC1zaGluZSB7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG59XHJcblxyXG4uYmVuZWZpdC1jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgc2NhbGUoMS4wMik7XHJcbiAgICBib3gtc2hhZG93OiAwIDIwcHggNjBweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMik7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcclxufVxyXG5cclxuLmNhcmQtbnVtYmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMSkgMCUsIHJnYmEoMTE4LCA3NSwgMTYyLCAwLjEpIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGNvbG9yOiAjNjY3ZWVhO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmJlbmVmaXQtY2FyZDpob3ZlciAuY2FyZC1udW1iZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKSBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzJkMzc0ODtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcclxufVxyXG5cclxuLmNhcmQtZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcclxuICAgIGNvbG9yOiAjNGE1NTY4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDUpO1xyXG59XHJcblxyXG4uY2FyZC1saW5rIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgY29sb3I6ICM2NjdlZWE7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmNhcmQtbGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogIzc2NGJhMjtcclxuICAgIGdhcDogMTJweDtcclxufVxyXG5cclxuLmNhcmQtbGluayBzdmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmNhcmQtbGluazpob3ZlciBzdmcge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7XHJcbn1cclxuXHJcbi5jb25jbHVzaW9uLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDYwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDYwcHggNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMSk7XHJcbn1cclxuXHJcbi5jb25jbHVzaW9uLWNhcmQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG59XHJcblxyXG4uY29uY2x1c2lvbi1pY29uIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMjVweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDI1cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xyXG59XHJcblxyXG4uY29uY2x1c2lvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uY29uY2x1c2lvbi1jYXJkIC5jb250ZW50LWJvZHkge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS45O1xyXG4gICAgY29sb3I6ICM0YTU1Njg7XHJcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMzBweDtcclxufVxyXG5cclxuLmN0YS1zZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5jdGEtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggNDBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3RhLWJ1dHRvbjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDE1cHggNDBweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN0YS1idXR0b24gbWF0LWljb24ge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmN0YS1idXR0b246aG92ZXIgbWF0LWljb24ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluVXAge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY2FyZEZhZGVJbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxufVxyXG5cclxuLmFuaW1hdGUtZmFkZS1pbiB7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjhzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5hbmltYXRlLXNsaWRlLWluIHtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVJblVwIDAuOHMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5hbmltYXRlLWNhcmQge1xyXG4gICAgYW5pbWF0aW9uOiBjYXJkRmFkZUluIDAuNnMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIC5iZW5lZml0cy1ncmlkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuaGVyby1jYXJkLFxyXG4gICAgLmNvbmNsdXNpb24tY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZzogNDBweCAyNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaGVyby10aXRsZSxcclxuICAgIC5jb25jbHVzaW9uLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJlbmVmaXQtY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1613:
/*!*************************************************************!*\
  !*** ./src/app/components/custommes/custommes.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustommesComponent": () => (/* binding */ CustommesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);




class CustommesComponent {}
CustommesComponent.ɵfac = function CustommesComponent_Factory(t) {
  return new (t || CustommesComponent)();
};
CustommesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CustommesComponent,
  selectors: [["app-custommes"]],
  decls: 67,
  vars: 0,
  consts: [[1, "mes-container"], [1, "hero-card", "animate-fade-in"], [1, "hero-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "64", "height", "64", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"], [1, "content-title", "hero-title"], [1, "content-body", "hero-description"], [1, "what-is-mes"], [1, "left-side", "side", "modern-card"], [1, "card-badge"], [1, "content-title", "section-title"], [1, "content-body", "description-text"], [1, "right-side", "side", "modern-card"], [1, "benefits-scroll"], [1, "benefits-list"], [1, "content-body", "benefit-item"], [1, "conclusion-card", "modern-card", "animate-slide-in"], [1, "conclusion-header"], [1, "content-title"], [1, "content-body"], [1, "cta-section"], ["routerLink", "/home/contactus"], ["mat-raised-button", "", "color", "primary", 1, "cta-button"]],
  template: function CustommesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Enhance Manufacturing Efficiency with Custom Manufacturing Execution System (MES) Software ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Welcome to Sharp Floor NC, your trusted partner in providing tailor-made solutions for manufacturing companies. Today, we're excited to discuss the numerous benefits of implementing a Custom Manufacturing Execution System (MES) Software for your manufacturing business. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Definition");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " What is a Custom MES Software? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " A Custom Manufacturing Execution System (MES) Software is a highly specialized, industry-specific solution that streamlines and optimizes the entire manufacturing process. Unlike off-the-shelf solutions, a custom MES software is uniquely designed to meet the specific needs of your manufacturing company, addressing your unique challenges and enhancing overall productivity. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12)(18, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Benefits");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Benefits of Custom MES Software for Manufacturing Companies ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13)(23, "ol", 14)(24, "li", 15)(25, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Process Efficiency and Automation:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " A custom MES software ensures seamless automation of various manufacturing processes, such as production scheduling, resource allocation, material tracking, and quality control. Automation reduces human error, minimizes downtime, and enhances overall process efficiency. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 15)(29, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Real-time Data Visibility:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " By integrating your manufacturing processes into a unified system, you gain real-time visibility into all aspects of production. This allows for better decision-making, optimized resource allocation, and early detection of potential bottlenecks or issues, leading to improved production planning and reduced lead times. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 15)(33, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Quality Control and Compliance:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Custom MES software empowers you to implement stringent quality control measures at each stage of the manufacturing process. By tracking quality metrics and deviations in real-time, you can quickly identify and rectify issues, ensuring compliance with industry standards and regulations. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 15)(37, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Inventory Management:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Efficient inventory management is crucial for manufacturing companies. Custom MES software helps you maintain accurate inventory levels, reduce waste, and prevent stockouts, ultimately lowering carrying costs and improving supply chain management. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 15)(41, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Reduced Production Costs:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " By automating and optimizing various processes, custom MES software helps in reducing production costs over time. The system identifies areas of inefficiency, minimizes downtime, optimizes resource utilization, and ultimately increases the overall profitability of your manufacturing business. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 15)(45, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Scalability and Flexibility:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " As your manufacturing company grows, your processes and requirements will evolve. A custom MES software can be designed to be scalable and flexible, allowing it to adapt to your changing needs without the need for significant modifications or disruptions. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 15)(49, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Enhanced Data Analytics:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Custom MES software can capture vast amounts of data throughout the manufacturing process. Utilizing advanced data analytics, you can gain valuable insights into operational performance, identify trends, and make data-driven decisions for continuous process improvement. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16)(53, "div", 17)(54, "h2", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Ready to Transform Your Manufacturing?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " A custom Manufacturing Execution System (MES) Software can significantly transform your manufacturing company, providing you with a competitive edge in the industry. With process efficiency, real-time data visibility, improved quality control, reduced production costs, and enhanced scalability, investing in a custom MES software is a strategic decision that can yield substantial long-term benefits. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " At Sharp Floor NC, we specialize in developing tailored MES solutions to match your specific manufacturing requirements. Contact us today to explore how our custom MES software can revolutionize your manufacturing operations and drive your business towards unprecedented success. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 20)(61, "a", 21)(62, "button", 22)(63, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Contact Us Today");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "arrow_forward");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
  styles: [".mes-container[_ngcontent-%COMP%] {\r\n    max-width: 1600px;\r\n    margin: 0 auto;\r\n    padding: 40px 20px;\r\n    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\r\n    min-height: 100vh;\r\n}\r\n\r\n.hero-card[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n    margin: 0 auto 60px;\r\n    padding: 60px 50px;\r\n    background: white;\r\n    border-radius: 20px;\r\n    box-shadow: 0 20px 60px rgba(0,0,0,0.1);\r\n    text-align: center;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.hero-card[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 6px;\r\n    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\r\n}\r\n\r\n.hero-icon[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    margin: 0 auto 30px;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.hero-card[_ngcontent-%COMP%]:hover   .hero-icon[_ngcontent-%COMP%] {\r\n    transform: rotate(5deg) scale(1.1);\r\n}\r\n\r\n.hero-title[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    font-weight: 800;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-clip: text;\r\n    margin-bottom: 25px;\r\n    line-height: 1.3;\r\n}\r\n\r\n.hero-description[_ngcontent-%COMP%] {\r\n    font-size: 1.15rem;\r\n    line-height: 1.8;\r\n    color: #4a5568;\r\n    max-width: 900px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.what-is-mes[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 40px;\r\n    margin: 60px auto;\r\n    max-width: 1600px;\r\n}\r\n\r\n.modern-card[_ngcontent-%COMP%] {\r\n    background: white;\r\n    padding: 40px;\r\n    border-radius: 20px;\r\n    box-shadow: 0 10px 40px rgba(0,0,0,0.08);\r\n    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\r\n    border: 1px solid rgba(102, 126, 234, 0.1);\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.modern-card[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 4px;\r\n    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\r\n    transform: scaleX(0);\r\n    transition: transform 0.4s ease;\r\n}\r\n\r\n.modern-card[_ngcontent-%COMP%]:hover::before {\r\n    transform: scaleX(1);\r\n}\r\n\r\n.modern-card[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-5px);\r\n    box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);\r\n    border-color: rgba(102, 126, 234, 0.3);\r\n}\r\n\r\n.card-badge[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 8px 20px;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    color: white;\r\n    border-radius: 50px;\r\n    font-size: 0.85rem;\r\n    font-weight: 600;\r\n    margin-bottom: 20px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%] {\r\n    font-size: 1.8rem;\r\n    font-weight: 700;\r\n    color: #2d3748;\r\n    margin-bottom: 25px;\r\n    line-height: 1.3;\r\n}\r\n\r\n.description-text[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    line-height: 1.9;\r\n    color: #4a5568;\r\n}\r\n\r\n.benefits-scroll[_ngcontent-%COMP%] {\r\n    max-height: 600px;\r\n    overflow-y: auto;\r\n    padding-right: 15px;\r\n}\r\n\r\n.benefits-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n\r\n.benefits-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: rgba(102, 126, 234, 0.05);\r\n    border-radius: 10px;\r\n}\r\n\r\n.benefits-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    border-radius: 10px;\r\n}\r\n\r\n.benefits-list[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    counter-reset: benefit-counter;\r\n    padding-left: 0;\r\n}\r\n\r\n.benefit-item[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding: 20px 20px 20px 60px;\r\n    margin-bottom: 20px;\r\n    background: rgba(102, 126, 234, 0.03);\r\n    border-radius: 12px;\r\n    border-left: 4px solid #667eea;\r\n    counter-increment: benefit-counter;\r\n    transition: all 0.3s ease;\r\n    line-height: 1.8;\r\n}\r\n\r\n.benefit-item[_ngcontent-%COMP%]::before {\r\n    content: counter(benefit-counter);\r\n    position: absolute;\r\n    left: 15px;\r\n    top: 20px;\r\n    width: 35px;\r\n    height: 35px;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    color: white;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-weight: 700;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.benefit-item[_ngcontent-%COMP%]:hover {\r\n    background: rgba(102, 126, 234, 0.08);\r\n    transform: translateX(5px);\r\n}\r\n\r\n.conclusion-card[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n    margin: 60px auto;\r\n    padding: 60px 50px;\r\n    background: white;\r\n    text-align: center;\r\n}\r\n\r\n.conclusion-header[_ngcontent-%COMP%] {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.conclusion-header[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    font-weight: 800;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-clip: text;\r\n}\r\n\r\n.conclusion-card[_ngcontent-%COMP%]   .content-body[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    line-height: 1.9;\r\n    color: #4a5568;\r\n    margin-bottom: 25px;\r\n    max-width: 900px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.cta-section[_ngcontent-%COMP%] {\r\n    margin-top: 40px;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding: 15px 40px !important;\r\n    font-size: 1.2rem !important;\r\n    border-radius: 50px !important;\r\n    transition: all 0.3s ease !important;\r\n    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3) !important;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4) !important;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\r\n    transform: translateX(5px);\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_slideInUp {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(30px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n.animate-fade-in[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_fadeIn 0.8s ease-in;\r\n}\r\n\r\n.animate-slide-in[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_slideInUp 0.8s ease-out;\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n    .what-is-mes[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n        gap: 30px;\r\n    }\r\n    \r\n    .benefits-scroll[_ngcontent-%COMP%] {\r\n        max-height: none;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .hero-card[_ngcontent-%COMP%] {\r\n        padding: 40px 25px;\r\n    }\r\n    \r\n    .hero-title[_ngcontent-%COMP%] {\r\n        font-size: 1.8rem;\r\n    }\r\n    \r\n    .modern-card[_ngcontent-%COMP%] {\r\n        padding: 30px 20px;\r\n    }\r\n    \r\n    .section-title[_ngcontent-%COMP%] {\r\n        font-size: 1.5rem;\r\n    }\r\n    \r\n    .conclusion-card[_ngcontent-%COMP%] {\r\n        padding: 40px 25px;\r\n    }\r\n    \r\n    .benefit-item[_ngcontent-%COMP%] {\r\n        padding: 15px 15px 15px 55px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jdXN0b21tZXMvY3VzdG9tbWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQiw2REFBNkQ7SUFDN0QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2REFBNkQ7SUFDN0Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnREFBZ0Q7SUFDaEQseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiw2REFBNkQ7SUFDN0QsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4Qyw0REFBNEQ7SUFDNUQsMENB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RUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSw0QkFBNEI7SUFDaEM7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5tZXMtY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTYwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVmN2ZhIDAlLCAjYzNjZmUyIDEwMCUpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5oZXJvLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byA2MHB4O1xyXG4gICAgcGFkZGluZzogNjBweCA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmhlcm8tY2FyZDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbn1cclxuXHJcbi5oZXJvLWljb24ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5oZXJvLWNhcmQ6aG92ZXIgLmhlcm8taWNvbiB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKSBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4uaGVyby10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcclxufVxyXG5cclxuLmhlcm8tZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcclxuICAgIGNvbG9yOiAjNGE1NTY4O1xyXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ud2hhdC1pcy1tZXMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGdhcDogNDBweDtcclxuICAgIG1hcmdpbjogNjBweCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxNjAwcHg7XHJcbn1cclxuXHJcbi5tb2Rlcm4tY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDQwcHggcmdiYSgwLDAsMCwwLjA4KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4xKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tb2Rlcm4tY2FyZDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XHJcbn1cclxuXHJcbi5tb2Rlcm4tY2FyZDpob3Zlcjo6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG59XHJcblxyXG4ubW9kZXJuLWNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjIpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XHJcbn1cclxuXHJcbi5jYXJkLWJhZGdlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzJkMzc0ODtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjk7XHJcbiAgICBjb2xvcjogIzRhNTU2ODtcclxufVxyXG5cclxuLmJlbmVmaXRzLXNjcm9sbCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uYmVuZWZpdHMtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogOHB4O1xyXG59XHJcblxyXG4uYmVuZWZpdHMtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMDUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmJlbmVmaXRzLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5iZW5lZml0cy1saXN0IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBjb3VudGVyLXJlc2V0OiBiZW5lZml0LWNvdW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5iZW5lZml0LWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggNjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMDMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzY2N2VlYTtcclxuICAgIGNvdW50ZXItaW5jcmVtZW50OiBiZW5lZml0LWNvdW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcclxufVxyXG5cclxuLmJlbmVmaXQtaXRlbTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IGNvdW50ZXIoYmVuZWZpdC1jb3VudGVyKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4uYmVuZWZpdC1pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4wOCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxufVxyXG5cclxuLmNvbmNsdXNpb24tY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogNjBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogNjBweCA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb25jbHVzaW9uLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uY29uY2x1c2lvbi1oZWFkZXIgLmNvbnRlbnQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG59XHJcblxyXG4uY29uY2x1c2lvbi1jYXJkIC5jb250ZW50LWJvZHkge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS45O1xyXG4gICAgY29sb3I6ICM0YTU1Njg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY3RhLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLmN0YS1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTVweCA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdGEtYnV0dG9uOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTVweCA0MHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC40KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3RhLWJ1dHRvbiBtYXQtaWNvbiB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uY3RhLWJ1dHRvbjpob3ZlciBtYXQtaWNvbiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlSW5VcCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxufVxyXG5cclxuLmFuaW1hdGUtZmFkZS1pbiB7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjhzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5hbmltYXRlLXNsaWRlLWluIHtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVJblVwIDAuOHMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC53aGF0LWlzLW1lcyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZ2FwOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYmVuZWZpdHMtc2Nyb2xsIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5oZXJvLWNhcmQge1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMjVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhlcm8tdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubW9kZXJuLWNhcmQge1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29uY2x1c2lvbi1jYXJkIHtcclxuICAgICAgICBwYWRkaW5nOiA0MHB4IDI1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5iZW5lZml0LWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDU1cHg7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6512:
/*!***************************************************!*\
  !*** ./src/app/components/demo/demo.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoComponent": () => (/* binding */ DemoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ 5892);


class DemoComponent {}
DemoComponent.ɵfac = function DemoComponent_Factory(t) {
  return new (t || DemoComponent)();
};
DemoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DemoComponent,
  selectors: [["app-demo"]],
  decls: 4,
  vars: 0,
  consts: [[1, "height-100"], ["label", "YouTube demo"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/NS9qLHYQNAU", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "allowfullscreen", "", 2, "display", "block", "margin", "auto"]],
  template: function DemoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-tab-group")(2, "mat-tab", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__.MatTabGroup],
  styles: [".height-100[_ngcontent-%COMP%]{\r\n    min-height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kZW1vL2RlbW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi5oZWlnaHQtMTAwe1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7641:
/*!***************************************************!*\
  !*** ./src/app/components/help/help.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpComponent": () => (/* binding */ HelpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _basicnav_basicnav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basicnav/basicnav.component */ 6724);


class HelpComponent {
  constructor() {}
  ngOnInit() {}
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) {
  return new (t || HelpComponent)();
};
HelpComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HelpComponent,
  selectors: [["app-help"]],
  decls: 3,
  vars: 0,
  template: function HelpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-basicnav");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "help works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_basicnav_basicnav_component__WEBPACK_IMPORTED_MODULE_0__.BasicnavComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9743:
/*!********************************************************************!*\
  !*** ./src/app/components/home/categories/categories.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesComponent": () => (/* binding */ CategoriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CategoriesComponent {}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) {
  return new (t || CategoriesComponent)();
};
CategoriesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CategoriesComponent,
  selectors: [["app-categories"]],
  decls: 2,
  vars: 0,
  template: function CategoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "categories works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3044:
/*!******************************************************************!*\
  !*** ./src/app/components/home/home-main/home-main.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeMainComponent": () => (/* binding */ HomeMainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _home_section1_home_section1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home-section1/home-section1.component */ 7689);
/* harmony import */ var _home_section2_home_section2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home-section2/home-section2.component */ 1973);






class HomeMainComponent {
  constructor() {
    this.homeContent = [{
      title: "Optimize Your Manufacturing Processes with Industry-Leading Software Solutions",
      body: "Emphasize the ability of your software solutions to optimize and streamline manufacturing processes, improving efficiency, reducing costs, and increasing productivity."
    }, {
      title: "Take Control of Your Production with Advanced Manufacturing Software",
      body: "Highlight the advanced features and functionalities of your software, showcasing how it enables manufacturers to have full control over their production operations and make data-driven decisions."
    }, {
      title: "Increase Profitability and Reduce Downtime with our Manufacturing Software Solutions",
      body: "Showcase how your software solutions can help manufacturers maximize profitability by minimizing downtime, improving equipment maintenance, and optimizing resource utilization."
    }, {
      title: "Achieve Manufacturing Excellence with Tailored Software Solutions",
      body: "Emphasize your ability to provide customized software solutions that cater specifically to the unique needs and challenges of the manufacturing industry, helping businesses achieve operational excellence."
    }, {
      title: "Real-Time Insights for Smarter Decision-Making in Manufacturing",
      body: "Highlight the real-time data analytics capabilities of your software, showcasing how it provides manufacturers with valuable insights for making informed decisions and driving continuous improvement."
    }, {
      title: "Efficient Inventory Management with our Manufacturing Software",
      body: "Focus on the inventory management features of your software, emphasizing how it helps manufacturers optimize inventory levels, track materials, and minimize waste, resulting in cost savings."
    }, {
      title: "Enhance Quality Control and Compliance with our Manufacturing Software Solutions",
      body: "Showcase how your software enables manufacturers to enforce strict quality control standards, ensure regulatory compliance, and maintain product consistency and integrity."
    }, {
      title: "Connect Your Entire Manufacturing Ecosystem with our Software Integration",
      body: "Highlight the integration capabilities of your software, showcasing how it connects various systems and processes within the manufacturing ecosystem, enabling seamless data flow and collaboration."
    }, {
      title: "Stay Agile and Responsive to Market Demands with our Manufacturing Software",
      body: "Emphasize how your software solutions enable manufacturers to quickly adapt to changing market demands, optimize production schedules, and meet customer expectations with agility."
    }, {
      title: "Secure Your Manufacturing Operations with Robust Software Solutions",
      body: "Highlight the robust security features of your software, showcasing how it protects sensitive manufacturing data, intellectual property, and trade secrets from cyber threats and unauthorized access."
    }];
  }
}
HomeMainComponent.ɵfac = function HomeMainComponent_Factory(t) {
  return new (t || HomeMainComponent)();
};
HomeMainComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HomeMainComponent,
  selectors: [["app-home-main"]],
  decls: 93,
  vars: 0,
  consts: [[1, "home-container"], [1, "hero-section"], [1, "hero-overlay"], [1, "hero-content", "animate-fade-in"], [1, "montserrat", "hero-title"], [1, "hero-tagline"], [1, "hero-cta"], ["routerLink", "/home/about"], ["mat-raised-button", "", "color", "primary", 1, "cta-button"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16"], ["fill-rule", "evenodd", "d", "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"], ["routerLink", "/home/contactus"], ["mat-raised-button", "", 1, "secondary-button"], [1, "tms-showcase-section", "animate-slide-in"], [1, "showcase-header"], [1, "montserrat", "section-title"], [1, "section-subtitle"], [1, "showcase-content"], [1, "showcase-info"], [1, "info-item"], [1, "showcase-cta"], ["routerLink", "/home/tms-demo"], ["mat-raised-button", "", "color", "primary", 1, "showcase-button"], [1, "demo-note"], [1, "mission-section", "animate-slide-in"], [1, "section-header"], [1, "header-decoration"], [1, "mission-content"], [1, "mission-card"], [1, "card-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "40", "height", "40", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"], [1, "mission-text"], ["d", "M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"], ["d", "M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"], ["d", "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"], ["d", "M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z"], [1, "section-divider"]],
  template: function HomeMainComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Welcome to Sharp Floor NC");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Empowering Manufacturing Excellence Through Innovation");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "a", 7)(10, "button", 8)(11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Learn More");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "svg", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "path", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 11)(16, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Contact Us ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13)(19, "div", 14)(20, "h2", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\uD83D\uDD27 Live Tool Management System Demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Experience our complete TMS solution in action");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17)(25, "div", 18)(26, "div", 19)(27, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div")(30, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Real-Time Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Live tool tracking and availability");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 19)(35, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "swap_horiz");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div")(38, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Quick Check-In/Out");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Streamlined tool assignment");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 19)(43, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "analytics");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div")(46, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Usage Analytics");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Comprehensive reporting & insights");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 20)(51, "a", 21)(52, "button", 22)(53, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "play_arrow");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Try Live Demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Fully functional \u2022 No signup required");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 24)(60, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "h2", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Our Mission");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 27)(66, "div", 28)(67, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "svg", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "path", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "p", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, " At ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Sharp Floor NC");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, ", we are dedicated to empowering manufacturing companies with cutting-edge custom manufacturing software solutions. Our mission is to streamline and optimize production processes by providing tailored software tools designed to enhance efficiency, productivity, and profitability. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 28)(76, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "svg", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "path", 33)(79, "path", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "p", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, " Through our user-centric approach, we strive to understand the unique needs and challenges of each manufacturing organization, enabling us to create software solutions that align perfectly with their specific requirements. By harnessing the power of advanced technologies and industry best practices, we aim to revolutionize the way manufacturing companies operate. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 28)(83, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "svg", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "path", 35)(86, "path", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "p", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, " At the core of our mission lies a commitment to innovation, quality, and excellence. We continuously seek to stay ahead of the curve by developing and integrating cutting-edge features, staying up-to-date with the latest advancements in manufacturing technology. Our team of skilled professionals works tirelessly to deliver user-friendly, scalable, and robust software solutions. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "hr", 37)(90, "app-home-section1")(91, "hr", 37)(92, "app-home-section2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _home_section1_home_section1_component__WEBPACK_IMPORTED_MODULE_0__.HomeSection1Component, _home_section2_home_section2_component__WEBPACK_IMPORTED_MODULE_1__.HomeSection2Component],
  styles: [".home-container[_ngcontent-%COMP%] {\r\n    max-width: 1600px;\r\n    margin: 0 auto;\r\n    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\r\n}\r\n\r\n\r\n.hero-section[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    min-height: 80vh;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.hero-section[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"rgba(255,255,255,0.1)\" d=\"M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\"></path></svg>') no-repeat bottom;\r\n    background-size: cover;\r\n}\r\n\r\n.hero-overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%);\r\n}\r\n\r\n.hero-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    z-index: 2;\r\n    text-align: center;\r\n    color: white;\r\n    padding: 60px 20px;\r\n    max-width: 900px;\r\n}\r\n\r\n.hero-title[_ngcontent-%COMP%] {\r\n    font-size: 4rem;\r\n    font-weight: 800;\r\n    margin-bottom: 20px;\r\n    text-shadow: 2px 4px 12px rgba(0,0,0,0.3);\r\n    letter-spacing: -1px;\r\n    line-height: 1.2;\r\n}\r\n\r\n.hero-tagline[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    margin-bottom: 40px;\r\n    opacity: 0.95;\r\n    font-weight: 300;\r\n    text-shadow: 1px 2px 4px rgba(0,0,0,0.2);\r\n}\r\n\r\n.hero-cta[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 20px;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding: 15px 35px !important;\r\n    font-size: 1.1rem !important;\r\n    border-radius: 50px !important;\r\n    transition: all 0.3s ease !important;\r\n    box-shadow: 0 8px 20px rgba(0,0,0,0.3) !important;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 12px 30px rgba(0,0,0,0.4) !important;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\r\n    transform: translateX(5px);\r\n}\r\n\r\n.secondary-button[_ngcontent-%COMP%] {\r\n    padding: 15px 35px !important;\r\n    font-size: 1.1rem !important;\r\n    border-radius: 50px !important;\r\n    background: rgba(255, 255, 255, 0.2) !important;\r\n    -webkit-backdrop-filter: blur(10px);\r\n            backdrop-filter: blur(10px);\r\n    color: white !important;\r\n    border: 2px solid rgba(255, 255, 255, 0.3) !important;\r\n    transition: all 0.3s ease !important;\r\n}\r\n\r\n.secondary-button[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.3) !important;\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 8px 20px rgba(0,0,0,0.2) !important;\r\n}\r\n\r\n\r\n.tms-showcase-section[_ngcontent-%COMP%] {\r\n    padding: 80px 40px;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    color: white;\r\n    text-align: center;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.tms-showcase-section[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.showcase-header[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    z-index: 2;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.showcase-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\r\n    color: white;\r\n    margin-bottom: 15px;\r\n    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.showcase-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, 0.9);\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.showcase-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    z-index: 2;\r\n    max-width: 1000px;\r\n    margin: 0 auto;\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    gap: 50px;\r\n    align-items: center;\r\n}\r\n\r\n.showcase-info[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 25px;\r\n}\r\n\r\n.info-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n    background: rgba(255, 255, 255, 0.1);\r\n    -webkit-backdrop-filter: blur(10px);\r\n            backdrop-filter: blur(10px);\r\n    padding: 20px;\r\n    border-radius: 12px;\r\n    border: 1px solid rgba(255, 255, 255, 0.2);\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.info-item[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.2);\r\n    transform: translateX(5px);\r\n}\r\n\r\n.info-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n    width: 32px;\r\n    height: 32px;\r\n    color: rgba(255, 255, 255, 0.9);\r\n}\r\n\r\n.info-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    margin: 0 0 5px 0;\r\n    font-size: 1.1rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.info-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    color: rgba(255, 255, 255, 0.8);\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.showcase-cta[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.showcase-button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding: 15px 30px;\r\n    font-size: 1.1rem;\r\n    font-weight: 600;\r\n    background: rgba(255, 255, 255, 0.15);\r\n    -webkit-backdrop-filter: blur(10px);\r\n            backdrop-filter: blur(10px);\r\n    border: 2px solid rgba(255, 255, 255, 0.3);\r\n    color: white;\r\n    margin-bottom: 15px;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.showcase-button[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.25);\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.demo-note[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-size: 0.85rem;\r\n    color: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n\r\n.mission-section[_ngcontent-%COMP%] {\r\n    max-width: 1400px;\r\n    margin: 80px auto;\r\n    padding: 60px 20px;\r\n}\r\n\r\n.section-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 30px;\r\n    margin-bottom: 60px;\r\n}\r\n\r\n.header-decoration[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 3px;\r\n    background: linear-gradient(90deg, transparent, #667eea, transparent);\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n    font-weight: 800;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-clip: text;\r\n    text-align: center;\r\n    margin: 0;\r\n}\r\n\r\n.mission-content[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\r\n    gap: 30px;\r\n}\r\n\r\n.mission-card[_ngcontent-%COMP%] {\r\n    background: white;\r\n    padding: 40px;\r\n    border-radius: 20px;\r\n    box-shadow: 0 10px 40px rgba(0,0,0,0.08);\r\n    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\r\n    border: 1px solid rgba(102, 126, 234, 0.1);\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.mission-card[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 4px;\r\n    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\r\n    transform: scaleX(0);\r\n    transition: transform 0.4s ease;\r\n}\r\n\r\n.mission-card[_ngcontent-%COMP%]:hover::before {\r\n    transform: scaleX(1);\r\n}\r\n\r\n.mission-card[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-10px);\r\n    box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);\r\n    border-color: rgba(102, 126, 234, 0.3);\r\n}\r\n\r\n.card-icon[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 80px;\r\n    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);\r\n    border-radius: 16px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 25px;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.mission-card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%] {\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    transform: rotate(5deg) scale(1.1);\r\n}\r\n\r\n.card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    color: #667eea;\r\n    transition: color 0.3s ease;\r\n}\r\n\r\n.mission-card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\n.mission-text[_ngcontent-%COMP%] {\r\n    font-size: 1.05rem;\r\n    line-height: 1.8;\r\n    color: #4a5568;\r\n    margin: 0;\r\n}\r\n\r\n.section-divider[_ngcontent-%COMP%] {\r\n    max-width: 200px;\r\n    margin: 60px auto;\r\n    border: none;\r\n    height: 3px;\r\n    background: linear-gradient(90deg, transparent, #667eea, #764ba2, transparent);\r\n}\r\n\r\n\r\n@keyframes _ngcontent-%COMP%_fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_slideInUp {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(30px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n.animate-fade-in[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_fadeIn 1s ease-in;\r\n}\r\n\r\n.animate-slide-in[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_slideInUp 0.8s ease-out;\r\n}\r\n\r\n\r\n@media (max-width: 768px) {\r\n    .hero-title[_ngcontent-%COMP%] {\r\n        font-size: 2.5rem;\r\n    }\r\n    \r\n    .hero-tagline[_ngcontent-%COMP%] {\r\n        font-size: 1.2rem;\r\n    }\r\n    \r\n    .section-title[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n    \r\n    .mission-content[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    \r\n    .mission-card[_ngcontent-%COMP%] {\r\n        padding: 30px 20px;\r\n    }\r\n    \r\n    .header-decoration[_ngcontent-%COMP%] {\r\n        width: 50px;\r\n    }\r\n    \r\n    \r\n    .showcase-content[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n        gap: 30px;\r\n        text-align: center;\r\n    }\r\n    \r\n    .info-item[_ngcontent-%COMP%] {\r\n        justify-content: center;\r\n    }\r\n    \r\n    .tms-showcase-section[_ngcontent-%COMP%] {\r\n        padding: 60px 20px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUtbWFpbi9ob21lLW1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsNkRBQTZEO0FBQ2pFOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsNkRBQTZEO0lBQzdELGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxtZEFBbWQ7SUFDbmQsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCx5RkFBeUY7QUFDN0Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QyxvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5QixvQ0FBb0M7SUFDcEMsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGtE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QUMzQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTYwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVmN2ZhIDAlLCAjYzNjZmUyIDEwMCUpO1xyXG59XHJcblxyXG4vKiBIZXJvIFNlY3Rpb24gKi9cclxuLmhlcm8tc2VjdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmhlcm8tc2VjdGlvbjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNDQwIDMyMFwiPjxwYXRoIGZpbGw9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuMSlcIiBkPVwiTTAsOTZMNDgsMTEyQzk2LDEyOCwxOTIsMTYwLDI4OCwxNjBDMzg0LDE2MCw0ODAsMTI4LDU3NiwxMjIuN0M2NzIsMTE3LDc2OCwxMzksODY0LDEzOC43Qzk2MCwxMzksMTA1NiwxMTcsMTE1MiwxMDEuM0MxMjQ4LDg1LDEzNDQsNzUsMTM5Miw2OS4zTDE0NDAsNjRMMTQ0MCwzMjBMMTM5MiwzMjBDMTM0NCwzMjAsMTI0OCwzMjAsMTE1MiwzMjBDMTA1NiwzMjAsOTYwLDMyMCw4NjQsMzIwQzc2OCwzMjAsNjcyLDMyMCw1NzYsMzIwQzQ4MCwzMjAsMzg0LDMyMCwyODgsMzIwQzE5MiwzMjAsOTYsMzIwLDQ4LDMyMEwwLDMyMFpcIj48L3BhdGg+PC9zdmc+Jykgbm8tcmVwZWF0IGJvdHRvbTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5oZXJvLW92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMCUgNTAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMSkgMCUsIHRyYW5zcGFyZW50IDUwJSk7XHJcbn1cclxuXHJcbi5oZXJvLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDYwcHggMjBweDtcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbn1cclxuXHJcbi5oZXJvLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbn1cclxuXHJcbi5oZXJvLXRhZ2xpbmUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgb3BhY2l0eTogMC45NTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCA0cHggcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcblxyXG4uaGVyby1jdGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uY3RhLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzVweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgwLDAsMCwwLjMpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdGEtYnV0dG9uOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTJweCAzMHB4IHJnYmEoMCwwLDAsMC40KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3RhLWJ1dHRvbiBzdmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmN0YS1idXR0b246aG92ZXIgc3ZnIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5LWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDM1cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgIWltcG9ydGFudDtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnktYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDAsMCwwLDAuMikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogVE1TIFNob3djYXNlIFNlY3Rpb24gKi9cclxuLnRtcy1zaG93Y2FzZS1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDgwcHggNDBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udG1zLXNob3djYXNlLXNlY3Rpb246OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbn1cclxuXHJcbi5zaG93Y2FzZS1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5zaG93Y2FzZS1oZWFkZXIgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHRleHQtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uc2hvd2Nhc2UtaGVhZGVyIC5zZWN0aW9uLXN1YnRpdGxlIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLnNob3djYXNlLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xyXG4gICAgZ2FwOiA1MHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNob3djYXNlLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDI1cHg7XHJcbn1cclxuXHJcbi5pbmZvLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5pbmZvLWl0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbn1cclxuXHJcbi5pbmZvLWl0ZW0gbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG59XHJcblxyXG4uaW5mby1pdGVtIGg0IHtcclxuICAgIG1hcmdpbjogMCAwIDVweCAwO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uaW5mby1pdGVtIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4uc2hvd2Nhc2UtY3RhIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNob3djYXNlLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLnNob3djYXNlLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5kZW1vLW5vdGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxufVxyXG5cclxuLyogTWlzc2lvbiBTZWN0aW9uICovXHJcbi5taXNzaW9uLXNlY3Rpb24ge1xyXG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgICBtYXJnaW46IDgwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDYwcHggMjBweDtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWRlY29yYXRpb24ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCAjNjY3ZWVhLCB0cmFuc3BhcmVudCk7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5taXNzaW9uLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG59XHJcblxyXG4ubWlzc2lvbi1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggNDBweCByZ2JhKDAsMCwwLDAuMDgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjEpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1pc3Npb24tY2FyZDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XHJcbn1cclxuXHJcbi5taXNzaW9uLWNhcmQ6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxufVxyXG5cclxuLm1pc3Npb24tY2FyZDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjIpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XHJcbn1cclxuXHJcbi5jYXJkLWljb24ge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMSkgMCUsIHJnYmEoMTE4LCA3NSwgMTYyLCAwLjEpIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLm1pc3Npb24tY2FyZDpob3ZlciAuY2FyZC1pY29uIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKSBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4uY2FyZC1pY29uIHN2ZyB7XHJcbiAgICBjb2xvcjogIzY2N2VlYTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLm1pc3Npb24tY2FyZDpob3ZlciAuY2FyZC1pY29uIHN2ZyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5taXNzaW9uLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcclxuICAgIGNvbG9yOiAjNGE1NTY4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi1kaXZpZGVyIHtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDYwcHggYXV0bztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgIzY2N2VlYSwgIzc2NGJhMiwgdHJhbnNwYXJlbnQpO1xyXG59XHJcblxyXG4vKiBBbmltYXRpb25zICovXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluVXAge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hbmltYXRlLWZhZGUtaW4ge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXMgZWFzZS1pbjtcclxufVxyXG5cclxuLmFuaW1hdGUtc2xpZGUtaW4ge1xyXG4gICAgYW5pbWF0aW9uOiBzbGlkZUluVXAgMC44cyBlYXNlLW91dDtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5oZXJvLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhlcm8tdGFnbGluZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5taXNzaW9uLWNvbnRlbnQge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWlzc2lvbi1jYXJkIHtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5oZWFkZXItZGVjb3JhdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIFRNUyBTaG93Y2FzZSBSZXNwb25zaXZlICovXHJcbiAgICAuc2hvd2Nhc2UtY29udGVudCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZ2FwOiAzMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmluZm8taXRlbSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50bXMtc2hvd2Nhc2Utc2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogNjBweCAyMHB4O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7689:
/*!**************************************************************************!*\
  !*** ./src/app/components/home/home-section1/home-section1.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeSection1Component": () => (/* binding */ HomeSection1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class HomeSection1Component {}
HomeSection1Component.ɵfac = function HomeSection1Component_Factory(t) {
  return new (t || HomeSection1Component)();
};
HomeSection1Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HomeSection1Component,
  selectors: [["app-home-section1"]],
  decls: 12,
  vars: 0,
  consts: [[1, "montserrat", "f-weight-800", "text-center", "sf-taupe-color"], [1, "text-center"], [1, "montserrat", "f-weight-400"], ["src", "../../../../assets/img/masthead-img-work.png", "width", "100%", "alt", ""], ["routerLink", "/home/about"], ["type", "button", 1, "btn", "btn-outline-secondary"]],
  template: function HomeSection1Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "h3", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Coding the Future of Manufacturing: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Seamless Solutions, Superior Systems. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4)(10, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Learn more");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["section[_ngcontent-%COMP%]{\r\n    max-width: 800px;\r\n    margin: auto;\r\n    min-height: 70vh;\r\n    background-image: url('Gear_isabelline.png');\r\n    background-position: top left;\r\n    background-size: cover;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    min-height: 300px;\r\n    object-fit: cover;\r\n    object-position: right;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUtc2VjdGlvbjEvaG9tZS1zZWN0aW9uMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsNENBQW1FO0lBQ25FLDZCQUE2QjtJQUM3QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQiIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb257XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogNzB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9HZWFyX2lzYWJlbGxpbmUucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvYmplY3QtcG9zaXRpb246IHJpZ2h0O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1973:
/*!**************************************************************************!*\
  !*** ./src/app/components/home/home-section2/home-section2.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeSection2Component": () => (/* binding */ HomeSection2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 4522);


class HomeSection2Component {}
HomeSection2Component.ɵfac = function HomeSection2Component_Factory(t) {
  return new (t || HomeSection2Component)();
};
HomeSection2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HomeSection2Component,
  selectors: [["app-home-section2"]],
  decls: 35,
  vars: 0,
  consts: [[1, "sf-isabelline-bg", "sf-taupe-color"], [1, "montserrat", "f-weight-800"], [1, "list-2"], [1, "montserrat"], [1, "sf-taupe-bg", "box-contact"], [1, "text-light"], [1, "text-center", "contact-button"], ["mat-raised-button", ""]],
  template: function HomeSection2Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "h5", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Custom software can offer numerous benefits to manufacturing companies, tailored to their specific needs and processes. Here are some major advantages: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "ul")(5, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Increased Efficiency");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Enhanced Productivity");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Scalability");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Quality Control");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cost Savings");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Data Security");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Customization");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Real-time Reporting and Analytics");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Integration with Existing Systems");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Compliance and Regulatory Requirements");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "User Training and Adoption");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Innovation Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4)(30, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Custom software tailored to the unique needs: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6)(33, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Contact us today>>");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton],
  styles: ["section[_ngcontent-%COMP%]{\r\n    max-width: 800px;\r\n    margin: auto;\r\n    padding: 15px;\r\n}\r\nul[_ngcontent-%COMP%]{\r\n    column-count: 2;\r\n}\r\n\r\n.list-2[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n}\r\n\r\n.box-contact[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    min-height: 200px;\r\n    padding: 15px;\r\n}\r\n\r\n.contact-button[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    bottom: 15px;\r\n}\r\n\r\n@media(max-width: 700px){\r\n    ul[_ngcontent-%COMP%]{\r\n        column-count: 1;\r\n    }\r\n\r\n    .list-2[_ngcontent-%COMP%]{\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUtc2VjdGlvbjIvaG9tZS1zZWN0aW9uMi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtRQUNiLDBCQUEwQjtJQUM5QjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbntcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbnVse1xyXG4gICAgY29sdW1uLWNvdW50OiAyO1xyXG59XHJcblxyXG4ubGlzdC0ye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcclxufVxyXG5cclxuLmJveC1jb250YWN0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4uY29udGFjdC1idXR0b257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDcwMHB4KXtcclxuICAgIHVse1xyXG4gICAgICAgIGNvbHVtbi1jb3VudDogMTtcclxuICAgIH1cclxuXHJcbiAgICAubGlzdC0ye1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _basicnav_basicnav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basicnav/basicnav.component */ 6724);



class HomeComponent {
  constructor() {
    this.year = new Date().getFullYear();
  }
  ngOnInit() {}
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 84,
  vars: 1,
  consts: [[1, "sf-sticky"], [1, "modern-footer"], [1, "footer-wave"], ["viewBox", "0 0 1440 120", "xmlns", "http://www.w3.org/2000/svg"], ["fill", "#667eea", "fill-opacity", "0.3", "d", "M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"], [1, "footer-content"], [1, "footer-grid"], [1, "footer-column"], [1, "footer-logo"], [1, "footer-tagline"], [1, "social-links"], ["href", "https://www.linkedin.com/in/deploy-jg", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "LinkedIn", 1, "social-link"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"], [1, "footer-heading"], [1, "footer-links"], ["routerLink", "/home/custommes"], ["routerLink", "/home/custominventory"], ["routerLink", "/home/qms"], ["routerLink", "/home/tms-demo"], ["routerLink", "/home/preventive-maintenance-demo"], ["routerLink", "/home/inventory-management-demo"], ["routerLink", "/home/articles"], ["routerLink", "/home/about"], ["routerLink", "/home/contactus"], ["routerLink", "/home/privacy"], [1, "footer-contact"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"], ["d", "M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"], [1, "footer-bottom"], [1, "copyright"], ["d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"], ["d", "M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"], [1, "footer-credits"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "heart-icon"], ["fill-rule", "evenodd", "d", "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-basicnav");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "footer", 1)(4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "svg", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "h3", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sharp Floor NC");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Empowering Manufacturing Excellence Through Custom Software Solutions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10)(15, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "svg", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "path", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7)(19, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Solutions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ul", 15)(22, "li")(23, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Custom MES");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li")(26, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Inventory Management");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li")(29, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Quality Management");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li")(32, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Tool Management Demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li")(35, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Preventive Maintenance Demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li")(38, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Inventory Management Demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li")(41, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Resources");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 7)(44, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ul", 15)(47, "li")(48, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "About Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li")(51, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li")(54, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Privacy Notice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 7)(57, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Get In Touch");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ul", 26)(60, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "svg", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "path", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "info@sharpfloornc.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "svg", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "path", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Rochester, NY");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 30)(71, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "svg", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "path", 32)(74, "path", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 34)(78, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Made with");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "svg", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "path", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "for manufacturing excellence");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.year, " Sharp Floor NC LLC. All rights reserved.");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _basicnav_basicnav_component__WEBPACK_IMPORTED_MODULE_0__.BasicnavComponent],
  styles: [".modern-footer[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background: linear-gradient(135deg, #1e3a8a 0%, #667eea 50%, #764ba2 100%);\r\n    color: white;\r\n    margin-top: 80px;\r\n    overflow: hidden;\r\n}\r\n\r\n.footer-wave[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: -1px;\r\n    left: 0;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    line-height: 0;\r\n}\r\n\r\n.footer-wave[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: block;\r\n    width: calc(100% + 1.3px);\r\n    height: 120px;\r\n}\r\n\r\n.footer-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    max-width: 1400px;\r\n    margin: 0 auto;\r\n    padding: 80px 40px 30px;\r\n}\r\n\r\n.footer-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr 1fr 1.5fr;\r\n    gap: 50px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.footer-column[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_fadeInUp 0.8s ease-out;\r\n}\r\n\r\n.footer-logo[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    font-weight: 800;\r\n    margin-bottom: 15px;\r\n    background: linear-gradient(135deg, #fff 0%, #e0e7ff 100%);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-clip: text;\r\n}\r\n\r\n.footer-tagline[_ngcontent-%COMP%] {\r\n    font-size: 0.95rem;\r\n    line-height: 1.6;\r\n    color: rgba(255, 255, 255, 0.8);\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.social-links[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 15px;\r\n}\r\n\r\n.social-link[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    background: rgba(255, 255, 255, 0.1);\r\n    -webkit-backdrop-filter: blur(10px);\r\n            backdrop-filter: blur(10px);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    text-decoration: none;\r\n    transition: all 0.3s ease;\r\n    border: 1px solid rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.social-link[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.2);\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.footer-heading[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n    font-weight: 700;\r\n    margin-bottom: 20px;\r\n    color: white;\r\n    position: relative;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.footer-heading[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 40px;\r\n    height: 3px;\r\n    background: linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, transparent 100%);\r\n    border-radius: 2px;\r\n}\r\n\r\n.footer-links[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-bottom: 12px;\r\n}\r\n\r\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, 0.8);\r\n    text-decoration: none;\r\n    font-size: 0.95rem;\r\n    transition: all 0.3s ease;\r\n    display: inline-block;\r\n}\r\n\r\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: white;\r\n    transform: translateX(5px);\r\n}\r\n\r\n.footer-contact[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.footer-contact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 12px;\r\n    margin-bottom: 15px;\r\n    color: rgba(255, 255, 255, 0.8);\r\n    font-size: 0.95rem;\r\n}\r\n\r\n.footer-contact[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    flex-shrink: 0;\r\n    opacity: 0.8;\r\n}\r\n\r\n.footer-bottom[_ngcontent-%COMP%] {\r\n    border-top: 1px solid rgba(255, 255, 255, 0.1);\r\n    padding-top: 30px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    gap: 20px;\r\n}\r\n\r\n.copyright[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    color: rgba(255, 255, 255, 0.7);\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.footer-credits[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 6px;\r\n    color: rgba(255, 255, 255, 0.7);\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.heart-icon[_ngcontent-%COMP%] {\r\n    color: #ff6b9d;\r\n    animation: _ngcontent-%COMP%_heartbeat 1.5s ease-in-out infinite;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_fadeInUp {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(30px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_heartbeat {\r\n    0%, 100% {\r\n        transform: scale(1);\r\n    }\r\n    10%, 30% {\r\n        transform: scale(1.2);\r\n    }\r\n    20%, 40% {\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 1024px) {\r\n    .footer-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr 1fr;\r\n        gap: 40px;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .footer-content[_ngcontent-%COMP%] {\r\n        padding: 60px 20px 20px;\r\n    }\r\n    \r\n    .footer-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n        gap: 35px;\r\n    }\r\n    \r\n    .footer-bottom[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        text-align: center;\r\n    }\r\n    \r\n    .social-links[_ngcontent-%COMP%] {\r\n        justify-content: center;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQiwwRUFBMEU7SUFDMUUsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHdDQUF3QztJQUN4QyxTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsMERBQTBEO0lBQzFELDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQywyQkFBMkI7SUFDM0IseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLFdBQVc7SUFDWCxpRkFBaUY7SUFDakYsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDhDQUE4QztJQUM5QyxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLCtCQUErQjtJQUMvQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUiwrQkFBK0I7SUFDL0IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0k7UUFDSSw4QkFBOEI7UUFDOUIsU0FBUztJQUNiO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLDBCQUEwQjtRQUMxQixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kZXJuLWZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWUzYThhIDAlLCAjNjY3ZWVhIDUwJSwgIzc2NGJhMiAxMDAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZm9vdGVyLXdhdmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uZm9vdGVyLXdhdmUgc3ZnIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDEuM3B4KTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi5mb290ZXItY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogODBweCA0MHB4IDMwcHg7XHJcbn1cclxuXHJcbi5mb290ZXItZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmciAxLjVmcjtcclxuICAgIGdhcDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5mb290ZXItY29sdW1uIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluVXAgMC44cyBlYXNlLW91dDtcclxufVxyXG5cclxuLmZvb3Rlci1sb2dvIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZiAwJSwgI2UwZTdmZiAxMDAlKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG59XHJcblxyXG4uZm9vdGVyLXRhZ2xpbmUge1xyXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uc29jaWFsLWxpbmtzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDE1cHg7XHJcbn1cclxuXHJcbi5zb2NpYWwtbGluayB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG59XHJcblxyXG4uc29jaWFsLWxpbms6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5mb290ZXItaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5mb290ZXItaGVhZGluZzo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpIDAlLCB0cmFuc3BhcmVudCAxMDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLmZvb3Rlci1saW5rcyB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmZvb3Rlci1saW5rcyBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmtzIGEge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5mb290ZXItbGlua3MgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxufVxyXG5cclxuLmZvb3Rlci1jb250YWN0IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZm9vdGVyLWNvbnRhY3QgbGkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxufVxyXG5cclxuLmZvb3Rlci1jb250YWN0IHN2ZyB7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmZvb3Rlci1ib3R0b20ge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLmZvb3Rlci1jcmVkaXRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA2cHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi5oZWFydC1pY29uIHtcclxuICAgIGNvbG9yOiAjZmY2YjlkO1xyXG4gICAgYW5pbWF0aW9uOiBoZWFydGJlYXQgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5VcCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBoZWFydGJlYXQge1xyXG4gICAgMCUsIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgICAxMCUsIDMwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgfVxyXG4gICAgMjAlLCA0MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5mb290ZXItZ3JpZCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgIGdhcDogNDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZm9vdGVyLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDYwcHggMjBweCAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZm9vdGVyLWdyaWQge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIGdhcDogMzVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZvb3Rlci1ib3R0b20ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc29jaWFsLWxpbmtzIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9449:
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/inventory-management-showcase/inventory-management-showcase.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryManagementShowcaseComponent": () => (/* binding */ InventoryManagementShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/safe-url.pipe */ 4998);






const _c0 = ["demoFrame"];
function InventoryManagementShowcaseComponent_div_50_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46)(1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const metric_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](metric_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](metric_r7.label);
  }
}
function InventoryManagementShowcaseComponent_div_50_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InventoryManagementShowcaseComponent_div_50_div_9_div_1_Template, 5, 2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", feature_r4.metrics);
  }
}
function InventoryManagementShowcaseComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38)(1, "div", 39)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 40)(5, "h3", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, InventoryManagementShowcaseComponent_div_50_div_9_Template, 2, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const feature_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("animate-slide-in", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feature_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feature_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feature_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", feature_r4.metrics);
  }
}
function InventoryManagementShowcaseComponent_div_58_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 55)(1, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const point_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](point_r12);
  }
}
function InventoryManagementShowcaseComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "h3", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, InventoryManagementShowcaseComponent_div_58_li_7_Template, 5, 1, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const benefit_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("animation-delay", i_r10 * 0.1 + "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("animate-slide-in", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](benefit_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](benefit_r9.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", benefit_r9.points);
  }
}
function InventoryManagementShowcaseComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57)(1, "div", 58)(2, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function InventoryManagementShowcaseComponent_div_66_Template_img_error_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const tech_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.onImageError($event, tech_r13.fallbackIcon));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tech_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("animate-bounce-in", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", tech_r13.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", tech_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tech_r13.fallbackIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tech_r13.name);
  }
}
class InventoryManagementShowcaseComponent {
  onImageError(event, fallbackIcon) {
    const imgElement = event.target;
    const fallbackElement = imgElement.nextElementSibling;
    if (fallbackElement) {
      imgElement.style.display = 'none';
      fallbackElement.style.display = 'block';
    }
  }
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    this.features = [{
      icon: 'inventory_2',
      title: 'Real-Time Inventory Tracking',
      description: 'Live monitoring of stock levels with automatic updates and instant visibility across all locations.',
      metrics: [{
        value: '2,456',
        label: 'Items Tracked'
      }, {
        value: '98%',
        label: 'Accuracy'
      }, {
        value: '15',
        label: 'Locations'
      }]
    }, {
      icon: 'shopping_cart',
      title: 'Purchase Order Management',
      description: 'Streamlined procurement process with automated reorder points and supplier integration.',
      metrics: [{
        value: '145',
        label: 'Active POs'
      }, {
        value: '25%',
        label: 'Cost Savings'
      }]
    }, {
      icon: 'local_shipping',
      title: 'Supply Chain Integration',
      description: 'Seamless connection with suppliers and logistics providers for optimized supply chain operations.'
    }, {
      icon: 'trending_up',
      title: 'Demand Forecasting',
      description: 'AI-powered analytics to predict inventory needs and optimize stock levels based on historical data.'
    }, {
      icon: 'qr_code_scanner',
      title: 'Barcode & RFID Support',
      description: 'Advanced scanning capabilities for quick item identification and efficient warehouse operations.'
    }, {
      icon: 'analytics',
      title: 'Comprehensive Reporting',
      description: 'Detailed analytics on inventory turnover, costs, and performance metrics with customizable dashboards.'
    }];
    this.techStack = [{
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      fallbackIcon: 'web'
    }, {
      name: 'Angular Material',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
      fallbackIcon: 'design_services'
    }, {
      name: '.NET Core',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
      fallbackIcon: 'code'
    }, {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      fallbackIcon: 'storage'
    }, {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      fallbackIcon: 'javascript'
    }, {
      name: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      fallbackIcon: 'style'
    }, {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      fallbackIcon: 'memory'
    }];
    this.benefits = [{
      title: 'Inventory Optimization',
      description: 'Maximize efficiency while minimizing carrying costs',
      points: ['Reduce excess inventory by up to 30%', 'Automated reorder points prevent stockouts', 'ABC analysis for strategic inventory categorization', 'Real-time visibility across all warehouse locations']
    }, {
      title: 'Cost Control',
      description: 'Comprehensive cost management and procurement optimization',
      points: ['Track total cost of ownership for all items', 'Vendor performance analytics and comparison', 'Purchase order automation reduces processing time', 'Eliminate manual counting with automated cycle counts']
    }, {
      title: 'Operational Excellence',
      description: 'Streamline warehouse operations and improve accuracy',
      points: ['99.8% inventory accuracy with barcode scanning', 'Automated workflow for receiving and putaway', 'Pick path optimization reduces fulfillment time', 'Integration with ERP and accounting systems']
    }];
    this.demoUrl = 'https://inventory.sharpfloornc.com/';
  }
  openFullDemo() {
    window.open(this.demoUrl, '_blank', 'noopener,noreferrer');
  }
  refreshDemo() {
    if (this.demoFrame) {
      this.demoFrame.nativeElement.src = this.demoFrame.nativeElement.src;
    }
  }
}
InventoryManagementShowcaseComponent.ɵfac = function InventoryManagementShowcaseComponent_Factory(t) {
  return new (t || InventoryManagementShowcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer));
};
InventoryManagementShowcaseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: InventoryManagementShowcaseComponent,
  selectors: [["app-inventory-management-showcase"]],
  viewQuery: function InventoryManagementShowcaseComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.demoFrame = _t.first);
    }
  },
  decls: 82,
  vars: 6,
  consts: [[1, "ims-showcase-container"], [1, "hero-section", "animate-fade-in"], [1, "hero-overlay"], [1, "hero-content"], [1, "montserrat", "hero-title"], [1, "hero-tagline"], [1, "hero-badges"], [1, "badge"], [1, "hero-decoration"], [1, "demo-section"], [1, "demo-header"], [1, "section-title"], [1, "section-subtitle"], [1, "demo-controls"], ["mat-raised-button", "", "color", "primary", 1, "demo-button", 3, "click"], ["mat-stroked-button", "", 1, "demo-button", 3, "click"], [1, "demo-frame-container"], ["frameborder", "0", "loading", "lazy", "title", "Inventory Management System Demo", 1, "demo-frame", 3, "src"], ["demoFrame", ""], [1, "frame-overlay", 3, "click"], [1, "overlay-content"], [1, "features-section"], [1, "section-header"], [1, "features-grid"], ["class", "feature-card", 3, "animate-slide-in", 4, "ngFor", "ngForOf"], [1, "benefits-section"], [1, "benefits-grid"], ["class", "benefit-card", 3, "animate-slide-in", "animation-delay", 4, "ngFor", "ngForOf"], [1, "tech-section"], [1, "tech-stack"], ["class", "tech-item", 3, "animate-bounce-in", 4, "ngFor", "ngForOf"], [1, "cta-section"], [1, "cta-content"], [1, "cta-title"], [1, "cta-description"], [1, "cta-buttons"], ["mat-raised-button", "", "color", "primary", 1, "cta-button", "primary"], ["mat-stroked-button", "", 1, "cta-button", "secondary"], [1, "feature-card"], [1, "feature-icon"], [1, "feature-content"], [1, "feature-title"], [1, "feature-description"], ["class", "feature-metrics", 4, "ngIf"], [1, "feature-metrics"], ["class", "metric", 4, "ngFor", "ngForOf"], [1, "metric"], [1, "metric-value"], [1, "metric-label"], [1, "benefit-card"], [1, "benefit-header"], [1, "benefit-title"], [1, "benefit-description"], [1, "benefit-points"], ["class", "benefit-point", 4, "ngFor", "ngForOf"], [1, "benefit-point"], [1, "check-icon"], [1, "tech-item"], [1, "tech-icon-container"], [1, "tech-icon", 3, "src", "alt", "error"], [1, "fallback-icon", "tech-icon"], [1, "tech-name"]],
  template: function InventoryManagementShowcaseComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Inventory Management System");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Complete Inventory Control for Modern Businesses");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Real-Time Tracking");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Purchase Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Demand Forecasting");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Barcode Integration");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "section", 9)(19, "div", 10)(20, "h2", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\uD83D\uDE80 Live Interactive Demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Explore our comprehensive Inventory Management System in action");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13)(25, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InventoryManagementShowcaseComponent_Template_button_click_25_listener() {
        return ctx.openFullDemo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "open_in_new");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Open Full Demo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InventoryManagementShowcaseComponent_Template_button_click_29_listener() {
        return ctx.refreshDemo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "refresh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Refresh Demo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "iframe", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "safeUrl");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InventoryManagementShowcaseComponent_Template_div_click_37_listener() {
        return ctx.openFullDemo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 20)(39, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "touch_app");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Click to interact with live demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "section", 21)(44, "div", 22)(45, "h2", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\uD83D\uDCE6 Key Features");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Comprehensive tools for complete inventory control and optimization");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, InventoryManagementShowcaseComponent_div_50_Template, 10, 6, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "section", 25)(52, "div", 22)(53, "h2", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\uD83D\uDCCA Business Benefits");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Measurable improvements to your inventory operations and bottom line");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, InventoryManagementShowcaseComponent_div_58_Template, 8, 7, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "section", 28)(60, "div", 22)(61, "h2", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "\u26A1 Technology Stack");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Built with cutting-edge technologies for reliability and performance");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, InventoryManagementShowcaseComponent_div_66_Template, 7, 8, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "section", 31)(68, "div", 32)(69, "h2", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Ready to Optimize Your Inventory Operations?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "p", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, " Discover how our Inventory Management System can help you reduce costs, improve accuracy, and streamline your supply chain operations. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 35)(74, "button", 36)(75, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "schedule_send");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, " Schedule a Demo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "button", 37)(79, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "contact_support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " Contact Us ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 4, ctx.demoUrl), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.features);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.benefits);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.techStack);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_0__.SafeUrlPipe],
  styles: [".ims-showcase-container[_ngcontent-%COMP%] {\r\n    min-height: 100vh;\r\n    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);\r\n}\r\n\r\n\r\n.hero-section[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);\r\n    color: white;\r\n    padding: 100px 40px 80px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n\r\n.hero-overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.hero-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    z-index: 2;\r\n}\r\n\r\n.hero-title[_ngcontent-%COMP%] {\r\n    font-size: 3.5rem;\r\n    font-weight: 800;\r\n    margin-bottom: 20px;\r\n    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.hero-tagline[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n    margin-bottom: 40px;\r\n    opacity: 0.95;\r\n    font-weight: 300;\r\n}\r\n\r\n.hero-badges[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    gap: 15px;\r\n    margin-top: 30px;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%] {\r\n    background: rgba(255, 255, 255, 0.2);\r\n    -webkit-backdrop-filter: blur(10px);\r\n            backdrop-filter: blur(10px);\r\n    padding: 10px 20px;\r\n    border-radius: 25px;\r\n    font-size: 0.9rem;\r\n    font-weight: 500;\r\n    border: 1px solid rgba(255, 255, 255, 0.3);\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.3);\r\n    transform: translateY(-2px);\r\n}\r\n\r\n.hero-decoration[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: -1px;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 60px;\r\n    background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 120\"><path fill=\"%23f8fafc\" d=\"M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z\"></path></svg>') no-repeat bottom;\r\n    background-size: cover;\r\n}\r\n\r\n\r\n.demo-section[_ngcontent-%COMP%] {\r\n    padding: 80px 40px;\r\n    max-width: 1400px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.demo-header[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    font-weight: 700;\r\n    color: #1a202c;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.section-subtitle[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    color: #64748b;\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.demo-controls[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 20px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.demo-button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    padding: 12px 24px;\r\n    font-weight: 500;\r\n}\r\n\r\n.demo-frame-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background: white;\r\n    border-radius: 12px;\r\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\r\n    overflow: hidden;\r\n    height: 700px;\r\n    border: 1px solid #e2e8f0;\r\n}\r\n\r\n.demo-frame[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    border: none;\r\n}\r\n\r\n.frame-overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: rgba(59, 130, 246, 0.05);\r\n    -webkit-backdrop-filter: blur(1px);\r\n            backdrop-filter: blur(1px);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease;\r\n    opacity: 0;\r\n}\r\n\r\n.frame-overlay[_ngcontent-%COMP%]:hover {\r\n    opacity: 1;\r\n    background: rgba(59, 130, 246, 0.1);\r\n}\r\n\r\n.overlay-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    background: rgba(255, 255, 255, 0.9);\r\n    padding: 15px 25px;\r\n    border-radius: 30px;\r\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\r\n    font-weight: 500;\r\n    color: #3b82f6;\r\n}\r\n\r\n\r\n.features-section[_ngcontent-%COMP%] {\r\n    padding: 80px 40px;\r\n    background: white;\r\n}\r\n\r\n.section-header[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.features-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\r\n    gap: 30px;\r\n    max-width: 1400px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.feature-card[_ngcontent-%COMP%] {\r\n    background: white;\r\n    padding: 30px;\r\n    border-radius: 12px;\r\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\r\n    text-align: center;\r\n    transition: all 0.3s ease;\r\n    border: 1px solid #f1f5f9;\r\n    animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out forwards;\r\n    opacity: 0;\r\n    transform: translateY(30px);\r\n}\r\n\r\n.feature-card[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-5px);\r\n    box-shadow: 0 8px 30px rgba(59, 130, 246, 0.15);\r\n}\r\n\r\n.feature-icon[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n    height: 60px;\r\n    background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 0 auto 20px;\r\n}\r\n\r\n.feature-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 28px;\r\n    width: 28px;\r\n    height: 28px;\r\n}\r\n\r\n.feature-title[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n    font-weight: 600;\r\n    color: #1a202c;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.feature-description[_ngcontent-%COMP%] {\r\n    color: #64748b;\r\n    line-height: 1.6;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.feature-metrics[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-top: 20px;\r\n    padding-top: 20px;\r\n    border-top: 1px solid #f1f5f9;\r\n}\r\n\r\n.metric[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.metric-value[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    color: #3b82f6;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.metric-label[_ngcontent-%COMP%] {\r\n    font-size: 0.85rem;\r\n    color: #64748b;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n\r\n.benefits-section[_ngcontent-%COMP%] {\r\n    padding: 80px 40px;\r\n    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);\r\n}\r\n\r\n.benefits-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\r\n    gap: 40px;\r\n    max-width: 1400px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.benefit-card[_ngcontent-%COMP%] {\r\n    background: white;\r\n    padding: 30px;\r\n    border-radius: 12px;\r\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);\r\n    border-left: 4px solid #3b82f6;\r\n    animation: _ngcontent-%COMP%_slideInUp 0.8s ease-out forwards;\r\n    opacity: 0;\r\n    transform: translateY(30px);\r\n}\r\n\r\n.benefit-header[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.benefit-title[_ngcontent-%COMP%] {\r\n    font-size: 1.4rem;\r\n    font-weight: 600;\r\n    color: #1a202c;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.benefit-description[_ngcontent-%COMP%] {\r\n    color: #64748b;\r\n    line-height: 1.6;\r\n}\r\n\r\n.benefit-points[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.benefit-point[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    margin-bottom: 12px;\r\n    color: #64748b;\r\n    line-height: 1.5;\r\n}\r\n\r\n.check-icon[_ngcontent-%COMP%] {\r\n    color: #3b82f6;\r\n    font-size: 18px;\r\n    width: 18px;\r\n    height: 18px;\r\n    flex-shrink: 0;\r\n}\r\n\r\n\r\n.tech-section[_ngcontent-%COMP%] {\r\n    padding: 80px 40px;\r\n    background: white;\r\n}\r\n\r\n.tech-stack[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    gap: 30px;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.tech-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 15px;\r\n    padding: 25px;\r\n    background: white;\r\n    border-radius: 12px;\r\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\r\n    transition: all 0.3s ease;\r\n    min-width: 120px;\r\n    border: 1px solid #f1f5f9;\r\n}\r\n\r\n.tech-item[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\r\n    border-color: #3b82f6;\r\n}\r\n\r\n.tech-icon[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\n.tech-name[_ngcontent-%COMP%] {\r\n    font-weight: 500;\r\n    color: #1a202c;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n\r\n.cta-section[_ngcontent-%COMP%] {\r\n    padding: 80px 40px;\r\n    background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.cta-content[_ngcontent-%COMP%] {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.cta-title[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    font-weight: 700;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.cta-description[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n    margin-bottom: 40px;\r\n    opacity: 0.9;\r\n}\r\n\r\n.cta-buttons[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 20px;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    padding: 15px 30px;\r\n    font-size: 1.1rem;\r\n    font-weight: 500;\r\n}\r\n\r\n.cta-button.primary[_ngcontent-%COMP%] {\r\n    background: rgba(255, 255, 255, 0.9);\r\n    color: #1e40af;\r\n}\r\n\r\n.cta-button.secondary[_ngcontent-%COMP%] {\r\n    background: rgba(255, 255, 255, 0.1);\r\n    color: white;\r\n    border: 1px solid rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.cta-button.secondary[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n\r\n@keyframes _ngcontent-%COMP%_fadeInUp {\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_slideInUp {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(30px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n.animate-fade-in[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_fadeIn 0.8s ease-out;\r\n}\r\n\r\n.animate-slide-in[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_slideInUp 0.8s ease-out;\r\n}\r\n\r\n.animate-bounce-in[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_bounceIn 0.6s ease-out;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_fadeIn {\r\n    from { opacity: 0; }\r\n    to { opacity: 1; }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_bounceIn {\r\n    0% {\r\n        opacity: 0;\r\n        transform: scale(0.3);\r\n    }\r\n    50% {\r\n        opacity: 1;\r\n        transform: scale(1.05);\r\n    }\r\n    70% {\r\n        transform: scale(0.9);\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 768px) {\r\n    .hero-title[_ngcontent-%COMP%] {\r\n        font-size: 2.5rem;\r\n    }\r\n    \r\n    .hero-tagline[_ngcontent-%COMP%] {\r\n        font-size: 1.1rem;\r\n    }\r\n    \r\n    .section-title[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n    \r\n    .demo-section[_ngcontent-%COMP%], .features-section[_ngcontent-%COMP%], .benefits-section[_ngcontent-%COMP%], .tech-section[_ngcontent-%COMP%], .cta-section[_ngcontent-%COMP%] {\r\n        padding: 60px 20px;\r\n    }\r\n    \r\n    .features-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n        gap: 20px;\r\n    }\r\n    \r\n    .benefits-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n        gap: 30px;\r\n    }\r\n    \r\n    .demo-frame-container[_ngcontent-%COMP%] {\r\n        height: 500px;\r\n    }\r\n    \r\n    .cta-buttons[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n    \r\n    .cta-title[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n    \r\n    .cta-description[_ngcontent-%COMP%] {\r\n        font-size: 1.1rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnktbWFuYWdlbWVudC1zaG93Y2FzZS9pbnZlbnRvcnktbWFuYWdlbWVudC1zaG93Y2FzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLDZEQUE2RDtBQUNqRTs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxrQkFBa0I7SUFDbEIsNkRBQTZEO0lBQzdELFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiwwQ0FBMEM7SUFDMUMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osMGJBQTBiO0lBQzFiLHNCQUFzQjtBQUMxQjs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxrQkFBa0I7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bUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmltcy1zaG93Y2FzZS1jb250YWluZXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmYWZjIDAlLCAjZTJlOGYwIDEwMCUpO1xyXG59XHJcblxyXG4vKiBIZXJvIFNlY3Rpb24gKi9cclxuLmhlcm8tc2VjdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjM2I4MmY2IDAlLCAjMWU0MGFmIDEwMCUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTAwcHggNDBweCA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmhlcm8tb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5oZXJvLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5oZXJvLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLmhlcm8tdGFnbGluZSB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjk1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmhlcm8tYmFkZ2VzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmJhZGdlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxufVxyXG5cclxuLmhlcm8tZGVjb3JhdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0xcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE0NDAgMTIwXCI+PHBhdGggZmlsbD1cIiUyM2Y4ZmFmY1wiIGQ9XCJNMCwzMkw0OCwzNy4zQzk2LDQzLDE5Miw1MywyODgsNTguN0MzODQsNjQsNDgwLDY0LDU3Niw1OC43QzY3Miw1Myw3NjgsNDMsODY0LDQ4Qzk2MCw1MywxMDU2LDc1LDExNTIsODBDMTI0OCw4NSwxMzQ0LDc1LDEzOTIsNjkuM0wxNDQwLDY0TDE0NDAsMTIwTDEzOTIsMTIwQzEzNDQsMTIwLDEyNDgsMTIwLDExNTIsMTIwQzEwNTYsMTIwLDk2MCwxMjAsODY0LDEyMEM3NjgsMTIwLDY3MiwxMjAsNTc2LDEyMEM0ODAsMTIwLDM4NCwxMjAsMjg4LDEyMEMxOTIsMTIwLDk2LDEyMCw0OCwxMjBMMCwxMjBaXCI+PC9wYXRoPjwvc3ZnPicpIG5vLXJlcGVhdCBib3R0b207XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4vKiBEZW1vIFNlY3Rpb24gKi9cclxuLmRlbW8tc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDQwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZGVtby1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMxYTIwMmM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZGVtby1jb250cm9scyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uZGVtby1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5kZW1vLWZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbn1cclxuXHJcbi5kZW1vLWZyYW1lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZnJhbWUtb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC4wNSk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmZyYW1lLW92ZXJsYXk6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjEpO1xyXG59XHJcblxyXG4ub3ZlcmxheS1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjM2I4MmY2O1xyXG59XHJcblxyXG4vKiBGZWF0dXJlcyBTZWN0aW9uICovXHJcbi5mZWF0dXJlcy1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDgwcHggNDBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmZlYXR1cmVzLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmZlYXR1cmUtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbiAgICBhbmltYXRpb246IGZhZGVJblVwIDAuNnMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xyXG59XHJcblxyXG4uZmVhdHVyZS1jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMwcHggcmdiYSg1OSwgMTMwLCAyNDYsIDAuMTUpO1xyXG59XHJcblxyXG4uZmVhdHVyZS1pY29uIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzNiODJmNiAwJSwgIzFlNDBhZiAxMDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xyXG59XHJcblxyXG4uZmVhdHVyZS1pY29uIG1hdC1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG59XHJcblxyXG4uZmVhdHVyZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzFhMjAyYztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlLWRlc2NyaXB0aW9uIHtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlLW1ldHJpY3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbn1cclxuXHJcbi5tZXRyaWMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWV0cmljLXZhbHVlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMzYjgyZjY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5tZXRyaWMtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcblxyXG4vKiBCZW5lZml0cyBTZWN0aW9uICovXHJcbi5iZW5lZml0cy1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDgwcHggNDBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGZhZmMgMCUsICNlMmU4ZjAgMTAwJSk7XHJcbn1cclxuXHJcbi5iZW5lZml0cy1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwMHB4LCAxZnIpKTtcclxuICAgIGdhcDogNDBweDtcclxuICAgIG1heC13aWR0aDogMTQwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5iZW5lZml0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzNiODJmNjtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVJblVwIDAuOHMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xyXG59XHJcblxyXG4uYmVuZWZpdC1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJlbmVmaXQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMxYTIwMmM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYmVuZWZpdC1kZXNjcmlwdGlvbiB7XHJcbiAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuXHJcbi5iZW5lZml0LXBvaW50cyB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJlbmVmaXQtcG9pbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4uY2hlY2staWNvbiB7XHJcbiAgICBjb2xvcjogIzNiODJmNjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi8qIFRlY2hub2xvZ3kgU3RhY2sgKi9cclxuLnRlY2gtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLnRlY2gtc3RhY2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnRlY2gtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG59XHJcblxyXG4udGVjaC1pdGVtOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2I4MmY2O1xyXG59XHJcblxyXG4udGVjaC1pY29uIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4udGVjaC1uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzFhMjAyYztcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4vKiBDYWxsIHRvIEFjdGlvbiAqL1xyXG4uY3RhLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogODBweCA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzNiODJmNiAwJSwgIzFlNDBhZiAxMDAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmN0YS1jb250ZW50IHtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmN0YS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY3RhLWRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLmN0YS1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmN0YS1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmN0YS1idXR0b24ucHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICBjb2xvcjogIzFlNDBhZjtcclxufVxyXG5cclxuLmN0YS1idXR0b24uc2Vjb25kYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuLmN0YS1idXR0b24uc2Vjb25kYXJ5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxufVxyXG5cclxuLyogQW5pbWF0aW9ucyAqL1xyXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluVXAge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hbmltYXRlLWZhZGUtaW4ge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC44cyBlYXNlLW91dDtcclxufVxyXG5cclxuLmFuaW1hdGUtc2xpZGUtaW4ge1xyXG4gICAgYW5pbWF0aW9uOiBzbGlkZUluVXAgMC44cyBlYXNlLW91dDtcclxufVxyXG5cclxuLmFuaW1hdGUtYm91bmNlLWluIHtcclxuICAgIGFuaW1hdGlvbjogYm91bmNlSW4gMC42cyBlYXNlLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIHRvIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvdW5jZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgfVxyXG4gICAgNzAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmhlcm8tdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaGVyby10YWdsaW5lIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRlbW8tc2VjdGlvbixcclxuICAgIC5mZWF0dXJlcy1zZWN0aW9uLFxyXG4gICAgLmJlbmVmaXRzLXNlY3Rpb24sXHJcbiAgICAudGVjaC1zZWN0aW9uLFxyXG4gICAgLmN0YS1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiA2MHB4IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mZWF0dXJlcy1ncmlkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5iZW5lZml0cy1ncmlkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICBnYXA6IDMwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kZW1vLWZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmN0YS1idXR0b25zIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jdGEtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmN0YS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LoginComponent {
  constructor() {}
  ngOnInit() {}
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)();
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 46,
  vars: 0,
  consts: [[1, "section"], [1, "container"], [1, "row", "full-height", "justify-content-center"], [1, "col-12", "text-center", "align-self-center", "py-5"], [1, "section", "pb-5", "pt-5", "pt-sm-2", "text-center"], [1, "mb-0", "pb-3"], ["type", "checkbox", "id", "reg-log", "name", "reg-log", 1, "checkbox"], ["for", "reg-log"], [1, "card-3d-wrap", "mx-auto"], [1, "card-3d-wrapper"], [1, "card-front"], [1, "center-wrap"], [1, "section", "text-center"], [1, "mb-4", "pb-3"], [1, "form-group"], ["type", "email", "name", "logemail", "placeholder", "Your Email", "id", "logemail", "autocomplete", "off", 1, "form-style"], [1, "input-icon", "uil", "uil-at"], [1, "form-group", "mt-2"], ["type", "password", "name", "logpass", "placeholder", "Your Password", "id", "logpass", "autocomplete", "off", 1, "form-style"], [1, "input-icon", "uil", "uil-lock-alt"], ["href", "#", 1, "btn", "mt-4"], [1, "mb-0", "mt-4", "text-center"], ["href", "#0", 1, "link"], [1, "card-back"], ["type", "text", "name", "logname", "placeholder", "Your Full Name", "id", "logname", "autocomplete", "off", 1, "form-style"], [1, "input-icon", "uil", "uil-user"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6", 5)(6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Log In ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6)(11, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Log In");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15)(21, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 18)(24, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 21)(28, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Forgot your password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23)(31, "div", 11)(32, "div", 12)(33, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sign Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 24)(37, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 15)(40, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 18)(43, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    }
  },
  styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900);\r\nbody[_ngcontent-%COMP%]{\r\n\tfont-family: 'Poppins', sans-serif;\r\n\tfont-weight: 300;\r\n\tfont-size: 15px;\r\n\tline-height: 1.7;\r\n\tcolor: #c4c3ca;\r\n\tbackground-color: #1f2029;\r\n\toverflow-x: hidden;\r\n}\r\na[_ngcontent-%COMP%] {\r\n\tcursor: pointer;\r\n  transition: all 200ms linear;\r\n}\r\na[_ngcontent-%COMP%]:hover {\r\n\ttext-decoration: none;\r\n}\r\n.link[_ngcontent-%COMP%] {\r\n  color: #c4c3ca;\r\n}\r\n.link[_ngcontent-%COMP%]:hover {\r\n  color: #ffeba7;\r\n}\r\np[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n  line-height: 1.7;\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n}\r\nh6[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  padding: 0 20px;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n}\r\n.section[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  display: block;\r\n}\r\n.full-height[_ngcontent-%COMP%]{\r\n  min-height: 100vh;\r\n}\r\n[type=\"checkbox\"][_ngcontent-%COMP%]:checked, [type=\"checkbox\"][_ngcontent-%COMP%]:not(:checked){\r\n  position: absolute;\r\n  left: -9999px;\r\n}\r\n.checkbox[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%], .checkbox[_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: block;\r\n  text-align: center;\r\n  width: 60px;\r\n  height: 16px;\r\n  border-radius: 8px;\r\n  padding: 0;\r\n  margin: 10px auto;\r\n  cursor: pointer;\r\n  background-color: #ffeba7;\r\n}\r\n.checkbox[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before, .checkbox[_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%]:before{\r\n  position: absolute;\r\n  display: block;\r\n  width: 36px;\r\n  height: 36px;\r\n  border-radius: 50%;\r\n  color: #ffeba7;\r\n  background-color: #102770;\r\n  font-family: 'unicons';\r\n  content: '\\eb4f';\r\n  z-index: 20;\r\n  top: -10px;\r\n  left: -10px;\r\n  line-height: 36px;\r\n  text-align: center;\r\n  font-size: 24px;\r\n  transition: all 0.5s ease;\r\n}\r\n.checkbox[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n  transform: translateX(44px) rotate(-270deg);\r\n}\r\n\r\n\r\n.card-3d-wrap[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 440px;\r\n  max-width: 100%;\r\n  height: 400px;\r\n  transform-style: preserve-3d;\r\n  perspective: 800px;\r\n  margin-top: 60px;\r\n}\r\n.card-3d-wrapper[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  position:absolute;    \r\n  top: 0;\r\n  left: 0;\r\n  transform-style: preserve-3d;\r\n  transition: all 600ms ease-out; \r\n}\r\n.card-front[_ngcontent-%COMP%], .card-back[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #2a2b38;\r\n  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');\r\n  background-position: bottom center;\r\n  background-repeat: no-repeat;\r\n  background-size: 300%;\r\n  position: absolute;\r\n  border-radius: 6px;\r\n  left: 0;\r\n  top: 0;\r\n  transform-style: preserve-3d;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n}\r\n.card-back[_ngcontent-%COMP%] {\r\n  transform: rotateY(180deg);\r\n}\r\n.checkbox[_ngcontent-%COMP%]:checked    ~ .card-3d-wrap[_ngcontent-%COMP%]   .card-3d-wrapper[_ngcontent-%COMP%] {\r\n  transform: rotateY(180deg);\r\n}\r\n.center-wrap[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width: 100%;\r\n  padding: 0 35px;\r\n  top: 50%;\r\n  left: 0;\r\n  transform: translate3d(0, -50%, 35px) perspective(100px);\r\n  z-index: 20;\r\n  display: block;\r\n}\r\n\r\n\r\n.form-group[_ngcontent-%COMP%]{ \r\n  position: relative;\r\n  display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.form-style[_ngcontent-%COMP%] {\r\n  padding: 13px 20px;\r\n  padding-left: 55px;\r\n  height: 48px;\r\n  width: 100%;\r\n  font-weight: 500;\r\n  border-radius: 4px;\r\n  font-size: 14px;\r\n  line-height: 22px;\r\n  letter-spacing: 0.5px;\r\n  outline: none;\r\n  color: #c4c3ca;\r\n  background-color: #1f2029;\r\n  border: none;\r\n  transition: all 200ms linear;\r\n  box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);\r\n}\r\n.form-style[_ngcontent-%COMP%]:focus, .form-style[_ngcontent-%COMP%]:active {\r\n  border: none;\r\n  outline: none;\r\n  box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);\r\n}\r\n.input-icon[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 18px;\r\n  height: 48px;\r\n  font-size: 24px;\r\n  line-height: 48px;\r\n  text-align: left;\r\n  color: #ffeba7;\r\n  transition: all 200ms linear;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder  {\r\n  color: #c4c3ca;\r\n  opacity: 0.7;\r\n  -ms-transition: all 200ms linear;\r\n  transition: all 200ms linear;\r\n}\r\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder  {\r\n  color: #c4c3ca;\r\n  opacity: 0.7;\r\n  -moz-transition: all 200ms linear;\r\n  transition: all 200ms linear;\r\n}\r\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder  {\r\n  color: #c4c3ca;\r\n  opacity: 0.7;\r\n  -moz-transition: all 200ms linear;\r\n  transition: all 200ms linear;\r\n}\r\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder  {\r\n  color: #c4c3ca;\r\n  opacity: 0.7;\r\n  -webkit-transition: all 200ms linear;\r\n  transition: all 200ms linear;\r\n}\r\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:-ms-input-placeholder  {\r\n  opacity: 0;\r\n  -ms-transition: all 200ms linear;\r\n  transition: all 200ms linear;\r\n}\r\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus::-moz-placeholder  {\r\n  opacity: 0;\r\n  -moz-transition: all 200ms linear;\r\n  transition: all 200ms linear;\r\n}\r\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:-moz-placeholder  {\r\n  opacity: 0;\r\n  -moz-transition: all 200ms linear;\r\n  transition: all 200ms linear;\r\n}\r\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus::-webkit-input-placeholder  {\r\n  opacity: 0;\r\n  -webkit-transition: all 200ms linear;\r\n  transition: all 200ms linear;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{  \r\n  border-radius: 4px;\r\n  height: 44px;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  transition: all 200ms linear;\r\n  padding: 0 30px;\r\n  letter-spacing: 1px;\r\n  display: inline-flex;\r\n  -moz-align-items: center;\r\n  -ms-align-items: center;\r\n  align-items: center;\r\n  -moz-justify-content: center;\r\n  -ms-justify-content: center;\r\n  justify-content: center;\r\n  -ms-flex-pack: center;\r\n  text-align: center;\r\n  border: none;\r\n  background-color: #ffeba7;\r\n  color: #102770;\r\n  box-shadow: 0 8px 24px 0 rgba(255,235,167,.2);\r\n}\r\n.btn[_ngcontent-%COMP%]:active, .btn[_ngcontent-%COMP%]:focus{  \r\n  background-color: #102770;\r\n  color: #ffeba7;\r\n  box-shadow: 0 8px 24px 0 rgba(16,39,112,.2);\r\n}\r\n.btn[_ngcontent-%COMP%]:hover{  \r\n  background-color: #102770;\r\n  color: #ffeba7;\r\n  box-shadow: 0 8px 24px 0 rgba(16,39,112,.2);\r\n}\r\n\r\n\r\n\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: 30px;\r\n\tright: 30px;\r\n\tdisplay: block;\r\n\tz-index: 100;\r\n\ttransition: all 250ms linear;\r\n}\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\theight: 26px;\r\n\twidth: auto;\r\n\tdisplay: block;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQTtDQUNDLGtDQUFrQztDQUNsQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2QseUJBQXlCO0NBQ3pCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsZUFBZTtFQUNkLDRCQUE0QjtBQUM5QjtBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSwyQ0FBMkM7QUFDN0M7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUViLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixNQUFNO0VBQ04sT0FBTztFQUVQLDRCQUE0QjtFQUM1Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHFGQUFxRjtFQUNyRixrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBRU4sNEJBQTRCO0VBQzVCLG1DQUFtQztFQUduQywyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixRQUFRO0VBQ1IsT0FBTztFQUNQLHdEQUF3RDtFQUN4RCxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztJQUNaLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFlBQVk7RUFFWiw0QkFBNEI7RUFDNUIseUNBQXlDO0FBQzNDO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGFBQWE7RUFDYix5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBRVosNEJBQTRCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFFVixnQ0FBNEI7RUFBNUIsNEJBQTRCO0FBQ2hDO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUVWLGlDQUE0QjtFQUE1Qiw0QkFBNEI7QUFDaEM7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBRVYsaUNBQTRCO0VBQTVCLDRCQUE0QjtBQUNoQztBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFFVixvQ0FBNEI7RUFBNUIsNEJBQTRCO0FBQ2hDO0FBQ0E7RUFDRSxVQUFVO0VBRVIsZ0NBQTRCO0VBQTVCLDRCQUE0QjtBQUNoQztBQUNBO0VBQ0UsVUFBVTtFQUVSLGlDQUE0QjtFQUE1Qiw0QkFBNEI7QUFDaEM7QUFDQTtFQUNFLFVBQVU7RUFFUixpQ0FBNEI7RUFBNUIsNEJBQTRCO0FBQ2hDO0FBQ0E7RUFDRSxVQUFVO0VBRVIsb0NBQTRCO0VBQTVCLDRCQUE0QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFFekIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixtQkFBbUI7RUFHbkIsb0JBQW9CO0VBRXBCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBRW5CLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsNkNBQTZDO0FBQy9DO0FBQ0E7O0VBRUUseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsMkNBQTJDO0FBQzdDOzs7OztBQUtBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsY0FBYztDQUNkLFlBQVk7Q0FDWiw0QkFBNEI7QUFDN0I7QUFDQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsY0FBYztBQUNmIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczo0MDAsNTAwLDYwMCw3MDAsODAwLDkwMCcpO1xyXG5cclxuYm9keXtcclxuXHRmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtd2VpZ2h0OiAzMDA7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjc7XHJcblx0Y29sb3I6ICNjNGMzY2E7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzFmMjAyOTtcclxuXHRvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuYSB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XHJcbn1cclxuYTpob3ZlciB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5saW5rIHtcclxuICBjb2xvcjogI2M0YzNjYTtcclxufVxyXG4ubGluazpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmViYTc7XHJcbn1cclxucCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNztcclxufVxyXG5oNCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5oNiBzcGFue1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLnNlY3Rpb257XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5mdWxsLWhlaWdodHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5bdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQsXHJcblt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpjaGVja2VkKXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTk5OTlweDtcclxufVxyXG4uY2hlY2tib3g6Y2hlY2tlZCArIGxhYmVsLFxyXG4uY2hlY2tib3g6bm90KDpjaGVja2VkKSArIGxhYmVse1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmE3O1xyXG59XHJcbi5jaGVja2JveDpjaGVja2VkICsgbGFiZWw6YmVmb3JlLFxyXG4uY2hlY2tib3g6bm90KDpjaGVja2VkKSArIGxhYmVsOmJlZm9yZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjb2xvcjogI2ZmZWJhNztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAyNzcwO1xyXG4gIGZvbnQtZmFtaWx5OiAndW5pY29ucyc7XHJcbiAgY29udGVudDogJ1xcZWI0Zic7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgdG9wOiAtMTBweDtcclxuICBsZWZ0OiAtMTBweDtcclxuICBsaW5lLWhlaWdodDogMzZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbn1cclxuLmNoZWNrYm94OmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0NHB4KSByb3RhdGUoLTI3MGRlZyk7XHJcbn1cclxuXHJcblxyXG4uY2FyZC0zZC13cmFwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDQ0MHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIHBlcnNwZWN0aXZlOiA4MDBweDtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcbi5jYXJkLTNkLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTsgICAgXHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7ICBcclxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICB0cmFuc2l0aW9uOiBhbGwgNjAwbXMgZWFzZS1vdXQ7IFxyXG59XHJcbi5jYXJkLWZyb250LCAuY2FyZC1iYWNrIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmIzODtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0NjI4ODkvcGF0LnN2ZycpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDMwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtby1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5jYXJkLWJhY2sge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcbi5jaGVja2JveDpjaGVja2VkIH4gLmNhcmQtM2Qtd3JhcCAuY2FyZC0zZC13cmFwcGVyIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG4uY2VudGVyLXdyYXB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgMzVweDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTUwJSwgMzVweCkgcGVyc3BlY3RpdmUoMTAwcHgpO1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5cclxuLmZvcm0tZ3JvdXB7IFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmZvcm0tc3R5bGUge1xyXG4gIHBhZGRpbmc6IDEzcHggMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogI2M0YzNjYTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyMDI5O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGxpbmVhcjtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDIxLDIxLDIxLC4yKTtcclxufVxyXG4uZm9ybS1zdHlsZTpmb2N1cyxcclxuLmZvcm0tc3R5bGU6YWN0aXZlIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDIxLDIxLDIxLC4yKTtcclxufVxyXG4uaW5wdXQtaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAxOHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogI2ZmZWJhNztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgIHtcclxuICBjb2xvcjogI2M0YzNjYTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGxpbmVhcjtcclxufVxyXG4uZm9ybS1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciAge1xyXG4gIGNvbG9yOiAjYzRjM2NhO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xyXG59XHJcbi5mb3JtLWdyb3VwIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIgIHtcclxuICBjb2xvcjogI2M0YzNjYTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGxpbmVhcjtcclxufVxyXG4uZm9ybS1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciAge1xyXG4gIGNvbG9yOiAjYzRjM2NhO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xyXG59XHJcbi5mb3JtLWdyb3VwIGlucHV0OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGxpbmVhcjtcclxufVxyXG4uZm9ybS1ncm91cCBpbnB1dDpmb2N1czo6LW1vei1wbGFjZWhvbGRlciAge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGxpbmVhcjtcclxufVxyXG4uZm9ybS1ncm91cCBpbnB1dDpmb2N1czotbW96LXBsYWNlaG9sZGVyICB7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xyXG59XHJcbi5mb3JtLWdyb3VwIGlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyICB7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xyXG59XHJcblxyXG4uYnRueyAgXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGhlaWdodDogNDRweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbiA6IGFsbCAyMDBtcyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGxpbmVhcjtcclxuICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1vei1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtbW96LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmE3O1xyXG4gIGNvbG9yOiAjMTAyNzcwO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggMCByZ2JhKDI1NSwyMzUsMTY3LC4yKTtcclxufVxyXG4uYnRuOmFjdGl2ZSxcclxuLmJ0bjpmb2N1c3sgIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDI3NzA7XHJcbiAgY29sb3I6ICNmZmViYTc7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjRweCAwIHJnYmEoMTYsMzksMTEyLC4yKTtcclxufVxyXG4uYnRuOmhvdmVyeyAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMjc3MDtcclxuICBjb2xvcjogI2ZmZWJhNztcclxuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IDAgcmdiYSgxNiwzOSwxMTIsLjIpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4ubG9nbyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMzBweDtcclxuXHRyaWdodDogMzBweDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR6LWluZGV4OiAxMDA7XHJcblx0dHJhbnNpdGlvbjogYWxsIDI1MG1zIGxpbmVhcjtcclxufVxyXG4ubG9nbyBpbWcge1xyXG5cdGhlaWdodDogMjZweDtcclxuXHR3aWR0aDogYXV0bztcclxuXHRkaXNwbGF5OiBibG9jaztcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 114:
/*!***********************************************************************************!*\
  !*** ./src/app/components/overcoming-obstacles/overcoming-obstacles.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OvercomingObstaclesComponent": () => (/* binding */ OvercomingObstaclesComponent)
/* harmony export */ });
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contact/contact.component */ 1782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_mainservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/mainservice.service */ 8815);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);












function OvercomingObstaclesComponent_mat_error_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r1.fileSize / 1000000, "0.0"), " mb)File too large");
  }
}
class OvercomingObstaclesComponent {
  constructor(_fb, _crud, _snackbar) {
    this._fb = _fb;
    this._crud = _crud;
    this._snackbar = _snackbar;
    this.queryMode = "query";
    this.determinateMode = "determinate";
    this.selectedMode = this.determinateMode;
    this.disableButton = false;
    this.isTooLarge = false;
    this.fileSize = 0;
    this.assistList = ["I would like a demo.", "I would like to talk to sales.", "I need customer support."];
    this.fileForm = this._fb.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      businessName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      phone: [''],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      howCanWeAssistYou: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      comments: [''],
      fromPage: [' Overcome your Obstacles']
    });
  }
  ngOnInit() {}
  onSelectedFile(event) {
    this.isTooLarge = false;
    var tempFile = event.target.files[0];
    if (tempFile.size > 10000000) {
      this.isTooLarge = true;
      this.fileSize = tempFile.size;
      console.log("File size too large.");
    } else {
      this.selectedFile = event.target.files[0];
      this.isTooLarge = false;
    }
  }
  onSubmit() {
    this.selectedMode = this.queryMode;
    const formData = new FormData();
    const emailForm = new _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__.EmailForm(this.fileForm.value);
    formData.append('subject', emailForm.subject);
    formData.append('body', emailForm.body);
    if (this.selectedFile) {
      formData.append('file', this.selectedFile, this.selectedFile.name);
    }
    this.fileForm.disable();
    this.disableButton = true;
    this._crud.sendEmail(formData).subscribe({
      next: () => {
        console.log("Email sent");
        this.fileForm.reset();
        this.fileForm.enable();
        this.fileForm.controls['fromPage'].setValue(" Overcome your Obstacle");
        this.disableButton = false;
        this.selectedMode = this.determinateMode;
        this._snackbar.open("Message sent ✔!", "Dismiss", {
          duration: 4000
        });
      },
      error: err => {
        console.log("Error ", err);
        this.fileForm.enable();
        this.disableButton = false;
        this.selectedMode = this.determinateMode;
        this._snackbar.open("ERROR sending message ❌! Please try again later.", "Dismiss", {
          duration: 4000
        });
      }
    });
  }
}
OvercomingObstaclesComponent.ɵfac = function OvercomingObstaclesComponent_Factory(t) {
  return new (t || OvercomingObstaclesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_mainservice_service__WEBPACK_IMPORTED_MODULE_1__.MainserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar));
};
OvercomingObstaclesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: OvercomingObstaclesComponent,
  selectors: [["app-overcoming-obstacles"]],
  decls: 46,
  vars: 5,
  consts: [[1, "form-card"], [1, "text-center"], [1, "content-title"], ["src", "../../../assets/img/icons8-24-hours-64.png", "alt", "icons8-24-hours-64.png icons8.com"], [1, "file-form", 3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["type", "text", "name", "firstName", "matInput", "", "formControlName", "firstName"], ["type", "text", "name", "lastName", "matInput", "", "formControlName", "lastName"], ["type", "email", "name", "email", "matInput", "", "formControlName", "email"], ["type", "text", "name", "businessName", "matInput", "", "formControlName", "businessName"], ["type", "text", "name", "phone", "matInput", "", "formControlName", "phone"], ["type", "text", "name", "howCanWeAssistYou", "matInput", "", "formControlName", "howCanWeAssistYou"], ["name", "comment", "matInput", "", "formControlName", "comments", "cols", "200"], ["value", "0", 3, "mode"], ["mat-raised-button", "", "type", "submit", "color", "primary", 3, "disabled"], ["submitButton", ""], ["for", "file"], ["type", "file", "name", "file", "id", "file", 3, "disabled", "change"], [4, "ngIf"]],
  template: function OvercomingObstaclesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0)(1, "div", 1)(2, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Overcome your obstacles with IoT ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "No fear, conquer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function OvercomingObstaclesComponent_Template_form_ngSubmit_7_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 5)(9, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "First Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 5)(13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Last Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-form-field", 5)(17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Work Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-form-field", 5)(21, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Business Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-form-field", 5)(25, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-form-field", 5)(29, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Describe your obstacles");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-form-field", 5)(33, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "textarea", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "mat-progress-bar", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Select file to upload. 10Mb limit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "(Optional)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function OvercomingObstaclesComponent_Template_input_change_44_listener($event) {
        return ctx.onSelectedFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, OvercomingObstaclesComponent_mat_error_45_Template, 3, 4, "mat-error", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.fileForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", ctx.selectedMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.fileForm.invalid || ctx.disableButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.disableButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isTooLarge);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe],
  styles: [".form-field[_ngcontent-%COMP%]{\r\n    width: 300px;\r\n    margin: auto;\r\n}\r\n\r\n.client-form[_ngcontent-%COMP%]{\r\n    display: grid;\r\n}\r\n\r\n.sf-card[_ngcontent-%COMP%]{\r\n    max-width: 500px;\r\n    margin: auto;\r\n}\r\n.form-card[_ngcontent-%COMP%]{\r\n    max-width: 1000px;\r\n    margin: auto;\r\n    padding: 15px;\r\n    padding-top: 50px;\r\n    min-height: 70%;\r\n}\r\n.file-form[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vdmVyY29taW5nLW9ic3RhY2xlcy9vdmVyY29taW5nLW9ic3RhY2xlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYiwwQkFBMEI7QUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNsaWVudC1mb3Jte1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuLnNmLWNhcmR7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5mb3JtLWNhcmR7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDcwJTtcclxufVxyXG4uZmlsZS1mb3Jte1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3581:
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7822);



class PageNotFoundComponent {}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
  return new (t || PageNotFoundComponent)();
};
PageNotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageNotFoundComponent,
  selectors: [["app-page-not-found"]],
  decls: 5,
  vars: 0,
  consts: [[1, "display-1"], ["routerLink", "/home"]],
  template: function PageNotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Page not found.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1)(3, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2087:
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/preventive-maintenance-showcase/preventive-maintenance-showcase.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreventiveMaintenanceShowcaseComponent": () => (/* binding */ PreventiveMaintenanceShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/safe-url.pipe */ 4998);






const _c0 = ["demoFrame"];
function PreventiveMaintenanceShowcaseComponent_div_50_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46)(1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const metric_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](metric_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](metric_r7.label);
  }
}
function PreventiveMaintenanceShowcaseComponent_div_50_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PreventiveMaintenanceShowcaseComponent_div_50_div_9_div_1_Template, 5, 2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", feature_r4.metrics);
  }
}
function PreventiveMaintenanceShowcaseComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38)(1, "div", 39)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 40)(5, "h3", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PreventiveMaintenanceShowcaseComponent_div_50_div_9_Template, 2, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const feature_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("animate-slide-in", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feature_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feature_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feature_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", feature_r4.metrics);
  }
}
function PreventiveMaintenanceShowcaseComponent_div_58_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 55)(1, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const point_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](point_r12);
  }
}
function PreventiveMaintenanceShowcaseComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "h3", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PreventiveMaintenanceShowcaseComponent_div_58_li_7_Template, 5, 1, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const benefit_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("animation-delay", i_r10 * 0.1 + "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("animate-slide-in", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](benefit_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](benefit_r9.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", benefit_r9.points);
  }
}
function PreventiveMaintenanceShowcaseComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57)(1, "div", 58)(2, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function PreventiveMaintenanceShowcaseComponent_div_66_Template_img_error_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const tech_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.onImageError($event, tech_r13.fallbackIcon));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tech_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("animate-bounce-in", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", tech_r13.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", tech_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tech_r13.fallbackIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tech_r13.name);
  }
}
class PreventiveMaintenanceShowcaseComponent {
  onImageError(event, fallbackIcon) {
    const imgElement = event.target;
    const fallbackElement = imgElement.nextElementSibling;
    if (fallbackElement) {
      imgElement.style.display = 'none';
      fallbackElement.style.display = 'block';
    }
  }
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    this.features = [{
      icon: 'schedule',
      title: 'Scheduled Maintenance',
      description: 'Automated scheduling and tracking of preventive maintenance tasks with calendar integration.',
      metrics: [{
        value: '24',
        label: 'Active Tasks'
      }, {
        value: '12',
        label: 'Completed'
      }, {
        value: '3',
        label: 'Overdue'
      }]
    }, {
      icon: 'inventory',
      title: 'Asset Management',
      description: 'Comprehensive asset tracking with maintenance history, documentation, and lifecycle management.',
      metrics: [{
        value: '156',
        label: 'Total Assets'
      }, {
        value: '89%',
        label: 'Uptime'
      }]
    }, {
      icon: 'notification_important',
      title: 'Smart Alerts',
      description: 'Intelligent notifications for upcoming maintenance, part replacements, and critical issues.'
    }, {
      icon: 'build',
      title: 'Work Order Management',
      description: 'Digital work orders with step-by-step procedures, parts lists, and completion tracking.'
    }, {
      icon: 'analytics',
      title: 'Performance Analytics',
      description: 'Real-time dashboards and reports on equipment performance, costs, and maintenance trends.'
    }, {
      icon: 'mobile_friendly',
      title: 'Mobile Access',
      description: 'Full mobile functionality for technicians to access and update maintenance data in the field.'
    }];
    this.techStack = [{
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      fallbackIcon: 'web'
    }, {
      name: 'Angular Material',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
      fallbackIcon: 'design_services'
    }, {
      name: '.NET Core',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
      fallbackIcon: 'code'
    }, {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      fallbackIcon: 'storage'
    }, {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      fallbackIcon: 'javascript'
    }, {
      name: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      fallbackIcon: 'style'
    }, {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      fallbackIcon: 'memory'
    }];
    this.benefits = [{
      title: 'Reduced Downtime',
      description: 'Prevent equipment failures with proactive maintenance scheduling',
      points: ['Up to 75% reduction in unplanned downtime', 'Predictive maintenance based on usage patterns', 'Early warning system for potential issues', 'Optimized maintenance windows to minimize disruption']
    }, {
      title: 'Cost Optimization',
      description: 'Maximize ROI through intelligent maintenance planning',
      points: ['Reduce emergency repair costs by 60%', 'Extend equipment lifespan through proper care', 'Optimize inventory with smart parts management', 'Track and analyze maintenance spending patterns']
    }, {
      title: 'Compliance & Safety',
      description: 'Ensure regulatory compliance and workplace safety',
      points: ['Automated compliance reporting and documentation', 'Safety checklist integration for all procedures', 'Full audit trail with digital signatures', 'Risk assessment and safety protocol management']
    }];
    this.demoUrl = 'https://preventive-maintenance.sharpfloornc.com/';
  }
  openFullDemo() {
    window.open(this.demoUrl, '_blank', 'noopener,noreferrer');
  }
  refreshDemo() {
    if (this.demoFrame) {
      this.demoFrame.nativeElement.src = this.demoFrame.nativeElement.src;
    }
  }
}
PreventiveMaintenanceShowcaseComponent.ɵfac = function PreventiveMaintenanceShowcaseComponent_Factory(t) {
  return new (t || PreventiveMaintenanceShowcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer));
};
PreventiveMaintenanceShowcaseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PreventiveMaintenanceShowcaseComponent,
  selectors: [["app-preventive-maintenance-showcase"]],
  viewQuery: function PreventiveMaintenanceShowcaseComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.demoFrame = _t.first);
    }
  },
  decls: 82,
  vars: 6,
  consts: [[1, "pm-showcase-container"], [1, "hero-section", "animate-fade-in"], [1, "hero-overlay"], [1, "hero-content"], [1, "montserrat", "hero-title"], [1, "hero-tagline"], [1, "hero-badges"], [1, "badge"], [1, "hero-decoration"], [1, "demo-section"], [1, "demo-header"], [1, "section-title"], [1, "section-subtitle"], [1, "demo-controls"], ["mat-raised-button", "", "color", "primary", 1, "demo-button", 3, "click"], ["mat-stroked-button", "", 1, "demo-button", 3, "click"], [1, "demo-frame-container"], ["frameborder", "0", "loading", "lazy", "title", "Preventive Maintenance System Demo", 1, "demo-frame", 3, "src"], ["demoFrame", ""], [1, "frame-overlay", 3, "click"], [1, "overlay-content"], [1, "features-section"], [1, "section-header"], [1, "features-grid"], ["class", "feature-card", 3, "animate-slide-in", 4, "ngFor", "ngForOf"], [1, "benefits-section"], [1, "benefits-grid"], ["class", "benefit-card", 3, "animate-slide-in", "animation-delay", 4, "ngFor", "ngForOf"], [1, "tech-section"], [1, "tech-stack"], ["class", "tech-item", 3, "animate-bounce-in", 4, "ngFor", "ngForOf"], [1, "cta-section"], [1, "cta-content"], [1, "cta-title"], [1, "cta-description"], [1, "cta-buttons"], ["mat-raised-button", "", "color", "primary", 1, "cta-button", "primary"], ["mat-stroked-button", "", 1, "cta-button", "secondary"], [1, "feature-card"], [1, "feature-icon"], [1, "feature-content"], [1, "feature-title"], [1, "feature-description"], ["class", "feature-metrics", 4, "ngIf"], [1, "feature-metrics"], ["class", "metric", 4, "ngFor", "ngForOf"], [1, "metric"], [1, "metric-value"], [1, "metric-label"], [1, "benefit-card"], [1, "benefit-header"], [1, "benefit-title"], [1, "benefit-description"], [1, "benefit-points"], ["class", "benefit-point", 4, "ngFor", "ngForOf"], [1, "benefit-point"], [1, "check-icon"], [1, "tech-item"], [1, "tech-icon-container"], [1, "tech-icon", 3, "src", "alt", "error"], [1, "fallback-icon", "tech-icon"], [1, "tech-name"]],
  template: function PreventiveMaintenanceShowcaseComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Preventive Maintenance System");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Intelligent Maintenance Management for Maximum Equipment Uptime");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Scheduled Maintenance");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Asset Tracking");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Smart Alerts");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Mobile Access");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "section", 9)(19, "div", 10)(20, "h2", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\uD83D\uDE80 Live Interactive Demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Experience our comprehensive Preventive Maintenance System in action");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13)(25, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PreventiveMaintenanceShowcaseComponent_Template_button_click_25_listener() {
        return ctx.openFullDemo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "open_in_new");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Open Full Demo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PreventiveMaintenanceShowcaseComponent_Template_button_click_29_listener() {
        return ctx.refreshDemo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "refresh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Refresh Demo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "iframe", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "safeUrl");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PreventiveMaintenanceShowcaseComponent_Template_div_click_37_listener() {
        return ctx.openFullDemo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 20)(39, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "touch_app");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Click to interact with live demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "section", 21)(44, "div", 22)(45, "h2", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\uD83D\uDCA1 Key Features");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Comprehensive tools for proactive maintenance management");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, PreventiveMaintenanceShowcaseComponent_div_50_Template, 10, 6, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "section", 25)(52, "div", 22)(53, "h2", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\uD83D\uDCC8 Business Benefits");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Measurable impact on your operations and bottom line");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, PreventiveMaintenanceShowcaseComponent_div_58_Template, 8, 7, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "section", 28)(60, "div", 22)(61, "h2", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "\u26A1 Technology Stack");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Built with modern, reliable technologies for optimal performance");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, PreventiveMaintenanceShowcaseComponent_div_66_Template, 7, 8, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "section", 31)(68, "div", 32)(69, "h2", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Ready to Transform Your Maintenance Operations?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "p", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, " Contact us to learn how our Preventive Maintenance System can help you reduce costs, improve efficiency, and maximize equipment uptime. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 35)(74, "button", 36)(75, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "schedule_send");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, " Schedule a Demo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "button", 37)(79, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "contact_support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " Contact Us ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 4, ctx.demoUrl), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.features);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.benefits);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.techStack);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_0__.SafeUrlPipe],
  styles: [".pm-showcase-container[_ngcontent-%COMP%] {\r\n    min-height: 100vh;\r\n    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);\r\n}\r\n\r\n\r\n.hero-section[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background: linear-gradient(135deg, #10b981 0%, #047857 100%);\r\n    color: white;\r\n    padding: 100px 40px 80px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n\r\n.hero-overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.hero-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    z-index: 2;\r\n}\r\n\r\n.hero-title[_ngcontent-%COMP%] {\r\n    font-size: 3.5rem;\r\n    font-weight: 800;\r\n    margin-bottom: 20px;\r\n    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.hero-tagline[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n    margin-bottom: 40px;\r\n    opacity: 0.95;\r\n    font-weight: 300;\r\n}\r\n\r\n.hero-badges[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    gap: 15px;\r\n    margin-top: 30px;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%] {\r\n    background: rgba(255, 255, 255, 0.2);\r\n    -webkit-backdrop-filter: blur(10px);\r\n            backdrop-filter: blur(10px);\r\n    padding: 10px 20px;\r\n    border-radius: 25px;\r\n    font-size: 0.9rem;\r\n    font-weight: 500;\r\n    border: 1px solid rgba(255, 255, 255, 0.3);\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.3);\r\n    transform: translateY(-2px);\r\n}\r\n\r\n.hero-decoration[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: -1px;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 60px;\r\n    background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 120\"><path fill=\"%23f8fafc\" d=\"M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z\"></path></svg>') no-repeat bottom;\r\n    background-size: cover;\r\n}\r\n\r\n\r\n.demo-section[_ngcontent-%COMP%] {\r\n    padding: 80px 40px;\r\n    max-width: 1400px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.demo-header[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    font-weight: 700;\r\n    color: #1a202c;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.section-subtitle[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    color: #64748b;\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.demo-controls[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 20px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.demo-button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    padding: 12px 24px;\r\n    font-weight: 500;\r\n}\r\n\r\n.demo-frame-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background: white;\r\n    border-radius: 12px;\r\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\r\n    overflow: hidden;\r\n    height: 700px;\r\n    border: 1px solid #e2e8f0;\r\n}\r\n\r\n.demo-frame[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    border: none;\r\n}\r\n\r\n.frame-overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: rgba(16, 185, 129, 0.05);\r\n    -webkit-backdrop-filter: blur(1px);\r\n            backdrop-filter: blur(1px);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease;\r\n    opacity: 0;\r\n}\r\n\r\n.frame-overlay[_ngcontent-%COMP%]:hover {\r\n    opacity: 1;\r\n    background: rgba(16, 185, 129, 0.1);\r\n}\r\n\r\n.overlay-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    background: rgba(255, 255, 255, 0.9);\r\n    padding: 15px 25px;\r\n    border-radius: 30px;\r\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\r\n    font-weight: 500;\r\n    color: #10b981;\r\n}\r\n\r\n\r\n.features-section[_ngcontent-%COMP%] {\r\n    padding: 80px 40px;\r\n    background: white;\r\n}\r\n\r\n.section-header[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.features-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\r\n    gap: 30px;\r\n    max-width: 1400px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.feature-card[_ngcontent-%COMP%] {\r\n    background: white;\r\n    padding: 30px;\r\n    border-radius: 12px;\r\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\r\n    text-align: center;\r\n    transition: all 0.3s ease;\r\n    border: 1px solid #f1f5f9;\r\n    animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out forwards;\r\n    opacity: 0;\r\n    transform: translateY(30px);\r\n}\r\n\r\n.feature-card[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-5px);\r\n    box-shadow: 0 8px 30px rgba(16, 185, 129, 0.15);\r\n}\r\n\r\n.feature-icon[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n    height: 60px;\r\n    background: linear-gradient(135deg, #10b981 0%, #047857 100%);\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 0 auto 20px;\r\n}\r\n\r\n.feature-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 28px;\r\n    width: 28px;\r\n    height: 28px;\r\n}\r\n\r\n.feature-title[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n    font-weight: 600;\r\n    color: #1a202c;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.feature-description[_ngcontent-%COMP%] {\r\n    color: #64748b;\r\n    line-height: 1.6;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.feature-metrics[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-top: 20px;\r\n    padding-top: 20px;\r\n    border-top: 1px solid #f1f5f9;\r\n}\r\n\r\n.metric[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.metric-value[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    color: #10b981;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.metric-label[_ngcontent-%COMP%] {\r\n    font-size: 0.85rem;\r\n    color: #64748b;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n\r\n.benefits-section[_ngcontent-%COMP%] {\r\n    padding: 80px 40px;\r\n    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);\r\n}\r\n\r\n.benefits-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\r\n    gap: 40px;\r\n    max-width: 1400px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.benefit-card[_ngcontent-%COMP%] {\r\n    background: white;\r\n    padding: 30px;\r\n    border-radius: 12px;\r\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);\r\n    border-left: 4px solid #10b981;\r\n    animation: _ngcontent-%COMP%_slideInUp 0.8s ease-out forwards;\r\n    opacity: 0;\r\n    transform: translateY(30px);\r\n}\r\n\r\n.benefit-header[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.benefit-title[_ngcontent-%COMP%] {\r\n    font-size: 1.4rem;\r\n    font-weight: 600;\r\n    color: #1a202c;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.benefit-description[_ngcontent-%COMP%] {\r\n    color: #64748b;\r\n    line-height: 1.6;\r\n}\r\n\r\n.benefit-points[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.benefit-point[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    margin-bottom: 12px;\r\n    color: #64748b;\r\n    line-height: 1.5;\r\n}\r\n\r\n.check-icon[_ngcontent-%COMP%] {\r\n    color: #10b981;\r\n    font-size: 18px;\r\n    width: 18px;\r\n    height: 18px;\r\n    flex-shrink: 0;\r\n}\r\n\r\n\r\n.tech-section[_ngcontent-%COMP%] {\r\n    padding: 80px 40px;\r\n    background: white;\r\n}\r\n\r\n.tech-stack[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    gap: 30px;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.tech-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 15px;\r\n    padding: 25px;\r\n    background: white;\r\n    border-radius: 12px;\r\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\r\n    transition: all 0.3s ease;\r\n    min-width: 120px;\r\n    border: 1px solid #f1f5f9;\r\n}\r\n\r\n.tech-item[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\r\n    border-color: #10b981;\r\n}\r\n\r\n.tech-icon[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\n.tech-name[_ngcontent-%COMP%] {\r\n    font-weight: 500;\r\n    color: #1a202c;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n\r\n.cta-section[_ngcontent-%COMP%] {\r\n    padding: 80px 40px;\r\n    background: linear-gradient(135deg, #10b981 0%, #047857 100%);\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.cta-content[_ngcontent-%COMP%] {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.cta-title[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    font-weight: 700;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.cta-description[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n    margin-bottom: 40px;\r\n    opacity: 0.9;\r\n}\r\n\r\n.cta-buttons[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 20px;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    padding: 15px 30px;\r\n    font-size: 1.1rem;\r\n    font-weight: 500;\r\n}\r\n\r\n.cta-button.primary[_ngcontent-%COMP%] {\r\n    background: rgba(255, 255, 255, 0.9);\r\n    color: #047857;\r\n}\r\n\r\n.cta-button.secondary[_ngcontent-%COMP%] {\r\n    background: rgba(255, 255, 255, 0.1);\r\n    color: white;\r\n    border: 1px solid rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.cta-button.secondary[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n\r\n@keyframes _ngcontent-%COMP%_fadeInUp {\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_slideInUp {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(30px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n.animate-fade-in[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_fadeIn 0.8s ease-out;\r\n}\r\n\r\n.animate-slide-in[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_slideInUp 0.8s ease-out;\r\n}\r\n\r\n.animate-bounce-in[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_bounceIn 0.6s ease-out;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_fadeIn {\r\n    from { opacity: 0; }\r\n    to { opacity: 1; }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_bounceIn {\r\n    0% {\r\n        opacity: 0;\r\n        transform: scale(0.3);\r\n    }\r\n    50% {\r\n        opacity: 1;\r\n        transform: scale(1.05);\r\n    }\r\n    70% {\r\n        transform: scale(0.9);\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 768px) {\r\n    .hero-title[_ngcontent-%COMP%] {\r\n        font-size: 2.5rem;\r\n    }\r\n    \r\n    .hero-tagline[_ngcontent-%COMP%] {\r\n        font-size: 1.1rem;\r\n    }\r\n    \r\n    .section-title[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n    \r\n    .demo-section[_ngcontent-%COMP%], .features-section[_ngcontent-%COMP%], .benefits-section[_ngcontent-%COMP%], .tech-section[_ngcontent-%COMP%], .cta-section[_ngcontent-%COMP%] {\r\n        padding: 60px 20px;\r\n    }\r\n    \r\n    .features-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n        gap: 20px;\r\n    }\r\n    \r\n    .benefits-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n        gap: 30px;\r\n    }\r\n    \r\n    .demo-frame-container[_ngcontent-%COMP%] {\r\n        height: 500px;\r\n    }\r\n    \r\n    .cta-buttons[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n    \r\n    .cta-title[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n    \r\n    .cta-description[_ngcontent-%COMP%] {\r\n        font-size: 1.1rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcmV2ZW50aXZlLW1haW50ZW5hbmNlLXNob3djYXNlL3ByZXZlbnRpdmUtbWFpbnRlbmFuY2Utc2hvd2Nhc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQiw2REFBNkQ7QUFDakU7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksa0JBQWtCO0lBQ2xCLDZEQUE2RDtJQUM3RCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsMENBQTBDO0lBQzFDLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDBiQUEwYjtJQUMxYixzQkFBc0I7QUFDMUI7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksa0JB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Q3RCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5wbS1zaG93Y2FzZS1jb250YWluZXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmYWZjIDAlLCAjZTJlOGYwIDEwMCUpO1xyXG59XHJcblxyXG4vKiBIZXJvIFNlY3Rpb24gKi9cclxuLmhlcm8tc2VjdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTBiOTgxIDAlLCAjMDQ3ODU3IDEwMCUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTAwcHggNDBweCA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmhlcm8tb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5oZXJvLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5oZXJvLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLmhlcm8tdGFnbGluZSB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjk1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmhlcm8tYmFkZ2VzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmJhZGdlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxufVxyXG5cclxuLmhlcm8tZGVjb3JhdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0xcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE0NDAgMTIwXCI+PHBhdGggZmlsbD1cIiUyM2Y4ZmFmY1wiIGQ9XCJNMCwzMkw0OCwzNy4zQzk2LDQzLDE5Miw1MywyODgsNTguN0MzODQsNjQsNDgwLDY0LDU3Niw1OC43QzY3Miw1Myw3NjgsNDMsODY0LDQ4Qzk2MCw1MywxMDU2LDc1LDExNTIsODBDMTI0OCw4NSwxMzQ0LDc1LDEzOTIsNjkuM0wxNDQwLDY0TDE0NDAsMTIwTDEzOTIsMTIwQzEzNDQsMTIwLDEyNDgsMTIwLDExNTIsMTIwQzEwNTYsMTIwLDk2MCwxMjAsODY0LDEyMEM3NjgsMTIwLDY3MiwxMjAsNTc2LDEyMEM0ODAsMTIwLDM4NCwxMjAsMjg4LDEyMEMxOTIsMTIwLDk2LDEyMCw0OCwxMjBMMCwxMjBaXCI+PC9wYXRoPjwvc3ZnPicpIG5vLXJlcGVhdCBib3R0b207XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4vKiBEZW1vIFNlY3Rpb24gKi9cclxuLmRlbW8tc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDQwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZGVtby1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMxYTIwMmM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZGVtby1jb250cm9scyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uZGVtby1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5kZW1vLWZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbn1cclxuXHJcbi5kZW1vLWZyYW1lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZnJhbWUtb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxODUsIDEyOSwgMC4wNSk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmZyYW1lLW92ZXJsYXk6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjEpO1xyXG59XHJcblxyXG4ub3ZlcmxheS1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMTBiOTgxO1xyXG59XHJcblxyXG4vKiBGZWF0dXJlcyBTZWN0aW9uICovXHJcbi5mZWF0dXJlcy1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDgwcHggNDBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmZlYXR1cmVzLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmZlYXR1cmUtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbiAgICBhbmltYXRpb246IGZhZGVJblVwIDAuNnMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xyXG59XHJcblxyXG4uZmVhdHVyZS1jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMwcHggcmdiYSgxNiwgMTg1LCAxMjksIDAuMTUpO1xyXG59XHJcblxyXG4uZmVhdHVyZS1pY29uIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEwYjk4MSAwJSwgIzA0Nzg1NyAxMDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xyXG59XHJcblxyXG4uZmVhdHVyZS1pY29uIG1hdC1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG59XHJcblxyXG4uZmVhdHVyZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzFhMjAyYztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlLWRlc2NyaXB0aW9uIHtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlLW1ldHJpY3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbn1cclxuXHJcbi5tZXRyaWMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWV0cmljLXZhbHVlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMxMGI5ODE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5tZXRyaWMtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcblxyXG4vKiBCZW5lZml0cyBTZWN0aW9uICovXHJcbi5iZW5lZml0cy1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDgwcHggNDBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGZhZmMgMCUsICNlMmU4ZjAgMTAwJSk7XHJcbn1cclxuXHJcbi5iZW5lZml0cy1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwMHB4LCAxZnIpKTtcclxuICAgIGdhcDogNDBweDtcclxuICAgIG1heC13aWR0aDogMTQwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5iZW5lZml0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzEwYjk4MTtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVJblVwIDAuOHMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xyXG59XHJcblxyXG4uYmVuZWZpdC1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJlbmVmaXQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMxYTIwMmM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYmVuZWZpdC1kZXNjcmlwdGlvbiB7XHJcbiAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuXHJcbi5iZW5lZml0LXBvaW50cyB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJlbmVmaXQtcG9pbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4uY2hlY2staWNvbiB7XHJcbiAgICBjb2xvcjogIzEwYjk4MTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi8qIFRlY2hub2xvZ3kgU3RhY2sgKi9cclxuLnRlY2gtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLnRlY2gtc3RhY2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnRlY2gtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG59XHJcblxyXG4udGVjaC1pdGVtOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMTBiOTgxO1xyXG59XHJcblxyXG4udGVjaC1pY29uIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4udGVjaC1uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzFhMjAyYztcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4vKiBDYWxsIHRvIEFjdGlvbiAqL1xyXG4uY3RhLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogODBweCA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEwYjk4MSAwJSwgIzA0Nzg1NyAxMDAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmN0YS1jb250ZW50IHtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmN0YS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY3RhLWRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLmN0YS1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmN0YS1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmN0YS1idXR0b24ucHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICBjb2xvcjogIzA0Nzg1NztcclxufVxyXG5cclxuLmN0YS1idXR0b24uc2Vjb25kYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuLmN0YS1idXR0b24uc2Vjb25kYXJ5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxufVxyXG5cclxuLyogQW5pbWF0aW9ucyAqL1xyXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluVXAge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hbmltYXRlLWZhZGUtaW4ge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC44cyBlYXNlLW91dDtcclxufVxyXG5cclxuLmFuaW1hdGUtc2xpZGUtaW4ge1xyXG4gICAgYW5pbWF0aW9uOiBzbGlkZUluVXAgMC44cyBlYXNlLW91dDtcclxufVxyXG5cclxuLmFuaW1hdGUtYm91bmNlLWluIHtcclxuICAgIGFuaW1hdGlvbjogYm91bmNlSW4gMC42cyBlYXNlLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIHRvIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvdW5jZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgfVxyXG4gICAgNzAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmhlcm8tdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaGVyby10YWdsaW5lIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRlbW8tc2VjdGlvbixcclxuICAgIC5mZWF0dXJlcy1zZWN0aW9uLFxyXG4gICAgLmJlbmVmaXRzLXNlY3Rpb24sXHJcbiAgICAudGVjaC1zZWN0aW9uLFxyXG4gICAgLmN0YS1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiA2MHB4IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mZWF0dXJlcy1ncmlkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5iZW5lZml0cy1ncmlkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICBnYXA6IDMwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kZW1vLWZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmN0YS1idXR0b25zIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jdGEtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmN0YS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9528:
/*!***********************************************************************!*\
  !*** ./src/app/components/privacy-notice/privacy-notice.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyNoticeComponent": () => (/* binding */ PrivacyNoticeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class PrivacyNoticeComponent {}
PrivacyNoticeComponent.ɵfac = function PrivacyNoticeComponent_Factory(t) {
  return new (t || PrivacyNoticeComponent)();
};
PrivacyNoticeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PrivacyNoticeComponent,
  selectors: [["app-privacy-notice"]],
  decls: 121,
  vars: 0,
  consts: [[1, "privacy-page"], [1, "privacy-hero", "animate-fade-in"], [1, "hero-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "64", "height", "64", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"], [1, "page-title"], [1, "effective-date"], [1, "privacy-container"], [1, "intro-card", "animate-slide-in"], [1, "intro-text"], [1, "sections-grid"], [1, "privacy-section", 2, "animation-delay", "0.1s"], [1, "section-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"], ["d", "M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"], [1, "section-title"], [1, "section-content"], [1, "privacy-section", 2, "animation-delay", "0.2s"], ["d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"], ["d", "M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"], [1, "features-list"], [1, "privacy-section", 2, "animation-delay", "0.3s"], ["d", "M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"], [1, "privacy-section", 2, "animation-delay", "0.4s"], ["d", "M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"], [1, "privacy-section", 2, "animation-delay", "0.5s"], ["d", "M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"], ["d", "M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"], [1, "contact-card", "animate-slide-in"], [1, "contact-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "48", "height", "48", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"], [1, "contact-title"], [1, "contact-text"], ["routerLink", "/home/contactus", 1, "contact-link"], [1, "thank-you"]],
  template: function PrivacyNoticeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Privacy Notice");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Effective Date: July 14, 2023");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " This Privacy Notice describes how Sharp Floor NC (\"we,\" \"us,\" or \"our\") collects, uses, discloses, and protects the personal information of users (\"you\" or \"your\") who visit our blog website. We are committed to maintaining your privacy and safeguarding your personal information. By accessing and using our website, you consent to the practices described in this Privacy Notice. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10)(14, "div", 11)(15, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 14)(18, "path", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Information We Collect");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17)(22, "p")(23, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Personal Information:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " We may collect personal information you provide voluntarily, such as your name, email address, and any other information you choose to provide when submitting comments, subscribing to our newsletter, or contacting us.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p")(27, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Log Data:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " When you visit our website, our servers automatically collect certain information, including your IP address, browser type, operating system, referring website, pages visited, and the date and time of each visit.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p")(31, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Cookies and Similar Technologies:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " We use cookies and similar technologies to enhance your browsing experience and collect information about how you use our website. You may disable cookies through your browser settings, but some functionality may be limited.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18)(35, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "svg", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 19)(38, "path", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Use of Information");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17)(42, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "We use the collected information for the following purposes:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 21)(45, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "To provide and maintain our website, including personalized content and features.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "To communicate with you, respond to inquiries, and provide customer support.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "To send you newsletters, updates, and promotional materials (if you have subscribed).");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "To analyze website usage, improve our services, and enhance user experience.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "To enforce our website's terms of service and protect against potential fraud or other illegal activities.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "We do not sell, trade, or rent your personal information to third parties unless we have obtained your consent or are required by law to do so.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22)(58, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "svg", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Data Security");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 17)(64, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p")(67, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Data Retention:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Notice, unless a longer retention period is required or permitted by law.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 24)(71, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "svg", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Your Rights");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 17)(77, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "You may have certain rights regarding your personal information under applicable laws, including:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ul", 21)(80, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "The right to access your personal information");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "The right to correct inaccurate data");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "The right to delete your information");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "The right to restrict processing of your data");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "If you wish to exercise any of these rights, please contact us using the contact information provided below.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 26)(91, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "svg", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 27)(94, "path", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h3", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Updates & Changes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 17)(98, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "We reserve the right to update or modify this Privacy Notice at any time without prior notice. Any changes will be effective immediately upon posting the revised Privacy Notice on our website.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p")(101, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Children's Privacy:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Our website is not intended for individuals under the age of 13. We do not knowingly collect personal information from children.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p")(105, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Third-Party Links:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 29)(109, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "svg", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "path", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h2", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Have Questions?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " If you have any questions, concerns, or requests regarding this Privacy Notice or our privacy practices, please ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "contact us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, ". We will make reasonable efforts to address your inquiries and resolve any privacy concerns you may have. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Thank you for trusting Sharp Floor NC.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".privacy-page[_ngcontent-%COMP%] {\r\n    max-width: 1400px;\r\n    margin: 0 auto;\r\n    padding: 40px 20px;\r\n    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\r\n    min-height: 100vh;\r\n}\r\n\r\n.privacy-hero[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 60px;\r\n    padding: 60px 20px;\r\n    background: white;\r\n    border-radius: 20px;\r\n    box-shadow: 0 20px 60px rgba(0,0,0,0.1);\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.privacy-hero[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 6px;\r\n    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\r\n}\r\n\r\n.hero-icon[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    margin: 0 auto 30px;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);\r\n}\r\n\r\n.page-title[_ngcontent-%COMP%] {\r\n    font-size: 3.5rem;\r\n    font-weight: 800;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-clip: text;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.effective-date[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    color: #718096;\r\n    font-weight: 600;\r\n}\r\n\r\n.privacy-container[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.intro-card[_ngcontent-%COMP%] {\r\n    background: white;\r\n    padding: 40px;\r\n    border-radius: 20px;\r\n    box-shadow: 0 10px 40px rgba(0,0,0,0.08);\r\n    margin-bottom: 50px;\r\n    border-left: 6px solid #667eea;\r\n}\r\n\r\n.intro-text[_ngcontent-%COMP%] {\r\n    font-size: 1.15rem;\r\n    line-height: 1.9;\r\n    color: #4a5568;\r\n    margin: 0;\r\n}\r\n\r\n.sections-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    gap: 30px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.privacy-section[_ngcontent-%COMP%] {\r\n    background: white;\r\n    padding: 40px;\r\n    border-radius: 20px;\r\n    box-shadow: 0 10px 40px rgba(0,0,0,0.08);\r\n    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\r\n    border: 1px solid rgba(102, 126, 234, 0.1);\r\n    position: relative;\r\n    overflow: hidden;\r\n    animation: _ngcontent-%COMP%_cardFadeIn 0.6s ease-out forwards;\r\n    opacity: 0;\r\n}\r\n\r\n.privacy-section[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 4px;\r\n    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\r\n    transform: scaleX(0);\r\n    transition: transform 0.4s ease;\r\n}\r\n\r\n.privacy-section[_ngcontent-%COMP%]:hover::before {\r\n    transform: scaleX(1);\r\n}\r\n\r\n.privacy-section[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-5px);\r\n    box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);\r\n    border-color: rgba(102, 126, 234, 0.3);\r\n}\r\n\r\n.section-icon[_ngcontent-%COMP%] {\r\n    width: 70px;\r\n    height: 70px;\r\n    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);\r\n    border-radius: 16px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 25px;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.privacy-section[_ngcontent-%COMP%]:hover   .section-icon[_ngcontent-%COMP%] {\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    transform: rotate(5deg) scale(1.1);\r\n}\r\n\r\n.section-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    color: #667eea;\r\n    transition: color 0.3s ease;\r\n}\r\n\r\n.privacy-section[_ngcontent-%COMP%]:hover   .section-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%] {\r\n    font-size: 1.8rem;\r\n    font-weight: 700;\r\n    color: #2d3748;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.section-content[_ngcontent-%COMP%] {\r\n    font-size: 1.05rem;\r\n    line-height: 1.8;\r\n    color: #4a5568;\r\n}\r\n\r\n.section-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.section-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n    color: #667eea;\r\n    font-weight: 600;\r\n}\r\n\r\n.features-list[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding-left: 0;\r\n    margin: 20px 0;\r\n}\r\n\r\n.features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding-left: 35px;\r\n    margin-bottom: 12px;\r\n}\r\n\r\n.features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\r\n    content: '\u2713';\r\n    position: absolute;\r\n    left: 0;\r\n    width: 24px;\r\n    height: 24px;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    color: white;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-weight: 700;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.contact-card[_ngcontent-%COMP%] {\r\n    background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);\r\n    padding: 60px 50px;\r\n    border-radius: 20px;\r\n    text-align: center;\r\n    border: 2px solid rgba(102, 126, 234, 0.2);\r\n}\r\n\r\n.contact-icon[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 80px;\r\n    margin: 0 auto 25px;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);\r\n}\r\n\r\n.contact-title[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    font-weight: 800;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-clip: text;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.contact-text[_ngcontent-%COMP%] {\r\n    font-size: 1.15rem;\r\n    line-height: 1.8;\r\n    color: #4a5568;\r\n    max-width: 800px;\r\n    margin: 0 auto 20px;\r\n}\r\n\r\n.contact-link[_ngcontent-%COMP%] {\r\n    color: #667eea;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n    border-bottom: 2px solid transparent;\r\n    transition: border-color 0.3s ease;\r\n}\r\n\r\n.contact-link[_ngcontent-%COMP%]:hover {\r\n    border-bottom-color: #667eea;\r\n}\r\n\r\n.thank-you[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n    font-weight: 600;\r\n    color: #2d3748;\r\n    margin-top: 20px;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_slideInUp {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(30px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_cardFadeIn {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(30px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n.animate-fade-in[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_fadeIn 0.8s ease-in;\r\n}\r\n\r\n.animate-slide-in[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_slideInUp 0.8s ease-out;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .page-title[_ngcontent-%COMP%] {\r\n        font-size: 2.5rem;\r\n    }\r\n    \r\n    .privacy-hero[_ngcontent-%COMP%], .intro-card[_ngcontent-%COMP%], .privacy-section[_ngcontent-%COMP%], .contact-card[_ngcontent-%COMP%] {\r\n        padding: 30px 20px;\r\n    }\r\n    \r\n    .section-title[_ngcontent-%COMP%], .contact-title[_ngcontent-%COMP%] {\r\n        font-size: 1.5rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcml2YWN5LW5vdGljZS9wcml2YWN5LW5vdGljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsNkRBQTZEO0lBQzdELGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2REFBNkQ7SUFDN0Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDZEQUE2RDtJQUM3RCw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7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Qjs7SUFFQTs7UUFFSSxpQkFBaUI7SUFDckI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5wcml2YWN5LXBhZ2Uge1xyXG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDQwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNWY3ZmEgMCUsICNjM2NmZTIgMTAwJSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnByaXZhY3ktaGVybyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgcGFkZGluZzogNjBweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnByaXZhY3ktaGVybzo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbn1cclxuXHJcbi5oZXJvLWljb24ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcclxufVxyXG5cclxuLnBhZ2UtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmVmZmVjdGl2ZS1kYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgY29sb3I6ICM3MTgwOTY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ucHJpdmFjeS1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmludHJvLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwwLDAsMC4wOCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjNjY3ZWVhO1xyXG59XHJcblxyXG4uaW50cm8tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEuMTVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS45O1xyXG4gICAgY29sb3I6ICM0YTU1Njg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zZWN0aW9ucy1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBnYXA6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4ucHJpdmFjeS1zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggNDBweCByZ2JhKDAsMCwwLDAuMDgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjEpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGFuaW1hdGlvbjogY2FyZEZhZGVJbiAwLjZzIGVhc2Utb3V0IGZvcndhcmRzO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnByaXZhY3ktc2VjdGlvbjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XHJcbn1cclxuXHJcbi5wcml2YWN5LXNlY3Rpb246aG92ZXI6OmJlZm9yZSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxufVxyXG5cclxuLnByaXZhY3ktc2VjdGlvbjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDIwcHggNjBweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMik7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcclxufVxyXG5cclxuLnNlY3Rpb24taWNvbiB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4xKSAwJSwgcmdiYSgxMTgsIDc1LCAxNjIsIDAuMSkgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4ucHJpdmFjeS1zZWN0aW9uOmhvdmVyIC5zZWN0aW9uLWljb24ge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpIHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWljb24gc3ZnIHtcclxuICAgIGNvbG9yOiAjNjY3ZWVhO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4ucHJpdmFjeS1zZWN0aW9uOmhvdmVyIC5zZWN0aW9uLWljb24gc3ZnIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMyZDM3NDg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi1jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICBjb2xvcjogIzRhNTU2ODtcclxufVxyXG5cclxuLnNlY3Rpb24tY29udGVudCBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWNvbnRlbnQgc3Ryb25nIHtcclxuICAgIGNvbG9yOiAjNjY3ZWVhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmZlYXR1cmVzLWxpc3Qge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG4uZmVhdHVyZXMtbGlzdCBsaSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4uZmVhdHVyZXMtbGlzdCBsaTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICfDosKcwpMnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi5jb250YWN0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjA4KSAwJSwgcmdiYSgxMTgsIDc1LCAxNjIsIDAuMDgpIDEwMCUpO1xyXG4gICAgcGFkZGluZzogNjBweCA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4yKTtcclxufVxyXG5cclxuLmNvbnRhY3QtaWNvbiB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcclxufVxyXG5cclxuLmNvbnRhY3QtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmNvbnRhY3QtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEuMTVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgY29sb3I6ICM0YTU1Njg7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcclxufVxyXG5cclxuLmNvbnRhY3QtbGluayB7XHJcbiAgICBjb2xvcjogIzY2N2VlYTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uY29udGFjdC1saW5rOmhvdmVyIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM2NjdlZWE7XHJcbn1cclxuXHJcbi50aGFuay15b3Uge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMyZDM3NDg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVJblVwIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNhcmRGYWRlSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hbmltYXRlLWZhZGUtaW4ge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC44cyBlYXNlLWluO1xyXG59XHJcblxyXG4uYW5pbWF0ZS1zbGlkZS1pbiB7XHJcbiAgICBhbmltYXRpb246IHNsaWRlSW5VcCAwLjhzIGVhc2Utb3V0O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByaXZhY3ktaGVybyxcclxuICAgIC5pbnRyby1jYXJkLFxyXG4gICAgLnByaXZhY3ktc2VjdGlvbixcclxuICAgIC5jb250YWN0LWNhcmQge1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlY3Rpb24tdGl0bGUsXHJcbiAgICAuY29udGFjdC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3700:
/*!*******************************************************************!*\
  !*** ./src/app/components/qms-showcase/qms-showcase.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QmsShowcaseComponent": () => (/* binding */ QmsShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/safe-url.pipe */ 4998);






const _c0 = ["demoFrame"];
function QmsShowcaseComponent_div_48_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const metric_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](metric_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](metric_r8.label);
  }
}
function QmsShowcaseComponent_div_48_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QmsShowcaseComponent_div_48_div_8_div_1_Template, 5, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", feature_r4.metrics);
  }
}
function QmsShowcaseComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, QmsShowcaseComponent_div_48_div_8_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("animation-delay", i_r5 * 100, "ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feature_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feature_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feature_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", feature_r4.metrics);
  }
}
function QmsShowcaseComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45)(1, "div", 46)(2, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function QmsShowcaseComponent_div_56_Template_img_error_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const tech_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.onImageError($event, tech_r10.fallbackIcon));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tech_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", tech_r10.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", tech_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tech_r10.fallbackIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tech_r10.name);
  }
}
function QmsShowcaseComponent_div_59_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const point_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](point_r16);
  }
}
function QmsShowcaseComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50)(1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 52)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, QmsShowcaseComponent_div_59_li_9_Template, 5, 1, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const benefit_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r14 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](benefit_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](benefit_r13.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", benefit_r13.points);
  }
}
class QmsShowcaseComponent {
  constructor() {
    this.demoUrl = 'https://qms.sharpfloornc.com/';
    this.features = [{
      icon: 'assignment_turned_in',
      title: 'Document Control',
      description: 'Centralized document management with version control, approval workflows, and automated distribution.',
      metrics: [{
        value: '100%',
        label: 'Document Traceability'
      }, {
        value: '24/7',
        label: 'Access Control'
      }]
    }, {
      icon: 'timeline',
      title: 'Process Management',
      description: 'Streamlined process workflows with real-time monitoring, compliance tracking, and continuous improvement.',
      metrics: [{
        value: '99.9%',
        label: 'Process Compliance'
      }, {
        value: '50%',
        label: 'Time Reduction'
      }]
    }, {
      icon: 'fact_check',
      title: 'Quality Control',
      description: 'Comprehensive quality control with inspection checklists, non-conformance tracking, and corrective actions.',
      metrics: [{
        value: '95%',
        label: 'First Pass Yield'
      }, {
        value: '80%',
        label: 'Defect Reduction'
      }]
    }, {
      icon: 'verified_user',
      title: 'Audit Management',
      description: 'Complete audit trail with scheduled audits, finding management, and compliance reporting.',
      metrics: [{
        value: '100%',
        label: 'Audit Compliance'
      }, {
        value: '60%',
        label: 'Faster Audits'
      }]
    }, {
      icon: 'analytics',
      title: 'Quality Analytics',
      description: 'Advanced analytics and reporting for quality metrics, trends analysis, and performance optimization.',
      metrics: [{
        value: '360°',
        label: 'Quality View'
      }, {
        value: 'Real-time',
        label: 'Reporting'
      }]
    }, {
      icon: 'settings',
      title: 'CAPA Management',
      description: 'Corrective and Preventive Action management with root cause analysis and effectiveness verification.',
      metrics: [{
        value: '90%',
        label: 'CAPA Effectiveness'
      }, {
        value: '40%',
        label: 'Resolution Time'
      }]
    }];
    this.techStack = [{
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      fallbackIcon: 'web'
    }, {
      name: 'Angular Material',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
      fallbackIcon: 'design_services'
    }, {
      name: '.NET Core',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
      fallbackIcon: 'code'
    }, {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      fallbackIcon: 'storage'
    }, {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      fallbackIcon: 'javascript'
    }, {
      name: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      fallbackIcon: 'style'
    }, {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      fallbackIcon: 'memory'
    }];
    this.benefits = [{
      title: 'ISO Compliance Made Easy',
      description: 'Built-in compliance frameworks for ISO 9001, ISO 13485, and other quality standards.',
      points: ['Automated compliance tracking', 'Standard operating procedures', 'Audit-ready documentation', 'Regulatory reporting']
    }, {
      title: 'Streamlined Operations',
      description: 'Eliminate manual processes and reduce quality-related overhead with automated workflows.',
      points: ['Digital workflows', 'Automated notifications', 'Electronic signatures', 'Mobile accessibility']
    }, {
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions with comprehensive quality analytics and real-time dashboards.',
      points: ['Quality KPI tracking', 'Trend analysis', 'Predictive analytics', 'Custom reports']
    }, {
      title: 'Scalable Solution',
      description: 'Grow your quality management capabilities as your business expands.',
      points: ['Multi-site support', 'User role management', 'Integration capabilities', 'Cloud-based architecture']
    }];
  }
  onImageError(event, fallbackIcon) {
    const imgElement = event.target;
    const fallbackElement = imgElement.nextElementSibling;
    if (fallbackElement) {
      imgElement.style.display = 'none';
      fallbackElement.style.display = 'block';
    }
  }
  openFullDemo() {
    window.open(this.demoUrl, '_blank');
  }
  refreshDemo() {
    if (this.demoFrame && this.demoFrame.nativeElement) {
      this.demoFrame.nativeElement.src = this.demoUrl;
    }
  }
}
QmsShowcaseComponent.ɵfac = function QmsShowcaseComponent_Factory(t) {
  return new (t || QmsShowcaseComponent)();
};
QmsShowcaseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: QmsShowcaseComponent,
  selectors: [["app-qms-showcase"]],
  viewQuery: function QmsShowcaseComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.demoFrame = _t.first);
    }
  },
  decls: 76,
  vars: 6,
  consts: [[1, "qms-showcase-container"], [1, "hero-section", "animate-fade-in"], [1, "hero-overlay"], [1, "hero-content"], [1, "montserrat", "hero-title"], [1, "hero-tagline"], [1, "hero-badges"], [1, "badge"], [1, "hero-decoration"], [1, "demo-section"], [1, "demo-header"], [1, "section-title"], [1, "section-subtitle"], [1, "demo-controls"], ["mat-raised-button", "", "color", "primary", 1, "demo-button", 3, "click"], ["mat-stroked-button", "", 1, "demo-button", 3, "click"], [1, "demo-frame-container"], ["frameborder", "0", "loading", "lazy", "title", "Quality Management System Demo", 1, "demo-frame", 3, "src"], ["demoFrame", ""], [1, "frame-overlay", 3, "click"], [1, "overlay-content"], [1, "features-section", "animate-slide-in"], [1, "section-header"], [1, "features-grid"], ["class", "feature-card", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "tech-section"], [1, "tech-stack"], ["class", "tech-item", 4, "ngFor", "ngForOf"], [1, "benefits-section"], [1, "benefits-grid"], ["class", "benefit-card", 4, "ngFor", "ngForOf"], [1, "cta-section"], [1, "cta-content"], [1, "cta-buttons"], ["routerLink", "/home/contactus"], ["mat-raised-button", "", "color", "primary", 1, "cta-button"], ["mat-stroked-button", "", 1, "cta-button", "secondary", 3, "click"], [1, "feature-card"], [1, "feature-icon"], ["class", "feature-metrics", 4, "ngIf"], [1, "feature-metrics"], ["class", "metric", 4, "ngFor", "ngForOf"], [1, "metric"], [1, "metric-value"], [1, "metric-label"], [1, "tech-item"], [1, "tech-icon"], [3, "src", "alt", "error"], [1, "fallback-icon"], [1, "tech-name"], [1, "benefit-card"], [1, "benefit-number"], [1, "benefit-content"], [1, "benefit-points"], [4, "ngFor", "ngForOf"]],
  template: function QmsShowcaseComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Quality Management System");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Complete Digital QMS Solution for Manufacturing Excellence");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "ISO Compliance");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Document Control");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Process Management");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Audit Trail");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "section", 9)(19, "div", 10)(20, "h2", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\uD83D\uDE80 Live Interactive Demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Explore our fully functional Quality Management System in action");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13)(25, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QmsShowcaseComponent_Template_button_click_25_listener() {
        return ctx.openFullDemo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "open_in_new");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Open Full Demo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QmsShowcaseComponent_Template_button_click_29_listener() {
        return ctx.refreshDemo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "refresh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Refresh Demo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "iframe", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "safeUrl");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QmsShowcaseComponent_Template_div_click_37_listener() {
        return ctx.openFullDemo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 20)(39, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "touch_app");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Click to interact with live demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "section", 21)(44, "div", 22)(45, "h2", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Key Features Demonstrated");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, QmsShowcaseComponent_div_48_Template, 9, 6, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "section", 25)(50, "div", 22)(51, "h2", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Built With Modern Technology");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Enterprise-grade architecture for reliability and scalability");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, QmsShowcaseComponent_div_56_Template, 7, 6, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "section", 28)(58, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, QmsShowcaseComponent_div_59_Template, 10, 4, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "section", 31)(61, "div", 32)(62, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Ready to Transform Your Quality Management?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Let's discuss how we can customize a quality management solution for your specific needs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 33)(67, "a", 34)(68, "button", 35)(69, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "contact_mail");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " Get Started Today ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QmsShowcaseComponent_Template_button_click_72_listener() {
        return ctx.openFullDemo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "play_arrow");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " Try Full Demo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 4, ctx.demoUrl), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.features);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.techStack);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.benefits);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_0__.SafeUrlPipe],
  styles: [".qms-showcase-container[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n\r\n.hero-section[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  min-height: 60vh;\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.hero-overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.hero-content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 2;\r\n  text-align: center;\r\n  color: white;\r\n  max-width: 800px;\r\n  padding: 2rem;\r\n}\r\n\r\n.hero-title[_ngcontent-%COMP%] {\r\n  font-size: 3.5rem;\r\n  font-weight: 700;\r\n  margin-bottom: 1rem;\r\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.hero-tagline[_ngcontent-%COMP%] {\r\n  font-size: 1.3rem;\r\n  margin-bottom: 2rem;\r\n  opacity: 0.95;\r\n}\r\n\r\n.hero-badges[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 1rem;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%] {\r\n  background: rgba(255, 255, 255, 0.2);\r\n  -webkit-backdrop-filter: blur(10px);\r\n          backdrop-filter: blur(10px);\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 25px;\r\n  font-size: 0.9rem;\r\n  font-weight: 500;\r\n  border: 1px solid rgba(255, 255, 255, 0.3);\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-2px);\r\n  background: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.hero-decoration[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: -50%;\r\n  right: -20%;\r\n  width: 60%;\r\n  height: 200%;\r\n  background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), transparent);\r\n  transform: rotate(15deg);\r\n  pointer-events: none;\r\n}\r\n\r\n\r\n.demo-section[_ngcontent-%COMP%] {\r\n  padding: 4rem 2rem;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  background: white;\r\n  margin-top: -2rem;\r\n  border-radius: 20px 20px 0 0;\r\n  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.demo-header[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%] {\r\n  font-size: 2.5rem;\r\n  font-weight: 600;\r\n  color: #2c3e50;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.section-subtitle[_ngcontent-%COMP%] {\r\n  font-size: 1.1rem;\r\n  color: #7f8c8d;\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.demo-controls[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 1rem;\r\n  justify-content: center;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.demo-button[_ngcontent-%COMP%] {\r\n  padding: 0.75rem 1.5rem !important;\r\n  border-radius: 25px !important;\r\n  font-weight: 500 !important;\r\n  text-transform: none !important;\r\n  font-size: 0.95rem !important;\r\n}\r\n\r\n.demo-frame-container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  border-radius: 15px;\r\n  overflow: hidden;\r\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);\r\n  background: #f8f9fa;\r\n}\r\n\r\n.demo-frame[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 600px;\r\n  border: none;\r\n  display: block;\r\n}\r\n\r\n.frame-overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: rgba(102, 126, 234, 0.05);\r\n  -webkit-backdrop-filter: blur(1px);\r\n          backdrop-filter: blur(1px);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n  opacity: 0;\r\n}\r\n\r\n.frame-overlay[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n  background: rgba(102, 126, 234, 0.1);\r\n}\r\n\r\n.overlay-content[_ngcontent-%COMP%] {\r\n  background: rgba(255, 255, 255, 0.95);\r\n  padding: 1rem 2rem;\r\n  border-radius: 25px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.overlay-content[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n\r\n.features-section[_ngcontent-%COMP%] {\r\n  padding: 4rem 2rem;\r\n  background: #f8f9fa;\r\n}\r\n\r\n.section-header[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.features-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\r\n  gap: 2rem;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.feature-card[_ngcontent-%COMP%] {\r\n  background: white;\r\n  padding: 2rem;\r\n  border-radius: 15px;\r\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);\r\n  transition: all 0.3s ease;\r\n  border: 1px solid #e9ecef;\r\n}\r\n\r\n.feature-card[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-5px);\r\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.feature-icon[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n  height: 60px;\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  border-radius: 15px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.feature-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: 1.8rem;\r\n}\r\n\r\n.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 1.4rem;\r\n  font-weight: 600;\r\n  color: #2c3e50;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #7f8c8d;\r\n  line-height: 1.6;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.feature-metrics[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n.metric[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  flex: 1;\r\n}\r\n\r\n.metric-value[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n  color: #667eea;\r\n}\r\n\r\n.metric-label[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  color: #95a5a6;\r\n  text-transform: uppercase;\r\n}\r\n\r\n\r\n.tech-section[_ngcontent-%COMP%] {\r\n  padding: 4rem 2rem;\r\n  background: white;\r\n}\r\n\r\n.tech-stack[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 2rem;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.tech-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding: 1rem;\r\n  border-radius: 10px;\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.tech-item[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-3px);\r\n}\r\n\r\n.tech-icon[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  height: 50px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: relative;\r\n}\r\n\r\n.tech-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: contain;\r\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n.fallback-icon[_ngcontent-%COMP%] {\r\n  font-size: 40px !important;\r\n  width: 40px;\r\n  height: 40px;\r\n  color: #667eea;\r\n}\r\n\r\n.tech-name[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  color: #2c3e50;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n\r\n.benefits-section[_ngcontent-%COMP%] {\r\n  padding: 4rem 2rem;\r\n  background: #f8f9fa;\r\n}\r\n\r\n.benefits-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  gap: 2rem;\r\n  max-width: 1000px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.benefit-card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 2rem;\r\n  background: white;\r\n  padding: 2rem;\r\n  border-radius: 15px;\r\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.benefit-card[_ngcontent-%COMP%]:hover {\r\n  transform: translateX(5px);\r\n}\r\n\r\n.benefit-number[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n  height: 60px;\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  color: white;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.benefit-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 1.3rem;\r\n  font-weight: 600;\r\n  color: #2c3e50;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.benefit-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #7f8c8d;\r\n  margin-bottom: 1rem;\r\n  line-height: 1.6;\r\n}\r\n\r\n.benefit-points[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\n.benefit-points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  margin-bottom: 0.5rem;\r\n  color: #2c3e50;\r\n}\r\n\r\n.benefit-points[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n  color: #27ae60;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n\r\n.cta-section[_ngcontent-%COMP%] {\r\n  padding: 4rem 2rem;\r\n  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.cta-content[_ngcontent-%COMP%] {\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 2.5rem;\r\n  font-weight: 600;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 1.1rem;\r\n  margin-bottom: 2rem;\r\n  opacity: 0.9;\r\n}\r\n\r\n.cta-buttons[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 1rem;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%] {\r\n  padding: 0.75rem 2rem !important;\r\n  border-radius: 25px !important;\r\n  font-weight: 500 !important;\r\n  text-transform: none !important;\r\n  font-size: 1rem !important;\r\n  min-width: 180px;\r\n}\r\n\r\n.cta-button.secondary[_ngcontent-%COMP%] {\r\n  color: white !important;\r\n  border-color: white !important;\r\n}\r\n\r\n\r\n@keyframes _ngcontent-%COMP%_fadeIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(20px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_slideIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateX(-20px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.animate-fade-in[_ngcontent-%COMP%] {\r\n  animation: _ngcontent-%COMP%_fadeIn 1s ease-out;\r\n}\r\n\r\n.animate-slide-in[_ngcontent-%COMP%] {\r\n  animation: _ngcontent-%COMP%_slideIn 0.8s ease-out;\r\n}\r\n\r\n.animate-card[_ngcontent-%COMP%] {\r\n  animation: _ngcontent-%COMP%_fadeIn 0.6s ease-out forwards;\r\n  opacity: 0;\r\n}\r\n\r\n\r\n@media (max-width: 768px) {\r\n  .hero-title[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n  }\r\n  \r\n  .hero-tagline[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n  }\r\n  \r\n  .section-title[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n  \r\n  .features-grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  \r\n  .demo-controls[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n  \r\n  .demo-frame[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n  }\r\n  \r\n  .benefit-card[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    text-align: center;\r\n  }\r\n  \r\n  .cta-buttons[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .demo-section[_ngcontent-%COMP%], .features-section[_ngcontent-%COMP%], .tech-section[_ngcontent-%COMP%], .benefits-section[_ngcontent-%COMP%], .cta-section[_ngcontent-%COMP%] {\r\n    padding: 2rem 1rem;\r\n  }\r\n  \r\n  .hero-content[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n  }\r\n  \r\n  .hero-badges[_ngcontent-%COMP%] {\r\n    gap: 0.5rem;\r\n  }\r\n  \r\n  .badge[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n    padding: 0.4rem 0.8rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9xbXMtc2hvd2Nhc2UvcW1zLXNob3djYXNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDOztBQUVsQztFQUNFLGlCQUFpQjtFQUNqQiw2REFBNkQ7RUFDN0QsVUFBVTtFQUNWLFNBQVM7RUFDVCxpQ0FBaUM7QUFDbkM7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw2REFBNkQ7RUFDN0QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1oseUVBQXlFO0VBQ3pFLHdCQUF3QjtF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QUNmOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHNCQUFzQjtFQUN4QjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogUU1TIFNob3djYXNlIENvbXBvbmVudCBTdHlsZXMgKi9cclxuXHJcbi5xbXMtc2hvd2Nhc2UtY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVmN2ZhIDAlLCAjYzNjZmUyIDEwMCUpO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLyogSGVybyBTZWN0aW9uICovXHJcbi5oZXJvLXNlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiA2MHZoO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5oZXJvLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4uaGVyby1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLmhlcm8tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4uaGVyby10YWdsaW5lIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIG9wYWNpdHk6IDAuOTU7XHJcbn1cclxuXHJcbi5oZXJvLWJhZGdlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5iYWRnZTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuLmhlcm8tZGVjb3JhdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTUwJTtcclxuICByaWdodDogLTIwJTtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogMjAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSwgdHJhbnNwYXJlbnQpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLyogRGVtbyBTZWN0aW9uICovXHJcbi5kZW1vLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAtMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xyXG4gIGJveC1zaGFkb3c6IDAgLTEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5kZW1vLWhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uLXN1YnRpdGxlIHtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBjb2xvcjogIzdmOGM4ZDtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZGVtby1jb250cm9scyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmRlbW8tYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDAuOTVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRlbW8tZnJhbWUtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxufVxyXG5cclxuLmRlbW8tZnJhbWUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZnJhbWUtb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMDUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uZnJhbWUtb3ZlcmxheTpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMSk7XHJcbn1cclxuXHJcbi5vdmVybGF5LWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5vdmVybGF5LWNvbnRlbnQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcbi8qIEZlYXR1cmVzIFNlY3Rpb24gKi9cclxuLmZlYXR1cmVzLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG4uZmVhdHVyZXMtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcclxuICBnYXA6IDJyZW07XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5mZWF0dXJlLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG59XHJcblxyXG4uZmVhdHVyZS1jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxufVxyXG5cclxuLmZlYXR1cmUtaWNvbiB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4uZmVhdHVyZS1pY29uIG1hdC1pY29uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbn1cclxuXHJcbi5mZWF0dXJlLWNhcmQgaDMge1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmZlYXR1cmUtY2FyZCBwIHtcclxuICBjb2xvcjogIzdmOGM4ZDtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmZlYXR1cmUtbWV0cmljcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5tZXRyaWMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4ubWV0cmljLXZhbHVlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjNjY3ZWVhO1xyXG59XHJcblxyXG4ubWV0cmljLWxhYmVsIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBjb2xvcjogIzk1YTVhNjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4vKiBUZWNobm9sb2d5IFN0YWNrICovXHJcbi50ZWNoLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLnRlY2gtc3RhY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4udGVjaC1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLnRlY2gtaXRlbTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG59XHJcblxyXG4udGVjaC1pY29uIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRlY2gtaWNvbiBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XHJcbn1cclxuXHJcbi5mYWxsYmFjay1pY29uIHtcclxuICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgY29sb3I6ICM2NjdlZWE7XHJcbn1cclxuXHJcbi50ZWNoLW5hbWUge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi8qIEJlbmVmaXRzIFNlY3Rpb24gKi9cclxuLmJlbmVmaXRzLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG59XHJcblxyXG4uYmVuZWZpdHMtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDJyZW07XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5iZW5lZml0LWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmJlbmVmaXQtY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbn1cclxuXHJcbi5iZW5lZml0LW51bWJlciB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLmJlbmVmaXQtY29udGVudCBoMyB7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzJjM2U1MDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5iZW5lZml0LWNvbnRlbnQgcCB7XHJcbiAgY29sb3I6ICM3ZjhjOGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG4uYmVuZWZpdC1wb2ludHMge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmJlbmVmaXQtcG9pbnRzIGxpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG59XHJcblxyXG4uYmVuZWZpdC1wb2ludHMgbWF0LWljb24ge1xyXG4gIGNvbG9yOiAjMjdhZTYwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4vKiBDYWxsIHRvIEFjdGlvbiAqL1xyXG4uY3RhLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMmMzZTUwIDAlLCAjMzQ5OGRiIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jdGEtY29udGVudCB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmN0YS1jb250ZW50IGgyIHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5jdGEtY29udGVudCBwIHtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLmN0YS1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMXJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5jdGEtYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDJyZW0gIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOiAxODBweDtcclxufVxyXG5cclxuLmN0YS1idXR0b24uc2Vjb25kYXJ5IHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEFuaW1hdGlvbnMgKi9cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVJbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5hbmltYXRlLWZhZGUtaW4ge1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDFzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uYW5pbWF0ZS1zbGlkZS1pbiB7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZUluIDAuOHMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5hbmltYXRlLWNhcmQge1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNnMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmhlcm8tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5oZXJvLXRhZ2xpbmUge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZlYXR1cmVzLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZW1vLWNvbnRyb2xzIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZGVtby1mcmFtZSB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gIH1cclxuICBcclxuICAuYmVuZWZpdC1jYXJkIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdGEtYnV0dG9ucyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5kZW1vLXNlY3Rpb24sXHJcbiAgLmZlYXR1cmVzLXNlY3Rpb24sXHJcbiAgLnRlY2gtc2VjdGlvbixcclxuICAuYmVuZWZpdHMtc2VjdGlvbixcclxuICAuY3RhLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuaGVyby1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5oZXJvLWJhZGdlcyB7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmJhZGdlIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgcGFkZGluZzogMC40cmVtIDAuOHJlbTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6599:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/quality-management-system/quality-management-system.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QualityManagementSystemComponent": () => (/* binding */ QualityManagementSystemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);






function QualityManagementSystemComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24)(3, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 28)(10, "a", 29)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Explore This");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-delay", i_r2 * 0.08 + "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.body, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("matTooltip", "Learn more about ", item_r1.title, "");
  }
}
class QualityManagementSystemComponent {
  constructor() {
    this.listOfBenefits = [{
      title: "Tailored to Your Needs:",
      icon: "photo_filter",
      body: `
        Our custom QMS software is designed to fit your manufacturing company's specific
                requirements and processes. We work closely with you to understand your workflow, quality control procedures, and
                regulatory compliance needs to develop a solution that perfectly aligns with your business.
      `
    }, {
      title: "Improved Quality Control:",
      icon: "task_alt",
      body: `
      With our QMS software, you gain better control over your manufacturing processes. The
                system allows you to define and enforce quality standards, ensuring consistent product quality, reduced defects, and
                customer satisfaction.
      `
    }, {
      title: "Real-time Data Analysis:",
      icon: "insights",
      body: `
      Our QMS software provides real-time data collection and analysis, empowering you with
      actionable insights. Monitor key performance indicators (KPIs), track production metrics, and identify areas for
      improvement to make informed decisions quickly.
      `
    }, {
      title: "Enhanced Traceability:",
      icon: "content_paste_search",
      body: `
      Traceability is crucial in manufacturing, especially for industries with strict
      regulations. Our QMS software enables comprehensive traceability throughout the production lifecycle, helping you
      identify the source of issues, conduct effective recalls if necessary, and maintain compliance with industry standards.
      `
    }, {
      title: "Compliance Management:",
      icon: "assured_workload",
      body: `
      Meeting regulatory requirements is a priority for manufacturing companies. Our custom QMS
      software incorporates compliance management features, ensuring adherence to industry standards (ISO, FDA, etc.) and
      simplifying the auditing process.
      `
    }, {
      title: "Supplier Quality Management:",
      icon: "manage_search",
      body: `
      Collaborate more effectively with your suppliers using our QMS software. Monitor
      supplier performance, evaluate their quality records, and build stronger relationships to ensure the delivery of
      high-quality raw materials and components.
      `
    }, {
      title: "Risk Assessment and Mitigation:",
      icon: "analytics",
      body: `
      Identify potential risks in your manufacturing processes and supply chain with
      our QMS software. Proactively address these risks to prevent costly quality issues and disruptions.
      `
    }, {
      title: "Efficient Document Management:",
      icon: "task",
      body: `
      Our QMS software provides a centralized platform for document management, making
      it easier to store, organize, and access quality-related documents such as standard operating procedures (SOPs), work
      instructions, and training materials.
      `
    }, {
      title: "Continuous Improvement:",
      icon: "thumb_up",
      body: `
      Foster a culture of continuous improvement within your manufacturing company using our
      QMS software. Encourage feedback, track corrective actions, and implement preventive measures to drive ongoing quality
      enhancements.
      `
    }, {
      title: "Cost Savings:",
      icon: "attach_money",
      body: `
      Investing in our custom QMS software can lead to significant cost savings over time. By reducing
      waste, minimizing defects, and optimizing processes, you can improve overall operational efficiency and bottom-line
      performance.
      `
    }];
  }
}
QualityManagementSystemComponent.ɵfac = function QualityManagementSystemComponent_Factory(t) {
  return new (t || QualityManagementSystemComponent)();
};
QualityManagementSystemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: QualityManagementSystemComponent,
  selectors: [["app-quality-management-system"]],
  decls: 32,
  vars: 1,
  consts: [[1, "qms-container"], [1, "hero-card", "animate-fade-in"], [1, "hero-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "64", "height", "64", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"], ["d", "M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"], [1, "content-title", "hero-title"], [1, "content-body", "hero-description"], [1, "section-header", "animate-slide-in"], [1, "section-title"], [1, "section-subtitle"], [1, "benefits-grid"], ["class", "benefit-card animate-card", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "conclusion-card", "modern-card", "animate-slide-in"], [1, "conclusion-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "48", "height", "48", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"], [1, "conclusion-title"], [1, "content-body"], [1, "cta-section"], ["routerLink", "/home/contactus"], ["mat-raised-button", "", "color", "primary", 1, "cta-button"], [1, "benefit-card", "animate-card"], [1, "card-shine"], [1, "card-icon-wrapper"], [1, "card-icon"], [1, "content-title", "card-title"], [1, "content-body", "card-description"], [1, "card-footer"], ["routerLink", "/home/contactus", 1, "card-link", 3, "matTooltip"]],
  template: function QualityManagementSystemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4)(5, "path", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Welcome to Sharp Floor NC! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " At Sharp Floor NC, we understand the unique challenges that manufacturing companies face in maintaining high-quality standards while optimizing their operations. That's why we offer custom Quality Management System (QMS) software tailored specifically for manufacturing companies, designed to streamline and enhance your quality control processes. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "h2", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "How Your Manufacturing Company Can Benefit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Discover the powerful features that will transform your quality management");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, QualityManagementSystemComponent_div_16_Template, 15, 6, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13)(18, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ready to Elevate Your Quality Standards?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Experience the power of a tailored Quality Management System for your manufacturing company with Sharp Floor NC. Contact us today to schedule a consultation and learn more about how our QMS software can transform your quality control processes and elevate your business to new heights. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19)(26, "a", 20)(27, "button", 21)(28, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Schedule a Consultation");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "calendar_today");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfBenefits);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip],
  styles: [".qms-container[_ngcontent-%COMP%] {\r\n    max-width: 1600px;\r\n    margin: 0 auto;\r\n    padding: 40px 20px;\r\n    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\r\n    min-height: 100vh;\r\n}\r\n\r\n.hero-card[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n    margin: 0 auto 60px;\r\n    padding: 60px 50px;\r\n    background: white;\r\n    border-radius: 20px;\r\n    box-shadow: 0 20px 60px rgba(0,0,0,0.1);\r\n    text-align: center;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.hero-card[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 6px;\r\n    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\r\n}\r\n\r\n.hero-icon[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    margin: 0 auto 30px;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.hero-card[_ngcontent-%COMP%]:hover   .hero-icon[_ngcontent-%COMP%] {\r\n    transform: rotate(5deg) scale(1.1);\r\n}\r\n\r\n.hero-title[_ngcontent-%COMP%] {\r\n    font-size: 2.8rem;\r\n    font-weight: 800;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-clip: text;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.hero-description[_ngcontent-%COMP%] {\r\n    font-size: 1.15rem;\r\n    line-height: 1.8;\r\n    color: #4a5568;\r\n    max-width: 900px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.section-header[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    max-width: 900px;\r\n    margin: 60px auto 50px;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    font-weight: 800;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-clip: text;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.section-subtitle[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n    color: #718096;\r\n    font-weight: 300;\r\n}\r\n\r\n.benefits-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));\r\n    gap: 30px;\r\n    padding: 20px;\r\n    max-width: 1600px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.benefit-card[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background: white;\r\n    border-radius: 20px;\r\n    padding: 40px 30px;\r\n    box-shadow: 0 10px 40px rgba(0,0,0,0.08);\r\n    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\r\n    overflow: hidden;\r\n    border: 1px solid rgba(102, 126, 234, 0.1);\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.benefit-card[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 4px;\r\n    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\r\n    transform: scaleX(0);\r\n    transition: transform 0.4s ease;\r\n}\r\n\r\n.benefit-card[_ngcontent-%COMP%]:hover::before {\r\n    transform: scaleX(1);\r\n}\r\n\r\n.card-shine[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: -100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);\r\n    transition: left 0.6s ease;\r\n}\r\n\r\n.benefit-card[_ngcontent-%COMP%]:hover   .card-shine[_ngcontent-%COMP%] {\r\n    left: 100%;\r\n}\r\n\r\n.benefit-card[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-10px) scale(1.02);\r\n    box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);\r\n    border-color: rgba(102, 126, 234, 0.3);\r\n}\r\n\r\n.card-icon-wrapper[_ngcontent-%COMP%] {\r\n    width: 70px;\r\n    height: 70px;\r\n    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);\r\n    border-radius: 16px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 25px;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.benefit-card[_ngcontent-%COMP%]:hover   .card-icon-wrapper[_ngcontent-%COMP%] {\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    transform: rotate(5deg) scale(1.1);\r\n}\r\n\r\n.card-icon[_ngcontent-%COMP%] {\r\n    font-size: 36px;\r\n    width: 36px;\r\n    height: 36px;\r\n    color: #667eea;\r\n    transition: color 0.3s ease;\r\n}\r\n\r\n.benefit-card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n    font-size: 1.4rem;\r\n    font-weight: 700;\r\n    color: #2d3748;\r\n    margin-bottom: 15px;\r\n    line-height: 1.3;\r\n}\r\n\r\n.card-description[_ngcontent-%COMP%] {\r\n    font-size: 1.05rem;\r\n    line-height: 1.8;\r\n    color: #4a5568;\r\n    flex-grow: 1;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%] {\r\n    margin-top: auto;\r\n    padding-top: 20px;\r\n    border-top: 1px solid rgba(0,0,0,0.05);\r\n}\r\n\r\n.card-link[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    color: #667eea;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n    transition: all 0.3s ease;\r\n    font-size: 1rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.card-link[_ngcontent-%COMP%]:hover {\r\n    color: #764ba2;\r\n    gap: 12px;\r\n}\r\n\r\n.card-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    width: 20px;\r\n    height: 20px;\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.card-link[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\r\n    transform: translateX(3px);\r\n}\r\n\r\n.conclusion-card[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n    margin: 60px auto;\r\n    padding: 60px 50px;\r\n    background: white;\r\n    border-radius: 20px;\r\n    box-shadow: 0 20px 60px rgba(0,0,0,0.1);\r\n    text-align: center;\r\n    position: relative;\r\n    overflow: hidden;\r\n    border: 1px solid rgba(102, 126, 234, 0.1);\r\n}\r\n\r\n.conclusion-card[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 6px;\r\n    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\r\n}\r\n\r\n.conclusion-icon[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 80px;\r\n    margin: 0 auto 25px;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);\r\n}\r\n\r\n.conclusion-title[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    font-weight: 800;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-clip: text;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.conclusion-card[_ngcontent-%COMP%]   .content-body[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    line-height: 1.9;\r\n    color: #4a5568;\r\n    max-width: 900px;\r\n    margin: 0 auto 30px;\r\n}\r\n\r\n.cta-section[_ngcontent-%COMP%] {\r\n    margin-top: 40px;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding: 15px 40px !important;\r\n    font-size: 1.2rem !important;\r\n    border-radius: 50px !important;\r\n    transition: all 0.3s ease !important;\r\n    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3) !important;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4) !important;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\r\n    transform: scale(1.1);\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_slideInUp {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(30px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_cardFadeIn {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(30px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n.animate-fade-in[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_fadeIn 0.8s ease-in;\r\n}\r\n\r\n.animate-slide-in[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_slideInUp 0.8s ease-out;\r\n}\r\n\r\n.animate-card[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_cardFadeIn 0.6s ease-out forwards;\r\n    opacity: 0;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n    .benefits-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .hero-card[_ngcontent-%COMP%], .conclusion-card[_ngcontent-%COMP%] {\r\n        padding: 40px 25px;\r\n    }\r\n    \r\n    .hero-title[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n    \r\n    .section-title[_ngcontent-%COMP%], .conclusion-title[_ngcontent-%COMP%] {\r\n        font-size: 1.8rem;\r\n    }\r\n    \r\n    .benefit-card[_ngcontent-%COMP%] {\r\n        padding: 30px 20px;\r\n    }\r\n    \r\n    .card-title[_ngcontent-%COMP%] {\r\n        font-size: 1.2rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9xdWFsaXR5LW1hbmFnZW1lbnQtc3lzdGVtL3F1YWxpdHktbWFuYWdlbWVudC1zeXN0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDZEQUE2RDtJQUM3RCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2QyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUNYLDREQUE0RDtBQUNoRTs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZEQUE2RDtJQUM3RCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdEQUFnRDtJQUNoRCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDZEQUE2RDtJQUM3RCw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiw2REFBNkQ7SUFDN0QsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyxx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cEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5QixvQ0FBb0M7SUFDcEMsMkRBQTJEO0FBQy9EOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDJEQUEyRDtBQUMvRDs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxVQUFVO1FBQ1Ysd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsVUFBVTtBQUNkOztBQUVBO0lBQ0k7UUFDSSwwQkFBMEI7UUFDMUIsYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7O1FBRUksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTs7UUFFSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5xbXMtY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTYwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVmN2ZhIDAlLCAjYzNjZmUyIDEwMCUpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5oZXJvLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byA2MHB4O1xyXG4gICAgcGFkZGluZzogNjBweCA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmhlcm8tY2FyZDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbn1cclxuXHJcbi5oZXJvLWljb24ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5oZXJvLWNhcmQ6aG92ZXIgLmhlcm8taWNvbiB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKSBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4uaGVyby10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIuOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uaGVyby1kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMTVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgY29sb3I6ICM0YTU1Njg7XHJcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgbWFyZ2luOiA2MHB4IGF1dG8gNTBweDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnNlY3Rpb24tc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBjb2xvcjogIzcxODA5NjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5iZW5lZml0cy1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM4MHB4LCAxZnIpKTtcclxuICAgIGdhcDogMzBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDE2MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uYmVuZWZpdC1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDQwcHggMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwwLDAsMC4wOCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjEpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5iZW5lZml0LWNhcmQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xyXG59XHJcblxyXG4uYmVuZWZpdC1jYXJkOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbn1cclxuXHJcbi5jYXJkLXNoaW5lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCByZ2JhKDI1NSwyNTUsMjU1LDAuMyksIHRyYW5zcGFyZW50KTtcclxuICAgIHRyYW5zaXRpb246IGxlZnQgMC42cyBlYXNlO1xyXG59XHJcblxyXG4uYmVuZWZpdC1jYXJkOmhvdmVyIC5jYXJkLXNoaW5lIHtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbn1cclxuXHJcbi5iZW5lZml0LWNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSBzY2FsZSgxLjAyKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4yKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xyXG59XHJcblxyXG4uY2FyZC1pY29uLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMSkgMCUsIHJnYmEoMTE4LCA3NSwgMTYyLCAwLjEpIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmJlbmVmaXQtY2FyZDpob3ZlciAuY2FyZC1pY29uLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpIHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5jYXJkLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBjb2xvcjogIzY2N2VlYTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmJlbmVmaXQtY2FyZDpob3ZlciAuY2FyZC1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMyZDM3NDg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcclxufVxyXG5cclxuLmNhcmQtZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcclxuICAgIGNvbG9yOiAjNGE1NTY4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDUpO1xyXG59XHJcblxyXG4uY2FyZC1saW5rIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgY29sb3I6ICM2NjdlZWE7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQtbGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogIzc2NGJhMjtcclxuICAgIGdhcDogMTJweDtcclxufVxyXG5cclxuLmNhcmQtbGluayBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5jYXJkLWxpbms6aG92ZXIgbWF0LWljb24ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7XHJcbn1cclxuXHJcbi5jb25jbHVzaW9uLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDYwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDYwcHggNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMSk7XHJcbn1cclxuXHJcbi5jb25jbHVzaW9uLWNhcmQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG59XHJcblxyXG4uY29uY2x1c2lvbi1pY29uIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMjVweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDI1cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xyXG59XHJcblxyXG4uY29uY2x1c2lvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uY29uY2x1c2lvbi1jYXJkIC5jb250ZW50LWJvZHkge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS45O1xyXG4gICAgY29sb3I6ICM0YTU1Njg7XHJcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMzBweDtcclxufVxyXG5cclxuLmN0YS1zZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5jdGEtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggNDBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3RhLWJ1dHRvbjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDE1cHggNDBweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN0YS1idXR0b24gbWF0LWljb24ge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmN0YS1idXR0b246aG92ZXIgbWF0LWljb24ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVJblVwIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNhcmRGYWRlSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hbmltYXRlLWZhZGUtaW4ge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC44cyBlYXNlLWluO1xyXG59XHJcblxyXG4uYW5pbWF0ZS1zbGlkZS1pbiB7XHJcbiAgICBhbmltYXRpb246IHNsaWRlSW5VcCAwLjhzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uYW5pbWF0ZS1jYXJkIHtcclxuICAgIGFuaW1hdGlvbjogY2FyZEZhZGVJbiAwLjZzIGVhc2Utb3V0IGZvcndhcmRzO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAuYmVuZWZpdHMtZ3JpZCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuaGVyby1jYXJkLFxyXG4gICAgLmNvbmNsdXNpb24tY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZzogNDBweCAyNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaGVyby10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VjdGlvbi10aXRsZSxcclxuICAgIC5jb25jbHVzaW9uLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJlbmVmaXQtY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1926:
/*!***************************************************!*\
  !*** ./src/app/components/test/test.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestComponent": () => (/* binding */ TestComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);



class TestComponent {
  constructor(_http, _snackbar) {
    this._http = _http;
    this._snackbar = _snackbar;
  }
  sendToPHP() {
    const nowTime = new Date().toLocaleTimeString();
    const nowDate = new Date().toLocaleDateString();
    const form = new FormData();
    form.append("body", "Hello from Angular");
    form.append("date", nowDate);
    form.append("time", nowTime);
    console.log(form.get('body'));
    this._http.post('/sendmail.php', form, {
      responseType: 'text'
    }).subscribe({
      next: data => {
        console.log(data);
        this._snackbar.open("Mail sent successfully.", "Dismiss", {
          duration: 4000
        });
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
TestComponent.ɵfac = function TestComponent_Factory(t) {
  return new (t || TestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar));
};
TestComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TestComponent,
  selectors: [["app-test"]],
  decls: 0,
  vars: 0,
  template: function TestComponent_Template(rf, ctx) {},
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 53:
/*!*******************************************************************!*\
  !*** ./src/app/components/tms-showcase/tms-showcase.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TmsShowcaseComponent": () => (/* binding */ TmsShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/safe-url.pipe */ 4998);







const _c0 = ["demoFrame"];
function TmsShowcaseComponent_div_48_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const metric_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](metric_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](metric_r8.label);
  }
}
function TmsShowcaseComponent_div_48_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TmsShowcaseComponent_div_48_div_8_div_1_Template, 5, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", feature_r4.metrics);
  }
}
function TmsShowcaseComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TmsShowcaseComponent_div_48_div_8_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("animation-delay", i_r5 * 100, "ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feature_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feature_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feature_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", feature_r4.metrics);
  }
}
function TmsShowcaseComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45)(1, "div", 46)(2, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function TmsShowcaseComponent_div_56_Template_img_error_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const tech_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.onImageError($event, tech_r10.fallbackIcon));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tech_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", tech_r10.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", tech_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tech_r10.fallbackIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tech_r10.name);
  }
}
function TmsShowcaseComponent_div_59_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const point_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](point_r16);
  }
}
function TmsShowcaseComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50)(1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 52)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TmsShowcaseComponent_div_59_li_9_Template, 5, 1, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const benefit_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r14 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](benefit_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](benefit_r13.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", benefit_r13.points);
  }
}
class TmsShowcaseComponent {
  onImageError(event, fallbackIcon) {
    const imgElement = event.target;
    const fallbackElement = imgElement.nextElementSibling;
    if (fallbackElement) {
      imgElement.style.display = 'none';
      fallbackElement.style.display = 'block';
    }
  }
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    this.features = [{
      icon: 'dashboard',
      title: 'Real-Time Dashboard',
      description: 'Live overview of all tools with instant status updates and availability tracking.',
      metrics: [{
        value: '16',
        label: 'Total Tools'
      }, {
        value: '11',
        label: 'Available'
      }, {
        value: '4',
        label: 'In Use'
      }]
    }, {
      icon: 'inventory_2',
      title: 'Smart Inventory Control',
      description: 'Automated tool categorization with location tracking and usage analytics.',
      metrics: [{
        value: '8',
        label: 'Standard Tools'
      }, {
        value: '1',
        label: 'In Maintenance'
      }]
    }, {
      icon: 'swap_horiz',
      title: 'Quick Check-In/Out',
      description: 'Streamlined tool assignment process with user tracking and time logging.'
    }, {
      icon: 'build',
      title: 'Maintenance Scheduling',
      description: 'Proactive maintenance alerts and scheduling to minimize downtime.'
    }, {
      icon: 'analytics',
      title: 'Usage Analytics',
      description: 'Comprehensive reporting on tool utilization, patterns, and optimization opportunities.'
    }, {
      icon: 'qr_code_scanner',
      title: 'QR Code Integration',
      description: 'Fast tool identification and processing with mobile-friendly QR scanning.'
    }];
    this.techStack = [{
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      fallbackIcon: 'web'
    }, {
      name: 'Angular Material',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
      fallbackIcon: 'design_services'
    }, {
      name: '.NET Core',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
      fallbackIcon: 'code'
    }, {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      fallbackIcon: 'storage'
    }, {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      fallbackIcon: 'javascript'
    }, {
      name: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      fallbackIcon: 'style'
    }, {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      fallbackIcon: 'memory'
    }];
    this.benefits = [{
      title: 'Eliminate Tool Loss & Misplacement',
      description: 'Digital tracking ensures every tool is accounted for with real-time location updates.',
      points: ['Reduce tool replacement costs by up to 40%', 'Instant location tracking for any tool', 'Automated alerts for missing or overdue tools', 'Complete audit trail for accountability']
    }, {
      title: 'Optimize Tool Utilization',
      description: 'Data-driven insights help maximize tool efficiency and identify optimization opportunities.',
      points: ['Usage analytics reveal underutilized tools', 'Predictive maintenance prevents unexpected failures', 'Load balancing across similar tools', 'ROI tracking for tool investments']
    }, {
      title: 'Streamline Operations',
      description: 'Automated workflows and instant access reduce administrative overhead.',
      points: ['Self-service check-in/out reduces wait times', 'Mobile-friendly interface for shop floor use', 'Integrated with existing manufacturing systems', 'Customizable alerts and notifications']
    }, {
      title: 'Ensure Compliance & Quality',
      description: 'Maintain regulatory compliance with complete documentation and traceability.',
      points: ['Full maintenance history and calibration records', 'Quality control checkpoints and validations', 'Regulatory compliance reporting', 'Integration with quality management systems']
    }];
    this.demoUrl = 'https://tms.sharpfloornc.com/';
  }
  openFullDemo() {
    window.open('https://tms.sharpfloornc.com/', '_blank', 'noopener,noreferrer');
  }
  refreshDemo() {
    if (this.demoFrame?.nativeElement) {
      this.demoFrame.nativeElement.src = this.demoFrame.nativeElement.src;
    }
  }
}
TmsShowcaseComponent.ɵfac = function TmsShowcaseComponent_Factory(t) {
  return new (t || TmsShowcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer));
};
TmsShowcaseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TmsShowcaseComponent,
  selectors: [["app-tms-showcase"]],
  viewQuery: function TmsShowcaseComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.demoFrame = _t.first);
    }
  },
  decls: 76,
  vars: 6,
  consts: [[1, "tms-showcase-container"], [1, "hero-section", "animate-fade-in"], [1, "hero-overlay"], [1, "hero-content"], [1, "montserrat", "hero-title"], [1, "hero-tagline"], [1, "hero-badges"], [1, "badge"], [1, "hero-decoration"], [1, "demo-section"], [1, "demo-header"], [1, "section-title"], [1, "section-subtitle"], [1, "demo-controls"], ["mat-raised-button", "", "color", "primary", 1, "demo-button", 3, "click"], ["mat-stroked-button", "", 1, "demo-button", 3, "click"], [1, "demo-frame-container"], ["frameborder", "0", "loading", "lazy", "title", "Tool Management System Demo", 1, "demo-frame", 3, "src"], ["demoFrame", ""], [1, "frame-overlay", 3, "click"], [1, "overlay-content"], [1, "features-section", "animate-slide-in"], [1, "section-header"], [1, "features-grid"], ["class", "feature-card", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "tech-section"], [1, "tech-stack"], ["class", "tech-item", 4, "ngFor", "ngForOf"], [1, "benefits-section"], [1, "benefits-grid"], ["class", "benefit-card", 4, "ngFor", "ngForOf"], [1, "cta-section"], [1, "cta-content"], [1, "cta-buttons"], ["routerLink", "/home/contactus"], ["mat-raised-button", "", "color", "primary", 1, "cta-button"], ["mat-stroked-button", "", 1, "cta-button", "secondary", 3, "click"], [1, "feature-card"], [1, "feature-icon"], ["class", "feature-metrics", 4, "ngIf"], [1, "feature-metrics"], ["class", "metric", 4, "ngFor", "ngForOf"], [1, "metric"], [1, "metric-value"], [1, "metric-label"], [1, "tech-item"], [1, "tech-icon"], [3, "src", "alt", "error"], [1, "fallback-icon"], [1, "tech-name"], [1, "benefit-card"], [1, "benefit-number"], [1, "benefit-content"], [1, "benefit-points"], [4, "ngFor", "ngForOf"]],
  template: function TmsShowcaseComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Tool Management System");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Complete Digital Solution for Manufacturing Tool Control");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Real-Time Tracking");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Automated Check-In/Out");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Inventory Analytics");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Maintenance Scheduling");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "section", 9)(19, "div", 10)(20, "h2", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\uD83D\uDE80 Live Interactive Demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Explore our fully functional Tool Management System in action");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13)(25, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TmsShowcaseComponent_Template_button_click_25_listener() {
        return ctx.openFullDemo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "open_in_new");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Open Full Demo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TmsShowcaseComponent_Template_button_click_29_listener() {
        return ctx.refreshDemo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "refresh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Refresh Demo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "iframe", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "safeUrl");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TmsShowcaseComponent_Template_div_click_37_listener() {
        return ctx.openFullDemo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 20)(39, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "touch_app");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Click to interact with live demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "section", 21)(44, "div", 22)(45, "h2", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Key Features Demonstrated");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, TmsShowcaseComponent_div_48_Template, 9, 6, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "section", 25)(50, "div", 22)(51, "h2", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Built With Modern Technology");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Enterprise-grade architecture for reliability and scalability");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, TmsShowcaseComponent_div_56_Template, 7, 6, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "section", 28)(58, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, TmsShowcaseComponent_div_59_Template, 10, 4, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "section", 31)(61, "div", 32)(62, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Ready to Transform Your Tool Management?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Let's discuss how we can customize a tool management solution for your specific needs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 33)(67, "a", 34)(68, "button", 35)(69, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "contact_mail");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " Get Started Today ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TmsShowcaseComponent_Template_button_click_72_listener() {
        return ctx.openFullDemo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "play_arrow");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " Try Full Demo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 4, ctx.demoUrl), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.features);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.techStack);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.benefits);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_0__.SafeUrlPipe],
  styles: [".tms-showcase-container[_ngcontent-%COMP%] {\r\n    min-height: 100vh;\r\n    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);\r\n}\r\n\r\n\r\n.hero-section[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    color: white;\r\n    padding: 100px 40px 80px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n\r\n.hero-overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.hero-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    z-index: 2;\r\n}\r\n\r\n.hero-title[_ngcontent-%COMP%] {\r\n    font-size: 3.5rem;\r\n    font-weight: 800;\r\n    margin-bottom: 20px;\r\n    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.hero-tagline[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n    margin-bottom: 40px;\r\n    opacity: 0.95;\r\n    font-weight: 300;\r\n}\r\n\r\n.hero-badges[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    gap: 15px;\r\n    margin-top: 30px;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%] {\r\n    background: rgba(255, 255, 255, 0.2);\r\n    -webkit-backdrop-filter: blur(10px);\r\n            backdrop-filter: blur(10px);\r\n    padding: 10px 20px;\r\n    border-radius: 25px;\r\n    font-size: 0.9rem;\r\n    font-weight: 500;\r\n    border: 1px solid rgba(255, 255, 255, 0.3);\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255, 255, 255, 0.3);\r\n    transform: translateY(-2px);\r\n}\r\n\r\n.hero-decoration[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: -1px;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 60px;\r\n    background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 120\"><path fill=\"%23f8fafc\" d=\"M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z\"></path></svg>') no-repeat bottom;\r\n    background-size: cover;\r\n}\r\n\r\n\r\n.demo-section[_ngcontent-%COMP%] {\r\n    padding: 80px 40px;\r\n    max-width: 1400px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.demo-header[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    font-weight: 700;\r\n    color: #1a202c;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.section-subtitle[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    color: #64748b;\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.demo-controls[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 20px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.demo-button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    padding: 12px 24px;\r\n    font-weight: 500;\r\n}\r\n\r\n.demo-frame-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background: white;\r\n    border-radius: 12px;\r\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\r\n    overflow: hidden;\r\n    height: 700px;\r\n    border: 1px solid #e2e8f0;\r\n}\r\n\r\n.demo-frame[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    border: none;\r\n}\r\n\r\n.frame-overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: rgba(102, 126, 234, 0.05);\r\n    -webkit-backdrop-filter: blur(1px);\r\n            backdrop-filter: blur(1px);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease;\r\n    opacity: 0;\r\n}\r\n\r\n.frame-overlay[_ngcontent-%COMP%]:hover {\r\n    opacity: 1;\r\n    background: rgba(102, 126, 234, 0.1);\r\n}\r\n\r\n.overlay-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    background: rgba(255, 255, 255, 0.9);\r\n    padding: 15px 25px;\r\n    border-radius: 30px;\r\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\r\n    font-weight: 500;\r\n    color: #667eea;\r\n}\r\n\r\n\r\n.features-section[_ngcontent-%COMP%] {\r\n    padding: 80px 40px;\r\n    background: white;\r\n}\r\n\r\n.features-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\r\n    gap: 30px;\r\n    max-width: 1400px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.feature-card[_ngcontent-%COMP%] {\r\n    background: white;\r\n    padding: 30px;\r\n    border-radius: 12px;\r\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\r\n    text-align: center;\r\n    transition: all 0.3s ease;\r\n    border: 1px solid #f1f5f9;\r\n    animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out forwards;\r\n    opacity: 0;\r\n    transform: translateY(30px);\r\n}\r\n\r\n.feature-card[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-5px);\r\n    box-shadow: 0 8px 30px rgba(102, 126, 234, 0.15);\r\n}\r\n\r\n.feature-icon[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n    height: 60px;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 0 auto 20px;\r\n}\r\n\r\n.feature-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 28px;\r\n    width: 28px;\r\n    height: 28px;\r\n}\r\n\r\n.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n    font-weight: 600;\r\n    color: #1a202c;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #64748b;\r\n    line-height: 1.6;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.feature-metrics[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-top: 20px;\r\n    padding-top: 20px;\r\n    border-top: 1px solid #f1f5f9;\r\n}\r\n\r\n.metric[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.metric-value[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    color: #667eea;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.metric-label[_ngcontent-%COMP%] {\r\n    font-size: 0.85rem;\r\n    color: #64748b;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n\r\n.tech-section[_ngcontent-%COMP%] {\r\n    padding: 80px 40px;\r\n    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);\r\n}\r\n\r\n.tech-stack[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    gap: 30px;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.tech-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 15px;\r\n    padding: 25px;\r\n    background: white;\r\n    border-radius: 12px;\r\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);\r\n    transition: all 0.3s ease;\r\n    min-width: 120px;\r\n}\r\n\r\n.tech-item[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.tech-icon[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\n.tech-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: contain;\r\n}\r\n\r\n.tech-name[_ngcontent-%COMP%] {\r\n    font-weight: 500;\r\n    color: #1a202c;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n\r\n.benefits-section[_ngcontent-%COMP%] {\r\n    padding: 80px 40px;\r\n    background: white;\r\n}\r\n\r\n.benefits-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\r\n    gap: 40px;\r\n    max-width: 1400px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.benefit-card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 25px;\r\n    padding: 30px;\r\n    background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);\r\n    border-radius: 12px;\r\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);\r\n    border-left: 4px solid #667eea;\r\n}\r\n\r\n.benefit-number[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    color: white;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 1.2rem;\r\n    font-weight: 700;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.benefit-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n    font-weight: 600;\r\n    color: #1a202c;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.benefit-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #64748b;\r\n    line-height: 1.6;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.benefit-points[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.benefit-points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    margin-bottom: 10px;\r\n    color: #64748b;\r\n}\r\n\r\n.benefit-points[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n    color: #10b981;\r\n    font-size: 18px;\r\n    width: 18px;\r\n    height: 18px;\r\n}\r\n\r\n\r\n.cta-section[_ngcontent-%COMP%] {\r\n    padding: 80px 40px;\r\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.cta-content[_ngcontent-%COMP%] {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    font-weight: 700;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n    margin-bottom: 40px;\r\n    opacity: 0.9;\r\n}\r\n\r\n.cta-buttons[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 20px;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.cta-button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    padding: 15px 30px;\r\n    font-size: 1.1rem;\r\n    font-weight: 500;\r\n}\r\n\r\n.cta-button.secondary[_ngcontent-%COMP%] {\r\n    background: rgba(255, 255, 255, 0.1);\r\n    color: white;\r\n    border: 1px solid rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n\r\n@keyframes _ngcontent-%COMP%_fadeInUp {\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n.animate-fade-in[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_fadeIn 0.8s ease-out;\r\n}\r\n\r\n.animate-slide-in[_ngcontent-%COMP%] {\r\n    animation: _ngcontent-%COMP%_slideInUp 0.8s ease-out;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_fadeIn {\r\n    from { opacity: 0; }\r\n    to { opacity: 1; }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_slideInUp {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(30px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 768px) {\r\n    .hero-title[_ngcontent-%COMP%] {\r\n        font-size: 2.5rem;\r\n    }\r\n    \r\n    .hero-tagline[_ngcontent-%COMP%] {\r\n        font-size: 1.1rem;\r\n    }\r\n    \r\n    .section-title[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n    \r\n    .demo-section[_ngcontent-%COMP%], .features-section[_ngcontent-%COMP%], .benefits-section[_ngcontent-%COMP%], .cta-section[_ngcontent-%COMP%] {\r\n        padding: 60px 20px;\r\n    }\r\n    \r\n    .features-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    \r\n    .benefits-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    \r\n    .benefit-card[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        text-align: center;\r\n    }\r\n    \r\n    .demo-frame-container[_ngcontent-%COMP%] {\r\n        height: 500px;\r\n    }\r\n    \r\n    .cta-buttons[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90bXMtc2hvd2Nhc2UvdG1zLXNob3djYXNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsNkRBQTZEO0FBQ2pFOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGtCQUFrQjtJQUNsQiw2REFBNkQ7SUFDN0QsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiwwYkFBMGI7SUFDMWIsc0JBQXNCO0FBQzFCOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFF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LGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLDBDQUEwQztBQUM5Qzs7QUFFQSxlQUFlO0FBQ2Y7SUFDSTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLE9BQU8sVUFBVSxFQUFFO0lBQ25CLEtBQUssVUFBVSxFQUFFO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxVQUFVO1FBQ1Ysd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBOzs7O1FBSUksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIudG1zLXNob3djYXNlLWNvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGZhZmMgMCUsICNlMmU4ZjAgMTAwJSk7XHJcbn1cclxuXHJcbi8qIEhlcm8gU2VjdGlvbiAqL1xyXG4uaGVyby1zZWN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMDBweCA0MHB4IDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaGVyby1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmhlcm8tY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmhlcm8tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHRleHQtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4uaGVyby10YWdsaW5lIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIG9wYWNpdHk6IDAuOTU7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uaGVyby1iYWRnZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uYmFkZ2U6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG59XHJcblxyXG4uaGVyby1kZWNvcmF0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTFweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTQ0MCAxMjBcIj48cGF0aCBmaWxsPVwiJTIzZjhmYWZjXCIgZD1cIk0wLDMyTDQ4LDM3LjNDOTYsNDMsMTkyLDUzLDI4OCw1OC43QzM4NCw2NCw0ODAsNjQsNTc2LDU4LjdDNjcyLDUzLDc2OCw0Myw4NjQsNDhDOTYwLDUzLDEwNTYsNzUsMTE1Miw4MEMxMjQ4LDg1LDEzNDQsNzUsMTM5Miw2OS4zTDE0NDAsNjRMMTQ0MCwxMjBMMTM5MiwxMjBDMTM0NCwxMjAsMTI0OCwxMjAsMTE1MiwxMjBDMTA1NiwxMjAsOTYwLDEyMCw4NjQsMTIwQzc2OCwxMjAsNjcyLDEyMCw1NzYsMTIwQzQ4MCwxMjAsMzg0LDEyMCwyODgsMTIwQzE5MiwxMjAsOTYsMTIwLDQ4LDEyMEwwLDEyMFpcIj48L3BhdGg+PC9zdmc+Jykgbm8tcmVwZWF0IGJvdHRvbTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi8qIERlbW8gU2VjdGlvbiAqL1xyXG4uZGVtby1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDgwcHggNDBweDtcclxuICAgIG1heC13aWR0aDogMTQwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5kZW1vLWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzFhMjAyYztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5kZW1vLWNvbnRyb2xzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5kZW1vLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmRlbW8tZnJhbWUtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxufVxyXG5cclxuLmRlbW8tZnJhbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5mcmFtZS1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4wNSk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmZyYW1lLW92ZXJsYXk6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4xKTtcclxufVxyXG5cclxuLm92ZXJsYXktY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzY2N2VlYTtcclxufVxyXG5cclxuLyogRmVhdHVyZXMgU2VjdGlvbiAqL1xyXG4uZmVhdHVyZXMtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmZlYXR1cmVzLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmZlYXR1cmUtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbiAgICBhbmltYXRpb246IGZhZGVJblVwIDAuNnMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xyXG59XHJcblxyXG4uZmVhdHVyZS1jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMwcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjE1KTtcclxufVxyXG5cclxuLmZlYXR1cmUtaWNvbiB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcclxufVxyXG5cclxuLmZlYXR1cmUtaWNvbiBtYXQtaWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxufVxyXG5cclxuLmZlYXR1cmUtY2FyZCBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzFhMjAyYztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlLWNhcmQgcCB7XHJcbiAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZmVhdHVyZS1tZXRyaWNzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG59XHJcblxyXG4ubWV0cmljIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1ldHJpYy12YWx1ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjNjY3ZWVhO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ubWV0cmljLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG5cclxuLyogVGVjaG5vbG9neSBTdGFjayAqL1xyXG4udGVjaC1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDgwcHggNDBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGZhZmMgMCUsICNlMmU4ZjAgMTAwJSk7XHJcbn1cclxuXHJcbi50ZWNoLXN0YWNrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogMzBweDtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi50ZWNoLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4udGVjaC1pdGVtOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4udGVjaC1pY29uIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4udGVjaC1pY29uIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbi50ZWNoLW5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMWEyMDJjO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi8qIEJlbmVmaXRzIFNlY3Rpb24gKi9cclxuLmJlbmVmaXRzLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogODBweCA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5iZW5lZml0cy1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwMHB4LCAxZnIpKTtcclxuICAgIGdhcDogNDBweDtcclxuICAgIG1heC13aWR0aDogMTQwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5iZW5lZml0LWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMjVweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmYWZjIDAlLCAjZmZmZmZmIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzY2N2VlYTtcclxufVxyXG5cclxuLmJlbmVmaXQtbnVtYmVyIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLmJlbmVmaXQtY29udGVudCBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzFhMjAyYztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5iZW5lZml0LWNvbnRlbnQgcCB7XHJcbiAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uYmVuZWZpdC1wb2ludHMge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5iZW5lZml0LXBvaW50cyBsaSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogIzY0NzQ4YjtcclxufVxyXG5cclxuLmJlbmVmaXQtcG9pbnRzIG1hdC1pY29uIHtcclxuICAgIGNvbG9yOiAjMTBiOTgxO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi8qIENhbGwgdG8gQWN0aW9uICovXHJcbi5jdGEtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY3RhLWNvbnRlbnQge1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uY3RhLWNvbnRlbnQgaDIge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmN0YS1jb250ZW50IHAge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4uY3RhLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uY3RhLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uY3RhLWJ1dHRvbi5zZWNvbmRhcnkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG59XHJcblxyXG4vKiBBbmltYXRpb25zICovXHJcbkBrZXlmcmFtZXMgZmFkZUluVXAge1xyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYW5pbWF0ZS1mYWRlLWluIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuOHMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5hbmltYXRlLXNsaWRlLWluIHtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVJblVwIDAuOHMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgICB0byB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluVXAge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmhlcm8tdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaGVyby10YWdsaW5lIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRlbW8tc2VjdGlvbixcclxuICAgIC5mZWF0dXJlcy1zZWN0aW9uLFxyXG4gICAgLmJlbmVmaXRzLXNlY3Rpb24sXHJcbiAgICAuY3RhLXNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDYwcHggMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZlYXR1cmVzLWdyaWQge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYmVuZWZpdHMtZ3JpZCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5iZW5lZml0LWNhcmQge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZGVtby1mcmFtZS1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jdGEtYnV0dG9ucyB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5378:
/*!*******************************************************************************!*\
  !*** ./src/app/components/tools/tap-drill-chart/tap-drill-chart.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TapDrillChartComponent": () => (/* binding */ TapDrillChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);












function TapDrillChartComponent_th_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Thread Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TapDrillChartComponent_td_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36)(1, "div", 37)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r1.getCategoryColor(element_r13.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getCategoryIcon(element_r13.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, element_r13.category), " ");
  }
}
function TapDrillChartComponent_th_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "precision_manufacturing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Tap Size ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TapDrillChartComponent_td_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36)(1, "div", 38)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r14.tapSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getThreadPitch(element_r14));
  }
}
function TapDrillChartComponent_th_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "architecture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Drill Size ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TapDrillChartComponent_td_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36)(1, "div", 39)(2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r15.drillSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, element_r15.drillDecimal, "1.3-3"), "\\\"");
  }
}
function TapDrillChartComponent_th_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Application ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TapDrillChartComponent_td_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36)(1, "div", 42)(2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r16.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r16.percentThread, "% Thread");
  }
}
function TapDrillChartComponent_th_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Purchase ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TapDrillChartComponent_td_65_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TapDrillChartComponent_td_65_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const element_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.openBuyLink(element_r17.buyLink));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function TapDrillChartComponent_td_65_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TapDrillChartComponent_td_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TapDrillChartComponent_td_65_button_1_Template, 3, 0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TapDrillChartComponent_td_65_ng_template_2_Template, 2, 0, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r17.buyLink)("ngIfElse", _r19);
  }
}
function TapDrillChartComponent_tr_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 49);
  }
}
function TapDrillChartComponent_tr_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 50);
  }
  if (rf & 2) {
    const row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](row_r24.category + "-row");
  }
}
function TapDrillChartComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "search_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No results found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Try adjusting your search terms or filter criteria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class TapDrillChartComponent {
  constructor() {
    this.searchTerm = '';
    this.selectedCategory = 'all';
    this.filteredTapData = [];
    this.displayedColumns = ['category', 'tapSize', 'drillInfo', 'description', 'buyLink'];
    this.tapDrillData = [
    // Unified Thread Standard (UNC/UNF)
    {
      tapSize: '#4-40',
      threadsPerInch: 40,
      drillSize: '#43',
      drillDecimal: 0.089,
      percentThread: 75,
      category: 'unified',
      description: 'Machine Screw',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~43/'
    }, {
      tapSize: '#4-48',
      threadsPerInch: 48,
      drillSize: '#42',
      drillDecimal: 0.093,
      percentThread: 75,
      category: 'unified',
      description: 'Machine Screw (Fine)',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~42/'
    }, {
      tapSize: '#6-32',
      threadsPerInch: 32,
      drillSize: '#36',
      drillDecimal: 0.106,
      percentThread: 75,
      category: 'unified',
      description: 'Machine Screw',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~36/'
    }, {
      tapSize: '#6-40',
      threadsPerInch: 40,
      drillSize: '#33',
      drillDecimal: 0.113,
      percentThread: 75,
      category: 'unified',
      description: 'Machine Screw (Fine)',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~33/'
    }, {
      tapSize: '#8-32',
      threadsPerInch: 32,
      drillSize: '#29',
      drillDecimal: 0.136,
      percentThread: 75,
      category: 'unified',
      description: 'Machine Screw',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~29/'
    }, {
      tapSize: '#8-36',
      threadsPerInch: 36,
      drillSize: '#29',
      drillDecimal: 0.136,
      percentThread: 75,
      category: 'unified',
      description: 'Machine Screw (Fine)',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~29/'
    }, {
      tapSize: '#10-24',
      threadsPerInch: 24,
      drillSize: '#25',
      drillDecimal: 0.149,
      percentThread: 75,
      category: 'unified',
      description: 'Machine Screw',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~25/'
    }, {
      tapSize: '#10-32',
      threadsPerInch: 32,
      drillSize: '#21',
      drillDecimal: 0.159,
      percentThread: 75,
      category: 'unified',
      description: 'Machine Screw (Fine)',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~21/'
    }, {
      tapSize: '#12-24',
      threadsPerInch: 24,
      drillSize: '#16',
      drillDecimal: 0.177,
      percentThread: 75,
      category: 'unified',
      description: 'Machine Screw',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~16/'
    }, {
      tapSize: '#12-28',
      threadsPerInch: 28,
      drillSize: '#14',
      drillDecimal: 0.182,
      percentThread: 75,
      category: 'unified',
      description: 'Machine Screw (Fine)',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~14/'
    }, {
      tapSize: '1/4"-20',
      threadsPerInch: 20,
      drillSize: '#7',
      drillDecimal: 0.201,
      percentThread: 75,
      category: 'unified',
      description: 'Cap Screw (Coarse)',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~7/'
    }, {
      tapSize: '1/4"-28',
      threadsPerInch: 28,
      drillSize: '#3',
      drillDecimal: 0.213,
      percentThread: 75,
      category: 'unified',
      description: 'Cap Screw (Fine)',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~3/'
    }, {
      tapSize: '5/16"-18',
      threadsPerInch: 18,
      drillSize: 'F',
      drillDecimal: 0.257,
      percentThread: 75,
      category: 'unified',
      description: 'Cap Screw (Coarse)',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~f/'
    }, {
      tapSize: '5/16"-24',
      threadsPerInch: 24,
      drillSize: 'I',
      drillDecimal: 0.272,
      percentThread: 75,
      category: 'unified',
      description: 'Cap Screw (Fine)',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~i/'
    }, {
      tapSize: '3/8"-16',
      threadsPerInch: 16,
      drillSize: '5/16"',
      drillDecimal: 0.312,
      percentThread: 75,
      category: 'unified',
      description: 'Cap Screw (Coarse)',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~5-16/'
    }, {
      tapSize: '3/8"-24',
      threadsPerInch: 24,
      drillSize: 'Q',
      drillDecimal: 0.332,
      percentThread: 75,
      category: 'unified',
      description: 'Cap Screw (Fine)',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~q/'
    }, {
      tapSize: '7/16"-14',
      threadsPerInch: 14,
      drillSize: 'U',
      drillDecimal: 0.368,
      percentThread: 75,
      category: 'unified',
      description: 'Cap Screw (Coarse)',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~u/'
    }, {
      tapSize: '7/16"-20',
      threadsPerInch: 20,
      drillSize: '25/64"',
      drillDecimal: 0.391,
      percentThread: 75,
      category: 'unified',
      description: 'Cap Screw (Fine)',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~25-64/'
    }, {
      tapSize: '1/2"-13',
      threadsPerInch: 13,
      drillSize: '27/64"',
      drillDecimal: 0.422,
      percentThread: 75,
      category: 'unified',
      description: 'Cap Screw (Coarse)',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~27-64/'
    }, {
      tapSize: '1/2"-20',
      threadsPerInch: 20,
      drillSize: '29/64"',
      drillDecimal: 0.453,
      percentThread: 75,
      category: 'unified',
      description: 'Cap Screw (Fine)',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~29-64/'
    }, {
      tapSize: '9/16"-12',
      threadsPerInch: 12,
      drillSize: '31/64"',
      drillDecimal: 0.484,
      percentThread: 75,
      category: 'unified',
      description: 'Cap Screw (Coarse)',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~31-64/'
    }, {
      tapSize: '9/16"-18',
      threadsPerInch: 18,
      drillSize: '33/64"',
      drillDecimal: 0.516,
      percentThread: 75,
      category: 'unified',
      description: 'Cap Screw (Fine)',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~33-64/'
    }, {
      tapSize: '5/8"-11',
      threadsPerInch: 11,
      drillSize: '17/32"',
      drillDecimal: 0.531,
      percentThread: 75,
      category: 'unified',
      description: 'Cap Screw (Coarse)',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~17-32/'
    }, {
      tapSize: '5/8"-18',
      threadsPerInch: 18,
      drillSize: '37/64"',
      drillDecimal: 0.578,
      percentThread: 75,
      category: 'unified',
      description: 'Cap Screw (Fine)',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~37-64/'
    }, {
      tapSize: '3/4"-10',
      threadsPerInch: 10,
      drillSize: '21/32"',
      drillDecimal: 0.656,
      percentThread: 75,
      category: 'unified',
      description: 'Cap Screw (Coarse)',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~21-32/'
    }, {
      tapSize: '3/4"-16',
      threadsPerInch: 16,
      drillSize: '11/16"',
      drillDecimal: 0.688,
      percentThread: 75,
      category: 'unified',
      description: 'Cap Screw (Fine)',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~11-16/'
    },
    // Metric Thread Standard
    {
      tapSize: 'M3x0.5',
      threadsPerInch: 50.8,
      drillSize: '2.5mm',
      drillDecimal: 0.098,
      percentThread: 75,
      category: 'metric',
      description: 'Fine Pitch',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~2-5-mm/'
    }, {
      tapSize: 'M4x0.7',
      threadsPerInch: 36.3,
      drillSize: '3.3mm',
      drillDecimal: 0.130,
      percentThread: 75,
      category: 'metric',
      description: 'Standard Pitch',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~3-3-mm/'
    }, {
      tapSize: 'M5x0.8',
      threadsPerInch: 31.8,
      drillSize: '4.2mm',
      drillDecimal: 0.165,
      percentThread: 75,
      category: 'metric',
      description: 'Standard Pitch',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~4-2-mm/'
    }, {
      tapSize: 'M6x1.0',
      threadsPerInch: 25.4,
      drillSize: '5.0mm',
      drillDecimal: 0.197,
      percentThread: 75,
      category: 'metric',
      description: 'Standard Pitch',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~5-mm/'
    }, {
      tapSize: 'M8x1.25',
      threadsPerInch: 20.3,
      drillSize: '6.8mm',
      drillDecimal: 0.268,
      percentThread: 75,
      category: 'metric',
      description: 'Standard Pitch',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~6-8-mm/'
    }, {
      tapSize: 'M10x1.5',
      threadsPerInch: 16.9,
      drillSize: '8.5mm',
      drillDecimal: 0.335,
      percentThread: 75,
      category: 'metric',
      description: 'Standard Pitch',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~8-5-mm/'
    }, {
      tapSize: 'M12x1.75',
      threadsPerInch: 14.5,
      drillSize: '10.25mm',
      drillDecimal: 0.404,
      percentThread: 75,
      category: 'metric',
      description: 'Standard Pitch',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~10-25-mm/'
    }, {
      tapSize: 'M14x2.0',
      threadsPerInch: 12.7,
      drillSize: '12.0mm',
      drillDecimal: 0.472,
      percentThread: 75,
      category: 'metric',
      description: 'Standard Pitch',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~12-mm/'
    }, {
      tapSize: 'M16x2.0',
      threadsPerInch: 12.7,
      drillSize: '14.0mm',
      drillDecimal: 0.551,
      percentThread: 75,
      category: 'metric',
      description: 'Standard Pitch',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~14-mm/'
    }, {
      tapSize: 'M20x2.5',
      threadsPerInch: 10.2,
      drillSize: '17.5mm',
      drillDecimal: 0.689,
      percentThread: 75,
      category: 'metric',
      description: 'Standard Pitch',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~17-5-mm/'
    },
    // NPT (National Pipe Thread) - Tapered
    {
      tapSize: '1/8"-27',
      threadsPerInch: 27,
      drillSize: 'R',
      drillDecimal: 0.339,
      percentThread: 75,
      category: 'npt',
      description: 'Pipe Thread',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~r/'
    }, {
      tapSize: '1/4"-18',
      threadsPerInch: 18,
      drillSize: '7/16"',
      drillDecimal: 0.438,
      percentThread: 75,
      category: 'npt',
      description: 'Pipe Thread',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~7-16/'
    }, {
      tapSize: '3/8"-18',
      threadsPerInch: 18,
      drillSize: '37/64"',
      drillDecimal: 0.578,
      percentThread: 75,
      category: 'npt',
      description: 'Pipe Thread',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~37-64/'
    }, {
      tapSize: '1/2"-14',
      threadsPerInch: 14,
      drillSize: '23/32"',
      drillDecimal: 0.719,
      percentThread: 75,
      category: 'npt',
      description: 'Pipe Thread',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~23-32/'
    }, {
      tapSize: '3/4"-14',
      threadsPerInch: 14,
      drillSize: '59/64"',
      drillDecimal: 0.922,
      percentThread: 75,
      category: 'npt',
      description: 'Pipe Thread',
      buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~59-64/'
    }];
  }
  ngOnInit() {
    this.filterData();
  }
  filterData() {
    this.filteredTapData = this.tapDrillData.filter(item => {
      const matchesSearch = this.searchTerm === '' || item.tapSize.toLowerCase().includes(this.searchTerm.toLowerCase()) || item.drillSize.toLowerCase().includes(this.searchTerm.toLowerCase()) || item.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategory === 'all' || item.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }
  getCategoryColor(category) {
    switch (category) {
      case 'unified':
        return '#007bff';
      case 'metric':
        return '#28a745';
      case 'npt':
        return '#fd7e14';
      case 'bspt':
        return '#6f42c1';
      default:
        return '#6c757d';
    }
  }
  getCategoryIcon(category) {
    switch (category) {
      case 'unified':
        return 'flag';
      case 'metric':
        return 'public';
      case 'npt':
        return 'plumbing';
      case 'bspt':
        return 'engineering';
      default:
        return 'build';
    }
  }
  exportToCSV() {
    let csv = 'Tap Size,Threads Per Inch,Drill Size,Drill Decimal,Percent Thread,Category,Description\n';
    for (const item of this.filteredTapData) {
      csv += `"${item.tapSize}","${item.threadsPerInch}","${item.drillSize}","${item.drillDecimal}","${item.percentThread}%","${item.category}","${item.description}"\n`;
    }
    const blob = new Blob([csv], {
      type: 'text/csv'
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tap-drill-chart.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }
  openBuyLink(link) {
    if (link) {
      window.open(link, '_blank');
    }
  }
  getThreadPitch(item) {
    if (item.category === 'metric') {
      const pitch = item.tapSize.split('x')[1];
      return pitch ? `${pitch}mm` : 'N/A';
    } else {
      return `${item.threadsPerInch} TPI`;
    }
  }
  getUnifiedCount() {
    return this.filteredTapData.filter(item => item.category === 'unified').length;
  }
  getMetricCount() {
    return this.filteredTapData.filter(item => item.category === 'metric').length;
  }
  getNptCount() {
    return this.filteredTapData.filter(item => item.category === 'npt').length;
  }
  getTotalCount() {
    return this.filteredTapData.length;
  }
}
TapDrillChartComponent.ɵfac = function TapDrillChartComponent_Factory(t) {
  return new (t || TapDrillChartComponent)();
};
TapDrillChartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TapDrillChartComponent,
  selectors: [["app-tap-drill-chart"]],
  decls: 165,
  vars: 11,
  consts: [[1, "controls-section"], [1, "search-controls"], ["appearance", "outline", 1, "search-field"], ["matInput", "", "placeholder", "e.g., 1/4, #7, M6", 3, "ngModel", "ngModelChange", "input"], ["matSuffix", ""], ["appearance", "outline", 1, "category-field"], [3, "value", "valueChange", "selectionChange"], ["value", "all"], ["value", "unified"], ["value", "metric"], ["value", "npt"], ["mat-raised-button", "", "color", "primary", 1, "export-btn", 3, "click"], [1, "info-cards"], [1, "info-card"], [1, "table-container"], ["mat-table", "", "matSort", "", 1, "tap-drill-table", 3, "dataSource"], ["matColumnDef", "category"], ["mat-header-cell", "", "class", "center-align", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "center-align", 4, "matCellDef"], ["matColumnDef", "tapSize"], ["matColumnDef", "drillInfo"], ["matColumnDef", "description"], ["matColumnDef", "buyLink"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "class", 4, "matRowDef", "matRowDefColumns"], ["class", "no-data", 4, "ngIf"], [1, "summary-section"], [1, "summary-stats"], [1, "stat-card"], [1, "stat-info"], [1, "stat-number"], [1, "stat-label"], [1, "reference-section"], [1, "reference-cards"], [1, "reference-card"], ["mat-header-cell", "", 1, "center-align"], ["mat-cell", "", 1, "center-align"], [1, "category-badge"], [1, "tap-size"], [1, "drill-info"], [1, "drill-size"], [1, "drill-decimal"], [1, "description-info"], [1, "app-type"], [1, "thread-percent"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Buy drill bit from McMaster-Carr", 3, "click", 4, "ngIf", "ngIfElse"], ["noBuyLink", ""], ["mat-icon-button", "", "color", "primary", "matTooltip", "Buy drill bit from McMaster-Carr", 3, "click"], [1, "no-link"], ["mat-header-row", ""], ["mat-row", ""], [1, "no-data"]],
  template: function TapDrillChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-form-field", 2)(3, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search taps, drills, or description");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TapDrillChartComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.searchTerm = $event;
      })("input", function TapDrillChartComponent_Template_input_input_5_listener() {
        return ctx.filterData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 5)(9, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Filter by Thread Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TapDrillChartComponent_Template_mat_select_valueChange_11_listener($event) {
        return ctx.selectedCategory = $event;
      })("selectionChange", function TapDrillChartComponent_Template_mat_select_selectionChange_11_listener() {
        return ctx.filterData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "All Thread Types");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Unified (UNC/UNF)");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Metric (ISO)");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "NPT (Pipe)");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TapDrillChartComponent_Template_button_click_20_listener() {
        return ctx.exportToCSV();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "download");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Export CSV ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12)(25, "div", 13)(26, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "info");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div")(29, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Tap Drill Selection");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Choose drill size for 75% thread engagement");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13)(34, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "precision_manufacturing");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div")(37, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Unified, Metric, and NPT thread standards");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13)(42, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "shopping_cart");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div")(45, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Direct Purchase Links");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Click buy links for McMaster-Carr ordering");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14)(50, "table", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](51, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, TapDrillChartComponent_th_52_Template, 4, 0, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, TapDrillChartComponent_td_53_Template, 6, 6, "td", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](54, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, TapDrillChartComponent_th_55_Template, 4, 0, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, TapDrillChartComponent_td_56_Template, 6, 2, "td", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](57, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, TapDrillChartComponent_th_58_Template, 4, 0, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, TapDrillChartComponent_td_59_Template, 7, 5, "td", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](60, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, TapDrillChartComponent_th_61_Template, 4, 0, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, TapDrillChartComponent_td_62_Template, 6, 2, "td", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](63, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, TapDrillChartComponent_th_64_Template, 4, 0, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, TapDrillChartComponent_td_65_Template, 4, 2, "td", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, TapDrillChartComponent_tr_66_Template, 1, 0, "tr", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, TapDrillChartComponent_tr_67_Template, 1, 2, "tr", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, TapDrillChartComponent_div_68_Template, 7, 0, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 26)(70, "div", 27)(71, "div", 28)(72, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "straighten");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 29)(75, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Tap Sizes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 28)(80, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "flag");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 29)(83, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Unified");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 28)(88, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "public");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 29)(91, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Metric");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 28)(96, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "plumbing");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 29)(99, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "NPT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 32)(104, "h3")(105, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "school");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Quick Reference Guide ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 33)(109, "div", 34)(110, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Thread Engagement");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "ul")(113, "li")(114, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "75%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " - Standard for most applications");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li")(118, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "65%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " - Minimum for structural loads");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li")(122, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "85%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " - Maximum practical engagement");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 34)(126, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Thread Types");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "ul")(129, "li")(130, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "UNC");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " - Unified National Coarse");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li")(134, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "UNF");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " - Unified National Fine");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li")(138, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Metric");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " - ISO standard threads");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li")(142, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "NPT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " - National Pipe Thread (tapered)");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 34)(146, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Drill Selection Tips");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "ul")(149, "li")(150, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Harder materials");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " - Use larger drill (70% thread)");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li")(154, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Blind holes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " - Consider clearance for chips");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li")(158, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Through holes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " - Standard 75% engagement");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "li")(162, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Aluminum");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " - Can use smaller drill (80% thread)");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchTerm);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedCategory);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getTotalCount(), " Sizes Available");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.filteredTapData);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredTapData.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTotalCount());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getUnifiedCount());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getMetricCount());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getNptCount());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelect, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.TitleCasePipe],
  styles: [".controls-section[_ngcontent-%COMP%] {\r\n  background: #f8f9fa;\r\n  padding: 20px;\r\n  border-radius: 12px;\r\n  margin-bottom: 30px;\r\n  border: 1px solid #e0e0e0;\r\n}\r\n\r\n.search-controls[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 20px;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.search-field[_ngcontent-%COMP%] {\r\n  flex: 2;\r\n  min-width: 300px;\r\n}\r\n\r\n.category-field[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  min-width: 200px;\r\n}\r\n\r\n.export-btn[_ngcontent-%COMP%] {\r\n  min-width: 140px;\r\n}\r\n\r\n.info-cards[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n  gap: 15px;\r\n}\r\n\r\n.info-card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  background: white;\r\n  padding: 15px;\r\n  border-radius: 8px;\r\n  border: 1px solid #ddd;\r\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\r\n}\r\n\r\n.info-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n  color: #007bff;\r\n  font-size: 24px;\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.info-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  font-size: 14px;\r\n  display: block;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.info-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #666;\r\n  font-size: 12px;\r\n  margin: 0;\r\n}\r\n\r\n\r\n.table-container[_ngcontent-%COMP%] {\r\n  background: white;\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\r\n  border: 1px solid #e0e0e0;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.tap-drill-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.tap-drill-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  color: white;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  padding: 16px 8px;\r\n  border-bottom: none;\r\n}\r\n\r\n.tap-drill-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n  color: white;\r\n  margin-right: 8px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.tap-drill-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\r\n  padding: 12px 8px;\r\n  border-bottom: 1px solid #f0f0f0;\r\n}\r\n\r\n.center-align[_ngcontent-%COMP%] {\r\n  text-align: center !important;\r\n}\r\n\r\n\r\n.category-badge[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n  padding: 6px 12px;\r\n  border-radius: 20px;\r\n  color: white;\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.5px;\r\n  justify-content: center;\r\n  min-width: 80px;\r\n}\r\n\r\n.category-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n  font-size: 16px !important;\r\n  width: 16px !important;\r\n  height: 16px !important;\r\n}\r\n\r\n\r\n.tap-size[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2px;\r\n}\r\n\r\n.tap-size[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: #333;\r\n  font-family: 'Courier New', monospace;\r\n}\r\n\r\n.tap-size[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  font-size: 11px;\r\n  color: #666;\r\n  background: #f0f0f0;\r\n  padding: 2px 6px;\r\n  border-radius: 10px;\r\n}\r\n\r\n\r\n.drill-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 4px;\r\n}\r\n\r\n.drill-size[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: #007bff;\r\n  font-family: 'Courier New', monospace;\r\n}\r\n\r\n.drill-decimal[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  color: #666;\r\n  background: #e3f2fd;\r\n  padding: 2px 8px;\r\n  border-radius: 12px;\r\n  font-family: 'Courier New', monospace;\r\n}\r\n\r\n\r\n.description-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4px;\r\n}\r\n\r\n.app-type[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  color: #333;\r\n  font-size: 14px;\r\n}\r\n\r\n.thread-percent[_ngcontent-%COMP%] {\r\n  font-size: 11px;\r\n  color: #28a745;\r\n  background: #d4edda;\r\n  padding: 2px 6px;\r\n  border-radius: 8px;\r\n  align-self: center;\r\n}\r\n\r\n\r\n.no-link[_ngcontent-%COMP%] {\r\n  color: #999;\r\n  font-style: italic;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n.mat-mdc-row[_ngcontent-%COMP%] {\r\n  transition: background-color 0.2s ease;\r\n}\r\n\r\n.mat-mdc-row[_ngcontent-%COMP%]:hover {\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n.unified-row[_ngcontent-%COMP%] {\r\n  border-left: 4px solid #007bff;\r\n}\r\n\r\n.metric-row[_ngcontent-%COMP%] {\r\n  border-left: 4px solid #28a745;\r\n}\r\n\r\n.npt-row[_ngcontent-%COMP%] {\r\n  border-left: 4px solid #fd7e14;\r\n}\r\n\r\n\r\n.no-data[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 60px 20px;\r\n  color: #666;\r\n}\r\n\r\n.no-data[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n  font-size: 48px;\r\n  width: 48px;\r\n  height: 48px;\r\n  color: #ccc;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.no-data[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  color: #555;\r\n  margin: 0 0 10px 0;\r\n}\r\n\r\n.no-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #777;\r\n}\r\n\r\n\r\n.summary-section[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.summary-stats[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  gap: 20px;\r\n}\r\n\r\n.stat-card[_ngcontent-%COMP%] {\r\n  background: white;\r\n  padding: 20px;\r\n  border-radius: 12px;\r\n  box-shadow: 0 4px 8px rgba(0,0,0,0.1);\r\n  border: 1px solid #e0e0e0;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 15px;\r\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\r\n}\r\n\r\n.stat-card[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 6px 16px rgba(0,0,0,0.15);\r\n}\r\n\r\n.stat-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n  width: 32px;\r\n  height: 32px;\r\n  color: #667eea;\r\n}\r\n\r\n.stat-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.stat-number[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  color: #333;\r\n}\r\n\r\n.stat-label[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  color: #666;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n\r\n.reference-section[_ngcontent-%COMP%] {\r\n  background: #f8f9fa;\r\n  padding: 30px;\r\n  border-radius: 12px;\r\n  border: 1px solid #e0e0e0;\r\n}\r\n\r\n.reference-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  color: #333;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.reference-cards[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n  gap: 20px;\r\n}\r\n\r\n.reference-card[_ngcontent-%COMP%] {\r\n  background: white;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 6px rgba(0,0,0,0.1);\r\n  border: 1px solid #ddd;\r\n}\r\n\r\n.reference-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  margin: 0 0 15px 0;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n\r\n.reference-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.reference-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 6px 0;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  font-size: 14px;\r\n}\r\n\r\n.reference-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.reference-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #007bff;\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n@media (max-width: 768px) {\r\n  .search-controls[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n  }\r\n  \r\n  .search-field[_ngcontent-%COMP%], .category-field[_ngcontent-%COMP%] {\r\n    min-width: auto;\r\n    width: 100%;\r\n  }\r\n  \r\n  .summary-stats[_ngcontent-%COMP%], .reference-cards[_ngcontent-%COMP%], .info-cards[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  \r\n  .tap-drill-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%], .tap-drill-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\r\n    padding: 8px 4px;\r\n  }\r\n  \r\n  .category-badge[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n    padding: 4px 8px;\r\n    min-width: 60px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90b29scy90YXAtZHJpbGwtY2hhcnQvdGFwLWRyaWxsLWNoYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCO0FBQ3JCO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNDQUFzQztFQUN0Qyx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsNkRBQTZEO0VBQzdELFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VB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Q3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLG9CQUFvQjtFQUN0Qjs7RUFFQTs7SUFFRSxlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUVBOzs7SUFHRSwwQkFBMEI7RUFDNUI7O0VBRUE7O0lBRUUsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb250cm9scyBTZWN0aW9uICovXHJcbi5jb250cm9scy1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XHJcbn1cclxuXHJcbi5zZWFyY2gtY29udHJvbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtZmllbGQge1xyXG4gIGZsZXg6IDI7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLmNhdGVnb3J5LWZpZWxkIHtcclxuICBmbGV4OiAxO1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5leHBvcnQtYnRuIHtcclxuICBtaW4td2lkdGg6IDE0MHB4O1xyXG59XHJcblxyXG4uaW5mby1jYXJkcyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcclxuICBnYXA6IDE1cHg7XHJcbn1cclxuXHJcbi5pbmZvLWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG4uaW5mby1jYXJkIG1hdC1pY29uIHtcclxuICBjb2xvcjogIzAwN2JmZjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uaW5mby1jYXJkIHN0cm9uZyB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuLmluZm8tY2FyZCBwIHtcclxuICBjb2xvcjogIzY2NjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBUYWJsZSBDb250YWluZXIgKi9cclxuLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4udGFwLWRyaWxsLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhcC1kcmlsbC10YWJsZSAubWF0LW1kYy1oZWFkZXItY2VsbCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTZweCA4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLnRhcC1kcmlsbC10YWJsZSAubWF0LW1kYy1oZWFkZXItY2VsbCBtYXQtaWNvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi50YXAtZHJpbGwtdGFibGUgLm1hdC1tZGMtY2VsbCB7XHJcbiAgcGFkZGluZzogMTJweCA4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XHJcbn1cclxuXHJcbi5jZW50ZXItYWxpZ24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBDYXRlZ29yeSBCYWRnZSAqL1xyXG4uY2F0ZWdvcnktYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1iYWRnZSBtYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDE2cHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogVGFwIFNpemUgKi9cclxuLnRhcC1zaXplIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDJweDtcclxufVxyXG5cclxuLnRhcC1zaXplIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbi50YXAtc2l6ZSBzbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbiAgcGFkZGluZzogMnB4IDZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBEcmlsbCBJbmZvICovXHJcbi5kcmlsbC1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDRweDtcclxufVxyXG5cclxuLmRyaWxsLXNpemUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzAwN2JmZjtcclxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xyXG59XHJcblxyXG4uZHJpbGwtZGVjaW1hbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGJhY2tncm91bmQ6ICNlM2YyZmQ7XHJcbiAgcGFkZGluZzogMnB4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbi8qIERlc2NyaXB0aW9uIEluZm8gKi9cclxuLmRlc2NyaXB0aW9uLWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDRweDtcclxufVxyXG5cclxuLmFwcC10eXBlIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnRocmVhZC1wZXJjZW50IHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgY29sb3I6ICMyOGE3NDU7XHJcbiAgYmFja2dyb3VuZDogI2Q0ZWRkYTtcclxuICBwYWRkaW5nOiAycHggNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIEJ1eSBMaW5rICovXHJcbi5uby1saW5rIHtcclxuICBjb2xvcjogIzk5OTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4vKiBSb3cgU3R5bGluZyAqL1xyXG4ubWF0LW1kYy1yb3cge1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4ubWF0LW1kYy1yb3c6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcbi51bmlmaWVkLXJvdyB7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMDA3YmZmO1xyXG59XHJcblxyXG4ubWV0cmljLXJvdyB7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMjhhNzQ1O1xyXG59XHJcblxyXG4ubnB0LXJvdyB7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZmQ3ZTE0O1xyXG59XHJcblxyXG4vKiBObyBEYXRhICovXHJcbi5uby1kYXRhIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNjBweCAyMHB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG59XHJcblxyXG4ubm8tZGF0YSBtYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIHdpZHRoOiA0OHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBjb2xvcjogI2NjYztcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ubm8tZGF0YSBoMyB7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG59XHJcblxyXG4ubm8tZGF0YSBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi8qIFN1bW1hcnkgU2VjdGlvbiAqL1xyXG4uc3VtbWFyeS1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uc3VtbWFyeS1zdGF0cyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5zdGF0LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTVweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcclxufVxyXG5cclxuLnN0YXQtY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IDE2cHggcmdiYSgwLDAsMCwwLjE1KTtcclxufVxyXG5cclxuLnN0YXQtY2FyZCBtYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBjb2xvcjogIzY2N2VlYTtcclxufVxyXG5cclxuLnN0YXQtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc3RhdC1udW1iZXIge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uc3RhdC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcblxyXG4vKiBSZWZlcmVuY2UgU2VjdGlvbiAqL1xyXG4ucmVmZXJlbmNlLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XHJcbn1cclxuXHJcbi5yZWZlcmVuY2Utc2VjdGlvbiBoMyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBjb2xvcjogIzMzMztcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ucmVmZXJlbmNlLWNhcmRzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuLnJlZmVyZW5jZS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi5yZWZlcmVuY2UtY2FyZCBoNCB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgbWFyZ2luOiAwIDAgMTVweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ucmVmZXJlbmNlLWNhcmQgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5yZWZlcmVuY2UtY2FyZCBsaSB7XHJcbiAgcGFkZGluZzogNnB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ucmVmZXJlbmNlLWNhcmQgbGk6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLnJlZmVyZW5jZS1jYXJkIHN0cm9uZyB7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNlYXJjaC1jb250cm9scyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtZmllbGQsXHJcbiAgLmNhdGVnb3J5LWZpZWxkIHtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuc3VtbWFyeS1zdGF0cyxcclxuICAucmVmZXJlbmNlLWNhcmRzLFxyXG4gIC5pbmZvLWNhcmRzIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuICBcclxuICAudGFwLWRyaWxsLXRhYmxlIC5tYXQtbWRjLWNlbGwsXHJcbiAgLnRhcC1kcmlsbC10YWJsZSAubWF0LW1kYy1oZWFkZXItY2VsbCB7XHJcbiAgICBwYWRkaW5nOiA4cHggNHB4O1xyXG4gIH1cclxuICBcclxuICAuY2F0ZWdvcnktYmFkZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgIG1pbi13aWR0aDogNjBweDtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1916:
/*!*****************************************************!*\
  !*** ./src/app/components/tools/tools.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolsComponent": () => (/* binding */ ToolsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _tap_drill_chart_tap_drill_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tap-drill-chart/tap-drill-chart.component */ 5378);




function ToolsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "precision_manufacturing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Tap Drill Chart ");
  }
}
function ToolsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "speed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Speeds & Feeds ");
  }
}
function ToolsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "calculate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Calculators ");
  }
}
function ToolsComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "table_chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Material Charts ");
  }
}
class ToolsComponent {
  constructor() {}
  ngOnInit() {}
}
ToolsComponent.ɵfac = function ToolsComponent_Factory(t) {
  return new (t || ToolsComponent)();
};
ToolsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ToolsComponent,
  selectors: [["app-tools"]],
  decls: 43,
  vars: 0,
  consts: [[1, "tools-container"], [1, "header"], [1, "subtitle"], ["mat-stretch-tabs", "false", "mat-align-tabs", "start", 1, "tools-tabs"], ["mat-tab-label", ""], [1, "tab-content"], [1, "coming-soon"]],
  template: function ToolsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2")(3, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "build_circle");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " CNC Tools & References ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Professional tooling references for setup personnel and CNC enthusiasts");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-tab-group", 3)(9, "mat-tab");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ToolsComponent_ng_template_10_Template, 3, 0, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-tap-drill-chart");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-tab");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ToolsComponent_ng_template_14_Template, 3, 0, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5)(16, "div", 6)(17, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "construction");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Coming Soon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Cutting speed and feed rate calculator for various materials and tooling will be available in a future update.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-tab");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ToolsComponent_ng_template_24_Template, 3, 0, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 5)(26, "div", 6)(27, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "calculate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Coming Soon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Machining calculators for surface footage, chip load, and cycle time optimization.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-tab");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ToolsComponent_ng_template_34_Template, 3, 0, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 5)(36, "div", 6)(37, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "inventory_2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Coming Soon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Material property charts and machining recommendations for common alloys and materials.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
  },
  dependencies: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__.MatTabLabel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__.MatTabGroup, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _tap_drill_chart_tap_drill_chart_component__WEBPACK_IMPORTED_MODULE_0__.TapDrillChartComponent],
  styles: [".tools-container[_ngcontent-%COMP%] {\r\n  max-width: 1400px;\r\n  margin: 0 auto;\r\n  padding: 20px;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  color: #333;\r\n  margin-bottom: 8px;\r\n  font-size: 28px;\r\n}\r\n\r\n.subtitle[_ngcontent-%COMP%] {\r\n  color: #666;\r\n  font-size: 16px;\r\n  margin: 0;\r\n}\r\n\r\n\r\n.tools-tabs[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.tab-content[_ngcontent-%COMP%] {\r\n  padding: 20px 0;\r\n  min-height: 500px;\r\n}\r\n\r\n\r\n.controls-section[_ngcontent-%COMP%] {\r\n  background: #f8f9fa;\r\n  padding: 20px;\r\n  border-radius: 12px;\r\n  margin-bottom: 30px;\r\n  border: 1px solid #e0e0e0;\r\n}\r\n\r\n.search-controls[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 20px;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.search-field[_ngcontent-%COMP%] {\r\n  flex: 2;\r\n  min-width: 300px;\r\n}\r\n\r\n.category-field[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  min-width: 200px;\r\n}\r\n\r\n.info-cards[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n  gap: 15px;\r\n}\r\n\r\n.info-card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  background: white;\r\n  padding: 15px;\r\n  border-radius: 8px;\r\n  border: 1px solid #ddd;\r\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\r\n}\r\n\r\n.info-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n  color: #007bff;\r\n  font-size: 24px;\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.info-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  font-size: 14px;\r\n  display: block;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.info-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #666;\r\n  font-size: 12px;\r\n  margin: 0;\r\n}\r\n\r\n\r\n.table-container[_ngcontent-%COMP%] {\r\n  background: white;\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\r\n  border: 1px solid #e0e0e0;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.tap-drill-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.tap-drill-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  color: white;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  padding: 16px 8px;\r\n  border-bottom: none;\r\n}\r\n\r\n.tap-drill-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n  color: white;\r\n  margin-right: 8px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.tap-drill-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%] {\r\n  padding: 12px 8px;\r\n  border-bottom: 1px solid #f0f0f0;\r\n}\r\n\r\n.center-align[_ngcontent-%COMP%] {\r\n  text-align: center !important;\r\n}\r\n\r\n\r\n.category-badge[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n  padding: 6px 12px;\r\n  border-radius: 20px;\r\n  color: white;\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.5px;\r\n  justify-content: center;\r\n  min-width: 80px;\r\n}\r\n\r\n.category-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n  font-size: 16px !important;\r\n  width: 16px !important;\r\n  height: 16px !important;\r\n}\r\n\r\n\r\n.tap-size[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2px;\r\n}\r\n\r\n.tap-size[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: #333;\r\n  font-family: 'Courier New', monospace;\r\n}\r\n\r\n.tap-size[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  font-size: 11px;\r\n  color: #666;\r\n  background: #f0f0f0;\r\n  padding: 2px 6px;\r\n  border-radius: 10px;\r\n}\r\n\r\n\r\n.drill-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 4px;\r\n}\r\n\r\n.drill-size[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: #007bff;\r\n  font-family: 'Courier New', monospace;\r\n}\r\n\r\n.drill-decimal[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  color: #666;\r\n  background: #e3f2fd;\r\n  padding: 2px 8px;\r\n  border-radius: 12px;\r\n  font-family: 'Courier New', monospace;\r\n}\r\n\r\n\r\n.description-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4px;\r\n}\r\n\r\n.app-type[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  color: #333;\r\n  font-size: 14px;\r\n}\r\n\r\n.thread-percent[_ngcontent-%COMP%] {\r\n  font-size: 11px;\r\n  color: #28a745;\r\n  background: #d4edda;\r\n  padding: 2px 6px;\r\n  border-radius: 8px;\r\n  align-self: flex-start;\r\n}\r\n\r\n\r\n.no-link[_ngcontent-%COMP%] {\r\n  color: #999;\r\n  font-style: italic;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n.mat-mdc-row[_ngcontent-%COMP%] {\r\n  transition: background-color 0.2s ease;\r\n}\r\n\r\n.mat-mdc-row[_ngcontent-%COMP%]:hover {\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n.unified-row[_ngcontent-%COMP%] {\r\n  border-left: 4px solid #007bff;\r\n}\r\n\r\n.metric-row[_ngcontent-%COMP%] {\r\n  border-left: 4px solid #28a745;\r\n}\r\n\r\n.npt-row[_ngcontent-%COMP%] {\r\n  border-left: 4px solid #fd7e14;\r\n}\r\n\r\n\r\n.no-data[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 60px 20px;\r\n  color: #666;\r\n}\r\n\r\n.no-data[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n  font-size: 48px;\r\n  width: 48px;\r\n  height: 48px;\r\n  color: #ccc;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.no-data[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  color: #555;\r\n  margin: 0 0 10px 0;\r\n}\r\n\r\n.no-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #777;\r\n}\r\n\r\n\r\n.summary-section[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.summary-stats[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  gap: 20px;\r\n}\r\n\r\n.stat-card[_ngcontent-%COMP%] {\r\n  background: white;\r\n  padding: 20px;\r\n  border-radius: 12px;\r\n  box-shadow: 0 4px 8px rgba(0,0,0,0.1);\r\n  border: 1px solid #e0e0e0;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 15px;\r\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\r\n}\r\n\r\n.stat-card[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 6px 16px rgba(0,0,0,0.15);\r\n}\r\n\r\n.stat-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n  width: 32px;\r\n  height: 32px;\r\n  color: #667eea;\r\n}\r\n\r\n.stat-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.stat-number[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  color: #333;\r\n}\r\n\r\n.stat-label[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  color: #666;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n\r\n.reference-section[_ngcontent-%COMP%] {\r\n  background: #f8f9fa;\r\n  padding: 30px;\r\n  border-radius: 12px;\r\n  border: 1px solid #e0e0e0;\r\n}\r\n\r\n.reference-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  color: #333;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.reference-cards[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n  gap: 20px;\r\n}\r\n\r\n.reference-card[_ngcontent-%COMP%] {\r\n  background: white;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 6px rgba(0,0,0,0.1);\r\n  border: 1px solid #ddd;\r\n}\r\n\r\n.reference-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  margin: 0 0 15px 0;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n\r\n.reference-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.reference-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 6px 0;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  font-size: 14px;\r\n}\r\n\r\n.reference-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.reference-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: #007bff;\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n.coming-soon[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  color: #666;\r\n  background: #f8f9fa;\r\n  border-radius: 12px;\r\n  border: 2px dashed #ddd;\r\n  min-height: 300px;\r\n}\r\n\r\n.coming-soon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n  font-size: 64px;\r\n  width: 64px;\r\n  height: 64px;\r\n  color: #ccc;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.coming-soon[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  color: #555;\r\n  margin: 0 0 10px 0;\r\n}\r\n\r\n.coming-soon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  margin: 0;\r\n}\r\n\r\n\r\n@media (max-width: 768px) {\r\n  .tools-container[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n  }\r\n  \r\n  .search-controls[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n  }\r\n  \r\n  .search-field[_ngcontent-%COMP%], .category-field[_ngcontent-%COMP%] {\r\n    min-width: auto;\r\n    width: 100%;\r\n  }\r\n  \r\n  .summary-stats[_ngcontent-%COMP%], .reference-cards[_ngcontent-%COMP%], .info-cards[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  \r\n  .tap-drill-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%], .tap-drill-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%] {\r\n    padding: 8px 4px;\r\n  }\r\n  \r\n  .category-badge[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n    padding: 4px 8px;\r\n    min-width: 60px;\r\n  }\r\n}\r\n\r\n\r\n@media print {\r\n  .controls-section[_ngcontent-%COMP%], .summary-section[_ngcontent-%COMP%], .reference-section[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  \r\n  .tools-tabs[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  \r\n  .table-container[_ngcontent-%COMP%] {\r\n    box-shadow: none;\r\n    border: 1px solid #000;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90b29scy90b29scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBLFdBQVc7QUFDWDtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0NBQXNDO0VBQ3RDLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQSxhQUFhO0FBQ2I7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFDQUFxQztBQUN2Qzs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBLGFBQWE7QUFDYjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUEsWUFBWTtBQUNaO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztBQUNYOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLG9CQUFvQjtFQUN0Qjs7RUFFQTs7SUFFRSxlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUVBOzs7SUFHRSwwQkFBMEI7RUFDNUI7O0VBRUE7O0lBRUUsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0U7OztJQUdFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixzQkFBc0I7RUFDeEI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi50b29scy1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vKiBIZWFkZXIgKi9cclxuLmhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIgaDIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuLnN1YnRpdGxlIHtcclxuICBjb2xvcjogIzY2NjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBUb29scyBUYWJzICovXHJcbi50b29scy10YWJzIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4udGFiLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBtaW4taGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLyogQ29udHJvbHMgU2VjdGlvbiAqL1xyXG4uY29udHJvbHMtc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG59XHJcblxyXG4uc2VhcmNoLWNvbnRyb2xzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWZpZWxkIHtcclxuICBmbGV4OiAyO1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1maWVsZCB7XHJcbiAgZmxleDogMTtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uaW5mby1jYXJkcyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcclxuICBnYXA6IDE1cHg7XHJcbn1cclxuXHJcbi5pbmZvLWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG4uaW5mby1jYXJkIG1hdC1pY29uIHtcclxuICBjb2xvcjogIzAwN2JmZjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uaW5mby1jYXJkIHN0cm9uZyB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuLmluZm8tY2FyZCBwIHtcclxuICBjb2xvcjogIzY2NjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBUYWJsZSBDb250YWluZXIgKi9cclxuLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4udGFwLWRyaWxsLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhcC1kcmlsbC10YWJsZSAubWF0LW1kYy1oZWFkZXItY2VsbCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTZweCA4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLnRhcC1kcmlsbC10YWJsZSAubWF0LW1kYy1oZWFkZXItY2VsbCBtYXQtaWNvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi50YXAtZHJpbGwtdGFibGUgLm1hdC1tZGMtY2VsbCB7XHJcbiAgcGFkZGluZzogMTJweCA4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XHJcbn1cclxuXHJcbi5jZW50ZXItYWxpZ24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBDYXRlZ29yeSBCYWRnZSAqL1xyXG4uY2F0ZWdvcnktYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1iYWRnZSBtYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDE2cHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogVGFwIFNpemUgKi9cclxuLnRhcC1zaXplIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDJweDtcclxufVxyXG5cclxuLnRhcC1zaXplIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbi50YXAtc2l6ZSBzbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbiAgcGFkZGluZzogMnB4IDZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBEcmlsbCBJbmZvICovXHJcbi5kcmlsbC1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDRweDtcclxufVxyXG5cclxuLmRyaWxsLXNpemUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzAwN2JmZjtcclxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xyXG59XHJcblxyXG4uZHJpbGwtZGVjaW1hbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGJhY2tncm91bmQ6ICNlM2YyZmQ7XHJcbiAgcGFkZGluZzogMnB4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbi8qIERlc2NyaXB0aW9uIEluZm8gKi9cclxuLmRlc2NyaXB0aW9uLWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDRweDtcclxufVxyXG5cclxuLmFwcC10eXBlIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnRocmVhZC1wZXJjZW50IHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgY29sb3I6ICMyOGE3NDU7XHJcbiAgYmFja2dyb3VuZDogI2Q0ZWRkYTtcclxuICBwYWRkaW5nOiAycHggNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4vKiBCdXkgTGluayAqL1xyXG4ubm8tbGluayB7XHJcbiAgY29sb3I6ICM5OTk7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLyogUm93IFN0eWxpbmcgKi9cclxuLm1hdC1tZGMtcm93IHtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLm1hdC1tZGMtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG4udW5pZmllZC1yb3cge1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzAwN2JmZjtcclxufVxyXG5cclxuLm1ldHJpYy1yb3cge1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzI4YTc0NTtcclxufVxyXG5cclxuLm5wdC1yb3cge1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2ZkN2UxNDtcclxufVxyXG5cclxuLyogTm8gRGF0YSAqL1xyXG4ubm8tZGF0YSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDYwcHggMjBweDtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLm5vLWRhdGEgbWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLm5vLWRhdGEgaDMge1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIG1hcmdpbjogMCAwIDEwcHggMDtcclxufVxyXG5cclxuLm5vLWRhdGEgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjNzc3O1xyXG59XHJcblxyXG4vKiBTdW1tYXJ5IFNlY3Rpb24gKi9cclxuLnN1bW1hcnktc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnN1bW1hcnktc3RhdHMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4uc3RhdC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE1cHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5zdGF0LWNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbn1cclxuXHJcbi5zdGF0LWNhcmQgbWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgY29sb3I6ICM2NjdlZWE7XHJcbn1cclxuXHJcbi5zdGF0LWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnN0YXQtbnVtYmVyIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLnN0YXQtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzY2NjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG5cclxuLyogUmVmZXJlbmNlIFNlY3Rpb24gKi9cclxuLnJlZmVyZW5jZS1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG59XHJcblxyXG4ucmVmZXJlbmNlLXNlY3Rpb24gaDMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnJlZmVyZW5jZS1jYXJkcyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5yZWZlcmVuY2UtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4ucmVmZXJlbmNlLWNhcmQgaDQge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIG1hcmdpbjogMCAwIDE1cHggMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnJlZmVyZW5jZS1jYXJkIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucmVmZXJlbmNlLWNhcmQgbGkge1xyXG4gIHBhZGRpbmc6IDZweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnJlZmVyZW5jZS1jYXJkIGxpOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5yZWZlcmVuY2UtY2FyZCBzdHJvbmcge1xyXG4gIGNvbG9yOiAjMDA3YmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi8qIENvbWluZyBTb29uICovXHJcbi5jb21pbmctc29vbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgI2RkZDtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmNvbWluZy1zb29uIG1hdC1pY29uIHtcclxuICBmb250LXNpemU6IDY0cHg7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jb21pbmctc29vbiBoMyB7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG59XHJcblxyXG4uY29taW5nLXNvb24gcCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC50b29scy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1jb250cm9scyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtZmllbGQsXHJcbiAgLmNhdGVnb3J5LWZpZWxkIHtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuc3VtbWFyeS1zdGF0cyxcclxuICAucmVmZXJlbmNlLWNhcmRzLFxyXG4gIC5pbmZvLWNhcmRzIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuICBcclxuICAudGFwLWRyaWxsLXRhYmxlIC5tYXQtbWRjLWNlbGwsXHJcbiAgLnRhcC1kcmlsbC10YWJsZSAubWF0LW1kYy1oZWFkZXItY2VsbCB7XHJcbiAgICBwYWRkaW5nOiA4cHggNHB4O1xyXG4gIH1cclxuICBcclxuICAuY2F0ZWdvcnktYmFkZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgIG1pbi13aWR0aDogNjBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIFByaW50IFN0eWxlcyAqL1xyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5jb250cm9scy1zZWN0aW9uLFxyXG4gIC5zdW1tYXJ5LXNlY3Rpb24sXHJcbiAgLnJlZmVyZW5jZS1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29scy10YWJzIC5tYXQtbWRjLXRhYi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8870:
/*!*****************************************************************!*\
  !*** ./src/app/components/your-vision/your-vision.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YourVisionComponent": () => (/* binding */ YourVisionComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contact/contact.component */ 1782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_mainservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/mainservice.service */ 8815);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);












function YourVisionComponent_mat_error_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r1.fileSize / 1000000, "0.0"), " mb)File too large");
  }
}
class YourVisionComponent {
  constructor(_fb, _crud, _snackbar) {
    this._fb = _fb;
    this._crud = _crud;
    this._snackbar = _snackbar;
    this.queryMode = "query";
    this.determinateMode = "determinate";
    this.selectedMode = this.determinateMode;
    this.disableButton = false;
    this.isTooLarge = false;
    this.fileSize = 0;
    this.assistList = ["I would like a demo.", "I would like to talk to sales.", "I need customer support."];
    this.fileForm = this._fb.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      businessName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      phone: [''],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      howCanWeAssistYou: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      comments: [''],
      fromPage: [' Your vision']
    });
  }
  ngOnInit() {}
  onSelectedFile(event) {
    this.isTooLarge = false;
    var tempFile = event.target.files[0];
    if (tempFile.size > 10000000) {
      this.isTooLarge = true;
      this.fileSize = tempFile.size;
      console.log("File size too large.");
    } else {
      this.selectedFile = event.target.files[0];
      this.isTooLarge = false;
    }
  }
  onSubmit() {
    this.selectedMode = this.queryMode;
    const formData = new FormData();
    const emailForm = new _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__.EmailForm(this.fileForm.value);
    formData.append('subject', emailForm.subject);
    formData.append('body', emailForm.body);
    if (this.selectedFile) {
      formData.append('file', this.selectedFile, this.selectedFile.name);
    }
    this.fileForm.disable();
    this.disableButton = true;
    this._crud.sendEmail(formData).subscribe({
      next: () => {
        console.log("Email sent");
        this.fileForm.reset();
        this.fileForm.enable();
        this.fileForm.controls['fromPage'].setValue(" Your vision");
        this.disableButton = false;
        this.selectedMode = this.determinateMode;
        this._snackbar.open("Message sent ✔!", "Dismiss", {
          duration: 4000
        });
      },
      error: err => {
        console.log("Error ", err);
        this.fileForm.enable();
        this.disableButton = false;
        this.selectedMode = this.determinateMode;
        this._snackbar.open("ERROR sending message ❌! Please try again later.", "Dismiss", {
          duration: 4000
        });
      }
    });
  }
}
YourVisionComponent.ɵfac = function YourVisionComponent_Factory(t) {
  return new (t || YourVisionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_mainservice_service__WEBPACK_IMPORTED_MODULE_1__.MainserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar));
};
YourVisionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: YourVisionComponent,
  selectors: [["app-your-vision"]],
  decls: 46,
  vars: 5,
  consts: [[1, "form-card"], [1, "text-center"], [1, "content-title"], ["src", "../../../assets/img/icons8-creative-64.png", "alt", "icons8-creative-64.png icons8.com"], [1, "file-form", 3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["type", "text", "name", "firstName", "matInput", "", "formControlName", "firstName"], ["type", "text", "name", "lastName", "matInput", "", "formControlName", "lastName"], ["type", "email", "name", "email", "matInput", "", "formControlName", "email"], ["type", "text", "name", "businessName", "matInput", "", "formControlName", "businessName"], ["type", "text", "name", "phone", "matInput", "", "formControlName", "phone"], ["type", "text", "name", "howCanWeAssistYou", "matInput", "", "formControlName", "howCanWeAssistYou"], ["name", "comment", "matInput", "", "formControlName", "comments", "cols", "200"], ["value", "0", 3, "mode"], ["mat-raised-button", "", "type", "submit", "color", "primary", 3, "disabled"], ["submitButton", ""], ["for", "file"], ["type", "file", "name", "file", "id", "file", 3, "disabled", "change"], [4, "ngIf"]],
  template: function YourVisionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0)(1, "div", 1)(2, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Tell us how you envision your future. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Your vision, our mission.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function YourVisionComponent_Template_form_ngSubmit_7_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 5)(9, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "First Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 5)(13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Last Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-form-field", 5)(17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Work Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-form-field", 5)(21, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Business Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-form-field", 5)(25, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-form-field", 5)(29, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Describe your vision");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-form-field", 5)(33, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "textarea", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "mat-progress-bar", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Select file to upload. 10Mb limit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "(Optional)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function YourVisionComponent_Template_input_change_44_listener($event) {
        return ctx.onSelectedFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, YourVisionComponent_mat_error_45_Template, 3, 4, "mat-error", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.fileForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", ctx.selectedMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.fileForm.invalid || ctx.disableButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.disableButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isTooLarge);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe],
  styles: [".form-field[_ngcontent-%COMP%]{\r\n    width: 300px;\r\n    margin: auto;\r\n}\r\n\r\n.client-form[_ngcontent-%COMP%]{\r\n    display: grid;\r\n}\r\n\r\n.sf-card[_ngcontent-%COMP%]{\r\n    max-width: 500px;\r\n    margin: auto;\r\n}\r\n.form-card[_ngcontent-%COMP%]{\r\n    max-width: 1000px;\r\n    margin: auto;\r\n    padding: 15px;\r\n    padding-top: 50px;\r\n    min-height: 70%;\r\n}\r\n.file-form[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy95b3VyLXZpc2lvbi95b3VyLXZpc2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYiwwQkFBMEI7QUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNsaWVudC1mb3Jte1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuLnNmLWNhcmR7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5mb3JtLWNhcmR7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDcwJTtcclxufVxyXG4uZmlsZS1mb3Jte1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2676:
/*!*********************************************************!*\
  !*** ./src/app/modules/components/components.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/home/home.component */ 8263);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/about/about.component */ 2468);
/* harmony import */ var _components_help_help_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/help/help.component */ 7641);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/contact/contact.component */ 1782);
/* harmony import */ var _components_basicnav_basicnav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/basicnav/basicnav.component */ 6724);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_account_accountmain_accountmain_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/account/accountmain/accountmain.component */ 760);
/* harmony import */ var _components_account_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/account/settings/settings.component */ 5644);
/* harmony import */ var _components_account_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/account/dashboard/dashboard.component */ 5872);
/* harmony import */ var _components_account_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/account/profile/profile.component */ 8063);
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/account/account.component */ 1922);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../material/material.module */ 9350);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/login/login.component */ 7143);
/* harmony import */ var _components_home_categories_categories_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/home/categories/categories.component */ 9743);
/* harmony import */ var _components_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/calculator/calculator.component */ 5946);
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/blog/blog.component */ 5006);
/* harmony import */ var _components_home_home_main_home_main_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/home/home-main/home-main.component */ 3044);
/* harmony import */ var _components_privacy_notice_privacy_notice_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/privacy-notice/privacy-notice.component */ 9528);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_custommes_custommes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/custommes/custommes.component */ 1613);
/* harmony import */ var _components_custom_inventory_management_custom_inventory_management_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/custom-inventory-management/custom-inventory-management.component */ 6135);
/* harmony import */ var _components_quality_management_system_quality_management_system_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/quality-management-system/quality-management-system.component */ 6599);
/* harmony import */ var _components_your_vision_your_vision_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/your-vision/your-vision.component */ 8870);
/* harmony import */ var _components_overcoming_obstacles_overcoming_obstacles_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/overcoming-obstacles/overcoming-obstacles.component */ 114);
/* harmony import */ var _components_allow_cookies_allow_cookies_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/allow-cookies/allow-cookies.component */ 8587);
/* harmony import */ var _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/articles/articles.component */ 9013);
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../components/page-not-found/page-not-found.component */ 3581);
/* harmony import */ var src_app_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/components/demo/demo.component */ 6512);
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../components/test/test.component */ 1926);
/* harmony import */ var _components_home_home_section1_home_section1_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../components/home/home-section1/home-section1.component */ 7689);
/* harmony import */ var _components_about_about_section1_about_section1_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../components/about/about-section1/about-section1.component */ 6679);
/* harmony import */ var _components_about_about_section2_about_section2_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../components/about/about-section2/about-section2.component */ 7388);
/* harmony import */ var _components_about_about_section3_about_section3_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../components/about/about-section3/about-section3.component */ 9418);
/* harmony import */ var _components_home_home_section2_home_section2_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../components/home/home-section2/home-section2.component */ 1973);
/* harmony import */ var _components_tms_showcase_tms_showcase_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../components/tms-showcase/tms-showcase.component */ 53);
/* harmony import */ var _components_preventive_maintenance_showcase_preventive_maintenance_showcase_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../components/preventive-maintenance-showcase/preventive-maintenance-showcase.component */ 2087);
/* harmony import */ var _components_inventory_management_showcase_inventory_management_showcase_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../components/inventory-management-showcase/inventory-management-showcase.component */ 9449);
/* harmony import */ var _components_qms_showcase_qms_showcase_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../components/qms-showcase/qms-showcase.component */ 3700);
/* harmony import */ var _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../pipes/safe-url.pipe */ 4998);
/* harmony import */ var _components_tools_tools_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../components/tools/tools.component */ 1916);
/* harmony import */ var _components_tools_tap_drill_chart_tap_drill_chart_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../components/tools/tap-drill-chart/tap-drill-chart.component */ 5378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);






















































class ComponentsModule {}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) {
  return new (t || ComponentsModule)();
};
ComponentsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdefineNgModule"]({
  type: ComponentsModule
});
ComponentsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_40__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_41__.RouterModule, _material_material_module__WEBPACK_IMPORTED_MODULE_10__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_42__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_42__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵsetNgModuleScope"](ComponentsModule, {
    declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _components_help_help_component__WEBPACK_IMPORTED_MODULE_2__.HelpComponent, _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent, _components_basicnav_basicnav_component__WEBPACK_IMPORTED_MODULE_4__.BasicnavComponent, _components_account_accountmain_accountmain_component__WEBPACK_IMPORTED_MODULE_5__.AccountmainComponent, _components_account_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__.SettingsComponent, _components_account_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.DashboardComponent, _components_account_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__.ProfileComponent, _components_account_account_component__WEBPACK_IMPORTED_MODULE_9__.AccountComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__.LoginComponent, _components_home_categories_categories_component__WEBPACK_IMPORTED_MODULE_12__.CategoriesComponent, _components_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_13__.CalculatorComponent, _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_14__.BlogComponent, _components_home_home_main_home_main_component__WEBPACK_IMPORTED_MODULE_15__.HomeMainComponent, _components_privacy_notice_privacy_notice_component__WEBPACK_IMPORTED_MODULE_16__.PrivacyNoticeComponent, _components_custommes_custommes_component__WEBPACK_IMPORTED_MODULE_17__.CustommesComponent, _components_custom_inventory_management_custom_inventory_management_component__WEBPACK_IMPORTED_MODULE_18__.CustomInventoryManagementComponent, _components_quality_management_system_quality_management_system_component__WEBPACK_IMPORTED_MODULE_19__.QualityManagementSystemComponent, _components_your_vision_your_vision_component__WEBPACK_IMPORTED_MODULE_20__.YourVisionComponent, _components_overcoming_obstacles_overcoming_obstacles_component__WEBPACK_IMPORTED_MODULE_21__.OvercomingObstaclesComponent, _components_allow_cookies_allow_cookies_component__WEBPACK_IMPORTED_MODULE_22__.AllowCookiesComponent, _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_23__.ArticlesComponent, _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_24__.PageNotFoundComponent, src_app_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_25__.DemoComponent, _components_test_test_component__WEBPACK_IMPORTED_MODULE_26__.TestComponent, _components_home_home_section1_home_section1_component__WEBPACK_IMPORTED_MODULE_27__.HomeSection1Component, _components_about_about_section1_about_section1_component__WEBPACK_IMPORTED_MODULE_28__.AboutSection1Component, _components_about_about_section2_about_section2_component__WEBPACK_IMPORTED_MODULE_29__.AboutSection2Component, _components_about_about_section3_about_section3_component__WEBPACK_IMPORTED_MODULE_30__.AboutSection3Component, _components_home_home_section2_home_section2_component__WEBPACK_IMPORTED_MODULE_31__.HomeSection2Component, _components_tms_showcase_tms_showcase_component__WEBPACK_IMPORTED_MODULE_32__.TmsShowcaseComponent, _components_preventive_maintenance_showcase_preventive_maintenance_showcase_component__WEBPACK_IMPORTED_MODULE_33__.PreventiveMaintenanceShowcaseComponent, _components_inventory_management_showcase_inventory_management_showcase_component__WEBPACK_IMPORTED_MODULE_34__.InventoryManagementShowcaseComponent, _components_qms_showcase_qms_showcase_component__WEBPACK_IMPORTED_MODULE_35__.QmsShowcaseComponent, _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_36__.SafeUrlPipe, _components_tools_tools_component__WEBPACK_IMPORTED_MODULE_37__.ToolsComponent, _components_tools_tap_drill_chart_tap_drill_chart_component__WEBPACK_IMPORTED_MODULE_38__.TapDrillChartComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_40__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_41__.RouterModule, _material_material_module__WEBPACK_IMPORTED_MODULE_10__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_42__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_42__.ReactiveFormsModule]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵsetComponentScope"](_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_40__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_40__.NgIf, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_43__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_44__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_43__.MatAutocompleteTrigger, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_46__.MatInput, _angular_material_card__WEBPACK_IMPORTED_MODULE_47__.MatCard, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__.MatTabGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_49__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_50__.MatIcon, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_51__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_42__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_42__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_42__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_42__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_42__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_42__.FormControlName, _components_your_vision_your_vision_component__WEBPACK_IMPORTED_MODULE_20__.YourVisionComponent, _components_overcoming_obstacles_overcoming_obstacles_component__WEBPACK_IMPORTED_MODULE_21__.OvercomingObstaclesComponent], [_angular_common__WEBPACK_IMPORTED_MODULE_40__.DecimalPipe]);

/***/ }),

/***/ 9350:
/*!*****************************************************!*\
  !*** ./src/app/modules/material/material.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tree */ 3453);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/core */ 2560);

// Material Form Controls










// Material Navigation



// Material Layout








// Material Buttons & Indicators








// Material Popups & Modals




// Material Data tables




const Material = [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepickerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__.MatStepperModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__.MatTreeModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__.MatButtonToggleModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinnerModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatRippleModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__.MatBottomSheetModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule];
class MaterialModule {}
MaterialModule.ɵfac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};
MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineNgModule"]({
  type: MaterialModule
});
MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineInjector"]({
  imports: [Material, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepickerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__.MatStepperModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__.MatTreeModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__.MatButtonToggleModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinnerModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatRippleModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__.MatBottomSheetModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵsetNgModuleScope"](MaterialModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepickerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__.MatStepperModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__.MatTreeModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__.MatButtonToggleModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinnerModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatRippleModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__.MatBottomSheetModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepickerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__.MatStepperModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__.MatTreeModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__.MatButtonToggleModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinnerModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatRippleModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__.MatBottomSheetModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule]
  });
})();

/***/ }),

/***/ 4998:
/*!****************************************!*\
  !*** ./src/app/pipes/safe-url.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeUrlPipe": () => (/* binding */ SafeUrlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);


class SafeUrlPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) {
  return new (t || SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
};
SafeUrlPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "safeUrl",
  type: SafeUrlPipe,
  pure: true
});

/***/ }),

/***/ 8815:
/*!*************************************************!*\
  !*** ./src/app/services/mainservice.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainserviceService": () => (/* binding */ MainserviceService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class MainserviceService {
  constructor(_http) {
    this._http = _http;
    this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
  }
  sendEmail(body) {
    // return this._http.post("https://localhost:7213/api/email", body);
    return this._http.post(this.env.domainUrl + "send_email.php", body);
  }
}
MainserviceService.ɵfac = function MainserviceService_Factory(t) {
  return new (t || MainserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
MainserviceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MainserviceService,
  factory: MainserviceService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  domainUrl: "https://sharpfloornc.com/PHP/"
  // domainUrl: "https://emailapi20230803142600.azurewebsites.net/api/email"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 65:
/*!***************************************!*\
  !*** ./src/assets/json/articles.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"articles":[{"id":1,"title":"The Real Cost of Custom Software Development: Beyond Dollars and Cents","dateCreated":"8/7/2023","introductionTitle":"Introduction","introductionBody":"In today\'s technologically driven world, businesses face increasing demands to optimize their operations, enhance customer experiences, and stay ahead of the competition. As a result, the demand for custom software development has surged, offering tailored solutions that meet unique business needs. However, the cost of custom software development extends far beyond the financial investment, encompassing a multitude of factors that contribute to the overall value and success of the project.","list":[{"listTitle":"Financial Investment","listBody":"The most apparent cost of custom software development is the financial investment required to design, develop, test, and deploy the software. The expenses associated with hiring skilled developers, project managers, and quality assurance personnel can be significant, and it\'s crucial to budget effectively to avoid cost overruns."},{"listTitle":"Time and Effort","listBody":"Time is a valuable resource in any business endeavor. Developing custom software involves an iterative process of planning, designing, coding, and testing, which can take several months or even years, depending on the complexity of the project. The time and effort invested by the development team must be carefully managed to ensure efficient progress and timely delivery."},{"listTitle":"Opportunity Cost","listBody":"While developing custom software, businesses must consider the opportunity cost of not pursuing other potential revenue-generating activities. Investing resources into software development may mean postponing other projects that could have generated profits or competitive advantages in the short term."},{"listTitle":"Maintenance and Support","listBody":"The initial development cost is only the beginning. Software requires ongoing maintenance, updates, and support to remain functional and secure. Businesses should consider the long-term expenses associated with maintaining and improving the software over its lifecycle."},{"listTitle":"User Training and Adoption","listBody":"Implementing new custom software often requires employee training and adaptation to the new system. The cost of training programs and the potential productivity dip during the learning curve should be accounted for in the overall cost assessment."},{"listTitle":"Integration and Compatibility","listBody":"Custom software must seamlessly integrate with existing systems and platforms within the organization. The cost of ensuring compatibility and data migration between systems should be carefully evaluated."},{"listTitle":"Scalability","listBody":"As businesses grow, their software needs to scale accordingly. Custom software should be designed to accommodate future growth and changes in requirements, and this may add to the initial cost."},{"listTitle":"Security and Compliance","listBody":"Security is paramount in the digital age, and custom software must be built with robust security measures in place. Additionally, compliance with industry regulations and data protection laws can have significant cost implications."},{"listTitle":"Risk Management","listBody":"Every software development project carries inherent risks, such as technical challenges, unforeseen complexities, and scope creep. Effective risk management practices can mitigate potential costs arising from these uncertainties."}],"conclusionTitle":"Conclusion","conclusion":"The cost of custom software development goes beyond the monetary investment, encompassing various factors that contribute to its overall value and success. By carefully considering the financial aspects, time commitment, opportunity cost, ongoing maintenance, training needs, integration, scalability, security, compliance, and risk management, businesses can make informed decisions about custom software development. Balancing these factors can result in a successful and cost-effective solution that caters precisely to the unique needs and objectives of the organization. Custom software, when thoughtfully planned and executed, can yield a high return on investment and become a valuable asset in the ever-evolving digital landscape."},{"id":"2","title":"The Advantages of Custom Manufacturing Execution System Software for Manufacturing Companies","introductionTitle":"Introduction","dateCreated":"8/8/2023","introductionBody":"In today\'s fast-paced and competitive manufacturing landscape, staying ahead requires optimizing operational efficiency, streamlining production processes, and ensuring seamless coordination between various departments. One technology that has significantly impacted the manufacturing industry is the Custom Manufacturing Execution System (MES) software. Unlike off-the-shelf solutions, custom MES software offers tailor-made solutions designed to meet specific needs and challenges of manufacturing companies. In this article, we explore the numerous benefits that custom MES software brings to manufacturing companies.","list":[{"listTitle":"Enhanced Flexibility and Scalability","listBody":"Custom MES software provides unparalleled flexibility and scalability, making it a perfect fit for manufacturers with diverse production requirements and varied manufacturing processes. The software can be designed to accommodate various production lines, multiple sites, and different manufacturing workflows. As a result, manufacturers can easily adapt and expand their operations without the need for significant software overhauls, thus ensuring a future-proof solution."},{"listTitle":"Efficient Data Management and Real-time Monitoring","listBody":"One of the most significant advantages of custom MES software is its ability to capture, store, and analyze real-time data from the shop floor. This data includes production metrics, equipment performance, inventory levels, and quality control parameters. With a custom solution, manufacturers can precisely track production progress, identify bottlenecks, and implement data-driven decisions to optimize production processes. Real-time monitoring also allows for quick response to deviations, reducing downtime and minimizing production losses."},{"listTitle":"Integration and Interoperability","listBody":"Custom MES software offers seamless integration with existing systems, such as Enterprise Resource Planning (ERP) systems, Customer Relationship Management (CRM) platforms, and supply chain management software. By facilitating data flow between these systems, manufacturers can achieve enhanced transparency and accuracy in their operations. Information silos are eliminated, and decision-makers gain access to comprehensive data, enabling them to make informed choices for improved efficiency and cost-effectiveness."},{"listTitle":"Customized Reporting and Analytics","listBody":"Pre-built MES solutions often come with standard reporting features, which may not fully align with a manufacturer\'s unique reporting needs. Custom MES software empowers manufacturing companies to design and generate custom reports and analytics that precisely address their specific performance indicators and business goals. This level of customization provides valuable insights, enhances decision-making processes, and enables manufacturers to optimize resource allocation effectively."},{"listTitle":"Enhanced Quality Control and Compliance","listBody":"Custom MES software allows manufacturers to implement tailor-made quality control processes, ensuring adherence to industry standards and compliance with regulatory requirements. By integrating quality checks at critical points of production, manufacturers can identify and address potential issues proactively, reducing defects and waste. The system can also maintain comprehensive audit trails, which are vital for demonstrating compliance during inspections and certifications."},{"listTitle":"Improved Workforce Productivity","listBody":"Custom MES software facilitates a more streamlined and efficient workflow, reducing manual tasks and automating routine processes. This automation reduces the likelihood of errors, minimizes rework, and optimizes resource utilization. Employees can focus on more critical tasks, fostering a culture of continuous improvement and innovation within the manufacturing company."},{"listTitle":"Competitive Advantage","listBody":"In a rapidly evolving manufacturing landscape, gaining a competitive edge is crucial. Custom MES software gives manufacturing companies the unique advantage of leveraging technology specifically designed to align with their strategic objectives. This level of customization helps companies differentiate themselves in the market, respond quickly to customer demands, and continuously innovate to stay ahead of competitors."}],"conclusionTitle":"Conclusion","conclusion":"The benefits of custom MES software to manufacturing companies are evident. By providing unmatched flexibility, efficient data management, seamless integration, customized reporting, and improved productivity, custom MES solutions empower manufacturers to optimize their operations, boost productivity, and achieve a sustainable competitive advantage. As manufacturing companies continue to embrace digital transformation, custom MES software stands as a fundamental tool to drive efficiency, effectiveness, and success in today\'s dynamic manufacturing landscape."},{"title":"Embracing Software Customization: The Key to Manufacturing Companies\' Success","introductionTitle":"Introduction","dateCreated":"8/7/2023","introductionBody":"In today\'s rapidly evolving business landscape, manufacturing companies are facing unprecedented challenges and opportunities. With technology at the forefront of this transformation, traditional manufacturing processes are being revolutionized by the integration of software solutions. One critical aspect that can drive manufacturing success is software customization - the ability to tailor software applications to meet specific needs and requirements. In this article, we will explore the reasons why manufacturing companies should adapt to software customization and how it can lead to significant advantages in the competitive market.","list":[{"listTitle":"Enhancing Efficiency and Productivity:","listBody":"Software customization enables manufacturing companies to fine-tune their operations and align them with their unique workflows. Rather than adopting a one-size-fits-all approach, customized software solutions can streamline processes, eliminate redundancies, and optimize resource allocation. By integrating automation and data-driven insights, manufacturers can enhance overall efficiency and productivity, leading to reduced lead times, increased production output, and improved profit margins."},{"listTitle":"Flexibility to Meet Dynamic Demands:","listBody":"The manufacturing industry is known for its dynamic and ever-changing demands. Market fluctuations, consumer preferences, and supply chain disruptions require agile responses. Customized software empowers manufacturers to swiftly adapt to these changes. Whether it\'s modifying production schedules, optimizing inventory management, or reconfiguring assembly lines, the ability to tailor software to meet evolving requirements is invaluable."},{"listTitle":"Improved Quality Control and Traceability:","listBody":"In an era of increasing regulations and quality standards, manufacturers must prioritize quality control and traceability. Customized software solutions can be designed to include stringent quality checks and real-time tracking of products throughout the production process. This level of traceability not only ensures compliance but also facilitates root cause analysis in case of defects or recalls, bolstering customer trust and brand reputation."},{"listTitle":"Enhanced Customer Experience:","listBody":"Customized software can help manufacturers gain a better understanding of their customers\' needs and preferences. By capturing and analyzing customer data, companies can tailor their offerings, improve product designs, and respond promptly to customer feedback. A positive customer experience fosters loyalty, attracts repeat business, and generates positive word-of-mouth referrals, all of which contribute to long-term success."},{"listTitle":"Data-Driven Decision Making:","listBody":"Data is the new currency in the manufacturing industry. Customized software solutions can integrate data analytics and business intelligence tools, empowering decision-makers with actionable insights. By leveraging data, manufacturing companies can make informed decisions regarding inventory management, production forecasting, resource allocation, and supply chain optimization, resulting in more strategic and profitable outcomes."},{"listTitle":"Strengthened Supply Chain Integration:","listBody":"Manufacturers often collaborate with multiple suppliers and partners, which can lead to complexities in supply chain management. Customized software can facilitate seamless integration and communication across the supply chain network, reducing delays, minimizing errors, and enhancing overall supply chain efficiency."},{"listTitle":"Cost Savings:","listBody":"While the initial investment in custom software may seem significant, the long-term benefits outweigh the costs. By optimizing processes, minimizing waste, and improving resource utilization, manufacturing companies can realize substantial cost savings over time."}]},{"title":"The Perils of Poor Implementation: Why Manufacturing Companies Fail in Digital Transformation","introductionTitle":"Introduction","dateCreated":"8/14/2023","introductionBody":"In an age driven by technology, manufacturing companies are faced with the imperative to undergo digital transformation in order to stay competitive, efficient, and relevant. While the promise of increased productivity, streamlined processes, and improved customer experiences is alluring, many companies struggle or fail in implementing digital transformation initiatives. This article explores the key reasons behind the failure of manufacturing companies to successfully embrace digital transformation and offers insights on how to avoid these pitfalls.","list":[{"listTitle":"Lack of Clear Strategy and Vision:","listBody":"One of the primary reasons manufacturing companies stumble in their digital transformation journey is the absence of a clear strategy and vision. Initiating technology changes without a comprehensive understanding of how they align with business objectives can lead to misaligned efforts, wasted resources, and confusion among employees. A successful digital transformation requires a well-defined roadmap that outlines the desired outcomes, identifies potential challenges, and integrates technology as an enabler of overall business goals."},{"listTitle":"Resistance to Change:","listBody":"Resistance to change is a common human trait, and in the context of manufacturing, it can pose a significant hurdle to digital transformation. Employees, particularly those who have been accustomed to traditional processes, may be hesitant or even opposed to adopting new technologies. Without proper change management strategies, including clear communication, training, and addressing concerns, the resistance can lead to inefficiencies, decreased morale, and ultimately, project failure."},{"listTitle":"Insufficient Investment in Skill Development:","listBody":"Digital transformation often requires a workforce with new skill sets, such as data analysis, programming, and automation expertise. Failing to invest in skill development can lead to a workforce ill-equipped to utilize and manage the new technologies. Manufacturing companies must invest in training and upskilling programs to ensure that employees are comfortable and proficient with the tools and processes associated with digital transformation."},{"listTitle":"Overlooking Legacy Systems and Integration Challenges:","listBody":"Many manufacturing companies have accumulated a complex web of legacy systems over the years. Integrating new digital solutions with these older systems can be a daunting task, leading to compatibility issues, data silos, and operational disruptions. Neglecting the challenges of integrating old and new technologies can result in fragmented processes and incomplete digital transformation efforts."},{"listTitle":"Unrealistic Expectations:","listBody":"Digital transformation is not a quick fix; it\'s a long-term endeavor that requires careful planning and patience. Some manufacturing companies fall into the trap of expecting immediate results, such as drastically improved efficiency and profitability. Unrealistic expectations can lead to frustration and disillusionment when the anticipated benefits don\'t materialize as quickly as anticipated. Realistic timelines and a focus on incremental improvements are essential for a successful transformation."},{"listTitle":"Vendor Lock-in and Technology Selection:","listBody":"Selecting the right technologies and partners is crucial in the digital transformation journey. Manufacturing companies that rush into partnerships without thorough research or get locked into single-vendor solutions can face limitations in scalability, flexibility, and innovation. Avoiding vendor lock-in and ensuring that technology selections align with long-term goals are vital to sustaining the transformation efforts over time."},{"listTitle":"Ignoring Data Privacy and Security:","listBody":"As manufacturing becomes increasingly connected and data-driven, ensuring the privacy and security of sensitive information becomes paramount. Neglecting data security measures can lead to breaches, operational disruptions, and reputational damage. Companies must prioritize robust cybersecurity strategies and compliance with data protection regulations to mitigate risks."}],"conclusionTitle":"Conclusion","conclusion":"Digital transformation holds the potential to revolutionize the manufacturing industry, but it\'s not without its challenges. The failure to implement digital transformation successfully often stems from a combination of factors, including inadequate strategy, resistance to change, lack of skill development, integration hurdles, unrealistic expectations, poor technology selection, and inadequate attention to security. Manufacturing companies must recognize these pitfalls and take proactive steps to mitigate them. By embracing digital transformation as a holistic and strategic effort, companies can unlock the true benefits of modern technology and secure their future in a rapidly evolving landscape."}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map