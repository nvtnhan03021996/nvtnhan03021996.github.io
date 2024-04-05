document.addEventListener("DOMContentLoaded", function () {
    // Lấy tất cả các input checkbox và radio
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    var submitButton = document.querySelector('#ketquasangloc');

    // Bắt sự kiện thay đổi cho từng checkbox và radio
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', evaluateRisk);
    });

    radioButtons.forEach(function (radio) {
        radio.addEventListener('change', evaluateRisk);
    });

     var submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', showResult);

    function evaluateRisk() {
        var highRiskBehaviors = [
            '1.7', '2.1', '3.9', '4.1', '5.2'
        ];

        // Kiểm tra nếu có ít nhất một hành vi nguy cơ
        var hasHighRisk = false;
        for (var i = 0; i < highRiskBehaviors.length; i++) {
            var element = document.getElementById(highRiskBehaviors[i]);
            if (element && element.checked) {
                hasHighRisk = true;
                break;
            }
        }

        // Hiển thị kết quả dựa trên có hay không có hành vi nguy cơ
        var resultMessage = document.getElementById("resultMessage");
        if (hasHighRisk) {
            resultMessage.textContent = "Không cần xét nghiệm sàng lọc HIV";
        } else {
            resultMessage.textContent = "Bạn cần xét nghiệm sàng lọc HIV";
        }
    }

    function showResult() {
        var resultMessage = document.getElementById("resultMessage");
        alert(resultMessage.textContent);
    }
});
