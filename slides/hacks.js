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

    let z = 1;
    let zoomStyleNode = null;

    function applyZoom(z) {
        if (!zoomStyleNode) {
            zoomStyleNode = document.createElement('style');
            document.head.appendChild(zoomStyleNode);
        }
        zoomStyleNode.innerHTML = `#gatsby-focus-wrapper > :first-child > :first-child { zoom: ${z.toFixed(2)}; }`;
    }

    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'PageUp':
                z = Math.min(2, z + 0.05);
                applyZoom(z);
                e.stopPropagation();
                break;
            case 'PageDown':
                z = Math.max(0.25, z - 0.05);
                applyZoom(z);
                e.stopPropagation();
                break;
            default: break;
        }
    })

    // cursor timeout and highlight

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
