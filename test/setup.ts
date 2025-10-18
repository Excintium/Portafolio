import "@testing-library/jest-dom";

// matchMedia mock (AntD y algunos componentes lo usan)
if (!("matchMedia" in window)) {
    // @ts-expect-error: polyfill
    window.matchMedia = () => ({
        matches: false,
        media: "",
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false
    });
}

// ResizeObserver mock (AntD Table, etc.)
class RO {
    observe() {}
    unobserve() {}
    disconnect() {}
}
if (!("ResizeObserver" in window)) {
    // @ts-expect-error: polyfill
    window.ResizeObserver = RO;
}

// scrollIntoView noop para evitar errores en JSDOM
if (!HTMLElement.prototype.scrollIntoView) {
    HTMLElement.prototype.scrollIntoView = () => {};
}
