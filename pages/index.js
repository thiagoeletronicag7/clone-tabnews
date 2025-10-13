import { useEffect, useRef } from 'react';

function criarFlorAnimada(container) {
    const targetContainer = container || document.body;
    if (!targetContainer) {
        return;
    }
    targetContainer.innerHTML = '';

    if (!document.getElementById('estilos-flor')) {
        const cssStyles = `
            html, body {
                height: 100%;
                margin: 0;
                padding: 0;
            }

            .container-centralizado {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                width: 100%;
                background-color: #f0f8ff; 
            }

            .flower-wrapper {
                position: relative;
                width: 300px;
                height: 400px;
            }

            .flower {
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translateX(-50%);
                width: 200px;
                height: 300px;
            }

            .stem {
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 10px;
                height: 200px;
                background-color: #4caf50;
                border-radius: 5px;
                animation: grow-stem 2s ease-out;
            }

            .leaf {
                position: absolute;
                bottom: 50px;
                left: 50%;
                width: 50px;
                height: 50px;
                background-color: #66bb6a;
                border-radius: 50% 0;
            }

            .leaf.left {
                transform-origin: bottom right;
                animation: grow-leaf-left 1.5s 1s ease-out forwards;
            }

            .leaf.right {
                transform-origin: bottom left;
                animation: grow-leaf-right 1.5s 1s ease-out forwards;
            }

            .petal {
                position: absolute;
                bottom: 190px;
                left: 50%;
                transform-origin: bottom center;
                width: 80px;
                height: 100px;
                background-color: #ffc0cb;
                border-radius: 50% 50% 0 0;
                opacity: 0;
                animation: bloom 2s 2s ease-out forwards;
            }

            .center {
                position: absolute;
                bottom: 165px; 
                left: 50%;
                transform: translateX(-50%);
                width: 50px;
                height: 50px;
                background-color: #ffd700;
                border-radius: 50%;
                opacity: 0;
                animation: bloom-center 1s 3.5s ease-out forwards;
            }

            .message {
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                font-size: 24px;
                color: #e91e63;
                opacity: 0;
                animation: fade-in-message 2s 4.5s ease-in forwards;
                font-family: 'Arial', sans-serif;
            }

            @keyframes grow-stem {
                from { height: 0; }
                to { height: 200px; }
            }

            @keyframes grow-leaf-left {
                from { transform: rotate(45deg) scale(0); }
                to { transform: rotate(45deg) scale(1); }
            }

            @keyframes grow-leaf-right {
                from { transform: rotate(-135deg) scale(0); }
                to { transform: rotate(-135deg) scale(1); }
            }

            @keyframes bloom {
                from {
                    opacity: 0;
                    transform: translateX(-50%) rotate(var(--rotation)) scale(0);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) rotate(var(--rotation)) scale(1);
                }
            }

            @keyframes bloom-center {
                from {
                    opacity: 0;
                    transform: translateX(-50%) scale(0);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) scale(1);
                }
            }

            @keyframes fade-in-message {
                from {
                    opacity: 0;
                    transform: translateX(-50%) translateY(10px);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
            }
        `;
        const styleSheet = document.createElement("style");
        styleSheet.id = 'estilos-flor';
        styleSheet.innerText = cssStyles;
        document.head.appendChild(styleSheet);
    }

    const wrapper = document.createElement('div');
    wrapper.classList.add('flower-wrapper');

    const flower = document.createElement('div');
    flower.classList.add('flower');

    const stem = document.createElement('div');
    stem.classList.add('stem');
    flower.appendChild(stem);

    const leftLeaf = document.createElement('div');
    leftLeaf.classList.add('leaf', 'left');
    flower.appendChild(leftLeaf);

    const rightLeaf = document.createElement('div');
    rightLeaf.classList.add('leaf', 'right');
    flower.appendChild(rightLeaf);

    for (let i = 0; i < 8; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.setProperty('--rotation', `${i * 45}deg`);
        flower.appendChild(petal);
    }

    const center = document.createElement('div');
    center.classList.add('center');
    flower.appendChild(center);

    wrapper.appendChild(flower);

    const message = document.createElement('div');
    message.classList.add('message');
    message.textContent = 'Isadora, Eu te amo <3';
    wrapper.appendChild(message);

    targetContainer.appendChild(wrapper);
}

export default function HomePage() {
    const flowerContainerRef = useRef(null);

    useEffect(() => {
        criarFlorAnimada(flowerContainerRef.current);
    }, []);

    return (
        <main className="container-centralizado" ref={flowerContainerRef}>
            {}
        </main>
    );
}