function animateBounce() {
    return $("#emoji").removeClass("animate__rubberBand").addClass("animate__bounce");
}

function animateRubber() {
    return $("#emoji").removeClass("animate__bounce").addClass("animate__rubberBand");
}

function animateEmoji() {
    this.lastAnimtation = animateRubber;
    const reotateAnimation = () => {
        const nextAnimation = this.lastAnimtation === animateRubber ? animateBounce : animateRubber;

        nextAnimation().one("animationend", () => {
            this.lastAnimtation = nextAnimation;

            setTimeout(() => {
                reotateAnimation();
            }, 500);
        });
    };

    return reotateAnimation();
}

animateEmoji();
