document.addEventListener('DOMContentLoaded', () => {

    const courseData = [
        {
            title: "Las Tácticas de la Tentación",
            summary: `Un demonio veterano instruye a su sobrino sobre cómo desviar al "paciente" de la fe. La clave no es la argumentación directa, sino la distracción sutil, apelando a la "vida real" y la jerga moderna para que las verdades espirituales parezcan irrelevantes. Se busca fijar la atención del paciente en lo sensorial e inmediato, alejándolo de la razón y la reflexión sobre cuestiones eternas.`,
            audioSrc: "audio/modulo1.mp3",
            imageSrc: "images/module1.jpg",
            quiz: [
                {
                    question: "Según Escrutopo, ¿cuál es la mejor arma para alejar a un humano de la fe en la era moderna?",
                    options: ["Argumentos filosóficos complejos", "La jerga y lo familiar", "Milagros y eventos sobrenaturales", "Debates teológicos"],
                    answer: 1,
                    feedback: "Escrutopo insiste en que la jerga y las distracciones mundanas son más efectivas que los argumentos, porque evitan que el paciente piense de forma crítica."
                },
                {
                    question: "¿Qué recomienda Escrutopo para contrarrestar un momento de reflexión espiritual del paciente?",
                    options: ["Presentarle una duda teológica", "Recordarle que tiene hambre o una tarea pendiente", "Mostrarle los vicios de otros creyentes", "Asustarlo con visiones del infierno"],
                    answer: 1,
                    feedback: "La estrategia es desviar la atención hacia las necesidades y preocupaciones más básicas y mundanas, como la comida, para romper la concentración espiritual."
                },
                {
                    question: "¿Por qué se debe evitar que el paciente razone sobre la verdad o falsedad de las doctrinas?",
                    options: ["Porque podría descubrir la verdad", "Porque el razonamiento es un campo que el 'Enemigo (Dios)' domina", "Porque lo aburriría y lo alejaría de la iglesia", "Porque los demonios no entienden la lógica humana"],
                    answer: 1,
                    feedback: "Escrutopo admite que el 'Enemigo (Dios)' es el maestro de la razón. La argumentación es 'Su' terreno, por lo que es más seguro mantener al paciente en el terreno de la distracción y la emoción."
                },
                {
                    question: "¿A qué se refiere Escrutopo con la 'vida real'?",
                    options: ["A la vida después de la muerte", "A las experiencias sensoriales inmediatas", "A los debates intelectuales profundos", "A los actos de caridad"],
                    answer: 1,
                    feedback: "La 'vida real' para Escrutopo es el flujo de experiencias sensoriales inmediatas, como el ruido de un autobús o un vendedor de periódicos, que sirven para anclar al humano en lo mundano."
                }
            ],
            medal: "Medalla del Engaño Sutil",
            medalIcon: "fa-solid fa-bullseye"
        },
        {
            title: "La Iglesia y la Comunidad",
            summary: `Se aconseja explotar la decepción que el paciente sentirá al conocer a los otros miembros de su iglesia. La estrategia es hacer que se fije en sus imperfecciones, sus hábitos molestos y su apariencia mundana, para que su idea 'spiritual' de la Iglesia se vea ridiculizada y su fe se enfríe. El objetivo es que asocie la religión con la molestia y la desilusión.`,
            audioSrc: "audio/modulo2.mp3",
            imageSrc: "images/module2.jpg",
            quiz: [
                {
                    question: "¿Cuál es la principal herramienta de decepción que Escrutopo sugiere usar en la iglesia?",
                    options: ["La arquitectura del edificio", "Las imperfecciones de los otros feligreses", "La duración de los sermones", "La música del coro"],
                    answer: 1,
                    feedback: "La táctica es centrar al paciente en los defectos de las personas a su alrededor para que juzgue la religión entera como algo 'ridículo' y mundano."
                },
                {
                    question: "¿Qué imagen idealizada de los 'cristianos' tiene el paciente que los demonios deben explotar?",
                    options: ["Una imagen de gente rica y poderosa", "Una imagen gráfica con togas y sandalias", "Una imagen de intelectuales y filósofos", "Una imagen de mártires sufrientes"],
                    answer: 1,
                    feedback: "El paciente espera algo etéreo y antiguo (togas, sandalias), y la modernidad y normalidad de la gente en la iglesia le causa una decepción inconsciente que debe ser explotada."
                },
                {
                    question: "¿Por qué el Enemigo (Dios) permite la desilusión en los esfuerzos humanos?",
                    options: ["Porque quiere que los humanos sufran", "Para hacerlos 'libres' y que actúen por sí solos", "Porque no le importan sus sentimientos", "Para probar la fuerza de los demonios"],
                    answer: 1,
                    feedback: "Según Escrutopo, el 'Enemigo (Dios)' permite esta 'aridez' para que los humanos dejen de depender de las emociones y se conviertan en seres que actúan por voluntad propia, haciéndolos más fuertes y difíciles de tentar."
                },
                {
                    question: "¿Qué efecto busca Escrutopo al hacer que el paciente se fije en los malos hábitos de sus vecinos de banca?",
                    options: ["Que el paciente se sienta superior a ellos", "Que el paciente denuncie sus malos hábitos", "Que el paciente crea que la religión de esas personas debe ser ridícula", "Que el paciente se cambie de iglesia"],
                    answer: 2,
                    feedback: "El objetivo es que el paciente, al ver los defectos de los demás, asuma que la religión que practican también debe ser, en algún sentido, defectuosa o ridícula."
                }
            ],
            medal: "Medalla de la Discordia",
            medalIcon: "fa-solid fa-users"
        },
        {
            title: "La Oración y la Vida Interior",
            summary: "Escrutopo enseña a Orugario cómo corromper la oración. La táctica es desviar la atención del paciente de Dios hacia sí mismo, enfocándolo en sus propios sentimientos. Se busca que el paciente construya una imagen mental de Dios en lugar de buscar una conexión real, haciendo de la oración un ejercicio de introspección inútil.",
            audioSrc: "audio/modulo3.mp3",
            imageSrc: "images/module3.jpg",
            quiz: [
                {
                    question: "¿Cuál es el método principal para inutilizar las oraciones del paciente?",
                    options: ["Hacer que rece muy rápido", "Desviar su atención de Dios hacia sus propios sentimientos", "Hacer que pida cosas materiales", "Interrumpirlo con ruidos"],
                    answer: 1,
                    feedback: "La estrategia demoníaca es hacer que la oración sea un ejercicio subjetivo, donde el paciente se enfoca en 'sentir' devoción en lugar de comunicarse con Dios."
                },
                {
                    question: "¿Por qué es peligroso para los demonios que un humano entienda que su cuerpo afecta su alma?",
                    options: ["Porque empezará a hacer más ejercicio", "Porque se dará cuenta de que es un ser dual, un animal espiritual", "Porque se volverá vanidoso", "Porque descuidará su cuerpo"],
                    answer: 1,
                    feedback: "Si el paciente entiende que es un animal y que su postura física (arrodillarse) influye en su oración, habrá entendido una verdad fundamental sobre su naturaleza dual, uniendo lo físico y lo espiritual, lo cual es territorio del Enemigo (Dios)."
                },
                {
                    question: "¿Qué es el 'doble patrón' que Escrutopo recomienda para las oraciones del paciente por su madre?",
                    options: ["Rezar por su alma pero no por su salud", "Rezar en público pero no en privado", "Fijarse en los pecados de ella mientras ignora los propios", "Pedirle a ella que rece por él"],
                    answer: 2,
                    feedback: "Se le debe animar a que se concentre en los pecados que él cree que ella tiene (que suelen ser las cosas que a él le molestan), mientras permanece ciego a sus propios defectos evidentes."
                },
                {
                    question: "¿Qué tipo de 'Dios' se le anima al paciente a construir en su imaginación?",
                    options: ["Un Dios severo y castigador", "Un objeto compuesto y subjetivo, casi un ídolo personal", "Un Dios lejano e indiferente", "Un Dios que aprueba todos sus deseos"],
                    answer: 1,
                    feedback: "La idea es que el paciente no rece al Dios que existe, sino a un 'dios' que él mismo ha fabricado en su mente, un objeto compuesto de imágenes erróneas y sentimientos, lo cual es una forma de idolatría."
                }
            ],
            medal: "Medalla de la Falsa Piedad",
            medalIcon: "fa-solid fa-hands-praying"
        },
        {
            title: "El Amor y el Placer",
            summary: "Escrutopo se lamenta de que el paciente se ha enamorado de una joven cristiana virtuosa. Analiza cómo el amor y el placer son invenciones del Enemigo (Dios) y, por tanto, peligrosos. La estrategia demoníaca es torcer el placer, separarlo de su propósito y llevarlo a extremos donde se convierta en un fin en sí mismo, en lugar de una expresión de amor o alegría.",
            audioSrc: "audio/modulo4.mp3",
            imageSrc: "images/module4.jpg",
            quiz: [
                {
                    question: "¿Cuál es el gran 'desastre' que le ha ocurrido a Orugario con su paciente?",
                    options: ["El paciente ha decidido ser sacerdote", "El paciente se ha enamorado de una buena cristiana", "El paciente ha ganado mucho dinero", "El paciente se ha vuelto famoso"],
                    answer: 1,
                    feedback: "Para Escrutopo, que el paciente se enamore de una mujer virtuosa y cristiana es una catástrofe, ya que ella representa todo lo que el Enemigo (Dios) valora."
                },
                {
                    question: "Según Escrutopo, ¿quién inventó los placeres?",
                    options: ["Los propios demonios", "La naturaleza, por accidente", "El Enemigo (Dios)", "Los humanos, para escapar del sufrimiento"],
                    answer: 2,
                    feedback: "Escrutopo admite con frustración que todos los placeres fueron creados por el Enemigo (Dios). El trabajo de los demonios es corromperlos y usarlos en los momentos y grados que Él ha prohibido."
                },
                {
                    question: "¿Qué es la 'Ley de la Ondulación'?",
                    options: ["La tendencia humana a cambiar de opinión", "El movimiento de los planetas", "Los picos y valles naturales en la vida de un humano", "Una ley secreta de la magia"],
                    answer: 2,
                    feedback: "La Ondulación es el ritmo natural de la vida humana, con períodos de riqueza emocional y espiritual (picos) seguidos de períodos de aridez y vacío (valles). Los demonios deben explotar los valles."
                },
                {
                    question: "¿Cómo intentan los demonios corromper la sexualidad?",
                    options: ["Promoviendo la total abstinencia", "Asociándola exclusivamente con la culpa", "Separando el placer de la unión y la procreación", "Limitándola solo a gente mayor"],
                    answer: 2,
                    feedback: "La estrategia es separar el placer sexual de su contexto de amor y responsabilidad, convirtiéndolo en un fin en sí mismo y empujándolo hacia las perversiones y la obsesión."
                }
            ],
            medal: "Medalla del Placer Torcido",
            medalIcon: {
                stacked: true,
                base: "fa-solid fa-heart",
                top: "fa-solid fa-fire"
            }
        },
        {
            title: "El Orgullo y la Humildad",
            summary: "La táctica demoníaca consiste en corromper la humildad del paciente, haciéndole consciente de ella y, por tanto, orgulloso de ser humilde. Escrutopo explica que el objetivo del Enemigo (Dios) es que el hombre se deleite en sus talentos sin compararse con otros, simplemente agradecido. La misión del demonio es introducir la comparación y la autoconciencia a toda costa.",
            audioSrc: "audio/modulo5.mp3",
            imageSrc: "images/module5.jpg",
            quiz: [
                {
                    question: "¿Cuál es la forma más efectiva de anular la humildad de un hombre?",
                    options: ["Haciéndole cometer un pecado evidente", "Haciéndole consciente de su propia humildad", "Distrayéndole con riquezas", "Enfrentándolo a gente muy pecadora"],
                    answer: 1,
                    feedback: "En el momento en que el paciente piensa '¡Vaya, estoy siendo humilde!', el orgullo espiritual ha entrado en escena y la virtud ha sido corrompida."
                },
                {
                    question: "¿Cuál es el objetivo final del Enemigo (Dios) respecto a la humildad?",
                    options: ["Que el hombre se crea inferior a todos", "Que el hombre niegue sus propios talentos", "Que el hombre se olvide de sí mismo para centrarse en Dios y en los demás", "Que el hombre se compare constantemente con los santos"],
                    answer: 2,
                    feedback: "El objetivo de Dios no es que el hombre tenga una mala opinión de sí mismo, sino que deje de pensar en sí mismo por completo, apartando su atención de su propio ser."
                },
                {
                    question: "¿Qué es la 'Ilusión del Conflicto Generoso'?",
                    options: ["Una guerra santa", "Un debate teológico complejo", "Una discusión donde todos intentan ceder por 'desinterés', generando resentimiento", "Un acto de caridad que sale mal"],
                    answer: 2,
                    feedback: "Es una trampa doméstica donde, por un falso desinterés, nadie admite lo que realmente quiere, y todos terminan haciendo algo que nadie deseaba, pero sintiéndose secretamente virtuosos y resentidos."
                },
                {
                    question: "¿Por qué es el presente el tiempo que más se parece a la eternidad?",
                    options: ["Porque es el más largo", "Porque es el punto en que el tiempo toca la eternidad", "Porque es el único tiempo que podemos controlar", "Porque el pasado ya no existe"],
                    answer: 1,
                    feedback: "Escrutopo explica que el presente es el único momento en que un humano puede experimentar la realidad, la libertad y la gracia, de forma análoga a como Dios experimenta la eternidad."
                }
            ],
            medal: "Medalla del Falso Orgullo",
            medalIcon: "fa-solid fa-crown"
        },
        {
            title: "El Tiempo y el Miedo",
            summary: "Escrutopo explica por qué el futuro es el tiempo más útil para la tentación. A diferencia del presente (lleno de deberes y gracias reales) y el pasado (inmutable), el futuro está lleno de incógnitas, lo que lo convierte en el caldo de cultivo perfecto para la ansiedad y el miedo. La estrategia es mantener al paciente obsesionado con posibles calamidades futuras.",
            audioSrc: "audio/modulo6.mp3",
            imageSrc: "images/module6.jpg",
            quiz: [
                {
                    question: "¿Por qué el futuro es el mejor tiempo para tentar a los humanos?",
                    options: ["Porque es donde están sus verdaderas esperanzas", "Porque es desconocido y, por tanto, genera miedo y ansiedad", "Porque es más fácil de manipular que el pasado", "Porque los demonios pueden predecir el futuro"],
                    answer: 1,
                    feedback: "El futuro, al ser irreal y desconocido, es el terreno perfecto para que los demonios siembren visiones de terror y falsas esperanzas, paralizando al humano con ansiedad."
                },
                {
                    question: "¿Qué es el 'Punto de Vista Histórico'?",
                    options: ["Un análisis detallado de la historia", "Una forma de valorar los libros antiguos por su sabiduría", "Un método para hacer que las ideas parezcan obsoletas sin probar que son falsas", "Una doctrina sobre el fin del mundo"],
                    answer: 2,
                    feedback: "Es una herramienta demoníaca que enseña a los eruditos a preguntar sobre un autor antiguo cualquier cosa (su contexto, sus influencias) excepto si lo que dijo era verdad, haciendo así que la sabiduría del pasado sea irrelevante."
                },
                {
                    question: "¿Cuál es el 'horror a lo Mismo de Siempre'?",
                    options: ["El aburrimiento natural de la rutina", "Una pasión por la novedad a cualquier costo, creada por los demonios", "El miedo a un infierno monótono", "El deseo de reencarnar en algo nuevo"],
                    answer: 1,
                    feedback: "Es una de las pasiones más útiles para el Infierno. Reduce el placer mientras aumenta el deseo, y empuja a los humanos a buscar novedades constantes en lugar de la felicidad duradera, llevándolos a la herejía, la locura y la infidelidad."
                },
                {
                    question: "¿Cómo debe un demonio manejar el patriotismo o el pacifismo del paciente?",
                    options: ["Debe eliminar esos sentimientos por completo", "Debe convertirlo en la parte central de su religión, reemplazando a Dios", "Debe animarlo a discutir constantemente sobre política", "Debe asegurarse de que el paciente elija el bando correcto"],
                    answer: 1,
                    feedback: "La meta es hacer que la 'Causa' (sea el pacifismo o la guerra) se vuelva más importante que la fe misma, convirtiendo la religión en un simple medio para un fin mundano."
                }
            ],
            medal: "Medalla de la Angustia",
            medalIcon: "fa-solid fa-face-dizzy"
        },
        {
            title: "La Adversidad y el Sufrimiento",
            summary: "La guerra ha llegado a la ciudad del paciente con bombardeos. Escrutopo ve esto como una oportunidad para tentarlo con la cobardía, el odio y la desesperación. Sin embargo, también es un gran peligro, ya que el sufrimiento puede hacer que el paciente se vuelva hacia el Enemigo (Dios) con total sinceridad. La muerte inmediata es un riesgo terrible para los demonios.",
            audioSrc: "audio/modulo7.mp3",
            imageSrc: "images/module7.jpg",
            quiz: [
                {
                    question: "¿Cuáles son las tentaciones principales durante un bombardeo?",
                    options: ["La gula y la pereza", "La cobardía y el odio", "La lujuria y la avaricia", "La duda y la ignorancia"],
                    answer: 1,
                    feedback: "En momentos de peligro extremo, las tentaciones más efectivas son las que se aprovechan del instinto: el miedo (que lleva a la cobardía) y el deseo de culpar a alguien (que lleva al odio)."
                },
                {
                    question: "¿Por qué una muerte repentina en la guerra es a menudo una derrota para los demonios?",
                    options: ["Porque el humano muere como un héroe", "Porque el Enemigo (Dios) prepara a los que mueren en su deber", "Porque los demonios no pueden acceder al campo de batalla", "Porque la muerte es siempre una victoria para Dios"],
                    answer: 1,
                    feedback: "La muerte en el cumplimiento del deber, con la mente enfocada, a menudo encuentra al humano preparado por el Enemigo (Dios), frustrando décadas de trabajo demoníaco para corromperlo lentamente."
                },
                {
                    question: "¿Por qué una larga vida de prosperidad es a menudo mejor para la causa del Infierno?",
                    options: ["Porque da más tiempo para disfrutar de los placeres", "Porque la prosperidad une al hombre al Mundo, haciéndole sentir que la Tierra es su hogar", "Porque los viejos son más fáciles de tentar", "Porque la prosperidad siempre lleva a la avaricia"],
                    answer: 1,
                    feedback: "Una vida larga y cómoda es ideal para que los demonios puedan construir gradualmente un sentimiento de pertenencia a la Tierra, haciendo que el Cielo parezca algo lejano e irreal."
                },
                {
                    question: "¿Qué es la 'fatiga' para un tentador?",
                    options: ["Siempre es buena porque causa irritabilidad", "Siempre es mala porque el paciente está demasiado cansado para pecar", "Es una oportunidad para la amabilidad y la paz de espíritu", "Es un arma de doble filo: puede causar mal humor, pero también rendición y paz"],
                    answer: 3,
                    feedback: "La fatiga puede llevar a la irritabilidad, pero el agotamiento extremo también puede producir una especie de rendición humilde y pacífica, lo cual es peligroso para los demonios."
                }
            ],
            medal: "Medalla de la Desesperación",
            medalIcon: "fa-solid fa-bomb"
        },
        {
            title: "El Triunfo Final",
            summary: "En la carta final, Escrutopo está lleno de rabia. El paciente ha muerto durante un bombardeo y ha ido directamente al Cielo. Describe con furia cómo el paciente, en el momento de su muerte, vio a los ángeles y a su tentador, Orugario, y entendió todo. La existencia del paciente es ahora un triunfo para el Enemigo (Dios), y Escrutopo promete devorar a su sobrino por su fracaso.",
            audioSrc: "audio/modulo8.mp3",
            imageSrc: "images/module8.jpg",
            quiz: [
                {
                    question: "¿Cómo termina la vida del paciente?",
                    options: ["Muere de viejo en su cama", "Muere en un accidente de coche", "Muere durante un bombardeo aéreo", "Se convierte en un demonio"],
                    answer: 2,
                    feedback: "El paciente muere durante un bombardeo en su ciudad, un final que Escrutopo no pudo explotar a su favor."
                },
                {
                    question: "¿Cuál es la reacción del paciente al ver el mundo espiritual por primera vez?",
                    options: ["Confusión y miedo", "Reconocimiento instantáneo, como si siempre lo hubiera sabido", "Decepción y tristeza", "Alegría por ver a Orugario"],
                    answer: 1,
                    feedback: "En el momento de su muerte, el paciente ve a los seres espirituales (ángeles y demonios) y los reconoce, entendiendo el papel que han jugado en su vida sin ninguna sorpresa."
                },
                {
                    question: "¿Qué significa que el paciente fuera 'arrancado' de las manos de Orugario?",
                    options: ["Que Orugario lo dejó escapar por descuido", "Que el paciente se liberó con su propia fuerza de voluntad", "Que el Enemigo (Dios) reclamó su alma en el último segundo", "Que el paciente nunca estuvo realmente tentado"],
                    answer: 2,
                    feedback: "Describe la 'pérdida' del alma como una liberación instantánea de toda la suciedad y el peso de la tentación, un proceso que el Enemigo (Dios) completa en el momento de la muerte."
                },
                {
                    question: "¿Cuál es el destino final de Orugario?",
                    options: ["Recibe otra oportunidad con un nuevo paciente", "Es perdonado por Escrutopo", "Será devorado por su tío Escrutopo", "Es ascendido por su esfuerzo"],
                    answer: 2,
                    feedback: "Debido a su fracaso, la burocracia infernal dicta que el demonio superior (Escrutopo) tiene derecho a devorar al inferior (Orugario)."
                }
            ],
            medal: "Medalla del Fracaso Infernal",
            medalIcon: "fa-solid fa-fire-flame-curved"
        }
    ];

    const failureMessages = [
        "¡Excelente! Cada error tuyo es música para mis oídos. Sigue así.",
        "¡Magnífico fracaso! Estás aprendiendo a abrazar la mediocridad. Me gusta.",
        "Sí... ¡Sí! Justo así. La duda y el error son un terreno fértil. Inténtalo de nuevo, quiero ver más.",
        "Perfecto. Un paso en falso te acerca más a nuestro Padre de Abajo. No te detengas ahora.",
        "Me deleito en tu confusión. Es el aroma de una voluntad que se quiebra. Una vez más.",
        "Tu progreso hacia la nada es notable. Sigue por este camino.",
        "No te desanimes. Para nosotros, cada fallo tuyo es un rotundo éxito.",
        "¡Delicioso! Orugario tomará nota de tu técnica. Eres un gran maestro del error."
    ];

    const successMessages = [
        "Un acierto... Bah, hasta un reloj roto da la hora correcta dos veces al día.",
        "No dejes que esto se te suba a la cabeza. El orgullo es un pecado delicioso que esperaré con gusto.",
        "Has pasado. Supongo que el Enemigo intervino. Qué aguafiestas.",
        "Interesante. Una pequeña luz de virtud solo hace que la oscuridad que la rodea parezca más profunda.",
        "Victoria pírrica. Has ganado esta batalla, pero la guerra por tu insulsa alma está lejos de terminar.",
        "Hmm, lo lograste. No importa, ya encontraremos otras grietas en tu armadura.",
        "Admito que no esperaba esto. Me has arruinado la tarde. Continúa.",
        "Qué molesto. Tu guardián parece estar prestando atención. Ya se distraerá."
    ];

    // --- Elementos del DOM ---
    const moduleSelection = document.getElementById('module-selection');
    const moduleView = document.getElementById('module-view');
    const quizView = document.getElementById('quiz-view');
    const modalOverlay = document.getElementById('modal-overlay');
    const courseCompleteView = document.getElementById('course-complete-view');

    const moduleButtonsContainer = document.getElementById('module-buttons');
    const moduleTitle = document.getElementById('module-title');
    const moduleImage = document.getElementById('module-image');
    const moduleSummary = document.getElementById('module-summary');
    const moduleAudio = document.getElementById('module-audio');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const homeFromModuleBtn = document.getElementById('home-from-module-btn');

    const quizTitle = document.getElementById('quiz-title');
    const questionProgress = document.getElementById('question-progress');
    const questionContainer = document.getElementById('question-container');
    const feedbackContainer = document.getElementById('feedback-container');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const exitTestBtn = document.getElementById('exit-test-btn');

    const backToModulesBtn = document.getElementById('back-to-modules-btn');
    const retryQuizBtn = document.getElementById('retry-quiz-btn');
    const quizResultMessage = document.getElementById('quiz-result-message');
    const resultsChartElement = document.getElementById('results-chart');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const medalsList = document.getElementById('medals-list');
    const resetBtn = document.getElementById('reset-btn');
    const homeFromFinalBtn = document.getElementById('home-from-final-btn');

    // --- Estado de la Aplicación ---
    let userProgress = { completedModules: [] };
    let currentModuleIndex = 0;
    let currentQuestionIndex = 0;
    let quizScore = 0;
    let resultsChart = null;

    // --- Funciones ---
    function saveProgress() {
        localStorage.setItem('userProgress', JSON.stringify(userProgress));
    }

    function loadProgress() {
        const savedProgress = localStorage.getItem('userProgress');
        if (savedProgress) {
            userProgress = JSON.parse(savedProgress);
        }
    }

    function resetProgress() {
        if (confirm("¿Estás seguro de que quieres reiniciar todo tu progreso? Esta acción no se puede deshacer.")) {
            userProgress = { completedModules: [] };
            saveProgress();
            updateDashboard();
            renderModuleButtons();
            showView(moduleSelection);
            alert("Tu progreso ha sido reiniciado.");
        }
    }

    function updateDashboard() {
        const progressPercentage = (courseData.length > 0) ? (userProgress.completedModules.length / courseData.length) * 100 : 0;
        progressBar.style.width = `${progressPercentage}%`;
        if(progressText) progressText.textContent = `${Math.round(progressPercentage)}%`;

        medalsList.innerHTML = '';
        courseData.forEach((module, index) => {
            if (userProgress.completedModules.includes(index)) {
                const medalItem = document.createElement('div');
                medalItem.className = 'medal-item earned';
                
                let iconHtml = '';
                if (typeof module.medalIcon === 'object' && module.medalIcon.stacked) {
                    // Handle stacked icon
                    iconHtml = `
                        <span class="fa-stack" style="vertical-align: top; font-size: 0.8em;">
                            <i class="${module.medalIcon.base} fa-stack-2x" style="color: #d9534f;"></i>
                            <i class="${module.medalIcon.top} fa-stack-1x" style="color: #f0ad4e;"></i>
                        </span>
                    `;
                } else {
                    // Handle simple icon
                    iconHtml = `<i class="${module.medalIcon}"></i>`;
                }

                medalItem.innerHTML = `<span class="medal-icon">${iconHtml}</span> <span class="medal-name">${module.medal}</span>`;
                medalsList.appendChild(medalItem);
            }
        });
    }

    function showView(viewToShow) {
        const views = [moduleSelection, moduleView, quizView, courseCompleteView];
        const currentView = views.find(v => !v.classList.contains('hidden'));

        if (currentView && currentView !== viewToShow) {
            currentView.classList.add('fade-out');
            setTimeout(() => {
                currentView.classList.add('hidden');
                currentView.classList.remove('fade-out');
                
                viewToShow.classList.remove('hidden');
                viewToShow.style.opacity = 0; // Start transparent
                setTimeout(() => {
                    viewToShow.style.opacity = 1; // Fade in
                }, 10);

            }, 300); // Corresponds to transition duration
        } else {
            views.forEach(v => v.classList.add('hidden'));
            viewToShow.classList.remove('hidden');
        }
    }

    function hideModal() {
        modalOverlay.classList.add('hidden');
    }

    function showModal() {
        modalOverlay.classList.remove('hidden');
    }

    function selectModule(index) {
        currentModuleIndex = index;
        const module = courseData[index];
        moduleTitle.textContent = module.title;
        if(moduleImage) moduleImage.src = module.imageSrc;
        moduleSummary.textContent = module.summary;
        moduleAudio.src = module.audioSrc;
        showView(moduleView);
    }

    function startQuiz() {
        currentQuestionIndex = 0;
        quizScore = 0;
        quizTitle.textContent = courseData[currentModuleIndex].title;
        showView(quizView);
        displayQuestion();
    }

    function displayQuestion() {
        feedbackContainer.classList.add('hidden');
        const module = courseData[currentModuleIndex];
        const question = module.quiz[currentQuestionIndex];
        
        if(questionProgress) questionProgress.textContent = `Pregunta ${currentQuestionIndex + 1} de ${module.quiz.length}`;

        questionContainer.innerHTML = `
            <p class="question-text">${question.question}</p>
            <div class="options-container">
                ${question.options.map((option, index) => `
                    <button class="option-button" data-index="${index}">${option}</button>
                `).join('')}
            </div>
        `;

        document.querySelectorAll('.option-button').forEach(button => {
            button.addEventListener('click', handleOptionClick);
        });

        nextQuestionBtn.classList.add('hidden');
    }

    function handleOptionClick(event) {
        const selectedOptionIndex = parseInt(event.target.dataset.index);
        const module = courseData[currentModuleIndex];
        const question = module.quiz[currentQuestionIndex];

        document.querySelectorAll('.option-button').forEach(btn => btn.disabled = true);

        feedbackContainer.innerHTML = `<strong>${selectedOptionIndex === question.answer ? '¡Correcto!' : 'Incorrecto.'}</strong> ${question.feedback}`;
        feedbackContainer.className = `feedback-container ${selectedOptionIndex === question.answer ? 'correct-feedback' : 'incorrect-feedback'}`;
        feedbackContainer.classList.remove('hidden');

        if (selectedOptionIndex === question.answer) {
            event.target.classList.add('correct');
            quizScore++;
        } else {
            event.target.classList.add('incorrect');
            document.querySelector(`.option-button[data-index="${question.answer}"]`).classList.add('correct');
        }

        nextQuestionBtn.classList.remove('hidden');
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < courseData[currentModuleIndex].quiz.length) {
            displayQuestion();
        } else {
            completeQuiz();
        }
    }

    function completeQuiz() {
        const module = courseData[currentModuleIndex];
        const totalQuestions = module.quiz.length;
        const percentage = (quizScore / totalQuestions) * 100;
        const isPassed = percentage >= 75;

        if (isPassed) {
            const randomSuccessMessage = successMessages[Math.floor(Math.random() * successMessages.length)];
            quizResultMessage.innerHTML = `${randomSuccessMessage}<br>¡Has conseguido la <strong>${module.medal}</strong>!`;
            quizResultMessage.style.color = '#4caf50';
            if (!userProgress.completedModules.includes(currentModuleIndex)) {
                userProgress.completedModules.push(currentModuleIndex);
                saveProgress();
            }
            backToModulesBtn.classList.remove('hidden');
            retryQuizBtn.classList.add('hidden');
        } else {
            const randomFailureMessage = failureMessages[Math.floor(Math.random() * failureMessages.length)];
            quizResultMessage.innerHTML = `${randomFailureMessage}`;
            quizResultMessage.style.color = '#f44336';
            backToModulesBtn.classList.add('hidden');
            retryQuizBtn.classList.remove('hidden');
        }
        
        renderResultsChart(percentage);
        updateDashboard();
        renderModuleButtons();

        if (isPassed && userProgress.completedModules.length === courseData.length) {
            hideModal();
            showView(courseCompleteView);
        } else {
            showModal();
        }
    }

    const centerTextPlugin = {
        id: 'centerText',
        afterDraw: (chart) => {
            if (chart.config.type !== 'doughnut') return;
            const ctx = chart.ctx;
            const { width, height } = chart;
            const text = Math.round(chart.data.datasets[0].data[0]) + '%';

            ctx.restore();
            const fontSize = (height / 114).toFixed(2);
            ctx.font = `bold ${fontSize}em sans-serif`;
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#f5f5f5';

            const textX = Math.round((width - ctx.measureText(text).width) / 2);
            const textY = height / 2;

            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    };

    function renderResultsChart(percentage) {
        if (resultsChart) {
            resultsChart.destroy();
        }
        const correct = percentage;
        const incorrect = 100 - percentage;

        const ctx = resultsChartElement.getContext('2d');
        resultsChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Correctas', 'Incorrectas'],
                datasets: [{
                    data: [correct, incorrect],
                    backgroundColor: ['#4caf50', '#f44336'],
                    borderColor: ['#2d2d2d', '#2d2d2d'],
                    borderWidth: 5,
                    circumference: 360,
                    borderRadius: 5,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                animation: {
                    animateScale: true,
                    animateRotate: true,
                    duration: 1500
                },
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false }
                }
            },
            plugins: [centerTextPlugin]
        });
    }

    function renderModuleButtons() {
        moduleButtonsContainer.innerHTML = '';
        courseData.forEach((module, index) => {
            const button = document.createElement('button');
            button.className = 'module-button';
            button.textContent = `${index + 1}. ${module.title}`;
            if (userProgress.completedModules.includes(index)) {
                button.classList.add('completed');
            }
            button.addEventListener('click', () => selectModule(index));
            moduleButtonsContainer.appendChild(button);
        });
    }

    function exitTest() {
        if (confirm("¿Estás seguro de que quieres salir? Tu progreso en este test no se guardará.")) {
            showView(moduleSelection);
        }
    }

    function init() {
        loadProgress();
        updateDashboard();
        renderModuleButtons();
        showView(moduleSelection);

        startQuizBtn.addEventListener('click', startQuiz);
        nextQuestionBtn.addEventListener('click', nextQuestion);
        
        backToModulesBtn.addEventListener('click', () => {
            hideModal();
            showView(moduleSelection);
        });
        
        retryQuizBtn.addEventListener('click', () => {
            hideModal();
            startQuiz();
        });

        homeFromModuleBtn.addEventListener('click', () => showView(moduleSelection));
        homeFromFinalBtn.addEventListener('click', () => showView(moduleSelection));
        if(resetBtn) resetBtn.addEventListener('click', resetProgress);
        if(exitTestBtn) exitTestBtn.addEventListener('click', exitTest);
        
        const homeFromSidebarBtn = document.getElementById('home-from-sidebar-btn');
        if (homeFromSidebarBtn) {
            homeFromSidebarBtn.addEventListener('click', () => showView(moduleSelection));
        }

        if(modalCloseBtn) modalCloseBtn.addEventListener('click', hideModal);
    }

    init();
});