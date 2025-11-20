import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export function DohaAssistant() {
  const { lang, dir } = useLanguage();
  const t = translations[lang];

  const quick = t.chatbot.quick;
  const replies = t.chatbot.replies;

  const send = (text: string) => {
    setMessages((m) => [...m, { from: "user", text }]);
    setTimeout(() => {
      let reply = replies.office;
      if (text.includes("سعر") || text.includes("rate")) reply = replies.rate;
      if (text.includes("تأمين") || text.includes("lock")) reply = replies.lock;
      if (text.includes("إنسان") || text.includes("human")) reply = replies.human;
      setMessages((m) => [...m, { from: "bot", text: reply }]);
    }, 600);
  };

  return (
    <div dir={dir} className="fixed bottom-20 right-4 w-80 bg-card border border-gold/30 rounded-2xl shadow-2xl z-50 flex flex-col">
      <div className="flex items-center justify-between p-3 border-b border-gold/20">
        <span className="font-semibold">{lang === "ar" ? "مساعد دوحة" : "Doha Assistant"}</span>
        <button onClick={() => setOpen(false)}><X className="w-5 h-5" /></button>
      </div>
      <div className="flex-1 p-3 space-y-2 text-sm overflow-y-auto max-h-64">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`px-3 py-2 rounded-lg ${m.from === "user" ? "bg-gold text-black" : "bg-slate-800 text-white"}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-gold/20 space-y-2">
        <div className="flex gap-1 flex-wrap">
          {quick.map((q) => (
            <button key={q} onClick={() => send(q)} className="text-xs px-2 py-1 bg-gold/10 border border-gold/30 rounded hover:bg-gold/20 transition">
              {q}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            className="flex-1 px-2 py-1 bg-background border border-border rounded text-sm"
            placeholder={t.chatbot.placeholder}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                send(e.currentTarget.value);
                e.currentTarget.value = "";
              }
            }}
          />
          <button className="text-gold"><Send className="w-4 h-4" /></button>
        </div>
      </div>
    </div>
  );
}