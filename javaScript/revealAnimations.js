

function revealEaseInOut(className)
{
    ScrollReveal({
        reset: true,
        origin: 'top',
        delay: 3,
        duration: 400,
        distance: '100px',
        scale: 1,
        easing: 'ease-in-out'
        });
    ScrollReveal().reveal(className);
}

function revealBezier(className)
{
    ScrollReveal({
        reset: true,
        origin: 'bottom',
        delay: 3,
        duration: 800,
        distance: '65px',
        scale: 0.85,
        easing: 'cubic-bezier(0.5, 0, 0, 1)'
        });
    ScrollReveal().reveal(className);
}