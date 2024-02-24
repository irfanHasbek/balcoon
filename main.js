function calculateVerandaWidth(verandaElem) {
    var width = parseInt(verandaElem.value);

    switch (width) {
        case 3:
            return 9;
        case 4:
            return 10;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            return width - 4;
        default:
            return 1;
    }
}

function getVerandaColor(verandaElem) {
    var verandaColorVal = verandaElem.value;

    if (verandaColorVal == 'antrasit') {
        return 1;
    } else {
        return 2;
    }
}

function getRoofGlassType(verandaElem) {
    var roofGlassType = parseInt(verandaElem.value);

    switch (roofGlassType) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        default:
            return 1;
    }
}

function getFrontGlassType(verandaElem1, verandaElem2, selected) {
    if (selected) {
        verandaElem2.checked = false;
        return 1;
    } else {
        verandaElem1.checked = false;
        return 0;
    }
}


function updateOutput(type = false, frontGlassItem) {
    console.log("update");
    var nightMode = document.getElementById('nightMode').checked;

    if (nightMode) {
        var verandaColorElem = document.getElementById('veranda-color');
        var roofGlassTypeElem = document.getElementById('roof-item-type');

        var verandaColor = getVerandaColor(verandaColorElem);
        var roofGlassType = getRoofGlassType(roofGlassTypeElem);

        var image = "images_gece_" + verandaColor + "_" +
            roofGlassType;

        document.getElementById('image').innerText = image;
        document.getElementById('image').src = "assets/dark/" + image + ".jpg"; 
        return;
    }
    else {
        var buildingTypeElem = document.getElementById('building-type');
        var verandaWidthElem = document.getElementById('veranda-width');
        var verandaDepth = document.getElementById('veranda-depth').value;
        var verandaColorElem = document.getElementById('veranda-color');
        var roofGlassTypeElem = document.getElementById('roof-item-type');
        var frontGlassExistElem = document.getElementById('front-glass-type-exist');
        var frontGlassNonExistElem = document.getElementById('front-glass-type-non-exist');
        var yanCam = document.getElementById('yan-cam').checked ? 1 : 0;

        var verandaWidth = calculateVerandaWidth(verandaWidthElem);
        var verandaColor = getVerandaColor(verandaColorElem);
        var roofGlassType = getRoofGlassType(roofGlassTypeElem);
        var frontGlassType = getFrontGlassType(frontGlassExistElem, frontGlassNonExistElem, frontGlassItem != null ? frontGlassItem : document.getElementById('front-glass-type-exist').checked ? true : false);

        var image = "image_" + buildingTypeElem.value.charAt(buildingTypeElem.value.length - 1) + "_" + (verandaWidth) + "_" +
            verandaColor + "_" +
            roofGlassType + "_" +
            frontGlassType + "_" + yanCam;

        var verandaType = $("input[name='veranda-type']:checked").val();
        if (verandaType != null) {
            var verandaTypeElements = document.getElementsByClassName('verandaType');

            for (var i = 0; i < verandaTypeElements.length; i++) {
                var element = verandaTypeElements[i];
                element.classList.remove('btn-info', 'btn-light');
            }
            var disassembledButton = document.getElementById("disassembled").parentElement;
            var standartButton = document.getElementById("standart").parentElement;
            var pergamon = document.getElementById("pergamon").parentElement;

            if (verandaType == "disassembled") {
                disassembledButton.classList.add("btn-info");
                document.getElementById('image').src = "assets/close/disassembled.jpg";
                return;
            } else if (verandaType == 'standart') {
                standartButton.classList.add("btn-info");
            } else {
                pergamon.classList.add("btn-info");
                document.getElementById('image').src = "assets/close/pergamon" + verandaColor + ".jpg";
                return;
            }
        }

        if (!type) {
            // console.log(image)
            document.getElementById('image').src = "assets/light/" + image + ".jpg"; // İmage path'i buraya uygun olarak güncellenmeli
            document.getElementById('veranda-width-text').textContent = verandaWidthElem.value;
        }
        else {
            var image_close = "image_yakin_" + verandaColor + "_" +
                roofGlassType;

            document.getElementById('image').src = "assets/close/" + image_close + ".jpg"; // İmage path'i buraya uygun olarak güncellenmeli
            document.getElementById('veranda-width-text').textContent = verandaWidthElem.value;
        }

        // var derinlikSelect = verandaDepth;

        // // Option değerlerini temizle
        // derinlikSelect.innerHTML = derinlikSelect.value;

        // // Yeni option değerlerini ekle
        // if (ustCamTipi === "cam1") {
        //     addOption(derinlikSelect, "3", "3");
        //     addOption(derinlikSelect, "4", "4");
        //     addOption(derinlikSelect, "4.5", "4.5");

        // } else {
        //     addOption(derinlikSelect, "3", "3");
        //     addOption(derinlikSelect, "4", "4");
        //     addOption(derinlikSelect, "5", "5");
        //     addOption(derinlikSelect, "6", "6");
        // }

        // document.getElementById("derinlik-deger").innerText = "Seçilen Değer: " + derinlikSelect.value;


        // function addOption(selectElement, value, text) {
        //     var option = document.createElement("option");
        //     option.value = value;
        //     option.text = text;
        //     selectElement.add(option);
        // }

        // document.getElementById('ev-info').textContent = buildingType == 'tek1' ? 'Tek 1' : evTipi == 'çoklu2' ? 'Çoklu 2' : 'Köşe 3';
        // document.getElementById('genislik-info').textContent = genislik;
        // document.getElementById('veranda-info').textContent = verandaRenk == 'antrasit1' ? 'Antrasit 1' : 'Beyaz 2';
        // document.getElementById('ustcam-info').textContent = ustCamTipi == 'cam1' ? 'Cam 1' : ustCamTipi == 'polikarbon-renkli2' ? 'Polikarbon Renkli 2' : 'Polikarbon Şeffaf 3';
        // document.getElementById('oncampanel-info').textContent = onCamPanel == 1 ? 'Var' : 'Yok';
        // document.getElementById('yancamlar-info').textContent = yanCam == 1 ? 'Var' : 'Yok';

    }

}

function showElement() {
    var information = document.getElementById('information');
    var form = document.getElementById('form');

    information.style.display = 'block';
    form.style.display = 'block';

    form.scrollIntoView({ behavior: "smooth", block: "start" }); updateOutput

}




function formSubmit() {
    /// Formun submit olayını dinle
    document.querySelector('form').addEventListener('submit', function (event) {
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

    img.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // Canvas'teki resmi binary veriye dönüştür
        canvas.toBlob(function (blob) {
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