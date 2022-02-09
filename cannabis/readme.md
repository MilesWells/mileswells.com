# Stencil Notes

## Shadow DOM

    - Creates an encapsulated DOM tree inside of a given DOM node that also encapsulates any styles
    - "light" DOM = regular DOM
    - Best practice is to ALWAYS use `@Component({ shadow: true })` since encapsulation via shadow DOM is part of Web Component standards
    - Use `:host` to select the host element when using shadow DOM
    - Use `@Element.shadowRoot.querySelector` to traverse and manipulate shadow DOM
    - `scoped` is a proxy for style encapsulation. It works by adding a `data-` attribute to make the component unique in the DOM. This does not prevent light DOM styles from affecting the component.
    - Probably don't use `scoped` for anything
    - Use `::part` pseudo-element to expose pieces of a component for custom styling outside the component

## Components

    - JS class w/ `@Component` decorator
    - No imports for nesting components since they're just HTML tags
    - Lifecycle: https://stenciljs.com/docs/component-lifecycle
    - Deepest components load first, then `componentDidLoad` bubbles up

### Props and State

    - User-defined types must be exported somewhere, even if the type is in the same file as the component. This is so stencil knows the type when passing props down from parent components.
    - All props are immutable by default and are required to be controlled by parent components
    - A prop can be reflected into the DOM via an attribute on the DOM node if the value of the prop is needed to manipulate or traverse the DOM in some way
    - Component class members with the `@State` decorator are internal to the component. They are mutable and will cause a rerender when changed
    - Best practice for internal data is to avoid using `@State` unless you know for sure the value changing should cause a rerender
    - Use `<Host>` Component similar to React `<Fragment>` (or `<></>` if you're used to that syntax)
    - `<Host>` is a virtual component but can be used to set attributes and event listeners to the host element
    - Use the `@Element` decorator to get access to the host element in the class code
    - Stencil only compares references and will not rerender when an object or array is mutated
