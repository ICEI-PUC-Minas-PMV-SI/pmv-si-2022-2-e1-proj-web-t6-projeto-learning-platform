$(() => {
    const Scrollbar = window.Scrollbar;

    Scrollbar.use(HorizontalScrollPlugin, OverscrollPlugin)

    Scrollbar.init(
        document.querySelector('#gr-search-menu'),
        { thumbMinSize: 10 }
    )

    Scrollbar.init(
        document.querySelector('#gr-search-sidebar'),
        { thumbMinSize: 10, plugins: { horizontalScroll: false } }
    );
    
    $("[data-toggle]").openClose(function(active, elem) {
        console.log(elem[0])
        if (active) {
            elem[0].style.transform = null;
        } else {
            elem[0].style.transform = 'rotate(180deg)';
        }
    });
});
