// تفعيل AOS
AOS.init();

// الترجمة
const translations = {
  ar: {
    projects_page_title: "المشروعــات و المبادرات المركزية",
    projects_header: "المشروعــات و المبادرات المركزية",
    qr_text: "امسح الرمز لمزيد من التفاصيل",
    back_home: "العودة للرئيسية",
    footer_text: "© 2025 اتحاد طلاب تحيا مصر. جميع الحقوق محفوظة.",

    proj1_title: "منتدى الطريق إلى الجمهورية الجديدة",
proj1_desc: "ملتقى شبابي وطني يجمع نخبة من الشباب من مختلف المحافظات، لمناقشة التحديات الوطنية وصياغة الرؤى والمبادرات المستقبلية. يُنظم المنتدى من خلال جلسات حوارية وورش عمل تجمع بين الشباب والخبراء والمتخصصين، وتتناول موضوعات مثل حقوق الإنسان، الأمن القومي، التغير المناخي، التنمية المستدامة، ومشاركة الشباب في صياغة السياسات العامة، ضمن مسار بناء الجمهورية الجديدة.",

proj2_title: "القمة الشبابية العربية",
proj2_desc: "منصة إقليمية رائدة تجمع الشباب العربي من مختلف الدول لتعزيز الحوار المشترك وتبادل الخبرات حول قضايا الأمة العربية. تُعد القمة فرصة ذهبية لدعم وتمكين الشباب العربي، وتفعيل دورهم في التنمية، من خلال جلسات تفاعلية، مبادرات شبابية، ومشاريع ريادية تهدف لبناء مستقبل مشترك يقوم على الوحدة والابتكار والوعي بالقضايا المصيرية التي تواجه المجتمعات العربية.",

proj3_title: "المنتدى الوطني لبناء الوعي",
proj3_desc: "منصة شبابية حوارية تهدف إلى نشر وتعزيز الوعي المجتمعي والسياسي والفكري بين الشباب المصري. يناقش المنتدى موضوعات الساعة مثل الأمن القومي، التنمية، حروب الجيل الرابع، وتأثير وسائل التواصل على تشكيل الوعي. يُعد المنتدى مسارًا لتأهيل قادة رأي شبابي، وتمكينهم من صياغة رؤى تخدم الوطن، والمساهمة في تحقيق نهضة فكرية متكاملة.",

proj4_title: "المبادرة الوطنية للبناء والتمكين",
proj4_desc: "تسعى هذه المبادرة إلى بناء قدرات الشباب المصري، وتمكينه من خلال التدريب العملي، وورش العمل التفاعلية، والتوجيه المهني المباشر. ترتكز المبادرة على تطوير المهارات القيادية، وتعزيز ثقافة العمل الجماعي، والمشاركة المجتمعية الفعالة، مما يُساهم في إعداد جيل شاب مؤهل لدعم خطط الدولة في الابتكار وريادة الأعمال، والمشاركة الفعالة في تنفيذ رؤية مصر المستقبلية.",

proj5_title: "مبادرة كنوز الـ27",
proj5_desc: "مبادرة ثقافية وطنية يقودها الشباب لتعزيز الوعي الأثري والتاريخي في جميع محافظات الجمهورية، والتصدي للخرافات والشائعات المرتبطة بالتراث المصري. تعتمد المبادرة على زيارات ميدانية، محاضرات علمية، وندوات توعوية تهدف إلى ربط الأجيال الشابة بجذورهم التاريخية، وغرس روح الانتماء والفخر بالهوية الوطنية، بطريقة مبسطة وجذابة.",

proj6_title: "المبادرة الوطنية لرائدات مصر",
proj6_desc: "مبادرة شاملة موجهة لدعم وتمكين الفتيات والسيدات المصريات في مختلف القطاعات. توفر المبادرة برامج تدريبية تخصصية، ورش عمل عملية، ومساحات حوارية لتأهيل النساء وتمكينهن من لعب دور قيادي ومؤثر في التنمية الاقتصادية والاجتماعية. تنطلق المبادرة من إيمان راسخ بأهمية مشاركة المرأة في صنع القرار، وبناء أسرة ومجتمع قوي قائم على العدالة والوعي والثقة بالنفس.",

proj7_title: "مبادرة وقاية تحيا مصر",
proj7_desc: "مبادرة مجتمعية شبابية تهدف إلى تعزيز الوعي الصحي والوقائي لدى فئات المجتمع، خاصة في ما يتعلق بأهمية الكشف المبكر عن سرطان الثدي، والتوعية بدور الدولة في دعم صحة المرأة المصرية. تسعى المبادرة إلى بناء مجتمع واعٍ بالصحة العامة، وتشجيع السلوكيات الوقائية، والمشاركة في حملات ميدانية وفعاليات تثقيفية، في إطار دعم أهداف التنمية المستدامة ورؤية مصر 2030.",

proj8_title: "راديو تحيا مصر",
proj8_desc: "إذاعة شبابية متكاملة تسعى لتقديم محتوى إعلامي هادف يعبر عن طموحات الشباب، ويناقش قضاياهم اليومية بأسلوب عصري تفاعلي. يقدم الراديو برامج متنوعة تشمل الثقافة، التعليم، ريادة الأعمال، الصحة، والفن، كما يتيح الفرصة للشباب للمشاركة المباشرة وصناعة المحتوى، مما يجعله منبرًا حيًا يعكس نبض المجتمع الشبابي المصري.",

proj9_title: "جريدة تحيا مصر",
proj9_desc: "منصة إعلامية شبابية تهدف إلى نقل أنشطة وفعاليات المبادرات والكيانات الشبابية بمهنية وموضوعية. تسعى الجريدة إلى بناء جيل من الصحفيين الشباب الواعدين، وتدريبهم على ممارسة الإعلام الهادف، وتعزيز ثقافة التعبير والنقد البناء، مما يجعلها منبرًا وطنيًا لصوت الشباب وأفكارهم ورؤيتهم نحو مستقبل أفضل.",

proj10_title: "اتحاد مدارس تحيا مصر",
proj10_desc: "كيان شبابي تأسس ليجمع طلاب المدارس على مستوى الجمهورية في إطار موحد، يُعزز الانتماء الوطني والوعي المجتمعي في سن مبكرة. يُنظم الاتحاد فعاليات، مسابقات، وبرامج تعليمية تهدف إلى تنمية الشخصية القيادية، دعم المهارات الناعمة، وبناء روح العمل الجماعي بين شباب المدارس، ليكونوا نواة لجيل وطني واعٍ قادر على المشاركة في التنمية.",

proj11_title: "أسرة اتحاد طلاب تحيا مصر",
proj11_desc: "أسرة طلابية تم تكوينها داخل الأكاديمية المصرية للهندسة وتكنولوجيا المعلومات، وتهدف إلى خدمة الطلاب من خلال تنظيم الأنشطة الطلابية، وتنمية مهاراتهم الأكاديمية والشخصية، وتشجيعهم على المشاركة في الفعاليات الثقافية والاجتماعية والتطوعية داخل الأكاديمية وخارجها."

  },
  en: {
    projects_page_title: "Major National Projects and Initiatives",
    projects_header: "Major National Projects and Initiatives",
    qr_text: "Scan for more details",
    back_home: "Back to Homepage",
    footer_text: "© 2025 Tahya Misr Student Union. All rights reserved.",

    proj1_title: "The Road to the New Republic Forum",
    proj1_desc: "A national youth gathering that brings together young people from various governorates to discuss national challenges and formulate future visions and initiatives. The forum includes dialogue sessions and workshops with experts and specialists, covering topics such as human rights, national security, climate change, sustainable development, and youth participation in shaping public policies — all within the framework of building the New Republic.",
    
    proj2_title: "Arab Youth Summit",
    proj2_desc: "A pioneering regional platform that unites Arab youth from across the region to promote dialogue, share experiences, and address major issues facing the Arab world. The summit empowers young people through interactive sessions, youth-led initiatives, and entrepreneurial projects that aim to build a shared future grounded in unity, innovation, and awareness of common challenges.",
    
    proj3_title: "National Forum for Awareness Building",
    proj3_desc: "A youth-driven dialogue platform designed to enhance societal, political, and intellectual awareness among Egyptian youth. The forum tackles pressing topics such as national security, development, fourth-generation warfare, and the impact of social media on awareness. It aims to prepare a new generation of youth opinion leaders who contribute thoughtful visions to national progress.",
    
    proj4_title: "National Initiative for Empowerment and Development",
    proj4_desc: "This initiative aims to build the capabilities of Egyptian youth through practical training, interactive workshops, and direct mentorship. It focuses on developing leadership skills, promoting teamwork and active civic engagement, and supporting youth participation in innovation and entrepreneurship in alignment with Egypt’s future vision.",
    
    proj5_title: "Konooz El 27",
    proj5_desc: "A national cultural initiative led by youth to promote archaeological and historical awareness across all Egyptian governorates, while confronting myths and misconceptions related to Egyptian heritage. The initiative includes field visits, academic lectures, and awareness seminars designed to connect younger generations with their historical roots and instill a strong sense of national pride.",
    
    proj6_title: "National Initiative for Egypt’s Women Leaders",
    proj6_desc: "A comprehensive initiative focused on supporting and empowering Egyptian girls and women across various sectors. It offers specialized training programs, hands-on workshops, and interactive dialogue spaces to prepare women for leadership roles in economic and social development. The initiative is driven by a deep belief in women’s central role in decision-making, family building, and a more just and aware society.",
    
    proj7_title: "Tahia Misr Prevention Initiative",
    proj7_desc: "A youth community initiative aimed at enhancing public health awareness, particularly regarding the early detection and prevention of breast cancer, while promoting the state's role in supporting women's health. The initiative contributes to building a health-conscious society through educational campaigns and field events, in alignment with Egypt's Vision 2030 and sustainable development goals.",
    
    proj8_title: "Tahia Misr Radio",
    proj8_desc: "A dynamic youth-run radio platform offering meaningful media content that reflects young people’s aspirations and addresses their daily concerns in an engaging and interactive way. It features diverse programming including culture, education, entrepreneurship, health, and the arts, while empowering youth to participate in content creation and community dialogue.",
    
    proj9_title: "Tahia Misr Newspaper",
    proj9_desc: "A youth-led media platform dedicated to covering youth initiatives and entities with professionalism and integrity. The newspaper nurtures aspiring young journalists, encourages constructive expression and critical thinking, and serves as a national platform for youth voices, visions, and engagement with public discourse.",
    
    proj10_title: "Tahia Misr Schools Union",
    proj10_desc: "A nationwide youth entity formed to unify school students across Egypt within a structured framework that promotes early civic awareness and national identity. The union organizes educational events, competitions, and programs aimed at developing leadership qualities, teamwork, and essential soft skills for the next generation.",
    
    proj11_title: "Tahia Misr Students' Union Family",
    proj11_desc: "A student group established within the Egyptian Academy for Engineering and Advanced Technology. The family aims to serve students by organizing educational, cultural, and volunteer activities that enhance their academic and personal development, and foster their active participation within and beyond the campus community."
    
    
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
