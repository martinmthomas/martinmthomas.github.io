class Templates {
    static readonly experienceNavTemplate = `
    <div class="chapter-nav" id="{id}">
        <div class="company">
            <img src="{logoUrl}" alt="Company Logo" class="logo">
            <span class="name">{companyShort}</span>
        </div>
        <div class="role">{roleShort}</div>
    </div>`;

    static readonly defaultNavTemplate = `
    <div class="chapter-nav default" id="{id}">
        {type}
    </div>
    `;

    static readonly chapterNavsTemplate = `
    <div>{chapterNavTemplate}</div>
    `;

    static readonly skillTemplate = `<span class="logo {skillId}-logo"></span>`

    static readonly responsibilityTemplate = `<li>{responsibility}</li>`

    static readonly achievementTemplate = `<li>{achievement}</li>`

    static readonly educationTemplate = `<li>{education}</li>`

    static readonly creditTemplate = `<li>{credit}</li>`

    static readonly certificationTemplate = `
    <li>
        <a href="{externalLink}" class="cert-link" target="_blank"><span class="cert-name">{name}</span></a>
        <span class="cert-since"><em>{validSince}</em></span>
    </li>`;

    static readonly skillSummaryTemplate = `
    <li>
        <span class="logo {name}-logo"></span>
        <span class="skill-description">{description}</span>
        <span class="skill-proficiency">{proficiency} <em>({years} yrs)</em></span>
    </li>`;

    static readonly introTemplate = `
    <article class="chapter-details">
        <h2>Introduction</h2>

        <div class="summary">{summary}</div>

        <h4 class="mb-0">Education</h4>
        <ul class="education mt-0">{educationTemplate}</ul>

        <h4 class="mb-0">Certifications</h4>
        <ul class="certifications mt-0">{certificationTemplate}</ul>
    </article>
    `;

    static readonly skillsSummaryTemplate = `
    <article class="chapter-details">
        <h2>Skills</h2>

        <ul class="skills-summary">{skillSummaryTemplate}</ul>
    </article>
    `;

    static readonly creditsTemplate = `
    <article class="chapter-details">
        <ul class="credits">{creditTemplate}</ul>
    </article>
    `
    
    static readonly chapterDetailsTemplate = `
    <article class="chapter-details">
            <div class="company">
                <img src="{logoUrl}" alt="Company Logo" class="logo {id}">
                <span class="name">{companyName}</span>
            </div>

            <div class="role">{role}</div>

            <div class="year">
                <span class="year-from">{yearFrom}</span>
                -
                <span class="year-to">{yearTo}</span>
            </div>

            <div class="skills">{skillTemplate}</div>

            <div class="summary">{summary}</div>

            <h4 class="mb-0">Responsibilities</h4>
            <ul class="responsibilities mt-0">{responsibilityTemplate}</ul>

            <h4 class="mb-0" id="achievements-header">Achievements</h4>
            <ul class="achievements mt-0">{achievementTemplate}</ul>
        </article>
    `;
}