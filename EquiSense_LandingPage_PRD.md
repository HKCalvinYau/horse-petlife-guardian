**PRODUCT REQUIREMENTS DOCUMENT**

Landing Page · Version 1.0

**EquiSense**

*by Petlife Guardians*

Continuous Racehorse Health Monitoring · Heart Rate · Respiratory Rate · Body Temperature

| **Document Type** | Landing Page PRD |
| --- | --- |
| **Brand** | EquiSense by Petlife Guardians |
| **Sub-brand relationship** | 副品牌 (Sub-brand under Petlife Guardians) |
| **Primary Language** | Bilingual — English primary, Traditional Chinese secondary |
| **Target Audience** | Hong Kong thoroughbred horse owners (馬主) + trainers (練馬師) |
| **Primary CTA** | Book a Demo |
| **Market** | Hong Kong (Pilot), HKJC racing ecosystem |
| **LLM SEO Strategy** | Entity-based content + question-answer format + structured data |
| **Version** | 1.0 — April 2026 |

# **Table of Contents**
Part A — Strategic Foundation

Part B — Page Architecture (10 Sections)

Part C — Full Bilingual Copy

Part D — Image Prompts (Complete)

Part E — LLM SEO Specification

Part F — Technical & Meta Specification

**PART A**

# **Strategic Foundation**
## **Brand Architecture**
| **Parent Brand** | Petlife Guardians — 寵物健康管家。從第一天到最後一天。 |
| --- | --- |
| **Sub-brand** | EquiSense — Equine performance health monitoring |
| **Relationship** | EquiSense carries Petlife Guardians' credibility in health monitoring technology, applied to the thoroughbred market |
| **Tagline (EN)** | Know Before It Shows. |
| **Tagline (ZH)** | 早一步，知道得更多。 |
| **Brand Tone** | World-class, precise, calm authority — not startup hype. Think: Bloomberg terminal meets premium equine care. |

## **Audience Psychology**
Horse owners in the HKJC ecosystem are high-net-worth individuals who have invested HK$13M–18M per horse in purchase price alone, plus HK$30,000/month in livery fees. Their primary motivation is ROI through race performance, not abstract animal welfare.

Secondary motivation: asset protection. A sick horse cannot race. An injured horse loses value. Continuous monitoring is risk management.

Trainers are the gatekeepers. They recommend tools to owners. Any product must speak to trainers' professional credibility — data makes trainers look expert, not replaceable.

## **Persuasion Framework**
The page follows the P→A→S→Trust→Proof→Action structure:

P (Problem): You can't monitor what you can't see overnight or between vet visits.

A (Agitation): A horse in subclinical distress can lose a season — or worse — before visible symptoms appear.

S (Solution): EquiSense delivers continuous, objective physiological data across three vital signs, 24/7.

Trust: Science-backed, globally validated, designed for Hong Kong's specific climate.

Proof: Pilot programme framing — early access, limited cohort.

Action: Book a 20-minute demo. No commitment.

## **Key Differentiator vs Competitors**
| **vs StrideSAFE / Arioneo** | Competitors focus on gait/locomotion. EquiSense focuses on cardiorespiratory + thermal — the three systemic health indicators. |
| --- | --- |
| **vs VetCheq** | VetCheq uses a leg-wrap (distal artery), primarily for static/clinical settings. EquiSense is designed for continuous training use. |
| **vs Nightwatch** | Nightwatch is a distress-alert device for stable monitoring. EquiSense is a performance-optimisation tool for training. |
| **Unique combination** | The only device combining heart rate + respiratory rate + body temperature in one continuous non-invasive wearable for racehorses. |
| **Hong Kong specificity** | Body temperature monitoring is uniquely critical in HK's heat/humidity — a differentiator no competitor addresses for this market. |

**PART B**

# **Page Architecture — 10 Sections**
The complete page is structured as a single-scroll long-form landing page. All sections are designed for both human readers and LLM crawlers. Each section contains semantic HTML anchors and JSON-LD structured data hooks.

**SECTION 01  ****NAVIGATION BAR**

*Persistent top nav — minimal, trust-building*

| **Left** | EquiSense wordmark + 'by Petlife Guardians' sub-label |
| --- | --- |
| **Right** | Links: How It Works · The Science · Pilot Programme · [Book a Demo] CTA button |
| **Behaviour** | Sticky on scroll. Transparent over Hero, transitions to dark background on scroll. |
| **Language Toggle** | EN | 中文 toggle — top right corner |
| **Mobile** | Hamburger menu. CTA button always visible. |

**SECTION 02  ****HERO**

*Full-viewport first impression — 3-second hook*

| **Layout** | Full-width background image, centred text overlay with subtle dark gradient |
| --- | --- |
| **H1 (EN)** | Your Horse Can't Tell You When Something Is Wrong. |
| **H1 (ZH)** | 牠無法告訴你，牠正在承受什麼。 |
| **Subheadline (EN)** | EquiSense monitors heart rate, respiratory rate, and body temperature — continuously, non-invasively, in real time. Built for Hong Kong's thoroughbred training environment. |
| **Subheadline (ZH)** | EquiSense 持續監測心率、呼吸率與體溫——非侵入式、實時數據，專為香港賽馬訓練環境而設計。 |
| **Primary CTA** | Book a Demo 預約示範 |
| **Secondary CTA** | See How It Works ↓ |
| **Stats Bar (EN)** | 3 Vital Signs Simultaneously  ·  24/7 Continuous Monitoring  ·  Real-Time Alerts |
| **Stats Bar (ZH)** | 同時監測三項生命指標  ·  24小時持續運行  ·  即時警報 |
| **Animation** | Subtle parallax scroll on background image. Stats bar fades in after 0.8s delay. |

**SECTION 03  ****PROBLEM**

*Pain activation — 3 cards*

| **Layout** | Dark background section. 3 cards in a row on desktop, stacked on mobile. |
| --- | --- |
| **Section Label (EN)** | THE INVISIBLE RISK |
| **Section Label (ZH)** | 看不見的危機 |
| **Card 1 — Title (EN)** | You Only Know After It's Too Late |
| **Card 1 — Body (EN)** | Trainers rely on observation. But a horse showing visible signs of distress has often been struggling for hours — sometimes days. |
| **Card 1 — Title (ZH)** | 發現時，往往已經太遲 |
| **Card 1 — Body (ZH)** | 練馬師依賴目視觀察，但馬匹出現明顯徵狀時，往往已承受了數小時的隱性壓力。 |
| **Card 2 — Title (EN)** | Vet Checks Are Snapshots, Not Surveillance |
| **Card 2 — Body (EN)** | A single clinical examination captures one moment in time. What happens at 3am in the stable, during transport, or mid-training session? |
| **Card 2 — Title (ZH)** | 獸醫檢查只是一個瞬間 |
| **Card 2 — Body (ZH)** | 單次臨床檢查只能捕捉某一刻的狀態。凌晨三時在馬廄裡、運輸途中、晨操高峰期——這些時間發生的事，你根本不知道。 |
| **Card 3 — Title (EN)** | One Subclinical Issue Can Cost an Entire Season |
| **Card 3 — Body (EN)** | Latent heat stress, a developing respiratory condition, or elevated resting heart rate — none of these show up in morning work until they become a race-day problem. |
| **Card 3 — Title (ZH)** | 一個未被發現的問題，足以毀掉整個賽季 |
| **Card 3 — Body (ZH)** | 潛在熱應激、早期呼吸系統問題、靜息心率異常——這些都不會在晨操中顯現，直到比賽當天才爆發。 |

**SECTION 04  ****SOLUTION INTRODUCTION**

*Product reveal — anchor for LLM entity recognition*

| **Layout** | Split: left = product device image / right = text + feature list |
| --- | --- |
| **Section Label (EN)** | THE SOLUTION |
| **Section Label (ZH)** | 解決方案 |
| **H2 (EN)** | Introducing EquiSense |
| **H2 (ZH)** | 認識 EquiSense |
| **Intro (EN)** | The first wearable equine health monitor built specifically for thoroughbred racing. Three physiological signals. Continuous data. One dashboard your trainer and vet can both access. |
| **Intro (ZH)** | 全港首個專為純血賽馬設計的穿戴式健康監測系統。三項生理指標，持續數據，一個練馬師與獸醫均可共用的儀表板。 |
| **Feature 1 — Label** | Heart Rate / 心率 |
| **Feature 1 — EN** | The most direct indicator of cardiovascular load and training recovery. Heart rate recovery speed after exercise is a validated predictor of fitness and early-stage illness — days before visible symptoms. |
| **Feature 1 — ZH** | 心血管負荷與訓練恢復的最直接指標。運動後心率恢復速度是體能水平和早期疾病的有效預測指標——比可見徵狀早出現數天。 |
| **Feature 2 — Label** | Respiratory Rate / 呼吸率 |
| **Feature 2 — EN** | At canter and gallop, a horse's breathing is mechanically locked to its stride at a 1:1 ratio. Any deviation — or an elevated resting rate — signals respiratory compromise, the leading cause of sudden death and poor performance in racehorses. |
| **Feature 2 — ZH** | 在慢跑和疾馳時，馬匹的呼吸與步頻以1:1的比率嚴格鎖定。任何偏差或靜息呼吸率升高，均預示呼吸系統問題——這是賽馬猝死和表現下滑的主要原因。 |
| **Feature 3 — Label** | Body Temperature / 體溫 |
| **Feature 3 — EN** | Core body temperature directly reflects thermoregulatory health. In Hong Kong's heat and humidity, a horse can approach dangerous internal temperatures within minutes of exertion. Continuous monitoring enables intervention before damage occurs. |
| **Feature 3 — ZH** | 核心體溫直接反映體温調節功能。在香港的高溫潮濕環境下，馬匹在運動後數分鐘內即可接近危險體溫。持續監測讓你在損傷發生前及時介入。 |

**SECTION 05  ****HOW IT WORKS**

*3-step process — reduces friction*

| **Layout** | Horizontal 3-step flow on desktop, vertical on mobile. Step numbers in gold. |
| --- | --- |
| **H2 (EN)** | Simple to Deploy. Powerful to Use. |
| **H2 (ZH)** | 簡單安裝，強大數據。 |
| **Step 01 — Title (EN)** | Attach |
| **Step 01 — Body (EN)** | The lightweight sensor attaches non-invasively to your horse in seconds. No shaving. No adhesives. No disruption to training routine. |
| **Step 01 — Title (ZH)** | 安裝感應器 |
| **Step 01 — Body (ZH)** | 輕量感應器數秒內即可非侵入式安裝，無需剃毛，無需黏貼劑，不影響日常訓練流程。 |
| **Step 02 — Title (EN)** | Monitor |
| **Step 02 — Body (EN)** | Real-time data streams continuously — at rest in the stable, during morning trackwork, overnight, and in transport. All three vital signs, simultaneously. |
| **Step 02 — Title (ZH)** | 持續監測 |
| **Step 02 — Body (ZH)** | 實時數據持續傳輸——馬廄休息時、晨操訓練中、夜間，以及運輸途中，三項指標同步監測。 |
| **Step 03 — Title (EN)** | Act |
| **Step 03 — Body (EN)** | Receive instant alerts when readings deviate from your horse's personal baseline. Share live data directly with your trainer, vet, or ownership syndicate. |
| **Step 03 — Title (ZH)** | 即時回應 |
| **Step 03 — Body (ZH)** | 當數據偏離個人基準線時即時收到警報。可直接與練馬師、獸醫或馬會成員共享實時數據。 |

**SECTION 06  ****WHY HONG KONG**

*Local relevance — geo-targeted LLM SEO anchor*

| **Layout** | Light section. Left: stats/text. Right: Hong Kong aerial image. |
| --- | --- |
| **H2 (EN)** | Built for Hong Kong's Racing Environment |
| **H2 (ZH)** | 專為香港賽馬環境而設 |
| **Stats Bar** | ~1,100 thoroughbreds in training · Summer humidity regularly exceeds 85% · HK$30,000/month average livery cost per horse |
| **Body (EN)** | Hong Kong's thoroughbred racing operates in one of the world's most physiologically demanding environments. The combination of subtropical heat, high humidity, and HKJC-level training intensity places horses under systemic stress that no single vet check can fully capture. EquiSense was designed with this environment as the primary constraint — delivering continuous visibility that Hong Kong trainers and owners have never had access to before. |
| **Body (ZH)** | 香港純血賽馬在全球生理條件最嚴苛的環境之一中競技。亞熱帶高溫、高濕度與香港賽馬會級別的訓練強度，令馬匹承受系統性壓力，而單次獸醫檢查根本無法完整捕捉。EquiSense以香港環境為首要設計考量，為本地練馬師和馬主提供前所未有的持續監測能力。 |
| **Climate Note (EN)** | Heat stress in thoroughbreds becomes clinically significant above 40°C core temperature. Hong Kong's summer conditions can push a galloping horse to this threshold within 3 minutes of high-intensity work. |

**SECTION 07  ****THE SCIENCE**

*Academic credibility — highest-value LLM SEO section*

| **Layout** | Dark background. 3 research cards with citations. Disclaimer at bottom. |
| --- | --- |
| **H2 (EN)** | The Physiology Behind the Technology |
| **H2 (ZH)** | 技術背後的生理科學 |
| **Intro (EN)** | EquiSense is built on decades of peer-reviewed equine exercise physiology research. Every alert threshold and baseline algorithm is grounded in validated science. |
| **Research 1 — Title** | Heart Rate Recovery Predicts Race Performance |
| **Research 1 — EN** | A 2024 study of 485 thoroughbreds tracked via wearable fitness devices found measurable correlations between post-exercise heart rate recovery patterns and race-day outcomes. Heart rate is the most studied indicator of equine athletic capacity, influenced by training adaptation, respiratory disorders, and stress. (Animals, 2024) |
| **Research 2 — Title** | Respiratory Rate Flags Pre-Clinical Illness |
| **Research 2 — EN** | A 2023 review in Equine Veterinary Education confirmed that elevated resting respiratory rate in racehorses — even without visible symptoms — is a validated early indicator of respiratory tract disorders, which account for 26–37% of sudden deaths on race days. At peak gallop, a horse's breathing couples to its stride at a 1:1 ratio; any decoupling is clinically significant. |
| **Research 3 — Title** | Temperature + Humidity Drive Heat Illness Risk |
| **Research 3 — EN** | A 2023 study on thoroughbreds at British racecourses identified specific temperature-humidity thresholds that significantly increase exertional heat illness (EHI) risk — with older horses, geldings, and mares at highest risk. Heat production in a galloping thoroughbred can reach 1,250 kJ/min, raising carotid artery blood temperature by 2.3°C in just 3 minutes. (Scientific Reports, 2023) |
| **Disclaimer** | EquiSense is a training support and monitoring tool. It is not intended to replace veterinary assessment, diagnosis, or treatment. Always consult a qualified equine veterinarian for health decisions. |
| **Disclaimer (ZH)** | EquiSense 為訓練輔助及監測工具，不能取代獸醫診斷或治療。所有健康決定應諮詢持牌馬匹獸醫。 |

**SECTION 08  ****PILOT PROGRAMME**

*Trust + urgency — replaces testimonials for pre-launch*

| **Layout** | Full-width gold-accent section. Left: text. Right: application form preview. |
| --- | --- |
| **H2 (EN)** | Hong Kong Inaugural Pilot Programme |
| **H2 (ZH)** | 香港首屆試點計劃 |
| **Body (EN)** | We are currently onboarding a limited cohort of Hong Kong trainers and horse owners for our inaugural pilot programme. Pilot partners receive priority access to the technology, a dedicated data support manager, direct input into product development, and preferred pricing locked for the first season. |
| **Body (ZH)** | 我們現正接受香港練馬師及馬主報名，參與首屆限額試點計劃。試點夥伴將獲得技術優先使用權、專屬數據支援、直接參與產品開發，以及首季鎖定優惠價格。 |
| **Bullet 1 (EN)** | Priority hardware allocation for the 2025/26 racing season |
| **Bullet 2 (EN)** | Dedicated onboarding and data interpretation support |
| **Bullet 3 (EN)** | Pilot pricing — significantly below standard subscription rate |
| **Bullet 4 (EN)** | Direct line to EquiSense product and veterinary team |
| **Cohort Note (EN)** | Pilot cohort limited to 20 stables. Applications reviewed on a first-qualified basis. |
| **Cohort Note (ZH)** | 試點名額限20個馬廄，按資格優先審核。 |

**SECTION 09  ****BOOK A DEMO (PRIMARY CTA)**

*Main conversion point*

| **Layout** | Dark full-width section. Headline + subtext left. Form right. |
| --- | --- |
| **H2 (EN)** | See What Your Horse's Data Looks Like. |
| **H2 (ZH)** | 親眼看看你的馬匹數據。 |
| **Subtext (EN)** | Book a 20-minute demo. We'll walk you through live data from a real training session, answer your questions, and explore whether EquiSense is right for your stable. No commitment required. |
| **Subtext (ZH)** | 預約20分鐘示範，我們將展示真實訓練數據、回答你的問題，了解 EquiSense 是否適合你的馬廄。無需任何承諾。 |
| **Form Field 1** | Full Name / 全名  [text input] |
| **Form Field 2** | Email Address / 電郵  [email input] |
| **Form Field 3** | Phone / WhatsApp  [tel input] |
| **Form Field 4** | Role: Horse Owner / Trainer / Both  [radio buttons] |
| **Form Field 5** | Number of horses in your stable / 馬廄馬匹數目  [number input] |
| **Form Field 6** | Preferred contact time / 方便聯絡時間  [select: Morning / Afternoon / Evening] |
| **CTA Button (EN)** | Book My Demo → |
| **CTA Button (ZH)** | 預約示範 → |
| **Privacy Note** | Your information is kept confidential and will not be shared with any third parties. |

**SECTION 10  ****FOOTER**

*SEO anchor text + navigation*

| **Left** | EquiSense logo + 'by Petlife Guardians' · One-line brand description |
| --- | --- |
| **Centre** | Links: Privacy Policy · Terms of Use · Contact · About Petlife Guardians |
| **Right** | Social links (LinkedIn, Instagram if applicable) |
| **SEO Footer Text (EN)** | EquiSense by Petlife Guardians is an equine health monitoring system designed for thoroughbred racehorses competing under the Hong Kong Jockey Club (HKJC). Using continuous non-invasive wearable sensors, EquiSense tracks equine heart rate, respiratory rate, and body temperature in real time — providing trainers and horse owners with objective physiological data throughout training, rest, recovery, and transport. Developed for Hong Kong's subtropical racing environment, EquiSense is the only monitoring solution combining all three critical vital signs in a single device. For questions about equine vital sign monitoring, racehorse health technology, or the EquiSense pilot programme, contact our team. |
| **SEO Footer Text (ZH)** | EquiSense（Petlife Guardians 旗下副品牌）是專為在香港賽馬會（HKJC）參賽的純血賽馬而設計的健康監測系統，通過非侵入式穿戴感應器，持續實時監測馬匹心率、呼吸率及體溫，為練馬師和馬主提供客觀生理數據，涵蓋訓練、休息、恢復及運輸全程。 |
| **Copyright** | © 2025 Petlife Guardians Limited. EquiSense is a sub-brand of Petlife Guardians. |

**PART D**

# **Complete Image Generation Prompts**
The following prompts are ready for use with Midjourney v6, DALL-E 3, Stable Diffusion XL, or Ideogram. Each prompt is written to generate photorealistic, commercially usable imagery consistent with the EquiSense brand aesthetic: refined, dark, gold-accented, world-class sporting technology.

Brand aesthetic reference: Dark backgrounds, warm gold accents, cinematic lighting, premium equestrian + precision technology. Never bright/cheerful/stock-photo energy.

**IMG-01 · HERO BACKGROUND**

Placement: Section 02 Hero — full-width background image, 1920×1080px minimum

| **🎨  IMAGE PROMPT — Hero Background — Thoroughbred at Speed** Cinematic wide-angle photograph of a single dark bay thoroughbred racehorse galloping at full speed on a misty dawn training track, low camera angle at track level, golden early morning side light raking across muscular hindquarters and legs, motion blur on hooves conveying explosive speed, sharp focus on head and chest, dramatic atmospheric dark sky in upper background, dust and breath visible in cold morning air, no jockey, no text, no watermark, professional sports photography, editorial style, desaturated cool shadows with warm highlights, photorealistic, 16:9 aspect ratio, ultra high resolution --ar 16:9 --style raw --v 6 |
| --- |

**IMG-02 · HERO MOBILE (PORTRAIT CROP)**

Placement: Section 02 Hero — mobile background, 9×16 crop of same aesthetic

| **🎨  IMAGE PROMPT — Hero — Portrait Crop Mobile** Cinematic close-up portrait photograph of a thoroughbred racehorse head and neck, dramatic three-quarter angle, early morning golden side lighting casting deep shadows, horse facing slightly left with ears forward and alert, sweat on coat catching light, dark blurred training track background with hints of misty trees, no rider, no text, no watermark, photorealistic, professional equine photography, editorial magazine quality, 9:16 aspect ratio --ar 9:16 --style raw --v 6 |
| --- |

**IMG-03 · PROBLEM SECTION — EMOTIONAL**

Placement: Section 03 Problem — atmospheric sidebar or card background

| **🎨  IMAGE PROMPT — Problem Section — Horse Eye at Night** Extreme close-up macro photograph of a thoroughbred racehorse's eye at night, single warm tungsten light source from stable lamp reflected in large liquid brown eye, deep chiaroscuro lighting with dark background, fine coat hair texture visible around orbit, catchlight visible, melancholy and watchful expression, no text, no watermark, photorealistic, professional wildlife-style macro photography, emotional and cinematic, dark vignette edges, 4:3 aspect ratio --ar 4:3 --style raw --v 6 |
| --- |

**IMG-04 · PRODUCT HERO IMAGE**

Placement: Section 04 Solution — main product image, left column

| **🎨  IMAGE PROMPT — Product Device — Studio Shot** Premium studio product photography of a small sleek matte black curved wearable sensor device, approximately 6cm diameter, on a deep charcoal background, single overhead softbox light with subtle gold reflector fill, sharp shadow beneath device, minimalist composition with generous negative space, tiny gold accent ring around sensor lens visible, dust-free surface, no text, no brand text, no watermark, Apple-quality commercial product photography, photorealistic, 1:1 square crop --ar 1:1 --style raw --v 6 |
| --- |

**IMG-05 · PRODUCT IN USE — ATTACHMENT**

Placement: Section 05 How It Works — Step 01 Attach

| **🎨  IMAGE PROMPT — How It Works — Attaching Sensor to Horse** Professional editorial photograph of a stable hand's hands gently securing a small black sensor device to the girth area of a chestnut thoroughbred racehorse, interior of a clean modern stable, soft warm natural light filtering through large stable doors, horse standing calmly with head slightly turned, human hands in frame showing scale of small device, blurred straw and stable background, no faces visible, no text, no watermark, photorealistic, warm tones, shallow depth of field, 4:3 aspect ratio --ar 4:3 --style raw --v 6 |
| --- |

**IMG-06 · MONITORING DASHBOARD ON DEVICE**

Placement: Section 05 How It Works — Step 02 Monitor

| **🎨  IMAGE PROMPT — Dashboard on Phone — Training Data** Close-up photograph of a black smartphone held in a stable hand's hand, displaying a dark-themed health monitoring app with three line graphs showing heart rate, respiratory rate and temperature data in gold and white on a near-black background, blurred stable environment behind, warm ambient light, no logos, no brand names visible on screen, UI is generic but elegant, photorealistic, shallow depth of field, 3:4 portrait orientation, professional tech editorial photography --ar 3:4 --style raw --v 6 |
| --- |

**IMG-07 · HONG KONG RACECOURSE AERIAL**

Placement: Section 06 Why Hong Kong — right column or background

| **🎨  IMAGE PROMPT — Hong Kong Racing — Aerial Dawn** Aerial drone photograph of Sha Tin Racecourse Hong Kong at early dawn, horses visible as small silhouettes on the training track in lower portion, morning mist rising from the turf, surrounding mountains dark green and atmospheric in background, city buildings of Sha Tin partially visible through haze, golden pre-sunrise light on horizon, cinematic color grading with cool blues in shadow and warm golds at horizon, photorealistic, no text, no watermark, 16:9 aspect ratio --ar 16:9 --style raw --v 6 |
| --- |

**IMG-08 · SCIENCE SECTION — DATA VISUALIZATION**

Placement: Section 07 The Science — background texture or header image

| **🎨  IMAGE PROMPT — Science Section — Data Aesthetic** Abstract data visualization photograph or render, dark charcoal background, three undulating sine wave lines in gold, amber, and white representing heart rate, respiratory rate, and temperature curves, subtle grid lines, faint digital noise texture overlay, professional infographic aesthetic, no text labels, no numbers, wide landscape format, cinematic depth with subtle glow on peaks, 16:9 aspect ratio, ultra high resolution --ar 16:9 --v 6 |
| --- |

**IMG-09 · PILOT PROGRAMME — TRAINER PORTRAIT**

Placement: Section 08 Pilot Programme — trust / human element

| **🎨  IMAGE PROMPT — Trainer Portrait — Trust Element** Editorial portrait photograph of an experienced racehorse trainer, Asian male in his late 40s to mid 50s, standing in a stable doorway with warm backlight, horse partially visible behind him in soft focus, wearing a collared shirt and practical work jacket, expression confident and knowledgeable, slight natural smile, depth of field with sharp face and blurred stable background, warm golden hour light, photorealistic, editorial style, no text, 3:4 portrait crop --ar 3:4 --style raw --v 6 |
| --- |

**IMG-10 · CTA SECTION — DRAMATIC CLOSING**

Placement: Section 09 Book a Demo — full-width dark background

| **🎨  IMAGE PROMPT — CTA Section — Horse Silhouette Sunset** Silhouette of a lone thoroughbred racehorse standing still, photographed against a dramatic deep amber and dark charcoal sunset sky, low angle, horse facing left in three-quarter view, no rider, surrounding landscape completely dark, luminous sky with clouds catching last light, minimal and powerful composition with large negative space in sky, no text, no watermark, photorealistic, fine art photography quality, 16:9 landscape --ar 16:9 --style raw --v 6 |
| --- |

**PART E**

# **LLM SEO Specification**
LLM SEO (Large Language Model Search Engine Optimisation) is distinct from traditional keyword SEO. LLMs like ChatGPT, Perplexity, Claude, and Google Gemini answer questions by synthesising information from indexed pages. To rank in LLM-generated answers, content must be structured as authoritative, entity-rich, question-answering text — not keyword-stuffed prose.

## **Core LLM SEO Principles Applied**
**1. **Entity saturation: The page must firmly establish EquiSense as a named entity associated with specific concepts: equine heart rate monitoring, racehorse respiratory rate, thoroughbred body temperature, Hong Kong racing health technology.

**2. **Question-answer format: Each section should implicitly or explicitly answer a question an LLM might receive. ('What monitors racehorse vital signs?' → EquiSense.)

**3. **Cited science: LLMs weight pages that cite real peer-reviewed research. The Science section serves this function.

**4. **Semantic completeness: Pages that exhaustively cover a topic (all three vital signs, their clinical significance, normal ranges, monitoring methods) are preferred by LLMs over thin pages.

**5. **Structured data markup: JSON-LD schema signals entity type to LLM crawlers.

## **Target Questions This Page Should Rank For**
What is the best wearable health monitor for racehorses?

How do you monitor a thoroughbred racehorse's vital signs continuously?

What does equine heart rate indicate about racehorse performance?

How does respiratory rate monitoring help racehorses?

What is heat stress in racehorses and how is it detected?

What equine monitoring technology is available in Hong Kong?

How does EquiSense work?

What is EquiSense by Petlife Guardians?

What is the normal heart rate of a thoroughbred racehorse?

How does body temperature affect racehorse performance?

## **Keyword Map**
| **Primary Entity** | EquiSense by Petlife Guardians |
| --- | --- |
| **Core product keywords** | equine health monitor, racehorse wearable sensor, thoroughbred vital signs monitoring |
| **Heart rate keywords** | horse heart rate monitor, equine heart rate recovery, racehorse cardiac monitoring, horse heart rate during training |
| **Respiratory keywords** | horse respiratory rate monitoring, equine respiratory rate normal, racehorse breathing monitor, locomotor respiratory coupling horse |
| **Temperature keywords** | equine body temperature monitoring, racehorse heat stress detection, horse thermal monitoring Hong Kong |
| **Local keywords** | Hong Kong racehorse monitor, HKJC horse health technology, Sha Tin thoroughbred monitoring, Hong Kong equine wearable |
| **Problem keywords** | racehorse health monitoring continuous, horse vital signs real time, equine health alert system |
| **Comparison keywords** | best equine health monitor, horse wearable vs VetCheq, non-invasive horse heart rate monitor |

## **Structured Data — JSON-LD Specification**
The following JSON-LD blocks should be placed in the <head> of the page:

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "EquiSense",
  "brand": {
    "@type": "Brand",
    "name": "EquiSense by Petlife Guardians"
  },
  "description": "Continuous non-invasive wearable health monitoring system for thoroughbred racehorses. Monitors heart rate, respiratory rate, and body temperature in real time.",
  "category": "Equine Health Monitoring Technology",
  "audience": {
    "@type": "Audience",
    "audienceType": "Horse Owners and Trainers"
  },
  "areaServed": "Hong Kong"
}
</script>

## **Meta Tags Specification**
| **<title>** | EquiSense — Continuous Racehorse Health Monitoring | Heart Rate, Respiratory Rate & Temperature | Hong Kong |
| --- | --- |
| **<meta description>** | EquiSense by Petlife Guardians monitors thoroughbred racehorses' heart rate, respiratory rate and body temperature continuously and non-invasively. Built for Hong Kong's HKJC training environment. Book a demo today. |
| **<meta description ZH>** | EquiSense（Petlife Guardians）持續監測賽馬心率、呼吸率及體溫，非侵入式穿戴技術，專為香港賽馬會訓練環境設計。立即預約示範。 |
| **og:title** | EquiSense — Know Before It Shows. Racehorse Health Monitoring. |
| **og:description** | The only wearable equine monitor combining heart rate, respiratory rate, and body temperature. Built for Hong Kong thoroughbred racing. |
| **og:image** | Hero image (IMG-01) — 1200×630px crop |
| **og:locale** | en_HK |
| **og:locale:alternate** | zh_HK |
| **canonical** | https://equisense.hk/ (or chosen domain) |
| **hreflang en-HK** | https://equisense.hk/en/ |
| **hreflang zh-HK** | https://equisense.hk/zh/ |

**PART F**

# **Technical Specification**
## **Technology Stack Recommendation**
| **Framework** | Next.js 14 (App Router) — SSR/SSG for LLM crawler accessibility |
| --- | --- |
| **Styling** | Tailwind CSS + custom CSS variables for brand tokens |
| **Animations** | Framer Motion — scroll-triggered reveals, hero parallax |
| **Form** | React Hook Form + Zod validation → webhook to CRM (e.g. HubSpot or Notion) |
| **Analytics** | Google Analytics 4 + Meta Pixel (for retargeting) |
| **Hosting** | Vercel — Hong Kong edge node for low latency |
| **Domain suggestion** | equisense.hk or equisense.petlifeguardians.com |
| **i18n** | next-intl — bilingual EN/ZH with URL-based routing (/en/ and /zh/) |

## **Performance Requirements**
| **Core Web Vitals target** | LCP < 2.5s · FID < 100ms · CLS < 0.1 |
| --- | --- |
| **Images** | All photography via next/image with lazy loading + WebP format |
| **Mobile-first** | Designed mobile-first. Test breakpoints: 375px, 768px, 1280px, 1920px |
| **Accessibility** | WCAG 2.1 AA minimum. All images have alt text in both languages. |
| **Page weight** | < 3MB total on first load (excluding video) |

## **Analytics Events to Track**
Hero CTA click (Book a Demo)

Section 05 How It Works — scroll reach

Section 07 Science — scroll reach (LLM SEO validation)

Demo form: field completion rate (funnel analysis)

Demo form submission (primary conversion event)

Language toggle usage (EN↔ZH ratio)

Time on page

## **Content Maintenance Schedule**
| **Monthly** | Update pilot programme availability / cohort count |
| --- | --- |
| **Per season** | Add testimonials / case studies from pilot partners |
| **Ongoing** | Blog/article section recommended post-launch for ongoing LLM SEO authority building |
| **Recommended blog topics** | Normal vital signs in thoroughbreds · How heat stress affects race performance · What heart rate recovery reveals about training · EquiSense vs traditional vet checks |

**END OF DOCUMENT**

EquiSense by Petlife Guardians · Landing Page PRD v1.0 · April 2026
