export function LoadCSS(href) {
    return new Promise((resolve, reject) => {
        const exists = document.querySelector(`link[href="${href}"]`);
        if (exists) {
            resolve();
            return;
        }

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.onload = () => resolve();
        link.onerror = () => reject(`Erro ao carregar CSS: ${href}`);

        document.head.appendChild(link);
    }); 
}
