import "/public/scripts/extensions.js";
import { initBreakpoints, initHomeScrollNav, initPrivateProfile } from "./lib.js";
import { initHeader } from "./header.js";

$(() => {
    initHeader();
    initBreakpoints();
    initHomeScrollNav();
    // initPrivateProfile();

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
});
