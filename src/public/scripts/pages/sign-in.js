const classes = [["bounceIn", "bounceOut"]];

const animateCSS = (node, animationIn) => {
    const prefix = "animate__";

    return new Promise((resolve, reject) => {
        const animation = `${prefix}${animationIn}`;
        const repeat = `${prefix}repeat-1`;
        const animated = `${prefix}animated`;
        const inProgress = "animating";
        const base = [animated, animation, repeat];
        const triggers = [...base];

        if (animation.indexOf("In") > -1) {
            triggers.push(inProgress);
        }

        node.classList.add(...triggers);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();

            if (animation.indexOf("Out") > -1) {
                base.push(inProgress);
            }

            node.classList.remove(...base);

            resolve("Animation ended");
        }

        node.addEventListener("animationend", handleAnimationEnd, { once: true });
    });
};

$(async () => {
    const page = $(".gr-sign-in-page");
    const items = $(".gr-sign-in-images .item");
    const count = items.length;

    async function animate(index) {
        const lastIndex = index > 0 ? index - 1 : count - 1;
        const lastImage = items.eq(lastIndex);

        if (lastImage.hasClass("animating")) {
            animateCSS(lastImage.get(0), classes[0][1]).then(() => {
                page.removeClass(lastImage.data("active"));
            });
        }

        const nextImage = items.eq(index);

        page.addClass(nextImage.data("active"));
        await animateCSS(nextImage.get(0), classes[0][0]);

        setTimeout(() => {
            const next = index + 1;
            animate(next >= count ? 0 : next);
        }, 2000);
    }

    await animate(0);
});
