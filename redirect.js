let spr = new URLSearchParams(location.search);
if (spr.has('url')) {
    let urldata = spr.get('url');
    if (urldata.startsWith('aHR0cHM6Ly') || urldata.startsWith('aHR0cDovL')) {
        let urldc = atob(urldata);
        window.location = urldc;
    } else {
        window.location = `${location.protocol}//${location.host}/`
    }
}