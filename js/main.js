
let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        const mode = this.dataset.mode;
        console.log('Option Clicked' + mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = '/css/style.css'
    }
    if (mode == 'blue') {
        document.getElementById('theme-style').href = '/css/blue.css'
    }
    if (mode == 'green') {
        document.getElementById('theme-style').href = '/css/green.css'
    }
    if (mode == 'purple') {
        document.getElementById('theme-style').href = '/css/purple.css'
    }
    localStorage.setItem('theme', mode);
}






jQuery(document).ready(function () {
    jQuery('.skillbar').each(function () {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 6000);
    });
});

jQuery('.Count').each(function () {
    var $this = $(this);
    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 6000,
        easing: 'swing',
        step: function () {
            $this.text(Math.ceil(this.Counter));
        }
    });
});