let card = (function()
{
    function cardHover(card)
    {
        card.children[0].classList.add("text-slide");
    }

    function cardRemoveHover(card)
    {
        card.children[0].classList.remove("text-slide");
    }

    function displayTechInfo(panel) {
        panel.classList.add("panel-slide");
    }

    function onHover(cards)
    {
        [...cards].forEach(card => card.addEventListener("mouseover", function(){ cardHover(card); }));
        [...cards].forEach(card => card.addEventListener("mouseleave", function(){ cardRemoveHover(card); }));
    }

    function onClick(btns)
    {
        let tech_panels = document.getElementsByClassName("projects-item-tech-info");
        for (let i = 0; i < btns.length; i++)
        {
            btns[i].addEventListener("click", function(){ displayTechInfo( tech_panels[i]); });
        }
    }

    return { onHover, onClick };
})();

// global
let cards = document.getElementsByClassName("projects-item");
let tech_info_btns = document.getElementsByClassName("tech-info-btn");
card.onHover(cards);
card.onClick(tech_info_btns);