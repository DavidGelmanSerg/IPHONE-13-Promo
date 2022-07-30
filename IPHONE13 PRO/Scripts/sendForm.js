const sendForm = () => {
    const btnOpenModal = document.querySelector('.card-details__button_delivery')//кнопка открытия окна
    const carDetailsTitle = document.querySelector('.card-details__title')//получаем название сифона
    const modal = document.querySelector('.modal')//получаем само окно
    const ModalTitle = modal.querySelector('.modal__title')//получаем название сифона в окне
    const modalClose = modal.querySelector('.modal__close')//кнопка закрытия окна
    const modalForm = modal.querySelector('form')//выбираем форму в окне

    btnOpenModal.addEventListener('click', () => {
        modal.style.display = "flex"//делаем окно видимым
        ModalTitle.textContent = carDetailsTitle.textContent//меняем название на название сифона
    })


    modalClose.addEventListener('click', () => {
        modal.style.display = 'none'//закрытие окна
    })

    modalForm.addEventListener('submit', (event) => {
        event.preventDefault()//делаем так, чтобы страница при нажатии кнопки не перезагружалась

        const labels = modal.querySelectorAll('.modal__label')//получаем все поля ввода
        const sendMessage = {}//создаем массив, куда у нас запишется строка для отправки формы
        labels.forEach(label => {
            const span = label.querySelector('span')//получаем название каждого поля ввода
            const input = label.querySelector('input')//получаем строку ввода
            sendMessage[span.textContent] = input.value//записываем в массив объект в виде "Название формы: значение поля ввода"
        })
        //отправка формы на сервер
        fetch('https://jsonplaceholder.typicode.com/posts', {   //отправляем форму на сервер
            method: 'POST',
            body: JSON.stringify(sendMessage),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(() => {
                console.log('Отправлено');//выводим сообщение об успешной отправке
                modal.style.display = 'none'//закрываем окно
                labels.forEach(label => {
                    const input = label.querySelector('input')//получаем поле ввода
                    input.value = ''//убираем значение
                })
            })
    })
}

sendForm()