import * as anchors from './Constants/Anchors';
import i18n from '../i18n/i18n';

export const gotoBiography = () => {
    let biography = document.getElementById(anchors.BIOGRAPHY);
    biography?.scrollIntoView({ behavior: "smooth" });
}

export const gotoWork = () => {
    let work = document.getElementById(anchors.WORK);
    work?.scrollIntoView({ behavior: "smooth" });
}

export const gotoEducation = () => {
    let education = document.getElementById(anchors.EDUCATION);
    education?.scrollIntoView({ behavior: "smooth" });
} 

export const gotoLanguages = () => {
    let portfolio = document.getElementById(anchors.LANGUAGES);
    portfolio?.scrollIntoView({ behavior: "smooth" });
}

export const gotoCursos = () => {
    let portfolio = document.getElementById(anchors.CURSOS);
    portfolio?.scrollIntoView({ behavior: "smooth" });
}

export const changeSpanish = () => {
    i18n.changeLanguage('es');
}

export const changeEnglish = () => {
    i18n.changeLanguage('en');
}