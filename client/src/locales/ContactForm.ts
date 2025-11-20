const { lang } = useLanguage();
const t = translations[lang];

// Replace every label & placeholder
<label>{t.contact.name} *</label>
<input placeholder={lang === "ar" ? "أدخل اسمك الكامل" : "Enter your full name"} />
// ... repeat for email, phone, subject, message ...
<button>{t.contact.send}</button>