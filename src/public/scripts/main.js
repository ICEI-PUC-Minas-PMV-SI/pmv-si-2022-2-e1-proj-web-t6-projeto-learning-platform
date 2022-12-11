import "/public/scripts/extensions.js";
import { initBreakpoints, initHomeScrollNav } from "./lib.js";
import { initHeader } from "./header.js";

$(() => {
    window.Scrollbar.use(HorizontalScrollPlugin, OverscrollPlugin);
    
    initHeader();
    initBreakpoints();
    initHomeScrollNav();

    /**
     * Submit new track form at confirm step.
     */
    if ($("#gr-new-plan-form").eq(0)) {
        $("#gr-new-plan-form").on("submit", (e) => {
            const timeInput = $('input[name="time"]');

            if (!timeInput.val()) {
                e.preventDefault();
                e.stopPropagation();

                $('input[name="time"]').val($(e.submitter).data("time"));

                $(e.target).trigger("submit");
            }
        });
    }
    
    // Initialize tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});
