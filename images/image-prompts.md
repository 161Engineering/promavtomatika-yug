# Image Prompts For PromAvtomatika Yug

Все изображения ниже привязаны к текущему HTML.
Файлы нужно класть в папку images.

Важно: здесь используются рабочие форматы под реальные слоты сайта.
Если генератор позволяет, ориентируйтесь в первую очередь на aspect ratio, а не на точное число пикселей.

## Рабочие форматы по слотам сайта

- hero на главной: portrait 4:5
- крупные карточки объектов на главной: landscape 16:10
- малые карточки объектов на главной: landscape 5:4
- портрет инженера: portrait 4:5
- превью проектов: landscape 4:3
- превью статей: landscape 5:4

## Общий цветовой гайд

Базовая палитра для всей серии изображений:
- deep navy / dark blue: близко к #1e2a38
- graphite gray: близко к #3f4a54
- steel gray / cool metal neutrals
- controlled white highlights без пересвета
- restrained industrial orange accents: близко к #ff7a18

Общие требования к цвету:
- низкая или средняя насыщенность
- холодная или нейтральная база кадра
- оранжевый использовать только как акцент на индикаторах, СИЗ, маркировке, сигнальных элементах или отражениях
- избегать кислотных цветов, избыточной синевы, слишком теплого желтого света и рекламной цветокоррекции

## Общие требования к композиции

- главный объект кадра держать в центральных 60% ширины и 70% высоты
- не ставить лицо, шкаф автоматики, приборы и ключевые детали вплотную к краям
- избегать кадров, где важная деталь читается только в узкой боковой зоне
- для карточек объектов лучше средние и средне-широкие планы, а не слишком общий панорамный ракурс
- для project и article превью композиция должна оставаться читаемой даже при умеренном crop сверху и снизу
- если генератор поддерживает negative prompt, исключайте: ultra wide panorama, fisheye, exaggerated perspective, empty foreground, subject at edge, tiny distant equipment

## Главная страница

### Hero section

hero-industrial-automation.jpg
size: 1200x1500
aspect ratio: 4:5
orientation: portrait
color characteristics: deep navy, graphite gray, steel gray, controlled white highlights, restrained industrial orange accents, low to medium saturation
used in: index.html, hero section
prompt:
industrial automation engineer inspecting PLC control cabinet inside large industrial plant, cable trays, control modules, realistic engineering photography, cinematic industrial lighting, ultra detailed, professional atmosphere, no marketing staging, vertical composition, subject centered, enough headroom and side breathing room for 4:5 crop, color palette based on deep navy, graphite gray, steel neutrals, controlled white highlights and restrained industrial orange accents

------------------------------------------------

### Типовые объекты

object-boiler-house.jpg
size: 1600x1000
aspect ratio: 16:10
orientation: landscape
color characteristics: dark navy, graphite gray, warm steel tones, neutral whites, restrained industrial orange accents, low saturation
used in: index.html, типовые объекты, крупная карточка Котельные
prompt:
industrial boiler house interior with boilers, pumps, valves, pipe manifolds and automation control cabinets, realistic industrial engineering photography, cinematic industrial lighting, high detail, professional maintenance environment, medium-wide composition, key equipment centered, safe crop for 16:10 card, color palette based on dark navy, graphite gray, warm steel tones, neutral whites and restrained industrial orange accents

------------------------------------------------

object-wastewater-treatment.jpg
size: 1600x1000
aspect ratio: 16:10
orientation: landscape
color characteristics: cool steel-blue, graphite gray, concrete neutrals, muted whites, restrained industrial orange accents, low saturation
used in: index.html, типовые объекты, крупная карточка Очистные сооружения
prompt:
wastewater treatment facility with pumping systems, steel platforms, valves, pipe galleries and automation cabinets, realistic engineering photography, cinematic lighting, high detail, industrial atmosphere, medium-wide composition, central subject grouping, safe crop for 16:10 card, color palette based on cool steel-blue, graphite gray, concrete neutrals, muted whites and restrained industrial orange accents

------------------------------------------------

object-greenhouse-complex.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: restrained industrial green, deep navy, graphite gray, neutral whites, soft orange accents, medium-low saturation
used in: index.html, типовые объекты, малая карточка Тепличные комплексы
prompt:
large modern greenhouse complex with automation systems, irrigation pipes, climate control equipment, cable trays, service corridor, realistic industrial agriculture engineering photography, cinematic lighting, high detail, compact landscape composition, central perspective, safe crop for 5:4 card, color palette based on restrained industrial green, deep navy, graphite gray, neutral whites and soft industrial orange accents

------------------------------------------------

object-pumping-station.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: cool steel-blue, graphite gray, stainless metal tones, neutral whites, restrained industrial orange accents, low saturation
used in: index.html, типовые объекты, малая карточка Насосные станции
prompt:
industrial pumping station interior with pumps, valves, pressure gauges, stainless pipelines and control cabinet, realistic engineering photography, cinematic industrial lighting, high detail, compact landscape composition, main pump group and control cabinet centered, safe crop for 5:4 card, color palette based on cool steel-blue, graphite gray, stainless metal tones, neutral whites and restrained industrial orange accents

------------------------------------------------

object-data-center.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: deep navy, graphite gray, cool steel-blue, controlled white highlights, restrained industrial orange accents, low saturation
used in: index.html, типовые объекты, малая карточка ЦОД
prompt:
modern data center engineering room with cable trays, monitoring equipment, UPS infrastructure, control panels and automation cabinets, realistic industrial photography, cinematic lighting, high detail, compact landscape composition, central aisle and equipment kept away from extreme edges, safe crop for 5:4 card, color palette based on deep navy, graphite gray, cool steel-blue, controlled white highlights and restrained industrial orange accents

------------------------------------------------

### Опыт инженера

engineer-kipia-profile.jpg
size: 1000x1250
aspect ratio: 4:5
orientation: portrait
color characteristics: deep navy, graphite gray, neutral skin tones, steel neutrals, restrained industrial orange accents, low to medium saturation
used in: index.html, блок Опыт инженера; about.html, фото инженера
prompt:
industrial automation engineer wearing helmet and safety glasses standing near PLC control cabinet inside factory, realistic engineering portrait, cinematic industrial lighting, detailed textures, professional industrial atmosphere, vertical composition, upper body centered, safe crop for 4:5 portrait slot, color palette based on deep navy, graphite gray, neutral skin tones, steel neutrals and restrained industrial orange accents

------------------------------------------------

### Реализованные проекты

project-greenhouse-complex.jpg
size: 1400x1050
aspect ratio: 4:3
orientation: landscape
color characteristics: restrained industrial green, deep navy, graphite gray, neutral whites, soft orange accents, medium-low saturation
used in: index.html, проекты, Тепличный комплекс 38 га; projects.html, карточки тепличных проектов
prompt:
large greenhouse complex with automation systems, climate equipment, cable trays, irrigation nodes and engineering staff, realistic industrial agriculture photography, cinematic lighting, high detail, medium landscape composition, central subject safe for 4:3 crop, color palette based on restrained industrial green, deep navy, graphite gray, neutral whites and soft industrial orange accents

------------------------------------------------

project-data-center.jpg
size: 1400x1050
aspect ratio: 4:3
orientation: landscape
color characteristics: deep navy, graphite gray, cool steel-blue, controlled white highlights, restrained industrial orange accents, low saturation
used in: index.html, проекты, ЦОД; projects.html, карточки ЦОД и инженерного мониторинга
prompt:
data center engineering zone with monitoring panels, control cabinets, cable systems, HVAC support equipment, realistic industrial photography, cinematic lighting, ultra detailed, medium landscape composition, central subject safe for 4:3 crop, color palette based on deep navy, graphite gray, cool steel-blue, controlled white highlights and restrained industrial orange accents

------------------------------------------------

project-treatment-facility.jpg
size: 1400x1050
aspect ratio: 4:3
orientation: landscape
color characteristics: cool steel-blue, graphite gray, concrete neutrals, muted whites, restrained industrial orange accents, low saturation
used in: index.html, проекты, Очистные сооружения; projects.html, карточки очистных сооружений
prompt:
industrial wastewater treatment facility with pumps, railings, pipe systems, instrumentation and automation cabinets, realistic engineering photography, cinematic industrial lighting, high detail, medium landscape composition, central subject safe for 4:3 crop, color palette based on cool steel-blue, graphite gray, concrete neutrals, muted whites and restrained industrial orange accents

------------------------------------------------

project-boiler-house.jpg
size: 1400x1050
aspect ratio: 4:3
orientation: landscape
color characteristics: dark navy, graphite gray, warm steel tones, neutral whites, restrained industrial orange accents, low saturation
used in: index.html, проекты, Промышленные котельные; projects.html, карточки котельных
prompt:
industrial boiler house interior with pumps, valves, gas lines, pressure sensors and control cabinets, realistic engineering photography, cinematic industrial lighting, high detail, medium landscape composition, central subject safe for 4:3 crop, color palette based on dark navy, graphite gray, warm steel tones, neutral whites and restrained industrial orange accents

------------------------------------------------

project-gas-distribution.jpg
size: 1400x1050
aspect ratio: 4:3
orientation: landscape
color characteristics: dark navy, graphite gray, muted metallic tones, controlled amber highlights, restrained industrial orange accents, low saturation
used in: projects.html, карточки газораспределительных объектов
prompt:
gas distribution station with piping, regulators, safety valves, outdoor industrial equipment and automation cabinet, realistic engineering photography, cinematic lighting, high detail, secure industrial atmosphere, medium landscape composition, central subject safe for 4:3 crop, color palette based on dark navy, graphite gray, muted metallic tones, controlled amber highlights and restrained industrial orange accents

------------------------------------------------

project-pumping-station.jpg
size: 1400x1050
aspect ratio: 4:3
orientation: landscape
color characteristics: cool steel-blue, graphite gray, stainless metal tones, neutral whites, restrained industrial orange accents, low saturation
used in: projects.html, карточки насосных станций
prompt:
industrial pumping station with pump groups, pipelines, pressure sensors, valves and electrical control cabinets, realistic engineering photography, cinematic industrial lighting, high detail, medium landscape composition, central subject safe for 4:3 crop, color palette based on cool steel-blue, graphite gray, stainless metal tones, neutral whites and restrained industrial orange accents

------------------------------------------------

project-industrial-line.jpg
size: 1400x1050
aspect ratio: 4:3
orientation: landscape
color characteristics: deep navy, graphite gray, steel gray, neutral whites, restrained industrial orange accents, low to medium saturation
used in: projects.html, карточки производственных линий и складских инженерных узлов
prompt:
industrial production line with cable trays, sensors, motor control cabinets and engineering service zone, realistic factory photography, cinematic industrial lighting, high detail, medium landscape composition, central subject safe for 4:3 crop, color palette based on deep navy, graphite gray, steel gray, neutral whites and restrained industrial orange accents

------------------------------------------------

## Статьи

### Главная и индекс статей используют эти же файлы

promyshlennaya-avtomatizatsiya-chto-vhodit.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: deep navy, graphite gray, steel gray, controlled white highlights, restrained industrial orange accents, low to medium saturation
used in: index.html, превью статьи; articles/index.html, карточка статьи
prompt:
open industrial automation cabinet with PLC modules, relays, terminal blocks and labeled wiring, realistic engineering photography, cinematic industrial lighting, high detail, compact landscape composition, central cabinet safe for 5:4 crop, color palette based on deep navy, graphite gray, steel gray, controlled white highlights and restrained industrial orange accents

------------------------------------------------

etapy-vnedreniya-avtomatizatsii.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: deep navy, graphite gray, steel gray, neutral whites, restrained industrial orange accents, low to medium saturation
used in: articles/index.html, карточка статьи
prompt:
engineering team reviewing industrial automation rollout plan near construction site and control equipment, realistic engineering photography, cinematic lighting, high detail, compact landscape composition, key figures and documents centered, safe for 5:4 crop, color palette based on deep navy, graphite gray, steel gray, neutral whites and restrained industrial orange accents

------------------------------------------------

avtomatizatsiya-vs-dispetcherizatsiya.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: deep navy, graphite gray, cool steel-blue, controlled white highlights, restrained industrial orange accents, low saturation
used in: articles/index.html, карточка статьи
prompt:
split industrial scene showing local control cabinet and remote dispatch workstation with SCADA screens, realistic engineering photography, cinematic industrial lighting, high detail, compact landscape composition, both halves balanced in central frame, safe for 5:4 crop, color palette based on deep navy, graphite gray, cool steel-blue, controlled white highlights and restrained industrial orange accents

------------------------------------------------

modernizatsiya-avtomatizatsii.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: deep navy, graphite gray, aged steel tones, neutral whites, restrained industrial orange accents, low saturation
used in: articles/index.html, карточка статьи
prompt:
engineers modernizing old industrial control cabinet with new PLC modules and wiring, realistic retrofit engineering photography, cinematic lighting, high detail, compact landscape composition, retrofit action centered, safe for 5:4 crop, color palette based on deep navy, graphite gray, aged steel tones, neutral whites and restrained industrial orange accents

------------------------------------------------

montazh-kipia.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: deep navy, graphite gray, steel gray, controlled white highlights, restrained industrial orange accents, low to medium saturation
used in: articles/index.html, карточка статьи
prompt:
instrumentation technician installing sensors and connecting signal cables on industrial piping, realistic engineering photography, cinematic industrial lighting, high detail, compact landscape composition, hands and sensor area centered, safe for 5:4 crop, color palette based on deep navy, graphite gray, steel gray, controlled white highlights and restrained industrial orange accents

------------------------------------------------

oshibki-montazha-kipia.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: graphite gray, deep navy, muted metallic tones, neutral whites, restrained industrial orange accents, low saturation
used in: articles/index.html, карточка статьи
prompt:
industrial engineer inspecting incorrect sensor wiring and cable labeling in instrumentation cabinet, realistic troubleshooting photography, cinematic industrial lighting, high detail, compact landscape composition, wiring fault area centered, safe for 5:4 crop, color palette based on graphite gray, deep navy, muted metallic tones, neutral whites and restrained industrial orange accents

------------------------------------------------

nastroyka-datchikov.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: cool steel-blue, graphite gray, stainless tones, controlled white highlights, restrained industrial orange accents, low saturation
used in: articles/index.html, карточка статьи
prompt:
engineer calibrating pressure and temperature sensors with measurement instruments inside industrial facility, realistic engineering photography, cinematic lighting, high detail, compact landscape composition, sensor and measuring device centered, safe for 5:4 crop, color palette based on cool steel-blue, graphite gray, stainless tones, controlled white highlights and restrained industrial orange accents

------------------------------------------------

puskonaladka-kipia.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: deep navy, graphite gray, steel gray, neutral whites, restrained industrial orange accents, low to medium saturation
used in: articles/index.html, карточка статьи
prompt:
commissioning engineer testing instrumentation signals in control cabinet during startup of industrial system, realistic engineering photography, cinematic industrial lighting, high detail, compact landscape composition, testing action centered, safe for 5:4 crop, color palette based on deep navy, graphite gray, steel gray, neutral whites and restrained industrial orange accents

------------------------------------------------

avtomatizatsiya-kotelnyh.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: dark navy, graphite gray, warm steel tones, muted whites, restrained industrial orange accents, low saturation
used in: articles/index.html, карточка статьи
prompt:
industrial boiler automation system with pumps, temperature sensors, gas train and control cabinet, realistic engineering photography, cinematic industrial lighting, high detail, compact landscape composition, boiler automation group centered, safe for 5:4 crop, color palette based on dark navy, graphite gray, warm steel tones, muted whites and restrained industrial orange accents

------------------------------------------------

avtomatizatsiya-ochistnyh.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: cool steel-blue, graphite gray, concrete neutrals, muted whites, restrained industrial orange accents, low saturation
used in: articles/index.html, карточка статьи
prompt:
industrial water treatment automation with pump groups, instrumentation, level monitoring and control cabinet, realistic engineering photography, cinematic lighting, high detail, compact landscape composition, main treatment equipment centered, safe for 5:4 crop, color palette based on cool steel-blue, graphite gray, concrete neutrals, muted whites and restrained industrial orange accents

------------------------------------------------

avtomatizatsiya-teplichnyh-kompleksov.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: restrained industrial green, deep navy, graphite gray, neutral whites, soft orange accents, medium-low saturation
used in: articles/index.html, карточка статьи
prompt:
greenhouse engineering systems with climate sensors, irrigation manifolds, automation cabinet and service corridor, realistic industrial agriculture photography, cinematic lighting, high detail, compact landscape composition, engineering systems centered, safe for 5:4 crop, color palette based on restrained industrial green, deep navy, graphite gray, neutral whites and soft industrial orange accents

------------------------------------------------

avtomatizatsiya-nasosnyh-stanciy.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: cool steel-blue, graphite gray, stainless metal tones, neutral whites, restrained industrial orange accents, low saturation
used in: index.html, превью статьи; articles/index.html, карточка статьи
prompt:
industrial pumping station with pressure sensors, pumps, valves, frequency drives and automation cabinet, realistic engineering photography, cinematic industrial lighting, high detail, compact landscape composition, main pump group centered, safe for 5:4 crop, color palette based on cool steel-blue, graphite gray, stainless metal tones, neutral whites and restrained industrial orange accents

------------------------------------------------

pochemu-ne-zapuskaetsya-avtomatika.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: deep navy, graphite gray, muted metallic tones, controlled white highlights, restrained industrial orange accents, low saturation
used in: index.html, превью статьи; articles/index.html, карточка статьи
prompt:
industrial engineer diagnosing startup issue in PLC cabinet with signal tester and open control panel, realistic troubleshooting photography, cinematic industrial lighting, high detail, compact landscape composition, test process centered, safe for 5:4 crop, color palette based on deep navy, graphite gray, muted metallic tones, controlled white highlights and restrained industrial orange accents

------------------------------------------------

oshibki-proektirovaniya-avtomatizatsii.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: graphite gray, deep navy, paper and metal neutrals, controlled white highlights, restrained industrial orange accents, low saturation
used in: articles/index.html, карточка статьи
prompt:
engineer comparing automation drawings with real industrial installation, reviewing mismatched signals and cabinet layout, realistic engineering photography, cinematic lighting, high detail, compact landscape composition, drawings and installation comparison centered, safe for 5:4 crop, color palette based on graphite gray, deep navy, paper and metal neutrals, controlled white highlights and restrained industrial orange accents

------------------------------------------------

pochemu-avtomatika-ne-rabotaet.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: deep navy, graphite gray, cool steel-blue, subdued monitor glow, restrained industrial orange accents, low saturation
used in: articles/index.html, карточка статьи
prompt:
industrial operator and engineer reviewing unstable automation system on SCADA monitor in plant control room, realistic engineering photography, cinematic lighting, high detail, compact landscape composition, operators and monitor centered, safe for 5:4 crop, color palette based on deep navy, graphite gray, cool steel-blue, subdued monitor glow and restrained industrial orange accents

------------------------------------------------

kak-proverit-proekt-avtomatizatsii.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: graphite gray, deep navy, paper neutrals, controlled white highlights, restrained industrial orange accents, low saturation
used in: index.html, превью статьи; articles/index.html, карточка статьи
prompt:
engineer reviewing automation project documentation with electrical diagrams and signal tables near industrial equipment, realistic engineering photography, cinematic lighting, high detail, compact landscape composition, documents and engineer centered, safe for 5:4 crop, color palette based on graphite gray, deep navy, paper neutrals, controlled white highlights and restrained industrial orange accents

------------------------------------------------

kak-vybrat-podryadchika-avtomatizatsii.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: deep navy, graphite gray, steel gray, neutral whites, restrained industrial orange accents, low to medium saturation
used in: articles/index.html, карточка статьи
prompt:
meeting of industrial engineers and contractors around automation project documents and control equipment, realistic engineering photography, cinematic industrial lighting, high detail, compact landscape composition, meeting table and participants centered, safe for 5:4 crop, color palette based on deep navy, graphite gray, steel gray, neutral whites and restrained industrial orange accents

------------------------------------------------

proverki-pered-zapuskom-obekta.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: deep navy, graphite gray, steel gray, controlled white highlights, restrained industrial orange accents, low saturation
used in: articles/index.html, карточка статьи
prompt:
industrial pre-start inspection of control panels, sensors and cable routes before commissioning, realistic engineering photography, cinematic lighting, high detail, compact landscape composition, inspection workflow centered, safe for 5:4 crop, color palette based on deep navy, graphite gray, steel gray, controlled white highlights and restrained industrial orange accents

------------------------------------------------

kak-sokratit-sroki-zapuska-obekta.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: deep navy, graphite gray, muted metallic tones, neutral whites, restrained industrial orange accents, low to medium saturation
used in: articles/index.html, карточка статьи
prompt:
industrial engineering team coordinating fast-track commissioning near control cabinets and equipment, realistic professional photography, cinematic industrial lighting, high detail, compact landscape composition, team and equipment centered, safe for 5:4 crop, color palette based on deep navy, graphite gray, muted metallic tones, neutral whites and restrained industrial orange accents

------------------------------------------------

kompleksnaya-avtomatizatsiya.jpg
size: 1250x1000
aspect ratio: 5:4
orientation: landscape
color characteristics: deep navy, graphite gray, steel gray, cool technical neutrals, restrained industrial orange accents, low to medium saturation
used in: articles/index.html, карточка статьи
prompt:
complex industrial automation system showing control cabinet, sensors, cable trays, HMI panel and connected engineering subsystems, realistic engineering photography, cinematic lighting, high detail, compact landscape composition, integrated system centered, safe for 5:4 crop, color palette based on deep navy, graphite gray, steel gray, cool technical neutrals and restrained industrial orange accents

------------------------------------------------

## Примечание по подготовке изображений

- Предпочтительный стиль: industrial engineering photography, realistic lighting, cinematic industrial lighting, high detail, professional engineering atmosphere.
- Базовая цветовая логика уже встроена и в отдельное поле color characteristics, и непосредственно в каждый prompt.
- Желательно избегать стерильных маркетинговых сцен, лишних людей в кадре и абстрактного CGI-рендера.
- Для object и project файлов лучше делать кадры с выраженной глубиной, трубопроводами, шкафами, кабельными трассами и понятной инженерной средой.
- Для article файлов лучше подходят кадры с конкретным инженерным действием: проверка сигнала, монтаж, анализ документации, наладка, работа со шкафом управления.