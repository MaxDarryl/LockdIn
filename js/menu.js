document.addEventListener("DOMContentLoaded", function ()
{
    const nav = document.querySelector("header nav");
    const list = nav.querySelector("ul");

    nav.childNodes.forEach(function (node)
    {
        if (node.nodeType === Node.TEXT_NODE)
        {
            node.textContent = "";
        }
    });
    const button = document.createElement("button");
    button.className = "menu-button";
    button.setAttribute("aria-label", "Menu");
    button.innerHTML = "<span></span><span></span><span></span>";
    nav.insertBefore(button, list);

    button.addEventListener("click", function ()
    {
        nav.classList.toggle("open");
    });

    const page = location.pathname.split("/").pop() || "home.html";
    list.querySelectorAll("a").forEach(function (link)
    {
        if (link.getAttribute("href") === page)
        {
            link.classList.add("current");
        }
    });
});

function revealOnScroll(elements)
{
    const observer = new IntersectionObserver(function (entries)
    {
        entries.forEach(function (entry)
        {
            if (entry.isIntersecting)
            {
                entry.target.classList.add("visible");
            }
        });
    });
    elements.forEach(function (element)
    {
        element.classList.add("reveal");
        observer.observe(element);
    });
}
