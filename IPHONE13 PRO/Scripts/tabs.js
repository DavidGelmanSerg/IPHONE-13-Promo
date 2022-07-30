const tabsFunc = () => {
    const tabs = document.querySelectorAll('.card-detail__change') //вборка всех табов
    const tabsTitle = document.querySelector('.card-details__title')//выборка только названия телефона
    const tabsPrice = document.querySelector('.card-details__price')//выборка цены
    const tabsImage = document.querySelector('.card__image_item')
    const tabs_nameOfPhone = document.querySelector('#nameOfPhone')

    const tabOptions = [
        {
            name: "Graphite",
            memory: "128",
            price: 60000,
            image: 'img/iPhone-graphite.webp'
        },                                  //массив с данными об объектах
        {
            name: "Silver",
            memory: "256",
            price: 65000,
            image: 'img/iPhone-silver.webp'
        },
        {
            name: "Sierra Blue",
            memory: "512",
            price: 70000,
            image: 'img/iPhone-sierra_blue.webp'
        }
    ]
    //---------------------------------------------------------------------------
    const changeContent = (index) => {                                      //функция изменения значений
        //console.log(tabOptions[index].name);
        tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabOptions[index].memory}GB ${tabOptions[index].name}`
        tabsPrice.textContent = `${tabOptions[index].price}₽`
        tabsImage.setAttribute('src', tabOptions[index].image)
        tabs_nameOfPhone.textContent = `${tabOptions[index].name}`
    }
    //---------------------------------------------------------------------------
    //функция работы с контентом
    const change_Active_tabs = (index_click) => {
        tabs.forEach((tab, index) => {               //функция изменения класса табов
            tab.classList.remove('active')  //очищение класса active у всех табов

            if (index === index_click) {
                tab.classList.add('active') //присвоение класса active кликнотому табу
            }
        })

        changeContent(index_click) //изменение значений контента
    }
    //-------------------------------------------------------------------------------
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {               //обработка события клик мышкой
            change_Active_tabs(index) //вызов функции изменения табов
        })
    })
    changeContent(0)
}
tabsFunc()