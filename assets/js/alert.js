module.exports = function ($) {
    $(document).ready(function () {
        $('.alert').each(function () {
            let message = $(this).data('alert-message');
            let type    = $(this).data('alert-type');
            let icon;
            let thus    = $(this);

            switch (type) {
                case 'success':
                    icon = 'done';
                    break;
                case 'danger':
                    icon = 'close';
                    break;
                case 'warning':
                    icon = 'warning';
                    break;
            }
            Materialize.toast(`<i class="material-icons left">${icon}</i> ${message}`, 10000, type, function () {
                thus.remove();
            });
        });
    })
};