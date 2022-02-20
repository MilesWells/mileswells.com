/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { JSX } from "@stencil/core";
export namespace Components {
    interface AppRoot {
    }
    interface GrowAbout {
    }
    interface GrowCosts {
    }
    interface GrowDayEntry {
        "additionalPhotos": string[];
        "article": JSX.Element;
        "basePath": string;
        "date": string;
        "handleThumbnailClick": (fullSizePath: string) => void;
    }
    interface GrowJackHerer {
    }
    interface GrowModal {
        "handleClose": () => void;
        "isOpen": boolean;
    }
    interface NavBar {
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLGrowAboutElement extends Components.GrowAbout, HTMLStencilElement {
    }
    var HTMLGrowAboutElement: {
        prototype: HTMLGrowAboutElement;
        new (): HTMLGrowAboutElement;
    };
    interface HTMLGrowCostsElement extends Components.GrowCosts, HTMLStencilElement {
    }
    var HTMLGrowCostsElement: {
        prototype: HTMLGrowCostsElement;
        new (): HTMLGrowCostsElement;
    };
    interface HTMLGrowDayEntryElement extends Components.GrowDayEntry, HTMLStencilElement {
    }
    var HTMLGrowDayEntryElement: {
        prototype: HTMLGrowDayEntryElement;
        new (): HTMLGrowDayEntryElement;
    };
    interface HTMLGrowJackHererElement extends Components.GrowJackHerer, HTMLStencilElement {
    }
    var HTMLGrowJackHererElement: {
        prototype: HTMLGrowJackHererElement;
        new (): HTMLGrowJackHererElement;
    };
    interface HTMLGrowModalElement extends Components.GrowModal, HTMLStencilElement {
    }
    var HTMLGrowModalElement: {
        prototype: HTMLGrowModalElement;
        new (): HTMLGrowModalElement;
    };
    interface HTMLNavBarElement extends Components.NavBar, HTMLStencilElement {
    }
    var HTMLNavBarElement: {
        prototype: HTMLNavBarElement;
        new (): HTMLNavBarElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "grow-about": HTMLGrowAboutElement;
        "grow-costs": HTMLGrowCostsElement;
        "grow-day-entry": HTMLGrowDayEntryElement;
        "grow-jack-herer": HTMLGrowJackHererElement;
        "grow-modal": HTMLGrowModalElement;
        "nav-bar": HTMLNavBarElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface GrowAbout {
    }
    interface GrowCosts {
    }
    interface GrowDayEntry {
        "additionalPhotos"?: string[];
        "article"?: JSX.Element;
        "basePath"?: string;
        "date"?: string;
        "handleThumbnailClick"?: (fullSizePath: string) => void;
    }
    interface GrowJackHerer {
    }
    interface GrowModal {
        "handleClose"?: () => void;
        "isOpen"?: boolean;
    }
    interface NavBar {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "grow-about": GrowAbout;
        "grow-costs": GrowCosts;
        "grow-day-entry": GrowDayEntry;
        "grow-jack-herer": GrowJackHerer;
        "grow-modal": GrowModal;
        "nav-bar": NavBar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "grow-about": LocalJSX.GrowAbout & JSXBase.HTMLAttributes<HTMLGrowAboutElement>;
            "grow-costs": LocalJSX.GrowCosts & JSXBase.HTMLAttributes<HTMLGrowCostsElement>;
            "grow-day-entry": LocalJSX.GrowDayEntry & JSXBase.HTMLAttributes<HTMLGrowDayEntryElement>;
            "grow-jack-herer": LocalJSX.GrowJackHerer & JSXBase.HTMLAttributes<HTMLGrowJackHererElement>;
            "grow-modal": LocalJSX.GrowModal & JSXBase.HTMLAttributes<HTMLGrowModalElement>;
            "nav-bar": LocalJSX.NavBar & JSXBase.HTMLAttributes<HTMLNavBarElement>;
        }
    }
}
