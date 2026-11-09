document.addEventListener("DOMContentLoaded", function ()
{
    const members = document.querySelectorAll(".Member");
    revealOnScroll(members);

    members.forEach(function (member)
    {
        const link = member.querySelector("a[href*='linkedin']");
        if (link)
        {
            link.target = "_blank";
        }
    });
});
