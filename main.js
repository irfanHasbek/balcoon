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

    updateOutput(true)
}

function changeAluminum(clickedNo = false) {
    var noAluminumElem = document.getElementById('sideWindowAluNo');
    var leftAluminumElem = document.getElementById('sideWindowAluLeft');
    var rightAluminumElem = document.getElementById('sideWindowAluRight');

    // var noGlassElem = document.getElementById('sideWindowGlassNo');
    // var leftGlassElem = document.getElementById('sideWindowGlassLeft');
    // var rightGlassElem = document.getElementById('sideWindowGlassRight');

    if (clickedNo) {
        leftAluminumElem.checked = false;
        rightAluminumElem.checked = false;
    } else {
        noAluminumElem.checked = false;

        // leftGlassElem.checked = false;
        // rightGlassElem.checked = false;
        // noGlassElem.checked = true;
    }

    updateOutput(true);
}

function changeGlass(clickedNo = false) {
    var noGlassElem = document.getElementById('sideWindowGlassNo');
    var leftGlassElem = document.getElementById('sideWindowGlassLeft');
    var rightGlassElem = document.getElementById('sideWindowGlassRight');

    // var noAluminumElem = document.getElementById('sideWindowAluNo');
    // var leftAluminumElem = document.getElementById('sideWindowAluLeft');
    // var rightAluminumElem = document.getElementById('sideWindowAluRight');

    if (clickedNo) {
        leftGlassElem.checked = false;
        rightGlassElem.checked = false;
    } else {
        noGlassElem.checked = false;

        // leftAluminumElem.checked = false;
        // rightAluminumElem.checked = false;
        // noAluminumElem.checked = false;
    }

    updateOutput(true);
}

function getGlassPane(verandaElem1, verandaElem2) {
    if (verandaElem1.checked || verandaElem2.checked) {
        return 1;
    } else {
        return 0;
    }
}

$(document).ready(() => {
    if (window.location.search != '') {
        var lang = window.location.search.split('=').pop();
        if (lang == undefined) {
            setLanguage('tr');
        } else {
            setLanguage(lang);
        }
    }
});

function calculatePrice() {
    var verandaWidthElem = document.getElementById('veranda-width');
    var verandaDepthElem = document.getElementById('veranda-depth');
    var roofGlassTypeElem = document.getElementById('roof-item-type');

    var verandaWidth = verandaWidthElem.value;
    var verandaDepth = verandaDepthElem.value;
    var verandaType = $("input[name='veranda-type']:checked").val();
    var roofGlassType = getRoofGlassType(roofGlassTypeElem);

    var noSpiceElem = document.getElementById('sideWindowNo');
    var leftSpiceElem = document.getElementById('sideWindowLeft');
    var rightSpiceElem = document.getElementById('sideWindowRight');

    var noAluminumElem = document.getElementById('sideWindowAluNo');
    var leftAluminumElem = document.getElementById('sideWindowAluLeft');
    var rightAluminumElem = document.getElementById('sideWindowAluRight');

    var noGlassElem = document.getElementById('sideWindowGlassNo');
    var leftGlassElem = document.getElementById('sideWindowGlassLeft');
    var rightGlassElem = document.getElementById('sideWindowGlassRight');

    var frontGlassExistElem = document.getElementById('front-glass-type-exist');

    var resultPrice = 0;

    var dimensions = verandaWidth + 'x' + verandaDepth;

    var dimensionsSide = 'dimension_' + verandaDepth + '_side_2';
    if (verandaType == 'standart' || verandaType == 'disassembled') {
        if (roofGlassType == 1) {
            resultPrice = prices['standart']['glass'][dimensionsSide][dimensions];
        } else if (roofGlassType == 2) {
            resultPrice = prices['standart']['polycarbon'][dimensionsSide][dimensions];
        } else {
            resultPrice = prices['standart']['transparent'][dimensionsSide][dimensions];
        }
    } else {
        if (roofGlassType == 1) {
            resultPrice = prices['pergamon']['glass'][dimensionsSide][dimensions];
        } else if (roofGlassType == 2) {
            resultPrice = prices['pergamon']['polycarbon'][dimensionsSide][dimensions];
        } else {
            resultPrice = prices['pergamon']['transparent'][dimensionsSide][dimensions];
        }
    }

    var optionsPrice = 0;

    if (!noSpiceElem.checked) {
        if (leftSpiceElem.checked) optionsPrice += prices.spices
        if (rightSpiceElem.checked) optionsPrice += prices.spices

        if (!noAluminumElem.checked) {
            var paneArea = verandaDepth * 2.5;
            if (leftAluminumElem.checked) optionsPrice += paneArea * prices.aluminum;
            if (rightAluminumElem.checked) optionsPrice += paneArea * prices.aluminum;
        }

        if (!noGlassElem.checked) {
            var paneArea = verandaDepth * 1;
            if (leftGlassElem.checked) optionsPrice += paneArea * prices.glass;
            if (rightGlassElem.checked) optionsPrice += paneArea * prices.glass;
        }

    }

    if (frontGlassExistElem.checked) {
        var pane = verandaWidth * 1;
        optionsPrice += pane * prices.glass;
    }

    if (resultPrice == undefined || optionsPrice == undefined) {
        resultPrice = 0;
    } else {
        resultPrice += optionsPrice;
    }

    var form = document.getElementById('form');
    var information = document.getElementById('information');
    var resultInformation = document.getElementById('info-result');

    form.style.display = 'block';
    information.style.display = 'block';
    resultInformation.style.display = 'flex';

    form.scrollIntoView({ behavior: "smooth", block: "start" }); updateOutput

    var priceBoxElem = document.getElementsByClassName('price-box');
    var resultSpanElem = document.getElementById('price-result');
    var calculateButtonElem = document.getElementById('calculateButton');

    resultSpanElem.textContent = '€ ' + parseFloat(resultPrice).toFixed(2) + ' - ' + languages[currentLanguage]['resultMessage'];

    calculateButtonElem.style.display = 'none';
    priceBoxElem[0].style.display = 'inline-flex';
}

function updateOutput(type = false, frontGlassItem) {
    var calculateButton = document.getElementById('calculateButton');
    var priceBox = document.getElementsByClassName('price-box')[0];
    var information = document.getElementById('information');
    var form = document.getElementById('form');

    if(priceBox) { priceBox.style.display = 'none'; }
    if(calculateButton) { calculateButton.style.display = 'inline'; }
    if(information) { information.style.display = 'none'; }
    if(form) { form.style.display = 'none'; }

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
        var verandaDepth = verandaDepthElem.value;
        var verandaColor = getVerandaColor(verandaColorElem);
        var roofGlassType = getRoofGlassType(roofGlassTypeElem);
        var frontGlassType = getFrontGlassType(frontGlassExistElem, frontGlassNonExistElem, frontGlassItem != null ? frontGlassItem : document.getElementById('front-glass-type-exist').checked ? true : false);
        var sideGlassPane = getGlassPane(sideGlassPaneLeft, sideGlassPaneright);

        var image = "image_" + buildingTypeElem.value.charAt(buildingTypeElem.value.length - 1) + "_" + (verandaWidth) + "_" +
            verandaColor + "_" +
            roofGlassType + "_" +
            frontGlassType + "_" + sideGlassPane;

        var verandaType = $("input[name='veranda-type']:checked").val();
        setResultText(verandaType, 
            verandaColor == 1 ? languages[currentLanguage]['colors.antrasit'] : languages[currentLanguage]['colors.white'],
            verandaWidthElem.value + ' X ' + verandaDepth,
            roofGlassType == 1 ? languages[currentLanguage]['item.glass'] : roofGlassType == 2 ? languages[currentLanguage]['item.colorful-polycarbon'] : languages[currentLanguage]['item.transparent-polycarbon'],
            document.getElementById('sideWindowLeft').checked || document.getElementById('sideWindowRight').checked ? languages[currentLanguage]['question.yes'] : languages[currentLanguage]['question.no'],
            document.getElementById('sideWindowAluLeft').checked || document.getElementById('sideWindowAluRight').checked ? languages[currentLanguage]['question.yes'] : languages[currentLanguage]['question.no'],
            sideGlassPaneLeft.checked || sideGlassPaneright.checked ? languages[currentLanguage]['question.yes'] : languages[currentLanguage]['question.no']
        );
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

        if (!type || (sideGlassPaneLeft.checked && sideGlassPaneright.checked)) {
            document.getElementById('image').src = "assets/light/" + image + ".jpg";
            document.getElementById('veranda-width-text').textContent = verandaWidthElem.value;
        }
        else if(!(sideGlassPaneLeft.checked && sideGlassPaneright.checked)) {
            var image_close = "image_yakin_" + verandaColor + "_" +
                roofGlassType;

            var leftAluminumElem = document.getElementById('sideWindowAluLeft');
            var rightAluminumElem = document.getElementById('sideWindowAluRight');

            var leftGlassElem = document.getElementById('sideWindowGlassLeft');
            var rightGlassElem = document.getElementById('sideWindowGlassRight');

            
            if(leftAluminumElem.checked) {
                image_close = 'aluminum_left_' + verandaColor;
            }
            
            if(rightAluminumElem.checked) {
                image_close = 'aluminum_right_' + verandaColor;
            }
            
            if (leftAluminumElem.checked && rightAluminumElem.checked) {
                image_close = 'aluminum_' + verandaColor;
            }

            if (leftGlassElem.checked) {
                image_close = 'glass_' + verandaColor + '_2';
            }
            if (rightGlassElem.checked) {
                image_close = 'glass_' + verandaColor + '_1';
            }

            if (leftGlassElem.checked && rightGlassElem.checked) {
                image_close = 'glass_' + verandaColor;
            }

            if(leftGlassElem.checked && rightAluminumElem.checked) {
                image_close = 'glass_aluminum';
                if(frontGlassExistElem.checked) {
                    image_close += '_front'
                }
            }

            if(leftAluminumElem.checked && rightGlassElem.checked) {
                image_close = 'aluminum_glass';
                if(frontGlassExistElem.checked) {
                    image_close += '_front'
                }
            }

            document.getElementById('image').src = "assets/close/" + image_close + ".jpg"; // İmage path'i buraya uygun olarak güncellenmeli
            document.getElementById('veranda-width-text').textContent = verandaWidthElem.value;
        }

        var currentVerandaDepthValue = verandaDepthElem.value;
        verandaDepthElem.innerHTML = verandaDepthElem.value;

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
    }
}

function formSubmit() {
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();

        loadImageAndSend();
    });
}

function setResultText(type, color, dimensions, coverage, skewer, aluminum, glass) {
    document.getElementById('info-type').textContent = languages[currentLanguage][type];
    document.getElementById('info-color').textContent = color;
    document.getElementById('info-dimensions').textContent = dimensions;
    document.getElementById('info-coverage').textContent = coverage;
    document.getElementById('info-skewer').textContent = skewer;
    document.getElementById('info-Aluminum').textContent = aluminum;
    document.getElementById('info-GlassWall').textContent = glass;

    document.getElementById('info-result').style.display = 'none';
}

function loadImageAndSend() {
    var buildingTypeElem = document.getElementById('building-type');
    var verandaWidthElem = document.getElementById('veranda-width');
    var verandaDepthElem = document.getElementById('veranda-depth');
    var verandaColorElem = document.getElementById('veranda-color');
    var roofGlassTypeElem = document.getElementById('roof-item-type');
    var frontGlassExistElem = document.getElementById('front-glass-type-exist');
    var leftAluminumElem = document.getElementById('sideWindowAluLeft');
    var rightAluminumElem = document.getElementById('sideWindowAluRight');
    var leftGlassElem = document.getElementById('sideWindowGlassLeft');
    var rightGlassElem = document.getElementById('sideWindowGlassRight');
    var submitBtnElem = document.getElementById('submitBtn');

    var buildingType = buildingTypeElem.value == '"base-1' ? languages[currentLanguage]['base'] : buildingTypeElem.value == 'ordered-2' ? languages[currentLanguage]['ordered'] : languages[currentLanguage]['bend'];
    var verandaWidth = parseInt(verandaWidthElem.value) + ' ' + languages[currentLanguage]['unit.meter'];
    var verandaDepth = parseInt(verandaDepthElem.value) + ' ' + languages[currentLanguage]['unit.meter'];
    var verandaColor = verandaColorElem.value == 'antrasit' ? languages[currentLanguage]['colors.antrasit'] : languages[currentLanguage]['colors.white'];
    var roofGlassType = roofGlassTypeElem.value == 1 ? languages[currentLanguage]['item.glass'] : roofGlassTypeElem.value == 2 ? languages[currentLanguage]['item.colorful-polycarbon'] : languages[currentLanguage]['item.transparent-polycarbon']
    var roofGlassExist = frontGlassExistElem.checked ? languages[currentLanguage]['question.yes'] : languages[currentLanguage]['question.no'];
    var sidePane = '';//languages[currentLanguage]['sideWindowOptions'] + ': ';

    if (leftAluminumElem.checked) sidePane += languages[currentLanguage]['direction.left'] + ' ' + languages[currentLanguage]['aluminumWindow'] + ' ';
    if (rightAluminumElem.checked) sidePane += languages[currentLanguage]['direction.right'] + ' ' + languages[currentLanguage]['aluminumWindow'] + ' ';
    if (leftGlassElem.checked) sidePane += languages[currentLanguage]['direction.left'] + ' ' + languages[currentLanguage]['glassWindow'] + ' ';
    if (rightGlassElem.checked) sidePane += languages[currentLanguage]['direction.right'] + ' ' + languages[currentLanguage]['glassWindow'] + ' ';

    var img = new Image();
    img.crossOrigin = 'Anonymous';
    const resimAdi = new URL(document.getElementById('image').src).pathname;
    img.src = resimAdi;

    img.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.width, img.height);

        canvas.toBlob(function (blob) {
            var formData = new FormData();
            formData.append('gorsel', blob, 'image.jpg');
            formData.append('adSoyad', document.getElementById('fullname').value);
            formData.append('telefon', document.getElementById('telephone').value);
            formData.append('ePosta', document.getElementById('email').value);
            formData.append('ikametAdresi', document.getElementById('address').value);
            formData.append('evTipi', buildingType);
            formData.append('genislik', verandaWidth);
            formData.append('derinlik', verandaDepth);
            formData.append('verandaRengi', verandaColor);
            formData.append('ustCamTipi', roofGlassType);
            formData.append('onCamPanel', roofGlassExist);
            formData.append('yanCamlar', sidePane);
            formData.append('fiyat', document.getElementById('price-result').textContent);


            submitBtnElem.disabled = true;
            fetch('https://mailgonder.localveri.net/send', {
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
                    if (data.status == 'success') {

                        alert(languages[currentLanguage]['SuccessMessage']);
                    } else {
                        alert(languages[currentLanguage]['ErrorMessage']);
                    }
                    submitBtnElem.disabled = false;
                    submitBtnElem.style.display = 'none';
                })
                .catch(error => {
                    console.error('Error:', error);
                    submitBtnElem.disabled = false;

                    alert(languages[currentLanguage]['ErrorMessage']);
                });
        }, 'image/jpeg');
    };
}

window.addEventListener('scroll', function() {
    const stickyParent = document.getElementsByClassName('sticky')[0];
    const spacer = document.getElementsByClassName('price-box')[0];
    const submitBtn = this.document.getElementById('submitBtn');

    const spacerBounds = spacer.getBoundingClientRect();
    const submitBtnBounds = submitBtn.getBoundingClientRect();

    // Eğer alt div viewport içindeyse, sticky özelliğini kaldır
    if ((submitBtnBounds.top < window.innerHeight && submitBtnBounds.bottom > 0)) {
        stickyParent.classList.remove('sticky-parent');
    } else {
        // Aksi takdirde, sticky özelliğini ekle
        stickyParent.classList.add('sticky-parent');
    }
});
