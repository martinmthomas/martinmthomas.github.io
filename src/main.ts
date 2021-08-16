
class Profile {
    navHeight = 108.5;
    numOfChaptersDisplayed = 5;

    init() {

        this.showNav();

        // Registers Click Handlers for each chapters
        const elements = document.getElementsByClassName('chapter-nav');
        for (let i = 0; i < elements.length; i++) {
            const selectedChapterName = elements[i].id;
            elements[i].addEventListener('click', () => this.showChapter(selectedChapterName));
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
    }

    showNav() {
        let navsTemplate: string[] = [];

        for (let chapterDetail of Chapters.items) {
            const chapter = chapterDetail as any;
            let navTemplate = Templates.defaultNavTemplate;

            if (chapterDetail.type === 'Experience') {
                navTemplate = Templates.experienceNavTemplate;
            }

            Object.keys(chapter).forEach(prop => {
                const val = chapter[prop];
                navTemplate = this.replace(navTemplate, prop, val);
            });

            navsTemplate.push(navTemplate);
        }

        let nav = document.getElementById('chapter-navs');
        nav!.innerHTML = navsTemplate.join('');
    }

    addClickHandler(elementId: string, func: any) {
        const element = document.getElementById(elementId);
        element!.addEventListener('click', func.bind(this));
    }

    scrollDown() {
        const currentValue = this.getCurrentScrollPos();
        const newPos = currentValue - this.navHeight;
        this.setCurrentScrollPos(newPos);
    }

    scrollUp() {
        const currentValue = this.getCurrentScrollPos();
        const newPos = currentValue + this.navHeight;
        this.setCurrentScrollPos(newPos);
    }

    getCurrentScrollPos() {
        return parseFloat(
            window.getComputedStyle(document.documentElement)
                .getPropertyValue('--nav-translate')
                .split('px')[0]
        );
    }

    setCurrentScrollPos(value: number) {
        const lastPosAllowed = (Chapters.items.length - this.numOfChaptersDisplayed) * (-1) * this.navHeight;
        if (value >= 0) {
            value = 0;
            this.disableBtn('scroll_up');
        } else if (value <= lastPosAllowed) {
            value = lastPosAllowed;
            this.disableBtn('scroll_down');
        } else {
            this.enableScrollBtns();
        }

        this.playSound('film_rolling');
        document.documentElement.style.setProperty('--nav-translate', `${value}px`);
    }

    disableBtn(id: string) {
        document.getElementById(id)!.classList.add('disabled');
    }

    enableScrollBtns() {
        document.getElementById('scroll_up')!.classList.remove('disabled');
        document.getElementById('scroll_down')!.classList.remove('disabled');
    }

    toggleSpeaker() {
        this.playSound('unmute_audio', true);

        const speakerClose = document.getElementById('speaker-close')!;
        if (speakerClose.style.display === 'none') {
            speakerClose.style.display = 'inline-block';
            localStorage.setItem('speakerMute', 'true');
        } else {
            speakerClose.style.display = 'none';
            localStorage.setItem('speakerMute', 'false');
        }
    }

    isMute() {
        const speakerMute = localStorage.getItem('speakerMute');
        return speakerMute === 'true';
    }

    playSound(id: string, playAlways = false) {
        if (playAlways || !this.isMute()) {
            const audioElement = document.getElementById(id) as any;
            if (audioElement) {
                audioElement.volume = 0.2;
                audioElement.play()
            };
        }
    }

    showChapter(selectedChapterName: any, isInit = false) {
        // when page is loading first time, do not play the sound.
        if (!isInit) {
            this.playSound('click_audio');
        }

        const chapter = Chapters.items.filter(c => c.id === selectedChapterName)[0];
        if (chapter.type === 'Experience') {
            this.showExperienceChapter(chapter as ExperienceChapter);
        } else if (chapter.type === 'Intro') {
            this.showIntroChapter(chapter as IntroChapter);
        } else if (chapter.type === 'Skills') {
            this.showSkillsChapter(chapter as SkillsChapter);
        } else if (chapter.type === 'Credits') {
            this.showCreditsChapter(chapter as CreditsChapter);
        }

        // Sets the class 'selected' on the current nav item.
        const navItems = document.getElementsByClassName('chapter-nav') as any;
        for (let item of navItems) {
            item.classList.remove('selected');
        }
        document.getElementById(selectedChapterName)?.classList.add('selected');
    }

    showIntroChapter(chapter: IntroChapter) {
        let updatedTemplate = Templates.introTemplate;

        updatedTemplate = this.replaceWithInstanceProps(updatedTemplate, chapter);

        updatedTemplate = this.replaceList(updatedTemplate, '{educationTemplate}', Templates.educationTemplate, 'education', chapter.education, (val: any) => val);

        updatedTemplate = this.replaceList(updatedTemplate, '{certificationTemplate}', Templates.certificationTemplate, '', chapter.certifications, (val: any) => val);

        this.loadTemplate(updatedTemplate);
    }

    showSkillsChapter(chapter: SkillsChapter) {
        let updatedTemplate = Templates.skillsSummaryTemplate;

        updatedTemplate = this.replaceWithInstanceProps(updatedTemplate, chapter);

        updatedTemplate = this.replaceList(updatedTemplate, '{skillSummaryTemplate}', Templates.skillSummaryTemplate, '', chapter.skills, (val: any) => val);

        this.loadTemplate(updatedTemplate);
    }

    showExperienceChapter(chapter: ExperienceChapter) {

        let updatedTemplate = Templates.chapterDetailsTemplate;

        updatedTemplate = this.replaceWithInstanceProps(updatedTemplate, chapter);

        updatedTemplate = this.replaceList(updatedTemplate, '{skillTemplate}', Templates.skillTemplate, 'skillId', chapter.skills, (skill: any) => skill);

        updatedTemplate = this.replaceList(updatedTemplate, '{responsibilityTemplate}', Templates.responsibilityTemplate, 'responsibility', chapter.responsibilities, (val: any) => val);

        updatedTemplate = this.replaceList(updatedTemplate, '{achievementTemplate}', Templates.achievementTemplate, 'achievement', chapter.achievements, (val: any) => val);

        this.loadTemplate(updatedTemplate);

        // Hides achievements section if there are none.
        if (!chapter.achievements || chapter.achievements.length <= 0) {
            const header = document.getElementById('achievements-header');
            header!.style.display = 'none';
        }
    }

    showCreditsChapter(chapter: CreditsChapter) {
        let updatedTemplate = Templates.creditsTemplate;

        updatedTemplate = this.replaceWithInstanceProps(updatedTemplate, chapter);
        updatedTemplate = this.replaceList(updatedTemplate, '{creditTemplate}', Templates.creditTemplate, 'credit', chapter.credits, (val) => val);

        this.loadTemplate(updatedTemplate);
    }

    // Loads template in the html document
    loadTemplate(template: string) {
        let main = document.getElementById('main');
        main!.innerHTML = template;
    }

    // Replaces all simple properties in a template with the values found 
    // in the instance for matching properties.
    replaceWithInstanceProps(template: string, instance: any) {
        let updatedTemplate = template;

        Object.keys(instance).forEach(prop => {
            const val = (instance as any)[prop];
            updatedTemplate = this.replace(updatedTemplate, prop, val);
        });

        return updatedTemplate;
    }

    replaceList(mainTemplate: string, listTemplateId: string, listTemplate: string, propName: string, items: any[], getValue: (key: string) => string) {
        const list: string[] = [];
        items.forEach((key) => {
            let listItem = '';
            const value = getValue(key);

            if (typeof value === 'object') {
                listItem = this.replaceWithInstanceProps(listTemplate, value);
            } else {
                listItem = this.replace(listTemplate, propName, value);
            }

            list.push(listItem);
        });
        const tempParts = mainTemplate.split(listTemplateId);
        tempParts.splice(1, 0, ...list);
        return tempParts.join('');
    }

    replace(template: string, propName: string, value: string) {
        return template.replace(`{${propName}}`, value);
    }
}

new Profile().init();