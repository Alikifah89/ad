const services = [
  {
    icon: DollarSign,
    title: t.serviceList.exchange.title,
    description: t.serviceList.exchange.desc,
    features: lang === "ar"
      ? ["أسعار مباشرة", "معالجة فورية", "لا رسوم خفية", "خصومات للكميات"]
      : ["Real-time rates", "Instant processing", "No hidden fees", "Bulk discounts"],
  },
  // ... transfer, corporate ...
];