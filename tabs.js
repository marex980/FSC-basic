
/*       JS for TABS       */


const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('mouseover', changeTabPanel);
});


let tabFocus = 0;

function changeTabFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;
    
    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
        
        if (e.keyCode === keydownRight) {
            tabFocus++;
            if (tabFocus >= tabs.length) {
                tabFocus = 0;
            }
        } else if (e.keyCode === keydownLeft) {
            tabFocus--;
            if (tabFocus < 0) {
                tabFocus = tabs.length - 1;
            }
        }
        
        tabs[tabFocus].setAttribute("tabindex", 0);
        tabs[tabFocus].focus();
    }
}


function changeTabPanel(e) {
    const targetTab = e.currentTarget;
    const targetPanel = targetTab.getAttribute("aria-controls");
    
    const tabContainer = targetTab.parentNode;
    const navContainer = tabContainer.parentNode;
    const sectionContainer = navContainer.parentNode;
    const mainContainer = sectionContainer.parentNode;
    
        tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);
        
    targetTab.setAttribute("aria-selected", true);
    
   mainContainer
        .querySelectorAll('[role="tabpanel"]')
       .forEach((panel) => panel.setAttribute("hidden", true));
    
    mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');
    
    
   // console.log(sectionContainer.className);
}


