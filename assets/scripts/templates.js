"use strict";
var Templates = /** @class */ (function () {
    function Templates() {
    }
    Templates.experienceNavTemplate = "\n    <div class=\"chapter-nav\" id=\"{id}\">\n        <div class=\"company\">\n            <img src=\"{logoUrl}\" alt=\"Company Logo\" class=\"logo\">\n            <span class=\"name\">{companyShort}</span>\n        </div>\n        <div class=\"role\">{roleShort}</div>\n    </div>";
    Templates.defaultNavTemplate = "\n    <div class=\"chapter-nav default\" id=\"{id}\">\n        {type}\n    </div>\n    ";
    Templates.chapterNavsTemplate = "\n    <div>{chapterNavTemplate}</div>\n    ";
    Templates.skillTemplate = "<span class=\"logo {skillId}-logo\"></span>";
    Templates.responsibilityTemplate = "<li>{responsibility}</li>";
    Templates.achievementTemplate = "<li>{achievement}</li>";
    Templates.educationTemplate = "<li>{education}</li>";
    Templates.creditTemplate = "<li>{credit}</li>";
    Templates.certificationTemplate = "\n    <li>\n        <a href=\"{externalLink}\" class=\"cert-link\" target=\"_blank\"><span class=\"cert-name\">{name}</span></a>\n        <span class=\"cert-since\"><em>{validSince}</em></span>\n    </li>";
    Templates.skillSummaryTemplate = "\n    <li>\n        <span class=\"logo {name}-logo\"></span>\n        <span class=\"skill-description\">{description}</span>\n        <span class=\"skill-proficiency\">{proficiency} <em>({years} yrs)</em></span>\n    </li>";
    Templates.introTemplate = "\n    <article class=\"chapter-details\">\n        <h2>Introduction</h2>\n\n        <div class=\"summary\">{summary}</div>\n\n        <h4 class=\"mb-0\">Education</h4>\n        <ul class=\"education mt-0\">{educationTemplate}</ul>\n\n        <h4 class=\"mb-0\">Certifications</h4>\n        <ul class=\"certifications mt-0\">{certificationTemplate}</ul>\n    </article>\n    ";
    Templates.skillsSummaryTemplate = "\n    <article class=\"chapter-details\">\n        <h2>Skills</h2>\n\n        <ul class=\"skills-summary\">{skillSummaryTemplate}</ul>\n    </article>\n    ";
    Templates.creditsTemplate = "\n    <article class=\"chapter-details\">\n        <ul class=\"credits\">{creditTemplate}</ul>\n    </article>\n    ";
    Templates.chapterDetailsTemplate = "\n    <article class=\"chapter-details\">\n            <div class=\"company\">\n                <img src=\"{logoUrl}\" alt=\"Company Logo\" class=\"logo {id}\">\n                <span class=\"name\">{companyName}</span>\n            </div>\n\n            <div class=\"role\">{role}</div>\n\n            <div class=\"year\">\n                <span class=\"year-from\">{yearFrom}</span>\n                -\n                <span class=\"year-to\">{yearTo}</span>\n            </div>\n\n            <div class=\"skills\">{skillTemplate}</div>\n\n            <div class=\"summary\">{summary}</div>\n\n            <h4 class=\"mb-0\">Responsibilities</h4>\n            <ul class=\"responsibilities mt-0\">{responsibilityTemplate}</ul>\n\n            <h4 class=\"mb-0\" id=\"achievements-header\">Achievements</h4>\n            <ul class=\"achievements mt-0\">{achievementTemplate}</ul>\n        </article>\n    ";
    return Templates;
}());
