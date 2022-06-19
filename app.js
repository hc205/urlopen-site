var input = document.querySelector('#floatingUrl');
var form = document.querySelector('#urlForm');
var popup = document.querySelector('#popup');
var output = document.querySelector('#urlResult');
var ogUrl = document.querySelector('#urlOg');
var xmark = document.querySelector('#xmark');
var copy = document.querySelector('#copy');
var copySp = document.querySelector('#copy span');
var copySvg = document.querySelector('#copy svg');
var favicon = document.querySelector('#favicon');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    favicon.href = 'favicon-dark.png';
}

form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopImmediatePropagation()
    }

    form.classList.add('was-validated')
}, false);

form.addEventListener('submit', runEncoder);

xmark.addEventListener('click', function () {
    popup.style.display = 'none';
});

copy.addEventListener('click', function () {
    navigator.clipboard.writeText(output.value);
    copy.disabled = true;
    copySp.innerText = "Copied!";
    copy.classList.toggle('btn-primary');
    copy.classList.toggle('btn-success');
    setTimeout(function () {
        copy.disabled = false;
        copySp.innerText = "Copy to Clipboard";
        copy.classList.toggle('btn-primary');
        copy.classList.toggle('btn-success');
    }, 2000);
});

function runEncoder(e) {
    e.preventDefault();
    input.blur();
    var opt = btoa(input.value);
    while (opt.endsWith('=')) {
        opt = opt.slice(0, -1);
    }
    output.value = `${location.protocol}//${location.host}/?url=${opt}`;
    ogUrl.value = input.value;
    form.classList.remove('was-validated');
    input.value = null;
    popup.style.display = 'block';
    output.style.height = "36px";
    output.style.height = output.scrollHeight + "px";
    ogUrl.style.height = "36px";
    ogUrl.style.height = ogUrl.scrollHeight + "px";
}