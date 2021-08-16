"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var Profile = /** @class */ (function () {
    function Profile() {
        this.navHeight = 108.5;
        this.numOfChaptersDisplayed = 5;
    }
    Profile.prototype.init = function () {
        var _this = this;
        this.showNav();
        // Registers Click Handlers for each chapters
        var elements = document.getElementsByClassName('chapter-nav');
        var _loop_1 = function (i) {
            var selectedChapterName = elements[i].id;
            elements[i].addEventListener('click', function () { return _this.showChapter(selectedChapterName); });
        };
        for (var i = 0; i < elements.length; i++) {
            _loop_1(i);
        }
        // Click handler for toggling speaker
        this.addClickHandler('speaker_btn', this.toggleSpeaker);
        if (this.isMute()) {
            this.toggleSpeaker();
        }
        // Click handler for scroll
        this.addClickHandler('scroll_up', this.scrollUp);
        this.addClickHandler('scroll_down', this.scrollDown);
        // Sets max height of the navigation menu so that only certain number of chapters 
        // are visible by default.
        document.documentElement.style.setProperty('--nav-max-height', (this.navHeight * this.numOfChaptersDisplayed) + 'px');
        // displays a default chapter
        this.showChapter('intro', true);
    };
    Profile.prototype.showNav = function () {
        var _this = this;
        var navsTemplate = [];
        var _loop_2 = function (chapterDetail) {
            var chapter = chapterDetail;
            var navTemplate = Templates.defaultNavTemplate;
            if (chapterDetail.type === 'Experience') {
                navTemplate = Templates.experienceNavTemplate;
            }
            Object.keys(chapter).forEach(function (prop) {
                var val = chapter[prop];
                navTemplate = _this.replace(navTemplate, prop, val);
            });
            navsTemplate.push(navTemplate);
        };
        for (var _i = 0, _a = Chapters.items; _i < _a.length; _i++) {
            var chapterDetail = _a[_i];
            _loop_2(chapterDetail);
        }
        var nav = document.getElementById('chapter-navs');
        nav.innerHTML = navsTemplate.join('');
    };
    Profile.prototype.addClickHandler = function (elementId, func) {
        var element = document.getElementById(elementId);
        element.addEventListener('click', func.bind(this));
    };
    Profile.prototype.scrollDown = function () {
        var currentValue = this.getCurrentScrollPos();
        var newPos = currentValue - this.navHeight;
        this.setCurrentScrollPos(newPos);
    };
    Profile.prototype.scrollUp = function () {
        var currentValue = this.getCurrentScrollPos();
        var newPos = currentValue + this.navHeight;
        this.setCurrentScrollPos(newPos);
    };
    Profile.prototype.getCurrentScrollPos = function () {
        return parseFloat(window.getComputedStyle(document.documentElement)
            .getPropertyValue('--nav-translate')
            .split('px')[0]);
    };
    Profile.prototype.setCurrentScrollPos = function (value) {
        var lastPosAllowed = (Chapters.items.length - this.numOfChaptersDisplayed) * (-1) * this.navHeight;
        if (value >= 0) {
            value = 0;
            this.disableBtn('scroll_up');
        }
        else if (value <= lastPosAllowed) {
            value = lastPosAllowed;
            this.disableBtn('scroll_down');
        }
        else {
            this.enableScrollBtns();
        }
        this.playSound('film_rolling');
        document.documentElement.style.setProperty('--nav-translate', value + "px");
    };
    Profile.prototype.disableBtn = function (id) {
        document.getElementById(id).classList.add('disabled');
    };
    Profile.prototype.enableScrollBtns = function () {
        document.getElementById('scroll_up').classList.remove('disabled');
        document.getElementById('scroll_down').classList.remove('disabled');
    };
    Profile.prototype.toggleSpeaker = function () {
        this.playSound('unmute_audio', true);
        var speakerClose = document.getElementById('speaker-close');
        if (speakerClose.style.display === 'none') {
            speakerClose.style.display = 'inline-block';
            localStorage.setItem('speakerMute', 'true');
        }
        else {
            speakerClose.style.display = 'none';
            localStorage.setItem('speakerMute', 'false');
        }
    };
    Profile.prototype.isMute = function () {
        var speakerMute = localStorage.getItem('speakerMute');
        return speakerMute === 'true';
    };
    Profile.prototype.playSound = function (id, playAlways) {
        if (playAlways === void 0) { playAlways = false; }
        if (playAlways || !this.isMute()) {
            var audioElement = document.getElementById(id);
            if (audioElement) {
                audioElement.volume = 0.2;
                audioElement.play();
            }
            ;
        }
    };
    Profile.prototype.showChapter = function (selectedChapterName, isInit) {
        var _a;
        if (isInit === void 0) { isInit = false; }
        // when page is loading first time, do not play the sound.
        if (!isInit) {
            this.playSound('click_audio');
        }
        var chapter = Chapters.items.filter(function (c) { return c.id === selectedChapterName; })[0];
        if (chapter.type === 'Experience') {
            this.showExperienceChapter(chapter);
        }
        else if (chapter.type === 'Intro') {
            this.showIntroChapter(chapter);
        }
        else if (chapter.type === 'Skills') {
            this.showSkillsChapter(chapter);
        }
        else if (chapter.type === 'Credits') {
            this.showCreditsChapter(chapter);
        }
        // Sets the class 'selected' on the current nav item.
        var navItems = document.getElementsByClassName('chapter-nav');
        for (var _i = 0, navItems_1 = navItems; _i < navItems_1.length; _i++) {
            var item = navItems_1[_i];
            item.classList.remove('selected');
        }
        (_a = document.getElementById(selectedChapterName)) === null || _a === void 0 ? void 0 : _a.classList.add('selected');
    };
    Profile.prototype.showIntroChapter = function (chapter) {
        var updatedTemplate = Templates.introTemplate;
        updatedTemplate = this.replaceWithInstanceProps(updatedTemplate, chapter);
        updatedTemplate = this.replaceList(updatedTemplate, '{educationTemplate}', Templates.educationTemplate, 'education', chapter.education, function (val) { return val; });
        updatedTemplate = this.replaceList(updatedTemplate, '{certificationTemplate}', Templates.certificationTemplate, '', chapter.certifications, function (val) { return val; });
        this.loadTemplate(updatedTemplate);
    };
    Profile.prototype.showSkillsChapter = function (chapter) {
        var updatedTemplate = Templates.skillsSummaryTemplate;
        updatedTemplate = this.replaceWithInstanceProps(updatedTemplate, chapter);
        updatedTemplate = this.replaceList(updatedTemplate, '{skillSummaryTemplate}', Templates.skillSummaryTemplate, '', chapter.skills, function (val) { return val; });
        this.loadTemplate(updatedTemplate);
    };
    Profile.prototype.showExperienceChapter = function (chapter) {
        var updatedTemplate = Templates.chapterDetailsTemplate;
        updatedTemplate = this.replaceWithInstanceProps(updatedTemplate, chapter);
        updatedTemplate = this.replaceList(updatedTemplate, '{skillTemplate}', Templates.skillTemplate, 'skillId', chapter.skills, function (skill) { return skill; });
        updatedTemplate = this.replaceList(updatedTemplate, '{responsibilityTemplate}', Templates.responsibilityTemplate, 'responsibility', chapter.responsibilities, function (val) { return val; });
        updatedTemplate = this.replaceList(updatedTemplate, '{achievementTemplate}', Templates.achievementTemplate, 'achievement', chapter.achievements, function (val) { return val; });
        this.loadTemplate(updatedTemplate);
        // Hides achievements section if there are none.
        if (!chapter.achievements || chapter.achievements.length <= 0) {
            var header = document.getElementById('achievements-header');
            header.style.display = 'none';
        }
    };
    Profile.prototype.showCreditsChapter = function (chapter) {
        var updatedTemplate = Templates.creditsTemplate;
        updatedTemplate = this.replaceWithInstanceProps(updatedTemplate, chapter);
        updatedTemplate = this.replaceList(updatedTemplate, '{creditTemplate}', Templates.creditTemplate, 'credit', chapter.credits, function (val) { return val; });
        this.loadTemplate(updatedTemplate);
    };
    // Loads template in the html document
    Profile.prototype.loadTemplate = function (template) {
        var main = document.getElementById('main');
        main.innerHTML = template;
    };
    // Replaces all simple properties in a template with the values found 
    // in the instance for matching properties.
    Profile.prototype.replaceWithInstanceProps = function (template, instance) {
        var _this = this;
        var updatedTemplate = template;
        Object.keys(instance).forEach(function (prop) {
            var val = instance[prop];
            updatedTemplate = _this.replace(updatedTemplate, prop, val);
        });
        return updatedTemplate;
    };
    Profile.prototype.replaceList = function (mainTemplate, listTemplateId, listTemplate, propName, items, getValue) {
        var _this = this;
        var list = [];
        items.forEach(function (key) {
            var listItem = '';
            var value = getValue(key);
            if (typeof value === 'object') {
                listItem = _this.replaceWithInstanceProps(listTemplate, value);
            }
            else {
                listItem = _this.replace(listTemplate, propName, value);
            }
            list.push(listItem);
        });
        var tempParts = mainTemplate.split(listTemplateId);
        tempParts.splice.apply(tempParts, __spreadArray([1, 0], list));
        return tempParts.join('');
    };
    Profile.prototype.replace = function (template, propName, value) {
        return template.replace("{" + propName + "}", value);
    };
    return Profile;
}());
new Profile().init();
