console.log("Styles link is working");

newsApp.selectArticlesToStyle = () => {
    $('article:has(h2):has(.preview-text):has(img):has(a)').addClass('full-data-set');

    $('article:not(:has(img))').addClass('no-image');

    $('article:not(:has(h2))').addClass('no-headline');

}