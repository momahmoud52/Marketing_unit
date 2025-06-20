// إخفاء اللودر بعد 3 ثوانٍ من التحميل
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 3000);
  });
  
  // تفعيل مكتبة AOS
  AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
    easing: 'ease-in-out'
  });
  
  // الترجمة (عربي / إنجليزي)
  const translations = {
    ar: {
      hero_title: "مرحباً بكم",
      hero_desc: "في اتحاد طلاب تحيا مصر - مجتمع طلابي للتغيير والإبداع والعمل الجماعي",
      about_title: "من نحن؟",
      about_desc: "نحن مجموعة طلابية تهدف إلى تمكين الطلبة في مختلف المجالات وتنمية قدراتهم ومواهبهم من خلال أنشطة تعليمية وثقافية ورياضية.",
      feature1: "ورش تدريبية",
      feature2: "فعاليات طلابية",
      feature3: "تمثيل طلابي",
      gallery_title: "معرض الصور",
      cta_title: "انضم إلينا الآن",
      cta_desc: "شاركنا الرحلة وكن جزءاً من التغيير الحقيقي داخل الجامعة.",
      button_text: "سجّل الآن",
      ...Object.fromEntries(Array.from({ length: 20 }, (_, i) => [`image${i + 1}`, `صورة رقم ${i + 1}`]))
    },
    en: {
      hero_title: "Welcome",
      hero_desc: "To the Tahya Misr Student Union – a community of change and creativity.",
      about_title: "Who Are We?",
      about_desc: "We are a student-led group empowering peers through cultural, academic, and leadership activities.",
      feature1: "Training Workshops",
      feature2: "Student Events",
      feature3: "Student Representation",
      gallery_title: "Gallery",
      cta_title: "Join Us Now",
      cta_desc: "Be part of the change inside your university.",
      button_text: "Apply Now",
      ...Object.fromEntries(Array.from({ length: 20 }, (_, i) => [`image${i + 1}`, `Image #${i + 1}`]))
    }
  };
  
  // زر اللغة
  const langBtn = document.getElementById("langBtn");
  let currentLang = "ar";
  
  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "ar" ? "en" : "ar";
    langBtn.innerText = currentLang === "ar" ? "EN" : "AR";
  
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = translations[currentLang][key] || el.textContent;
    });
  });
  