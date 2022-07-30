const accordeon = () => {
    const chItem = document.querySelectorAll('.characteristics__item')//выбираем раздел характеристики
    let openedItem = -1;

    chItem.forEach((item, index) => {
        const chButton = item.querySelector('.characteristics__title')//ВЫБИРАЕМ КНОПКУ
        const chContent = item.querySelector('.characteristics__description')//ВЫБИРАЕМ СКРЫТЫЙ КОНТЕНТ
        chButton.addEventListener('click', () => {          //ОБРАБОТЧИК СОБЫТИЯ "КЛИК"
            if (openedItem > -1 && openedItem !== index) {
                chItem[openedItem].querySelector(".characteristics__title").classList.remove("active");
                chItem[openedItem].querySelector(".characteristics__description").classList.remove("open");
                chItem[openedItem].querySelector(".characteristics__description").style.height = ""
            }
            if (chContent.classList.contains('open')) {
                chContent.style.height = ''//ЗАКРЫТИЕ КОНТЕНТА
            }
            else {
                chContent.style.height = chContent.scrollHeight + 'px'//ВЫВОД СКРЫТОГО КОНТЕНТA 
            }
            chButton.classList.toggle('active')
            chContent.classList.toggle('open')
            openedItem = index
        })
    })
}

accordeon()