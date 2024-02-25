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
      'sideWindowOptions': 'Yan Panel Seçenekleri',
      'spice': 'Spice',
      'aluminumWindow': 'Aluminyum Panel',
      'glassWindow': 'Cam Panel',
      'fullname': 'Adınız ve Soyadınız *',
      'telephone': 'Telefon Numaranız *',
      'email': 'E-posta Adresiniz *',
      'address': 'İkamet Ettiğiniz Yer *',
      'submit': 'Gönder',
      'languageOptions': 'Dil Seçenekleri',
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
      'question.right' : 'Sağ',
      'question.left': 'Sol',
      'calculatePrice': 'HESAPLA',
      'display_mode': 'Gündüz Modu',
      'adsoyad': 'Adınız ve soyadınız*',
      'telefon': 'Telefon numaran*',
      'eposta': 'E-posta adresiniz*',
      'ikametyeri': 'İkamet ettiğiniz yer*',
      'unit.meter': 'metre',
      'direction.left': 'Sol',
      'direction.right': 'Sağ',
      'colors.antrasit': 'Antrasit', 
      'colors.white': 'Beyaz',
      'resultMessage': 'vergi ve kurulum dahil',
      'SuccessMessage' : 'Teklif talebiniz alınmıştır.',
      'ErrorMessage' : 'Bir hata oluştu',
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

    element.setAttribute('placeholder', translation);
    element.textContent = translation;
  });
}


document.addEventListener('DOMContentLoaded', updateTexts);



