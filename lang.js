const languages = {
  'tr': {
      'building-type': 'Ev Tipi',
      'veranda-width': 'Genişlik Ölçüsü (Metre)',
      'veranda-depth': 'Derinlik Ölçüsü (Metre)',
      'veranda-type': 'Tip',
      'standart': 'Standart',
      'pergamon': 'Pergamon',
      'disassembled': 'Demonte',
      'veranda-color': 'Veranda Rengi',
      'roof-glass-type': 'Üst Cam Tipi',
      'front-item-type': 'Ön Cam Panel',
      'yanCamlar': 'Yan Camlar',
      'adSoyad': 'Adınız ve Soyadınız',
      'telefonNumarasi': 'Telefon Numaranız',
      'epostaAdresi': 'E-posta Adresiniz',
      'ikametYeri': 'İkamet Ettiğiniz Yer',
      'gonder': 'Gönder',
      'dilSecenekleri': 'Dil Seçenekleri',
      'base': 'Müstakil',
      'ordered': 'Sıralı',
      'bend': 'Köşe',
      'var': 'Var',
      'yok': 'Yok',
      'antrasit1': 'Antrasit 1',
      'beyaz2': 'Beyaz 2',
      'item.glass': 'Cam',
      'item.colorful-polycarbon': 'Polikarbon Renkli ',
      'item.transparent-polycarbon': 'Polikarbon Şeffaf ',
      'question.yes': 'Var',
      'question.no': 'Yok',
      'hesapla': 'HESAPLA',
      'display_mode': 'Gündüz Modu',
      'adsoyad': 'Adınız ve soyadınız*',
      'telefon': 'Telefon numaran*',
      'eposta': 'E-posta adresiniz*',
      'ikametyeri': 'İkamet ettiğiniz yer*',
      'metre': 'metre',
      'colors.antrasit': 'Antrasit', 
      'colors.white': 'Beyaz' 
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



