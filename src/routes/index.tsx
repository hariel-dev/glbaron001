import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Wrench,
  ClipboardCheck,
  SprayCan,
  Thermometer,
  Check,
  Phone,
  Mail,
  MapPin,
  Quote,
  Snowflake,
  Factory,
  RefreshCw,
  Building2,
  Instagram,
  Award,
  HeartHandshake,
  Leaf,
  Milk,
  Tractor,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import Header from "@/components/site/Header";
import WhatsappIcon from "@/components/site/WhatsappIcon";
import {
  WHATSAPP_URL,
  WHATSAPP_B2B_URL,
  WHATSAPP_NUMBER,
  PHONE_DISPLAY,
  EMAIL,
  CITY,
} from "@/lib/site";
import heroImg from "@/assets/hero-split.jpg";
import splitImg from "@/assets/split.jpg";
import cassetteImg from "@/assets/cassette.jpg";
import pisoTetoImg from "@/assets/piso-teto.jpg";
import instalacaoResidencialImg from "@/assets/instalacao-residencial.jpg";
import instalacaoComercialImg from "@/assets/instalacao-comercial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Global Ar Refrigeração Itapetininga | Ar Condicionado" },
      {
        name: "description",
        content:
          "Instalação, manutenção preventiva (PMOC), higienização e reparo de ar condicionado, além de câmaras frias e refrigeração comercial em Itapetininga e região. Equipe certificada e garantia de serviço.",
      },
      { property: "og:title", content: "Global Ar Refrigeração Itapetininga" },
      {
        property: "og:description",
        content:
          "Conforto térmico e ar puro para sua casa ou empresa em Itapetininga. Orçamento grátis pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const servicos = [
  {
    icon: Wrench,
    title: "Instalação Residencial",
    text: "Split, Cassete e Piso Teto instalados com projeto correto de carga térmica e acabamento impecável. De 9.000 até 18.000 BTUs.",
    image: instalacaoResidencialImg,
    alt: "Ar-condicionado split instalado em sala de estar residencial",
  },
  {
    icon: Wrench,
    title: "Instalação Comercial",
    text: "Climatização Cassete e Piso Teto: projeto de carga térmica sob medida e acabamento impecável. De 24.000 até 60.000 BTUs.",
    image: instalacaoComercialImg,
    alt: "Ar-condicionado cassete instalado em forro de ambiente comercial",
  },
  {
    icon: Snowflake,
    title: "Split",
    text: "Alta eficiência e silêncio para quartos, salas e escritórios, com instalação limpa e alinhada ao ambiente.",
    image: splitImg,
    alt: "Ar-condicionado Split instalado em parede",
  },
  {
    icon: Snowflake,
    title: "Piso/Teto",
    text: "Ideal para ambientes amplos e comerciais, com grande vazão de ar e instalação versátil no piso ou no teto.",
    image: pisoTetoImg,
    alt: "Ar-condicionado Piso/Teto instalado próximo ao teto",
  },
  {
    icon: Snowflake,
    title: "Cassete",
    text: "Embutido no forro, distribui o ar em 360° com visual discreto e conforto uniforme em toda a área.",
    image: cassetteImg,
    alt: "Ar-condicionado Cassete embutido em forro de gesso",
  },
  {
    icon: ClipboardCheck,
    title: "Manutenção Preventiva (PMOC)",
    text: "Planos periódicos que garantem economia de energia e prolongam a vida útil dos equipamentos.",
  },
  {
    icon: SprayCan,
    title: "Limpeza e Higienização",
    text: "Limpeza técnica completa com eliminação de fungos, ácaros e bactérias do sistema.",
  },
  {
    icon: Thermometer,
    title: "Manutenção Corretiva",
    text: "Diagnóstico rápido, reparo de vazamentos, recarga de gás e troca de componentes.",
  },
];


const pilares = [
  {
    icon: Award,
    title: "Qualidade",
    text: "Excelência na escolha dos produtos, ferramentas e execução técnica.",
  },
  {
    icon: HeartHandshake,
    title: "Ética",
    text: "Relacionamento transparente, diagnóstico honesto e respeito ao cliente.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    text: "Foco em eficiência energética, economia na conta de luz e descarte responsável.",
  },
];


const depoimentos = [
  {
    nome: "Renata Camargo",
    local: "Jardim Fogaça, Itapetininga",
    texto:
      "Instalaram dois splits em casa no mesmo dia. Serviço limpo, organizado e explicaram tudo sobre o uso.",
  },
  {
    nome: "Marcos Ferraz",
    local: "Centro, Itapetininga",
    texto:
      "Fazemos a manutenção preventiva do escritório com eles. Nunca mais tivemos parada de equipamento.",
  },
  {
    nome: "Juliana Prestes",
    local: "Vila Barth, Itapetininga",
    texto:
      "A higienização resolveu o cheiro do aparelho e a alergia do meu filho melhorou muito. Recomendo.",
  },
  {
    nome: "Anderson Ribeiro",
    local: "Taquaral, Itapetininga",
    texto:
      "Chamei às 8h e às 11h o ar já estava gelando de novo. Diagnóstico honesto e preço justo.",
  },
];

const marcas = [
  { nome: "MIDEA", credenciado: true },
  { nome: "PHILCO", credenciado: true },
  { nome: "DAIKIN", credenciado: false },
  { nome: "FUJITSU", credenciado: false },
  { nome: "LG", credenciado: false },
  { nome: "ELGIN", credenciado: false },
  { nome: "SAMSUNG", credenciado: false },
  { nome: "CARRIER", credenciado: false },
];

const servicosB2B = [
  {
    icon: Snowflake,
    title: "Câmaras de Resfriamento & Conservação",
    text: "Para hortifrúti, laticínios, bebidas e alimentos frescos (0°C a 10°C). Controle preciso e eficiência energética.",
  },
  {
    icon: Thermometer,
    title: "Câmaras de Congelamento",
    text: "Para açougues, frigoríficos, sorvetes e congelados (-18°C a -25°C). Isolamento térmico de alta performance e compressores robustos.",
  },
  {
    icon: ClipboardCheck,
    title: "Manutenção Preventiva & Contrato PMOC",
    text: "Assistência técnica rápida, troca de peças, carga de gás e conformidade com normas sanitárias para evitar paradas na produção.",
  },
  {
    icon: RefreshCw,
    title: "Retrofit e Modernização de Sistemas",
    text: "Substituição de equipamentos antigos por motores e compressores modernos de baixo consumo elétrico.",
  },
  {
    icon: Milk,
    title: "Resfriadores de Leite",
    text: "Instalação, manutenção e assistência técnica em tanques e resfriadores de leite para produtores rurais.",
  },
];

const setoresB2B = [
  { nome: "Açougues & Frigoríficos", icon: Factory },
  { nome: "Supermercados", icon: Factory },
  { nome: "Restaurantes & Padarias", icon: Factory },
  { nome: "Distribuidoras de Bebidas", icon: Factory },
  { nome: "Hortifrútis", icon: Factory },
  { nome: "Fazendas & Produtores Rurais", icon: Tractor },
];

const marcasParceiras = [
  "BITZER",
  "ELGIN",
  "DANFOSS",
  "TECUMSEH",
  "HEATCRAFT",
  "DAIKIN",
  "CARRIER",
  "MIDEA",
  "FUJITSU",
  "LG",
];

function Index() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    servico: "Instalação",
    mensagem: "",
  });

  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      <Header />

      <main>
        {/* HERO */}
        <section id="home" className="relative isolate overflow-hidden">
          <img
            src={heroImg}
            alt="Sala de estar moderna com ar condicionado split instalado na parede"
            width={1920}
            height={1088}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-primary/85 lg:bg-gradient-to-r lg:from-primary lg:via-primary/90 lg:to-primary/40" />

          <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28 lg:py-36">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold tracking-wide text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                ATENDIMENTO EM ITAPETININGA E REGIÃO
              </span>
              <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/20 px-3.5 py-1.5 text-xs font-bold tracking-wide text-accent shadow-card">
                <Check className="h-3.5 w-3.5" />
                Técnicos Credenciados Midea & Philco
              </span>
              <h1 className="mt-5 text-3xl font-extrabold leading-[1.1] tracking-tight text-primary-foreground sm:text-5xl">
                Conforto térmico e ar puro para sua casa ou empresa em{" "}
                <span className="text-accent">Itapetininga</span>.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                Instalação profissional, manutenção preventiva e higienização especializada de ar
                condicionado, além de soluções em câmaras frias e refrigeração comercial. Equipe
                certificada e garantia de serviço.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-whatsapp"
                >
                  <WhatsappIcon className="h-5 w-5" />
                  Solicitar Orçamento Grátis
                </a>
                <a href="#servicos" className="btn-base btn-outline-light">
                  Ver Nossos Serviços
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="bg-surface py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground">SERVIÇOS</p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-primary sm:text-4xl">
                Tudo o que você precisa em climatização.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {servicos.map((s) => (
                <article key={s.title} className="card-surface p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/5 text-primary">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-14">
              <p className="text-center text-xs font-bold tracking-[0.2em] text-muted-foreground">
                MODELOS DE AR-CONDICIONADO QUE ATENDEMOS
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {modelos.map((m) => (
                  <article key={m.nome} className="card-surface overflow-hidden">
                    <img
                      src={m.image}
                      alt={m.alt}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="h-44 w-full object-cover"
                    />
                    <div className="p-5">
                      <h3 className="text-base font-bold text-primary">{m.nome}</h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* REFRIGERAÇÃO COMERCIAL & CÂMARAS FRIAS (B2B) */}
        <section id="refrigeracao-comercial" className="surface-deep py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold tracking-wide text-accent">
                <Building2 className="h-3.5 w-3.5" />
                ATENDIMENTO B2B
              </span>
              <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-4xl">
                Soluções Comerciais em Refrigeração
              </h2>
              <p className="mt-4 text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
                Projetos sob medida, montagem e manutenção especializada de Câmaras Frigoríficas
                para o seu negócio em Itapetininga e região.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {servicosB2B.map((s) => (
                <article
                  key={s.title}
                  className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/[0.04] p-6 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:border-accent/50"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent/15 text-accent">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-primary-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                    {s.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12">
              <p className="text-xs font-bold tracking-[0.2em] text-primary-foreground/60">
                SETORES ATENDIDOS
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {setoresB2B.map((s) => (
                  <span
                    key={s.nome}
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/[0.06] px-3.5 py-1.5 text-xs font-medium text-primary-foreground/85"
                  >
                    <s.icon className="h-3.5 w-3.5 text-accent" />
                    {s.nome}
                  </span>
                ))}
              </div>
            </div>

            {/* MARCAS PARCEIRAS & EQUIPAMENTOS */}
            <div className="mt-14 border-t border-primary-foreground/15 pt-10">
              <p className="text-center text-xs font-semibold tracking-[0.2em] text-primary-foreground/60">
                MARCAS PARCEIRAS & EQUIPAMENTOS
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                {marcasParceiras.map((m) => (
                  <span
                    key={m}
                    className="text-base font-extrabold tracking-tight text-primary-foreground/55 sm:text-lg"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA B2B */}
            <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.05] p-8 text-center sm:flex-row sm:justify-between sm:text-left">
              <div>
                <h3 className="text-lg font-bold text-primary-foreground sm:text-xl">
                  Tem um projeto comercial em mente?
                </h3>
                <p className="mt-1 text-sm text-primary-foreground/70">
                  Fale com nossa equipe técnica e receba um orçamento sob medida para o seu negócio.
                </p>
              </div>
              <a
                href={WHATSAPP_B2B_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-whatsapp shrink-0"
              >
                <WhatsappIcon className="h-5 w-5" />
                Solicitar Orçamento Comercial / B2B
              </a>
            </div>
          </div>
        </section>

        {/* SOBRE NÓS */}
        <section id="sobre" className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-3xl">
              <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground">SOBRE NÓS</p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-primary sm:text-4xl">
                Mais de 5 anos construindo confiança em Itapetininga e região.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                A Global Ar nasceu da vontade de oferecer um atendimento técnico de verdade: próximo,
                honesto e bem-feito. Ao longo de mais de 5 anos no mercado, transformamos a
                experiência de dezenas de clientes residenciais e comerciais em Itapetininga e
                região, unindo conhecimento técnico a um relacionamento baseado na confiança.
                Cada instalação, manutenção ou reparo é uma oportunidade de provar que é possível
                aliar eficiência, respeito ao cliente e preço justo.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pilares.map((p) => (
                <article key={p.title} className="card-surface p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/5 text-primary">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROVA SOCIAL */}
        <section className="bg-surface py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight text-primary sm:text-4xl">
              Quem já tem o clima perfeito em casa.
            </h2>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {depoimentos.map((d) => (
                <figure key={d.nome} className="card-surface flex h-full flex-col p-6">
                  <Quote className="h-6 w-6 text-accent" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                    “{d.texto}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4">
                    <span className="block text-sm font-bold text-primary">{d.nome}</span>
                    <span className="block text-xs text-muted-foreground">{d.local}</span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-14 border-t border-border pt-8">
              <p className="text-center text-xs font-semibold tracking-[0.2em] text-muted-foreground">
                INSTALAMOS E DAMOS MANUTENÇÃO NAS PRINCIPAIS MARCAS
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
                {marcas.map((m) => (
                  <div key={m.nome} className="flex flex-col items-center gap-1.5">
                    <span
                      className={
                        m.credenciado
                          ? "text-xl font-extrabold tracking-tight text-primary"
                          : "text-lg font-extrabold tracking-tight text-muted-foreground/60"
                      }
                    >
                      {m.nome}
                    </span>
                    {m.credenciado && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-accent/50 bg-accent/15 px-2 py-0.5 text-[10px] font-bold tracking-wide text-accent">
                        <Check className="h-2.5 w-2.5" />
                        CREDENCIADO OFICIAL
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="py-20 sm:py-24">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 px-4 lg:flex-row lg:items-stretch lg:justify-between">
            {/* Coluna 1: Texto e dados */}
            <div className="w-full lg:flex-1 lg:pb-0">
              <h2 className="text-2xl font-extrabold tracking-tight text-primary sm:text-4xl">
                Pronto para ter o clima perfeito?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Envie seu pedido e retornamos com um orçamento sem compromisso. Atendimento rápido
                de segunda a sábado.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/5 text-primary">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">Telefone / WhatsApp</span>
                    <span className="block truncate font-semibold text-primary">
                      {PHONE_DISPLAY}
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/5 text-primary">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">E-mail</span>
                    <span className="block truncate font-semibold text-primary">{EMAIL}</span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/5 text-primary">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">Atendimento</span>
                    <span className="block truncate font-semibold text-primary">{CITY}</span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/5 text-primary">
                    <Instagram className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">Instagram</span>
                    <a
                      href="https://instagram.com/globalarrefrigeracao"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block truncate font-semibold text-primary hover:text-accent"
                    >
                      @globalarrefrigeracao
                    </a>
                  </span>
                </li>
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-whatsapp mt-8"
              >
                <WhatsappIcon className="h-5 w-5" />
                Falar agora no WhatsApp
              </a>
            </div>

            {/* Coluna 2: Técnico (desktop only) */}
            <div className="hidden lg:flex lg:justify-center lg:px-6">
              <img
                src="/mascoteglobalar.png"
                alt="Técnico da Global Ar apontando para o formulário de contato"
                width={380}
                height={380}
                loading="lazy"
                className="hidden h-auto w-auto max-h-[350px] object-contain self-end lg:block"
              />
            </div>

            {/* Coluna 3: Formulário */}
            <form
              className="card-surface w-full p-6 sm:p-8 lg:flex-1"

              onSubmit={(e) => {
                e.preventDefault();
                const texto = [
                  `Olá! Vim pelo site da Global Ar e gostaria de um orçamento.`,
                  ``,
                  `*Nome:* ${form.nome}`,
                  `*Telefone:* ${form.telefone}`,
                  `*Serviço:* ${form.servico}`,
                  form.mensagem ? `*Detalhes:* ${form.mensagem}` : null,
                ]
                  .filter(Boolean)
                  .join("\n");
                const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
                window.open(url, "_blank", "noopener,noreferrer");
                toast.success("Abrindo o WhatsApp com seus dados preenchidos...");
              }}
            >
              <div className="grid gap-4">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-primary">Nome</span>
                  <input
                    required
                    name="nome"
                    value={form.nome}
                    onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
                    placeholder="Seu nome completo"
                    className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-primary">Telefone</span>
                  <input
                    required
                    name="telefone"
                    type="tel"
                    value={form.telefone}
                    onChange={(e) => setForm((f) => ({ ...f, telefone: e.target.value }))}
                    placeholder="(15) 99999-9999"
                    className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-primary">
                    Tipo de serviço
                  </span>
                  <select
                    name="servico"
                    value={form.servico}
                    onChange={(e) => setForm((f) => ({ ...f, servico: e.target.value }))}
                    className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                  >
                    <option>Instalação</option>
                    <option>Manutenção preventiva (PMOC)</option>
                    <option>Higienização</option>
                    <option>Manutenção corretiva</option>
                    <option>Câmaras Frias</option>
                    <option>Resfriadores de Leite</option>
                    <option>Outro</option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-primary">
                    Mensagem <span className="font-normal text-muted-foreground">(opcional)</span>
                  </span>
                  <textarea
                    name="mensagem"
                    rows={4}
                    value={form.mensagem}
                    onChange={(e) => setForm((f) => ({ ...f, mensagem: e.target.value }))}
                    placeholder="Conte o modelo do aparelho ou o problema"
                    className="w-full resize-none rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </label>
                <button type="submit" className="btn-base btn-whatsapp w-full">
                  <WhatsappIcon className="h-5 w-5" />
                  Enviar para o WhatsApp
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Você será redirecionado ao WhatsApp com a mensagem pronta para enviar.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="surface-deep">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <div className="min-w-0">
            <p className="text-sm font-extrabold tracking-tight">GLOBAL AR REFRIGERAÇÃO ITAPETININGA</p>
            <p className="mt-1 text-xs text-primary-foreground/65">
              © 2026 — Todos os direitos reservados. CNPJ e registros técnicos sob solicitação.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://instagram.com/globalarrefrigeracao"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-3.5 py-1.5 text-xs font-medium transition hover:border-accent/50 hover:text-accent"
            >
              <Instagram className="h-3.5 w-3.5 text-accent" />
              @globalarrefrigeracao
            </a>
            <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-3.5 py-1.5 text-xs font-medium">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              Atendemos em Itapetininga e Região
            </p>
          </div>
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="btn-base btn-whatsapp fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full p-0 lg:hidden"
      >
        <WhatsappIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
