Reveal.addEventListener('fragmentshown', function (event) {
    if (event.fragment.classList.contains('show_back')) {
        document.querySelector('#background').style.display = 'block';
    }
});

Reveal.addEventListener('clear', function (event) {
    document.querySelector('#background').style.display = 'none';
});