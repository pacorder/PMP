// questions.js - Datos completos de exámenes PMP
const examData = {
    "stakeholders": {
        "id": "stakeholders",
        "name": "Interesados",
        "description": "Participación efectiva, acuerdos sobre objetivos, satisfacción y bucles de retroalimentación con partes interesadas",
        "color": "blue",
        "questions": [
            {
                "id": 1,
                "question": "Un stakeholder clave solicita cambios significativos en el alcance del proyecto durante la fase de ejecución. ¿Cuál es la primera acción que debe tomar el director del proyecto?",
                "options": [
                    "Implementar los cambios inmediatamente para mantener la satisfacción del stakeholder",
                    "Documentar la solicitud y evaluar su impacto en el proyecto",
                    "Rechazar los cambios por llegar fuera del plazo establecido",
                    "Escalar directamente a la alta dirección sin análisis previo"
                ],
                "correctAnswer": 1,
                "explanation": "Documentar y evaluar el impacto (opción 2) es el enfoque correcto según las mejores prácticas de PMI. Permite una decisión informada sobre los cambios solicitados.",
                "domain": "Stakeholders"
            },
            {
                "id": 2,
                "question": "Durante una reunión de revisión del proyecto, varios stakeholders expresan expectativas contradictorias. ¿Qué técnica debe emplear el director del proyecto para alinear estas expectativas?",
                "options": [
                    "Priorizar las expectativas del stakeholder con mayor poder",
                    "Facilitar una sesión de alineación de expectativas",
                    "Ignorar las expectativas contradictorias y seguir el plan original",
                    "Documentar todas las expectativas sin intentar alinearlas"
                ],
                "correctAnswer": 1,
                "explanation": "Facilitar una sesión de alineación (opción 2) permite resolver conflictos y establecer expectativas comunes, esencial para el éxito del proyecto.",
                "domain": "Stakeholders"
            },
            {
                "id": 3,
                "question": "Un stakeholder importante ha estado ausente en las últimas tres reuniones de seguimiento. ¿Cuál es la acción más apropiada?",
                "options": [
                    "Continuar con el proyecto asumiendo su acuerdo tácito",
                    "Contactar al stakeholder para entender su ausencia y mantenerlo comprometido",
                    "Removerlo de la lista de stakeholders",
                    "Escalar inmediatamente a su supervisor"
                ],
                "correctAnswer": 1,
                "explanation": "Contactar al stakeholder (opción 2) muestra gestión proactiva y busca mantener el compromiso, crucial para el éxito del proyecto.",
                "domain": "Stakeholders"
            },
            {
                "id": 4,
                "question": "¿Qué herramienta es más efectiva para identificar y categorizar stakeholders en las fases iniciales del proyecto?",
                "options": [
                    "Diagrama de Gantt",
                    "Matriz de trazabilidad de requisitos",
                    "Matriz de poder-interés",
                    "Análisis de valor ganado"
                ],
                "correctAnswer": 2,
                "explanation": "La matriz de poder-interés (opción 3) ayuda a identificar stakeholders y planificar estrategias de engagement según su influencia e interés en el proyecto.",
                "domain": "Stakeholders"
            },
            {
                "id": 5,
                "question": "Un stakeholder expresa preocupaciones sobre el progreso del proyecto en un canal informal. ¿Cómo debe responder el director del proyecto?",
                "options": [
                    "Ignorar el comentario por no ser formal",
                    "Documentar la preocupación y abordarla en el siguiente comité de seguimiento",
                    "Abordar la preocupación inmediatamente y documentar la resolución",
                    "Solicitar que todas las preocupaciones se presenten por escrito"
                ],
                "correctAnswer": 2,
                "explanation": "Abordar inmediatamente (opción 3) demuestra responsividad y previene que preocupaciones menores escalen a problemas mayores.",
                "domain": "Stakeholders"
            },
            {
                "id": 6,
                "question": "Durante la planificación, se identifica que un stakeholder tiene alto poder pero bajo interés. ¿Qué estrategia de gestión es más apropiada?",
                "options": [
                    "Mantener satisfecho",
                    "Gestionar de cerca",
                    "Monitorear",
                    "Ignorar"
                ],
                "correctAnswer": 0,
                "explanation": "Mantener satisfecho (opción 1) es la estrategia correcta para stakeholders con alto poder pero bajo interés, para asegurar su apoyo cuando sea necesario.",
                "domain": "Stakeholders"
            },
            {
                "id": 7,
                "question": "Un cambio en la organización afecta la composición de los stakeholders. ¿Cuál es la primera acción del director del proyecto?",
                "options": [
                    "Continuar con el plan de stakeholders existente",
                    "Actualizar el registro de stakeholders y el plan de engagement",
                    "Suspender el proyecto hasta que se estabilice la situación",
                    "Solicitar una reunión urgente con todos los stakeholders"
                ],
                "correctAnswer": 1,
                "explanation": "Actualizar los documentos de stakeholders (opción 2) asegura que la gestión del proyecto refleje la realidad organizacional actual.",
                "domain": "Stakeholders"
            },
            {
                "id": 8,
                "question": "¿Qué métrica es más útil para medir la efectividad del engagement de stakeholders?",
                "options": [
                    "Número de reuniones realizadas",
                    "Nivel de satisfacción de stakeholders",
                    "Cumplimiento del cronograma",
                    "Porcentaje de completitud del trabajo"
                ],
                "correctAnswer": 1,
                "explanation": "El nivel de satisfacción (opción 2) proporciona retroalimentación directa sobre la efectividad de las estrategias de engagement.",
                "domain": "Stakeholders"
            },
            {
                "id": 9,
                "question": "Un stakeholder solicita información confidencial del proyecto. ¿Cuál es la respuesta más apropiada?",
                "options": [
                    "Proveer toda la información solicitada",
                    "Rechazar categóricamente la solicitud",
                    "Consultar el plan de gestión de stakeholders y seguir los protocolos establecidos",
                    "Solicitar aprobación de todos los stakeholders antes de compartir"
                ],
                "correctAnswer": 2,
                "explanation": "Consultar el plan y seguir protocolos (opción 3) asegura que se maneje la información adecuadamente según las políticas del proyecto.",
                "domain": "Stakeholders"
            },
            {
                "id": 10,
                "question": "Durante una crisis del proyecto, ¿qué principio de gestión de stakeholders es más crítico?",
                "options": [
                    "Comunicación transparente y frecuente",
                    "Limitar el acceso a información",
                    "Posponer las decisiones hasta que pase la crisis",
                    "Delegar toda la comunicación al sponsor"
                ],
                "correctAnswer": 0,
                "explanation": "Comunicación transparente (opción 1) mantiene la confianza y permite tomar decisiones informadas durante crisis.",
                "domain": "Stakeholders"
            },
            {
                "id": 11,
                "question": "Un stakeholder externo presenta una queja formal sobre el impacto ambiental del proyecto. ¿Cuál es el primer paso?",
                "options": [
                    "Ignorar la queja por venir de un stakeholder externo",
                    "Documentar la queja y activar el proceso de gestión de issues",
                    "Modificar inmediatamente el proyecto para address la queja",
                    "Escalar directamente a autoridades regulatorias"
                ],
                "correctAnswer": 1,
                "explanation": "Documentar y seguir procesos establecidos (opción 2) asegura un manejo profesional y consistente de las quejas.",
                "domain": "Stakeholders"
            },
            {
                "id": 12,
                "question": "¿Qué técnica es más efectiva para resolver conflictos entre stakeholders con intereses contrapuestos?",
                "options": [
                    "Imposición de la solución del director del proyecto",
                    "Búsqueda de soluciones de ganar-ganar mediante negociación",
                    "Evitación del conflicto hasta que se resuelva solo",
                    "Delegación del conflicto al comité directivo"
                ],
                "correctAnswer": 1,
                "explanation": "Soluciones de ganar-ganar (opción 2) construyen relaciones positivas y sostenibles entre stakeholders.",
                "domain": "Stakeholders"
            },
            {
                "id": 13,
                "question": "El sponsor del proyecto cambia de posición en la organización. ¿Qué acción debe tomar el director del proyecto?",
                "options": [
                    "Continuar como si nada hubiera cambiado",
                    "Actualizar el registro de stakeholders y establecer relación con el nuevo sponsor",
                    "Suspender el proyecto hasta nombrar nuevo sponsor",
                    "Solicitar al sponsor saliente que continúe en el rol"
                ],
                "correctAnswer": 1,
                "explanation": "Actualizar registros y establecer nueva relación (opción 2) es esencial para mantener el apoyo ejecutivo al proyecto.",
                "domain": "Stakeholders"
            },
            {
                "id": 14,
                "question": "¿Cuál es el beneficio principal de realizar análisis de stakeholders regularmente durante el proyecto?",
                "options": [
                    "Aumentar la burocracia del proyecto",
                    "Identificar cambios en las expectativas y relaciones",
                    "Reducir el número de reuniones necesarias",
                    "Eliminar la necesidad de comunicación formal"
                ],
                "correctAnswer": 1,
                "explanation": "Identificar cambios (opción 2) permite ajustar estrategias de engagement proactivamente.",
                "domain": "Stakeholders"
            },
            {
                "id": 15,
                "question": "Un stakeholder solicita un reporte personalizado que no estaba planeado. ¿Cómo manejar esta solicitud?",
                "options": [
                    "Rechazar la solicitud por no estar en el plan",
                    "Desarrollar el reporte inmediatamente sin cuestionar",
                    "Evaluar el valor del reporte y su impacto en el trabajo del proyecto",
                    "Delegar la solicitud al equipo de soporte técnico"
                ],
                "correctAnswer": 2,
                "explanation": "Evaluar valor e impacto (opción 3) asegura que se utilicen recursos del proyecto eficientemente.",
                "domain": "Stakeholders"
            },
            {
                "id": 16,
                "question": "¿Qué elemento es más crítico en el plan de engagement de stakeholders?",
                "options": [
                    "Estrategias de comunicación específicas para cada grupo",
                    "Lista completa de todos los stakeholders posibles",
                    "Presupuesto detallado para actividades de engagement",
                    "Cronograma de todas las reuniones planeadas"
                ],
                "correctAnswer": 0,
                "explanation": "Estrategias de comunicación específicas (opción 1) son el corazón del engagement efectivo de stakeholders.",
                "domain": "Stakeholders"
            },
            {
                "id": 17,
                "question": "Durante el cierre del proyecto, ¿qué actividad de stakeholders es más importante?",
                "options": [
                    "Obtener aceptación formal de los entregables",
                    "Realizar una evaluación de satisfacción de stakeholders",
                    "Documentar lecciones aprendidas sobre gestión de stakeholders",
                    "Todas las anteriores"
                ],
                "correctAnswer": 3,
                "explanation": "Todas las actividades (opción 4) son críticas para un cierre completo y profesional del proyecto.",
                "domain": "Stakeholders"
            },
            {
                "id": 18,
                "question": "Un stakeholder influyente está promoviendo activamente el proyecto entre sus colegas. ¿Cómo debe capitalizar esto el director del proyecto?",
                "options": [
                    "Ignorar el apoyo para no crear expectativas",
                    "Identificarlo como champion y involucrarlo en actividades clave",
                    "Solicitar que reduzca su promoción para evitar celos",
                    "Documentar el comportamiento como riesgo potencial"
                ],
                "correctAnswer": 1,
                "explanation": "Identificar como champion (opción 2) aprovecha el apoyo positivo para beneficio del proyecto.",
                "domain": "Stakeholders"
            },
            {
                "id": 19,
                "question": "¿Qué indica un aumento en el número de issues reportados por stakeholders?",
                "options": [
                    "Falta de habilidades del equipo del proyecto",
                    "Mayor engagement y interés en el proyecto",
                    "Mala planificación inicial",
                    "Necesidad de reducir la comunicación"
                ],
                "correctAnswer": 1,
                "explanation": "Mayor engagement (opción 2) puede ser positivo, indicando que los stakeholders se sienten cómodos compartiendo preocupaciones.",
                "domain": "Stakeholders"
            },
            {
                "id": 20,
                "question": "Un stakeholder clave se muestra reticente a adoptar los entregables del proyecto. ¿Qué estrategia es más efectiva?",
                "options": [
                    "Forzar la adopción mediante mandato ejecutivo",
                    "Involucrar al stakeholder en pruebas y desarrollo",
                    "Ignorar la reticencia y continuar con el plan",
                    "Rediseñar los entregables completamente"
                ],
                "correctAnswer": 1,
                "explanation": "Involucrar en pruebas (opción 2) construye ownership y reduce resistencia al cambio.",
                "domain": "Stakeholders"
            },
            {
                "id": 21,
                "question": "¿Cuál es el riesgo principal de no actualizar regularmente el registro de stakeholders?",
                "options": [
                    "Pérdida de relevancia de las estrategias de engagement",
                    "Aumento en el costo de comunicaciones",
                    "Reducción en la calidad de los entregables",
                    "Extensión inevitable del cronograma"
                ],
                "correctAnswer": 0,
                "explanation": "Pérdida de relevancia (opción 1) hace que las estrategias de engagement sean inefectivas.",
                "domain": "Stakeholders"
            },
            {
                "id": 22,
                "question": "Durante una auditoría externa, se identifica debilidad en la gestión de stakeholders. ¿Cuál es la respuesta más profesional?",
                "options": [
                    "Desestimar los hallazgos por venir de auditores externos",
                    "Documentar los hallazgos y desarrollar plan de mejora",
                    "Culpar a los stakeholders por no cooperar",
                    "Suspender temporalmente las actividades de stakeholders"
                ],
                "correctAnswer": 1,
                "explanation": "Documentar y mejorar (opción 2) demuestra madurez organizacional y compromiso con la excelencia.",
                "domain": "Stakeholders"
            },
            {
                "id": 23,
                "question": "¿Qué factor es más importante al priorizar necesidades de stakeholders conflictivas?",
                "options": [
                    "Alineación con los objetivos del negocio",
                    "Volumen de la demanda",
                    "Antigüedad del stakeholder en la organización",
                    "Complexidad técnica de la solicitud"
                ],
                "correctAnswer": 0,
                "explanation": "Alineación con objetivos del negocio (opción 1) asegra que el proyecto entregue valor real.",
                "domain": "Stakeholders"
            },
            {
                "id": 24,
                "question": "Un stakeholder solicita acceso en tiempo real a las métricas del proyecto. ¿Qué considerar antes de concederlo?",
                "options": [
                    "Capacidad del stakeholder para interpretar las métricas",
                    "Impacto en la seguridad y confidencialidad de la información",
                    "Recursos necesarios para mantener el acceso",
                    "Todas las anteriores"
                ],
                "correctAnswer": 3,
                "explanation": "Todas las consideraciones (opción 4) son relevantes para una decisión informada sobre acceso a información.",
                "domain": "Stakeholders"
            },
            {
                "id": 25,
                "question": "¿Qué comportamiento del director del proyecto más contribuye a construir confianza con los stakeholders?",
                "options": [
                    "Transparencia y consistencia en las comunicaciones",
                    "Aprobación inmediata de todas las solicitudes",
                    "Minimización de interacciones para evitar conflictos",
                    "Delegación completa de las relaciones con stakeholders"
                ],
                "correctAnswer": 0,
                "explanation": "Transparencia y consistencia (opción 1) son fundamentales para construir y mantener confianza.",
                "domain": "Stakeholders"
            }
        ]
    },
    "team": {
        "id": "team",
        "name": "Equipo",
        "description": "Clima colaborativo, liderazgo adecuado y desempeño de equipos de alta eficacia en distintos contextos",
        "color": "green",
        "questions": [
            {
                "id": 1,
                "question": "Un miembro del equipo consistentemente entrega trabajo de baja calidad. ¿Cuál es la primera acción del director del proyecto?",
                "options": [
                    "Remover inmediatamente al miembro del equipo",
                    "Documentar el desempeño pobre para acciones disciplinarias",
                    "Conversar privadamente para entender las causas raíz",
                    "Asignar el trabajo a otros miembros del equipo"
                ],
                "correctAnswer": 2,
                "explanation": "Conversar privadamente (opción 3) permite entender el problema y buscar soluciones antes de escalar a acciones formales.",
                "domain": "Team"
            },
            {
                "id": 2,
                "question": "El equipo muestra signos de agotamiento debido a horas extras prolongadas. ¿Qué estrategia es más efectiva?",
                "options": [
                    "Contratar recursos adicionales",
                    "Revisar y optimizar la asignación de trabajo",
                    "Ofrecer bonos por horas extras",
                    "Ignorar la situación temporalmente"
                ],
                "correctAnswer": 1,
                "explanation": "Revisar y optimizar asignación (opción 2) aborda la causa raíz del problema de manera sostenible.",
                "domain": "Team"
            },
            {
                "id": 3,
                "question": "Dos miembros del equipo tienen conflictos personales que afectan su colaboración. ¿Cómo intervenir?",
                "options": [
                    "Forzar una resolución inmediata mediante mandato",
                    "Facilitar una mediación para resolver el conflicto",
                    "Separar a los miembros en diferentes equipos",
                    "Ignorar el conflicto esperando que se resuelva solo"
                ],
                "correctAnswer": 1,
                "explanation": "Facilitar mediación (opción 2) promueve resolución constructiva y aprendizaje del equipo.",
                "domain": "Team"
            },
            {
                "id": 4,
                "question": "¿Qué técnica es más efectiva para construir un equipo cohesionado en un proyecto virtual?",
                "options": [
                    "Comunicación exclusiva por email",
                    "Reuniones virtuales regulares con interacción social",
                    "Minimizar la interacción para maximizar productividad",
                    "Delegar la construcción del equipo al líder técnico"
                ],
                "correctAnswer": 1,
                "explanation": "Reuniones virtuales con interacción social (opción 2) construye relaciones y confianza en equipos distribuidos.",
                "domain": "Team"
            },
            {
                "id": 5,
                "question": "Un miembro del equipo solicita capacitación adicional. ¿Cómo evaluar esta solicitud?",
                "options": [
                    "Rechazar por impactar el cronograma",
                    "Aprobar inmediatamente todas las solicitudes de capacitación",
                    "Evaluar el beneficio para el proyecto versus el costo",
                    "Delegar la decisión al departamento de RH"
                ],
                "correctAnswer": 2,
                "explanation": "Evaluar beneficio versus costo (opción 3) asegura inversiones inteligentes en desarrollo del equipo.",
                "domain": "Team"
            },
            {
                "id": 6,
                "question": "El equipo muestra resistencia a adoptar una nueva metodología. ¿Qué estrategia usar?",
                "options": [
                    "Forzar la adopción mediante política",
                    "Involucrar al equipo en la adaptación de la metodología",
                    "Abandonar la nueva metodología",
                    "Contratar consultores externos para implementarla"
                ],
                "correctAnswer": 1,
                "explanation": "Involucrar al equipo (opción 2) construye ownership y reduce resistencia al cambio.",
                "domain": "Team"
            },
            {
                "id": 7,
                "question": "¿Qué métrica es más útil para evaluar la efectividad del equipo?",
                "options": [
                    "Horas trabajadas por semana",
                    "Velocidad de entrega y calidad del trabajo",
                    "Número de reuniones asistidas",
                    "Cantidad de código producido"
                ],
                "correctAnswer": 1,
                "explanation": "Velocidad y calidad (opción 2) miden resultados reales más que actividades.",
                "domain": "Team"
            },
            {
                "id": 8,
                "question": "Un miembro del equipo destaca consistentemente. ¿Cómo reconocer su contribución?",
                "options": [
                    "Ignorar para no crear celos en el equipo",
                    "Reconocimiento público y oportunidades de crecimiento",
                    "Aumento salarial inmediato",
                    "Reducción de su carga de trabajo"
                ],
                "correctAnswer": 1,
                "explanation": "Reconocimiento público y crecimiento (opción 2) motiva al empleado y establece estándares para el equipo.",
                "domain": "Team"
            },
            {
                "id": 9,
                "question": "El equipo enfrenta un problema técnico complejo. ¿Qué enfoque de liderazgo es más efectivo?",
                "options": [
                    "Dar la solución directamente al equipo",
                    "Facilitar una sesión de resolución de problemas",
                    "Contratar un experto externo inmediatamente",
                    "Posponer el problema hasta tener más información"
                ],
                "correctAnswer": 1,
                "explanation": "Facilitar sesión de resolución (opción 2) desarrolla capacidades del equipo y genera mejores soluciones.",
                "domain": "Team"
            },
            {
                "id": 10,
                "question": "¿Qué factor contribuye más a la motivación del equipo a largo plazo?",
                "options": [
                    "Salarios altos",
                    "Ambiente de trabajo positivo y oportunidades de crecimiento",
                    "Horarios flexibles exclusivamente",
                    "Beneficios marginales extensos"
                ],
                "correctAnswer": 1,
                "explanation": "Ambiente positivo y crecimiento (opción 2) son motivadores sostenibles según teorías de motivación modernas.",
                "domain": "Team"
            },
            {
                "id": 11,
                "question": "Un nuevo miembro se integra al equipo. ¿Qué actividad acelera su efectividad?",
                "options": [
                    "Asignar un mentor del equipo",
                    "Darle tareas fáciles inicialmente",
                    "Excluirlo de reuniones hasta que esté actualizado",
                    "Evaluar su desempeño inmediatamente"
                ],
                "correctAnswer": 0,
                "explanation": "Asignar un mentor (opción 1) facilita la integración y transferencia de conocimiento.",
                "domain": "Team"
            },
            {
                "id": 12,
                "question": "El equipo trabaja en diferentes zonas horarias. ¿Qué práctica mejora la colaboración?",
                "options": [
                    "Sobrecargar a los miembros en zonas horarias convenientes",
                    "Establecer horas de superposición para colaboración sincrónica",
                    "Limitar la comunicación a email asincrónico",
                    "Rotar horarios forzadamente entre el equipo"
                ],
                "correctAnswer": 1,
                "explanation": "Horas de superposición (opción 2) balancea productividad individual con necesidad de colaboración.",
                "domain": "Team"
            },
            {
                "id": 13,
                "question": "¿Qué indica una disminución repentina en la velocidad del equipo?",
                "options": [
                    "Falta de compromiso del equipo",
                    "Problemas técnicos o de dependencies no visibles",
                    "Necesidad de aumentar la presión sobre el equipo",
                    "Momento natural para reducir el ritmo"
                ],
                "correctAnswer": 1,
                "explanation": "Problemas no visibles (opción 2) suelen ser la causa; investigar antes de sacar conclusiones.",
                "domain": "Team"
            },
            {
                "id": 14,
                "question": "Un miembro del equipo solicita trabajar remotamente. ¿Qué factores evaluar?",
                "options": [
                    "Naturaleza de sus responsabilidades y capacidad de colaboración remota",
                    "Preferencias personales del director del proyecto",
                    "Políticas corporativas exclusivamente",
                    "Opinión de otros miembros del equipo"
                ],
                "correctAnswer": 0,
                "explanation": "Naturaleza de responsabilidades (opción 1) determina la viabilidad del trabajo remoto.",
                "domain": "Team"
            },
            {
                "id": 15,
                "question": "El equipo comete un error que impacta el cronograma. ¿Cuál es la respuesta más constructiva?",
                "options": [
                    "Buscar culpables y aplicar sanciones",
                    "Analizar las causas raíz y mejorar procesos",
                    "Ignorar el error para no desmotivar al equipo",
                    "Contratar recursos adicionales inmediatamente"
                ],
                "correctAnswer": 1,
                "explanation": "Analizar causas raíz (opción 2) convierte errores en oportunidades de aprendizaje.",
                "domain": "Team"
            },
            {
                "id": 16,
                "question": "¿Qué actividad de team building es más efectiva para equipos establecidos?",
                "options": [
                    "Retiros anuales fuera de la oficina",
                    "Actividades regulares integradas en el trabajo diario",
                    "Competencias individuales con premios",
                    "Eventos sociales sin relación con el trabajo"
                ],
                "correctAnswer": 1,
                "explanation": "Actividades integradas (opción 2) construyen colaboración de manera sostenible.",
                "domain": "Team"
            },
            {
                "id": 17,
                "question": "Un miembro del equipo tiene excelentes habilidades técnicas pero pobre comunicación. ¿Cómo abordar?",
                "options": [
                    "Ignorar las debilidades de comunicación",
                    "Ofrecer coaching en habilidades blandas",
                    "Reasignar a un rol sin interacción",
                    "Documentar como desempeño insatisfactorio"
                ],
                "correctAnswer": 1,
                "explanation": "Ofrecer coaching (opción 2) invierte en el desarrollo integral del empleado.",
                "domain": "Team"
            },
            {
                "id": 18,
                "question": "El equipo requiere habilidades que no existen internamente. ¿Qué estrategia es más efectiva?",
                "options": [
                    "Contratar externamente inmediatamente",
                    "Capacitar al equipo existente versus contratar",
                    "Rediseñar el proyecto para evitar las habilidades",
                    "Subcontratar toda el área problemática"
                ],
                "correctAnswer": 1,
                "explanation": "Evaluar capacitación versus contratación (opción 2) considera costo a largo plazo y desarrollo organizacional.",
                "domain": "Team"
            },
            {
                "id": 19,
                "question": "¿Qué práctica mejora más la accountability del equipo?",
                "options": [
                    "Micro-gestión de todas las tareas",
                    "Establecer expectativas claras y revisión regular",
                    "Reportes diarios detallados",
                    "Sistema de premios y castigos"
                ],
                "correctAnswer": 1,
                "explanation": "Expectativas claras y revisión (opción 2) promueve accountability sin micro-gestión.",
                "domain": "Team"
            },
            {
                "id": 20,
                "question": "Un miembro del equipo renuncia. ¿Qué proceso seguir para la transición?",
                "options": [
                    "Permitir que se vaya inmediatamente",
                    "Documentación de conocimiento y transferencia",
                    "Contratar reemplazo antes de su salida",
                    "Redistribuir trabajo sin documentación"
                ],
                "correctAnswer": 1,
                "explanation": "Documentación y transferencia (opción 2) minimiza impacto en el proyecto.",
                "domain": "Team"
            },
            {
                "id": 21,
                "question": "El equipo trabaja en un ambiente de alta presión. ¿Qué estrategia previene el burnout?",
                "options": [
                    "Aumentar los incentivos económicos",
                    "Gestionar expectativas y celebrar milestones",
                    "Reducir comunicación para minimizar estrés",
                    "Rotar líderes frecuentemente"
                ],
                "correctAnswer": 1,
                "explanation": "Gestionar expectativas y celebrar logros (opción 2) mantiene motivación en ambientes desafiantes.",
                "domain": "Team"
            },
            {
                "id": 22,
                "question": "¿Qué característica define un equipo de alto desempeño?",
                "options": [
                    "Ausencia completa de conflictos",
                    "Confianza mutua y objetivos compartidos",
                    "Uniformidad en habilidades técnicas",
                    "Trabajo individual excepcional"
                ],
                "correctAnswer": 1,
                "explanation": "Confianza y objetivos compartidos (opción 2) son fundamentales para equipos de alto desempeño.",
                "domain": "Team"
            },
            {
                "id": 23,
                "question": "Un miembro del equipo está sobrecargado pero no comunica el problema. ¿Cómo identificarlo proactivamente?",
                "options": [
                    "Revisión regular de carga de trabajo y well-being",
                    "Esperar a que el miembro reporte problemas",
                    "Analizar métricas de productividad exclusivamente",
                    "Cuestionar constantemente sobre su carga"
                ],
                "correctAnswer": 0,
                "explanation": "Revisión regular proactiva (opción 1) identifica problemas antes de que escalen.",
                "domain": "Team"
            },
            {
                "id": 24,
                "question": "El equipo necesita tomar una decisión técnica crítica. ¿Qué enfoque promueve mejor compromiso?",
                "options": [
                    "Decisión unilateral del director del proyecto",
                    "Consenso del equipo completo",
                    "Consulta con expertos externos exclusivamente",
                    "Votación majority simple"
                ],
                "correctAnswer": 1,
                "explanation": "Consenso del equipo (opción 2) construye ownership y utiliza el conocimiento colectivo.",
                "domain": "Team"
            },
            {
                "id": 25,
                "question": "¿Qué comportamiento del director del proyecto más inspira al equipo?",
                "options": [
                    "Toma de decisiones rápida y autónoma",
                    "Liderazgo servicial y apoyo al desarrollo del equipo",
                    "Conocimiento técnico superior en todas las áreas",
                    "Disponibilidad 24/7 para consultas"
                ],
                "correctAnswer": 1,
                "explanation": "Liderazgo servicial (opción 2) construye lealtad y motivación genuina en el equipo.",
                "domain": "Team"
            }
        ]
    },
"development": {
    "id": "development",
    "name": "Enfoque de Desarrollo",
    "description": "Selección y adaptación de enfoques predictivos, ágiles o híbridos según el contexto del producto y del proyecto",
    "color": "purple",
    "questions": [
        {
            "id": 1,
            "question": "¿En un proyecto con requisitos altamente variables y un mercado competitivo, qué enfoque de desarrollo sería más apropiado?",
            "options": [
                "Predictivo tradicional",
                "Ágil iterativo",
                "Cascada estricta",
                "Secuencial lineal"
            ],
            "correctAnswer": 1,
            "explanation": "El enfoque ágil iterativo es más adecuado para entornos con requisitos cambiantes y necesidad de adaptación rápida.",
            "domain": "Development"
        },
        {
            "id": 2,
            "question": "¿Cuándo es apropiado utilizar un enfoque híbrido en la gestión de proyectos?",
            "options": [
                "Solo en proyectos pequeños",
                "Cuando partes del proyecto tienen requisitos estables y otras son variables",
                "Exclusivamente en proyectos de TI",
                "Nunca, debe elegirse un solo enfoque"
            ],
            "correctAnswer": 1,
            "explanation": "Los enfoques híbridos son apropiados cuando diferentes partes del proyecto tienen diferentes características y necesidades de gestión.",
            "domain": "Development"
        },
        {
            "id": 3,
            "question": "¿Qué factor es más importante al seleccionar un enfoque de desarrollo para un proyecto?",
            "options": [
                "Preferencia personal del director del proyecto",
                "Naturaleza del producto y contexto del proyecto",
                "Tecnologías disponibles en el mercado",
                "Tamaño del equipo asignado"
            ],
            "correctAnswer": 1,
            "explanation": "La naturaleza del producto y contexto del proyecto determinan el enfoque más adecuado, no las preferencias personales.",
            "domain": "Development"
        },
        {
            "id": 4,
            "question": "En un proyecto de desarrollo de software para un sistema de control de tráfico aéreo, ¿qué enfoque sería más apropiado?",
            "options": [
                "Ágil puro con sprints de una semana",
                "Predictivo con fases bien definidas",
                "Híbrido con elementos ágiles y predictivos",
                "Adaptativo extremo"
            ],
            "correctAnswer": 1,
            "explanation": "Para sistemas críticos con requisitos estables y alta necesidad de calidad, el enfoque predictivo es más adecuado.",
            "domain": "Development"
        },
        {
            "id": 5,
            "question": "¿Qué característica define principalmente un enfoque ágil?",
            "options": [
                "Entregas frecuentes y adaptación continua",
                "Documentación extensiva",
                "Planificación detallada al inicio",
                "Estructura organizacional jerárquica"
            ],
            "correctAnswer": 0,
            "explanation": "Las entregas frecuentes y adaptación continua son características fundamentales de los enfoques ágiles.",
            "domain": "Development"
        },
        {
            "id": 6,
            "question": "¿Cuál es el propósito principal de los sprints en Scrum?",
            "options": [
                "Maximizar las horas de trabajo del equipo",
                "Entregar incrementos de valor en time-boxes fijos",
                "Reducir la comunicación con stakeholders",
                "Eliminar la necesidad de planificación"
            ],
            "correctAnswer": 1,
            "explanation": "Los sprints permiten entregar incrementos de valor de manera consistente en períodos de tiempo fijos.",
            "domain": "Development"
        },
        {
            "id": 7,
            "question": "¿Qué ventaja principal ofrece el enfoque predictivo?",
            "options": [
                "Flexibilidad para cambios constantes",
                "Predictibilidad en costos y cronograma",
                "Minimización de documentación",
                "Adaptación rápida a feedback"
            ],
            "correctAnswer": 1,
            "explanation": "El enfoque predictivo ofrece mayor predictibilidad en costos y cronograma cuando los requisitos son estables.",
            "domain": "Development"
        },
        {
            "id": 8,
            "question": "¿Cuándo es recomendable usar un enfoque iterativo incremental?",
            "options": [
                "Cuando los requisitos son completamente conocidos y estables",
                "Cuando el producto necesita evolucionar basado en feedback",
                "Solo para proyectos de mantenimiento",
                "Cuando el equipo es completamente nuevo"
            ],
            "correctAnswer": 1,
            "explanation": "Los enfoques iterativos incrementales son ideales cuando el producto necesita evolucionar basado en feedback continuo.",
            "domain": "Development"
        },
        {
            "id": 9,
            "question": "¿Qué elemento es crítico para el éxito de un enfoque ágil?",
            "options": [
                "Stakeholders comprometidos y disponibles",
                "Documentación exhaustiva de requisitos",
                "Planificación detallada de todo el proyecto",
                "Estructura organizacional formal"
            ],
            "correctAnswer": 0,
            "explanation": "En enfoques ágiles, la participación activa de stakeholders es esencial para el feedback continuo.",
            "domain": "Development"
        },
        {
            "id": 10,
            "question": "¿Qué indica la necesidad de adoptar un enfoque adaptativo?",
            "options": [
                "Alta incertidumbre en requisitos y solución",
                "Presupuesto muy limitado",
                "Equipo con poca experiencia",
                "Cronograma extremadamente ajustado"
            ],
            "correctAnswer": 0,
            "explanation": "La alta incertidumbre en requisitos y solución es el indicador principal para enfoques adaptativos.",
            "domain": "Development"
        },
        {
            "id": 11,
            "question": "¿Cómo se manejan los cambios de requisitos en un enfoque predictivo?",
            "options": [
                "Se incorporan inmediatamente en el trabajo actual",
                "Se gestionan a través de un proceso formal de control de cambios",
                "Se posponen para una siguiente versión",
                "Se rechazan automáticamente"
            ],
            "correctAnswer": 1,
            "explanation": "En enfoques predictivos, los cambios se manejan mediante procesos formales de control de cambios.",
            "domain": "Development"
        },
        {
            "id": 12,
            "question": "¿Qué rol tiene el Product Owner en Scrum?",
            "options": [
                "Gestionar el trabajo diario del equipo",
                "Representar los intereses de los stakeholders y maximizar el valor",
                "Resolver impedimentos técnicos",
                "Definir las metodologías de desarrollo"
            ],
            "correctAnswer": 1,
            "explanation": "El Product Owner representa los intereses de los stakeholders y maximiza el valor del producto.",
            "domain": "Development"
        },
        {
            "id": 13,
            "question": "¿Cuál es la principal diferencia entre iterativo e incremental?",
            "options": [
                "El iterativo entrega partes completas, el incremental mejora progresivamente",
                "No hay diferencia significativa",
                "El incremental es más rápido que el iterativo",
                "El iterativo es para software, el incremental para construcción"
            ],
            "correctAnswer": 0,
            "explanation": "Iterativo entrega partes funcionales completas en cada ciclo, incremental añade funcionalidades progresivamente.",
            "domain": "Development"
        },
        {
            "id": 14,
            "question": "¿Qué factor justifica la selección de un enfoque híbrido?",
            "options": [
                "Complejidad del proyecto que requiere múltiples enfoques",
                "Falta de experiencia del equipo en un solo enfoque",
                "Preferencia personal del sponsor",
                "Tendencia del mercado"
            ],
            "correctAnswer": 0,
            "explanation": "La complejidad del proyecto que requiere diferentes enfoques para diferentes partes justifica un enfoque híbrido.",
            "domain": "Development"
        },
        {
            "id": 15,
            "question": "¿Qué práctica es esencial en DevOps?",
            "options": [
                "Colaboración continua entre desarrollo y operaciones",
                "Documentación exhaustiva de procesos",
                "Reuniones diarias extensas",
                "Control estricto de cambios"
            ],
            "correctAnswer": 0,
            "explanation": "DevOps se centra en la colaboración continua entre desarrollo y operaciones para entrega rápida y confiable.",
            "domain": "Development"
        },
        {
            "id": 16,
            "question": "¿Cuándo es apropiado usar Kanban en lugar de Scrum?",
            "options": [
                "Cuando el trabajo es continuo y no tiene sprints fijos",
                "Cuando el equipo es muy grande",
                "Solo para proyectos de mantenimiento",
                "Cuando no hay Product Owner disponible"
            ],
            "correctAnswer": 0,
            "explanation": "Kanban es apropiado para flujos de trabajo continuos donde no hay sprints time-boxed.",
            "domain": "Development"
        },
        {
            "id": 17,
            "question": "¿Qué principio ágil enfatiza la simplicidad?",
            "options": [
                "El arte de maximizar la cantidad de trabajo no realizado",
                "Entregar software funcionando frecuentemente",
                "La simplicidad como principio esencial",
                "Desarrollo sostenible a ritmo constante"
            ],
            "correctAnswer": 0,
            "explanation": "El principio 'El arte de maximizar la cantidad de trabajo no realizado' enfatiza la simplicidad.",
            "domain": "Development"
        },
        {
            "id": 18,
            "question": "¿Cómo afecta el tamaño del equipo a la selección del enfoque?",
            "options": [
                "Los equipos grandes requieren enfoques más formales",
                "No afecta la selección del enfoque",
                "Solo los equipos pequeños pueden usar ágil",
                "Los equipos grandes son siempre más eficientes"
            ],
            "correctAnswer": 0,
            "explanation": "El tamaño del equipo influye en la selección del enfoque, requiriendo mayor formalidad en equipos grandes.",
            "domain": "Development"
        },
        {
            "id": 19,
            "question": "¿Qué indica la necesidad de un enfoque lean?",
            "options": [
                "Alto desperdicio en procesos actuales",
                "Baja calidad en entregables",
                "Falta de documentación",
                "Equipo sobrecargado de trabajo"
            ],
            "correctAnswer": 0,
            "explanation": "La identificación de alto desperdicio en procesos indica la necesidad de enfoques lean.",
            "domain": "Development"
        },
        {
            "id": 20,
            "question": "¿Cuál es el objetivo principal de los time-boxes en enfoques ágiles?",
            "options": [
                "Crear presión artificial en el equipo",
                "Establecer ciclos de feedback regulares",
                "Limitar la creatividad del equipo",
                "Reducir costos operativos"
            ],
            "correctAnswer": 1,
            "explanation": "Los time-boxes establecen ciclos regulares de feedback y entrega de valor.",
            "domain": "Development"
        },
        {
            "id": 21,
            "question": "¿Qué característica define un enfoque adaptativo?",
            "options": [
                "Capacidad de responder a cambios emergentes",
                "Adherencia estricta al plan inicial",
                "Documentación exhaustiva de procesos",
                "Estructura de comando y control"
            ],
            "correctAnswer": 0,
            "explanation": "La capacidad de responder efectivamente a cambios emergentes define los enfoques adaptativos.",
            "domain": "Development"
        },
        {
            "id": 22,
            "question": "¿Cómo se maneja el riesgo en enfoques iterativos?",
            "options": [
                "Se identifica y mitiga tempranamente mediante ciclos cortos",
                "Se transfiere completamente al cliente",
                "Se ignora hasta que se materialice",
                "Se documenta extensivamente al inicio"
            ],
            "correctAnswer": 0,
            "explanation": "Los ciclos iterativos permiten identificar y mitigar riesgos tempranamente.",
            "domain": "Development"
        },
        {
            "id": 23,
            "question": "¿Qué ventaja ofrece el pair programming en enfoques ágiles?",
            "options": [
                "Mayor calidad del código y transferencia de conocimiento",
                "Reducción de costos de desarrollo",
                "Eliminación de la necesidad de pruebas",
                "Automatización completa del desarrollo"
            ],
            "explanation": "El pair programming mejora la calidad del código y facilita la transferencia de conocimiento.",
            "domain": "Development"
        },
        {
            "id": 24,
            "question": "¿Cuándo es apropiado cambiar de enfoque durante un proyecto?",
            "options": [
                "Cuando cambian fundamentalmente las condiciones del proyecto",
                "Cuando el equipo se aburre del enfoque actual",
                "Cada 3 meses por buenas prácticas",
                "Cuando el director del proyecto cambia"
            ],
            "correctAnswer": 0,
            "explanation": "Solo es apropiado cambiar de enfoque cuando las condiciones del proyecto cambian fundamentalmente.",
            "domain": "Development"
        },
        {
            "id": 25,
            "question": "¿Qué métrica es más útil para evaluar un enfoque de desarrollo?",
            "options": [
                "Velocidad de entrega de valor al negocio",
                "Número de documentos producidos",
                "Cantidad de reuniones realizadas",
                "Horas de trabajo invertidas"
            ],
            "correctAnswer": 0,
            "explanation": "La velocidad de entrega de valor al negocio es la métrica más significativa para evaluar enfoques.",
            "domain": "Development"
        }
    ]
},
  "planning": {
    "id": "planning",
    "name": "Planificación",
    "description": "Planes integrados y evolutivos, coordinación del trabajo y adaptación continua de los planes al entorno y a la información emergente",
    "color": "yellow",
    "questions": [
        {
            "id": 1,
            "question": "¿Qué característica principal distingue la planificación en enfoques ágiles versus predictivos?",
            "options": [
                "Los ágiles no planifican",
                "Los predictivos son más detallados al inicio",
                "Solo los predictivos usan cronogramas",
                "Los ágiles evitan la documentación"
            ],
            "correctAnswer": 1,
            "explanation": "Los enfoques predictivos tienden a tener planificación más detallada al inicio, mientras los ágiles planifican de forma iterativa.",
            "domain": "Planning"
        },
        {
            "id": 2,
            "question": "¿Por qué es importante mantener planes evolutivos en proyectos complejos?",
            "options": [
                "Para reducir el trabajo de planificación",
                "Para adaptarse a cambios y nueva información",
                "Para impresionar a los stakeholders",
                "Porque es requerido por PMI"
            ],
            "correctAnswer": 1,
            "explanation": "Los planes evolutivos permiten la adaptación continua basada en aprendizaje y cambios en el entorno del proyecto.",
            "domain": "Planning"
        },
        {
            "id": 3,
            "question": "¿Qué elemento es más crítico en un plan de proyecto integrado?",
            "options": [
                "Consistencia entre todos los componentes del plan",
                "Extensión de la documentación",
                "Cantidad de detalles incluidos",
                "Formato de presentación"
            ],
            "correctAnswer": 0,
            "explanation": "La consistencia entre todos los componentes del plan asegura una ejecución coordinada y efectiva.",
            "domain": "Planning"
        },
        {
            "id": 4,
            "question": "¿Cuál es el propósito principal de la planificación por niveles?",
            "options": [
                "Involucrar diferentes niveles de la organización",
                "Planificar con diferente nivel de detalle según avanza el proyecto",
                "Crear múltiples versiones del mismo plan",
                "Satisfacer requisitos de diferentes stakeholders"
            ],
            "correctAnswer": 1,
            "explanation": "La planificación por niveles permite ajustar el nivel de detalle según la información disponible y necesidades del momento.",
            "domain": "Planning"
        },
        {
            "id": 5,
            "question": "¿Qué técnica es más efectiva para gestionar la incertidumbre en la planificación?",
            "options": [
                "Planificación detallada de todo al inicio",
                "Uso de buffers y reservas de contingencia",
                "Ignorar la incertidumbre hasta que se resuelva",
                "Planificación basada en mejores casos"
            ],
            "correctAnswer": 1,
            "explanation": "Buffers y reservas de contingencia permiten manejar la incertidumbre de manera proactiva.",
            "domain": "Planning"
        },
        {
            "id": 6,
            "question": "¿Cómo se integran los planes de diferentes áreas en un proyecto?",
            "options": [
                "A través de un plan maestro del proyecto",
                "Manteniendo planes separados por especialidad",
                "Solo integrando cronogramas",
                "Mediante reuniones de coordinación semanales"
            ],
            "correctAnswer": 0,
            "explanation": "Un plan maestro del proyecto integra todos los planes específicos en una visión coherente.",
            "domain": "Planning"
        },
        {
            "id": 7,
            "question": "¿Qué ventaja ofrece la planificación rolling wave?",
            "options": [
                "Permite planificar con detalle solo lo inmediato",
                "Elimina la necesidad de planificación a largo plazo",
                "Reduce el trabajo de planificación total",
                "Automatiza completamente la planificación"
            ],
            "correctAnswer": 0,
            "explanation": "La planificación rolling wave permite planificar con detalle solo el trabajo inmediato, dejando el futuro con menor detalle.",
            "domain": "Planning"
        },
        {
            "id": 8,
            "question": "¿Cuál es el rol de los hitos en la planificación?",
            "options": [
                "Marcar puntos significativos de progreso",
                "Aumentar la cantidad de reuniones",
                "Complicar el cronograma",
                "Satisfacer requisitos de reporte"
            ],
            "correctAnswer": 0,
            "explanation": "Los hitos marcan puntos significativos de progreso y facilitan el seguimiento del proyecto.",
            "domain": "Planning"
        },
        {
            "id": 9,
            "question": "¿Qué información es más crítica para una planificación realista?",
            "options": [
                "Capacidades reales del equipo y organización",
                "Opiniones de expertos externos",
                "Tendencias del mercado",
                "Historias de éxito de otros proyectos"
            ],
            "correctAnswer": 0,
            "explanation": "Conocer las capacidades reales del equipo y organización es fundamental para planificación realista.",
            "domain": "Planning"
        },
        {
            "id": 10,
            "question": "¿Cómo afectan las dependencias externas a la planificación?",
            "options": [
                "Requieren identificación y gestión proactiva",
                "Deben ignorarse para simplificar la planificación",
                "Solo afectan proyectos grandes",
                "Son responsabilidad exclusiva del proveedor"
            ],
            "correctAnswer": 0,
            "explanation": "Las dependencias externas requieren identificación y gestión proactiva en la planificación.",
            "domain": "Planning"
        },
        {
            "id": 11,
            "question": "¿Qué principio guía la planificación en entornos ágiles?",
            "options": [
                "Planificación detallada de todo el proyecto",
                "Planificación justo a tiempo y suficiente",
                "Minimización de toda planificación",
                "Delegación completa de la planificación al equipo"
            ],
            "correctAnswer": 1,
            "explanation": "En ágiles, se prefiere planificación justo a tiempo y suficiente, no exhaustiva.",
            "domain": "Planning"
        },
        {
            "id": 12,
            "question": "¿Cuál es el beneficio de usar herramientas de planificación visual?",
            "options": [
                "Mejor comunicación y comprensión del plan",
                "Reducción del tiempo de planificación",
                "Eliminación de la necesidad de seguimiento",
                "Automatización de la ejecución"
            ],
            "explanation": "Las herramientas visuales mejoran la comunicación y comprensión del plan por todos los stakeholders.",
            "domain": "Planning"
        },
        {
            "id": 13,
            "question": "¿Qué indica la necesidad de re-planificar un proyecto?",
            "options": [
                "Desviaciones significativas de las líneas base",
                "Cada mes como buena práctica",
                "Cuando el equipo lo solicita",
                "Solo cuando el sponsor lo ordena"
            ],
            "correctAnswer": 0,
            "explanation": "Desviaciones significativas de las líneas base indican necesidad de re-planificación.",
            "domain": "Planning"
        },
        {
            "id": 14,
            "question": "¿Cómo se manejan los supuestos en la planificación?",
            "options": [
                "Se documentan y monitorean continuamente",
                "Se consideran hechos establecidos",
                "Se ignoran para simplificar",
                "Se delegan a los stakeholders"
            ],
            "correctAnswer": 0,
            "explanation": "Los supuestos deben documentarse y monitorearse continuamente durante el proyecto.",
            "domain": "Planning"
        },
        {
            "id": 15,
            "question": "¿Qué técnica ayuda a identificar el camino crítico?",
            "options": [
                "Método de ruta crítica (CPM)",
                "Diagrama de Gantt simple",
                "Lista de tareas priorizadas",
                "Análisis de riesgos cualitativo"
            ],
            "correctAnswer": 0,
            "explanation": "El método de ruta crítica (CPM) identifica las tareas que determinan la duración mínima del proyecto.",
            "domain": "Planning"
        },
        {
            "id": 16,
            "question": "¿Por qué es importante la planificación de capacidades?",
            "options": [
                "Asegura que los recursos estén disponibles cuando se necesiten",
                "Maximiza la utilización de recursos al 100%",
                "Reduce los costos de recursos",
                "Elimina la necesidad de contratación externa"
            ],
            "correctAnswer": 0,
            "explanation": "La planificación de capacidades asegura disponibilidad de recursos cuando se necesiten.",
            "domain": "Planning"
        },
        {
            "id": 17,
            "question": "¿Qué ventaja ofrece la planificación basada en escenarios?",
            "options": [
                "Prepara al proyecto para diferentes eventualidades",
                "Reduce el trabajo de planificación",
                "Elimina la incertidumbre",
                "Automatiza la toma de decisiones"
            ],
            "correctAnswer": 0,
            "explanation": "La planificación por escenarios prepara al proyecto para diferentes eventualidades.",
            "domain": "Planning"
        },
        {
            "id": 18,
            "question": "¿Cómo contribuye la planificación a la gestión de riesgos?",
            "options": [
                "Identifica riesgos potenciales tempranamente",
                "Elimina todos los riesgos del proyecto",
                "Transfiere riesgos a terceros",
                "Documenta riesgos para auditoría"
            ],
            "correctAnswer": 0,
            "explanation": "La planificación proactiva identifica riesgos potenciales tempranamente.",
            "domain": "Planning"
        },
        {
            "id": 19,
            "question": "¿Qué elemento es clave en la planificación de comunicaciones?",
            "options": [
                "Identificar necesidades de información de cada stakeholder",
                "Maximizar la cantidad de reuniones",
                "Usar las herramientas más modernas",
                "Documentar todas las conversaciones"
            ],
            "correctAnswer": 0,
            "explanation": "Identificar necesidades específicas de información de cada stakeholder es clave en planificación de comunicaciones.",
            "domain": "Planning"
        },
        {
            "id": 20,
            "question": "¿Cómo se determina el nivel apropiado de detalle en planificación?",
            "options": [
                "Balanceando el valor de la información versus el costo de obtenerla",
                "Incluyendo el máximo detalle posible",
                "Usando siempre el mismo nivel para consistencia",
                "Delegando la decisión al equipo técnico"
            ],
            "correctAnswer": 0,
            "explanation": "El nivel de detalle debe balancear el valor de la información versus el costo de obtenerla.",
            "domain": "Planning"
        },
        {
            "id": 21,
            "question": "¿Qué rol juegan las restricciones en la planificación?",
            "options": [
                "Definen los límites dentro de los cuales se debe planificar",
                "Deben ignorarse para permitir creatividad",
                "Solo afectan la planificación inicial",
                "Son responsabilidad exclusiva del sponsor"
            ],
            "correctAnswer": 0,
            "explanation": "Las restricciones definen los límites dentro de los cuales debe ocurrir la planificación.",
            "domain": "Planning"
        },
        {
            "id": 22,
            "question": "¿Cuál es el beneficio de la planificación colaborativa?",
            "options": [
                "Mayor compromiso y conocimiento colectivo",
                "Reducción del tiempo de planificación",
                "Eliminación de conflictos",
                "Automatización del proceso"
            ],
            "correctAnswer": 0,
            "explanation": "La planificación colaborativa genera mayor compromiso y aprovecha el conocimiento colectivo.",
            "domain": "Planning"
        },
        {
            "id": 23,
            "question": "¿Cómo se manejan los cambios durante la planificación?",
            "options": [
                "A través de un proceso controlado de gestión de cambios",
                "Implementándolos inmediatamente",
                "Ignorándolos hasta la siguiente fase",
                "Delegándolos al comité de cambios"
            ],
            "correctAnswer": 0,
            "explanation": "Los cambios durante planificación deben manejarse mediante proceso controlado de gestión de cambios.",
            "domain": "Planning"
        },
        {
            "id": 24,
            "question": "¿Qué métrica es más útil para evaluar la efectividad de la planificación?",
            "options": [
                "Grado de cumplimiento de los planes versus realidad",
                "Cantidad de documentos de planificación producidos",
                "Tiempo invertido en planificación",
                "Número de reuniones de planificación"
            ],
            "correctAnswer": 0,
            "explanation": "El grado de cumplimiento de planes versus realidad mide la efectividad de la planificación.",
            "domain": "Planning"
        },
        {
            "id": 25,
            "question": "¿Cuál es el resultado principal de una planificación exitosa?",
            "options": [
                "Un roadmap claro y realista para ejecución",
                "Documentación exhaustiva de todos los aspectos",
                "Aprobación de todos los stakeholders",
                "Asignación completa de recursos"
            ],
            "correctAnswer": 0,
            "explanation": "Un roadmap claro y realista para ejecución es el resultado principal de planificación exitosa.",
            "domain": "Planning"
        }
    ]
},
 "project-work": {
    "id": "project-work",
    "name": "Trabajo del Proyecto",
    "description": "Procesos apropiados, comunicación efectiva, gestión de recursos físicos y adquisiciones, y aprendizaje continuo",
    "color": "red",
    "questions": [
        {
            "id": 1,
            "question": "¿En un proyecto de construcción, qué aspecto de la gestión de trabajo es más crítico para el éxito?",
            "options": [
                "La tecnología más avanzada",
                "La coordinación de recursos y secuencia de trabajo",
                "El presupuesto más alto",
                "El equipo más grande"
            ],
            "correctAnswer": 1,
            "explanation": "La coordinación efectiva de recursos y secuencia de trabajo es fundamental en proyectos de construcción para evitar retrasos y costos adicionales.",
            "domain": "Project Work"
        },
        {
            "id": 2,
            "question": "¿Cómo contribuye el aprendizaje continuo al éxito del trabajo del proyecto?",
            "options": [
                "Aumenta los costos innecesariamente",
                "Mejora procesos y resultados futuros",
                "Solo es útil para proyectos futuros",
                "Distrae al equipo del trabajo actual"
            ],
            "correctAnswer": 1,
            "explanation": "El aprendizaje continuo permite mejorar procesos y resultados tanto en el proyecto actual como en futuros proyectos.",
            "domain": "Project Work"
        },
        {
            "id": 3,
            "question": "¿Qué elemento es más importante en la gestión de comunicaciones del proyecto?",
            "options": [
                "Frecuencia de las comunicaciones",
                "Relevancia y efectividad de la información compartida",
                "Cantidad de canales utilizados",
                "Formalidad de los reportes"
            ],
            "correctAnswer": 1,
            "explanation": "La relevancia y efectividad de la información compartida es más importante que la frecuencia o cantidad de comunicaciones.",
            "domain": "Project Work"
        },
        {
            "id": 4,
            "question": "¿Cuál es el propósito principal de las reuniones diarias en metodologías ágiles?",
            "options": [
                "Coordinar el trabajo del día y identificar impedimentos",
                "Reportar estado a la gerencia",
                "Socializar entre miembros del equipo",
                "Documentar el progreso detallado"
            ],
            "correctAnswer": 0,
            "explanation": "Las reuniones diarias coordinan el trabajo del día y identifican impedimentos para removerlos rápidamente.",
            "domain": "Project Work"
        },
        {
            "id": 5,
            "question": "¿Qué técnica es más efectiva para gestionar recursos físicos en un proyecto?",
            "options": [
                "Inventario justo a tiempo (JIT)",
                "Almacenamiento máximo para evitar faltantes",
                "Adquisición según disponibilidad en mercado",
                "Delegación completa al proveedor"
            ],
            "correctAnswer": 0,
            "explanation": "El inventario justo a tiempo optimiza el uso de recursos y reduce costos de almacenamiento.",
            "domain": "Project Work"
        },
        {
            "id": 6,
            "question": "¿Cómo se debe manejar un conflicto entre procesos establecidos y necesidades del proyecto?",
            "options": [
                "Seguir siempre los procesos establecidos",
                "Adaptar los procesos según las necesidades específicas del proyecto",
                "Ignorar los procesos para agilizar el trabajo",
                "Escalar inmediatamente a la gerencia"
            ],
            "correctAnswer": 1,
            "explanation": "Los procesos deben adaptarse a las necesidades específicas del proyecto, manteniendo los principios fundamentales.",
            "domain": "Project Work"
        },
        {
            "id": 7,
            "question": "¿Qué ventaja ofrece el uso de herramientas colaborativas en el trabajo del proyecto?",
            "options": [
                "Transparencia y acceso centralizado a la información",
                "Reducción de reuniones presenciales",
                "Automatización completa del trabajo",
                "Eliminación de la documentación"
            ],
            "correctAnswer": 0,
            "explanation": "Las herramientas colaborativas proporcionan transparencia y acceso centralizado a la información del proyecto.",
            "domain": "Project Work"
        },
        {
            "id": 8,
            "question": "¿Cuál es el rol principal del director de proyecto en la ejecución del trabajo?",
            "options": [
                "Realizar el trabajo técnico directamente",
                "Facilitar y remover impedimentos para el equipo",
                "Controlar cada tarea individualmente",
                "Reportar exclusivamente a stakeholders"
            ],
            "correctAnswer": 1,
            "explanation": "El director de proyecto debe facilitar el trabajo y remover impedimentos para que el equipo pueda ejecutar efectivamente.",
            "domain": "Project Work"
        },
        {
            "id": 9,
            "question": "¿Qué indica una distribución efectiva del trabajo?",
            "options": [
                "Todas las tareas asignadas equitativamente",
                "Asignación según habilidades y disponibilidad",
                "El equipo más experimentado hace la mayor parte",
                "Distribución aleatoria para desarrollar habilidades"
            ],
            "correctAnswer": 1,
            "explanation": "La distribución efectiva considera habilidades, experiencia y disponibilidad de cada miembro del equipo.",
            "domain": "Project Work"
        },
        {
            "id": 10,
            "question": "¿Cómo se gestionan las adquisiciones de manera efectiva?",
            "options": [
                "A través de un proceso formal de selección y contratación",
                "Comprando siempre al proveedor más barato",
                "Utilizando exclusivamente proveedores conocidos",
                "Delegando completamente al departamento de compras"
            ],
            "correctAnswer": 0,
            "explanation": "Un proceso formal de selección y contratación asegura que se elijan los proveedores más adecuados.",
            "domain": "Project Work"
        },
        {
            "id": 11,
            "question": "¿Qué práctica mejora la calidad del trabajo del proyecto?",
            "options": [
                "Revisiones periódicas y retroalimentación continua",
                "Aumentar los estándares de calidad gradualmente",
                "Contratar solo personal experimentado",
                "Reducir los plazos de entrega"
            ],
            "correctAnswer": 0,
            "explanation": "Revisiones periódicas y retroalimentación continua son clave para mejorar y mantener la calidad.",
            "domain": "Project Work"
        },
        {
            "id": 12,
            "question": "¿Cómo se manejan los cambios en los requisitos durante la ejecución?",
            "options": [
                "A través de un proceso formal de control de cambios",
                "Implementándolos inmediatamente si son pequeños",
                "Posponiéndolos para la siguiente fase",
                "Rechazándolos para mantener el plan original"
            ],
            "correctAnswer": 0,
            "explanation": "Un proceso formal de control de cambios asegura que se evalúe el impacto antes de implementar cambios.",
            "domain": "Project Work"
        },
        {
            "id": 13,
            "question": "¿Qué beneficio principal ofrece la estandarización de procesos?",
            "options": [
                "Consistencia y predictibilidad en los resultados",
                "Reducción de la creatividad del equipo",
                "Eliminación de la necesidad de supervisión",
                "Automatización completa del trabajo"
            ],
            "correctAnswer": 0,
            "explanation": "La estandarización proporciona consistencia y predictibilidad en los resultados del proyecto.",
            "domain": "Project Work"
        },
        {
            "id": 14,
            "question": "¿Cuál es la mejor estrategia para manejar múltiples dependencias?",
            "options": [
                "Mapeo visual y gestión proactiva de interdependencias",
                "Enfocarse en una dependencia a la vez",
                "Delegar cada dependencia a un miembro diferente",
                "Ignorar dependencias menores"
            ],
            "correctAnswer": 0,
            "explanation": "El mapeo visual y gestión proactiva permite manejar eficientemente múltiples interdependencias.",
            "domain": "Project Work"
        },
        {
            "id": 15,
            "question": "¿Qué rol juega la documentación en el trabajo del proyecto?",
            "options": [
                "Proporcionar trazabilidad y base para aprendizaje",
                "Cumplir requisitos administrativos",
                "Justificar el trabajo realizado",
                "Complicar innecesariamente el proyecto"
            ],
            "correctAnswer": 0,
            "explanation": "La documentación adecuada proporciona trazabilidad y sirve como base para aprendizaje organizacional.",
            "domain": "Project Work"
        },
        {
            "id": 16,
            "question": "¿Cómo se optimiza la utilización de recursos compartidos?",
            "options": [
                "Planificación coordinada y comunicación anticipada",
                "Acaparando recursos para el proyecto",
                "Trabajando fuera del horario normal",
                "Reduciendo el alcance del proyecto"
            ],
            "correctAnswer": 0,
            "explanation": "La planificación coordinada y comunicación anticipada optimiza el uso de recursos compartidos.",
            "domain": "Project Work"
        },
        {
            "id": 17,
            "question": "¿Qué técnica es más efectiva para el seguimiento del progreso?",
            "options": [
                "Métricas objetivas y revisiones regulares",
                "Reportes subjetivos del equipo",
                "Inspecciones sorpresa",
                "Encuestas de satisfacción"
            ],
            "correctAnswer": 0,
            "explanation": "Métricas objetivas combinadas con revisiones regulares proporcionan el seguimiento más efectivo.",
            "domain": "Project Work"
        },
        {
            "id": 18,
            "question": "¿Cómo se manejan los conocimientos adquiridos durante el proyecto?",
            "options": [
                "Documentando lecciones aprendidas a lo largo del proyecto",
                "Solo al final del proyecto",
                "Manteniendo conocimiento tácito en el equipo",
                "Contratando consultores externos"
            ],
            "correctAnswer": 0,
            "explanation": "Documentar lecciones aprendidas continuamente captura el conocimiento cuando está fresco.",
            "domain": "Project Work"
        },
        {
            "id": 19,
            "question": "¿Qué caracteriza una comunicación efectiva en el proyecto?",
            "options": [
                "Clara, oportuna y dirigida a la audiencia adecuada",
                "Frecuente y detallada",
                "Formal y documentada",
                "Directa y sin filtros"
            ],
            "correctAnswer": 0,
            "explanation": "La comunicación efectiva es clara, oportuna y dirigida específicamente a la audiencia que necesita la información.",
            "domain": "Project Work"
        },
        {
            "id": 20,
            "question": "¿Cómo se asegura la calidad en los entregables?",
            "options": [
                "Pruebas continuas y criterios de aceptación claros",
                "Revisión exhaustiva al final",
                "Contratando personal calificado",
                "Usando las mejores herramientas disponibles"
            ],
            "correctAnswer": 0,
            "explanation": "Pruebas continuas y criterios de aceptación claros aseguran la calidad durante todo el proceso.",
            "domain": "Project Work"
        },
        {
            "id": 21,
            "question": "¿Qué ventaja ofrece el trabajo en equipos multifuncionales?",
            "options": [
                "Perspectivas diversas y solución integral de problemas",
                "Reducción de costos de personal",
                "Simplificación de la comunicación",
                "Estandarización de procesos"
            ],
            "correctAnswer": 0,
            "explanation": "Los equipos multifuncionales aportan perspectivas diversas que permiten soluciones más integrales.",
            "domain": "Project Work"
        },
        {
            "id": 22,
            "question": "¿Cómo se gestionan los conflictos de recursos entre proyectos?",
            "options": [
                "A través de un proceso de priorización organizacional",
                "Negociación directa entre directores de proyecto",
                "Asignación por orden de llegada",
                "Escalada inmediata a gerencia senior"
            ],
            "correctAnswer": 0,
            "explanation": "Un proceso formal de priorización organizacional resuelve conflictos de recursos de manera justa.",
            "domain": "Project Work"
        },
        {
            "id": 23,
            "question": "¿Qué práctica mejora la eficiencia en ejecución de tareas?",
            "options": [
                "Eliminación de desperdicios y optimización de flujos",
                "Aumento de horas de trabajo",
                "Reducción de estándares de calidad",
                "Automatización completa"
            ],
            "correctAnswer": 0,
            "explanation": "La eliminación de desperdicios y optimización de flujos mejora la eficiencia de manera sostenible.",
            "domain": "Project Work"
        },
        {
            "id": 24,
            "question": "¿Cómo se maneja la transferencia de conocimiento entre turnos?",
            "options": [
                "Sesiones formales de traspaso y documentación clara",
                "Comunicación informal entre colegas",
                "Superposición horaria mínima",
                "Reportes escritos diarios"
            ],
            "correctAnswer": 0,
            "explanation": "Sesiones formales de traspaso combinadas con documentación clara aseguran transferencia efectiva.",
            "domain": "Project Work"
        },
        {
            "id": 25,
            "question": "¿Qué métrica es más significativa para evaluar el trabajo del proyecto?",
            "options": [
                "Valor entregado versus esfuerzo invertido",
                "Cumplimiento de cronograma exclusivamente",
                "Número de tareas completadas",
                "Horas trabajadas por el equipo"
            ],
            "correctAnswer": 0,
            "explanation": "La relación valor entregado versus esfuerzo invertido mide la efectividad real del trabajo.",
            "domain": "Project Work"
        }
    ]
},
    "delivery": {
    "id": "delivery",
    "name": "Entrega",
    "description": "Alcance y calidad acordados, aceptación de entregables y conexión explícita con objetivos y beneficios de negocio",
    "color": "indigo",
    "questions": [
        {
            "id": 1,
            "question": "¿Qué elemento es más importante para asegurar la aceptación de entregables?",
            "options": [
                "Cumplir con los requisitos acordados",
                "Entregar antes de plazo",
                "Usar tecnología de punta",
                "Tener documentación extensa"
            ],
            "correctAnswer": 0,
            "explanation": "El cumplimiento de requisitos acordados es fundamental para la aceptación de entregables por parte del cliente.",
            "domain": "Delivery"
        },
        {
            "id": 2,
            "question": "¿Por qué es crucial conectar los entregables con los beneficios de negocio?",
            "options": [
                "Para justificar el trabajo del equipo",
                "Para demostrar el valor del proyecto",
                "Solo es requerido por la gerencia",
                "Para hacer el proyecto más complejo"
            ],
            "correctAnswer": 1,
            "explanation": "Conectar entregables con beneficios de negocio demuestra el valor del proyecto y asegura la alineación con objetivos organizacionales.",
            "domain": "Delivery"
        },
        {
            "id": 3,
            "question": "¿Qué proceso asegura que los entregables cumplan con los estándares de calidad?",
            "options": [
                "Control de calidad y pruebas de validación",
                "Revisión final antes de la entrega",
                "Aprobación del director del proyecto",
                "Inspección por parte del cliente"
            ],
            "correctAnswer": 0,
            "explanation": "El control de calidad continuo y pruebas de validación aseguran que los entregables cumplan estándares.",
            "domain": "Delivery"
        },
        {
            "id": 4,
            "question": "¿Cuál es el propósito de los criterios de aceptación?",
            "options": [
                "Definir condiciones objetivas para la aceptación del entregable",
                "Complicar el proceso de entrega",
                "Proteger al equipo de reclamos",
                "Cumplir requisitos de documentación"
            ],
            "correctAnswer": 0,
            "explanation": "Los criterios de aceptación definen condiciones objetivas y medibles para la aceptación del entregable.",
            "domain": "Delivery"
        },
        {
            "id": 5,
            "question": "¿Cómo se maneja un entregable que no cumple con los criterios de aceptación?",
            "options": [
                "Reparación y nueva validación antes de la entrega",
                "Entrega con observaciones",
                "Negociación de criterios alternativos",
                "Aceptación condicional del cliente"
            ],
            "correctAnswer": 0,
            "explanation": "Los entregables que no cumplen criterios deben repararse y revalidarse antes de la entrega formal.",
            "domain": "Delivery"
        },
        {
            "id": 6,
            "question": "¿Qué ventaja ofrece la entrega incremental de valor?",
            "options": [
                "Feedback temprano y reducción de riesgo",
                "Reducción del trabajo de integración",
                "Simplificación de la planificación",
                "Menor documentación requerida"
            ],
            "explanation": "La entrega incremental permite feedback temprano y reduce el riesgo de desarrollar productos no deseados.",
            "domain": "Delivery"
        },
        {
            "id": 7,
            "question": "¿Cómo se asegura la trazabilidad de los entregables?",
            "options": [
                "Vinculando entregables con requisitos y objetivos",
                "Documentando exhaustivamente cada paso",
                "Usando herramientas de gestión especializadas",
                "Asignando números de serie únicos"
            ],
            "correctAnswer": 0,
            "explanation": "La trazabilidad se logra vinculando claramente entregables con requisitos y objetivos de negocio.",
            "domain": "Delivery"
        },
        {
            "id": 8,
            "question": "¿Qué elemento es crítico en el proceso de aceptación formal?",
            "options": [
                "Documentación firmada por el cliente o sponsor",
                "Aprobación verbal del equipo directivo",
                "Confirmación por correo electrónico",
                "Revisión interna del equipo de calidad"
            ],
            "correctAnswer": 0,
            "explanation": "La aceptación formal requiere documentación firmada por el cliente o sponsor autorizado.",
            "domain": "Delivery"
        },
        {
            "id": 9,
            "question": "¿Cómo se miden los beneficios entregados por el proyecto?",
            "options": [
                "Comparando situación actual versus situación previa al proyecto",
                "Contando número de entregables completados",
                "Evaluando satisfacción del equipo",
                "Calculando retorno de inversión exclusivamente"
            ],
            "correctAnswer": 0,
            "explanation": "La medición de beneficios compara la situación actual versus la situación previa al proyecto.",
            "domain": "Delivery"
        },
        {
            "id": 10,
            "question": "¿Qué rol juegan los stakeholders en la entrega?",
            "options": [
                "Validar que los entregables cumplan sus necesidades",
                "Supervisar el trabajo del equipo",
                "Aprobar el presupuesto de entrega",
                "Recibir entrenamiento en el uso"
            ],
            "correctAnswer": 0,
            "explanation": "Los stakeholders deben validar que los entregables cumplan efectivamente sus necesidades.",
            "domain": "Delivery"
        },
        {
            "id": 11,
            "question": "¿Cómo se manejan las expectativas no cumplidas en la entrega?",
            "options": [
                "Comunicación proactiva y gestión de expectativas",
                "Ocultar las limitaciones del entregable",
                "Culpar a restricciones del proyecto",
                "Ofrecer descuentos o compensaciones"
            ],
            "correctAnswer": 0,
            "explanation": "La comunicación proactiva y gestión honesta de expectativas es clave cuando hay limitaciones.",
            "domain": "Delivery"
        },
        {
            "id": 12,
            "question": "¿Qué ventaja ofrece la entrega temprana de prototipos?",
            "options": [
                "Validación de conceptos y reducción de reproceso",
                "Reducción del tiempo total de desarrollo",
                "Eliminación de fases de prueba",
                "Menor costo de desarrollo"
            ],
            "correctAnswer": 0,
            "explanation": "Los prototipos permiten validar conceptos tempranamente y reducir reproceso posterior.",
            "domain": "Delivery"
        },
        {
            "id": 13,
            "question": "¿Cómo se asegura la usabilidad de los entregables?",
            "options": [
                "Pruebas con usuarios finales representativos",
                "Aprobación del comité directivo",
                "Cumplimiento de estándares técnicos",
                "Documentación de usuario exhaustiva"
            ],
            "correctAnswer": 0,
            "explanation": "Las pruebas con usuarios finales representativos son esenciales para asegurar usabilidad.",
            "domain": "Delivery"
        },
        {
            "id": 14,
            "question": "¿Qué indica una entrega exitosa?",
            "options": [
                "El entregable genera el valor esperado para el negocio",
                "Se completó dentro del presupuesto",
                "El cliente firmó la aceptación",
                "El equipo está satisfecho con el trabajo"
            ],
            "correctAnswer": 0,
            "explanation": "Una entrega realmente exitosa genera el valor de negocio esperado, no solo cumple formalidades.",
            "domain": "Delivery"
        },
        {
            "id": 15,
            "question": "¿Cómo se maneja la transición de entregables a operaciones?",
            "options": [
                "Plan de transición con entrenamiento y soporte",
                "Entrega directa sin proceso formal",
                "Contratación de personal especializado",
                "Soporte limitado por tiempo definido"
            ],
            "correctAnswer": 0,
            "explanation": "Un plan formal de transición con entrenamiento y soporte asegura adopción exitosa.",
            "domain": "Delivery"
        },
        {
            "id": 16,
            "question": "¿Qué elemento es crítico en la entrega de proyectos ágiles?",
            "options": [
                "Entregas frecuentes de incrementos de valor",
                "Documentación exhaustiva de cada entrega",
                "Aprobación formal de cada sprint",
                "Reuniones de revisión extensas"
            ],
            "correctAnswer": 0,
            "explanation": "En ágil, las entregas frecuentes de incrementos de valor son fundamentales.",
            "domain": "Delivery"
        },
        {
            "id": 17,
            "question": "¿Cómo se verifica el cumplimiento de requisitos regulatorios?",
            "options": [
                "Auditorías y certificaciones por entidades autorizadas",
                "Auto-evaluación del equipo del proyecto",
                "Revisión por abogados internos",
                "Aprobación del comité de compliance"
            ],
            "correctAnswer": 0,
            "explanation": "Las auditorías y certificaciones por entidades autorizadas verifican cumplimiento regulatorio.",
            "domain": "Delivery"
        },
        {
            "id": 18,
            "question": "¿Qué práctica mejora la satisfacción del cliente con las entregas?",
            "options": [
                "Involucramiento continuo durante el desarrollo",
                "Entregas sorpresa con funcionalidades extra",
                "Precios más bajos que lo presupuestado",
                "Documentación técnica extensa"
            ],
            "correctAnswer": 0,
            "explanation": "El involucramiento continuo del cliente durante el desarrollo asegura que las entregas cumplan sus expectativas.",
            "domain": "Delivery"
        },
        {
            "id": 19,
            "question": "¿Cómo se manejan las lecciones aprendidas sobre entrega?",
            "options": [
                "Documentación y incorporación en procesos futuros",
                "Discusión informal entre el equipo",
                "Archivo para referencia histórica",
                "Compartición con otros directores de proyecto"
            ],
            "explanation": "Las lecciones aprendidas deben documentarse e incorporarse sistemáticamente en procesos futuros.",
            "domain": "Delivery"
        },
        {
            "id": 20,
            "question": "¿Qué métrica evalúa mejor la efectividad de la entrega?",
            "options": [
                "Tiempo desde entrega hasta generación de valor",
                "Número de entregables completados",
                "Porcentaje de aceptación en primera entrega",
                "Costo por entregable producido"
            ],
            "correctAnswer": 0,
            "explanation": "El tiempo desde entrega hasta generación de valor mide la efectividad real de la entrega.",
            "domain": "Delivery"
        },
        {
            "id": 21,
            "question": "¿Cómo se asegura la sostenibilidad de los entregables?",
            "options": [
                "Diseño considerando mantenimiento y evolución futura",
                "Uso de tecnologías de última generación",
                "Documentación exhaustiva de operación",
                "Contratos de soporte extendido"
            ],
            "correctAnswer": 0,
            "explanation": "El diseño debe considerar mantenimiento y evolución futura para asegurar sostenibilidad.",
            "domain": "Delivery"
        },
        {
            "id": 22,
            "question": "¿Qué rol juega la calidad en la percepción de la entrega?",
            "options": [
                "La calidad percibida afecta directamente la satisfacción",
                "Solo importa el cumplimiento funcional",
                "La calidad es responsabilidad del equipo de QA",
                "Los clientes no perciben diferencias de calidad"
            ],
            "correctAnswer": 0,
            "explanation": "La calidad percibida por el cliente afecta directamente su satisfacción con la entrega.",
            "domain": "Delivery"
        },
        {
            "id": 23,
            "question": "¿Cómo se manejan las dependencias entre entregables?",
            "options": [
                "Planificación secuencial y gestión de interdependencias",
                "Desarrollo en paralelo e integración posterior",
                "Priorización de entregables críticos",
                "Rediseño para eliminar dependencias"
            ],
            "correctAnswer": 0,
            "explanation": "La planificación secuencial considerando interdependencias es clave para entregas coordinadas.",
            "domain": "Delivery"
        },
        {
            "id": 24,
            "question": "¿Qué indica una estrategia de entrega efectiva?",
            "options": [
                "Entregas consistentes que generan valor progresivo",
                "Cumplimiento estricto de fechas comprometidas",
                "Minimización de costos de entrega",
                "Maximización del número de entregables"
            ],
            "correctAnswer": 0,
            "explanation": "Una estrategia efectiva produce entregas consistentes que generan valor progresivo para el negocio.",
            "domain": "Delivery"
        },
        {
            "id": 25,
            "question": "¿Cómo se cierra formalmente el proceso de entrega?",
            "options": [
                "Aceptación formal y archivo de documentación",
                "Celebración con el equipo",
                "Pago final del cliente",
                "Entrega de instalaciones a operaciones"
            ],
            "correctAnswer": 0,
            "explanation": "El cierre formal requiere aceptación documentada y archivo de toda la documentación relevante.",
            "domain": "Delivery"
        }
    ]
},
    "measurement": {
    "id": "measurement",
    "name": "Medición",
    "description": "Establecer y usar métricas, evaluar el desempeño y apoyar decisiones informadas durante la ejecución",
    "color": "pink",
    "questions": [
        {
            "id": 1,
            "question": "¿Qué tipo de métricas son más útiles para la toma de decisiones durante la ejecución del proyecto?",
            "options": [
                "Métricas retrospectivas",
                "Métricas predictivas y leading indicators",
                "Solo métricas financieras",
                "Métricas de comparación con otros proyectos"
            ],
            "correctAnswer": 1,
            "explanation": "Las métricas predictivas y leading indicators permiten tomar decisiones proactivas basadas en tendencias y señales tempranas.",
            "domain": "Measurement"
        },
        {
            "id": 2,
            "question": "¿Cuál es el propósito principal de establecer métricas en un proyecto?",
            "options": [
                "Cumplir requisitos de reporte",
                "Castigar bajo desempeño",
                "Apoyar decisiones informadas",
                "Complicar la gestión"
            ],
            "correctAnswer": 2,
            "explanation": "El propósito principal de las métricas es proporcionar información para la toma de decisiones informadas durante el proyecto.",
            "domain": "Measurement"
        },
        {
            "id": 3,
            "question": "¿Qué característica deben tener las métricas efectivas?",
            "options": [
                "Relevantes, accionables y fáciles de entender",
                "Complejas y técnicas",
                "Cuantitativas exclusivamente",
                "Comparables con estándares de la industria"
            ],
            "correctAnswer": 0,
            "explanation": "Las métricas efectivas deben ser relevantes para los objetivos, accionables y comprensibles para los stakeholders.",
            "domain": "Measurement"
        },
        {
            "id": 4,
            "question": "¿Cómo se evita la sobrecarga de métricas en un proyecto?",
            "options": [
                "Enfocándose en métricas clave alineadas con objetivos",
                "Rotando métricas periódicamente",
                "Automatizando la recolección de datos",
                "Delegando el análisis a herramientas especializadas"
            ],
            "explanation": "Enfocarse en métricas clave directamente alineadas con objetivos evita sobrecarga y confusion.",
            "domain": "Measurement"
        },
        {
            "id": 5,
            "question": "¿Qué ventaja ofrecen los dashboards de métricas?",
            "options": [
                "Visualización consolidada del estado del proyecto",
                "Automatización de la toma de decisiones",
                "Eliminación de reuniones de seguimiento",
                "Reducción de la necesidad de expertos"
            ],
            "correctAnswer": 0,
            "explanation": "Los dashboards proporcionan visualización consolidada que facilita el entendimiento rápido del estado.",
            "domain": "Measurement"
        },
        {
            "id": 6,
            "question": "¿Cómo se establecen líneas base para medición?",
            "options": [
                "En puntos clave del proyecto cuando se aprueban planes",
                "Al inicio de cada fase del proyecto",
                "Continuamente según avanza el proyecto",
                "Solo al final para comparación"
            ],
            "correctAnswer": 0,
            "explanation": "Las líneas base se establecen en puntos clave cuando se aprueban planes formales.",
            "domain": "Measurement"
        },
        {
            "id": 7,
            "question": "¿Qué métrica es más significativa para medir progreso real?",
            "options": [
                "Valor ganado (Earned Value)",
                "Porcentaje de tareas completadas",
                "Horas trabajadas versus planificado",
                "Gasto actual versus presupuesto"
            ],
            "correctAnswer": 0,
            "explanation": "El valor ganado integra alcance, costo y cronograma para medir progreso real.",
            "domain": "Measurement"
        },
        {
            "id": 8,
            "question": "¿Cómo se manejan las desviaciones en las métricas?",
            "options": [
                "Análisis de causa raíz y acciones correctivas",
                "Ajuste de las métricas para mostrar mejor desempeño",
                "Comunicación selectiva a stakeholders",
                "Esperar a que se normalicen solas"
            ],
            "correctAnswer": 0,
            "explanation": "Las desviaciones requieren análisis de causa raíz y definición de acciones correctivas.",
            "domain": "Measurement"
        },
        {
            "id": 9,
            "question": "¿Qué indica el índice de desempeño del cronograma (SPI)?",
            "options": [
                "Eficiencia en el uso del tiempo del proyecto",
                "Velocidad del equipo de desarrollo",
                "Cumplimiento de fechas comprometidas",
                "Productividad individual de miembros"
            ],
            "correctAnswer": 0,
            "explanation": "El SPI mide la eficiencia en el uso del tiempo comparando valor ganado con valor planificado.",
            "domain": "Measurement"
        },
        {
            "id": 10,
            "question": "¿Cómo se miden los beneficios intangibles del proyecto?",
            "options": [
                "Indicadores sustitutos y encuestas de percepción",
                "No se pueden medir objetivamente",
                "Solo mediante evaluación experta",
                "Comparación con benchmarks de industria"
            ],
            "correctAnswer": 0,
            "explanation": "Los beneficios intangibles se miden mediante indicadores sustitutos y encuestas de percepción.",
            "domain": "Measurement"
        },
        {
            "id": 11,
            "question": "¿Qué riesgo presenta el uso exclusivo de métricas cuantitativas?",
            "options": [
                "Ignorar aspectos cualitativos importantes",
                "Sobrecarga de procesamiento de datos",
                "Dificultad de comprensión para stakeholders",
                "Alto costo de implementación"
            ],
            "correctAnswer": 0,
            "explanation": "Las métricas puramente cuantitativas pueden ignorar aspectos cualitativos cruciales para el éxito.",
            "domain": "Measurement"
        },
        {
            "id": 12,
            "question": "¿Cómo se asegura la calidad de los datos para métricas?",
            "options": [
                "Validación en fuente y procesos de limpieza",
                "Automatización completa de recolección",
                "Muestreo estadístico representativo",
                "Auditoría externa periódica"
            ],
            "correctAnswer": 0,
            "explanation": "La validación en fuente y procesos de limpieza aseguran calidad de datos para métricas confiables.",
            "domain": "Measurement"
        },
        {
            "id": 13,
            "question": "¿Qué ventaja ofrecen las métricas leading versus lagging?",
            "options": [
                "Permiten acciones preventivas antes de que ocurran problemas",
                "Son más fáciles de calcular y entender",
                "Requieren menos datos históricos",
                "Son más precisas en sus predicciones"
            ],
            "correctAnswer": 0,
            "explanation": "Las métricas leading permiten acciones preventivas al indicar tendencias futuras.",
            "domain": "Measurement"
        },
        {
            "id": 14,
            "question": "¿Cómo se establecen objetivos SMART para métricas?",
            "options": [
                "Específicos, Medibles, Alcanzables, Relevantes, Temporales",
                "Simples, Mínimos, Asequibles, Rápidos, Técnicos",
                "Estratégicos, Monetarios, Ambiciosos, Robustos, Tácticos",
                "Sistemáticos, Manejables, Apropiados, Razonables, Tangibles"
            ],
            "correctAnswer": 0,
            "explanation": "SMART significa Específicos, Medibles, Alcanzables, Relevantes y Temporales.",
            "domain": "Measurement"
        },
        {
            "id": 15,
            "question": "¿Qué indica una variación atípica en las métricas?",
            "options": [
                "Posible error de medición o evento extraordinario",
                "Mejora significativa en procesos",
                "Cambio en las condiciones del mercado",
                "Necesidad de ajustar los objetivos"
            ],
            "correctAnswer": 0,
            "explanation": "Variaciones atípicas pueden indicar errores de medición o eventos extraordinarios que requieren investigación.",
            "domain": "Measurement"
        },
        {
            "id": 16,
            "question": "¿Cómo se comunican efectivamente las métricas a diferentes audiencias?",
            "options": [
                "Adaptando el nivel de detalle y formato según la audiencia",
                "Usando el mismo formato para todos",
                "Limitando el acceso a métricas sensibles",
                "Automatizando los reportes completamente"
            ],
            "correctAnswer": 0,
            "explanation": "La comunicación efectiva adapta nivel de detalle y formato según necesidades de cada audiencia.",
            "domain": "Measurement"
        },
        {
            "id": 17,
            "question": "¿Qué métrica es más útil para evaluación de desempeño de equipo?",
            "options": [
                "Velocidad de entrega de valor y calidad del trabajo",
                "Horas extras trabajadas",
                "Cumplimiento de horarios",
                "Número de tareas completadas"
            ],
            "correctAnswer": 0,
            "explanation": "La velocidad de entrega de valor combinada con calidad mide desempeño real del equipo.",
            "domain": "Measurement"
        },
        {
            "id": 18,
            "question": "¿Cómo se evita que las métricas generen comportamientos indeseados?",
            "options": [
                "Diseñando métricas balanceadas que midan resultados reales",
                "Ocultando las métricas del equipo",
                "Rotando métricas frecuentemente",
                "Eliminando métricas de desempeño individual"
            ],
            "correctAnswer": 0,
            "explanation": "Métricas balanceadas que miden resultados reales previenen comportamientos de gaming del sistema.",
            "domain": "Measurement"
        },
        {
            "id": 19,
            "question": "¿Qué ventaja ofrece el análisis de tendencias en métricas?",
            "options": [
                "Identificación de patrones y predicción de problemas",
                "Reducción de la frecuencia de medición",
                "Simplificación del reporte a stakeholders",
                "Eliminación de análisis de causa raíz"
            ],
            "correctAnswer": 0,
            "explanation": "El análisis de tendencias identifica patrones que permiten predecir y prevenir problemas.",
            "domain": "Measurement"
        },
        {
            "id": 20,
            "question": "¿Cómo se miden los beneficios económicos del proyecto?",
            "options": [
                "ROI, VAN y período de recuperación",
                "Solo mediante encuestas de satisfacción",
                "Comparación con proyectos similares",
                "Análisis de costo-beneficio cualitativo"
            ],
            "correctAnswer": 0,
            "explanation": "Los beneficios económicos se miden mediante ROI, VAN y período de recuperación de inversión.",
            "domain": "Measurement"
        },
        {
            "id": 21,
            "question": "¿Qué indica el índice de desempeño de costos (CPI)?",
            "options": [
                "Eficiencia en el uso de fondos del proyecto",
                "Cumplimiento del presupuesto asignado",
                "Productividad del equipo por costo",
                "Rentabilidad del proyecto para la organización"
            ],
            "correctAnswer": 0,
            "explanation": "El CPI mide eficiencia en uso de fondos comparando valor ganado con costo real.",
            "domain": "Measurement"
        },
        {
            "id": 22,
            "question": "¿Cómo se establecen puntos de referencia (benchmarks) para métricas?",
            "options": [
                "Basándose en datos históricos y estándares de industria",
                "Usando objetivos arbitrarios pero ambiciosos",
                "Copiando métricas de proyectos exitosos",
                "Delegando a consultores externos"
            ],
            "correctAnswer": 0,
            "explanation": "Los benchmarks deben basarse en datos históricos reales y estándares de la industria.",
            "domain": "Measurement"
        },
        {
            "id": 23,
            "question": "¿Qué métrica es más relevante para stakeholders ejecutivos?",
            "options": [
                "Retorno de inversión y alineación estratégica",
                "Detalle de progreso de tareas",
                "Métricas técnicas de calidad",
                "Estadísticas de utilización de recursos"
            ],
            "correctAnswer": 0,
            "explanation": "Los ejecutivos se enfocan en retorno de inversión y alineación con objetivos estratégicos.",
            "domain": "Measurement"
        },
        {
            "id": 24,
            "question": "¿Cómo se maneja la subjetividad en métricas cualitativas?",
            "options": [
                "Usando escalas estandarizadas y múltiples evaluadores",
                "Eliminando todas las métricas cualitativas",
                "Convirtiendo cualitativas en cuantitativas forzadamente",
                "Delegando la evaluación a un comité experto"
            ],
            "correctAnswer": 0,
            "explanation": "Escalas estandarizadas y múltiples evaluadores reducen subjetividad en métricas cualitativas.",
            "domain": "Measurement"
        },
        {
            "id": 25,
            "question": "¿Qué caracteriza un sistema de medición maduro?",
            "options": [
                "Métricas integradas que guían decisiones y mejoras continuas",
                "Gran cantidad de métricas técnicas detalladas",
                "Automatización completa del proceso de medición",
                "Frecuencia alta de reportes a todos los niveles"
            ],
            "correctAnswer": 0,
            "explanation": "Un sistema maduro tiene métricas integradas que realmente guían decisiones y mejoras.",
            "domain": "Measurement"
        }
    ]
},
    "uncertainty": {
    "id": "uncertainty",
    "name": "Incertidumbre",
    "description": "Riesgos, ambigüedad y complejidad; respuesta proactiva y resiliencia del equipo y del enfoque",
    "color": "orange",
    "questions": [
        {
            "id": 1,
            "question": "¿Qué estrategia es más efectiva para manejar la ambigüedad en proyectos?",
            "options": [
                "Ignorarla hasta que se defina",
                "Planificar en detalle desde el inicio",
                "Adoptar enfoques iterativos y adaptativos",
                "Evitar proyectos ambiguos"
            ],
            "correctAnswer": 2,
            "explanation": "Los enfoques iterativos y adaptativos permiten manejar mejor la ambigüedad mediante aprendizaje progresivo.",
            "domain": "Uncertainty"
        },
        {
            "id": 2,
            "question": "¿Cómo contribuye la resiliencia del equipo al manejo de incertidumbre?",
            "options": [
                "Permite evitar completamente los riesgos",
                "Facilita la adaptación a cambios imprevistos",
                "Elimina la necesidad de planificación",
                "Reduce la necesidad de comunicación"
            ],
            "correctAnswer": 1,
            "explanation": "La resiliencia del equipo permite adaptarse efectivamente a cambios y desafíos imprevistos durante el proyecto.",
            "domain": "Uncertainty"
        },
        {
            "id": 3,
            "question": "¿Qué técnica es más efectiva para identificar riesgos en entornos de alta incertidumbre?",
            "options": [
                "Análisis de escenarios y talleres de expertos",
                "Listas de verificación estándar",
                "Análisis histórico de proyectos similares",
                "Evaluación individual del director del proyecto"
            ],
            "correctAnswer": 0,
            "explanation": "El análisis de escenarios y talleres con múltiples expertos captura mejor los riesgos en entornos inciertos.",
            "domain": "Uncertainty"
        },
        {
            "id": 4,
            "question": "¿Cómo se maneja la complejidad en proyectos con múltiples interdependencias?",
            "options": [
                "Descomposición en componentes manejables y gestión de interfaces",
                "Tratamiento como un todo indivisible",
                "Enfoque en componentes individuales sin considerar interdependencias",
                "Delegación a especialistas por área"
            ],
            "correctAnswer": 0,
            "explanation": "La descomposición en componentes manejables con gestión explícita de interfaces es clave para manejar complejidad.",
            "domain": "Uncertainty"
        },
        {
            "id": 5,
            "question": "¿Qué ventaja ofrecen los buffers en la gestión de incertidumbre?",
            "options": [
                "Absorben variaciones sin afectar objetivos críticos",
                "Eliminan la necesidad de monitoreo continuo",
                "Reducen el costo total del proyecto",
                "Simplifican la planificación inicial"
            ],
            "correctAnswer": 0,
            "explanation": "Los buffers protegen objetivos críticos absorbiendo variaciones inevitables en entornos inciertos.",
            "domain": "Uncertainty"
        },
        {
            "id": 6,
            "question": "¿Cómo se diferencia la gestión de riesgos en entornos predictivos versus adaptativos?",
            "options": [
                "En adaptativos se gestiona continuamente, en predictivos principalmente al inicio",
                "No hay diferencia significativa",
                "En predictivos se ignoran más riesgos",
                "En adaptativos no se gestionan riesgos formalmente"
            ],
            "explanation": "En enfoques adaptativos la gestión de riesgos es continua, mientras en predictivos se enfoca más en planificación inicial.",
            "domain": "Uncertainty"
        },
        {
            "id": 7,
            "question": "¿Qué indica un ambiente de alta incertidumbre?",
            "options": [
                "Falta de información confiable y predictibilidad baja",
                "Presupuesto muy limitado",
                "Equipo con poca experiencia",
                "Cronograma extremadamente ajustado"
            ],
            "correctAnswer": 0,
            "explanation": "La alta incertidumbre se caracteriza por falta de información confiable y baja predictibilidad de resultados.",
            "domain": "Uncertainty"
        },
        {
            "id": 8,
            "question": "¿Cómo se construye resiliencia en el equipo del proyecto?",
            "options": [
                "Desarrollo de habilidades múltiples y mentalidad adaptativa",
                "Contratando solo personal experimentado",
                "Estableciendo procesos rígidos",
                "Evitando situaciones desafiantes"
            ],
            "correctAnswer": 0,
            "explanation": "La resiliencia se construye desarrollando habilidades múltiples y fomentando mentalidad adaptativa en el equipo.",
            "domain": "Uncertainty"
        },
        {
            "id": 9,
            "question": "¿Qué técnica es más efectiva para manejar riesgos desconocidos?",
            "options": [
                "Reservas de gestión y monitoreo continuo",
                "Identificación exhaustiva de todos los riesgos posibles",
                "Transferencia completa a terceros",
                "Ignorarlos hasta que se materialicen"
            ],
            "correctAnswer": 0,
            "explanation": "Las reservas de gestión combinadas con monitoreo continuo son la mejor defensa contra riesgos desconocidos.",
            "domain": "Uncertainty"
        },
        {
            "id": 10,
            "question": "¿Cómo afecta la complejidad técnica a la gestión de incertidumbre?",
            "options": [
                "Requiere mayor expertise y enfoques más iterativos",
                "Permite planificación más detallada desde el inicio",
                "Reduce la necesidad de gestión de riesgos",
                "Simplifica la toma de decisiones"
            ],
            "correctAnswer": 0,
            "explanation": "La complejidad técnica requiere mayor expertise y enfoques iterativos para manejar incertidumbre efectivamente.",
            "domain": "Uncertainty"
        },
        {
            "id": 11,
            "question": "¿Qué ventaja ofrecen los prototipos en entornos inciertos?",
            "options": [
                "Reducen incertidumbre mediante aprendizaje validado",
                "Eliminan la necesidad de planificación",
                "Automatizan la toma de decisiones",
                "Reducen costos de desarrollo"
            ],
            "correctAnswer": 0,
            "explanation": "Los prototipos reducen incertidumbre permitiendo aprendizaje validado con usuarios reales.",
            "domain": "Uncertainty"
        },
        {
            "id": 12,
            "question": "¿Cómo se manejan las suposiciones en entornos de alta incertidumbre?",
            "options": [
                "Documentándolas explícitamente y validándolas continuamente",
                "Considerándolas como hechos establecidos",
                "Ignorándolas para simplificar la planificación",
                "Delegando su validación a expertos externos"
            ],
            "correctAnswer": 0,
            "explanation": "En entornos inciertos, las suposiciones deben documentarse explícitamente y validarse continuamente.",
            "domain": "Uncertainty"
        },
        {
            "id": 13,
            "question": "¿Qué caracteriza un riesgo emergente?",
            "options": [
                "Aparece durante la ejecución sin identificación previa",
                "Es predecible con análisis adecuado",
                "Solo afecta proyectos grandes",
                "Es responsabilidad exclusiva del sponsor"
            ],
            "correctAnswer": 0,
            "explanation": "Los riesgos emergentes surgen durante la ejecución sin haber sido identificados previamente.",
            "domain": "Uncertainty"
        },
        {
            "id": 14,
            "question": "¿Cómo se prepara el equipo para la incertidumbre?",
            "options": [
                "Desarrollando flexibilidad y capacidad de respuesta rápida",
                "Estableciendo procedimientos rígidos para todas las situaciones",
                "Evitando cualquier cambio durante la ejecución",
                "Contratando consultores para cada eventualidad"
            ],
            "correctAnswer": 0,
            "explanation": "Prepararse para incertidumbre significa desarrollar flexibilidad y capacidad de respuesta rápida en el equipo.",
            "domain": "Uncertainty"
        },
        {
            "id": 15,
            "question": "¿Qué indica la necesidad de un análisis de sensibilidad?",
            "options": [
                "Alta dependencia de variables inciertas en los resultados",
                "Complejidad técnica del proyecto",
                "Presupuesto muy limitado",
                "Equipo distribuido geográficamente"
            ],
            "correctAnswer": 0,
            "explanation": "El análisis de sensibilidad es crucial cuando los resultados dependen significativamente de variables inciertas.",
            "domain": "Uncertainty"
        },
        {
            "id": 16,
            "question": "¿Cómo se diferencia ambigüedad de riesgo?",
            "options": [
                "La ambigüedad implica falta de claridad, el riesgo implica probabilidad conocida",
                "No hay diferencia práctica",
                "La ambigüedad es más fácil de gestionar",
                "El riesgo siempre es cuantificable, la ambigüedad no"
            ],
            "correctAnswer": 0,
            "explanation": "La ambigüedad se refiere a falta de claridad, mientras el riesgo implica eventos con probabilidad estimable.",
            "domain": "Uncertainty"
        },
        {
            "id": 17,
            "question": "¿Qué técnica es más efectiva para manejar complejidad dinámica?",
            "options": [
                "Enfoques iterativos con feedback frecuente",
                "Planificación detallada inicial",
                "Delegación a subequipos especializados",
                "Simplificación artificial de requisitos"
            ],
            "correctAnswer": 0,
            "explanation": "Los enfoques iterativos con feedback frecuente manejan mejor la complejidad dinámica.",
            "domain": "Uncertainty"
        },
        {
            "id": 18,
            "question": "¿Cómo se gestionan las interdependencias no lineales?",
            "options": [
                "Mediante experimentación controlada y aprendizaje",
                "Ignorándolas hasta que causen problemas",
                "Planificación secuencial estricta",
                "Delegación completa a expertos técnicos"
            ],
            "correctAnswer": 0,
            "explanation": "Las interdependencias no lineales requieren experimentación controlada y aprendizaje iterativo.",
            "domain": "Uncertainty"
        },
        {
            "id": 19,
            "question": "¿Qué ventaja ofrecen las reservas de contingencia?",
            "options": [
                "Protegen contra riesgos conocidos-desconocidos",
                "Eliminan la necesidad de identificación de riesgos",
                "Reducen la supervisión requerida",
                "Automatizan la respuesta a problemas"
            ],
            "correctAnswer": 0,
            "explanation": "Las reservas de contingencia protegen contra riesgos conocidos- desconocidos (riesgos identificados pero con impacto incierto).",
            "domain": "Uncertainty"
        },
        {
            "id": 20,
            "question": "¿Cómo se maneja la incertidumbre en requisitos?",
            "options": [
                "Priorización y desarrollo incremental",
                "Congelación temprana de requisitos",
                "Documentación exhaustiva de todos los posibles",
                "Delegación al cliente para definición completa"
            ],
            "correctAnswer": 0,
            "explanation": "La priorización y desarrollo incremental maneja efectivamente la incertidumbre en requisitos.",
            "domain": "Uncertainty"
        },
        {
            "id": 21,
            "question": "¿Qué indica un entorno VUCA?",
            "options": [
                "Volatilidad, Incertidumbre, Complejidad y Ambigüedad",
                "Variabilidad, Uniformidad, Control y Autonomía",
                "Velocidad, Unificación, Claridad y Accesibilidad",
                "Validación, Utilización, Consistencia y Adaptabilidad"
            ],
            "correctAnswer": 0,
            "explanation": "VUCA significa Volatilidad, Incertidumbre, Complejidad y Ambigüedad, describiendo entornos altamente dinámicos.",
            "domain": "Uncertainty"
        },
        {
            "id": 22,
            "question": "¿Cómo se construye tolerancia al fracaso en el equipo?",
            "options": [
                "Fomentando experimentación y aprendizaje de errores",
                "Estableciendo metas fáciles de alcanzar",
                "Eliminando consecuencias por fallas",
                "Contratando solo personal exitoso"
            ],
            "correctAnswer": 0,
            "explanation": "La tolerancia al fracaso se construye fomentando experimentación y aprendizaje de errores.",
            "domain": "Uncertainty"
        },
        {
            "id": 23,
            "question": "¿Qué técnica es más efectiva para manejar incertidumbre de mercado?",
            "options": [
                "Monitoreo continuo y capacidad de pivotar",
                "Planificación basada en tendencias históricas",
                "Inversión en investigación de mercado exhaustiva",
                "Evitación de mercados volátiles"
            ],
            "correctAnswer": 0,
            "explanation": "El monitoreo continuo combinado con capacidad de pivotar maneja mejor la incertidumbre de mercado.",
            "domain": "Uncertainty"
        },
        {
            "id": 24,
            "question": "¿Cómo se diferencia la gestión de riesgos de la gestión de incertidumbre?",
            "options": [
                "La incertidumbre maneja lo desconocido, los riesgos lo conocido-incierto",
                "No hay diferencia práctica",
                "La incertidumbre es más fácil de cuantificar",
                "Los riesgos son siempre negativos, la incertidumbre puede ser positiva"
            ],
            "correctAnswer": 0,
            "explanation": "La gestión de riesgos trata eventos conocidos con probabilidad incierta, mientras la incertidumbre maneja lo completamente desconocido.",
            "domain": "Uncertainty"
        },
        {
            "id": 25,
            "question": "¿Qué caracteriza un enfoque antifrágil en gestión de proyectos?",
            "options": [
                "Se beneficia de la volatilidad y el estrés",
                "Evita completamente los riesgos",
                "Mantiene estabilidad absoluta",
                "Depende de predicciones precisas"
            ],
            "correctAnswer": 0,
            "explanation": "Los sistemas antifrágiles no solo resisten shocks sino que se fortalecen con la volatilidad y el estrés.",
            "domain": "Uncertainty"
        }
    ]
},
  "business-value": {
    "id": "business-value",
    "name": "Valor y Entorno",
    "description": "Sistema de entrega de valor, gobernanza, alineación estratégica, beneficios y contexto interno/externo de la organización",
    "color": "teal",
    "questions": [
        {
            "id": 1,
            "question": "¿Qué aspecto es más crítico para asegurar que un proyecto entregue valor de negocio?",
            "options": [
                "Completarlo dentro del presupuesto",
                "Alineación con estrategia organizacional",
                "Usar las últimas tecnologías",
                "Tener el equipo más experimentado"
            ],
            "correctAnswer": 1,
            "explanation": "La alineación con la estrategia organizacional asegura que el proyecto contribuya a los objetivos de negocio y entregue valor real.",
            "domain": "Business Value"
        },
        {
            "id": 2,
            "question": "¿Cómo afecta el contexto externo de la organización a la entrega de valor?",
            "options": [
                "No afecta si el proyecto está bien gestionado",
                "Puede crear oportunidades o amenazas que impactan el valor",
                "Solo afecta proyectos internacionales",
                "Es responsabilidad exclusiva de la alta gerencia"
            ],
            "correctAnswer": 1,
            "explanation": "El contexto externo (mercado, regulaciones, competencia) puede crear oportunidades o amenazas que impactan directamente la capacidad del proyecto de entregar valor.",
            "domain": "Business Value"
        },
        {
            "id": 3,
            "question": "¿Qué elemento es fundamental en el sistema de gobernanza del proyecto?",
            "options": [
                "Estructura de toma de decisiones y accountability",
                "Documentación exhaustiva de procesos",
                "Frecuencia de reuniones de comité",
                "Número de métricas reportadas"
            ],
            "correctAnswer": 0,
            "explanation": "La estructura clara de toma de decisiones y accountability es el corazón de un sistema de gobernanza efectivo.",
            "domain": "Business Value"
        },
        {
            "id": 4,
            "question": "¿Cómo se asegura la sostenibilidad del valor entregado?",
            "options": [
                "Considerando operación y mantenimiento desde el diseño",
                "Entregando el proyecto dentro del presupuesto",
                "Documentando exhaustivamente los entregables",
                "Capacitando extensivamente a los usuarios"
            ],
            "correctAnswer": 0,
            "explanation": "La sostenibilidad del valor requiere considerar operación y mantenimiento desde las fases iniciales del diseño.",
            "domain": "Business Value"
        },
        {
            "id": 5,
            "question": "¿Qué rol juega el caso de negocio en la entrega de valor?",
            "options": [
                "Define el valor esperado y justifica la inversión",
                "Es un requisito administrativo sin impacto real",
                "Solo es importante para aprobación inicial",
                "Limita la creatividad del equipo del proyecto"
            ],
            "correctAnswer": 0,
            "explanation": "El caso de negocio define el valor esperado, justifica la inversión y guía las decisiones durante el proyecto.",
            "domain": "Business Value"
        },
        {
            "id": 6,
            "question": "¿Cómo se mide el retorno de inversión (ROI) en proyectos no financieros?",
            "options": [
                "Mediante indicadores sustitutos y beneficios cualitativos",
                "No se puede medir objetivamente",
                "Solo mediante evaluación experta",
                "Conversión forzada a equivalentes monetarios"
            ],
            "explanation": "En proyectos no financieros, el ROI se mide mediante indicadores sustitutos y evaluación de beneficios cualitativos.",
            "domain": "Business Value"
        },
        {
            "id": 7,
            "question": "¿Qué ventaja ofrece un comité de gobernanza efectivo?",
            "options": [
                "Decisiones alineadas con estrategia y resolución rápida de issues",
                "Reducción del trabajo del director del proyecto",
                "Eliminación de la necesidad de reportes",
                "Automatización de la supervisión del proyecto"
            ],
            "correctAnswer": 0,
            "explanation": "Un comité de gobernanza efectivo asegura decisiones estratégicas y resolución oportuna de problemas.",
            "domain": "Business Value"
        },
        {
            "id": 8,
            "question": "¿Cómo afecta la cultura organizacional a la entrega de valor?",
            "options": [
                "Influye en adopción de cambios y efectividad de implementación",
                "No afecta los resultados del proyecto",
                "Solo impacta proyectos de transformación",
                "Es responsabilidad exclusiva de RH"
            ],
            "correctAnswer": 0,
            "explanation": "La cultura organizacional afecta directamente la adopción de cambios y efectividad de implementación.",
            "domain": "Business Value"
        },
        {
            "id": 9,
            "question": "¿Qué indica un proyecto alineado estratégicamente?",
            "options": [
                "Contribuye directamente a objetivos de negocio de largo plazo",
                "Usa las tecnologías más modernas disponibles",
                "Tiene el presupuesto más alto de la organización",
                "Es el proyecto más grande de la compañía"
            ],
            "correctAnswer": 0,
            "explanation": "Un proyecto estratégicamente alineado contribuye directamente a objetivos de negocio de largo plazo.",
            "domain": "Business Value"
        },
        {
            "id": 10,
            "question": "¿Cómo se gestionan los beneficios a lo largo del ciclo de vida del proyecto?",
            "options": [
                "Planificación, seguimiento y realización de beneficios",
                "Solo se miden al final del proyecto",
                "Se delegan completamente al negocio",
                "Se consideran fuera del alcance del director del proyecto"
            ],
            "correctAnswer": 0,
            "explanation": "La gestión de beneficios incluye planificación, seguimiento durante el proyecto y realización post-implementación.",
            "domain": "Business Value"
        },
        {
            "id": 11,
            "question": "¿Qué elemento es crítico en el management de portafolio?",
            "options": [
                "Balance entre riesgo y retorno across proyectos",
                "Minimización de costos de todos los proyectos",
                "Maximización del número de proyectos ejecutados",
                "Uniformidad de metodologías en todos los proyectos"
            ],
            "correctAnswer": 0,
            "explanation": "El balance entre riesgo y retorno across el portafolio es fundamental en portfolio management.",
            "domain": "Business Value"
        },
        {
            "id": 12,
            "question": "¿Cómo se asegura la continuidad del valor después del cierre del proyecto?",
            "options": [
                "Plan de transición y transferencia a operaciones",
                "Mantenimiento del equipo original del proyecto",
                "Documentación exhaustiva de procesos",
                "Contratos de soporte extendido"
            ],
            "correctAnswer": 0,
            "explanation": "Un plan formal de transición y transferencia a operaciones asegura continuidad del valor.",
            "domain": "Business Value"
        },
        {
            "id": 13,
            "question": "¿Qué impacto tienen las regulaciones externas en la entrega de valor?",
            "options": [
                "Pueden crear requisitos que afectan costo y alcance",
                "No afectan proyectos bien planificados",
                "Solo impactan proyectos en industrias reguladas",
                "Son responsabilidad exclusiva del departamento legal"
            ],
            "correctAnswer": 0,
            "explanation": "Las regulaciones externas pueden crear requisitos que afectan directamente costo, alcance y valor del proyecto.",
            "domain": "Business Value"
        },
        {
            "id": 14,
            "question": "¿Cómo se evalúa el valor de proyectos con beneficios intangibles?",
            "options": [
                "Mediante análisis multi-criterio y valor percibido",
                "No se puede evaluar objetivamente",
                "Solo mediante retorno financiero estimado",
                "Comparación con proyectos similares"
            ],
            "correctAnswer": 0,
            "explanation": "Los beneficios intangibles se evalúan mediante análisis multi-criterio y valor percibido por stakeholders.",
            "domain": "Business Value"
        },
        {
            "id": 15,
            "question": "¿Qué rol juega el sponsor en la entrega de valor?",
            "options": [
                "Asegurar alineación estratégica y remover obstáculos organizacionales",
                "Supervisar el trabajo diario del equipo",
                "Aprobar todos los gastos del proyecto",
                "Representar al equipo ante la gerencia"
            ],
            "correctAnswer": 0,
            "explanation": "El sponsor asegura alineación estratégica y remueve obstáculos organizacionales para maximizar valor.",
            "domain": "Business Value"
        },
        {
            "id": 16,
            "question": "¿Cómo afecta la estructura organizacional a la entrega de valor?",
            "options": [
                "Influye en comunicación, toma de decisiones y asignación de recursos",
                "No afecta los resultados del proyecto",
                "Solo impacta proyectos grandes",
                "Es responsabilidad exclusiva de alta gerencia"
            ],
            "correctAnswer": 0,
            "explanation": "La estructura organizacional afecta comunicación, toma de decisiones y asignación de recursos, impactando el valor.",
            "domain": "Business Value"
        },
        {
            "id": 17,
            "question": "¿Qué ventaja ofrecen los gate reviews en la gobernanza?",
            "options": [
                "Decisiones basadas en criterios objetivos en puntos clave",
                "Reducción de la autonomía del director del proyecto",
                "Aumento de la burocracia del proyecto",
                "Eliminación de la necesidad de supervisión continua"
            ],
            "correctAnswer": 0,
            "explanation": "Los gate reviews permiten decisiones basadas en criterios objetivos en puntos clave del proyecto.",
            "domain": "Business Value"
        },
        {
            "id": 18,
            "question": "¿Cómo se priorizan proyectos en el portafolio?",
            "options": [
                "Basándose en valor estratégico y disponibilidad de recursos",
                "Por orden de llegada de solicitudes",
                "Según preferencia de directores de proyecto",
                "Por tamaño presupuestario"
            ],
            "correctAnswer": 0,
            "explanation": "La priorización debe basarse en valor estratégico y disponibilidad de recursos, no en criterios arbitrarios.",
            "domain": "Business Value"
        },
        {
            "id": 19,
            "question": "¿Qué indica un sistema de entrega de valor maduro?",
            "options": [
                "Procesos establecidos que consistently entregan valor al negocio",
                "Gran cantidad de proyectos en ejecución",
                "Uso de las metodologías más modernas",
                "Presupuestos altos para todos los proyectos"
            ],
            "explanation": "Un sistema maduro consistently entrega valor al negocio through procesos establecidos y efectivos.",
            "domain": "Business Value"
        },
        {
            "id": 20,
            "question": "¿Cómo se manejan cambios en el contexto de negocio durante el proyecto?",
            "options": [
                "Reevaluación continua de alineación estratégica",
                "Mantenimiento del plan original sin cambios",
                "Reducción del alcance para cumplir plazos",
                "Escalada inmediata a comité directivo"
            ],
            "correctAnswer": 0,
            "explanation": "Los cambios en contexto de negocio requieren reevaluación continua de alineación estratégica del proyecto.",
            "domain": "Business Value"
        },
        {
            "id": 21,
            "question": "¿Qué métrica es más significativa para valor de negocio?",
            "options": [
                "Contribución a objetivos estratégicos organizacionales",
                "Cumplimiento de cronograma del proyecto",
                "Número de entregables completados",
                "Satisfacción del equipo con el proyecto"
            ],
            "correctAnswer": 0,
            "explanation": "La contribución a objetivos estratégicos organizacionales mide el valor de negocio real.",
            "domain": "Business Value"
        },
        {
            "id": 22,
            "question": "¿Cómo afectan las tendencias del mercado a la viabilidad del proyecto?",
            "options": [
                "Pueden hacer obsoletos los beneficios planeados",
                "No afectan proyectos bien ejecutados",
                "Solo impactan proyectos de producto",
                "Son responsabilidad del departamento de marketing"
            ],
            "correctAnswer": 0,
            "explanation": "Las tendencias del mercado pueden hacer obsoletos los beneficios planeados, afectando viabilidad del proyecto.",
            "domain": "Business Value"
        },
        {
            "id": 23,
            "question": "¿Qué ventaja ofrece la gestión de beneficios?",
            "options": [
                "Asegura que el proyecto entregue el valor esperado",
                "Reduce el trabajo de planificación inicial",
                "Elimina la necesidad de seguimiento financiero",
                "Automatiza la reportaría a stakeholders"
            ],
            "correctAnswer": 0,
            "explanation": "La gestión de beneficios asegura que el proyecto realmente entregue el valor esperado al negocio.",
            "domain": "Business Value"
        },
        {
            "id": 24,
            "question": "¿Cómo se integra el proyecto con la estrategia corporativa?",
            "options": [
                "Vinculando objetivos del proyecto con objetivos organizacionales",
                "Usando la misma metodología en todos los proyectos",
                "Reportando al mismo comité directivo",
                "Compartiendo recursos con otros proyectos estratégicos"
            ],
            "correctAnswer": 0,
            "explanation": "La integración estratégica requiere vinculación explícita entre objetivos del proyecto y objetivos organizacionales.",
            "domain": "Business Value"
        },
        {
            "id": 25,
            "question": "¿Qué caracteriza un proyecto que maximiza valor para el negocio?",
            "options": [
                "Balance óptimo entre costo, tiempo y beneficios estratégicos",
                "Completarse bajo presupuesto y antes de plazo",
                "Usar la tecnología más avanzada disponible",
                "Tener el equipo más grande y experimentado"
            ],
            "correctAnswer": 0,
            "explanation": "Maximizar valor requiere balance óptimo entre costo, tiempo y beneficios estratégicos, no optimización individual de métricas.",
            "domain": "Business Value"
        }
    ]
}
};