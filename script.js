const getDrawerbtnElement = document.getElementById('drawer-btn');
const getMobiledrawerElement = document.getElementById('mobile-drawer');
const getMainElement = document.querySelector('.hidden');

function openMobiledrawerList() {
    getMobiledrawerElement.classList.toggle('open');
    getMainElement.classList.toggle('open');
    getDrawerbtnElement.classList.toggle('open');
}

getDrawerbtnElement.addEventListener('click', openMobiledrawerList);

function setDownloadLink(language) {
    const downloadLink = document.getElementById("download-link");
    if (!downloadLink) return;
    if (language === "de") {
      downloadLink.href = "./assets/Lebenslauf-Yu_Chen.pdf"; 
    } else {
      downloadLink.href = "./assets/resume.pdf"; 
    }
  }

async function fetchLanguageData(lang) {
    try {
        const response = await fetch(`assets/${lang}.json`);
        if (!response.ok) throw new Error(`Failed to load ${lang}.json`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching language data:", error);
        return null;
    }
}

function getNestedValue(obj, key) {
    return key.split('.').reduce((o, i) => o?.[i], obj);
}

function updateContent(langData) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        const value = getNestedValue(langData, key);
        if (value !== undefined) {
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                element.setAttribute("placeholder", value);
            } else {
                element.innerHTML = value;
            }
        }
        else console.warn(`Missing translation for: ${key}`);
    });
}

function updateLanguageButtons(selectedLang) {
    document.querySelectorAll("[data-lang]").forEach((button) => {
        if (button.getAttribute("data-lang") === selectedLang) {
            button.classList.remove("visible"); 
            button.classList.add("hidden"); 
        } else {
            button.classList.add("visible"); 
            button.classList.remove("hidden");
        }
    });
}

async function changeLanguage(lang) {
    localStorage.setItem("language", lang);
    const langData = await fetchLanguageData(lang);
    if (langData) {
        updateContent(langData);
        updateLanguageButtons(lang);
        setDownloadLink(lang);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const lang = localStorage.getItem("language") || "de";
    setDownloadLink(lang);
    const langData = await fetchLanguageData(lang);
    if (langData) updateContent(langData);
    updateLanguageButtons(lang);
    document.querySelector(".fixed-top").classList.add("loaded");
    document.querySelectorAll("[data-lang]").forEach(button => {
        button.addEventListener("click", () => changeLanguage(button.getAttribute("data-lang")));
    });
});
