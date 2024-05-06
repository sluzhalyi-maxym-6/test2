document.addEventListener('DOMContentLoaded', function() {
    var check = window.innerWidth < 768;
    if (check) {
        alert('Сайт погано оптимізований під цей пристій. Краще відкрий з компа');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var scrollLink = document.getElementById('scrollLink1');
    var targetElement = document.getElementById('new');

    scrollLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var scrollLink = document.getElementById('scrollLink2');
    var targetElement = document.getElementById('about');

    scrollLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var scrollLink = document.getElementById('scrollLink3');
    var targetElement = document.getElementById('coctails');

    scrollLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var targetElement = document.getElementById('main');

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});