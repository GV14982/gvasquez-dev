"use strict";
const calcStyles = (btnBg, currBtn, skillSlider, btns) => {
    const mobile = window.matchMedia('(max-width: 768px)').matches;
    btnBg.style.height = currBtn.clientHeight + 'px';
    btnBg.style.width = `calc(${currBtn.clientWidth}px + ${window.getComputedStyle(currBtn).marginLeft} + ${window.getComputedStyle(currBtn).marginRight})`;
    const calcTransform = (index) => btns.slice(0, index).map(b => mobile ? `${b.clientHeight}px + ${window.getComputedStyle(b).marginTop} + ${window.getComputedStyle(b).marginBottom}` : `${b.clientWidth}px + ${window.getComputedStyle(b).marginLeft} + ${window.getComputedStyle(b).marginRight}`).join(" + ");
    switch (currBtn.textContent) {
        case 'Frontend':
            btnBg.style.transform = mobile ? "translateY(0px)" : "translateX(0px)";
            btnBg.style.backgroundPosition = "left";
            skillSlider.style.transform = mobile ? "translateY(0%)" : "translateX(0%)";
            break;
        case 'Backend':
            btnBg.style.transform = `translate${mobile ? 'Y' : 'X'}(calc(${calcTransform(1)}))`;
            btnBg.style.backgroundPosition = "center";
            skillSlider.style.transform = `translate${mobile ? 'Y' : 'X'}(calc((1/3) * -100%))`;
            break;
        case 'Tools':
            btnBg.style.transform = `translate${mobile ? 'Y' : 'X'}(calc(${calcTransform(2)}))`;
            btnBg.style.backgroundPosition = "right";
            skillSlider.style.transform = `translate${mobile ? 'Y' : 'X'}(calc((2/3) * -100%))`;
            break;
    }
};
document.addEventListener('readystatechange', () => {
    var _a;
    if (document.readyState === 'complete') {
        const btnBG = document.getElementById('btn-bg');
        const btnGroup = document.querySelector('.skills-type-selector');
        const btns = Array.from((_a = btnGroup === null || btnGroup === void 0 ? void 0 : btnGroup.children) !== null && _a !== void 0 ? _a : []);
        const skillSlider = document.querySelector('.skills-icons');
        let currBtn = document.querySelector('[data-selected]');
        let btnIndex = 0;
        if (btnBG && currBtn && skillSlider && btns) {
            calcStyles(btnBG, currBtn, skillSlider, btns);
        }
        window.addEventListener('resize', () => {
            if (btnBG && currBtn && skillSlider && btns) {
                calcStyles(btnBG, currBtn, skillSlider, btns);
            }
        });
        btns.forEach((b, i) => {
            b.addEventListener('click', () => {
                btns.forEach(bt => {
                    bt.removeAttribute('data-selected');
                });
                b.toggleAttribute('data-selected');
                currBtn = b;
                btnIndex = i;
                if (btnBG && currBtn && skillSlider && btns) {
                    calcStyles(btnBG, currBtn, skillSlider, btns);
                }
                ;
            });
        });
        btns.forEach(b => {
            b.addEventListener('keyup', (e) => {
                if (e.key === 'Space') {
                    btns.forEach(bt => {
                        bt.removeAttribute('data-selected');
                    });
                    b.toggleAttribute('data-selected');
                    currBtn = b;
                    if (btnBG && currBtn && skillSlider && btns) {
                        calcStyles(btnBG, currBtn, skillSlider, btns);
                    }
                    ;
                }
            });
        });
    }
});
