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

function changeSpice(clickedNo = false) {
    var noSpiceElem = document.getElementById('sideWindowNo');
    var leftSpiceElem = document.getElementById('sideWindowLeft');
    var rightSpiceElem = document.getElementById('sideWindowRight');

    if (clickedNo) {
        leftSpiceElem.checked = false;
        rightSpiceElem.checked = false;
    } else {
        noSpiceElem.checked = false;
    }

    var noAluminumElem = document.getElementById('sideWindowAluNo');
    var leftAluminumElem = document.getElementById('sideWindowAluLeft');
    var rightAluminumElem = document.getElementById('sideWindowAluRight');

    var noGlassElem = document.getElementById('sideWindowGlassNo');
    var leftGlassElem = document.getElementById('sideWindowGlassLeft');
    var rightGlassElem = document.getElementById('sideWindowGlassRight');

    if (clickedNo) {
        noAluminumElem.checked = true;
        noAluminumElem.disabled = true;

        leftAluminumElem.checked = false;
        leftAluminumElem.disabled = true;

        rightAluminumElem.checked = false;
        rightAluminumElem.disabled = true;

        noGlassElem.checked = true;
        noGlassElem.disabled = true;

        leftGlassElem.checked = false;
        leftGlassElem.disabled = true;

        rightGlassElem.checked = false;
        rightGlassElem.disabled = true;

    } else {
        noAluminumElem.checked = true;
        noAluminumElem.disabled = false;

        noGlassElem.checked = true;
        noGlassElem.disabled = false;

        if (leftSpiceElem.checked) {
            leftAluminumElem.checked = false;
            leftAluminumElem.disabled = false;
            rightAluminumElem.disabled = true;

            leftGlassElem.checked = false;
            leftGlassElem.disabled = false;
            rightGlassElem.disabled = true;
        }

        if (rightSpiceElem.checked) {
            rightAluminumElem.checked = false;
            rightAluminumElem.disabled = false;
            leftAluminumElem.disabled = true;

            rightGlassElem.checked = false;
            rightGlassElem.disabled = false;
            leftGlassElem.disabled = true;
        }

        if (rightSpiceElem.checked && leftSpiceElem.checked) {
            rightAluminumElem.checked = false;
            rightAluminumElem.disabled = false;
            leftAluminumElem.disabled = false;

            rightGlassElem.checked = false;
            rightGlassElem.disabled = false;
            leftGlassElem.disabled = false;
        }

        if (!rightSpiceElem.checked && !leftSpiceElem.checked) {
            rightAluminumElem.checked = false;
            rightAluminumElem.disabled = true;
            leftAluminumElem.disabled = true;

            rightGlassElem.checked = false;
            rightGlassElem.disabled = true;
            leftGlassElem.disabled = true;

            noSpiceElem.checked = true;
            noAluminumElem.disabled = true;
            noGlassElem.disabled = true;
        }
    }
}

function changeAluminum(clickedNo = false) {
    var noAluminumElem = document.getElementById('sideWindowAluNo');
    var leftAluminumElem = document.getElementById('sideWindowAluLeft');
    var rightAluminumElem = document.getElementById('sideWindowAluRight');

    if (clickedNo) {
        leftAluminumElem.checked = false;
        rightAluminumElem.checked = false;
    } else {
        noAluminumElem.checked = false;
    }
}

function changeGlass(clickedNo = false) {
    var noGlassElem = document.getElementById('sideWindowGlassNo');
    var leftGlassElem = document.getElementById('sideWindowGlassLeft');
    var rightGlassElem = document.getElementById('sideWindowGlassRight');

    if (clickedNo) {
        leftGlassElem.checked = false;
        rightGlassElem.checked = false;
    } else {
        noGlassElem.checked = false;
    }

    updateOutput(false);
}

function getGlassPane(verandaElem1, verandaElem2) {
    if (verandaElem1.checked || verandaElem2.checked) {
        return 1;
    } else {
        return 0;
    }
}

function calculatePrice() {
    var verandaWidthElem = document.getElementById('veranda-width');
    var verandaDepthElem = document.getElementById('veranda-depth');
    var roofGlassTypeElem = document.getElementById('roof-item-type');

    var verandaWidth = verandaWidthElem.value;
    var verandaDepth = verandaDepthElem.value;
    var verandaType = $("input[name='veranda-type']:checked").val();
    var roofGlassType = getRoofGlassType(roofGlassTypeElem);

    var resultPrice = 0;

    var dimensions = verandaWidth + 'x' + verandaDepth;
    if(verandaType == 'standart' || verandaType == 'disassembled') {
        if(roofGlassType == 1) {
            resultPrice = prices['standart']['glass']['dimension_3_side_2'][dimensions];
        }else if(roofGlassType == 2) {
            resultPrice = prices['standart']['polycarbon']['dimension_3_side_2'][dimensions];
        }else {
            resultPrice = prices['standart']['transparent']['dimension_3_side_2'][dimensions];
        }
    }else {
        if(roofGlassType == 1) {
            resultPrice = prices['pergamon']['glass']['dimension_3_side_2'][dimensions];
        }else if(roofGlassType == 2) {
            resultPrice = prices['pergamon']['polycarbon']['dimension_3_side_2'][dimensions];
        }else {
            resultPrice = prices['pergamon']['transparent']['dimension_3_side_2'][dimensions];
        }
    }

     // var information = document.getElementById('information');
     var form = document.getElementById('form');

     // information.style.display = 'block';
     form.style.display = 'block';
 
     form.scrollIntoView({ behavior: "smooth", block: "start" }); updateOutput
     
     var priceBoxElem = document.getElementsByClassName('price-box');
     var resultSpanElem = document.getElementById('price-result');
     var calculateButtonElem = document.getElementById('calculateButton');

     resultSpanElem.textContent = '€ ' + parseFloat(resultPrice).toFixed(2) + ' - ' + languages[currentLanguage]['resultMessage'];

     calculateButtonElem.style.display = 'none';
     priceBoxElem[0].style.display = 'inline-flex';

    console.log(resultPrice);
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
        var verandaDepthElem = document.getElementById('veranda-depth');
        var verandaColorElem = document.getElementById('veranda-color');
        var roofGlassTypeElem = document.getElementById('roof-item-type');
        var frontGlassExistElem = document.getElementById('front-glass-type-exist');
        var frontGlassNonExistElem = document.getElementById('front-glass-type-non-exist');
        var sideGlassPaneLeft = document.getElementById('sideWindowGlassLeft');
        var sideGlassPaneright = document.getElementById('sideWindowGlassRight');

        var verandaWidth = calculateVerandaWidth(verandaWidthElem);
        var verandaColor = getVerandaColor(verandaColorElem);
        var roofGlassType = getRoofGlassType(roofGlassTypeElem);
        var frontGlassType = getFrontGlassType(frontGlassExistElem, frontGlassNonExistElem, frontGlassItem != null ? frontGlassItem : document.getElementById('front-glass-type-exist').checked ? true : false);
        var sideGlassPane = getGlassPane(sideGlassPaneLeft, sideGlassPaneright);

        var image = "image_" + buildingTypeElem.value.charAt(buildingTypeElem.value.length - 1) + "_" + (verandaWidth) + "_" +
            verandaColor + "_" +
            roofGlassType + "_" +
            frontGlassType + "_" + sideGlassPane;

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

        var currentVerandaDepthValue = verandaDepthElem.value;
        // Option değerlerini temizle
        verandaDepthElem.innerHTML = verandaDepthElem.value;

        // Yeni option değerlerini ekle
        if (roofGlassType === 1) {
            addOption(verandaDepthElem, "3", "3");
            addOption(verandaDepthElem, "4", "4");
            addOption(verandaDepthElem, "5", "5");

        } else {
            addOption(verandaDepthElem, "3", "3");
            addOption(verandaDepthElem, "4", "4");
            addOption(verandaDepthElem, "5", "5");
            addOption(verandaDepthElem, "6", "6");
        }

        if (roofGlassType === 2) {
            verandaDepthElem.value = currentVerandaDepthValue;
        } else {
            if (currentVerandaDepthValue < 5) {
                verandaDepthElem.value = currentVerandaDepthValue;
            } else {
                verandaDepthElem.value = 3;
            }
        }

        function addOption(selectElement, value, text) {
            var option = document.createElement("option");
            option.value = value;
            option.text = text;
            selectElement.add(option);
        }

        // document.getElementById('ev-info').textContent = buildingType == 'tek1' ? 'Tek 1' : evTipi == 'çoklu2' ? 'Çoklu 2' : 'Köşe 3';
        // document.getElementById('genislik-info').textContent = genislik;
        // document.getElementById('veranda-info').textContent = verandaRenk == 'antrasit1' ? 'Antrasit 1' : 'Beyaz 2';
        // document.getElementById('ustcam-info').textContent = ustCamTipi == 'cam1' ? 'Cam 1' : ustCamTipi == 'polikarbon-renkli2' ? 'Polikarbon Renkli 2' : 'Polikarbon Şeffaf 3';
        // document.getElementById('oncampanel-info').textContent = onCamPanel == 1 ? 'Var' : 'Yok';
        // document.getElementById('yancamlar-info').textContent = yanCam == 1 ? 'Var' : 'Yok';

    }

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