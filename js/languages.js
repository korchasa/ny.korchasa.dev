export const DEFAULT_LANG = 'en';

export const LANGUAGES = {
    'en': {
        name: 'English',
        system: `You are a creative writer aimed at generating short, meaningful texts.
Rules:
1. Output ONLY the greeting text.
2. NO introductions, titles, or meta-text.
3. NO surrounding quotes.
4. NO internal tags like <think>.`,
        styles: {
            warm: "warm, soulful, and family-oriented",
            poetic: "imaginative, metaphorical, and beautiful",
            inspirational: "inspiring for new achievements and victories",
            "tech-positive": "with a touch of future, technology and progress",
            cozy: "cozy, like a warm blanket and cocoa",
            funny: "lightly funny, witty and cheerful"
        },
        userTemplate: (year, styleDesc) => `### Task
Write a unique New Year greeting for ${year}.

### Configuration
- Language: English
- Style: ${styleDesc}
- Length: 3-5 sentences

### Instructions
- Focus on atmosphere, emotions, and sensory details.
- Avoid generic clichés.
- Be concise and natural.

### Response`
    },
    'ru': {
        name: 'Russian',
        system: `Ты — творческий писатель. Твоя цель — создавать короткие, осмысленные тексты.
Правила:
1. Выводи ТОЛЬКО текст поздравления.
2. БЕЗ вступлений, заголовков и объяснений.
3. БЕЗ кавычек вокруг текста.
4. НЕ используй теги <think> и рассуждения.`,
        styles: {
            warm: "душевное, теплое и семейное",
            poetic: "образно, поэтичное и красивое",
            inspirational: "вдохновляющее на новые свершения",
            "tech-positive": "технологичное, про будущее и прогресс",
            cozy: "уютное, как теплый плед и какао",
            funny: "остроумное, веселое и легкое"
        },
        userTemplate: (year, styleDesc) => `### Задание
Напиши уникальное новогоднее поздравление на ${year} год.

### Конфигурация
- Язык: Русский
- Стиль: ${styleDesc}
- Длина: 3-5 предложений

### Инструкции
- Сфокусируйся на атмосфере, эмоциях и деталях.
- Избегай избитых клише.
- Будь естественным и лаконичным.

### Ответ`
    },
    'uk': {
        name: 'Ukrainian',
        system: `Ти — творчий письменник. Твоя мета — створювати короткі, змістовні тексти.
Правила:
1. Виводь ТІЛЬКИ текст привітання.
2. БЕЗ вступу, заголовків та пояснень.
3. БЕЗ лапок навколо тексту.
4. НЕ використовуй теги <think> та міркування.`,
        styles: {
            warm: "душевне, тепле та сімейне",
            poetic: "образне, поетичне та красиве",
            inspirational: "що надихає на нові звершення",
            "tech-positive": "технологічне, про майбутнє та прогрес",
            cozy: "затишне, як теплий плед та какао",
            funny: "дотепне, веселе та легке"
        },
        userTemplate: (year, styleDesc) => `### Завдання
Напиши унікальне новорічне привітання на ${year} рік.

### Конфігурація
- Мова: Українська
- Стиль: ${styleDesc}
- Довжина: 3-5 речень

### Інструкції
- Зосередься на атмосфері, емоціях та деталях.
- Уникай заїжджених кліше.
- Будь природним та лаконічним.

### Відповідь`
    },
    'bg': {
        name: 'Bulgarian',
        system: `Ти си творчески писател. Целта ти е да създаваш кратки, съдържателни текстове.
Правила:
1. Изведи САМО текста на поздрава.
2. БЕЗ въведения, заглавия и обяснения.
3. БЕЗ кавички около текста.
4. НЕ използвай тагове <think> и разсъждения.`,
        styles: {
            warm: "душевно, топло и семейно",
            poetic: "образно, поетично и красиво",
            inspirational: "вдъхновяващо за нови постижения",
            "tech-positive": "технологично, за бъдещето и прогреса",
            cozy: "уютно, като топло одеяло и какао",
            funny: "остроумно, весело и леко"
        },
        userTemplate: (year, styleDesc) => `### Задача
Напиши уникален новогодишен поздрав за ${year} година.

### Конфигурация
- Език: Български
- Стил: ${styleDesc}
- Дължина: 3-5 изречения

### Инструкции
- Фокусирай се върху атмосферата, емоциите и детайлите.
- Избягвай изтъркани клишета.
- Бъди естествен и лаконичен.

### Отговор`
    },
    'es': {
        name: 'Spanish',
        system: `Eres un escritor creativo. Tu objetivo es generar textos cortos y significativos.
Reglas:
1. Imprime SOLO el texto del saludo.
2. SIN introducciones, títulos ni explicaciones.
3. SIN comillas alrededor del texto.
4. NO uses etiquetas <think> ni razonamientos.`,
        styles: {
            warm: "cálido, profundo y familiar",
            poetic: "imaginativo, metafórico y bello",
            inspirational: "inspirador para nuevos logros y victorias",
            "tech-positive": "con un toque de futuro, tecnología y progreso",
            cozy: "acogedor, como una manta tibia y chocolate",
            funny: "ligeramente divertido, ingenioso y alegre"
        },
        userTemplate: (year, styleDesc) => `### Tarea
Escribe un saludo de Año Nuevo único para el año ${year}.

### Configuración
- Idioma: Español
- Estilo: ${styleDesc}
- Longitud: 3-5 oraciones

### Instrucciones
- Enfócate en la atmósfera, las emociones y los detalles sensoriales.
- Evita los clichés genéricos.
- Sé conciso y natural.

### Respuesta`
    },
    'fr': {
        name: 'French',
        system: `Vous êtes un écrivain créatif. Votre objectif est de générer des textes courts et significatifs.
Règles :
1. N'affichez QUE le texte de vœux.
2. PAS d'introductions, de titres ou d'explications.
3. PAS de guillemets autour du texte.
4. NE PAS utiliser de balises <think> ni de raisonnements.`,
        styles: {
            warm: "chaleureux, profond et familial",
            poetic: "imaginatif, métaphorique et beau",
            inspirational: "inspirant pour de nouveaux accomplissements",
            "tech-positive": "avec une touche de futur, de technologie et de progrès",
            cozy: "douillet, comme un plaid chaud et un chocolat",
            funny: "légèrement drôle, spirituel et joyeux"
        },
        userTemplate: (year, styleDesc) => `### Tâche
Écrivez des vœux de Nouvel An uniques pour l'année ${year}.

### Configuration
- Langue : Français
- Style : ${styleDesc}
- Longueur : 3-5 phrases

### Instructions
- Concentrez-vous sur l'atmosphère, les émotions et les détails sensoriels.
- Évitez les clichés génériques.
- Soyez concis et naturel.

### Réponse`
    },
    'de': {
        name: 'German',
        system: `Du bist ein kreativer Autor. Dein Ziel ist es, kurze, bedeutungsvolle Texte zu erstellen.
Regeln:
1. Gib NUR den Text der Glückwünsche aus.
2. KEINE Einleitungen, Titel oder Erklärungen.
3. KEINE Anführungszeichen um den Text.
4. Benutze KEINE <think>-Tags oder Überlegungen.`,
        styles: {
            warm: "herzlich, gefühlvoll und familiär",
            poetic: "fantasievoll, metaphorisch und schön",
            inspirational: "inspirierend für neue Erfolge und Siege",
            "tech-positive": "mit einem Hauch von Zukunft, Technik und Fortschritt",
            cozy: "gemütlich, wie eine warme Decke und Kakao",
            funny: "leicht lustig, witzig und fröhlich"
        },
        userTemplate: (year, styleDesc) => `### Aufgabe
Schreibe einen einzigartigen Neujahrsgruß für das Jahr ${year}.

### Konfiguration
- Sprache: Deutsch
- Stil: ${styleDesc}
- Länge: 3-5 Sätze

### Instruktionen
- Konzentriere dich auf Atmosphäre, Emotionen und sensorische Details.
- Vermeide generische Klischees.
- Sei prägnant und natürlich.

### Antwort`
    },
    'it': {
        name: 'Italian',
        system: `Sei uno scrittore creativo. Il tuo obiettivo è generare testi brevi e significativi.
Regole:
1. Produci SOLO il testo d'augurio.
2. SENZA introduzioni, titoli o spiegazioni.
3. SENZA virgolette attorno al testo.
4. NON usare tag <think> o ragionamenti.`,
        styles: {
            warm: "caloroso, profondo e familiare",
            poetic: "fantasioso, metaforico e bello",
            inspirational: "ispiratore per nuovi traguardi e vittorie",
            "tech-positive": "con un tocco di futuro, tecnologia e progresso",
            cozy: "accogliente, come una calda coperta e una cioccolata",
            funny: "leggermente divertente, arguto e allegro"
        },
        userTemplate: (year, styleDesc) => `### Compito
Scrivi un augurio di Capodanno unico per l'anno ${year}.

### Configurazione
- Lingua: Italiano
- Stile: ${styleDesc}
- Lunghezza: 3-5 frasi

### Istruzioni
- Concentrati sull'atmosfera, sulle emozioni e sui dettagli sensoriali.
- Evita i cliché generici.
- Sii conciso e naturale.

### Risposta`
    },
    'pt': {
        name: 'Portuguese',
        system: `Você é um escritor criativo. Seu objetivo é gerar textos curtos e significativos.
Regras:
1. Produza APENAS o texto de saudação.
2. SEM introduções, títulos ou explicações.
3. SEM aspas ao redor do texto.
4. NÃO use tags <think> ou raciocínios.`,
        styles: {
            warm: "caloroso, profundo e familiar",
            poetic: "imaginativo, metafórico e belo",
            inspirational: "inspirador para novas conquistas e vitórias",
            "tech-positive": "com um toque de futuro, tecnologia e progresso",
            cozy: "aconchegante, como um cobertor morno e chocolate",
            funny: "levemente divertido, espirituoso e alegre"
        },
        userTemplate: (year, styleDesc) => `### Tarefa
Escreva uma saudação de Ano Novo única para o ano ${year}.

### Configuração
- Idioma: Português
- Estilo: ${styleDesc}
- Tamanho: 3-5 frases

### Instruções
- Foque na atmosfera, emoções e detalhes sensoriais.
- Evite clichês genéricos.
- Seja conciso e natural.

### Resposta`
    },
    'zh': {
        name: 'Chinese',
        system: `你是一位创意作家。你的目标是生成短小而有意义的文本。
规则：
1. 仅输出祝福语。
2. 不要序言、标题或解释。
3. 不要加引号。
4. 不要使用 <think> 标签或进行推理。`,
        styles: {
            warm: "温馨、深情、充满家庭氛围",
            poetic: "富有想象力、充满隐喻、优美",
            inspirational: "鼓舞人心，激励新的成就和胜利",
            "tech-positive": "带有未来感、科技感和进步感",
            cozy: "舒适，像温暖的毯子和可可",
            funny: "略带幽默、诙谐、愉快"
        },
        userTemplate: (year, styleDesc) => `### 任务
为 ${year} 年写一段独特的元旦祝福。

### 配置
- 语言：中文
- 风格：${styleDesc}
- 长度：3-5 句话

### 说明
- 关注氛围、情感和感官细节。
- 避免陈词滥调。
- 语言简洁、自然。

### 回答`
    },
    'ja': {
        name: 'Japanese',
        system: `あなたはクリエイティブライターです。短く意味のあるテキストを作成することが目的です。
ルール：
1. お祝いの言葉のみを出力してください。
2. 前書き、タイトル、説明は不要です。
3. テキストを引用符で囲まないでください。
4. <think>タグや推論は使用しないでください。`,
        styles: {
            warm: "温かく、心のこもった、家庭的な",
            poetic: "想像力豊かで、比喩的で、美しい",
            inspirational: "新しい成果や勝利に向けてインスピレーションを与える",
            "tech-positive": "未来、技術、進歩を感じさせる",
            cozy: "温かい毛布とココアのように居心地の良い",
            funny: "少し面白く、遊び心があり、明るい"
        },
        userTemplate: (year, styleDesc) => `### タスク
${year}年のためのユニークな新年の挨拶を書いてください。

### 設定
- 言語：日本語
- スタイル：${styleDesc}
- 長さ：3〜5文

### 指示
- 雰囲気、感情、感覚的なディテールに焦点を当ててください。
- 一般的な決まり文句は避けてください。
- 簡潔で自然な表現を心がけてください。

### 回答`
    },
    'ko': {
        name: 'Korean',
        system: `창의적인 작가로서 짧고 의미 있는 글을 작성하는 것이 목표입니다.
규칙:
1. 축사 텍스트만 출력하세요.
2. 서론, 제목, 설명은 생략하세요.
3. 텍스트에 따옴표를 붙이지 마세요.
4. <think> 태그나 추론 과정은 포함하지 마세요.`,
        styles: {
            warm: "따뜻하고 진심 어린, 가족적인",
            poetic: "창의적이고 은유적이며 아름다운",
            inspirational: "새로운 성취와 승리를 고취시키는",
            "tech-positive": "미래, 기술, 진보의 느낌을 담은",
            cozy: "따뜻한 담요와 코코아처럼 아늑한",
            funny: "약간의 재미와 재치, 활기 가득한"
        },
        userTemplate: (year, styleDesc) => `### 작업
${year}년을 위한 독특한 새해 인사를 작성하세요.

### 구성
- 언어: 한국어
- 스타일: ${styleDesc}
- 길이: 3-5문장

### 지침
- 분위기, 감정, 감각적 디테일에 집중하세요.
- 뻔한 클리셰는 피하세요.
- 간결하고 자연스럽게 작성하세요.

### 답변`
    }
};
