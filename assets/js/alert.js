const $ = require('jquery');

module.exports =
    $(document).ready(function () {
        $('.alert').each(function () {
            let message = $(this).data('alert-message');
            let icon;
            let color;

            switch ($(this).data('alert-type')) {
                case 'success':
                    color = 'green';
                    icon  = 'done';
                    break;
                case 'danger':
                    color = 'red';
                    icon  = 'report_problem';
                    break;
            }
            Materialize.toast(`<i class="material-icons left">${icon}</i> ${message}`, 10000, color);
        });
    });