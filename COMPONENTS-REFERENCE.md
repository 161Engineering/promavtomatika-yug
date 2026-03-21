# Быстрый справочник компонентов

Краткая шпаргалка по основным компонентам для быстрого использования.

---

## 🏗️ Базовая структура секции

```html
<section class="section">
    <div class="container">
        <div class="section-header">
            <div>
                <span class="section-tag">Метка</span>
                <h2>Заголовок</h2>
            </div>
            <p class="section-note">Пояснение</p>
        </div>
        <div class="[GRID-CLASS]">
            <!-- Карточки -->
        </div>
    </div>
</section>
```

---

## 🎴 Шаблоны карточек

### Competency Card (3 колонки)
```html
<div class="competency-grid">
    <article class="competency-card">
        <span class="icon-badge" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" 
                 stroke-linecap="round" stroke-linejoin="round">
                <!-- SVG path -->
            </svg>
        </span>
        <h3>Заголовок</h3>
        <p>Описание.</p>
        <a class="competency-link" href="#">Подробнее</a>
    </article>
</div>
```

### Advantage Card (3 колонки)
```html
<div class="advantage-grid">
    <article class="advantage-card">
        <span class="icon-badge" aria-hidden="true">
            <svg viewBox="0 0 24 24"><!-- SVG --></svg>
        </span>
        <h3>Преимущество</h3>
        <p>Описание.</p>
    </article>
</div>
```

### Project Card (3 колонки)
```html
<div class="project-preview-grid">
    <article class="project-preview-card">
        <div class="project-photo-card">
            <img src="images/project-name.jpg" alt="..." 
                 width="1120" height="720" loading="lazy" decoding="async">
        </div>
        <h3>Название проекта</h3>
        <p>Описание.</p>
        <a class="button button-secondary" href="#">Смотреть</a>
    </article>
</div>
```

### Article Card (3 колонки)
```html
<div class="article-preview-grid">
    <article class="article-card">
        <div class="article-photo-card">
            <img src="images/article-name.jpg" alt="..." 
                 width="1120" height="720" loading="lazy" decoding="async">
        </div>
        <div class="article-card-body">
            <span class="card-kicker">Статья</span>
            <h3>Заголовок статьи</h3>
            <p>Краткое описание.</p>
            <a class="button button-secondary" href="#">Читать</a>
        </div>
    </article>
</div>
```

### Workflow Step (5 колонок)
```html
<div class="timeline-grid">
    <article class="workflow-step">
        <span class="step-number">1</span>
        <h3>Этап</h3>
        <p>Описание этапа.</p>
    </article>
</div>
```

### Region Card (3 колонки)
```html
<div class="region-grid">
    <article class="region-card">
        <h3><a href="regions/region.html">Регион</a></h3>
        <p>Описание специфики.</p>
    </article>
</div>
```

---

## 🔘 Кнопки

```html
<!-- Основная -->
<a class="button button-primary" href="#">Связаться</a>

<!-- Вторичная -->
<a class="button button-secondary" href="#">Подробнее</a>
```

---

## 🖼️ Изображения

### Шаблон с IMAGE PROMPT
```html
<!-- IMAGE PROMPT:
realistic industrial [описание сцены], cinematic lighting, high detail
-->
<div class="[тип]-photo-card">
    <img src="images/filename.jpg" 
         alt="Детальное описание на русском"
         width="1120" height="720" 
         loading="lazy" decoding="async">
</div>
```

### Типы контейнеров
- `hero-photo-card` — hero-изображения
- `engineer-photo-card` — aspect-ratio: 4/5
- `project-photo-card` — aspect-ratio: 14/9
- `article-photo-card` — aspect-ratio: 14/9

---

## 📊 Сводка по grid

| Grid | Колонки | Gap |
|------|---------|-----|
| `competency-grid` | 3 | 22px |
| `advantage-grid` | 3 | 22px |
| `timeline-grid` | 5 | 22px |
| `project-preview-grid` | 3 | 22px |
| `article-preview-grid` | 3 | 22px |
| `region-grid` | 3 | 22px |
| `object-showcase-grid` | 12 (span 4/6) | 22px |

---

## 🎨 Стандартные классы

### Текстовые метки
- `.section-tag` — метка секции (uppercase, оранжевый)
- `.card-kicker` — метка карточки (uppercase, оранжевый)
- `.eyebrow` — надзаголовок
- `.lead` — лид-параграф
- `.section-note` — пояснительный текст (приглушенный)

### Списки
- `.hero-subpoints` — pill-теги в hero
- `.signal-grid` — pill-теги
- `.summary-list` — список с маркерами
- `.check-list` — список с точками
- `.engineer-facts` — список фактов

### Иконки
- `.icon-badge` — контейнер для SVG иконок в карточках

---

## 🎯 Border Radius

- `10px` — мелкие элементы
- `12px` — средние кнопки
- `16px` — фото, KPI-блоки
- `22px` — карточки, панели (var(--radius))
- `999px` — pill-элементы

---

## 🎨 Цвета

```css
/* Акценты */
--accent: #ff7a18
--accent-hover: #ff8f3c

/* Темные */
--brand-navy: #1e2a38
--brand-graphite: #3f4a54

/* Нейтральные */
--text: #1f2731
--muted: #586574
```

---

## ✅ Быстрый чек-лист

При добавлении контента:
- [ ] Section-header с section-tag + h2 + section-note?
- [ ] Grid вложен в container (не объединен)?
- [ ] Изображения с IMAGE PROMPT?
- [ ] Width/height/alt у изображений?
- [ ] Кнопки с правильными классами?
- [ ] Hover-эффекты работают?
- [ ] Иконки в icon-badge?

---

**См. также:** [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) — полная документация
