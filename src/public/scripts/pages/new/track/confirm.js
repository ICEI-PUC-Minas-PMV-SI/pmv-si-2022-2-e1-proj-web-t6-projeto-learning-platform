setTimeout(() => {
    const trackId = $("[data-user-track-id]").data("user-track-id");

    location.href = `/new/track/ready?trackId=${trackId}`;
}, 2000);
