export function LoadCSS(href) {
    const exists = document.querySelector(`link[href="${href}"]`);
    if (exists) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
}