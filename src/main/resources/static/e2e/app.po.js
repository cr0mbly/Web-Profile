"use strict";
var protractor_1 = require('protractor');
var AngularGetTestPage = (function () {
    function AngularGetTestPage() {
    }
    AngularGetTestPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    AngularGetTestPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return AngularGetTestPage;
}());
exports.AngularGetTestPage = AngularGetTestPage;
//# sourceMappingURL=app.po.js.map