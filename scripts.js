window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';
  setTimeout(() => loader.style.display = 'none', 5000);
});

AOS.init({
  duration: 1000,
  once: false,
  mirror: true,
  easing: 'ease-in-out'
});

const translations = {
  ar: {
    page_title: "اتحاد طلاب تحيا مصر",
    loading_text: "جاري تحميل الصفحة...",
    hero_title: "مرحباً بكم",
    hero_desc: "في اتحاد طلاب تحيا مصر - مجتمع شبابي للتغيير والإبداع والعمل الجماعي",
    about_title: "من نحن؟",
    about_desc: "كيان شبابي غير ربحي يعمل تحت مظلة وزارة الشباب والرياضة، يهدف إلى تنمية قدرات ومهارات الشباب، وتأهيلهم لسوق العمل من خلال برامج تدريبية وتوعوية متكاملة. يأتي ذلك تماشياً مع استراتيجية مصر 2030 وأهداف التنمية المستدامة، عبر تمكين الشباب ليكونوا شركاء فاعلين في بناء مستقبل الوطن.",
    feature1: "ورش تدريبية",
    feature2: "فعاليات شبابية",
    feature3: "تمثيل طلابي",
    feature1_desc: "تمكين الشباب من اكتساب مهارات قيادية وتقنية حديثة تؤهلهم ليكونوا روّادًا في مجالاتهم ويواكبوا متطلبات سوق العمل.",
    feature2_desc: "تنظيم فعاليات شبابية متكاملة تحت إشراف وزارة الشباب والرياضة، تهدف إلى تعزيز المشاركة المجتمعية، وتنمية الوعي الثقافي، وبناء قدرات الشباب من خلال أنشطة تعليمية، ترفيهية، ورياضية تُسهم في تمكينهم ودمجهم الفاعل في المجتمع.",
    feature3_desc: "تمثيل شبابي فاعل يهدف إلى إيصال صوت الشباب في المحافل الكبرى محليًا ودوليًا، وتسليط الضوء على دورهم الحيوي في نهضة المجتمع وصناعة المستقبل.",
    gallery_title: "معرض الصور",
    cta_title: "انضم إلينا الآن",
    cta_desc: "شاركنا الرحلة وكن جزءاً من التغيير الحقيقي داخل المجتمع.",
    button_text: "سجّل الآن",
    footer_text: "© 2025 اتحاد طلاب تحيا مصر. جميع الحقوق محفوظة.",
    social_title: "منصات اتحاد طلاب تحيا مصر الرسمية",
    president_name: "مصطفى قطامش",
    president_role: "رئيس الاتحاد",
    president_message: "أتقدم باسمي وباسم أعضاء كيان اتحاد طلاب تحيا مصر برؤية طموحة لمستقبل يكون فيه الشباب القوة الدافعة للتغيير والإبداع، حيث نعمل على تمكينهم وتوجيه طاقاتهم نحو بناء مجتمع أكثر تقدمًا واستدامة، ونؤمن بأهمية تطوير مهاراتهم وتوفير المساحات التي تعزز من حضورهم الفعّال، كما نسعى إلى فتح آفاق جديدة تواكب طموحاتهم وتدعم أفكارهم الخلّاقة، ولذلك نشد على أيدي كل شاب يحمل حلمًا ويسعى لصنع الفرق في مجتمعه، لنمضي معًا نحو مستقبل يزدهر بعزيمة الشباب وإرادتهم.",
    download_pdf: "تحميل الكتيب التعريفي",
    ...Object.fromEntries(Array.from({ length: 20 }, (_, i) => [`image${i + 1}`, `صورة رقم ${i + 1}`]))
  },
  en: {
    page_title: "Tahya Misr Student Union",
    loading_text: "Loading the page...",
    hero_title: "Welcome",
    hero_desc: "To the Tahya Misr Student Union – a youth community for change, creativity, and teamwork.",
    about_title: "Who Are We?",
    about_desc: "A non-profit youth entity under the Ministry of Youth and Sports, aiming to develop the skills and capabilities of youth and prepare them for the labor market through integrated training and awareness programs. This aligns with Egypt's Vision 2030 and sustainable development goals.",
    feature1: "Training Workshops",
    feature2: "Youth Activities",
    feature3: "Youth Representation",
    feature1_desc: "Empowering youth to acquire modern leadership and technical skills that qualify them to be pioneers in their fields and meet labor market demands.",
    feature2_desc: "Organizing comprehensive youth events under the supervision of the Ministry of Youth and Sports, aimed at enhancing community engagement, promoting cultural awareness, and building the capacities of young people through educational, recreational, and athletic activities that empower them and foster their active integration into society.",
    feature3_desc: "Active youth representation that aims to amplify the voices of young people in major national and international forums, while highlighting their vital role in driving societal progress and shaping the future.",
    gallery_title: "Gallery",
    cta_title: "Join Us Now",
    cta_desc: "Join us on the journey and be part of real change within the community.",
    button_text: "Apply Now",
    footer_text: "© 2025 Tahya Misr Student Union. All rights reserved.",
    social_title: "Official Social Platforms of Tahya Misr Student Union",
    president_name: "Mostafa Katamesh",
    president_role: "Union President",
    president_message: "On behalf of myself and the members of the Tahya Misr Student Union, I present a bold vision for a future where youth are the driving force of change and creativity. We aim to empower them and guide their energy towards building a more advanced and sustainable society. We believe in developing their skills and providing platforms that enhance their active presence. We also strive to open new horizons that match their ambitions and support their creative ideas. Therefore, we stand with every young person who carries a dream and seeks to make a difference in their community. Let us move together towards a future that flourishes with the determination and will of youth.",
    download_pdf: "Download Introductory Booklet",
    ...Object.fromEntries(Array.from({ length: 20 }, (_, i) => [`image${i + 1}`, `Image #${i + 1}`]))
  }
};

const langBtn = document.getElementById("langBtn");
let currentLang = "ar";

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  langBtn.innerText = currentLang === "ar" ? "EN" : "AR";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
});
