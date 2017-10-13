var addcookie = function (name, value, expiredays, path, domain) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = name + "=" + escape(value)
        + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()) + (path ? ";path=" + path : "")
        + (domain ? ";domain=" + domain : "")
}
addcookie('extjs_theme', 'neptune-black')