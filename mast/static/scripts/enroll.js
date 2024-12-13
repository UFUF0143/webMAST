document.addEventListener('DOMContentLoaded', () => {
    const buttonsEnroll = document.querySelectorAll('.btn-enroll');
    const modals = document.querySelectorAll('.modal');
    const forms = document.querySelectorAll('.enroll-form');

    // Открытие модального окна для записи
    buttonsEnroll.forEach(button => {
        button.addEventListener('click', () => {
            const courseId = button.dataset.course;
            const modal = document.getElementById(`modal-enroll-${courseId}`);
            modal.style.display = 'flex'; // Показываем модальное окно
        });
    });

    // Закрытие всех модальных окон
    document.querySelectorAll('.btn-close').forEach(button => {
        button.addEventListener('click', () => {
            modals.forEach(modal => modal.style.display = 'none');
        });
    });

    // Закрытие модального окна при клике на фон
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Отправка формы и переход к следующему окну
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Предотвращаем стандартное поведение формы
            const courseId = form.dataset.course;

            // Закрываем текущее окно
            document.getElementById(`modal-enroll-${courseId}`).style.display = 'none';

            // Показываем окно подтверждения
            const successModal = document.getElementById(`modal-success-${courseId}`);
            successModal.style.display = 'flex';

            // Блокируем кнопку "Записаться"
            const button = document.querySelector(`.btn-enroll[data-course="${courseId}"]`);
            button.textContent = 'Ожидает подтверждения';
            button.disabled = true;
        });
    });
});
