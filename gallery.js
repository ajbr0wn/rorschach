document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.getAttribute('data-post');
        document.querySelectorAll('.post').forEach(p => {
            p.classList.remove('active');
        });
        document.getElementById(target).classList.add('active');
    });
});
