(() => {
    const hotKey = 'f';
    if(!document.querySelector('html').getAttribute('isListening'))
    {
        document.querySelector('html').setAttribute('isListening', true);
        window.addEventListener('keyup', e => {
            if(e.key.toLowerCase() == hotKey && e.ctrlKey && e.shiftKey && document.getSelection().toString().trim().length > 0)
            {
                const websiteLanguage = document.querySelector('html').getAttribute('lang') ? 
                    document.querySelector('html').getAttribute('lang') : 
                    'en';
                const currentSelect = !websiteLanguage.includes('pl') ? 
                    document.getSelection().toString().trim() :
                    document.getSelection().toString().trim().split(' ')[0];
                const querySite = websiteLanguage.includes('pl') ? 
                    `https://sjp.pl/${currentSelect}`: 
                    `https://translate.google.pl/#view=home&op=translate&sl=auto&tl=pl&text=${currentSelect}`;
                window.open(querySite, '_blank');
            }
        });
    }
})();