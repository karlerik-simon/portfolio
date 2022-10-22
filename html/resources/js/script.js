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

    function onHover(cards)
    {
        [...cards].forEach(card => card.addEventListener("mouseover", function(){ cardHover(card); }));
        [...cards].forEach(card => card.addEventListener("mouseleave", function(){ cardRemoveHover(card); }))
    }

    return { onHover };
})();

// global
let cards = document.getElementsByClassName("projects-item");
card.onHover(cards);