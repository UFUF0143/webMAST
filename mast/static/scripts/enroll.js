document.addEventListener("DOMContentLoaded", function() {
    let selectedCourseId = null;

    // Открытие модального окна и сохранение выбранного курса
    document.querySelectorAll('.enroll-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectedCourseId = this.dataset.id; // Сохраняем ID выбранного курса
            document.body.style.overflow = 'hidden';
        });
    });

    // Закрытие модального окна
    document.querySelector('[href="#close"]').addEventListener('click', function() {
        document.body.style.overflow = 'visible';
    });

    // Обработка отправки формы
    document.querySelector('.modal form').addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        // Меняем текст ссылки для выбранного курса
        if (selectedCourseId) {
            const courseLink = document.querySelector(`.enroll-btn[data-id="${selectedCourseId}"]`);
            courseLink.textContent = 'Ожидайте подтверждения';
            courseLink.classList.add('disabled'); // Добавляем класс для стилей
            courseLink.removeAttribute('href'); // Убираем ссылку
        }

        // Закрываем модальное окно
        document.querySelector('[href="#close"]').click();
    });
});