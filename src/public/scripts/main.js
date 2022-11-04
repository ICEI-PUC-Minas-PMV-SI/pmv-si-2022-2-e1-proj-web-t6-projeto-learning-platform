import "/scripts/extensions.js";
import { initBreakpoints, initHomeScrollNav, initPrivateProfile } from "/scripts/lib.js";
import { initHeader } from "/scripts/header.js";

$(() => {
    initHeader();
    initBreakpoints();
    initHomeScrollNav();
    initPrivateProfile();
});
