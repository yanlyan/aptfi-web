(self["webpackChunkaptfi"] = self["webpackChunkaptfi"] || []).push([["src_app_user-view_user-view_module_ts"],{

/***/ 1394:
/*!********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CdkStep": () => (/* binding */ CdkStep),
/* harmony export */   "CdkStepHeader": () => (/* binding */ CdkStepHeader),
/* harmony export */   "CdkStepLabel": () => (/* binding */ CdkStepLabel),
/* harmony export */   "CdkStepper": () => (/* binding */ CdkStepper),
/* harmony export */   "CdkStepperModule": () => (/* binding */ CdkStepperModule),
/* harmony export */   "CdkStepperNext": () => (/* binding */ CdkStepperNext),
/* harmony export */   "CdkStepperPrevious": () => (/* binding */ CdkStepperPrevious),
/* harmony export */   "STEPPER_GLOBAL_OPTIONS": () => (/* binding */ STEPPER_GLOBAL_OPTIONS),
/* harmony export */   "STEP_STATE": () => (/* binding */ STEP_STATE),
/* harmony export */   "StepperSelectionEvent": () => (/* binding */ StepperSelectionEvent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ 9238);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ 946);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 9490);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ 6461);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ 521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6782);










/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



function CdkStep_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
} }
const _c0 = ["*"];
class CdkStepHeader {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
    /** Focuses the step header. */
    focus() {
        this._elementRef.nativeElement.focus();
    }
}
CdkStepHeader.ɵfac = function CdkStepHeader_Factory(t) { return new (t || CdkStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
CdkStepHeader.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkStepHeader, selectors: [["", "cdkStepHeader", ""]], hostAttrs: ["role", "tab"] });
CdkStepHeader.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[cdkStepHeader]',
                host: {
                    'role': 'tab'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class CdkStepLabel {
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkStepLabel.ɵfac = function CdkStepLabel_Factory(t) { return new (t || CdkStepLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
CdkStepLabel.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkStepLabel, selectors: [["", "cdkStepLabel", ""]] });
CdkStepLabel.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[cdkStepLabel]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Used to generate unique ID for each stepper component. */
let nextId = 0;
/** Change event emitted on selection changes. */
class StepperSelectionEvent {
}
/** Enum to represent the different states of the steps. */
const STEP_STATE = {
    NUMBER: 'number',
    EDIT: 'edit',
    DONE: 'done',
    ERROR: 'error'
};
/** InjectionToken that can be used to specify the global stepper options. */
const STEPPER_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('STEPPER_GLOBAL_OPTIONS');
class CdkStep {
    constructor(_stepper, stepperOptions) {
        this._stepper = _stepper;
        /** Whether user has attempted to move away from the step. */
        this.interacted = false;
        /** Emits when the user has attempted to move away from the step. */
        this.interactedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._editable = true;
        this._optional = false;
        this._completedOverride = null;
        this._customError = null;
        this._stepperOptions = stepperOptions ? stepperOptions : {};
        this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
    }
    /** Whether the user can return to this step once it has been marked as completed. */
    get editable() {
        return this._editable;
    }
    set editable(value) {
        this._editable = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    }
    /** Whether the completion of step is optional. */
    get optional() {
        return this._optional;
    }
    set optional(value) {
        this._optional = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    }
    /** Whether step is marked as completed. */
    get completed() {
        return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
    }
    set completed(value) {
        this._completedOverride = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    }
    _getDefaultCompleted() {
        return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
    }
    /** Whether step has an error. */
    get hasError() {
        return this._customError == null ? this._getDefaultError() : this._customError;
    }
    set hasError(value) {
        this._customError = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    }
    _getDefaultError() {
        return this.stepControl && this.stepControl.invalid && this.interacted;
    }
    /** Selects this step component. */
    select() {
        this._stepper.selected = this;
    }
    /** Resets the step to its initial state. Note that this includes resetting form data. */
    reset() {
        this.interacted = false;
        if (this._completedOverride != null) {
            this._completedOverride = false;
        }
        if (this._customError != null) {
            this._customError = false;
        }
        if (this.stepControl) {
            this.stepControl.reset();
        }
    }
    ngOnChanges() {
        // Since basically all inputs of the MatStep get proxied through the view down to the
        // underlying MatStepHeader, we have to make sure that change detection runs correctly.
        this._stepper._stateChanged();
    }
    _markAsInteracted() {
        if (!this.interacted) {
            this.interacted = true;
            this.interactedStream.emit(this);
        }
    }
    /** Determines whether the error state can be shown. */
    _showError() {
        var _a;
        // We want to show the error state either if the user opted into/out of it using the
        // global options, or if they've explicitly set it through the `hasError` input.
        return (_a = this._stepperOptions.showError) !== null && _a !== void 0 ? _a : this._customError != null;
    }
}
CdkStep.ɵfac = function CdkStep_Factory(t) { return new (t || CdkStep)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CdkStepper)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](STEPPER_GLOBAL_OPTIONS, 8)); };
CdkStep.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CdkStep, selectors: [["cdk-step"]], contentQueries: function CdkStep_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkStepLabel, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
    } }, viewQuery: function CdkStep_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, inputs: { editable: "editable", optional: "optional", completed: "completed", hasError: "hasError", stepControl: "stepControl", label: "label", errorMessage: "errorMessage", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], state: "state" }, outputs: { interactedStream: "interacted" }, exportAs: ["cdkStep"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CdkStep_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CdkStep_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
CdkStep.ctorParameters = () => [
    { type: CdkStepper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CdkStepper),] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [STEPPER_GLOBAL_OPTIONS,] }] }
];
CdkStep.propDecorators = {
    stepLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [CdkStepLabel,] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, { static: true },] }],
    stepControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    interactedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['interacted',] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    errorMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['aria-labelledby',] }],
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    optional: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    completed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    hasError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStep, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'cdk-step',
                exportAs: 'cdkStep',
                template: '<ng-template><ng-content></ng-content></ng-template>',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: CdkStepper, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CdkStepper)]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [STEPPER_GLOBAL_OPTIONS]
            }] }]; }, { interactedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['interacted']
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], optional: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], completed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], hasError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], stepLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [CdkStepLabel]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, { static: true }]
        }], stepControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-labelledby']
        }], state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
class CdkStepper {
    constructor(_dir, _changeDetectorRef, _elementRef, 
    /**
     * @deprecated No longer in use, to be removed.
     * @breaking-change 13.0.0
     */
    _document) {
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        /** Emits when the component is destroyed. */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /** Steps that belong to the current stepper, excluding ones from nested steppers. */
        this.steps = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
        this._linear = false;
        this._selectedIndex = 0;
        /** Event emitted when the selected step has changed. */
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * @deprecated To be turned into a private property. Use `orientation` instead.
         * @breaking-change 13.0.0
         */
        this._orientation = 'horizontal';
        this._groupId = nextId++;
    }
    /** Whether the validity of previous steps should be checked or not. */
    get linear() {
        return this._linear;
    }
    set linear(value) {
        this._linear = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    }
    /** The index of the selected step. */
    get selectedIndex() {
        return this._selectedIndex;
    }
    set selectedIndex(index) {
        var _a;
        const newIndex = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(index);
        if (this.steps && this._steps) {
            // Ensure that the index can't be out of bounds.
            if (!this._isValidIndex(index) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
            }
            (_a = this.selected) === null || _a === void 0 ? void 0 : _a._markAsInteracted();
            if (this._selectedIndex !== newIndex && !this._anyControlsInvalidOrPending(newIndex) &&
                (newIndex >= this._selectedIndex || this.steps.toArray()[newIndex].editable)) {
                this._updateSelectedItemIndex(index);
            }
        }
        else {
            this._selectedIndex = newIndex;
        }
    }
    /** The step that is selected. */
    get selected() {
        return this.steps ? this.steps.toArray()[this.selectedIndex] : undefined;
    }
    set selected(step) {
        this.selectedIndex = (step && this.steps) ? this.steps.toArray().indexOf(step) : -1;
    }
    /** Orientation of the stepper. */
    get orientation() { return this._orientation; }
    set orientation(value) {
        // This is a protected method so that `MatSteppter` can hook into it.
        this._orientation = value;
        if (this._keyManager) {
            this._keyManager.withVerticalOrientation(value === 'vertical');
        }
    }
    ngAfterContentInit() {
        this._steps.changes
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)(this._steps), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroyed))
            .subscribe((steps) => {
            this.steps.reset(steps.filter(step => step._stepper === this));
            this.steps.notifyOnChanges();
        });
    }
    ngAfterViewInit() {
        // Note that while the step headers are content children by default, any components that
        // extend this one might have them as view children. We initialize the keyboard handling in
        // AfterViewInit so we're guaranteed for both view and content children to be defined.
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.FocusKeyManager(this._stepHeader)
            .withWrap()
            .withHomeAndEnd()
            .withVerticalOrientation(this._orientation === 'vertical');
        (this._dir ? this._dir.change : (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)())
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)(this._layoutDirection()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroyed))
            .subscribe(direction => this._keyManager.withHorizontalOrientation(direction));
        this._keyManager.updateActiveItem(this._selectedIndex);
        // No need to `takeUntil` here, because we're the ones destroying `steps`.
        this.steps.changes.subscribe(() => {
            if (!this.selected) {
                this._selectedIndex = Math.max(this._selectedIndex - 1, 0);
            }
        });
        // The logic which asserts that the selected index is within bounds doesn't run before the
        // steps are initialized, because we don't how many steps there are yet so we may have an
        // invalid index on init. If that's the case, auto-correct to the default so we don't throw.
        if (!this._isValidIndex(this._selectedIndex)) {
            this._selectedIndex = 0;
        }
    }
    ngOnDestroy() {
        this.steps.destroy();
        this._destroyed.next();
        this._destroyed.complete();
    }
    /** Selects and focuses the next step in list. */
    next() {
        this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
    }
    /** Selects and focuses the previous step in list. */
    previous() {
        this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
    }
    /** Resets the stepper to its initial state. Note that this includes clearing form data. */
    reset() {
        this._updateSelectedItemIndex(0);
        this.steps.forEach(step => step.reset());
        this._stateChanged();
    }
    /** Returns a unique id for each step label element. */
    _getStepLabelId(i) {
        return `cdk-step-label-${this._groupId}-${i}`;
    }
    /** Returns unique id for each step content element. */
    _getStepContentId(i) {
        return `cdk-step-content-${this._groupId}-${i}`;
    }
    /** Marks the component to be change detected. */
    _stateChanged() {
        this._changeDetectorRef.markForCheck();
    }
    /** Returns position state of the step with the given index. */
    _getAnimationDirection(index) {
        const position = index - this._selectedIndex;
        if (position < 0) {
            return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
        }
        else if (position > 0) {
            return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
        }
        return 'current';
    }
    /** Returns the type of icon to be displayed. */
    _getIndicatorType(index, state = STEP_STATE.NUMBER) {
        const step = this.steps.toArray()[index];
        const isCurrentStep = this._isCurrentStep(index);
        return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) :
            this._getGuidelineLogic(step, isCurrentStep, state);
    }
    _getDefaultIndicatorLogic(step, isCurrentStep) {
        if (step._showError() && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
        }
        else if (!step.completed || isCurrentStep) {
            return STEP_STATE.NUMBER;
        }
        else {
            return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
        }
    }
    _getGuidelineLogic(step, isCurrentStep, state = STEP_STATE.NUMBER) {
        if (step._showError() && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
        }
        else if (step.completed && !isCurrentStep) {
            return STEP_STATE.DONE;
        }
        else if (step.completed && isCurrentStep) {
            return state;
        }
        else if (step.editable && isCurrentStep) {
            return STEP_STATE.EDIT;
        }
        else {
            return state;
        }
    }
    _isCurrentStep(index) {
        return this._selectedIndex === index;
    }
    /** Returns the index of the currently-focused step header. */
    _getFocusIndex() {
        return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
    }
    _updateSelectedItemIndex(newIndex) {
        const stepsArray = this.steps.toArray();
        this.selectionChange.emit({
            selectedIndex: newIndex,
            previouslySelectedIndex: this._selectedIndex,
            selectedStep: stepsArray[newIndex],
            previouslySelectedStep: stepsArray[this._selectedIndex],
        });
        // If focus is inside the stepper, move it to the next header, otherwise it may become
        // lost when the active step content is hidden. We can't be more granular with the check
        // (e.g. checking whether focus is inside the active step), because we don't have a
        // reference to the elements that are rendering out the content.
        this._containsFocus() ? this._keyManager.setActiveItem(newIndex) :
            this._keyManager.updateActiveItem(newIndex);
        this._selectedIndex = newIndex;
        this._stateChanged();
    }
    _onKeydown(event) {
        const hasModifier = (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event);
        const keyCode = event.keyCode;
        const manager = this._keyManager;
        if (manager.activeItemIndex != null && !hasModifier &&
            (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER)) {
            this.selectedIndex = manager.activeItemIndex;
            event.preventDefault();
        }
        else {
            manager.onKeydown(event);
        }
    }
    _anyControlsInvalidOrPending(index) {
        if (this._linear && index >= 0) {
            return this.steps.toArray().slice(0, index).some(step => {
                const control = step.stepControl;
                const isIncomplete = control ? (control.invalid || control.pending || !step.interacted) : !step.completed;
                return isIncomplete && !step.optional && !step._completedOverride;
            });
        }
        return false;
    }
    _layoutDirection() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Checks whether the stepper contains the focused element. */
    _containsFocus() {
        const stepperElement = this._elementRef.nativeElement;
        const focusedElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__._getFocusedElementPierceShadowDom)();
        return stepperElement === focusedElement || stepperElement.contains(focusedElement);
    }
    /** Checks whether the passed-in index is a valid step index. */
    _isValidIndex(index) {
        return index > -1 && (!this.steps || index < this.steps.length);
    }
}
CdkStepper.ɵfac = function CdkStepper_Factory(t) { return new (t || CdkStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT)); };
CdkStepper.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkStepper, selectors: [["", "cdkStepper", ""]], contentQueries: function CdkStepper_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkStep, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkStepHeader, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._steps = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
    } }, inputs: { linear: "linear", selectedIndex: "selectedIndex", selected: "selected", orientation: "orientation" }, outputs: { selectionChange: "selectionChange" }, exportAs: ["cdkStepper"] });
CdkStepper.ctorParameters = () => [
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT,] }] }
];
CdkStepper.propDecorators = {
    _steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [CdkStep, { descendants: true },] }],
    _stepHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [CdkStepHeader, { descendants: true },] }],
    linear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectedIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[cdkStepper]',
                exportAs: 'cdkStepper'
            }]
    }], function () { return [{ type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT]
            }] }]; }, { selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], linear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [CdkStep, { descendants: true }]
        }], _stepHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [CdkStepHeader, { descendants: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Button that moves to the next step in a stepper workflow. */
class CdkStepperNext {
    constructor(_stepper) {
        this._stepper = _stepper;
        /** Type of the next button. Defaults to "submit" if not specified. */
        this.type = 'submit';
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleClick() {
        this._stepper.next();
    }
}
CdkStepperNext.ɵfac = function CdkStepperNext_Factory(t) { return new (t || CdkStepperNext)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkStepper)); };
CdkStepperNext.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkStepperNext, selectors: [["button", "cdkStepperNext", ""]], hostVars: 1, hostBindings: function CdkStepperNext_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdkStepperNext_click_HostBindingHandler() { return ctx._handleClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", ctx.type);
    } }, inputs: { type: "type" } });
CdkStepperNext.ctorParameters = () => [
    { type: CdkStepper }
];
CdkStepperNext.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    _handleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['click',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepperNext, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'button[cdkStepperNext]',
                host: {
                    '[type]': 'type'
                }
            }]
    }], function () { return [{ type: CdkStepper }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], 
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click']
        }] }); })();
/** Button that moves to the previous step in a stepper workflow. */
class CdkStepperPrevious {
    constructor(_stepper) {
        this._stepper = _stepper;
        /** Type of the previous button. Defaults to "button" if not specified. */
        this.type = 'button';
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleClick() {
        this._stepper.previous();
    }
}
CdkStepperPrevious.ɵfac = function CdkStepperPrevious_Factory(t) { return new (t || CdkStepperPrevious)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkStepper)); };
CdkStepperPrevious.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkStepperPrevious, selectors: [["button", "cdkStepperPrevious", ""]], hostVars: 1, hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdkStepperPrevious_click_HostBindingHandler() { return ctx._handleClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", ctx.type);
    } }, inputs: { type: "type" } });
CdkStepperPrevious.ctorParameters = () => [
    { type: CdkStepper }
];
CdkStepperPrevious.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    _handleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['click',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepperPrevious, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'button[cdkStepperPrevious]',
                host: {
                    '[type]': 'type'
                }
            }]
    }], function () { return [{ type: CdkStepper }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], 
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class CdkStepperModule {
}
CdkStepperModule.ɵfac = function CdkStepperModule_Factory(t) { return new (t || CdkStepperModule)(); };
CdkStepperModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CdkStepperModule });
CdkStepperModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.BidiModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.BidiModule],
                exports: [
                    CdkStep,
                    CdkStepper,
                    CdkStepHeader,
                    CdkStepLabel,
                    CdkStepperNext,
                    CdkStepperPrevious,
                ],
                declarations: [
                    CdkStep,
                    CdkStepper,
                    CdkStepHeader,
                    CdkStepLabel,
                    CdkStepperNext,
                    CdkStepperPrevious,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CdkStepperModule, { declarations: function () { return [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.BidiModule]; }, exports: function () { return [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=stepper.js.map

/***/ }),

/***/ 4553:
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_STEPPER_INTL_PROVIDER": () => (/* binding */ MAT_STEPPER_INTL_PROVIDER),
/* harmony export */   "MAT_STEPPER_INTL_PROVIDER_FACTORY": () => (/* binding */ MAT_STEPPER_INTL_PROVIDER_FACTORY),
/* harmony export */   "MatHorizontalStepper": () => (/* binding */ MatHorizontalStepper),
/* harmony export */   "MatStep": () => (/* binding */ MatStep),
/* harmony export */   "MatStepContent": () => (/* binding */ MatStepContent),
/* harmony export */   "MatStepHeader": () => (/* binding */ MatStepHeader),
/* harmony export */   "MatStepLabel": () => (/* binding */ MatStepLabel),
/* harmony export */   "MatStepper": () => (/* binding */ MatStepper),
/* harmony export */   "MatStepperIcon": () => (/* binding */ MatStepperIcon),
/* harmony export */   "MatStepperIntl": () => (/* binding */ MatStepperIntl),
/* harmony export */   "MatStepperModule": () => (/* binding */ MatStepperModule),
/* harmony export */   "MatStepperNext": () => (/* binding */ MatStepperNext),
/* harmony export */   "MatStepperPrevious": () => (/* binding */ MatStepperPrevious),
/* harmony export */   "MatVerticalStepper": () => (/* binding */ MatVerticalStepper),
/* harmony export */   "matStepperAnimations": () => (/* binding */ matStepperAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/portal */ 7636);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/stepper */ 1394);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 9238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 826);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/bidi */ 946);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 9761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 7519);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 7238);














/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */








function MatStepHeader_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 8);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", ctx_r0._getIconContext());
} }
function MatStepHeader_ng_container_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6._getDefaultTextForState(ctx_r6.state));
} }
function MatStepHeader_ng_container_4_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7._getDefaultTextForState(ctx_r7.state));
} }
function MatStepHeader_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatStepHeader_ng_container_4_span_1_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatStepHeader_ng_container_4_mat_icon_2_Template, 2, 1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "number");
} }
function MatStepHeader_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2._templateLabel().template);
} }
function MatStepHeader_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.label);
} }
function MatStepHeader_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4._intl.optionalLabel);
} }
function MatStepHeader_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.errorMessage);
} }
function MatStep_ng_template_0_ng_template_1_Template(rf, ctx) { }
function MatStep_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatStep_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 0);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx_r0._portal);
} }
const _c0 = ["*"];
function MatStepper_ng_container_1_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} }
const _c1 = function (a0, a1) { return { step: a0, i: a1 }; };
function MatStepper_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatStepper_ng_container_1_ng_container_2_div_2_Template, 1, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const step_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const isLast_r8 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, step_r6, i_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isLast_r8);
} }
function MatStepper_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@horizontalStepTransition.done", function MatStepper_ng_container_1_div_4_Template_div_animation_horizontalStepTransition_done_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12._animationDone.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@horizontalStepTransition", ctx_r5._getAnimationDirection(i_r11))("id", ctx_r5._getStepContentId(i_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx_r5._getStepLabelId(i_r11))("aria-expanded", ctx_r5.selectedIndex === i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", step_r10.content);
} }
function MatStepper_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatStepper_ng_container_1_ng_container_2_Template, 3, 6, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatStepper_ng_container_1_div_4_Template, 2, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.steps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.steps);
} }
function MatStepper_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@verticalStepTransition.done", function MatStepper_ng_container_2_div_1_Template_div_animation_verticalStepTransition_done_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18._animationDone.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](5, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const isLast_r17 = ctx.last;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c1, step_r15, i_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-stepper-vertical-line", !isLast_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@verticalStepTransition", ctx_r14._getAnimationDirection(i_r16))("id", ctx_r14._getStepContentId(i_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx_r14._getStepLabelId(i_r16))("aria-expanded", ctx_r14.selectedIndex === i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", step_r15.content);
} }
function MatStepper_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatStepper_ng_container_2_div_1_Template, 6, 12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.steps);
} }
function MatStepper_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-step-header", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatStepper_ng_template_3_Template_mat_step_header_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const step_r20 = restoredCtx.step; return step_r20.select(); })("keydown", function MatStepper_ng_template_3_Template_mat_step_header_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24._onKeydown($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r20 = ctx.step;
    const i_r21 = ctx.i;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-horizontal-stepper-header", ctx_r3.orientation === "horizontal")("mat-vertical-stepper-header", ctx_r3.orientation === "vertical");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabIndex", ctx_r3._getFocusIndex() === i_r21 ? 0 : -1)("id", ctx_r3._getStepLabelId(i_r21))("index", i_r21)("state", ctx_r3._getIndicatorType(i_r21, step_r20.state))("label", step_r20.stepLabel || step_r20.label)("selected", ctx_r3.selectedIndex === i_r21)("active", ctx_r3._stepIsNavigable(i_r21, step_r20))("optional", step_r20.optional)("errorMessage", step_r20.errorMessage)("iconOverrides", ctx_r3._iconOverrides)("disableRipple", ctx_r3.disableRipple)("color", step_r20.color || ctx_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-posinset", i_r21 + 1)("aria-setsize", ctx_r3.steps.length)("aria-controls", ctx_r3._getStepContentId(i_r21))("aria-selected", ctx_r3.selectedIndex == i_r21)("aria-label", step_r20.ariaLabel || null)("aria-labelledby", !step_r20.ariaLabel && step_r20.ariaLabelledby ? step_r20.ariaLabelledby : null)("aria-disabled", ctx_r3._stepIsNavigable(i_r21, step_r20) ? null : true);
} }
class MatStepLabel extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepLabel {
}
MatStepLabel.ɵfac = /*@__PURE__*/ function () { let ɵMatStepLabel_BaseFactory; return function MatStepLabel_Factory(t) { return (ɵMatStepLabel_BaseFactory || (ɵMatStepLabel_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatStepLabel)))(t || MatStepLabel); }; }();
MatStepLabel.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatStepLabel, selectors: [["", "matStepLabel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[matStepLabel]'
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Stepper data that is required for internationalization. */
class MatStepperIntl {
    constructor() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /** Label that is rendered below optional steps. */
        this.optionalLabel = 'Optional';
    }
}
MatStepperIntl.ɵfac = function MatStepperIntl_Factory(t) { return new (t || MatStepperIntl)(); };
MatStepperIntl.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function MatStepperIntl_Factory() { return new MatStepperIntl(); }, token: MatStepperIntl, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepperIntl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
/** @docs-private */
function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatStepperIntl();
}
/** @docs-private */
const MAT_STEPPER_INTL_PROVIDER = {
    provide: MatStepperIntl,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatStepperIntl]],
    useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatStepHeader.
/** @docs-private */
const _MatStepHeaderBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinColor)(class MatStepHeaderBase extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepHeader {
    constructor(elementRef) {
        super(elementRef);
    }
}, 'primary');
class MatStepHeader extends _MatStepHeaderBase {
    constructor(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
        super(_elementRef);
        this._intl = _intl;
        this._focusMonitor = _focusMonitor;
        this._intlSubscription = _intl.changes.subscribe(() => changeDetectorRef.markForCheck());
    }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, true);
    }
    ngOnDestroy() {
        this._intlSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /** Focuses the step header. */
    focus(origin, options) {
        if (origin) {
            this._focusMonitor.focusVia(this._elementRef, origin, options);
        }
        else {
            this._elementRef.nativeElement.focus(options);
        }
    }
    /** Returns string label of given step if it is a text label. */
    _stringLabel() {
        return this.label instanceof MatStepLabel ? null : this.label;
    }
    /** Returns MatStepLabel if the label of given step is a template label. */
    _templateLabel() {
        return this.label instanceof MatStepLabel ? this.label : null;
    }
    /** Returns the host HTML element. */
    _getHostElement() {
        return this._elementRef.nativeElement;
    }
    /** Template context variables that are exposed to the `matStepperIcon` instances. */
    _getIconContext() {
        return {
            index: this.index,
            active: this.active,
            optional: this.optional
        };
    }
    _getDefaultTextForState(state) {
        if (state == 'number') {
            return `${this.index + 1}`;
        }
        if (state == 'edit') {
            return 'create';
        }
        if (state == 'error') {
            return 'warning';
        }
        return state;
    }
}
MatStepHeader.ɵfac = function MatStepHeader_Factory(t) { return new (t || MatStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatStepperIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
MatStepHeader.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatStepHeader, selectors: [["mat-step-header"]], hostAttrs: ["role", "tab", 1, "mat-step-header"], inputs: { color: "color", state: "state", label: "label", errorMessage: "errorMessage", iconOverrides: "iconOverrides", index: "index", selected: "selected", active: "active", optional: "optional", disableRipple: "disableRipple" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 19, consts: [["matRipple", "", 1, "mat-step-header-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content", 3, "ngSwitch"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngSwitchCase"], [3, "ngSwitch", 4, "ngSwitchDefault"], [1, "mat-step-label"], ["class", "mat-step-text-label", 4, "ngIf"], ["class", "mat-step-optional", 4, "ngIf"], ["class", "mat-step-sub-label-error", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "mat-step-text-label"], [3, "ngTemplateOutlet"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"]], template: function MatStepHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatStepHeader_ng_container_3_Template, 1, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatStepHeader_ng_container_4_Template, 3, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MatStepHeader_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MatStepHeader_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MatStepHeader_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MatStepHeader_div_9_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mat-step-icon-state-", ctx.state, " mat-step-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-step-icon-selected", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", !!(ctx.iconOverrides && ctx.iconOverrides[ctx.state]));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._templateLabel());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._stringLabel());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.optional && ctx.state != "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state == "error");
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon], styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"], encapsulation: 2, changeDetection: 0 });
MatStepHeader.ctorParameters = () => [
    { type: MatStepperIntl },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
MatStepHeader.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    errorMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    iconOverrides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    optional: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-step-header',
                template: "<div class=\"mat-step-header-ripple mat-focus-indicator\" matRipple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disableRipple\"></div>\n\n<div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\">\n  <div class=\"mat-step-icon-content\" [ngSwitch]=\"!!(iconOverrides && iconOverrides[state])\">\n    <ng-container\n      *ngSwitchCase=\"true\"\n      [ngTemplateOutlet]=\"iconOverrides[state]\"\n      [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container>\n    <ng-container *ngSwitchDefault [ngSwitch]=\"state\">\n      <span *ngSwitchCase=\"'number'\">{{_getDefaultTextForState(state)}}</span>\n      <mat-icon *ngSwitchDefault>{{_getDefaultTextForState(state)}}</mat-icon>\n    </ng-container>\n  </div>\n</div>\n<div class=\"mat-step-label\"\n     [class.mat-step-label-active]=\"active\"\n     [class.mat-step-label-selected]=\"selected\"\n     [class.mat-step-label-error]=\"state == 'error'\">\n  <!-- If there is a label template, use it. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_templateLabel()\">\n    <ng-container [ngTemplateOutlet]=\"_templateLabel()!.template\"></ng-container>\n  </div>\n  <!-- If there is no label template, fall back to the text label. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div>\n\n  <div class=\"mat-step-optional\" *ngIf=\"optional && state != 'error'\">{{_intl.optionalLabel}}</div>\n  <div class=\"mat-step-sub-label-error\" *ngIf=\"state == 'error'\">{{errorMessage}}</div>\n</div>\n\n",
                inputs: ['color'],
                host: {
                    'class': 'mat-step-header',
                    'role': 'tab'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
            }]
    }], function () { return [{ type: MatStepperIntl }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], iconOverrides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], optional: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by the Material steppers.
 * @docs-private
 */
const matStepperAnimations = {
    /** Animation that transitions the step along the X axis in a horizontal stepper. */
    horizontalStepTransition: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('horizontalStepTransition', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('previous', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden' })),
        // Transition to `inherit`, rather than `visible`,
        // because visibility on a child element the one from the parent,
        // making this element focusable inside of a `hidden` element.
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('current', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ transform: 'none', visibility: 'inherit' })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('next', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ transform: 'translate3d(100%, 0, 0)', visibility: 'hidden' })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
    ]),
    /** Animation that transitions the step along the Y axis in a vertical stepper. */
    verticalStepTransition: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('verticalStepTransition', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('previous', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ height: '0px', visibility: 'hidden' })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('next', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ height: '0px', visibility: 'hidden' })),
        // Transition to `inherit`, rather than `visible`,
        // because visibility on a child element the one from the parent,
        // making this element focusable inside of a `hidden` element.
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('current', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ height: '*', visibility: 'inherit' })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('* <=> current', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Template to be used to override the icons inside the step header.
 */
class MatStepperIcon {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
MatStepperIcon.ɵfac = function MatStepperIcon_Factory(t) { return new (t || MatStepperIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
MatStepperIcon.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatStepperIcon, selectors: [["ng-template", "matStepperIcon", ""]], inputs: { name: ["matStepperIcon", "name"] } });
MatStepperIcon.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
MatStepperIcon.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['matStepperIcon',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepperIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'ng-template[matStepperIcon]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matStepperIcon']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Content for a `mat-step` that will be rendered lazily.
 */
class MatStepContent {
    constructor(_template) {
        this._template = _template;
    }
}
MatStepContent.ɵfac = function MatStepContent_Factory(t) { return new (t || MatStepContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
MatStepContent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatStepContent, selectors: [["ng-template", "matStepContent", ""]] });
MatStepContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'ng-template[matStepContent]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatStep extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStep {
    constructor(stepper, _errorStateMatcher, _viewContainerRef, stepperOptions) {
        super(stepper, stepperOptions);
        this._errorStateMatcher = _errorStateMatcher;
        this._viewContainerRef = _viewContainerRef;
        this._isSelected = rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription.EMPTY;
    }
    ngAfterContentInit() {
        this._isSelected = this._stepper.steps.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => {
            return this._stepper.selectionChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(event => event.selectedStep === this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(this._stepper.selected === this));
        })).subscribe(isSelected => {
            if (isSelected && this._lazyContent && !this._portal) {
                this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.TemplatePortal(this._lazyContent._template, this._viewContainerRef);
            }
        });
    }
    ngOnDestroy() {
        this._isSelected.unsubscribe();
    }
    /** Custom error state matcher that additionally checks for validity of interacted form. */
    isErrorState(control, form) {
        const originalErrorState = this._errorStateMatcher.isErrorState(control, form);
        // Custom error state checks for the validity of form that is not submitted or touched
        // since user can trigger a form change by calling for another step without directly
        // interacting with the current form.
        const customErrorState = !!(control && control.invalid && this.interacted);
        return originalErrorState || customErrorState;
    }
}
MatStep.ɵfac = function MatStep_Factory(t) { return new (t || MatStep)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatStepper)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.STEPPER_GLOBAL_OPTIONS, 8)); };
MatStep.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatStep, selectors: [["mat-step"]], contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatStepLabel, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatStepContent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lazyContent = _t.first);
    } }, inputs: { color: "color" }, exportAs: ["matStep"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher, useExisting: MatStep },
            { provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStep, useExisting: MatStep },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[3, "cdkPortalOutlet"]], template: function MatStep_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatStep_ng_template_0_Template, 2, 1, "ng-template");
    } }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.CdkPortalOutlet], encapsulation: 2, changeDetection: 0 });
MatStep.ctorParameters = () => [
    { type: MatStepper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatStepper),] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.STEPPER_GLOBAL_OPTIONS,] }] }
];
MatStep.propDecorators = {
    stepLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MatStepLabel,] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    _lazyContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [MatStepContent, { static: false },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStep, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-step',
                template: "<ng-template>\n  <ng-content></ng-content>\n  <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n</ng-template>\n",
                providers: [
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher, useExisting: MatStep },
                    { provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStep, useExisting: MatStep },
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                exportAs: 'matStep',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: MatStepper, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatStepper)]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.STEPPER_GLOBAL_OPTIONS]
            }] }]; }, { stepLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MatStepLabel]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _lazyContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [MatStepContent, { static: false }]
        }] }); })();
/**
 * Proxies the public APIs from `MatStepper` to the deprecated `MatHorizontalStepper` and
 * `MatVerticalStepper`.
 * @deprecated Use `MatStepper` instead.
 * @breaking-change 13.0.0
 * @docs-private
 */
class _MatProxyStepperBase extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper {
}
_MatProxyStepperBase.ɵfac = /*@__PURE__*/ function () { let ɵ_MatProxyStepperBase_BaseFactory; return function _MatProxyStepperBase_Factory(t) { return (ɵ_MatProxyStepperBase_BaseFactory || (ɵ_MatProxyStepperBase_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatProxyStepperBase)))(t || _MatProxyStepperBase); }; }();
_MatProxyStepperBase.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatProxyStepperBase, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatProxyStepperBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], null, null); })();
/**
 * @deprecated Use `MatStepper` instead.
 * @breaking-change 13.0.0
 */
class MatHorizontalStepper extends _MatProxyStepperBase {
}
MatHorizontalStepper.ɵfac = /*@__PURE__*/ function () { let ɵMatHorizontalStepper_BaseFactory; return function MatHorizontalStepper_Factory(t) { return (ɵMatHorizontalStepper_BaseFactory || (ɵMatHorizontalStepper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHorizontalStepper)))(t || MatHorizontalStepper); }; }();
MatHorizontalStepper.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatHorizontalStepper, selectors: [["mat-horizontal-stepper"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHorizontalStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: 'mat-horizontal-stepper' }]
    }], null, null); })();
/**
 * @deprecated Use `MatStepper` instead.
 * @breaking-change 13.0.0
 */
class MatVerticalStepper extends _MatProxyStepperBase {
}
MatVerticalStepper.ɵfac = /*@__PURE__*/ function () { let ɵMatVerticalStepper_BaseFactory; return function MatVerticalStepper_Factory(t) { return (ɵMatVerticalStepper_BaseFactory || (ɵMatVerticalStepper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatVerticalStepper)))(t || MatVerticalStepper); }; }();
MatVerticalStepper.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatVerticalStepper, selectors: [["mat-vertical-stepper"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatVerticalStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: 'mat-vertical-stepper' }]
    }], null, null); })();
class MatStepper extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper {
    constructor(dir, changeDetectorRef, elementRef, _document) {
        super(dir, changeDetectorRef, elementRef, _document);
        /** Steps that belong to the current stepper, excluding ones from nested steppers. */
        this.steps = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
        /** Event emitted when the current step is done transitioning in. */
        this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Whether the label should display in bottom or end position.
         * Only applies in the `horizontal` orientation.
         */
        this.labelPosition = 'end';
        /** Consumer-specified template-refs to be used to override the header icons. */
        this._iconOverrides = {};
        /** Stream of animation `done` events when the body expands/collapses. */
        this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        const nodeName = elementRef.nativeElement.nodeName.toLowerCase();
        this.orientation = nodeName === 'mat-vertical-stepper' ? 'vertical' : 'horizontal';
    }
    ngAfterContentInit() {
        super.ngAfterContentInit();
        this._icons.forEach(({ name, templateRef }) => this._iconOverrides[name] = templateRef);
        // Mark the component for change detection whenever the content children query changes
        this.steps.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._destroyed)).subscribe(() => {
            this._stateChanged();
        });
        this._animationDone.pipe(
        // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
        // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
        // See https://github.com/angular/angular/issues/24084
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)((x, y) => x.fromState === y.fromState && x.toState === y.toState), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._destroyed)).subscribe(event => {
            if (event.toState === 'current') {
                this.animationDone.emit();
            }
        });
    }
    _stepIsNavigable(index, step) {
        return step.completed || this.selectedIndex === index || !this.linear;
    }
}
MatStepper.ɵfac = function MatStepper_Factory(t) { return new (t || MatStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT)); };
MatStepper.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatStepper, selectors: [["mat-stepper"], ["mat-vertical-stepper"], ["mat-horizontal-stepper"], ["", "matStepper", ""]], contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatStep, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatStepperIcon, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._steps = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._icons = _t);
    } }, viewQuery: function MatStepper_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatStepHeader, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
    } }, hostAttrs: ["role", "tablist"], hostVars: 9, hostBindings: function MatStepper_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", ctx.orientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-stepper-horizontal", ctx.orientation === "horizontal")("mat-stepper-vertical", ctx.orientation === "vertical")("mat-stepper-label-position-end", ctx.orientation === "horizontal" && ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.orientation === "horizontal" && ctx.labelPosition == "bottom");
    } }, inputs: { selectedIndex: "selectedIndex", labelPosition: "labelPosition", disableRipple: "disableRipple", color: "color" }, outputs: { animationDone: "animationDone" }, exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper, useExisting: MatStepper },
            { provide: MatHorizontalStepper, useExisting: MatStepper },
            { provide: MatVerticalStepper, useExisting: MatStepper },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], ["stepTemplate", ""], [1, "mat-horizontal-stepper-header-container"], [4, "ngFor", "ngForOf"], [1, "mat-horizontal-content-container"], ["class", "mat-horizontal-stepper-content", "role", "tabpanel", 3, "id", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "mat-stepper-horizontal-line", 4, "ngIf"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"], ["class", "mat-step", 4, "ngFor", "ngForOf"], [1, "mat-step"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "color", "click", "keydown"]], template: function MatStepper_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatStepper_ng_container_1_Template, 5, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatStepper_ng_container_2_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatStepper_ng_template_3_Template, 1, 23, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.orientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "vertical");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, MatStepHeader], styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"], encapsulation: 2, data: { animation: [
            matStepperAnimations.horizontalStepTransition,
            matStepperAnimations.verticalStepTransition,
        ] }, changeDetection: 0 });
MatStepper.ctorParameters = () => [
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT,] }] }
];
MatStepper.propDecorators = {
    _stepHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren, args: [MatStepHeader,] }],
    _steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [MatStep, { descendants: true },] }],
    _icons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [MatStepperIcon, { descendants: true },] }],
    animationDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]',
                exportAs: 'matStepper, matVerticalStepper, matHorizontalStepper',
                template: "<ng-container [ngSwitch]=\"orientation\">\n  <!-- Horizontal stepper -->\n  <ng-container *ngSwitchCase=\"'horizontal'\">\n    <div class=\"mat-horizontal-stepper-header-container\">\n      <ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\">\n        <ng-container\n          [ngTemplateOutlet]=\"stepTemplate\"\n          [ngTemplateOutletContext]=\"{step: step, i: i}\"></ng-container>\n        <div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div>\n      </ng-container>\n    </div>\n\n    <div class=\"mat-horizontal-content-container\">\n      <div *ngFor=\"let step of steps; let i = index\"\n           class=\"mat-horizontal-stepper-content\" role=\"tabpanel\"\n           [@horizontalStepTransition]=\"_getAnimationDirection(i)\"\n           (@horizontalStepTransition.done)=\"_animationDone.next($event)\"\n           [id]=\"_getStepContentId(i)\"\n           [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n           [attr.aria-expanded]=\"selectedIndex === i\">\n        <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n      </div>\n    </div>\n  </ng-container>\n\n  <!-- Vertical stepper -->\n  <ng-container *ngSwitchCase=\"'vertical'\">\n    <div class=\"mat-step\" *ngFor=\"let step of steps; let i = index; let isLast = last\">\n      <ng-container\n        [ngTemplateOutlet]=\"stepTemplate\"\n        [ngTemplateOutletContext]=\"{step: step, i: i}\"></ng-container>\n      <div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\">\n        <div class=\"mat-vertical-stepper-content\" role=\"tabpanel\"\n             [@verticalStepTransition]=\"_getAnimationDirection(i)\"\n             (@verticalStepTransition.done)=\"_animationDone.next($event)\"\n             [id]=\"_getStepContentId(i)\"\n             [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n             [attr.aria-expanded]=\"selectedIndex === i\">\n          <div class=\"mat-vertical-content\">\n            <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n</ng-container>\n\n<!-- Common step templating -->\n<ng-template let-step=\"step\" let-i=\"i\" #stepTemplate>\n  <mat-step-header\n    [class.mat-horizontal-stepper-header]=\"orientation === 'horizontal'\"\n    [class.mat-vertical-stepper-header]=\"orientation === 'vertical'\"\n    (click)=\"step.select()\"\n    (keydown)=\"_onKeydown($event)\"\n    [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\"\n    [id]=\"_getStepLabelId(i)\"\n    [attr.aria-posinset]=\"i + 1\"\n    [attr.aria-setsize]=\"steps.length\"\n    [attr.aria-controls]=\"_getStepContentId(i)\"\n    [attr.aria-selected]=\"selectedIndex == i\"\n    [attr.aria-label]=\"step.ariaLabel || null\"\n    [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n    [attr.aria-disabled]=\"_stepIsNavigable(i, step) ? null : true\"\n    [index]=\"i\"\n    [state]=\"_getIndicatorType(i, step.state)\"\n    [label]=\"step.stepLabel || step.label\"\n    [selected]=\"selectedIndex === i\"\n    [active]=\"_stepIsNavigable(i, step)\"\n    [optional]=\"step.optional\"\n    [errorMessage]=\"step.errorMessage\"\n    [iconOverrides]=\"_iconOverrides\"\n    [disableRipple]=\"disableRipple\"\n    [color]=\"step.color || color\"></mat-step-header>\n</ng-template>\n",
                inputs: ['selectedIndex'],
                host: {
                    '[class.mat-stepper-horizontal]': 'orientation === "horizontal"',
                    '[class.mat-stepper-vertical]': 'orientation === "vertical"',
                    '[class.mat-stepper-label-position-end]': 'orientation === "horizontal" && labelPosition == "end"',
                    '[class.mat-stepper-label-position-bottom]': 'orientation === "horizontal" && labelPosition == "bottom"',
                    '[attr.aria-orientation]': 'orientation',
                    'role': 'tablist'
                },
                animations: [
                    matStepperAnimations.horizontalStepTransition,
                    matStepperAnimations.verticalStepTransition,
                ],
                providers: [
                    { provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper, useExisting: MatStepper },
                    { provide: MatHorizontalStepper, useExisting: MatStepper },
                    { provide: MatVerticalStepper, useExisting: MatStepper },
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
            }]
    }], function () { return [{ type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
            }] }]; }, { animationDone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _stepHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
            args: [MatStepHeader]
        }], _steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [MatStep, { descendants: true }]
        }], _icons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [MatStepperIcon, { descendants: true }]
        }], disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Button that moves to the next step in a stepper workflow. */
class MatStepperNext extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperNext {
}
MatStepperNext.ɵfac = /*@__PURE__*/ function () { let ɵMatStepperNext_BaseFactory; return function MatStepperNext_Factory(t) { return (ɵMatStepperNext_BaseFactory || (ɵMatStepperNext_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatStepperNext)))(t || MatStepperNext); }; }();
MatStepperNext.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatStepperNext, selectors: [["button", "matStepperNext", ""]], hostAttrs: [1, "mat-stepper-next"], hostVars: 1, hostBindings: function MatStepperNext_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", ctx.type);
    } }, inputs: { type: "type" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepperNext, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'button[matStepperNext]',
                host: {
                    'class': 'mat-stepper-next',
                    '[type]': 'type'
                },
                inputs: ['type']
            }]
    }], null, null); })();
/** Button that moves to the previous step in a stepper workflow. */
class MatStepperPrevious extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperPrevious {
}
MatStepperPrevious.ɵfac = /*@__PURE__*/ function () { let ɵMatStepperPrevious_BaseFactory; return function MatStepperPrevious_Factory(t) { return (ɵMatStepperPrevious_BaseFactory || (ɵMatStepperPrevious_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatStepperPrevious)))(t || MatStepperPrevious); }; }();
MatStepperPrevious.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatStepperPrevious, selectors: [["button", "matStepperPrevious", ""]], hostAttrs: [1, "mat-stepper-previous"], hostVars: 1, hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", ctx.type);
    } }, inputs: { type: "type" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepperPrevious, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'button[matStepperPrevious]',
                host: {
                    'class': 'mat-stepper-previous',
                    '[type]': 'type'
                },
                inputs: ['type']
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatStepperModule {
}
MatStepperModule.ɵfac = function MatStepperModule_Factory(t) { return new (t || MatStepperModule)(); };
MatStepperModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatStepperModule });
MatStepperModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher], imports: [[
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.PortalModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule,
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule,
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule,
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.PortalModule,
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule,
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperModule,
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule,
                ],
                exports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule,
                    MatStep,
                    MatStepLabel,
                    MatStepper,
                    MatStepperNext,
                    MatStepperPrevious,
                    MatStepHeader,
                    MatStepperIcon,
                    MatStepContent,
                ],
                declarations: [
                    MatHorizontalStepper,
                    MatVerticalStepper,
                    MatStep,
                    MatStepLabel,
                    MatStepper,
                    MatStepperNext,
                    MatStepperPrevious,
                    MatStepHeader,
                    MatStepperIcon,
                    MatStepContent,
                ],
                providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatStepperModule, { declarations: function () { return [MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.PortalModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule]; }, exports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=stepper.js.map

/***/ }),

/***/ 8486:
/*!*********************************************!*\
  !*** ./src/app/master/reg-forum.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegForumService": () => (/* binding */ RegForumService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _core_http_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/http-client.service */ 7352);



class RegForumService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAll() {
        return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/forums`);
    }
}
RegForumService.ɵfac = function RegForumService_Factory(t) { return new (t || RegForumService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_http_client_service__WEBPACK_IMPORTED_MODULE_1__.HttpClientService)); };
RegForumService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RegForumService, factory: RegForumService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 171:
/*!*****************************************************!*\
  !*** ./src/app/user-view/tagihan/verified.guard.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifiedGuard": () => (/* binding */ VerifiedGuard)
/* harmony export */ });
/* harmony import */ var _member_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../member.state */ 9673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 3394);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 7001);





class VerifiedGuard {
    constructor(store, router, snackbar) {
        this.store = store;
        this.router = router;
        this.snackbar = snackbar;
    }
    canActivate(route, state) {
        var _a;
        const memberState = this.store.selectSnapshot(_member_state__WEBPACK_IMPORTED_MODULE_0__.MemberState);
        switch ((_a = memberState.member) === null || _a === void 0 ? void 0 : _a.registerLastStatus) {
            case 0:
                this.snackbar.open('Selesaikan pengisian form pendaftaran anda', '', {
                    duration: 1000,
                });
                this.router.navigate(['daftar']);
                return false;
            case 1:
            case 2:
            case 4:
                return true;
            case 3:
                this.snackbar.open('Pengajuan pendaftaran ditolak, perbaiki pengisian form pendaftaran', '', {
                    duration: 5000,
                });
                return false;
            default:
                return false;
        }
    }
}
VerifiedGuard.ɵfac = function VerifiedGuard_Factory(t) { return new (t || VerifiedGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar)); };
VerifiedGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: VerifiedGuard, factory: VerifiedGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6695:
/*!************************************************************************!*\
  !*** ./src/app/user-view/user-navigation/user-navigation.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserNavigationComponent": () => (/* binding */ UserNavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ 5072);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 7349);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 4395);
/* harmony import */ var src_app_states_loading_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/states/loading.state */ 9989);
/* harmony import */ var src_app_app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.state */ 2534);
/* harmony import */ var _member_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../member.state */ 9673);
/* harmony import */ var _user_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.state */ 2262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 3394);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);





















function UserNavigationComponent_a_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Pendaftaran");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLinkActive", "active");
  }
}

function UserNavigationComponent_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserNavigationComponent_button_32_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);

      return _r0.toggle();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserNavigationComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "mat-spinner", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 20);
  }
}

function UserNavigationComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Email anda belum terverifikasi");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UserNavigationComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Harap lengkapi Formulir di bawah ini untuk melanjutkan pembayaran");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

class UserNavigationComponent {
  constructor(breakpointObserver, store, router) {
    this.breakpointObserver = breakpointObserver;
    this.store = store;
    this.router = router;
    this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__.Breakpoints.Handset).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(result => result.matches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.shareReplay)());
    this.state$ = this.store.select(_member_state__WEBPACK_IMPORTED_MODULE_2__.MemberState).pipe();
    this.userState$ = this.store.select(_user_state__WEBPACK_IMPORTED_MODULE_3__.UserState).pipe();
    this.anggotaOpened = false;
    this.tagihanOpened = false;
    this.loadingState$ = this.store.select(src_app_states_loading_state__WEBPACK_IMPORTED_MODULE_0__.LoadingState).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(0));
  }

  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd) {
        const scrollto = document.querySelector('.mat-sidenav-content');

        if (scrollto) {
          document.querySelector('.mat-sidenav-content').scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }

        this.setMenuActive();
      }
    });
    this.setMenuActive();
  }

  setMenuActive() {
    const approvalMenu = ['/dosen', '/daftar', '/profil'];

    for (const am of approvalMenu) {
      if (this.router.url.includes(am)) {
        this.anggotaOpened = true;
      }
    }

    const tagihanMenu = ['/tagihan', '/rekap-tagihan'];

    for (const am of tagihanMenu) {
      if (this.router.url.includes(am)) {
        this.tagihanOpened = true;
      }
    }

    if (this.router.url === '/') {
      this.anggotaOpened = true;
    }
  }

  logout() {
    this.store.dispatch(new src_app_app_state__WEBPACK_IMPORTED_MODULE_1__.SetSessionState({
      accessToken: '',
      refreshToken: '',
      role: null
    }));
    this.router.navigate(['/login']);
  }

  onOpened(name) {// if (name === 'anggota') {
    //   this.anggotaOpened = true;
    //   this.tagihanOpened = false;
    // } else if (name === 'tagihan') {
    //   this.anggotaOpened = false;
    //   this.tagihanOpened = true;
    // }
  }

}

UserNavigationComponent.ɵfac = function UserNavigationComponent_Factory(t) {
  return new (t || UserNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
};

UserNavigationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: UserNavigationComponent,
  selectors: [["app-user-navigation"]],
  decls: 61,
  vars: 37,
  consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["color", "primary", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "8px"], ["src", "assets/image/logo.png", "alt", "", 2, "width", "42px"], ["for", ""], ["multi", "", 1, "nav-accordion", 3, "displayMode"], [3, "expanded", "expandedChange", "opened"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "list-item"], ["routerLink", "/profil", 3, "routerLinkActive"], ["routerLink", "/dosen", 3, "routerLinkActive"], ["routerLink", "/daftar", 3, "routerLinkActive", 4, "ngIf"], ["routerLink", "/tagihan", 3, "routerLinkActive"], ["routerLink", "/rekap-tagihan", 3, "routerLinkActive"], ["id", "mat-sidenav-content"], ["color", "primary"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "width", "100%"], [2, "padding-left", "16px"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "16px", 1, "pointer", 3, "matMenuTriggerFor"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "8px"], [2, "width", "40px"], ["src", "assets/image/profile.png", "alt", "", 2, "width", "100%", "border-radius", "50%"], ["aria-label", "Side nav toggle icon"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["style", "\n        position: absolute;\n        top: 0;\n        width: 100%;\n        height: 100vh;\n        z-index: 1000;\n        background-color: rgba(255, 255, 255, 0.9);\n      ", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", "fxLayoutGap", "16px", 2, "margin", "24px"], ["style", "\n          background-color: #ff9966;\n          color: #fff;\n          border: 1px #ddd solid;\n\n          padding: 12px;\n          border-radius: 5px;\n        ", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "16px", 4, "ngIf"], ["style", "background-color: #ff9966; color: #fff; border: 1px #ddd solid; padding: 12px; border-radius: 5px", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "16px", 4, "ngIf"], [2, "background-color", "#fff", "border", "1px #ddd solid", "margin", "24px", "padding", "24px", "border-radius", "5px", "min-height", "100vh"], ["routerLink", "/daftar", 3, "routerLinkActive"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], [2, "position", "absolute", "top", "0", "width", "100%", "height", "100vh", "z-index", "1000", "background-color", "rgba(255, 255, 255, 0.9)"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 2, "padding-top", "24px"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", "fxLayoutGap", "8px", 1, "mat-elevation-z8", 2, "background", "#fff", "padding", "12px 16px", "border-radius", "5px"], ["color", "accent", 3, "diameter"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "16px", 2, "background-color", "#ff9966", "color", "#fff", "border", "1px #ddd solid", "padding", "12px", "border-radius", "5px"]],
  template: function UserNavigationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-toolbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "APTFI");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-accordion", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-expansion-panel", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("expandedChange", function UserNavigationComponent_Template_mat_expansion_panel_expandedChange_11_listener($event) {
        return ctx.anggotaOpened = $event;
      })("opened", function UserNavigationComponent_Template_mat_expansion_panel_opened_11_listener() {
        return ctx.onOpened("anggota");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-expansion-panel-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Keanggotaan");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Profil");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "List Dosen");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, UserNavigationComponent_a_19_Template, 2, 1, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-expansion-panel", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("expandedChange", function UserNavigationComponent_Template_mat_expansion_panel_expandedChange_22_listener($event) {
        return ctx.tagihanOpened = $event;
      })("opened", function UserNavigationComponent_Template_mat_expansion_panel_opened_22_listener() {
        return ctx.onOpened("tagihan");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-expansion-panel-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Tagihan");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Cek Tagihan");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Rekap Tagihan");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-sidenav-content", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-toolbar", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, UserNavigationComponent_button_32_Template, 3, 0, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](39, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-icon", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "expand_more");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "mat-menu", 24, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserNavigationComponent_Template_button_click_47_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Keluar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, UserNavigationComponent_div_52_Template, 6, 1, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](53, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, UserNavigationComponent_div_55_Template, 5, 0, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](56, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, UserNavigationComponent_div_57_Template, 5, 0, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](58, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](46);

      let tmp_14_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 19, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 21, ctx.isHandset$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 17, ctx.isHandset$) ? "dialog" : "navigation");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("displayMode", "flat");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("expanded", ctx.anggotaOpened);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLinkActive", "active");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLinkActive", "active");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 23, ctx.state$).member == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 23, ctx.state$).member.registerLastStatus) === 0 || (_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 25, ctx.state$).member == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 25, ctx.state$).member.registerLastStatus) === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("expanded", ctx.tagihanOpened);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLinkActive", "active");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLinkActive", "active");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 27, ctx.isHandset$));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](39, 29, ctx.state$).member == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](39, 29, ctx.state$).member.universityName);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_14_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](53, 31, ctx.loadingState$)) == null ? null : tmp_14_0.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](56, 33, ctx.userState$).user == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](56, 33, ctx.userState$).user.emailVerifiedAt));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](58, 35, ctx.state$).member == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](58, 35, ctx.state$).member.registerLastStatus));
    }
  },
  directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenav, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbar, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutGapDirective, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionPanelHeader, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuItem, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatSpinner],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe],
  styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  background: #455a64;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.mat-list-item.active[_ngcontent-%COMP%] {\n  background-color: #ddd;\n}\n\n.nav-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n\n.nav-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #455a64;\n  border-top: 1px solid #3b4d55;\n  border-bottom: 1px solid #3b4d55;\n}\n\n.nav-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-expansion-indicator[_ngcontent-%COMP%]:after {\n  color: #fff;\n}\n\n.nav-accordion[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 12px;\n  color: rgba(0, 0, 0, 0.87);\n  text-decoration: none;\n  border-bottom: 1px solid #c7c7c7;\n}\n\n.nav-accordion[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n\n.nav-accordion[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.14);\n}\n\n.mat-drawer-side[_ngcontent-%COMP%] {\n  border-right: none;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  background: #455a64 !important;\n  color: #fff;\n}\n\n.mat-expansion-panel-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFHRTtFQUNFLHNCQUFBO0FBQUo7O0FBS0U7RUFDRSxnQkFBQTtBQUZKOztBQUlJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQUZOOztBQUtRO0VBQ0UsV0FBQTtBQUhWOztBQVVJO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQVJOOztBQVNNO0VBQ0UsK0JBQUE7QUFQUjs7QUFVTTtFQUNFLCtCQUFBO0FBUlI7O0FBY0E7RUFDRSxrQkFBQTtBQVhGOztBQWNBO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0FBWEY7O0FBY0E7RUFDRSxlQUFBO0FBWEYiLCJmaWxlIjoidXNlci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZDogIzQ1NWE2NDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ubWF0LWxpc3QtaXRlbSB7XG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICB9XG59XG5cbi5uYXYtYWNjb3JkaW9uIHtcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kOiAjNDU1YTY0O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzYjRkNTU7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNiNGQ1NTtcblxuICAgICAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yIHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubGlzdC1pdGVtIHtcbiAgICBhIHtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTk5LCAxOTksIDE5OSk7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubWF0LWRyYXdlci1zaWRlIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4ubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjNDU1YTY0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuIl19 */"]
});

/***/ }),

/***/ 7769:
/*!********************************************************************!*\
  !*** ./src/app/user-view/user-register/user-register.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRegisterComponent": () => (/* binding */ UserRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8939);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 5792);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 9773);
/* harmony import */ var src_app_states_loading_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/states/loading.state */ 9989);
/* harmony import */ var _user_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.state */ 2262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 3394);
/* harmony import */ var src_app_master_reg_forum_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/master/reg-forum.service */ 8486);
/* harmony import */ var _user_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-register.service */ 8831);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ 9620);
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-filesaver */ 5893);
/* harmony import */ var _tagihan_tagihan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tagihan/tagihan.service */ 6633);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ 7001);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ 4553);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 7441);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-material-file-input */ 4904);


























const _c0 = ["title"];
const _c1 = ["stepper"];
function UserRegisterComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Detail Institusi");
} }
function UserRegisterComponent_ng_template_9_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reg_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", reg_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](reg_r24.name);
} }
function UserRegisterComponent_ng_template_9_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-spinner", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 20);
} }
function UserRegisterComponent_ng_template_9_button_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Simpan & Lanjutkan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function UserRegisterComponent_ng_template_9_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r25.onInstituteSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Nama Yayasan harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Nama Ketua Yayasan harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Nama Universitas / Perguruan Tinggi harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Forum Wilayah");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, UserRegisterComponent_ng_template_9_mat_option_18_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Forum Wilayah harus dipilih");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Nama Rektor harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Alamat Universitas / Perguruan Tinggi harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, UserRegisterComponent_ng_template_9_div_29_Template, 4, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, UserRegisterComponent_ng_template_9_button_30_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r3.instituteForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.regForums);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.instituteLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r3.instituteLoading);
} }
function UserRegisterComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Detail Fakultas");
} }
function UserRegisterComponent_ng_template_12_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Email Fakultas harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_ng_template_12_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Email Fakultas tidak harus diisi dengan email yang valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_ng_template_12_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-spinner", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 20);
} }
function UserRegisterComponent_ng_template_12_button_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Simpan & Lanjutkan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function UserRegisterComponent_ng_template_12_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r31.onFacultySubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Nama Fakultas harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Nama Dekan harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "textarea", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Alamat Fakultas harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "No. Telepon / Fax Fakultas harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Website Fakultas harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, UserRegisterComponent_ng_template_12_mat_error_25_Template, 2, 0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, UserRegisterComponent_ng_template_12_mat_error_26_Template, 2, 0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, UserRegisterComponent_ng_template_12_div_27_Template, 4, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, UserRegisterComponent_ng_template_12_button_28_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r5.facultyForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !!((tmp_1_0 = ctx_r5.facultyForm.get("facultyEmail")) == null ? null : tmp_1_0.hasError("required")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !!((tmp_2_0 = ctx_r5.facultyForm.get("facultyEmail")) == null ? null : tmp_2_0.hasError("email")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.facultyLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r5.facultyLoading);
} }
function UserRegisterComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Detail Program Studi Sarjana 1");
} }
function UserRegisterComponent_ng_template_15_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Alamat E-mail Prodi S-1 harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_ng_template_15_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Alamat E-mail Prodi S-1 harus diisi dengan email yang valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_ng_template_15_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Alamat e-mail Ketua Prodi S-1 harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_ng_template_15_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Alamat e-mail Ketua Prodi S-1 harus diisi dengan email yang valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_ng_template_15_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-spinner", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 20);
} }
function UserRegisterComponent_ng_template_15_button_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Simpan & Lanjutkan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function UserRegisterComponent_ng_template_15_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r39.onS1Submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Nama Prodi Sarjana harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Ijin Operasional S-1 harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Akreditasi S-1 oleh harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "No. SK Akreditasi S-1 harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, UserRegisterComponent_ng_template_15_mat_error_20_Template, 2, 0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, UserRegisterComponent_ng_template_15_mat_error_21_Template, 2, 0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Jumlah mahasiswa S-1 saat ini harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Jumlah mahasiswa S-1 diterima/tahun harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "No. Telpon/Fax Prodi S-1 harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Nama Ketua Prodi S-1 harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "No. HP Ketua Prodi S-1 harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, UserRegisterComponent_ng_template_15_mat_error_44_Template, 2, 0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, UserRegisterComponent_ng_template_15_mat_error_45_Template, 2, 0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, UserRegisterComponent_ng_template_15_div_46_Template, 4, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, UserRegisterComponent_ng_template_15_button_47_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r7.s1Form);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !!((tmp_1_0 = ctx_r7.s1Form.get("prodiEmail")) == null ? null : tmp_1_0.hasError("required")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !!((tmp_2_0 = ctx_r7.s1Form.get("prodiEmail")) == null ? null : tmp_2_0.hasError("email")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !!((tmp_3_0 = ctx_r7.s1Form.get("prodiHeadEmail")) == null ? null : tmp_3_0.hasError("required")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !!((tmp_4_0 = ctx_r7.s1Form.get("prodiHeadEmail")) == null ? null : tmp_4_0.hasError("email")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.s1Loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r7.s1Loading);
} }
function UserRegisterComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Dosen Tetap S1 Farmasi");
} }
function UserRegisterComponent_ng_template_18_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Harap pilih file ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_ng_template_18_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-spinner", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 20);
} }
function UserRegisterComponent_ng_template_18_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Simpan & Lanjutkan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function UserRegisterComponent_ng_template_18_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r44.onDosenS1Submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Unduh file template terlebih dahulu, isi daftar dosen pada file template tersebut, lalu upload lagi pada input di bawah ini ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserRegisterComponent_ng_template_18_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r46.downloadTemplate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Unduh File Template ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "ngx-mat-file-input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, UserRegisterComponent_ng_template_18_mat_error_13_Template, 2, 0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, UserRegisterComponent_ng_template_18_div_14_Template, 4, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, UserRegisterComponent_ng_template_18_button_15_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r9.dosenS1Form);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("autofilled", true)("accept", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")("required", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.dosenS1Form.get("fileDosen").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.dosenS1Loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r9.dosenS1Loading);
} }
function UserRegisterComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Detail Prodi Profesi Apoteker");
} }
function UserRegisterComponent_ng_template_21_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-spinner", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 20);
} }
function UserRegisterComponent_ng_template_21_button_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Simpan & Lanjutkan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function UserRegisterComponent_ng_template_21_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r49.onPspaSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, UserRegisterComponent_ng_template_21_div_22_Template, 4, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, UserRegisterComponent_ng_template_21_button_23_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r11.pspaForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.pspaLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r11.pspaLoading);
} }
function UserRegisterComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Detail Program Studi Sarjana 2");
} }
function UserRegisterComponent_ng_template_24_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Alamat e-mail Ketua Prodi S-2 harus diisi dengan email yang valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_ng_template_24_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-spinner", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 20);
} }
function UserRegisterComponent_ng_template_24_button_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Simpan & Lanjutkan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function UserRegisterComponent_ng_template_24_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r54.onS2Submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, UserRegisterComponent_ng_template_24_mat_error_22_Template, 2, 0, "mat-error", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, UserRegisterComponent_ng_template_24_div_23_Template, 4, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, UserRegisterComponent_ng_template_24_button_24_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r13.s2Form);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !!((tmp_1_0 = ctx_r13.s2Form.get("prodiHeadEmail")) == null ? null : tmp_1_0.hasError("email")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r13.s2Loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r13.s2Loading);
} }
function UserRegisterComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Dosen Tetap Prodi Profesi Apoteker");
} }
function UserRegisterComponent_ng_template_27_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-spinner", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 20);
} }
function UserRegisterComponent_ng_template_27_button_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Simpan & Lanjutkan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function UserRegisterComponent_ng_template_27_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r58.onDosenPspaSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Unduh file template terlebih dahulu, isi daftar dosen pada file template tersebut, lalu upload lagi pada input di bawah ini ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserRegisterComponent_ng_template_27_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r59); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r60.downloadTemplate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Unduh File Template ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "ngx-mat-file-input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, UserRegisterComponent_ng_template_27_div_13_Template, 4, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, UserRegisterComponent_ng_template_27_button_14_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r15.dosenPspaForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("autofilled", true)("accept", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")("required", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r15.dosenPspaLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r15.dosenPspaLoading);
} }
function UserRegisterComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Data Informasi Anggaran, Fasilitas dan Sarana-Prasarana");
} }
function UserRegisterComponent_ng_template_30_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-spinner", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 20);
} }
function UserRegisterComponent_ng_template_30_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Simpan & Lanjutkan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function UserRegisterComponent_ng_template_30_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r63.onSarpraSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "ngx-mat-file-input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, UserRegisterComponent_ng_template_30_div_6_Template, 4, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, UserRegisterComponent_ng_template_30_button_7_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r17.sarpraForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("autofilled", true)("accept", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/pdf")("required", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r17.sarpraLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r17.sarpraLoading);
} }
function UserRegisterComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-spinner", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 20);
} }
function UserRegisterComponent_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserRegisterComponent_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r65.onPaymentButtonClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Lanjutkan ke Pembayaran ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r19.paymentButtonStatus);
} }
function UserRegisterComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserRegisterComponent_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r67.onRegistrationClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Lanjutkan Pendaftaran ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r20.paymentButtonStatus);
} }
class UserRegisterComponent {
    constructor(store, regForumService, userRegister, userService, _FileSaverService, tagihanService, router, snackbar, _matStepperIntl) {
        this.store = store;
        this.regForumService = regForumService;
        this.userRegister = userRegister;
        this.userService = userService;
        this._FileSaverService = _FileSaverService;
        this.tagihanService = tagihanService;
        this.router = router;
        this.snackbar = snackbar;
        this._matStepperIntl = _matStepperIntl;
        this.instituteLoading = false;
        this.instituteValidity = false;
        this.facultyLoading = false;
        this.facultyValidity = false;
        this.s1Loading = false;
        this.s1Validity = false;
        this.s2Loading = false;
        this.s2Validity = false;
        this.pspaLoading = false;
        this.pspaValidity = false;
        this.dosenS1Loading = false;
        this.dosenS1Validity = false;
        this.dosenPspaLoading = false;
        this.dosenPspaValidity = false;
        this.sarpraLoading = false;
        this.sarpraValidity = false;
        this.paymentButtonStatus = false;
        this.paymentLoading = false;
        this.step = 0;
        this.forced = false;
        this.store.dispatch(new src_app_states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(true));
    }
    ngAfterViewInit() {
        this._matStepperIntl.optionalLabel = 'Tidak wajib diisi';
    }
    ngOnInit() {
        this.regForumService.getAll().subscribe((response) => {
            this.regForums = response.data;
        });
        this.instituteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            foundationName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            headOfFoundation: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            universityName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            rectorName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            universityAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            regForum: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        });
        this.facultyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            facultyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            deanName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            facultyAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            facultyPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            facultyWebsite: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            facultyEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]),
        });
        this.s1Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            prodiName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            prodiPermit: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            prodiAccreditedBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            prodiAccreditedNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            prodiEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            prodiStudents: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            prodiStudentsYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            prodiPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            prodiHead: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            prodiHeadPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            prodiHeadEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]),
        });
        this.s2Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            prodiName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, []),
            prodiPermit: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, []),
            prodiAccreditedBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, []),
            prodiAccreditedNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, []),
            prodiStudents: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, []),
            prodiStudentsYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, []),
            prodiPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, []),
            prodiHead: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, []),
            prodiHeadPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, []),
            prodiHeadEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]),
        });
        this.pspaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            prodiName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, []),
            prodiPermit: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, []),
            prodiAccreditedBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, []),
            prodiAccreditedNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, []),
            prodiStudents: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, []),
            prodiStudentsYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, []),
            prodiPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, []),
            prodiHead: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, []),
            prodiHeadPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, []),
            prodiHeadEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]),
        });
        this.dosenS1Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            fileDosen: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        });
        this.dosenPspaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, []),
        });
        this.sarpraForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, []),
        });
        this.dosenS1Form.valueChanges.subscribe((e) => {
            if (e.fileDosen && !this.forced) {
                this.forced = true;
                this.dosenS1Form.controls['fileDosen'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);
                this.dosenS1Form.controls['fileDosen'].updateValueAndValidity();
            }
        });
        this.userService
            .getDetailMember('none')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => { }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => {
            this.store.dispatch(new src_app_states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(false));
        }))
            .subscribe((result) => {
            this.state = result.member;
            if (this.state) {
                this.instituteForm.controls['foundationName'].setValue(this.state.foundationName);
                this.instituteForm.controls['headOfFoundation'].setValue(this.state.headOfFoundation);
                this.instituteForm.controls['universityName'].setValue(this.state.universityName);
                this.instituteForm.controls['rectorName'].setValue(this.state.rectorName);
                this.instituteForm.controls['universityAddress'].setValue(this.state.universityAddress);
                this.instituteForm.controls['regForum'].setValue(this.state.regForumId);
                if (this.instituteForm.valid) {
                    this.stepper.selected.completed = true;
                    this.stepper.next();
                }
                this.facultyForm.controls['facultyName'].setValue(this.state.facultyName);
                this.facultyForm.controls['deanName'].setValue(this.state.deanName);
                this.facultyForm.controls['facultyAddress'].setValue(this.state.facultyAddress);
                this.facultyForm.controls['facultyPhone'].setValue(this.state.facultyPhone);
                this.facultyForm.controls['facultyWebsite'].setValue(this.state.facultyWebsite);
                this.facultyForm.controls['facultyEmail'].setValue(this.state.facultyEmail);
                if (this.facultyForm.valid) {
                    // this.stepper.selectedIndex = 2;
                    this.stepper.next();
                }
                const s1 = this.state.prodis.filter((p) => p.prodiType === 's1')[0];
                if (s1) {
                    this.s1Form.controls['prodiName'].setValue(s1.prodiName);
                    this.s1Form.controls['prodiPermit'].setValue(s1.prodiPermit);
                    this.s1Form.controls['prodiAccreditedBy'].setValue(s1.prodiAccreditedBy);
                    this.s1Form.controls['prodiAccreditedNo'].setValue(s1.prodiAccreditedNo);
                    this.s1Form.controls['prodiEmail'].setValue(s1.prodiEmail);
                    this.s1Form.controls['prodiStudents'].setValue(s1.prodiStudents);
                    this.s1Form.controls['prodiStudentsYear'].setValue(s1.prodiStudentsYear);
                    this.s1Form.controls['prodiPhone'].setValue(s1.prodiPhone);
                    this.s1Form.controls['prodiHead'].setValue(s1.prodiHead);
                    this.s1Form.controls['prodiHeadPhone'].setValue(s1.prodiHeadPhone);
                    this.s1Form.controls['prodiHeadEmail'].setValue(s1.prodiHeadEmail);
                    if (this.s1Form.valid) {
                        // this.stepper.selectedIndex = 3;
                        this.stepper.next();
                    }
                }
                if (this.state.dosenFileS1) {
                    this.dosenS1Form.controls['fileDosen'].setValue(this.state.dosenFileS1);
                    if (this.dosenS1Form.valid) {
                        this.stepper.selected.completed = true;
                        this.stepper.next();
                    }
                }
                const s2 = this.state.prodis.filter((p) => p.prodiType === 's2')[0];
                if (s2) {
                    this.s2Form.controls['prodiName'].setValue(s2.prodiName);
                    this.s2Form.controls['prodiPermit'].setValue(s2.prodiPermit);
                    this.s2Form.controls['prodiAccreditedBy'].setValue(s2.prodiAccreditedBy);
                    this.s2Form.controls['prodiAccreditedNo'].setValue(s2.prodiAccreditedNo);
                    this.s2Form.controls['prodiStudents'].setValue(s2.prodiStudents);
                    this.s2Form.controls['prodiStudentsYear'].setValue(s2.prodiStudentsYear);
                    this.s2Form.controls['prodiPhone'].setValue(s2.prodiPhone);
                    this.s2Form.controls['prodiHead'].setValue(s2.prodiHead);
                    this.s2Form.controls['prodiHeadPhone'].setValue(s2.prodiHeadPhone);
                    this.s2Form.controls['prodiHeadEmail'].setValue(s2.prodiHeadEmail);
                }
                const pspa = this.state.prodis.filter((p) => p.prodiType === 'pspa')[0];
                if (pspa) {
                    this.pspaForm.controls['prodiName'].setValue(pspa.prodiName);
                    this.pspaForm.controls['prodiPermit'].setValue(pspa.prodiPermit);
                    this.pspaForm.controls['prodiAccreditedBy'].setValue(pspa.prodiAccreditedBy);
                    this.pspaForm.controls['prodiAccreditedNo'].setValue(pspa.prodiAccreditedNo);
                    this.pspaForm.controls['prodiStudents'].setValue(pspa.prodiStudents);
                    this.pspaForm.controls['prodiStudentsYear'].setValue(pspa.prodiStudentsYear);
                    this.pspaForm.controls['prodiPhone'].setValue(pspa.prodiPhone);
                    this.pspaForm.controls['prodiHead'].setValue(pspa.prodiHead);
                    this.pspaForm.controls['prodiHeadPhone'].setValue(pspa.prodiHeadPhone);
                    this.pspaForm.controls['prodiHeadEmail'].setValue(pspa.prodiHeadEmail);
                }
                this.validatePanel();
            }
        });
    }
    onInstituteSubmit() {
        if (this.instituteForm.valid) {
            this.instituteLoading = true;
            this.userRegister
                .saveInstitute(this.instituteForm.value)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.delay)(500))
                .subscribe(() => {
                this.instituteLoading = false;
                this.stepper.next();
                this.validatePanel();
            }, (err) => {
                this.instituteLoading = false;
            });
        }
    }
    onFacultySubmit() {
        if (this.facultyForm.valid) {
            this.facultyLoading = true;
            this.userRegister
                .saveFaculty(this.facultyForm.value)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.delay)(500))
                .subscribe(() => {
                this.facultyLoading = false;
                this.stepper.next();
                this.validatePanel();
            }, (err) => {
                this.facultyLoading = false;
            });
        }
    }
    onS1Submit() {
        if (this.s1Form.valid) {
            this.s1Loading = true;
            this.userRegister
                .saveProdi(this.s1Form.value, 's1')
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.delay)(500))
                .subscribe(() => {
                this.s1Loading = false;
                this.stepper.next();
                this.validatePanel();
            }, (err) => {
                this.s1Loading = false;
            });
        }
    }
    onS2Submit() {
        if (this.s2Form.valid) {
            this.s2Loading = true;
            this.userRegister
                .saveProdi(this.s2Form.value, 's2')
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.delay)(500))
                .subscribe(() => {
                this.s2Loading = false;
                this.stepper.next();
                this.validatePanel();
            }, (err) => {
                this.s2Loading = false;
            });
        }
    }
    onPspaSubmit() {
        if (this.pspaForm.valid) {
            this.pspaLoading = true;
            this.userRegister
                .saveProdi(this.pspaForm.value, 'pspa')
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.delay)(500))
                .subscribe(() => {
                this.pspaLoading = false;
                this.stepper.next();
                this.validatePanel();
            }, (err) => {
                this.pspaLoading = false;
            });
        }
    }
    onDosenS1Submit() {
        if (this.dosenS1Form.valid) {
            this.dosenS1Loading = true;
            const data = new FormData();
            data.append('file', this.dosenS1Form.value.fileDosen._files[0]);
            data.append('type', 's1');
            this.userRegister.uploadFileDosen(data).subscribe(() => {
                this.dosenS1Loading = false;
                this.stepper.next();
                this.validatePanel();
            }, (err) => {
                this.dosenS1Loading = false;
                this.snackbar.open('Terjadi Kesalahan: Tidak dapat menyimpan data Dosen', 'Tutup', {
                    panelClass: ['snackbar-warn'],
                });
            });
        }
    }
    onDosenPspaSubmit() {
        if (this.dosenPspaForm.valid) {
            this.dosenPspaLoading = true;
            const data = new FormData();
            data.append('file', this.dosenPspaForm.value.file._files[0]);
            data.append('type', 'pspa');
            this.userRegister.uploadFileDosen(data).subscribe(() => {
                this.dosenPspaLoading = false;
                this.stepper.next();
            }, (err) => {
                this.dosenPspaLoading = false;
            });
        }
    }
    onSarpraSubmit() {
        if (this.sarpraForm.valid) {
            this.sarpraLoading = true;
            const data = new FormData();
            data.append('file', this.sarpraForm.value.file._files[0]);
            this.userRegister.uploadSarpra(data).subscribe(() => {
                this.sarpraLoading = false;
                this.stepper.next();
            }, (err) => {
                this.sarpraLoading = false;
            });
        }
    }
    onPaymentButtonClicked() {
        this.paymentLoading = true;
        this.userRegister
            .setStatusMember(1)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mergeMap)((response) => {
            return this.tagihanService.createOrder('register');
        }))
            .subscribe(() => {
            this.store.dispatch(new _user_state__WEBPACK_IMPORTED_MODULE_1__.SetRegisterStatus(1));
            this.paymentLoading = false;
            this.router.navigate(['tagihan']);
        }, (err) => {
            this.paymentLoading = false;
        });
    }
    onRegistrationClicked() {
        this.paymentLoading = true;
        this.userRegister.setStatusMember(2).subscribe(() => {
            this.store.dispatch(new _user_state__WEBPACK_IMPORTED_MODULE_1__.SetRegisterStatus(2));
            this.paymentLoading = false;
            this.router.navigate(['profil']);
        }, (err) => {
            this.paymentLoading = false;
        });
    }
    validatePanel() {
        if (this.instituteForm.valid && this.facultyForm.valid && this.s1Form.valid && this.dosenS1Form.valid) {
            this.paymentButtonStatus = true;
        }
        else {
            this.paymentButtonStatus = false;
        }
    }
    downloadTemplate(e) {
        this.userRegister.downloadTemplate().subscribe((res) => {
            this._FileSaverService.save(res, 'Template Dosen.xlsx', 'xlsx');
            e.preventDefault();
        });
    }
}
UserRegisterComponent.ɵfac = function UserRegisterComponent_Factory(t) { return new (t || UserRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_master_reg_forum_service__WEBPACK_IMPORTED_MODULE_3__.RegForumService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_user_register_service__WEBPACK_IMPORTED_MODULE_4__.UserRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_filesaver__WEBPACK_IMPORTED_MODULE_13__.FileSaverService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_tagihan_tagihan_service__WEBPACK_IMPORTED_MODULE_6__.TagihanService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__.MatStepperIntl)); };
UserRegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: UserRegisterComponent, selectors: [["app-user-register"]], viewQuery: function UserRegisterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.institute = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
    } }, decls: 36, vars: 13, consts: [["fxLayout", "column", "fxLayoutAlign", "center stretch", "fxLayoutGap", "16px"], [2, "text-align", "center"], ["title", ""], [3, "linear"], ["stepper", ""], ["state", "done", 3, "stepControl"], ["matStepLabel", ""], ["matStepContent", ""], [3, "stepControl"], [3, "stepControl", "state"], ["optional", "", 3, "stepControl"], ["fxLayout", "column", "fxLayoutAlign", "start end", "fxLayoutGap", "16px", 2, "margin-top", "32px"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "8px", 4, "ngIf"], ["type", "button", "mat-flat-button", "", "class", "paymentButton", 3, "disabled", "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", "fxLayoutGap", "8px", 2, "width", "100%"], ["matInput", "", "placeholder", "Nama Yayasan", "formControlName", "foundationName", "type", "text", "required", ""], ["matInput", "", "placeholder", "Nama Ketua Yayasan", "formControlName", "headOfFoundation", "type", "text", "required", ""], ["matInput", "", "placeholder", "Nama Universitas / Perguruan Tinggi", "formControlName", "universityName", "type", "text", "required", ""], ["appearance", "fill"], ["formControlName", "regForum", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Nama Rektor", "formControlName", "rectorName", "type", "text", "required", ""], ["matInput", "", "placeholder", "Alamat Universitas / Perguruan Tinggi", "formControlName", "universityAddress", "rows", "5", "required", ""], ["mat-flat-button", "", "color", "primary", 4, "ngIf"], [3, "value"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "8px"], ["color", "primary", 3, "diameter"], ["for", ""], ["mat-flat-button", "", "color", "primary"], ["matInput", "", "placeholder", "Nama Fakultas", "formControlName", "facultyName", "type", "text", "required", ""], ["matInput", "", "placeholder", "Nama Dekan", "formControlName", "deanName", "type", "text", "required", ""], ["matInput", "", "placeholder", "Alamat Fakultas", "formControlName", "facultyAddress", "rows", "5", "required", ""], ["matInput", "", "placeholder", "No. Telepon / Fax Fakultas", "formControlName", "facultyPhone", "type", "text", "required", ""], ["matInput", "", "placeholder", "Website Fakultas", "formControlName", "facultyWebsite", "type", "url", "required", ""], ["matInput", "", "placeholder", "Email Fakultas", "formControlName", "facultyEmail", "type", "email", "required", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Nama Prodi Sarjana", "formControlName", "prodiName", "type", "text", "required", ""], ["matInput", "", "placeholder", "Ijin Operasional S-1", "formControlName", "prodiPermit", "type", "text", "required", ""], ["matInput", "", "placeholder", "Akreditasi S-1 oleh", "formControlName", "prodiAccreditedBy", "type", "text", "required", ""], ["matInput", "", "placeholder", "No. SK Akreditasi S-1", "formControlName", "prodiAccreditedNo", "type", "text", "required", ""], ["matInput", "", "placeholder", "Alamat E-mail Prodi S-1", "formControlName", "prodiEmail", "type", "email", "required", ""], ["matInput", "", "placeholder", "Jumlah mahasiswa S-1 saat ini", "formControlName", "prodiStudents", "type", "number"], ["matInput", "", "placeholder", "Jumlah mahasiswa S-1 diterima/tahun", "formControlName", "prodiStudentsYear", "type", "number"], ["matInput", "", "placeholder", "No. Telpon/Fax Prodi S-1", "formControlName", "prodiPhone", "type", "text", "required", ""], ["matInput", "", "placeholder", "Nama Ketua Prodi S-1", "formControlName", "prodiHead", "type", "text", "required", ""], ["matInput", "", "placeholder", "No. HP Ketua Prodi S-1", "formControlName", "prodiHeadPhone", "type", "text", "required", ""], ["matInput", "", "placeholder", "Alamat e-mail Ketua Prodi S-1", "formControlName", "prodiHeadEmail", "type", "email", "required", ""], ["fxLayout", "column", "fxLayoutAlign", "start stretch", "fxLayoutGap", "24px", 3, "formGroup", "ngSubmit"], ["fxLayout", "column", "fxLayoutAlign", "start start", "fxLayoutGap", "8px"], ["mat-flat-button", "", "color", "primary", "type", "button", 2, "margin-bottom", "16px", 3, "click"], ["fxLayout", "column", "fxLayoutAlign", "start stretch"], ["formControlName", "fileDosen", "placeholder", "File Lampiran Dosen S1", "valuePlaceholder", "Upload file dosen S1 disini", 3, "autofilled", "accept", "required"], ["matSuffix", ""], ["matInput", "", "placeholder", "Nama PSPA", "formControlName", "prodiName", "type", "text"], ["matInput", "", "placeholder", "Ijin Operasional PSPA", "formControlName", "prodiPermit", "type", "text"], ["matInput", "", "placeholder", "Akreditasi PSPA oleh", "formControlName", "prodiAccreditedBy", "type", "text"], ["matInput", "", "placeholder", "No. SK Akreditasi PSPA", "formControlName", "prodiAccreditedNo", "type", "text"], ["matInput", "", "placeholder", "Jumlah mahasiswa PSPA saat ini", "formControlName", "prodiStudents", "type", "number"], ["matInput", "", "placeholder", "Jumlah mahasiswa PSPA diterima/tahun", "formControlName", "prodiStudentsYear", "type", "number"], ["matInput", "", "placeholder", "No. Telpon/Fax Prodi PSPA", "formControlName", "prodiPhone", "type", "text"], ["matInput", "", "placeholder", "Nama Ketua Prodi PSPA", "formControlName", "prodiHead", "type", "text"], ["matInput", "", "placeholder", "No. HP Ketua Prodi PSPA", "formControlName", "prodiHeadPhone", "type", "text"], ["matInput", "", "placeholder", "Alamat e-mail Ketua Prodi PSPA", "formControlName", "prodiHeadEmail", "type", "email"], ["matInput", "", "placeholder", "Nama Prodi Sarjana 2", "formControlName", "prodiName", "type", "text"], ["matInput", "", "placeholder", "Ijin Operasional S-2", "formControlName", "prodiPermit", "type", "text"], ["matInput", "", "placeholder", "Akreditasi S-2 oleh", "formControlName", "prodiAccreditedBy", "type", "text"], ["matInput", "", "placeholder", "No. SK Akreditasi S-2", "formControlName", "prodiAccreditedNo", "type", "text"], ["matInput", "", "placeholder", "Jumlah mahasiswa S-2 saat ini", "formControlName", "prodiStudents", "type", "number"], ["matInput", "", "placeholder", "Jumlah mahasiswa S-2 diterima/tahun", "formControlName", "prodiStudentsYear", "type", "number"], ["matInput", "", "placeholder", "No. Telpon/Fax Prodi S-2", "formControlName", "prodiPhone", "type", "text"], ["matInput", "", "placeholder", "Nama Ketua Prodi S-2", "formControlName", "prodiHead", "type", "text"], ["matInput", "", "placeholder", "No. HP Ketua Prodi S-2", "formControlName", "prodiHeadPhone", "type", "text"], ["matInput", "", "placeholder", "Alamat e-mail Ketua Prodi S-2", "formControlName", "prodiHeadEmail", "type", "email"], ["formControlName", "file", "placeholder", "File Lampiran Dosen PSPA", "valuePlaceholder", "Upload file dosen PSPA disini", 3, "autofilled", "accept", "required"], ["formControlName", "file", "placeholder", "File Lampiran Informasi Anggaran, Fasilitas dan Sarana-Prasarana", "valuePlaceholder", "Upload file Informasi Anggaran, Fasilitas dan Sarana-Prasarana disini", 3, "autofilled", "accept", "required"], ["type", "button", "mat-flat-button", "", 1, "paymentButton", 3, "disabled", "click"], [2, "width", "20px", "height", "20px", "font-size", "20px", "margin-left", "8px"]], template: function UserRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h1", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Pendaftaran Anggota APTFI");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-vertical-stepper", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, UserRegisterComponent_ng_template_8_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, UserRegisterComponent_ng_template_9_Template, 31, 4, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, UserRegisterComponent_ng_template_11_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, UserRegisterComponent_ng_template_12_Template, 29, 5, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, UserRegisterComponent_ng_template_14_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, UserRegisterComponent_ng_template_15_Template, 48, 7, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-step", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, UserRegisterComponent_ng_template_17_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, UserRegisterComponent_ng_template_18_Template, 16, 7, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-step", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, UserRegisterComponent_ng_template_20_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, UserRegisterComponent_ng_template_21_Template, 24, 3, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mat-step", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, UserRegisterComponent_ng_template_23_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, UserRegisterComponent_ng_template_24_Template, 25, 4, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-step", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, UserRegisterComponent_ng_template_26_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, UserRegisterComponent_ng_template_27_Template, 15, 6, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "mat-step", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, UserRegisterComponent_ng_template_29_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, UserRegisterComponent_ng_template_30_Template, 8, 6, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, UserRegisterComponent_div_33_Template, 4, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, UserRegisterComponent_button_34_Template, 4, 1, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, UserRegisterComponent_button_35_Template, 4, 1, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("linear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", ctx.instituteForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", ctx.facultyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", ctx.s1Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", ctx.dosenS1Form)("state", "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", ctx.pspaForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", ctx.s2Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", ctx.dosenPspaForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", ctx.sarpraForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.paymentLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.paymentLoading && (ctx.state == null ? null : ctx.state.registerLastStatus) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.paymentLoading && (ctx.state == null ? null : ctx.state.registerLastStatus) === 3);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutGapDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDivider, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__.MatStepLabel, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__.MatStepContent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatOption, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatSpinner, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon, ngx_material_file_input__WEBPACK_IMPORTED_MODULE_27__.FileInputComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatSuffix], styles: [".paymentButton[_ngcontent-%COMP%] {\n  background-color: #074fbf;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJ1c2VyLXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheW1lbnRCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc0ZmJmO1xuICBjb2xvcjogI2ZmZjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 8874:
/*!****************************************************************!*\
  !*** ./src/app/user-view/user-register/user-register.guard.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRegisterGuard": () => (/* binding */ UserRegisterGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _member_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../member.state */ 9673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 3394);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 7001);






class UserRegisterGuard {
    constructor(store, router, snackbar) {
        this.store = store;
        this.router = router;
        this.snackbar = snackbar;
    }
    canActivate(route, state) {
        return this.store.selectOnce(_member_state__WEBPACK_IMPORTED_MODULE_0__.MemberState).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((memberState) => {
            var _a;
            switch ((_a = memberState.member) === null || _a === void 0 ? void 0 : _a.registerLastStatus) {
                case 0:
                case 3:
                    return true;
                case 1:
                    this.snackbar.open('Segera lunasi tagihan anda', '', {
                        duration: 1000,
                    });
                    this.router.navigate(['tagihan']);
                    return false;
                case 2:
                    this.snackbar.open('Anda sudah melengkapi pendaftaran', '', {
                        duration: 1000,
                    });
                    this.router.navigate(['profil']);
                    return false;
                case 4:
                    this.snackbar.open('Anda telah aktif menjadi anggota', '', {
                        duration: 1000,
                    });
                    this.router.navigate(['profil']);
                    return false;
                default:
                    return true;
            }
        }));
    }
}
UserRegisterGuard.ɵfac = function UserRegisterGuard_Factory(t) { return new (t || UserRegisterGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar)); };
UserRegisterGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserRegisterGuard, factory: UserRegisterGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8831:
/*!******************************************************************!*\
  !*** ./src/app/user-view/user-register/user-register.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRegisterService": () => (/* binding */ UserRegisterService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_core_http_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/http-client.service */ 7352);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);




class UserRegisterService {
    constructor(httpClient, http) {
        this.httpClient = httpClient;
        this.http = http;
    }
    saveInstitute(data) {
        return this.httpClient.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/members/save-institute`, data);
    }
    saveFaculty(data) {
        return this.httpClient.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/members/save-faculty`, data);
    }
    saveProdi(data, type) {
        data.prodiType = type;
        return this.httpClient.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/prodis/save-prodi`, data);
    }
    downloadTemplate() {
        return this.http.get('./assets/template/template_dosen.xlsx', {
            responseType: 'blob',
        });
    }
    uploadFileDosen(data) {
        return this.httpClient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/dosens/save-dosen`, data);
    }
    uploadSarpra(data) {
        return this.httpClient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/members/save-sarpra`, data);
    }
    setStatusMember(status) {
        return this.httpClient.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/members/set-status`, {
            status,
        });
    }
}
UserRegisterService.ɵfac = function UserRegisterService_Factory(t) { return new (t || UserRegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_client_service__WEBPACK_IMPORTED_MODULE_1__.HttpClientService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
UserRegisterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserRegisterService, factory: UserRegisterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2684:
/*!**************************************************!*\
  !*** ./src/app/user-view/user-view.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserViewComponent": () => (/* binding */ UserViewComponent)
/* harmony export */ });
/* harmony import */ var _states_loading_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states/loading.state */ 9989);
/* harmony import */ var _member_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member.state */ 9673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 3394);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _user_navigation_user_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-navigation/user-navigation.component */ 6695);






class UserViewComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.memberState = this.store.selectSnapshot(_member_state__WEBPACK_IMPORTED_MODULE_1__.MemberState);
        if (this.memberState.member.registerLastStatus === 0 || this.memberState.member.registerLastStatus === 3) {
            this.router.navigate(['daftar']);
        }
        this.loading$ = this.store.select(_states_loading_state__WEBPACK_IMPORTED_MODULE_0__.LoadingState);
    }
    ngOnInit() { }
}
UserViewComponent.ɵfac = function UserViewComponent_Factory(t) { return new (t || UserViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
UserViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UserViewComponent, selectors: [["app-user-view"]], decls: 1, vars: 0, template: function UserViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-user-navigation");
    } }, directives: [_user_navigation_user_navigation_component__WEBPACK_IMPORTED_MODULE_3__.UserNavigationComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4162:
/*!***********************************************!*\
  !*** ./src/app/user-view/user-view.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserViewModule": () => (/* binding */ UserViewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _user_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-view.component */ 2684);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _user_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.guard */ 1220);
/* harmony import */ var _user_navigation_user_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-navigation/user-navigation.component */ 6695);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ 5830);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-register/user-register.component */ 7769);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 7441);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-material-file-input */ 4904);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _user_register_user_register_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-register/user-register.guard */ 8874);
/* harmony import */ var _tagihan_verified_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tagihan/verified.guard */ 171);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tabs */ 5939);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/stepper */ 4553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);


























const routes = [
    {
        path: '',
        component: _user_view_component__WEBPACK_IMPORTED_MODULE_0__.UserViewComponent,
        canActivate: [_user_guard__WEBPACK_IMPORTED_MODULE_1__.UserGuard],
        children: [
            {
                path: '',
                redirectTo: 'profil',
            },
            {
                path: 'profil',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_table_js"), __webpack_require__.e("default-node_modules_ng2-pdf-viewer___ivy_ngcc___fesm2015_ng2-pdf-viewer_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_user-view_user-profile_user-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user-profile/user-profile.module */ 2757)).then((m) => m.UserProfileModule),
            },
            {
                path: 'dosen',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_chips_js-node_modules_angular_mat-16f1d3"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_table_js"), __webpack_require__.e("src_app_user-view_lecturer_lecturer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./lecturer/lecturer.module */ 4735)).then((m) => m.LecturerModule),
                canActivate: [_tagihan_verified_guard__WEBPACK_IMPORTED_MODULE_5__.VerifiedGuard],
            },
            {
                path: 'tagihan',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("src_app_user-view_tagihan_tagihan_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tagihan/tagihan.module */ 3648)).then((m) => m.TagihanModule),
                canActivate: [_tagihan_verified_guard__WEBPACK_IMPORTED_MODULE_5__.VerifiedGuard],
            },
            {
                path: 'rekap-tagihan',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_chips_js-node_modules_angular_mat-16f1d3"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_table_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_user-view_rekap-tagihan_rekap-tagihan_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./rekap-tagihan/rekap-tagihan.module */ 5269)).then((m) => m.RekapTagihanModule),
                canActivate: [_tagihan_verified_guard__WEBPACK_IMPORTED_MODULE_5__.VerifiedGuard],
            },
            {
                path: 'daftar',
                component: _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_3__.UserRegisterComponent,
                canActivate: [_user_register_user_register_guard__WEBPACK_IMPORTED_MODULE_4__.UserRegisterGuard],
            },
        ],
    },
];
class UserViewModule {
}
UserViewModule.ɵfac = function UserViewModule_Factory(t) { return new (t || UserViewModule)(); };
UserViewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: UserViewModule });
UserViewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes),
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_9__.MaterialFileInputModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__.FlexLayoutModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTabsModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__.MatStepperModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](UserViewModule, { declarations: [_user_view_component__WEBPACK_IMPORTED_MODULE_0__.UserViewComponent, _user_navigation_user_navigation_component__WEBPACK_IMPORTED_MODULE_2__.UserNavigationComponent, _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_3__.UserRegisterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, ngx_material_file_input__WEBPACK_IMPORTED_MODULE_9__.MaterialFileInputModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__.FlexLayoutModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTabsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__.MatStepperModule] }); })();


/***/ }),

/***/ 1220:
/*!*****************************************!*\
  !*** ./src/app/user-view/user.guard.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserGuard": () => (/* binding */ UserGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8939);
/* harmony import */ var _states_loading_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states/loading.state */ 9989);
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.state */ 2534);
/* harmony import */ var _member_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./member.state */ 9673);
/* harmony import */ var _user_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.state */ 2262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 3394);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @auth0/angular-jwt */ 6686);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ 9620);











class UserGuard {
    constructor(router, store, jwtService, userService) {
        this.router = router;
        this.store = store;
        this.jwtService = jwtService;
        this.userService = userService;
    }
    canActivate(route, state) {
        return this.store.selectOnce(_app_state__WEBPACK_IMPORTED_MODULE_1__.AppState).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.store.dispatch(new _states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(true))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)((appState) => {
            if (appState.session.accessToken === '') {
                this.router.navigate(['login']);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(false);
            }
            switch (appState.session.role.id) {
                case 1:
                    this.router.navigate(['admin/users']);
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(false);
                case 3:
                    this.router.navigate(['penggurus/anggota']);
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(false);
                default:
                    break;
            }
            const memberState = this.store.selectSnapshot(_member_state__WEBPACK_IMPORTED_MODULE_2__.MemberState);
            if (!memberState.member) {
                const decodedToken = this.jwtService.decodeToken(appState.session.accessToken);
                return this.userService.getWithMember(decodedToken.sub).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((response) => {
                    this.store.dispatch(new _user_state__WEBPACK_IMPORTED_MODULE_3__.SetUserState(response.user));
                    this.store.dispatch(new _member_state__WEBPACK_IMPORTED_MODULE_2__.SetMemberState(response.member));
                    return { user: response.user, member: response.member };
                }));
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(memberState);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((memberState) => {
            if (memberState === false) {
                return false;
            }
            return true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => this.store.dispatch(new _states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(false))));
    }
}
UserGuard.ɵfac = function UserGuard_Factory(t) { return new (t || UserGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__.JwtHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService)); };
UserGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({ token: UserGuard, factory: UserGuard.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_user-view_user-view_module_ts.9d47eb11ba16d3dc3fda.js.map