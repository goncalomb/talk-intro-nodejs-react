let defaultZoom = () => { };
let defaultBackgroundImage = () => { };

if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
    // hack, global style

    const globalStyleNode = document.createElement('style');
    globalStyleNode.innerHTML = `
        .cursor-highlight {
            position: fixed;
            width: 80px;
            height: 80px;
            pointer-events: none;
            background-color: aquamarine;
            opacity: 0.75;
            transform: translate(-40px, -40px);
            border-radius: 40px;
        }
    `;
    document.head.appendChild(globalStyleNode);

    // hack, page up/down keys as zoom in/out

    let zoom = 1;
    let zoomStyleNode = null;

    function applyZoom(z) {
        if (window.location.pathname === '/print') {
            return;
        }
        zoom = z;
        if (!zoomStyleNode) {
            zoomStyleNode = document.createElement('style');
            document.head.appendChild(zoomStyleNode);
        }
        zoomStyleNode.innerHTML = `[class$="-Slide"] { zoom: ${z.toFixed(2)}; }`;
    }

    defaultZoom = (z) => {
        if (!zoomStyleNode) {
            applyZoom(z);
        }
    };

    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'PageUp':
                applyZoom(Math.min(2, zoom + 0.05));
                e.stopPropagation();
                break;
            case 'PageDown':
                applyZoom(Math.max(0.25, zoom - 0.05));
                e.stopPropagation();
                break;
            default: break;
        }
    })

    // cursor timeout and highlight

    if (window.location.pathname !== '/print') {
        let timeoutCursorHide = 0;
        let cursorHighlight = document.createElement('div');
        cursorHighlight.classList.add('cursor-highlight');
        document.body.appendChild(cursorHighlight);

        function setCursorHideTimeout() {
            document.body.style.cursor = 'unset';
            cursorHighlight.style.display = 'block';
            clearTimeout(timeoutCursorHide);
            timeoutCursorHide = setTimeout(() => {
                document.body.style.cursor = 'none';
                cursorHighlight.style.display = 'none';
            }, 500);
        }

        document.addEventListener('mousemove', (e) => {
            setCursorHideTimeout();
            cursorHighlight.style.left = `${e.x}px`;
            cursorHighlight.style.top = `${e.y}px`;
        });
        setCursorHideTimeout();
    }

    // bg image

    let bgStyleNode = null;

    defaultBackgroundImage = (src) => {
        if (!bgStyleNode && window.location.pathname !== '/print' /* TODO: make bg work in print mode */) {
            bgStyleNode = document.createElement('style');
            bgStyleNode.innerHTML = `
            [class$="-Slide"] {
                background-image: url("${src}");
                background-size: cover;
            }
            `;
            document.head.appendChild(bgStyleNode);
        }
    }
}

export {
    defaultZoom,
    defaultBackgroundImage
};
