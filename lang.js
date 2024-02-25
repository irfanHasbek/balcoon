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
      'item.glass': 'Cam',
      'item.colorful-polycarbon': 'Polikarbon Renkli ',
      'item.transparent-polycarbon': 'Polikarbon Şeffaf ',
      'question.yes': 'Var',
      'question.no': 'Yok',
      'question.right' : 'Sağ',
      'question.left': 'Sol',
      'calculatePrice': 'HESAPLA',
      'unit.meter': 'metre',
      'direction.left': 'Sol',
      'direction.right': 'Sağ',
      'colors.antrasit': 'Antrasit', 
      'colors.white': 'Beyaz',
      'resultMessage': 'vergi ve kurulum dahil',
      'SuccessMessage' : 'Teklif talebiniz alınmıştır.',
      'ErrorMessage' : 'Bir hata oluştu',
  },
  'en': {
    'building-type': 'House Type',
    'veranda-width': 'Width (Meter)',
    'veranda-depth': 'Depth (Meter)',
    'veranda-type': 'Veranda Type',
    'standart': 'Standart',
    'pergamon': 'Pergamon',
    'disassembled': 'Disassambled',
    'veranda-color': 'Veranda Color',
    'roof-glass-type': 'Roof Glass Type',
    'front-item-type': 'Front Glass Panel',
    'sideWindowOptions': 'Side Panel Options',
    'spice': 'Spice',
    'aluminumWindow': 'Aluminum Panel',
    'glassWindow': 'Glass Panel',
    'fullname': 'Fullname *',
    'telephone': 'Telephone *',
    'email': 'Email *',
    'address': 'Address *',
    'submit': 'Sumbit',
    'languageOptions': 'Language',
    'base': 'Home',
    'ordered': 'Ordered',
    'bend': 'Bend',
    'item.glass': 'Glass',
    'item.colorful-polycarbon': 'Polycarbon Colorfull ',
    'item.transparent-polycarbon': 'Polycarbon transparant ',
    'question.yes': 'Yes',
    'question.no': 'No',
    'question.right' : 'Right',
    'question.left': 'Left',
    'calculatePrice': 'CALCULATE',
    'unit.meter': 'metre',
    'direction.left': 'Left',
    'direction.right': 'right',
    'colors.antrasit': 'Antrasit', 
    'colors.white': 'White',
    'resultMessage': 'including assembly and vat',
    'SuccessMessage' : 'Your demand is created succesfully.',
    'ErrorMessage' : 'Something went wrong',
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



