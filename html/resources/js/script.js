let card = (function()
{
    function cardHover(card)
    {
        
    }

    function onHover(cards)
    {
        [...cards].forEach(card => card.addEventListener("mouseover", function(){ cardHover(card); }));
    }

    return { attachHoverEvent };
})();

// global
let cards = document.getElementsByClassName("projects-item");
card.onHover(cards);