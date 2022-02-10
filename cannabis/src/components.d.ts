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
    interface GrowDayEntry {
        "additionalPhotos": string[];
        "article": JSX.Element;
        "basePath": string;
        "date": string;
    }
    interface GrowJackHerer {
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
    interface HTMLNavBarElement extends Components.NavBar, HTMLStencilElement {
    }
    var HTMLNavBarElement: {
        prototype: HTMLNavBarElement;
        new (): HTMLNavBarElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "grow-about": HTMLGrowAboutElement;
        "grow-day-entry": HTMLGrowDayEntryElement;
        "grow-jack-herer": HTMLGrowJackHererElement;
        "nav-bar": HTMLNavBarElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface GrowAbout {
    }
    interface GrowDayEntry {
        "additionalPhotos"?: string[];
        "article"?: JSX.Element;
        "basePath"?: string;
        "date"?: string;
    }
    interface GrowJackHerer {
    }
    interface NavBar {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "grow-about": GrowAbout;
        "grow-day-entry": GrowDayEntry;
        "grow-jack-herer": GrowJackHerer;
        "nav-bar": NavBar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "grow-about": LocalJSX.GrowAbout & JSXBase.HTMLAttributes<HTMLGrowAboutElement>;
            "grow-day-entry": LocalJSX.GrowDayEntry & JSXBase.HTMLAttributes<HTMLGrowDayEntryElement>;
            "grow-jack-herer": LocalJSX.GrowJackHerer & JSXBase.HTMLAttributes<HTMLGrowJackHererElement>;
            "nav-bar": LocalJSX.NavBar & JSXBase.HTMLAttributes<HTMLNavBarElement>;
        }
    }
}
