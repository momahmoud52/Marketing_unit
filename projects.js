// تفعيل AOS
AOS.init();

// الترجمة
const translations = {
  ar: {
    projects_page_title: "المبادرات والمشاريع الكبرى",
    projects_header: "المبادرات والمشاريع الكبرى",
    qr_text: "امسح الرمز لمزيد من التفاصيل",
    back_home: "العودة للرئيسية",
    footer_text: "© 2025 اتحاد طلاب تحيا مصر. جميع الحقوق محفوظة.",

    proj1_title: "مبادرة وقاية تحيا مصر",
    proj1_desc: "مبادرة مجتمعية شبابية تهدف إلى تعزيز الوعي الصحي والوقائي لدى فئات المجتمع، خاصة في ما يتعلق بأهمية الكشف المبكر عن سرطان الثدي، والتوعية بدور الدولة في دعم صحة المرأة المصرية. تسعى المبادرة إلى بناء مجتمع واعٍ بالصحة العامة، وتشجيع السلوكيات الوقائية، والمشاركة في حملات ميدانية وفعاليات تثقيفية، في إطار دعم أهداف التنمية المستدامة ورؤية مصر 2030.",
    
    proj2_title: "مبادرة كنوز الـ27",
    proj2_desc: "مبادرة ثقافية وطنية يقودها الشباب لتعزيز الوعي الأثري والتاريخي في جميع محافظات الجمهورية، والتصدي للخرافات والشائعات المرتبطة بالتراث المصري. تعتمد المبادرة على زيارات ميدانية، محاضرات علمية، وندوات توعوية تهدف إلى ربط الأجيال الشابة بجذورهم التاريخية، وغرس روح الانتماء والفخر بالهوية الوطنية، بطريقة مبسطة وجذابة.",
    
    proj3_title: "المنتدى الوطني لبناء الوعي",
    proj3_desc: "منصة شبابية حوارية تهدف إلى نشر وتعزيز الوعي المجتمعي والسياسي والفكري بين الشباب المصري. يناقش المنتدى موضوعات الساعة مثل الأمن القومي، التنمية، حروب الجيل الرابع، وتأثير وسائل التواصل على تشكيل الوعي. يُعد المنتدى مسارًا لتأهيل قادة رأي شبابي، وتمكينهم من صياغة رؤى تخدم الوطن، والمساهمة في تحقيق نهضة فكرية متكاملة.",
    
    proj4_title: "المبادرة الوطنية للبناء والتمكين",
    proj4_desc: "تسعى هذه المبادرة إلى بناء قدرات الشباب المصري، وتمكينه من خلال التدريب العملي، وورش العمل التفاعلية، والتوجيه المهني المباشر. ترتكز المبادرة على تطوير المهارات القيادية، وتعزيز ثقافة العمل الجماعي، والمشاركة المجتمعية الفعالة، مما يُساهم في إعداد جيل شاب مؤهل لدعم خطط الدولة في الابتكار وريادة الأعمال، والمشاركة الفعالة في تنفيذ رؤية مصر المستقبلية.",
    
    proj5_title: "القمة الشبابية العربية",
    proj5_desc: "منصة إقليمية رائدة تجمع الشباب العربي من مختلف الدول لتعزيز الحوار المشترك وتبادل الخبرات حول قضايا الأمة العربية. تُعد القمة فرصة ذهبية لدعم وتمكين الشباب العربي، وتفعيل دورهم في التنمية، من خلال جلسات تفاعلية، مبادرات شبابية، ومشاريع ريادية تهدف لبناء مستقبل مشترك يقوم على الوحدة والابتكار والوعي بالقضايا المصيرية التي تواجه المجتمعات العربية.",
    
    proj6_title: "المبادرة الوطنية لرائدات مصر",
    proj6_desc: "مبادرة شاملة موجهة لدعم وتمكين الفتيات والسيدات المصريات في مختلف القطاعات. توفر المبادرة برامج تدريبية تخصصية، ورش عمل عملية، ومساحات حوارية لتأهيل النساء وتمكينهن من لعب دور قيادي ومؤثر في التنمية الاقتصادية والاجتماعية. تنطلق المبادرة من إيمان راسخ بأهمية مشاركة المرأة في صنع القرار، وبناء أسرة ومجتمع قوي قائم على العدالة والوعي والثقة بالنفس.",
    
    proj7_title: "منتدى الطريق إلى الجمهورية الجديدة",
    proj7_desc: "ملتقى شبابي وطني يجمع نخبة من الشباب من مختلف المحافظات، لمناقشة التحديات الوطنية وصياغة الرؤى والمبادرات المستقبلية. يُنظم المنتدى من خلال جلسات حوارية وورش عمل تجمع بين الشباب والخبراء والمتخصصين، وتتناول موضوعات مثل حقوق الإنسان، الأمن القومي، التغير المناخي، التنمية المستدامة، ومشاركة الشباب في صياغة السياسات العامة، ضمن مسار بناء الجمهورية الجديدة.",
    
    proj8_title: "اتحاد مدارس تحيا مصر",
    proj8_desc: "كيان شبابي تأسس ليجمع طلاب المدارس على مستوى الجمهورية في إطار موحد، يُعزز الانتماء الوطني والوعي المجتمعي في سن مبكرة. يُنظم الاتحاد فعاليات، مسابقات، وبرامج تعليمية تهدف إلى تنمية الشخصية القيادية، دعم المهارات الناعمة، وبناء روح العمل الجماعي بين شباب المدارس، ليكونوا نواة لجيل وطني واعٍ قادر على المشاركة في التنمية.",
    
    proj9_title: "جريدة تحيا مصر",
    proj9_desc: "منصة إعلامية شبابية تهدف إلى نقل أنشطة وفعاليات المبادرات والكيانات الشبابية بمهنية وموضوعية. تسعى الجريدة إلى بناء جيل من الصحفيين الشباب الواعدين، وتدريبهم على ممارسة الإعلام الهادف، وتعزيز ثقافة التعبير والنقد البناء، مما يجعلها منبرًا وطنيًا لصوت الشباب وأفكارهم ورؤيتهم نحو مستقبل أفضل.",
    
    proj10_title: "راديو تحيا مصر",
    proj10_desc: "إذاعة شبابية متكاملة تسعى لتقديم محتوى إعلامي هادف يعبر عن طموحات الشباب، ويناقش قضاياهم اليومية بأسلوب عصري تفاعلي. يقدم الراديو برامج متنوعة تشمل الثقافة، التعليم، ريادة الأعمال، الصحة، والفن، كما يتيح الفرصة للشباب للمشاركة المباشرة وصناعة المحتوى، مما يجعله منبرًا حيًا يعكس نبض المجتمع الشبابي المصري.",
    
    proj11_title: "أسرة اتحاد طلاب تحيا مصر",
    proj11_desc: "أسرة طلابية تم تكوينها داخل الأكاديمية المصرية للهندسة وتكنولوجيا المعلومات، وتهدف إلى خدمة الطلاب من خلال تنظيم الأنشطة الطلابية، وتنمية مهاراتهم الأكاديمية والشخصية، وتشجيعهم على المشاركة في الفعاليات الثقافية والاجتماعية والتطوعية داخل الأكاديمية وخارجها."    
    
  },
  en: {
    projects_page_title: "Major Initiatives & Projects",
    projects_header: "Major Initiatives & Projects",
    qr_text: "Scan for more details",
    back_home: "Back to Homepage",
    footer_text: "© 2025 Tahya Misr Student Union. All rights reserved.",

    proj1_title: "Tahia Misr Prevention Initiative",
    proj1_desc: "A community-based youth initiative aiming to promote public health awareness, particularly regarding early detection and prevention of breast cancer. It also highlights the state's efforts to support women's health as part of Egypt's Vision 2030, through outreach campaigns and educational events that encourage preventive behavior and health-conscious practices.",
    
    proj2_title: "Konooz El 27",
    proj2_desc: "A national youth-led cultural initiative focused on spreading archaeological and historical awareness across all Egyptian governorates. Through site visits, lectures, and awareness campaigns, the initiative combats myths and misconceptions while fostering national pride and connection to Egypt’s rich heritage in a simplified and engaging manner.",
    
    proj3_title: "National Forum for Awareness Building",
    proj3_desc: "A youth dialogue platform designed to promote societal, political, and intellectual awareness among young people. It addresses contemporary topics such as national security, development, and fourth-generation warfare, and empowers young voices to contribute ideas that support national progress and intellectual renaissance.",
    
    proj4_title: "National Initiative for Empowerment and Development",
    proj4_desc: "An initiative focused on building youth capacities through practical training, volunteer work, and direct mentorship. It enhances leadership skills and teamwork, aligning with national strategies to prepare an innovative, empowered generation capable of leading future development and driving positive change.",
    
    proj5_title: "Arab Youth Summit",
    proj5_desc: "A pioneering regional platform that unites Arab youth to exchange experiences and discuss key regional issues. The summit empowers young people through initiatives and entrepreneurial programs that strengthen Arab identity, encourage innovation, and promote sustainable development and youth participation in decision-making.",
    
    proj6_title: "National Initiative for Egypt’s Women Leaders",
    proj6_desc: "A comprehensive initiative that supports and empowers Egyptian women across all fields. Through specialized training, interactive workshops, and dialogue spaces, it equips women with the skills and confidence to lead, innovate, and actively participate in the social and economic development of their communities.",
    
    proj7_title: "The Road to the New Republic Forum",
    proj7_desc: "A national forum that brings together youth from across Egypt to engage in discussions with experts and public figures on critical national issues. The forum covers topics such as human rights, national security, climate change, and sustainable development, enabling young people to present their visions and launch impactful initiatives.",
    
    proj8_title: "Tahia Misr Schools Union",
    proj8_desc: "A youth-led entity that unites school students across Egypt in a structured framework to foster national belonging and community awareness. The union organizes activities, competitions, and programs aimed at building leadership skills and encouraging teamwork among youth in early educational stages.",
    
    proj9_title: "Tahia Misr Newspaper",
    proj9_desc: "A youth-run media platform that professionally covers the activities and initiatives of various youth entities. It aims to nurture a new generation of aspiring journalists by providing opportunities to practice constructive journalism, amplifying youth voices, and promoting national awareness.",
    
    proj10_title: "Tahia Misr Radio",
    proj10_desc: "An interactive youth radio platform offering meaningful and modern content that reflects the aspirations and issues of young people. It hosts diverse programs on education, culture, entrepreneurship, health, and the arts, and encourages youth participation in content creation and open dialogue.",
    
    proj11_title: "Tahia Misr Youth Union Core Team",
    proj11_desc: "A student-based group established at the Egyptian Academy for Engineering and Advanced Technology. The family serves as a hub for student engagement, organizing activities, supporting academic and personal development, and encouraging participation in social, cultural, and volunteer initiatives within and beyond the academy."
    
    
  }
};

// اللغة الافتراضية
const langBtn = document.getElementById('langBtn');
let currentLang = 'ar';

// تبديل اللغة عند الضغط
langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  langBtn.textContent = currentLang === 'ar' ? 'EN' : 'AR';
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  applyTranslations();
});

// تطبيق الترجمة على العناصر
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
  document.title = translations[currentLang]["projects_page_title"];
}

// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', applyTranslations);

// زر الرجوع يظهر عند آخر مشروع
window.addEventListener('scroll', () => {
  const lastProject = document.querySelector('.projects-list .project:last-child');
  const navBtn = document.querySelector('.nav-buttons');

  if (lastProject && navBtn) {
    const rect = lastProject.getBoundingClientRect();
    const visible = rect.top < window.innerHeight && rect.bottom >= 0;
    navBtn.style.display = visible ? 'block' : 'none';
  }
});
