const menuToggle = document.querySelector('[data-menu-toggle]');
const siteNav = document.querySelector('[data-site-nav]');
const contactForm = document.querySelector('[data-contact-form]');
const yearSlot = document.querySelector('[data-year]');
const mainScript = document.querySelector('script[src$="main.js"]');
const assetBase = mainScript?.getAttribute('src')?.replace(/js\/main\.js$/, '') ?? 'assets/';

document.body.classList.add('has-motion');

const projectVisuals = [
  { keyword: 'Теплич', src: `${assetBase}img/project-greenhouse.svg` },
  { keyword: 'ЦОД', src: `${assetBase}img/project-datacenter.svg` },
  { keyword: 'Котель', src: `${assetBase}img/project-boiler.svg` },
  { keyword: 'Очист', src: `${assetBase}img/project-treatment.svg` },
  { keyword: 'Газ', src: `${assetBase}img/project-gas.svg` },
  { keyword: 'Насос', src: `${assetBase}img/project-treatment.svg` },
  { keyword: 'Холод', src: `${assetBase}img/project-datacenter.svg` },
  { keyword: 'Склад', src: `${assetBase}img/project-industrial.svg` },
  { keyword: 'Производ', src: `${assetBase}img/project-industrial.svg` },
];

const heroEnhancements = {
  'services/industrial-automation.html': {
    image: `${assetBase}img/services-overview.svg`,
    alt: 'Схема промышленной автоматизации и связи инженерных подсистем',
    title: 'Фокус услуги',
    listType: 'summary-list',
    items: [
      'Системы управления и шкафы автоматики',
      'Полевые сигналы и исполнительные механизмы',
      'Увязка с силовой частью и КИПиА',
      'Подготовка к пуску и диспетчеризации',
    ],
  },
  'services/industrial-electrical-installation.html': {
    image: `${assetBase}img/project-industrial.svg`,
    alt: 'Инженерная схема электромонтажа промышленного объекта',
    title: 'Что важно на площадке',
    listType: 'summary-list',
    items: [
      'Кабельные трассы и подключение оборудования',
      'Силовые и контрольные линии',
      'Совместимость с автоматикой и КИПиА',
      'Подготовка цепей к запуску',
    ],
  },
  'services/kipia-installation.html': {
    image: `${assetBase}img/engineering-system.svg`,
    alt: 'Схема монтажа КИПиА, датчиков и приборных цепей',
    title: 'Состав работ',
    listType: 'chip-list',
    items: ['Датчики', 'Приборные линии', 'Шкафы', 'Сигналы', 'Интеграция'],
  },
  'services/commissioning.html': {
    image: `${assetBase}img/workflow-map.svg`,
    alt: 'Карта этапов пусконаладочных работ и запуска объекта',
    title: 'Результат этапа ПНР',
    listType: 'summary-list',
    items: [
      'Проверенные сигналы и направления',
      'Отработанные блокировки и защиты',
      'Тестирование режимов и сценариев',
      'Готовность объекта к сдаче',
    ],
  },
  'typical-objects/index.html': {
    image: `${assetBase}img/projects-overview.svg`,
    alt: 'Схема типовых инженерных объектов компании',
    title: 'Основные сценарии',
    listType: 'chip-list',
    items: ['Котельные', 'Теплицы', 'Очистные', 'ЦОД', 'Газовые объекты'],
  },
  'typical-objects/boiler-houses.html': {
    image: `${assetBase}img/project-boiler.svg`,
    alt: 'Схема автоматизации котельной и тепломеханического контура',
    title: 'Ключевые узлы',
    listType: 'chip-list',
    items: ['Котлы', 'Насосы', 'Защиты', 'КИПиА', 'Диспетчеризация'],
  },
  'typical-objects/greenhouse-complexes.html': {
    image: `${assetBase}img/project-greenhouse.svg`,
    alt: 'Схема инженерных систем тепличного комплекса',
    title: 'Контуры комплекса',
    listType: 'chip-list',
    items: ['Микроклимат', 'Полив', 'Вентиляция', 'Отопление', 'Учет'],
  },
  'typical-objects/wastewater-treatment.html': {
    image: `${assetBase}img/project-treatment.svg`,
    alt: 'Схема очистных сооружений и насосных групп',
    title: 'Технологические контуры',
    listType: 'chip-list',
    items: ['Насосные', 'Уровни', 'Аналитика', 'Телеметрия', 'Аварийные режимы'],
  },
  'typical-objects/data-centers.html': {
    image: `${assetBase}img/project-datacenter.svg`,
    alt: 'Схема инженерного мониторинга дата-центра',
    title: 'Инженерный профиль',
    listType: 'chip-list',
    items: ['Мониторинг', 'Питание', 'BMS', 'Сигнализация', 'Резервирование'],
  },
  'typical-objects/gas-distribution.html': {
    image: `${assetBase}img/project-gas.svg`,
    alt: 'Схема газораспределительного объекта с автоматикой и защитами',
    title: 'Что критично',
    listType: 'chip-list',
    items: ['Давление', 'Блокировки', 'Безопасность', 'Телеметрия', 'Сигналы'],
  },
  'regions/rostov-na-donu.html': {
    image: `${assetBase}img/regions-network.svg`,
    alt: 'Схема инженерного покрытия и отраслевого профиля Ростова-на-Дону',
    title: 'Региональный фокус',
    listType: 'chip-list',
    items: ['Промышленность', 'АПК', 'Логистика', 'Коммунальные объекты', 'Наладка'],
  },
  'regions/krasnodar.html': {
    image: `${assetBase}img/regions-network.svg`,
    alt: 'Схема инженерного покрытия и отраслевого профиля Краснодара',
    title: 'Региональный фокус',
    listType: 'chip-list',
    items: ['Теплицы', 'Пищевое производство', 'Склады', 'Холодоснабжение', 'АПК'],
  },
  'regions/stavropol.html': {
    image: `${assetBase}img/regions-network.svg`,
    alt: 'Схема инженерного покрытия и отраслевого профиля Ставрополя',
    title: 'Региональный фокус',
    listType: 'chip-list',
    items: ['Газовая отрасль', 'Водоснабжение', 'Переработка', 'Полевые системы', 'Телеметрия'],
  },
  'regions/volgograd.html': {
    image: `${assetBase}img/regions-network.svg`,
    alt: 'Схема инженерного покрытия и отраслевого профиля Волгограда',
    title: 'Региональный фокус',
    listType: 'chip-list',
    items: ['Промышленность', 'Энергетика', 'Очистные', 'Производственные линии', 'Учет'],
  },
  'regions/astrakhan.html': {
    image: `${assetBase}img/regions-network.svg`,
    alt: 'Схема инженерного покрытия и отраслевого профиля Астрахани',
    title: 'Региональный фокус',
    listType: 'chip-list',
    items: ['Газовые объекты', 'Водоканал', 'Насосные', 'Полевые узлы', 'Удаленный контроль'],
  },
};

const getPageKey = () => {
  const parts = window.location.pathname.toLowerCase().split('/').filter(Boolean);
  const fileName = parts.at(-1) || 'index.html';
  const parentName = parts.at(-2);
  if (parentName && ['services', 'typical-objects', 'regions'].includes(parentName)) {
    return `${parentName}/${fileName}`;
  }

  return fileName;
};

const enhancePageHero = () => {
  const pageHeroPanel = document.querySelector('.page-hero .hero-panel:not(.page-hero-shell)');
  if (!(pageHeroPanel instanceof HTMLElement)) {
    return;
  }

  const config = heroEnhancements[getPageKey()];
  if (!config) {
    return;
  }

  const existingNodes = Array.from(pageHeroPanel.childNodes);
  const copy = document.createElement('div');
  copy.className = 'page-hero-copy';
  existingNodes.forEach((node) => copy.appendChild(node));

  const side = document.createElement('div');
  side.className = 'page-hero-side';

  const visual = document.createElement('div');
  visual.className = 'page-hero-visual';
  const image = document.createElement('img');
  image.src = config.image;
  image.alt = config.alt;
  visual.appendChild(image);

  const summary = document.createElement('aside');
  summary.className = 'summary-panel';
  const summaryTitle = document.createElement('h2');
  summaryTitle.textContent = config.title;
  summary.appendChild(summaryTitle);

  const list = document.createElement('ul');
  list.className = config.listType;
  config.items.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  });

  summary.appendChild(list);
  side.append(visual, summary);

  pageHeroPanel.classList.add('page-hero-shell');
  pageHeroPanel.replaceChildren(copy, side);
};

enhancePageHero();

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement) || !target.closest('a')) {
      return;
    }

    siteNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
}

document.querySelectorAll('.portfolio-card').forEach((card) => {
  const title = card.querySelector('h3');
  const image = card.querySelector('img');
  if (!(title instanceof HTMLElement) || !(image instanceof HTMLImageElement)) {
    return;
  }

  const match = projectVisuals.find((item) => title.textContent?.includes(item.keyword));
  if (match) {
    image.src = match.src;
  }
});

const revealItems = document.querySelectorAll(
  '.hero-panel, .card, .service-card, .object-card, .region-card, .article-card, .portfolio-card, .process-card, .contact-card, .info-box, .photo-card, .highlight, .cta-strip, .table-like'
);

revealItems.forEach((item) => item.classList.add('reveal-on-scroll'));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -6% 0px',
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const notice = contactForm.querySelector('[data-form-notice]');
    if (notice) {
      notice.textContent = 'Форма работает как статическая заглушка. Подключите обработчик на стороне сервера или CRM.';
    }
    contactForm.reset();
  });
}

if (yearSlot) {
  yearSlot.textContent = String(new Date().getFullYear());
}