document.addEventListener("DOMContentLoaded", function ()
{
    document.querySelectorAll("td").forEach(function (cell)
    {
        if (cell.textContent.trim() === "☑")
        {
            cell.innerHTML = '<span class="yes">✓</span>';
        }
        else if (cell.textContent.trim() === "☒")
        {
            cell.innerHTML = '<span class="no">✗</span>';
        }
    });
});
