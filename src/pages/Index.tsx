import { useState } from "react";
import Icon from "@/components/ui/icon";

const sections = [
  {
    id: "rights",
    emoji: "⚖️",
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.12)",
    title: "Права учащихся",
    subtitle: "Основные гарантии",
    items: [
      "Право на бесплатное образование в государственных школах",
      "Право на уважительное отношение со стороны педагогов",
      "Право на защиту от произвольных взысканий",
      "Право на ознакомление с оценками и учебными материалами",
      "Право на участие в управлении школой через органы самоуправления",
      "Право на каникулы и отдых согласно учебному плану",
    ],
    law: "ФЗ «Об образовании в РФ», ст. 34",
  },
  {
    id: "discrimination",
    emoji: "🛡️",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.12)",
    title: "Защита от дискриминации",
    subtitle: "Равные права для всех",
    items: [
      "Запрет дискриминации по полу, расе, национальности",
      "Запрет ущемления прав по религиозным убеждениям",
      "Равный доступ к образованию независимо от социального положения",
      "Защита детей с ограниченными возможностями здоровья",
      "Запрет травли и буллинга как формы дискриминации",
      "Право на инклюзивное образование",
    ],
    law: "Конституция РФ, ст. 19; ФЗ «Об образовании», ст. 5",
  },
  {
    id: "privacy",
    emoji: "🔒",
    color: "#A855F7",
    bg: "rgba(168,85,247,0.12)",
    title: "Конфиденциальность",
    subtitle: "Защита личных данных",
    items: [
      "Запрет разглашения оценок и личных данных без согласия",
      "Право на тайну переписки и сообщений",
      "Обработка персональных данных только с согласия родителей",
      "Запрет публикации фото/видео ученика без согласия",
      "Защита медицинских сведений — строгая конфиденциальность",
      "Право ознакомиться с хранимой информацией о себе",
    ],
    law: "ФЗ «О персональных данных», ст. 9",
  },
  {
    id: "conduct",
    emoji: "📋",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.12)",
    title: "Правила поведения",
    subtitle: "Обязанности учащихся",
    items: [
      "Добросовестное освоение образовательной программы",
      "Соблюдение Устава и внутреннего распорядка школы",
      "Уважительное отношение к педагогам и одноклассникам",
      "Бережное отношение к имуществу образовательной организации",
      "Запрет использования гаджетов на уроках без разрешения",
      "Соблюдение дресс-кода при наличии школьной формы",
    ],
    law: "ФЗ «Об образовании», ст. 43",
  },
  {
    id: "responsibility",
    emoji: "⚠️",
    color: "#EF4444",
    bg: "rgba(239,68,68,0.12)",
    title: "Ответственность",
    subtitle: "Виды и последствия",
    items: [
      "Дисциплинарная ответственность — замечание, выговор",
      "Отчисление возможно только с 15 лет и за грубые нарушения",
      "Материальная ответственность за порчу имущества школы",
      "Административная ответственность с 16 лет",
      "Уголовная ответственность с 16 лет (за тяжкие — с 14)",
      "Родители несут ответственность за детей до 14 лет",
    ],
    law: "ФЗ «Об образовании», ст. 43; КоАП РФ, ст. 2.3",
  },
  {
    id: "punishment",
    emoji: "🔨",
    color: "#F97316",
    bg: "rgba(249,115,22,0.12)",
    title: "Порядок наказания",
    subtitle: "Процедура взыскания",
    items: [
      "Только письменный приказ с указанием нарушения",
      "Учащийся вправе дать письменные объяснения",
      "Учитывается тяжесть проступка и обстоятельства",
      "Применяется не позднее 1 месяца со дня нарушения",
      "Запрет физического и психологического насилия",
      "Право обжалования в комиссию по урегулированию споров",
    ],
    law: "ФЗ «Об образовании», ст. 43, 45",
  },
  {
    id: "health",
    emoji: "🏥",
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.12)",
    title: "Охрана здоровья",
    subtitle: "Медицина и питание",
    items: [
      "Бесплатная медицинская помощь в школьном медпункте",
      "Организация горячего питания для начальных классов",
      "Обязательные медицинские осмотры раз в год",
      "Запрет принуждения к прививкам без согласия родителей",
      "Соблюдение санитарных норм в классах и столовой",
      "Психологическая поддержка школьного психолога",
    ],
    law: "ФЗ «Об образовании», ст. 41",
  },
  {
    id: "safety",
    emoji: "🚨",
    color: "#10B981",
    bg: "rgba(16,185,129,0.12)",
    title: "Безопасность и эвакуация",
    subtitle: "Охрана и ЧС",
    items: [
      "Школа обязана обеспечить безопасные условия обучения",
      "Плановые учения по эвакуации не реже 2 раз в год",
      "Антитеррористическая защищённость — КПП, видеонаблюдение",
      "При пожаре: услышал сигнал — немедленно покинь здание",
      "Точка сбора указана в плане эвакуации на каждом этаже",
      "Запрет самовольного покидания школы в учебное время",
    ],
    law: "ФЗ «О пожарной безопасности»; Постановление № 1543",
  },
];

const glossary = [
  { term: "Дискриминация", def: "Ограничение прав или предоставление привилегий по признаку пола, расы, национальности, религии или иных признаков." },
  { term: "Дисциплинарное взыскание", def: "Официальное наказание за нарушение правил: замечание, выговор или отчисление. Применяется только по письменному приказу." },
  { term: "Персональные данные", def: "Любая информация об ученике: имя, фото, оценки, адрес, медицинские сведения. Охраняются Федеральным законом." },
  { term: "Инклюзивное образование", def: "Совместное обучение детей с ограниченными возможностями здоровья и без особенностей в одном классе." },
  { term: "Устав школы", def: "Главный внутренний документ образовательной организации, определяющий права, обязанности и порядок работы." },
  { term: "Комиссия по урегулированию споров", def: "Орган, рассматривающий конфликты между участниками образовательного процесса." },
  { term: "Буллинг", def: "Систематическое преследование, унижение или запугивание одного ученика другими. Является нарушением закона." },
  { term: "Дееспособность", def: "Способность своими действиями осуществлять права и исполнять обязанности. Полная дееспособность наступает с 18 лет." },
  { term: "Омбудсмен", def: "Уполномоченный по правам граждан. В сфере образования — уполномоченный по правам ребёнка." },
  { term: "Административная ответственность", def: "Вид юридической ответственности за нарушения закона, не являющиеся уголовными. Наступает с 16 лет." },
  { term: "Медиация", def: "Мирное урегулирование конфликта с помощью нейтрального посредника — медиатора." },
  { term: "СанПиН", def: "Санитарные правила и нормы — обязательные требования к освещённости, температуре и условиям пребывания в школе." },
];

export default function Index() {
  const [glossarySearch, setGlossarySearch] = useState("");
  const [activeTab, setActiveTab] = useState<"sections" | "glossary">("sections");
  const [expandedSection, setExpandedSection] = useState<string | null>("rights");

  const filteredGlossary = glossary.filter(
    (g) =>
      g.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      g.def.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  const currentSection = sections.find((s) => s.id === expandedSection);

  return (
    <div className="min-h-screen text-white font-golos" style={{ background: "linear-gradient(135deg, #0B1120 0%, #0D1528 100%)" }}>
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl" style={{ background: "#4F8EF7" }} />
          <div className="absolute top-20 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl" style={{ background: "#A855F7" }} />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 pt-14 pb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-5"
            style={{ background: "rgba(79,142,247,0.15)", border: "1px solid rgba(79,142,247,0.3)", color: "#4F8EF7" }}>
            <Icon name="BookOpen" size={14} />
            Образовательный справочник
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Права школьника
            <br />
            <span style={{ color: "#4F8EF7" }}>простым языком</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{ color: "#8B9DB8" }}>
            Полный справочник по законодательству в сфере образования — для учеников, родителей и педагогов
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { val: "8", label: "разделов", icon: "Layers" },
              { val: "48+", label: "правовых норм", icon: "Scale" },
              { val: "12", label: "терминов", icon: "BookMarked" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3 rounded-2xl px-5 py-3"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(79,142,247,0.2)" }}>
                  <Icon name={s.icon} size={16} style={{ color: "#4F8EF7" }} />
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold">{s.val}</div>
                  <div className="text-xs" style={{ color: "#8B9DB8" }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto px-4 mb-6">
        <div className="flex gap-2 w-fit rounded-2xl p-1.5" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <button
            onClick={() => setActiveTab("sections")}
            className="px-6 py-2.5 rounded-xl font-medium text-sm transition-all"
            style={activeTab === "sections"
              ? { background: "#4F8EF7", color: "#fff", boxShadow: "0 4px 20px rgba(79,142,247,0.4)" }
              : { color: "#8B9DB8" }}
          >
            📚 Разделы
          </button>
          <button
            onClick={() => setActiveTab("glossary")}
            className="px-6 py-2.5 rounded-xl font-medium text-sm transition-all"
            style={activeTab === "glossary"
              ? { background: "#4F8EF7", color: "#fff", boxShadow: "0 4px 20px rgba(79,142,247,0.4)" }
              : { color: "#8B9DB8" }}
          >
            📖 Словарь терминов
          </button>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 pb-20">
        {/* SECTIONS TAB */}
        {activeTab === "sections" && (
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Sidebar nav */}
            <div className="lg:w-64 shrink-0">
              <div className="flex flex-col gap-2">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setExpandedSection(s.id)}
                    className="flex items-center gap-3 p-3 rounded-xl text-left transition-all"
                    style={expandedSection === s.id
                      ? { background: s.bg, border: `1px solid ${s.color}50`, boxShadow: `0 4px 20px ${s.color}20` }
                      : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <span className="text-xl shrink-0">{s.emoji}</span>
                    <div className="min-w-0">
                      <div className="font-medium text-sm truncate"
                        style={{ color: expandedSection === s.id ? "#fff" : "#C8D6E8" }}>
                        {s.title}
                      </div>
                      <div className="text-xs truncate" style={{ color: "#8B9DB8" }}>{s.subtitle}</div>
                    </div>
                    {expandedSection === s.id && (
                      <div className="ml-auto shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            {currentSection && (
              <div className="flex-1 min-w-0">
                <div className="rounded-3xl p-6 md:p-8 mb-4"
                  style={{
                    background: currentSection.bg,
                    border: `1px solid ${currentSection.color}35`,
                    boxShadow: `0 20px 60px ${currentSection.color}12`,
                  }}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                        style={{ background: currentSection.color + "25" }}>
                        {currentSection.emoji}
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">{currentSection.title}</h2>
                        <p className="text-sm" style={{ color: "#8B9DB8" }}>{currentSection.subtitle}</p>
                      </div>
                    </div>
                    <div className="px-3 py-1.5 rounded-full text-xs font-medium shrink-0"
                      style={{ background: currentSection.color + "20", color: currentSection.color, border: `1px solid ${currentSection.color}30` }}>
                      <Icon name="FileText" size={11} className="inline mr-1" />
                      {currentSection.law}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    {currentSection.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 rounded-xl p-3.5"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold"
                          style={{ background: currentSection.color + "30", color: currentSection.color }}>
                          {i + 1}
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: "#C8D6E8" }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Escalation infographic */}
                <div className="rounded-2xl p-5"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#8B9DB8" }}>
                    Куда обращаться при нарушении прав
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {[
                      { step: "1", label: "Классный руководитель", icon: "MessageSquare", color: "#4F8EF7" },
                      { step: "2", label: "Директор школы", icon: "Users", color: "#22C55E" },
                      { step: "3", label: "Управление образования", icon: "Building2", color: "#F59E0B" },
                      { step: "4", label: "Прокуратура / Суд", icon: "Scale", color: "#EF4444" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="flex items-center gap-2 rounded-xl px-3 py-2"
                          style={{ background: item.color + "15", border: `1px solid ${item.color}30` }}>
                          <div className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold"
                            style={{ background: item.color + "25", color: item.color }}>
                            {item.step}
                          </div>
                          <Icon name={item.icon} size={13} style={{ color: item.color }} />
                          <span className="text-xs font-medium" style={{ color: "#C8D6E8" }}>{item.label}</span>
                        </div>
                        {i < 3 && <span style={{ color: "#4B5563" }} className="text-sm">→</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* GLOSSARY TAB */}
        {activeTab === "glossary" && (
          <div>
            <div className="relative mb-5">
              <Icon name="Search" size={17} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#8B9DB8" }} />
              <input
                type="text"
                placeholder="Поиск по словарю..."
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                className="w-full rounded-2xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-[#8B9DB8] focus:outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {filteredGlossary.map((item, i) => (
                <div key={i} className="group rounded-2xl p-5 transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(79,142,247,0.2)" }}>
                      <Icon name="BookMarked" size={14} style={{ color: "#4F8EF7" }} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1.5" style={{ color: "#fff" }}>{item.term}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#8B9DB8" }}>{item.def}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredGlossary.length === 0 && (
              <div className="text-center py-16" style={{ color: "#8B9DB8" }}>
                <Icon name="SearchX" size={40} className="mx-auto mb-3 opacity-40" />
                <p>Термин не найден. Попробуйте другой запрос.</p>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="text-center py-8 text-sm" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "#8B9DB8" }}>
        <p>Справочник основан на законодательстве Российской Федерации</p>
        <p className="mt-1 text-xs opacity-60">Для юридической консультации обратитесь к квалифицированному специалисту</p>
      </footer>
    </div>
  );
}