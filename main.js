function updateOutput3() {
    var selectedValue = document.getElementById("derinlik").value;
    var derinlikDeger = document.getElementById("derinlik-deger");
    derinlikDeger.innerHTML = "Seçilen Değer: " + selectedValue;
    document.getElementById('derinlik-info').textContent = selectedValue;
}


function updateOutput(type = false, nightMode = false) {
    var button = document.getElementById('nightmode');
    if (button.innerText === 'Gece Modu' && nightMode == true) {
        nightModeUpdate();
    }
    else {
        var evTipi = document.getElementById('ev-tipi').value;
        var genislik = document.getElementById('genislik').value;
        var derinlik = document.getElementById('derinlik').value;
        var verandaRenk = document.getElementById('veranda-renk').value;
        var ustCamTipi = document.getElementById('ust-cam-tipi').value;
        var onCamPanel = document.getElementById('on-cam-panel').checked ? 1 : 0;
        var yanCam = document.getElementById('yan-cam').checked ? 1 : 0;

        var cikti = "image_" + evTipi.charAt(evTipi.length - 1) + "_" + (genislik - 4) + "_" +
            verandaRenk.charAt(verandaRenk.length - 1) + "_" +
            ustCamTipi.charAt(ustCamTipi.length - 1) + "_" +
            onCamPanel + "_" + yanCam;

        if (type == false) {
            document.getElementById('cikti').innerText = cikti;
            document.getElementById('resim').src = cikti + ".jpg"; // İmage path'i buraya uygun olarak güncellenmeli
            document.getElementById('genislik-deger').textContent = genislik;
        }
        else {
            var ciktiv2 = "image_yakin_" + verandaRenk.charAt(verandaRenk.length - 1) + "_" +
                ustCamTipi.charAt(ustCamTipi.length - 1);

            document.getElementById('cikti').innerText = ciktiv2;
            document.getElementById('resim').src = ciktiv2 + ".jpg"; // İmage path'i buraya uygun olarak güncellenmeli
            document.getElementById('genislik-deger').textContent = genislik;
        }

        var derinlikSelect = document.getElementById("derinlik");

        // Option değerlerini temizle
        derinlikSelect.innerHTML = derinlikSelect.value;

        // Yeni option değerlerini ekle
        if (ustCamTipi === "cam1") {
            addOption(derinlikSelect, "3", "3");
            addOption(derinlikSelect, "4", "4");
            addOption(derinlikSelect, "4.5", "4.5");

        } else {
            addOption(derinlikSelect, "3", "3");
            addOption(derinlikSelect, "4", "4");
            addOption(derinlikSelect, "5", "5");
            addOption(derinlikSelect, "6", "6");
        }

        document.getElementById("derinlik-deger").innerText = "Seçilen Değer: " + derinlikSelect.value;


        function addOption(selectElement, value, text) {
            var option = document.createElement("option");
            option.value = value;
            option.text = text;
            selectElement.add(option);
        }

        document.getElementById('ev-info').textContent = evTipi == 'tek1' ? 'Tek 1' : evTipi == 'çoklu2' ? 'Çoklu 2' : 'Köşe 3';
        document.getElementById('genislik-info').textContent = genislik;
        document.getElementById('veranda-info').textContent = verandaRenk == 'antrasit1' ? 'Antrasit 1' : 'Beyaz 2';
        document.getElementById('ustcam-info').textContent = ustCamTipi == 'cam1' ? 'Cam 1' : ustCamTipi == 'polikarbon-renkli2' ? 'Polikarbon Renkli 2' : 'Polikarbon Şeffaf 3';
        document.getElementById('oncampanel-info').textContent = onCamPanel == 1 ? 'Var' : 'Yok';
        document.getElementById('yancamlar-info').textContent = yanCam == 1 ? 'Var' : 'Yok';
    }

}

function showElement() {
    var information = document.getElementById('information');
    var form = document.getElementById('form');

    information.style.display = 'block';
    form.style.display = 'block';

    form.scrollIntoView({ behavior: "smooth", block: "start" });

}


function toggleMode() {
    var button = document.getElementById('nightmode');
    if (button.innerText === 'Gece Modu') {
        button.innerText = 'Gündüz Modu';
        button.classList.remove('btn-dark');
        button.classList.add('btn-light');
        button.style.setProperty('color', 'black', 'important'); // Change button text color to white in dark mode
        updateOutput();
    } else {
        button.innerText = 'Gece Modu';
        button.classList.remove('btn-light');
        button.classList.add('btn-dark');
        button.style.setProperty('color', 'white', 'important'); // Change button text color to white in dark mode


        nightModeUpdate();
    }
}

function nightModeUpdate() {
    var verandaRenk = document.getElementById('veranda-renk').value;
    var ustCamTipi = document.getElementById('ust-cam-tipi').value;

    var ciktiv2 = "images_gece_" + verandaRenk.charAt(verandaRenk.length - 1) + "_" +
        ustCamTipi.charAt(ustCamTipi.length - 1);

    document.getElementById('cikti').innerText = ciktiv2;
    document.getElementById('resim').src = ciktiv2 + ".jpg"; // İmage path'i buraya uygun olarak güncellenmeli
    document.getElementById('genislik-deger').textContent = genislik;
}


function formSubmit(){
    /// Formun submit olayını dinle
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun varsayılan gönderme işlemini engelle

    // Resmi yükleme ve işlemleri burada gerçekleştir
    loadImageAndSend();
});

}


function loadImageAndSend() {
    // Resmi bir <img> etiketi üzerinden yükle
    var img = new Image();
    img.crossOrigin = 'Anonymous'; // İzin gerektiren bir durumdaysa bu satırı ekleyin
    const resimAdi = document.getElementById('resim').src.split('/').pop(); // resim adını al
    img.src = resimAdi;

    img.onload = function() {
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // Canvas'teki resmi binary veriye dönüştür
        canvas.toBlob(function(blob) {
            // Resmi bir FormData nesnesine ekle
            var formData = new FormData();
            formData.append('image', blob, 'image.jpg'); // blob, dosya adı

            // Diğer bilgileri FormData'ya ekle
            formData.append('ev-info', document.getElementById('ev-info').textContent);
            formData.append('veranda-info', document.getElementById('veranda-info').textContent);
            formData.append('oncampanel-info', document.getElementById('oncampanel-info').textContent);
            formData.append('derinlik-info', document.getElementById('derinlik-info').textContent);
            formData.append('genislik-info', document.getElementById('genislik-info').textContent);
            formData.append('ustcam-info', document.getElementById('ustcam-info').textContent);
            formData.append('yancamlar-info', document.getElementById('yancamlar-info').textContent);

            // Örnek bir HTTP isteği oluştur
            fetch('your-service-url', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                // İşlemleri burada devam ettirin
                console.log('Response:', data);
            })
            .catch(error => {
                console.error('Error:', error);
                // Hata durumunda kullanıcıya bir hata mesajı göster
                alert('Resim gönderilirken bir hata oluştu!');
            });
        }, 'image/jpeg');
    };
}