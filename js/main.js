$(function () {
    'use strict';

    var $cityPicker = $('#city-picker3');
    var $output = $('#selected-data');
    var $actions = $('#reset, #get-data, #destroy');

    function renderSelectedData() {
        $output.text(JSON.stringify($cityPicker.citypicker('getData'), null, 2));
    }

    $('#reset').on('click', function () {
        $cityPicker.citypicker('reset');
        renderSelectedData();
    });

    $('#get-data').on('click', renderSelectedData);

    $('#destroy').on('click', function () {
        $cityPicker.citypicker('destroy');
        $actions.prop('disabled', true);
        $output.text('The CityPicker instance has been destroyed. Reload the demo to initialize it again.\nCityPicker 实例已销毁，请刷新页面重新初始化。');
    });

    renderSelectedData();
});
