
function Locale() {
    this.phrases = null;
}

Locale.prototype.loadStatic = function () {
    this.loadPhrasesJson(phrasesJson);
};

Locale.prototype.loadPhrasesJson = function (phrasesJson) {
    this.phrases = JSON.parse(phrasesJson);

    return this;
};

Locale.prototype.getPhrasesFromApi = function (keys, callback) {

    var $this = this;

    api.postJson("phrases", {'keys': keys}, function (response) {
        $this.phrases = response.data;

        callback();
    }, function(){}, 'languages/api/');
};

Locale.prototype.translate = function (key) {
    return this.phrases[key];
};

Locale.prototype.__ = function (key) {
    return this.translate(key);
};