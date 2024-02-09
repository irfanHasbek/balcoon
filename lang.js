const languages = {
  'tr': {
      'evTipi': 'Ev Tipi',
      'genislikOlcusu': 'Genişlik Ölçüsü (Metre)',
      'derinlikOlcusu': 'Derinlik Ölçüsü (Metre)',
      'verandaRengi': 'Veranda Rengi',
      'ustCamTipi': 'Üst Cam Tipi',
      'onCamPanel': 'Ön Cam Panel',
      'yanCamlar': 'Yan Camlar',
      'adSoyad': 'Adınız ve Soyadınız',
      'telefonNumarasi': 'Telefon Numaranız',
      'epostaAdresi': 'E-posta Adresiniz',
      'ikametYeri': 'İkamet Ettiğiniz Yer',
      'gonder': 'Gönder',
      'dilSecenekleri': 'Dil Seçenekleri',
      'tek1': 'Tek 1',
      'coklu2': 'Çoklu 2',
      'kose3': 'Köşe 3',
      'var': 'Var',
      'yok': 'Yok',
      'antrasit1': 'Antrasit 1',
      'beyaz2': 'Beyaz 2',
      'polikarbon-renkli2': 'Polikarbon Renkli 2',
      'polikarbon-seffaf3': 'Polikarbon Şeffaf 3',
      'cam1': 'Cam 1',
      'hesapla': 'HESAPLA',
      'nightmode': 'HESAPLA',
      'adsoyad': 'Adınız ve soyadınız*',
      'telefon': 'Telefon numaran*',
      'eposta': 'E-posta adresiniz*',
      'ikametyeri': 'İkamet ettiğiniz yer*',
      'metre': 'metre'
  },
  'en': {
      'evTipi': 'House Type',
      'genislikOlcusu': 'Width Measurement (Metre)',
      'derinlikOlcusu': 'Width Depth (Metre)',
      'verandaRengi': 'Veranda Color',
      'ustCamTipi': 'Upper Glass Type',
      'onCamPanel': 'Front Glass Panel',
      'yanCamlar': 'Side Glasses',
      'adSoyad': 'Full Name',
      'telefonNumarasi': 'Phone Number',
      'epostaAdresi': 'Email Address',
      'ikametYeri': 'Residence',
      'gonder': 'Submit',
      'dilSecenekleri': 'Language Options',
      'tek1': 'Single 1',
      'coklu2': 'Multiple 2',
      'kose3': 'Corner 3',
      'var': 'Yes',
      'metre': 'metre',
      'antrasit1': 'Anthracite 1',
      'beyaz2': 'White 2',
      'polikarbon-renkli2': 'Polycarbonate Colored 2',
      'polikarbon-seffaf3': 'Polycarbonate Transparent 3',
      'cam1': 'Glass 1',
      'hesapla': 'CALCULATE',
      'adsoyad': 'Your name and surname*',
      'telefon': 'Your phone number*',
      'eposta': 'E-Mail Address*',
      'ikametyeri': 'Your place of residence*',
      'yok': 'No'
  }
};

let currentLanguage = 'tr';

function setLanguage(lang) {
  currentLanguage = lang;
  updateTexts();
}

function updateTexts() {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    const translation = languages[currentLanguage][key];
    // Eğer placeholder özniteliği varsa güncelle
    if (element.getAttribute('placeholder')) {
      element.setAttribute('placeholder', translation);
    } else {
      element.textContent = translation;
    }
  });
}


document.addEventListener('DOMContentLoaded', updateTexts);



