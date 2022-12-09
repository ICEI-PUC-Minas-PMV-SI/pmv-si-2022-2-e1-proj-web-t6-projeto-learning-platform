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
        console.log("AGAIN", this.lastAnimtation, nextAnimation());
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

setTimeout(() => {
    const trackId = $("[data-user-track-id]").data("user-track-id");
    console.log("TRACK ID", trackId);
    // location.href = `/user-tracks/${trackId}`
}, 4000);
