// Language switcher: English is the source text in the HTML, Portuguese and Spanish live here.
// Elements opt in with data-i18n (text), data-i18n-html (inner HTML) or data-i18n-attr="attr:key;attr2:key".
(function () {
  var LANGS = ["en", "pt", "es"];
  var LOCALE = { en: "en-GB", pt: "pt-BR", es: "es-ES" };

  var D = {
    pt: {
      "meta.title.home": `Samantha Cruz · Engenheira de dados, líder de equipe e palestrante`,
      "meta.desc.home": `Oi, sou a Samantha Cruz, líder de uma equipe de engenharia de dados. Plataformas lakehouse, palestras, aulas e textos.`,
      "meta.title.talks": `Palestras e eventos · Samantha Cruz`,
      "meta.desc.talks": `Palestras futuras e passadas de Samantha Cruz sobre Microsoft Fabric, Databricks, agentes de dados e pipelines de dados com IA, com slides para baixar.`,
      "skip": `Pular para o conteúdo`,
      "nav.main": `Principal`,
      "nav.about": `Sobre mim`,
      "nav.work": `Trabalho`,
      "nav.projects": `Projetos`,
      "nav.talks": `Palestras`,
      "nav.writing": `Textos`,
      "nav.contact": `Contato`,
      "theme.aria": `Alternar tema de cores`,
      "theme.dark": `Modo escuro`,
      "theme.light": `Modo claro`,
      "hero.alt": `Samantha sorrindo, de capacete de ciclista, à beira-mar`,
      "hero.welcome": `Olá, sou a Samantha 👋<span class="sam">Pode me chamar de Sam.</span>`,
      "social.label": `Me encontre online`,
      "contact.email": `Enviar e-mail`,
      "hero.tagline": `Engenheira de dados · líder de equipe · palestrante internacional`,
      "hero.lead": `Oi, que bom ter você por aqui! Construo plataformas de dados, lidero uma equipe de engenharia de dados, dou aulas de Databricks, falo em eventos de comunidade e escrevo sobre o que aprendo pelo caminho. Fique à vontade para explorar e diga oi se alguma coisa despertar uma ideia.`,
      "hero.cta.about": `Sobre mim`,
      "hero.cta.talks": `Ver minhas palestras`,
      "hero.cta.hello": `Diga oi`,
      "facts.where": `Moro em Barcelona 🇪🇸`,
      "facts.years": `<strong>8+ anos</strong> com dados`,
      "lang.label": `Idioma`,
      "about.title": `Sobre mim`,
      "about.p1": `Sou do Brasil. Cresci lá e estudei <strong>Engenharia Naval e Oceânica</strong> na UFRJ, no Rio de Janeiro. Minha carreira começou ao nível do mar: imagens de satélite, temperatura e correntes oceânicas, e uma estadia de pesquisa na NOAA, em Miami. Trabalhar com todos esses dados me levou para analytics, BI e, por fim, engenharia de dados.`,
      "about.p2": `Em 2024 me mudei para Barcelona, onde trabalhei na Glovo, um app de delivery de comida; depois trabalhei como engenheira de dados na isolutions, dou aulas de Databricks, falo em conferências e meetups e escrevo sobre o que aprendo. Este site é onde tudo isso se junta.`,
      "journey.title": `Minha trajetória`,
      "legend.work": `Trabalho`,
      "legend.edu": `Formação`,
      "j1.t": `Líder de Engenharia de Dados, isolutions`,
      "j1.w": `Promovida a líder. Hoje lidero o time de Engenharia de Dados da isolutions Barcelona.`,
      "j2.t": `Engenheira de dados sênior, isolutions`,
      "j2.w": `Plataformas Fabric e Azure para clientes corporativos e minhas primeiras palestras em conferências e meetups em Barcelona, Zurique e Madri.`,
      "j3.t": `Engenheira de analytics sênior, Glovo`,
      "j3.w": `Trabalhando em testes A/B que aumentaram o GMV em 7%.`,
      "j4.t": `Instrutora de Databricks`,
      "j4.w": `Comecei a dar aulas de Databricks.`,
      "j5.t": `Analista de dados sênior, AB InBev`,
      "j5.w": `Promovida a analista de dados sênior no ano seguinte.`,
      "j6.t": `Analista de dados, AB InBev`,
      "j6.w": `A migração do Snowflake para o Azure Databricks, com análise de custos, além do monitoramento da qualidade de dados para 4 bilhões de eventos por mês.`,
      "j7.t": `Engenheira sênior de Power BI, APCOA`,
      "j7.w": `Soluções de BI, uma arquitetura de dados corporativa e uma migração de SQL Server para uma operadora europeia de estacionamentos. Em 2022 também concluí uma pós-graduação em Business Intelligence, Big Data e Analytics e dei aulas de IA para alunos de pós-graduação em Direito como professora visitante.`,
      "j8.t": `Analista de negócios, CADS Digital, São Paulo`,
      "j8.w": `Automação de processos e entregas ágeis para clientes em plataformas low-code.`,
      "j9.t": `Pesquisadora visitante na NOAA, Miami`,
      "j9.w": `Ajudei a construir um pipeline de transmissão de dados em tempo real para modelos de previsão e melhorei o cálculo da velocidade geostrófica das correntes oceânicas.`,
      "j10.t": `Pesquisa em oceanografia na UFRJ`,
      "j10.w": `Estagiária de pesquisa, depois analista de dados e assistente de pesquisa: dados oceânicos e de satélite, estatística e relatórios científicos.`,
      "j11.t": `Bacharelado em Engenharia Naval e Oceânica`,
      "j11.w": `Escola Politécnica da UFRJ, Rio de Janeiro.`,
      "j12.t": `Técnica em informática, com foco em processamento de dados`,
      "j12.w": `Centro Federal de Tecnologia, Brasil. O primeiro passo no mundo do software e dos dados.`,
      "cert.title": `Certificações`,
      "cert.link": `Todas as credenciais e links de verificação`,
      "edu.body": `Pós-graduação em Business Intelligence, Big Data e Analytics, Universidade Anhanguera<br>\n               Bacharelado em Engenharia Naval e Oceânica, Escola Politécnica da UFRJ`,
      "work.title": `O que eu faço`,
      "work.sub": `Gosto de construir plataformas de dados em que as pessoas possam confiar e que eu consiga explicar, da ingestão até os dashboards e modelos que as pessoas realmente usam.`,
      "c1.tag": `Plataformas`,
      "c1.h": `Arquitetura lakehouse`,
      "c1.p": `Lakehouses em medalhão com PySpark e SQL no Fabric e no Databricks, em batch e streaming, da ingestão bruta até camadas curadas e prontas para analytics.`,
      "c2.tag": `Confiança`,
      "c2.h": `Qualidade, linhagem e governança`,
      "c2.p": `Monitoramento da qualidade dos dados, rastreamento de linhagem, segurança em nível de linha e controle de custos, para que cientistas de dados e analistas de BI trabalhem sobre uma base que possam defender.`,
      "c3.tag": `Entrega`,
      "c3.h": `CI/CD e infraestrutura como código`,
      "c3.p": `Pipelines no Azure DevOps e Terraform, deploys versionados entre dev, test e prod, testes automatizados e gates de release.`,
      "c4.tag": `Migração`,
      "c4.h": `Do Snowflake para o Azure Databricks`,
      "c4.p": `Liderei a análise de custos das duas plataformas e a migração, com orquestração no Azure Data Factory, armazenamento no ADLS e um dashboard executivo acompanhando o gasto com o warehouse.`,
      "c5.tag": `Confiabilidade`,
      "c5.h": `Monitoramento de qualidade com 4 bilhões de eventos por mês`,
      "c5.p": `Construí o sistema de monitoramento e o dashboard, com alertas no Slack quase em tempo real quando a propagação de eventos falhava.`,
      "proj.title": `Projetos`,
      "proj.sub": `Trabalhos open source que você pode ler e executar. O trabalho para clientes fica com o cliente, então aqui eu construo de forma aberta.`,
      "feat.tag": `Projeto principal · open source`,
      "feat.h": `jobradar: um pipeline de dados com IA que você pode auditar`,
      "feat.p": `Um pipeline pequeno que roda em um notebook. Ele coleta vagas de APIs públicas europeias, usa modelos locais para classificá-las e extrair fatos, e as compara com o seu currículo, que nunca sai da sua máquina. Cada etapa emite eventos OpenLineage, cada tabela é Delta Lake puro, e a governança (contratos de dados, retenção, limpeza de privacidade, exclusão guiada pela linhagem) vem embutida, não acrescentada depois.`,
      "chips.label": `Tecnologias`,
      "feat.case": `Ler o estudo de caso`,
      "feat.gh": `Ver no GitHub`,
      "p1.tag": `Agentes de IA · open source`,
      "p1.p": `Um template higienizado e reutilizável para rodar agentes de IA de código com Microsoft Fabric e Azure DevOps, com contexto de agentes em camadas e um modelo de segurança que começa sempre em dry-run.`,
      "p2.tag": `Observação da Terra`,
      "p2.h": `Análise de imagens de satélite`,
      "p2.p": `Scripts para obter e processar imagens de satélite, vindos da minha formação em pesquisa oceanográfica.`,
      "p3.tag": `Dados oceânicos`,
      "p3.h": `Baixador THREDDS`,
      "p3.p": `Scripts em Python para baixar e combinar dados de reanálise oceânica BRAN de servidores THREDDS.`,
      "ht.title": `Próximas palestras`,
      "ht.sub": `Onde você pode me encontrar em seguida. As palestras anteriores, com slides, estão na <a href="talks.html">página de palestras</a>, e organizadores podem ver minhas sessões no <a href="https://sessionize.com/samantha-cruz">Sessionize</a>.`,
      "ht.all": `Todas as palestras e slides`,
      "wr.title": `Textos`,
      "wr.sub": `Artigos práticos no <a href="https://sammcruz.medium.com/">Medium</a> e notas curtas de novidades no <a href="https://www.linkedin.com/in/samcruzz/">LinkedIn</a>.`,
      "contact.title": `Entre em contato`,
      "contact.sub": `Adoro conversar sobre estratégia de dados, arquitetura, Fabric ou Databricks, palestras ou mentoria.`,
      "footer.built": `Feito com HTML e CSS puros. Hospedado no GitHub Pages.`,
      "tk.eyebrow": `Palestras e eventos`,
      "tk.h1": `Onde eu falo e o que eu compartilho.`,
      "tk.lead": `Palestras em conferências, meetups e treinamentos sobre Microsoft Fabric, Databricks, agentes de dados e pipelines de dados com IA. Todos os decks que posso publicar estão no <a href="https://github.com/sammcruz/talks">repositório de palestras</a>.`,
      "tk.invite": `Convide-me para falar`,
      "tk.allslides": `Todos os slides no GitHub`,
      "tk.sessionize": `Perfil de palestrante no Sessionize`,
      "tk.upcoming": `Próximas`,
      "tk.past": `Eventos passados`,
      "tk.pastsub": `Os slides estão linkados onde posso compartilhá-los.`,
      "tk.teaching": `Aulas`,
      "tk.teachsub": `Desde 2024 dou treinamentos de Databricks remotamente, cobrindo:`,
      "tk.de.h": `Engenharia de dados`,
      "tk.de.p": `Ingestão com Delta Lake, pipelines com Delta Live Tables, Workflows, otimização de desempenho e engenharia de dados avançada.`,
      "tk.bi.h": `Analytics e BI`,
      "tk.bi.p": `Análise de dados, SQL analytics, dashboards e data warehousing no Databricks.`,
      "tk.gv.h": `Governança`,
      "tk.gv.p": `Gestão e governança de dados com Unity Catalog e privacidade de dados no Databricks.`,
      "tk.ai.h": `IA generativa e ML`,
      "tk.ai.p": `Desenvolvimento, deploy, monitoramento, avaliação e governança de aplicações de IA generativa, e deploy de modelos de ML.`,
      "tk.contactsub": `Meetups, grupos de usuários e conferências, presenciais ou online. A lista completa das minhas sessões e os resumos estão no <a href="https://sessionize.com/samantha-cruz">Sessionize</a>. Posso falar sobre agentes de dados do Fabric, governança e linhagem em lakehouses, CI/CD para o Fabric, Databricks Genie e como construir pipelines de dados com IA que você pode auditar. Falo inglês, espanhol e português.`,
      "tk.email": `Enviar e-mail`,
      "tk.back": `Voltar ao início`,
      "ev.page": `Página do evento`,
      "ev.slides": `Slides`,
      "ev.resources": `Recursos`,
      "ev.recording": `Gravação`,
      "ev.with": `com`,
      "ev.online": `Online`,
      "role.Speaker": `Palestrante`,
      "role.Panelist": `Painelista`,
      "role.Instructor": `Instrutora`,
      "ev.stats": `{events} eventos · {cities} cidades · {decks} decks para baixar`,
      "ev.empty": `Nenhum evento anunciado no momento. Quer me ter no seu? Entre em contato abaixo.`,
      "ev.fail": `Não foi possível carregar a lista de eventos. Você pode ver tudo no repositório de palestras no GitHub.`,
      "ev.tabs": `Eventos passados por ano`
    },
    es: {
      "meta.title.home": `Samantha Cruz · Ingeniera de datos, líder de equipo y ponente`,
      "meta.desc.home": `Hola, soy Samantha Cruz, líder de un equipo de ingeniería de datos. Plataformas lakehouse, charlas, docencia y artículos.`,
      "meta.title.talks": `Charlas y eventos · Samantha Cruz`,
      "meta.desc.talks": `Charlas próximas y pasadas de Samantha Cruz sobre Microsoft Fabric, Databricks, agentes de datos y pipelines de datos con IA, con diapositivas para descargar.`,
      "skip": `Saltar al contenido`,
      "nav.main": `Principal`,
      "nav.about": `Sobre mí`,
      "nav.work": `Trabajo`,
      "nav.projects": `Proyectos`,
      "nav.talks": `Charlas`,
      "nav.writing": `Escritos`,
      "nav.contact": `Contacto`,
      "theme.aria": `Cambiar el tema de color`,
      "theme.dark": `Modo oscuro`,
      "theme.light": `Modo claro`,
      "hero.alt": `Samantha sonriendo, con casco de ciclista, junto al mar`,
      "hero.welcome": `Hola, soy Samantha 👋<span class="sam">Puedes llamarme Sam.</span>`,
      "social.label": `Encuéntrame en internet`,
      "contact.email": `Escríbeme`,
      "hero.tagline": `Ingeniera de datos · líder de equipo · ponente internacional`,
      "hero.lead": `¡Hola, qué alegría que estés aquí! Construyo plataformas de datos, lidero un equipo de ingeniería de datos, doy clases de Databricks, hablo en eventos de comunidad y escribo sobre lo que aprendo por el camino. Échale un vistazo y dime hola si algo te da una idea.`,
      "hero.cta.about": `Sobre mí`,
      "hero.cta.talks": `Ver mis charlas`,
      "hero.cta.hello": `Di hola`,
      "facts.where": `Vivo en Barcelona 🇪🇸`,
      "facts.years": `<strong>8+ años</strong> en datos`,
      "lang.label": `Idioma`,
      "about.title": `Sobre mí`,
      "about.p1": `Soy de Brasil. Crecí allí y estudié <strong>Ingeniería Naval y Oceánica</strong> en la UFRJ, en Río de Janeiro. Mi carrera empezó a nivel del mar: imágenes de satélite, temperatura y corrientes oceánicas, y una estancia de investigación en la NOAA, en Miami. Trabajar con todos esos datos me llevó a la analítica, al BI y, al final, a la ingeniería de datos.`,
      "about.p2": `En 2024 me mudé a Barcelona, donde trabajé en Glovo, una app de reparto de comida; después trabajé como ingeniera de datos en isolutions, doy clases de Databricks, hablo en conferencias y meetups y escribo sobre lo que aprendo. Esta web es donde todo eso se junta.`,
      "journey.title": `Mi trayectoria`,
      "legend.work": `Trabajo`,
      "legend.edu": `Formación`,
      "j1.t": `Líder de Ingeniería de Datos, isolutions`,
      "j1.w": `Ascendida a líder. Ahora lidero el equipo de Ingeniería de Datos de isolutions Barcelona.`,
      "j2.t": `Ingeniera de datos senior, isolutions`,
      "j2.w": `Plataformas Fabric y Azure para clientes corporativos, y mis primeras charlas en conferencias y meetups en Barcelona, Zúrich y Madrid.`,
      "j3.t": `Ingeniera de analytics senior, Glovo`,
      "j3.w": `Trabajando en tests A/B que aumentaron el GMV un 7 %.`,
      "j4.t": `Instructora de Databricks`,
      "j4.w": `Empecé a dar clases de Databricks.`,
      "j5.t": `Analista de datos senior, AB InBev`,
      "j5.w": `Ascendida a analista de datos senior al año siguiente.`,
      "j6.t": `Analista de datos, AB InBev`,
      "j6.w": `La migración de Snowflake a Azure Databricks, con análisis de costes, además de la monitorización de la calidad de datos para 4.000 millones de eventos al mes.`,
      "j7.t": `Ingeniera senior de Power BI, APCOA`,
      "j7.w": `Soluciones de BI, una arquitectura de datos corporativa y una migración de SQL Server para un operador europeo de aparcamientos. En 2022 también terminé un posgrado en Business Intelligence, Big Data y Analytics y di clases de IA a estudiantes de posgrado de Derecho como profesora visitante.`,
      "j8.t": `Analista de negocio, CADS Digital, São Paulo`,
      "j8.w": `Automatización de procesos y entregas ágiles para clientes en plataformas low-code.`,
      "j9.t": `Investigadora visitante en la NOAA, Miami`,
      "j9.w": `Ayudé a construir un pipeline de transmisión de datos en tiempo real para modelos de previsión y mejoré el cálculo de la velocidad geostrófica de las corrientes oceánicas.`,
      "j10.t": `Investigación en oceanografía en la UFRJ`,
      "j10.w": `Becaria de investigación, después analista de datos y asistente de investigación: datos oceánicos y de satélite, estadística e informes científicos.`,
      "j11.t": `Grado en Ingeniería Naval y Oceánica`,
      "j11.w": `Escuela Politécnica de la UFRJ, Río de Janeiro.`,
      "j12.t": `Técnica en informática, con enfoque en procesamiento de datos`,
      "j12.w": `Centro Federal de Tecnología, Brasil. El primer paso hacia el software y los datos.`,
      "cert.title": `Certificaciones`,
      "cert.link": `Todas las credenciales y enlaces de verificación`,
      "edu.body": `Posgrado en Business Intelligence, Big Data y Analytics, Universidad Anhanguera<br>\n               Grado en Ingeniería Naval y Oceánica, Escuela Politécnica de la UFRJ`,
      "work.title": `Qué hago`,
      "work.sub": `Me gusta construir plataformas de datos en las que la gente pueda confiar y que yo sepa explicar, desde la ingesta hasta los dashboards y modelos que la gente realmente usa.`,
      "c1.tag": `Plataformas`,
      "c1.h": `Arquitectura lakehouse`,
      "c1.p": `Lakehouses medallion con PySpark y SQL en Fabric y Databricks, batch y streaming, desde la ingesta en bruto hasta capas curadas y listas para analítica.`,
      "c2.tag": `Confianza`,
      "c2.h": `Calidad, linaje y gobernanza`,
      "c2.p": `Monitorización de la calidad de los datos, seguimiento del linaje, seguridad a nivel de fila y control de costes, para que científicos de datos y analistas de BI trabajen sobre una base que puedan defender.`,
      "c3.tag": `Entrega`,
      "c3.h": `CI/CD e infraestructura como código`,
      "c3.p": `Pipelines de Azure DevOps y Terraform, despliegues versionados entre dev, test y prod, pruebas automatizadas y gates de release.`,
      "c4.tag": `Migración`,
      "c4.h": `De Snowflake a Azure Databricks`,
      "c4.p": `Lideré el análisis de costes de ambas plataformas y la migración, con orquestación en Azure Data Factory, almacenamiento en ADLS y un dashboard ejecutivo que seguía el gasto del warehouse.`,
      "c5.tag": `Fiabilidad`,
      "c5.h": `Monitorización de calidad con 4.000 millones de eventos al mes`,
      "c5.p": `Construí el sistema de monitorización y el dashboard, con alertas en Slack casi en tiempo real cuando fallaba la propagación de eventos.`,
      "proj.title": `Proyectos`,
      "proj.sub": `Trabajo open source que puedes leer y ejecutar. El trabajo para clientes se queda con el cliente, así que aquí construyo en abierto.`,
      "feat.tag": `Proyecto principal · open source`,
      "feat.h": `jobradar: un pipeline de datos con IA que puedes auditar`,
      "feat.p": `Un pipeline pequeño que corre en un portátil. Recoge ofertas de empleo de APIs públicas europeas, usa modelos locales para clasificarlas y extraer datos, y las compara con tu CV, que nunca sale de tu máquina. Cada paso emite eventos OpenLineage, cada tabla es Delta Lake puro, y la gobernanza (contratos de datos, retención, limpieza de privacidad, borrado guiado por el linaje) viene integrada, no añadida después.`,
      "chips.label": `Tecnologías`,
      "feat.case": `Leer el caso de estudio`,
      "feat.gh": `Ver en GitHub`,
      "p1.tag": `Agentes de IA · open source`,
      "p1.p": `Una plantilla saneada y reutilizable para ejecutar agentes de IA de código con Microsoft Fabric y Azure DevOps, con contexto de agentes por capas y un modelo de seguridad que empieza siempre en dry-run.`,
      "p2.tag": `Observación de la Tierra`,
      "p2.h": `Análisis de imágenes de satélite`,
      "p2.p": `Scripts para obtener y procesar imágenes de satélite, de mi etapa de investigación en oceanografía.`,
      "p3.tag": `Datos oceánicos`,
      "p3.h": `Descargador THREDDS`,
      "p3.p": `Scripts en Python para descargar y combinar datos de reanálisis oceánico BRAN desde servidores THREDDS.`,
      "ht.title": `Próximas charlas`,
      "ht.sub": `Dónde puedes verme próximamente. Las charlas anteriores, con diapositivas, están en la <a href="talks.html">página de charlas</a>, y los organizadores pueden ver mis sesiones en <a href="https://sessionize.com/samantha-cruz">Sessionize</a>.`,
      "ht.all": `Todas las charlas y diapositivas`,
      "wr.title": `Escritos`,
      "wr.sub": `Artículos prácticos en <a href="https://sammcruz.medium.com/">Medium</a> y notas breves de novedades en <a href="https://www.linkedin.com/in/samcruzz/">LinkedIn</a>.`,
      "contact.title": `Ponte en contacto`,
      "contact.sub": `Encantada de hablar de estrategia de datos, arquitectura, Fabric o Databricks, charlas o mentoría.`,
      "footer.built": `Hecho con HTML y CSS puros. Alojado en GitHub Pages.`,
      "tk.eyebrow": `Charlas y eventos`,
      "tk.h1": `Dónde hablo y qué comparto.`,
      "tk.lead": `Charlas en conferencias, meetups y formaciones sobre Microsoft Fabric, Databricks, agentes de datos y pipelines de datos con IA. Todas las presentaciones que puedo publicar están en <a href="https://github.com/sammcruz/talks">el repositorio de charlas</a>.`,
      "tk.invite": `Invítame a hablar`,
      "tk.allslides": `Todas las diapositivas en GitHub`,
      "tk.sessionize": `Perfil de ponente en Sessionize`,
      "tk.upcoming": `Próximas`,
      "tk.past": `Eventos pasados`,
      "tk.pastsub": `Las diapositivas están enlazadas donde puedo compartirlas.`,
      "tk.teaching": `Docencia`,
      "tk.teachsub": `Desde 2024 imparto formaciones de Databricks en remoto, cubriendo:`,
      "tk.de.h": `Ingeniería de datos`,
      "tk.de.p": `Ingesta con Delta Lake, pipelines con Delta Live Tables, Workflows, optimización del rendimiento e ingeniería de datos avanzada.`,
      "tk.bi.h": `Analítica y BI`,
      "tk.bi.p": `Análisis de datos, analítica con SQL, dashboards y data warehousing en Databricks.`,
      "tk.gv.h": `Gobernanza`,
      "tk.gv.p": `Gestión y gobernanza de datos con Unity Catalog y privacidad de datos en Databricks.`,
      "tk.ai.h": `IA generativa y ML`,
      "tk.ai.p": `Desarrollo, despliegue, monitorización, evaluación y gobernanza de aplicaciones de IA generativa, y despliegue de modelos de ML.`,
      "tk.contactsub": `Meetups, grupos de usuarios y conferencias, presenciales u online. Mi lista completa de sesiones y los resúmenes están en <a href="https://sessionize.com/samantha-cruz">Sessionize</a>. Puedo hablar de agentes de datos de Fabric, gobernanza y linaje en lakehouses, CI/CD para Fabric, Databricks Genie y cómo construir pipelines de datos con IA que puedas auditar. Hablo inglés, español y portugués.`,
      "tk.email": `Escríbeme`,
      "tk.back": `Volver al inicio`,
      "ev.page": `Página del evento`,
      "ev.slides": `Diapositivas`,
      "ev.resources": `Recursos`,
      "ev.recording": `Grabación`,
      "ev.with": `con`,
      "ev.online": `Online`,
      "role.Speaker": `Ponente`,
      "role.Panelist": `Panelista`,
      "role.Instructor": `Instructora`,
      "ev.stats": `{events} eventos · {cities} ciudades · {decks} presentaciones para descargar`,
      "ev.empty": `No hay eventos anunciados ahora mismo. ¿Me quieres en el tuyo? Escríbeme abajo.`,
      "ev.fail": `No se pudo cargar la lista de eventos. Puedes verlo todo en el repositorio de charlas en GitHub.`,
      "ev.tabs": `Eventos pasados por año`
    }
  };

  var lang = "en";
  var listeners = [];

  function norm(v) {
    v = String(v || "").toLowerCase().slice(0, 2);
    return LANGS.indexOf(v) >= 0 ? v : null;
  }
  function stored() {
    try { return norm(localStorage.getItem("lang")); } catch (e) { return null; }
  }
  function store(v) {
    try { localStorage.setItem("lang", v); } catch (e) { /* private mode */ }
  }
  function fromUrl() {
    var m = /[?&]lang=([a-zA-Z-]+)/.exec(location.search);
    return m ? norm(m[1]) : null;
  }
  function syncUrl() {
    try {
      var u = new URL(location.href);
      if (lang === "en") u.searchParams.delete("lang"); else u.searchParams.set("lang", lang);
      history.replaceState(null, "", u.pathname + u.search + u.hash);
    } catch (e) { /* ignore */ }
  }

  function t(key, fallback) {
    var d = D[lang];
    return d && d[key] !== undefined ? d[key] : fallback;
  }

  function monthShort(date) {
    var m = new Intl.DateTimeFormat(LOCALE[lang], { month: "short", timeZone: "UTC" }).format(date).replace(".", "");
    return m;
  }
  function monthYear(ym) {
    var p = ym.split("-");
    var m = monthShort(new Date(Date.UTC(+p[0], +p[1] - 1, 1)));
    return m.charAt(0).toUpperCase() + m.slice(1) + " " + p[0];
  }

  function each(sel, fn) {
    var nodes = document.querySelectorAll(sel);
    for (var i = 0; i < nodes.length; i++) fn(nodes[i]);
  }

  function apply() {
    document.documentElement.lang = lang;
    each("[data-i18n]", function (el) {
      if (el._en === undefined) el._en = el.textContent;
      el.textContent = t(el.getAttribute("data-i18n"), el._en);
    });
    each("[data-i18n-html]", function (el) {
      if (el._enHtml === undefined) el._enHtml = el.innerHTML;
      el.innerHTML = t(el.getAttribute("data-i18n-html"), el._enHtml);
    });
    each("[data-i18n-attr]", function (el) {
      el._enAttr = el._enAttr || {};
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var p = pair.split(":");
        if (el._enAttr[p[0]] === undefined) el._enAttr[p[0]] = el.getAttribute(p[0]);
        el.setAttribute(p[0], t(p[1], el._enAttr[p[0]]));
      });
    });
    each("[data-ym]", function (el) { el.textContent = monthYear(el.getAttribute("data-ym")); });
    each("a[data-lang]", function (a) {
      if (a.getAttribute("data-lang") === lang) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }

  function notify() {
    listeners.forEach(function (fn) { fn(lang); });
  }

  function setLang(next) {
    next = norm(next);
    if (!next || next === lang) return;
    lang = next;
    store(lang);
    syncUrl();
    apply();
    notify();
  }

  var fromLink = fromUrl();
  lang = fromLink || stored() || "en";
  if (fromLink) store(fromLink);
  apply();

  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("a[data-lang]") : null;
    if (!a) return;
    e.preventDefault();
    setLang(a.getAttribute("data-lang"));
  });

  window.i18n = {
    t: t,
    lang: function () { return lang; },
    locale: function () { return LOCALE[lang]; },
    monthShort: monthShort,
    onChange: function (fn) { listeners.push(fn); }
  };
})();
