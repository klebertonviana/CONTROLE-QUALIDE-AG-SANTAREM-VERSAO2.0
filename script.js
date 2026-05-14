// ================= FUNÇÕES GLOBAIS =================
function saudacaoHorario() {
  const hora = new Date().getHours();

  if (hora < 12) {
    return "Bom dia,";
  } else if (hora < 18) {
    return "Boa tarde,";
  } else {
    return "Boa noite,";
  }
}

function formatarTextoPadrao(texto) {
  if (!texto) return "";
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

function formatarNomeProprio(texto) {
  if (!texto) return "";

  const palavrasMinusculas = ["da", "de", "do", "das", "dos", "e"];

  return texto
    .toLowerCase()
    .split(" ")
    .filter(palavra => palavra.trim() !== "")
    .map((palavra, index) => {
      if (index !== 0 && palavrasMinusculas.includes(palavra)) {
        return palavra;
      }

      return palavra.charAt(0).toUpperCase() + palavra.slice(1);
    })
    .join(" ");
}

function normalizarTextoLivre(texto) {
  if (!texto) return "";

  return texto
    .toLowerCase()
    .split("\n")
    .map(linha => {
      linha = linha.trim();
      if (!linha) return "";

      return linha.charAt(0).toUpperCase() + linha.slice(1);
    })
    .join("\n");
}

// ================= USUÁRIOS =================
const usuarios = [
  {
    matricula: "23715",
    nome: "AMANDA REGINA DA SILVA COSTA",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "22272",
    nome: "MARCIELE FERREIRA SANTIAGO",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "23719",
    nome: "MARLISSON JEAN CASTRO CRUZ",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "21945",
    nome: "ABEL TABOSA SILVA SANTOS",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "20291",
    nome: "ADILSON SAMUEL LIMA COELHO",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "21054",
    nome: "ANA CAROLINA MAGALHAES DE SENA",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "22238",
    nome: "ANA CLARA LOPES DE SOUSA",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "22340",
    nome: "CAROLINA DA SILVA PENHA",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "11542",
    nome: "EVELINE GATO VIEIRA FERREIRA",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "18081",
    nome: "JULYANNE MARIA NOGUEIRA RODRIGUES",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "7098",
    nome: "KLEBERTON ANGELO VIANA DA CRUZ",
    cargo: "Supervisor de agência III",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Carlos Eduardo - Coordenador Regional II"
  },
  {
    matricula: "21849",
    nome: "LUANA CAIRES BARBOSA",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "15928",
    nome: "MARLIANE SANTOS DA CONCEICAO",
    cargo: "Atendente Presencial I",
    agencia: "Santarém",
    regional: "Oeste",
    gestor: "Kleberton Viana - Supervisor de agência III"
  },
  {
    matricula: "13870",
    nome: "THIAGO MAIA DA SILVA",
    cargo: "Atendente Volante I",
    agencia: "",
    regional: "Oeste",
    gestor: "Carlos Eduardo - Coordenador Regional II"
  },
  {
    matricula: "5054",
    nome: "CARLOS EDUARDO ARAUJO DE ALMEIDA",
    cargo: "Coordenador Regional II",
    agencia: "",
    regional: "Oeste",
    gestor: "Tulia Lopes - Gerente de atendimento"
  },
  {
    matricula: "11544",
    nome: "RAIANE BENTES BATISTA",
    cargo: "Assistente de Treinamento",
    agencia: "",
    regional: "Oeste",
    gestor: "Tulia Lopes - Gerente de atendimento"
  },
  {
    matricula: "3270",
    nome: "TULIA GABRIELA MARQUES LOPES",
    cargo: "Gerente de Atendimento",
    agencia: "",
    regional: "Oeste",
    gestor: "Zuelem Mendes - Gerente Corporativa"
  }
];

// ================= LINKS =================
const linksDentro = {
    "Troca com Análise": "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jKbIdJUOUJRRUpFOVU2TFhKOVJYVVVCOEIwTjM3NS4u",

  "Reclamação": "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jKbIdJUN0NLQ0JPN0RVNUtXTlZaS1pQVDlLSTVDMy4u",

"Danos Elétricos": "https://forms.office.com/Pages/ResponsePage.aspx?id=Ai-uOBBXEk6Au4NgDD_fHuBDDv4IdJRJlFGjfAo7IX9UQUdTTFI1SzhUMTVIQklWNzRBUDVPNVdVNy4u",

"Danos Materiais": "https://forms.office.com/Pages/ResponsePage.aspx?id=Ai-uOBBXEk6Au4NgDD_fHuBDDv4IdJRJlFGjfAo7IX9UQUdTTFI1SzhUMTVIQklWNzRBUDVPNVdVNy4u",

"Aferição": "https://forms.office.com/Pages/ResponsePage.aspx?id=Ai-uOBBXEk6Au4NgDD_fHuBDDv4IdJRJlFGjfAo7IX9UQUdTTFI1SzhUMTVIQklWNzRBUDVPNVdVNy4u",

"Devolução de Crédito em Espécie": "https://forms.office.com/Pages/ResponsePage.aspx?id=Ai-uOBBXEk6Au4NgDD_fHuBDDv4IdJRJlFGjfAo7IX9UQUdTTFI1SzhUMTVIQklWNzRBUDVPNVdVNy4u",

"Nível de Tensão": "https://forms.office.com/Pages/ResponsePage.aspx?id=Ai-uOBBXEk6Au4NgDD_fHuBDDv4IdJRJlFGjfAo7IX9UQUdTTFI1SzhUMTVIQklWNzRBUDVPNVdVNy4u",

"Conexão Temporária": "https://forms.office.com/Pages/ResponsePage.aspx?id=Ai-uOBBXEk6Au4NgDD_fHuBDDv4IdJRJlFGjfAo7IX9UQUdTTFI1SzhUMTVIQklWNzRBUDVPNVdVNy4u",

  "Plano de Contingência": "https://forms.office.com/pages/responsepage.aspx?id=UtPobFF_KUeKzTo8uhC_jAFRZMlEMmBOhSoASQsPrCNUMlJIRU9ITjBQU0NRSlFZTllMMVBRT1c4Ni4u&route=shorturl",

  "Controle de Serviços Manuais": "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jKbIdJUN043NEhYRUFYWVFYNDBLWDJWMEdZMlBDOC4u",

  "Reincidência": "https://forms.cloud.microsoft/pages/responsepage.aspx?id=UtPobFF_KUeKzTo8uhC_jAFRZMlEMmBOhSoASQsPrCNUMzZONTJEU0VaNFY4OTlVNVFCOEpLVDZITS4u&route=shorturl",

  "Gestão de Leitura": "https://docs.google.com/forms/d/e/1FAIpQLSflahhJcXxrB4h7KiXpvwwPFnAmNclhpdFI5EKnSyNiva1LnQ/viewform",

  "Gestão de Horas": "https://1drv.ms/x/c/988790b43fbb1367/IQSA2M10k-mVQ4iy6GFVzfhxAeqMxhbYdTVfQaiofoSsjmk?em=2&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&edaebf=rslc0",

  "Agenda de Ações": "https://1drv.ms/x/c/988790b43fbb1367/IQTuArTaI8xaQYiQOsNJkaEWAYva8D1Li4p31qZmqQ4t51w?em=2&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&edaebf=rslc0",

  "Gestão de Atividades": "https://1drv.ms/x/c/988790b43fbb1367/IQRBhaT8HC4DR6tPeMY4SKXPAVKZQVVci8c_-n84OqfNfQA?em=2&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&edaebf=rslc0"
};

const linksFora = {
  "Troca por Análise com Desligamento": "https://1drv.ms/x/c/988790b43fbb1367/IQBnE7s_tJCHIICYbQEAAAAAAb5z4ni4ucOdb8Ofouc_uSs?e=VFqGeb",

  "Acompanhamento TSEE": "https://1drv.ms/x/c/988790b43fbb1367/IQB5QkXBFCcdS4qj0n6fh4C7ATcCqxS7VwMNddOwW2y9xOk?e=XxTzim",

  "Meu TMA": "https://1drv.ms/x/c/988790b43fbb1367/IQBZjy8TWAlTSqyi_nj5JNOXAaBRLudhA9CQgLGEyoMsW9c?e=JbitAC",

  "Nova Agenda Pará": "https://cgb-hub.vercel.app/"
};

// ================= ELEMENTOS =================
const loginScreen = document.getElementById("loginScreen");
const appScreen = document.getElementById("appScreen");

const loginForm = document.getElementById("loginForm");
const matriculaInput = document.getElementById("matriculaInput");
const loginError = document.getElementById("loginError");

const topUserText = document.getElementById("topUserText");
const profileButton = document.getElementById("profileButton");
const logoutButton = document.getElementById("logoutButton");

const menuItems = document.querySelectorAll(".menu-item");
const pages = document.querySelectorAll(".page");

const iframe = document.getElementById("contentFrame");
const iframeTitle = document.getElementById("iframeTitle");

const backToAcompanhamento = document.getElementById("backToAcompanhamento");

const profileFooter = document.getElementById("profileFooter");
const lastAccessText = document.getElementById("lastAccessText");

const profileName = document.getElementById("profileName");
const profileMatricula = document.getElementById("profileMatricula");
const profileCargo = document.getElementById("profileCargo");
const profileAgencia = document.getElementById("profileAgencia");
const profileRegional = document.getElementById("profileRegional");
const profileGestor = document.getElementById("profileGestor");
const profilePhoto = document.getElementById("profilePhoto");

let usuarioLogado = null;

// ================= LOGIN =================
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const matricula = matriculaInput.value.trim();
  const user = usuarios.find(u => u.matricula === matricula);

  if (!user) {
    loginError.textContent = "Matrícula não autorizada. Entre em contato com a supervisão para liberação.";
    return;
  }

  usuarioLogado = user;

topUserText.textContent = `${user.matricula} - ${user.nome}`;

profileName.textContent = user.nome;
profileMatricula.textContent = user.matricula;
profileCargo.textContent = user.cargo;
profileAgencia.textContent = user.agencia || "-";
profileRegional.textContent = user.regional;
profileGestor.textContent = user.gestor;

profilePhoto.src = `fotos/${user.matricula}.jpg`;

lastAccessText.textContent = new Date().toLocaleString("pt-BR");

loginScreen.classList.add("hidden");
appScreen.classList.remove("hidden");
});

// ================= LOGOUT =================
logoutButton.addEventListener("click", () => {
  location.reload();
});

// ================= MENU =================
menuItems.forEach(item => {
  item.addEventListener("click", () => {
    menuItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    const title = item.dataset.title || item.innerText.trim();

    navegar(title);
  });
});

// ================= CARDS HOME / ACOMPANHAMENTO =================
document.querySelectorAll(".home-card, .acompanhamento-card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.dataset.title || card.innerText.trim();

    navegar(title);
  });
});

// ================= PERFIL =================
profileButton.addEventListener("click", () => {
  abrirPagina("profilePage");
  profileFooter.classList.remove("hidden");

  menuItems.forEach(i => i.classList.remove("active"));
});

// ================= NAVEGAÇÃO =================
function navegar(title) {
  profileFooter.classList.add("hidden");

  if (title === "Início") {
    abrirPagina("homePage");
    iframe.src = "";
    return;
  }

  if (title === "Scripts / Mensagens Padrão") {
    abrirPagina("scriptsPage");
    iframe.src = "";
    return;
  }

  if (title === "Gerador de Email") {
    abrirPagina("emailPage");
    iframe.src = "";
    return;
  }

if (title === "Acompanhamento de Serviços") {
  abrirPagina("acompanhamentoPage");
  iframe.src = "";
  return;
}

  if (title === "Registros de Reclamação") {
    abrirPagina("complaintPage");
    iframe.src = "";
    return;
  }

  if (linksDentro[title]) {
  abrirPagina("iframePage");

  iframeTitle.textContent = title;
  iframe.src = linksDentro[title];

  const servicosAcompanhamento = [
    "Troca com Análise",
    "Reclamação",
    "Danos Elétricos",
    "Danos Materiais",
    "Aferição",
    "Devolução de Crédito em Espécie",
    "Nível de Tensão",
    "Conexão Temporária"
  ];

  if (servicosAcompanhamento.includes(title)) {
    backToAcompanhamento.classList.remove("hidden");
  } else {
    backToAcompanhamento.classList.add("hidden");
  }

  return;
}

  if (linksFora[title]) {
    window.open(linksFora[title], "_blank");
    return;
  }

  abrirPagina("homePage");
}

// ================= TROCA DE PÁGINA =================
function abrirPagina(id) {
  pages.forEach(p => p.classList.remove("active-page"));
  document.getElementById(id).classList.add("active-page");
}

backToAcompanhamento.addEventListener("click", () => {
  abrirPagina("acompanhamentoPage");
  iframe.src = "";
});

// ================= SCRIPTS =================
const scripts = [
  {
    titulo: "CHAMADO",
    texto: `Bom dia, Prezados,

Agência de Santarém sem internet

Chamado: xxxxxxxx
Qtd. PA’s: 12
Qtd. PA’s afetadas: 12
Foram verificados os cabos? SIM
Link de internet indisponível? SIM
SGA afetado? SIM
CRM/CCS afetado? SIM
Contato do supervisor: 93991416091

Att. Viúva Negra`
  },
  {
    titulo: "DESLOCAMENTO DE RAMAL",
    tipo: "dinamicoDeslocamentoRamal",
    texto: "Deslocamento de ramal cliente tipo de medição ponto de referência contato motivo"
  },
  {
    titulo: "NIVEL DE TENSAO",
    tipo: "dinamicoNivelTensao",
    texto: "nivel de tensao oscilação fornecimento comodos periodo eletrodomestico comercio contato"
  },
{
  titulo: "DEVOLUÇÃO DE CRÉDITO EM ESPECIE",
  tipo: "dinamicoDevolucaoCredito",
  texto: "devolução crédito espécie formulario dados bancarios cliente conta contrato"
},
  {
    titulo: "TRANSFERÊNCIA DE PARCELAMENTO EM APROVAÇÃO",
    texto: `Bom dia,

Favor transferir plano: 700003218320
Login: T17029
Classe: Residencial pleno
Faturas: Normal
Juros de financiamento: 1%
Retira juros: Não
Entrada: 15%
Parcelas: 48x

Att. Capitão América`
  },
  {
    titulo: "ENVIO DE SOLICITAÇÃO DE RETIRADA DE BLOQUEIO DE PROTESTO",
    texto: `Bom dia, Prezado,

Solicito a retirada do bloqueio de protesto para realização de reparcelamento, por favor.

NOME:
CPF:
CC:
PN:

Att. Feiticeira Escarlate`
  },
  {
    titulo: "SOLICITAÇÃO DE APOIO EMERGENCIAL",
    texto: `Bom dia,

Prezados,

Peço apoio, por gentileza, na nota de serviço de falta de energia. Cliente está há 3 dias sem energia em seu imóvel, e no local possui uma idosa de 80 anos.

Nota: 1117389678
Conta contrato: 3032494519
Instalação: 80036587
Equipe: SAN-E002M

Att. Thor`
  },
  {
    titulo: "STATUS DO ATENDENTE",
    texto: `📊 STATUS DO ATENDENTE - AG. SANTARÉM

Nome:

📌 Presença:
Bateu ponto: ( ) Sim ( ) Não → Por quê:
Realizou DDS: ( ) Sim ( ) Não → Por quê:

📌 Acessos às ferramentas?
SGA:
SAP CRM:
SAP CCS:
Aplicativo SAP Logon:
Portal de Serviços:
SOMOS:
BackOffice (Antigo):
BackOffice (Novo):
Aprend+:
Sisfeedback:
SIGA:
OPER:
Portal de redefinição de senhas e aplicativo autenticador:

🚨 Existe algum impedimento para atendimento?
( ) Não
( ) Sim → Qual:

📝 Observações:`
  },
  {
    titulo: "PARCELAMENTO FATURA PERIÓDICA",
    texto: `PARCELAMENTO DE FATURAS PERIÓDICAS

ENTRADA DE VALOR DE 50%: R$ 500,00
RESTANTE PARCELADO: 6X DE R$ 50,21
VALOR TOTAL: R$ 801,26

CONTA CONTRATO POSSUI PROTESTO: SIM / NÃO
CLIENTE REGULAR COM A RECEITA FEDERAL: SIM / NÃO

CLIENTE CIENTE DE JUROS, MULTA, CORREÇÃO MONETÁRIA, MAIS 1% DO FINANCIAMENTO DO PARCELAMENTO CONFORME O IPCA.`
  },
  {
    titulo: "PARCELAMENTO FATURA CNR",
    texto: `PARCELAMENTO DE FATURA DE CONSUMO NÃO REGISTRADO

ENTRADA DE VALOR DE 50%: R$ 500,00
RESTANTE PARCELADO: 6X DE R$ 50,21
VALOR TOTAL: R$ 801,26

CONTA CONTRATO POSSUI PROTESTO: SIM / NÃO
CLIENTE REGULAR COM A RECEITA FEDERAL: SIM / NÃO

CLIENTE CIENTE DE JUROS, MULTA, CORREÇÃO MONETÁRIA, MAIS 1% DO FINANCIAMENTO DO PARCELAMENTO CONFORME O IPCA.`
  },
  {
    titulo: "PARCELAMENTO FATURA GOLPES - SITE FALSO",
    texto: `PARCELAMENTO DE FATURAS NORMAIS REFERENTE AOS MESES 09/2024 E 10/2024, QUE FORAM PAGAS ATRAVÉS DE SITE FRAUDULENTO.

CONFORME INFORMATIVO 147/2023, GERADO PARCELAMENTO:
SEM ENTRADA, SEM JUROS, MULTA, CORREÇÃO MONETÁRIA E SEM 1% DE FINANCIAMENTO.

PARCELAS: 3X R$ 20,50
VALOR TOTAL: R$ 61,50

CONTA CONTRATO POSSUI PROTESTO: SIM / NÃO
CLIENTE REGULAR COM A RECEITA FEDERAL: SIM / NÃO`
  },
  {
    titulo: "TRANSFERÊNCIA DE DÉBITO E PARCELAMENTO",
    texto: `TROCA DE TITULARIDADE PARA CLIENTE: CAPITÃ MARVEL (XXXXX)

CONTA CONTRATO:
ONDE NOVO CLIENTE IRÁ ASSUMIR TODO O DÉBITO.

ENTRADA DE VALOR DE 50%: R$ 500,00
RESTANTE PARCELADO: 6X DE R$ 50,21
VALOR TOTAL: R$ 801,26

CONTA CONTRATO POSSUI PROTESTO: SIM / NÃO
CLIENTE REGULAR COM A RECEITA FEDERAL: SIM / NÃO

CLIENTE CIENTE DE JUROS, MULTA, CORREÇÃO MONETÁRIA, MAIS 1% DO FINANCIAMENTO DO PARCELAMENTO CONFORME O IPCA.`
  },
];

// ================= ELEMENTOS SCRIPTS =================
const searchInput = document.getElementById("scriptSearchInput");
const scriptsList = document.getElementById("scriptsList");
const scriptsInitialMessage = document.getElementById("scriptsInitialMessage");
const clearScriptSearchButton = document.getElementById("clearScriptSearchButton");

const scriptsWorkArea = document.getElementById("scriptsWorkArea");
const scriptDynamicFormCard = document.getElementById("scriptDynamicFormCard");
const scriptResultCard = document.getElementById("scriptResultCard");
const scriptDynamicFields = document.getElementById("scriptDynamicFields");
const scriptDynamicBadge = document.getElementById("scriptDynamicBadge");
const clearDynamicScriptButton = document.getElementById("clearDynamicScriptButton");

const selectedTitle = document.getElementById("selectedScriptTitle");
const selectedText = document.getElementById("selectedScriptText");
const copyButton = document.getElementById("copyScriptButton");
const copyFeedback = document.getElementById("copyScriptFeedback");

let scriptSelecionado = null;

// ================= RENDER LISTA DE SCRIPTS =================
function renderScripts(filtro = "") {
  if (!scriptsList) return;

  scriptsList.innerHTML = "";

  const termo = filtro.toLowerCase().trim();

  scriptsList.classList.remove("scripts-list-hidden");
scriptsInitialMessage.classList.add("hidden");

const filtrados = termo
  ? scripts.filter(script =>
      script.titulo.toLowerCase().includes(termo) ||
      script.texto.toLowerCase().includes(termo)
    )
  : scripts;

  if (filtrados.length === 0) {
    scriptsList.innerHTML = `
      <div class="script-empty">
        <i class="fa-regular fa-folder-open"></i>
        <strong>Nenhum script encontrado</strong>
        <span>Tente pesquisar por outro termo.</span>
      </div>
    `;
    return;
  }

  filtrados.forEach((script, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "script-item";

    item.innerHTML = `
      <strong>${script.titulo}</strong>
      <span>${script.tipo ? "Preencher informações" : "Visualizar mensagem padrão"}</span>
    `;

    item.style.opacity = "0";
    item.style.transform = "translateY(6px)";

    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, index * 35);

    item.addEventListener("click", () => {
  document
    .querySelectorAll("#scriptsList .script-item")
    .forEach(i => i.classList.remove("selected"));

  item.classList.add("selected");

  scriptsList.classList.add("scripts-list-hidden");
  scriptsInitialMessage.classList.add("hidden");

      copyButton.innerHTML = `<i class="fa-regular fa-copy"></i> Copiar`;
      copyButton.classList.remove("copied");
      copyFeedback.textContent = "";

      if (script.tipo === "dinamicoDeslocamentoRamal") {
  abrirFormularioDeslocamentoRamal();
  return;
}

if (script.tipo === "dinamicoNivelTensao") {
  abrirFormularioNivelTensao();
  return;
}

if (script.tipo === "dinamicoDevolucaoCredito") {
  abrirFormularioDevolucaoCredito();
  return;
}

abrirScriptSimples(script);

      abrirScriptSimples(script);
    });

    scriptsList.appendChild(item);
  });
}

// ================= SCRIPT SIMPLES =================
function abrirScriptSimples(script) {
  scriptSelecionado = script;

  scriptsWorkArea.classList.remove("hidden");
  scriptsWorkArea.classList.add("simple-mode");

  scriptDynamicFormCard.classList.add("hidden");
  scriptResultCard.classList.remove("hidden");

  selectedTitle.textContent = script.titulo;
  selectedText.textContent = script.texto;

  copyButton.disabled = false;
}

// ================= SCRIPT DINÂMICO - DESLOCAMENTO DE RAMAL =================
function abrirFormularioDeslocamentoRamal() {
  scriptSelecionado = {
    titulo: "DESLOCAMENTO DE RAMAL",
    texto: ""
  };

  scriptsWorkArea.classList.remove("hidden");
  scriptsWorkArea.classList.remove("simple-mode");

  scriptDynamicFormCard.classList.remove("hidden");
  scriptResultCard.classList.remove("hidden");

  scriptDynamicBadge.textContent = "Deslocamento de Ramal";
  selectedTitle.textContent = "Script gerado";

  scriptDynamicFields.innerHTML = `
    <div class="dynamic-script-alert complaint-field full">
  <strong>Prezado colaborador,</strong>
  <p>Em caso de dúvidas, orientamos que as informações sejam consultadas na ferramenta Aprende+ da Equatorial Energia.</p>
</div>

    <div class="complaint-field">
      <label for="ramal_nomeCliente">Nome do cliente</label>
      <input id="ramal_nomeCliente" type="text" placeholder="Digite o nome do cliente" autocomplete="off">
    </div>

    <div class="complaint-field">
      <label for="ramal_tipoMedicao">Tipo de medição instalada</label>
      <select id="ramal_tipoMedicao">
        <option value="">Selecione...</option>
        <option value="CPREDE">CPREDE</option>
        <option value="CMB">CMB</option>
        <option value="MEDIÇÃO REMOTA">MEDIÇÃO REMOTA</option>
        <option value="CONVENCIONAL">CONVENCIONAL</option>
      </select>
    </div>

    <div class="complaint-field">
      <label for="ramal_pontoReferencia">Ponto de referência</label>
      <input id="ramal_pontoReferencia" type="text" placeholder="Digite o ponto de referência" autocomplete="off">
    </div>

    <div class="complaint-field">
      <label for="ramal_contato">Contato</label>
      <input id="ramal_contato" type="text" placeholder="Digite o contato" autocomplete="off">
    </div>

    <div class="complaint-field full">
      <label for="ramal_motivo">Motivo do serviço</label>
      <textarea id="ramal_motivo" rows="4" placeholder="Digite o motivo do serviço"></textarea>
    </div>
  `;

  copyButton.disabled = false;

  document
    .querySelectorAll("#ramal_nomeCliente, #ramal_tipoMedicao, #ramal_pontoReferencia, #ramal_contato, #ramal_motivo")
    .forEach(campo => {
      campo.addEventListener("input", gerarScriptDeslocamentoRamal);
      campo.addEventListener("change", gerarScriptDeslocamentoRamal);
    });

  gerarScriptDeslocamentoRamal();
}

// ================= GERAR SCRIPT - DESLOCAMENTO DE RAMAL =================
function gerarScriptDeslocamentoRamal() {
  const nomeClienteInput = document.getElementById("ramal_nomeCliente");
  const tipoMedicaoInput = document.getElementById("ramal_tipoMedicao");
  const pontoReferenciaInput = document.getElementById("ramal_pontoReferencia");
  const contatoInput = document.getElementById("ramal_contato");
  const motivoInput = document.getElementById("ramal_motivo");

  const nomeCliente = nomeClienteInput?.value.trim().toUpperCase() || "";
  const tipoMedicao = tipoMedicaoInput?.value.trim().toUpperCase() || "";
  const pontoReferencia = pontoReferenciaInput?.value.trim().toUpperCase() || "";
  const contato = contatoInput?.value.trim().toUpperCase() || "";
  const motivo = motivoInput?.value.trim().toUpperCase() || "";

  const camposPreenchidos =
    nomeCliente &&
    tipoMedicao &&
    pontoReferencia &&
    contato &&
    motivo;

  const texto = `CLIENTE ${nomeCliente || "XXX"} VEIO AO ATENDIMENTO COM RG E CPF SOLICITAR O DESLOCAMENTO DE SEU RAMAL, POIS ${motivo || "COLOCAR O MOTIVO"}. AFIRMA QUE PONTALETE PADRÃO ESTÁ DEVIDAMENTE MONTADO NO LOCAL CORRETO E ESTÁ CIENTE DO PRAZO DE ATENDIMENTO DO SERVIÇO DE 30 DIAS.

TIPO DE MEDIÇÃO INSTALADA: ${tipoMedicao || "XXX"}
PONTO DE REFERÊNCIA: ${pontoReferencia || "XXX"}
CONTATO: ${contato || "XXX"}`;

  selectedText.textContent = texto;

  // 🔴 CONTROLE DO BOTÃO COPIAR
  atualizarCamposObrigatoriosScript([
  "ramal_nomeCliente",
  "ramal_tipoMedicao",
  "ramal_pontoReferencia",
  "ramal_contato",
  "ramal_motivo"
]);

if (camposPreenchidos) {
  copyButton.disabled = false;

  scriptSelecionado = {
    titulo: "DESLOCAMENTO DE RAMAL",
    texto: texto
  };
} else {
  copyButton.disabled = true;
  scriptSelecionado = null;
}
}

// ================= SCRIPT DINÂMICO - NIVEL DE TENSAO =================
function abrirFormularioNivelTensao() {
  scriptSelecionado = {
    titulo: "NIVEL DE TENSAO",
    texto: ""
  };

  scriptsWorkArea.classList.remove("hidden");
  scriptsWorkArea.classList.remove("simple-mode");

  scriptDynamicFormCard.classList.remove("hidden");
  scriptResultCard.classList.remove("hidden");

  scriptDynamicBadge.textContent = "Nível de Tensão";
  selectedTitle.textContent = "Script gerado";

  scriptDynamicFields.innerHTML = `
    <div class="dynamic-script-alert complaint-field full">
      <strong>Prezado colaborador,</strong>
      <p>Em caso de dúvidas, orientamos que as informações sejam consultadas na ferramenta Aprende+ da Equatorial Energia.</p>
    </div>

    <div class="complaint-field">
      <label for="tensao_nomeCliente">Nome do cliente</label>
      <input id="tensao_nomeCliente" type="text" placeholder="Digite o nome do cliente" autocomplete="off">
    </div>

    <div class="complaint-field">
      <label for="tensao_tempoProblema">Quanto tempo está ocorrendo o problema de fornecimento?</label>
      <input id="tensao_tempoProblema" type="text" placeholder="Ex: 2 SEMANAS, 1 MÊS, 3 DIAS" autocomplete="off">
    </div>

    <div class="complaint-field">
      <label for="tensao_ocorreSempre">Ocorre sempre?</label>
      <select id="tensao_ocorreSempre">
        <option value="">Selecione...</option>
        <option value="TODOS OS DIAS">TODOS OS DIAS</option>
        <option value="FIM DE SEMANA">FIM DE SEMANA</option>
        <option value="ALGUNS DIAS DA SEMANA">ALGUNS DIAS DA SEMANA</option>
      </select>
    </div>

    <div id="tensaoDiasSemanaArea" class="complaint-field hidden">
      <label for="tensao_diasSemana">Informar o dia da semana específico</label>
      <input id="tensao_diasSemana" type="text" placeholder="Ex: SEGUNDA, QUARTA E SEXTA" autocomplete="off">
    </div>

    <div class="complaint-field">
      <label for="tensao_periodo">O problema acontece no período</label>
      <select id="tensao_periodo">
        <option value="">Selecione...</option>
        <option value="MANHÃ">MANHÃ</option>
        <option value="TARDE">TARDE</option>
        <option value="NOITE">NOITE</option>
        <option value="TODO O PERÍODO DO DIA">TODO O PERÍODO DO DIA</option>
      </select>
    </div>

    <div class="complaint-field">
      <label for="tensao_comodos">Acontece em todos os cômodos ou apenas em alguns?</label>
      <select id="tensao_comodos">
        <option value="">Selecione...</option>
        <option value="EM TODOS OS CÔMODOS">EM TODOS OS CÔMODOS</option>
        <option value="APENAS EM ALGUNS CÔMODOS">APENAS EM ALGUNS CÔMODOS</option>
      </select>
    </div>

    <div class="complaint-field">
      <label for="tensao_eletrodomestico">O cliente adquiriu algum eletrodoméstico ou equipamento elétrico recentemente?</label>
      <select id="tensao_eletrodomestico">
        <option value="">Selecione...</option>
        <option value="SIM">SIM</option>
        <option value="NÃO">NÃO</option>
      </select>
    </div>

    <div class="complaint-field">
      <label for="tensao_comercio">O cliente tem conhecimento de comércio, oficina ou indústria próximo à residência?</label>
      <select id="tensao_comercio">
        <option value="">Selecione...</option>
        <option value="NÃO">NÃO</option>
        <option value="SIM">SIM</option>
      </select>
    </div>

    <div id="tensaoQualComercioArea" class="complaint-field hidden">
      <label for="tensao_qualComercio">Qual?</label>
      <input id="tensao_qualComercio" type="text" placeholder="Informe qual comércio, oficina ou indústria" autocomplete="off">
    </div>

    <div class="complaint-field">
      <label for="tensao_meioComunicacao">Meio de comunicação</label>
      <input id="tensao_meioComunicacao" type="text" placeholder="Ex: TELEFONE, WHATSAPP, E-MAIL" autocomplete="off">
    </div>

    <div class="complaint-field">
      <label for="tensao_pontoReferencia">Ponto de referência</label>
      <input id="tensao_pontoReferencia" type="text" placeholder="Digite o ponto de referência" autocomplete="off">
    </div>

    <div class="complaint-field">
      <label for="tensao_contato">Contato</label>
      <input id="tensao_contato" type="text" placeholder="Digite o contato" autocomplete="off">
    </div>
  `;

  const ocorreSempre = document.getElementById("tensao_ocorreSempre");
  const comercio = document.getElementById("tensao_comercio");

  ocorreSempre.addEventListener("change", () => {
    const area = document.getElementById("tensaoDiasSemanaArea");
    area.classList.toggle("hidden", ocorreSempre.value !== "ALGUNS DIAS DA SEMANA");
    gerarScriptNivelTensao();
  });

  comercio.addEventListener("change", () => {
    const area = document.getElementById("tensaoQualComercioArea");
    area.classList.toggle("hidden", comercio.value !== "SIM");
    gerarScriptNivelTensao();
  });

  document
    .querySelectorAll("#scriptDynamicFields input, #scriptDynamicFields select")
    .forEach(campo => {
      campo.addEventListener("input", gerarScriptNivelTensao);
      campo.addEventListener("change", gerarScriptNivelTensao);
    });

  gerarScriptNivelTensao();
}

// ================= GERAR SCRIPT - NIVEL DE TENSAO =================
function gerarScriptNivelTensao() {
  const nomeCliente = document.getElementById("tensao_nomeCliente")?.value.trim().toUpperCase() || "";
  const tempoProblema = document.getElementById("tensao_tempoProblema")?.value.trim().toUpperCase() || "";
  const ocorreSempre = document.getElementById("tensao_ocorreSempre")?.value.trim().toUpperCase() || "";
  const diasSemana = document.getElementById("tensao_diasSemana")?.value.trim().toUpperCase() || "";
  const periodo = document.getElementById("tensao_periodo")?.value.trim().toUpperCase() || "";
  const comodos = document.getElementById("tensao_comodos")?.value.trim().toUpperCase() || "";
  const eletrodomestico = document.getElementById("tensao_eletrodomestico")?.value.trim().toUpperCase() || "";
  const comercio = document.getElementById("tensao_comercio")?.value.trim().toUpperCase() || "";
  const qualComercio = document.getElementById("tensao_qualComercio")?.value.trim().toUpperCase() || "";
  const meioComunicacao = document.getElementById("tensao_meioComunicacao")?.value.trim().toUpperCase() || "";
  const pontoReferencia = document.getElementById("tensao_pontoReferencia")?.value.trim().toUpperCase() || "";
  const contato = document.getElementById("tensao_contato")?.value.trim().toUpperCase() || "";

  const precisaDiaSemana = ocorreSempre === "ALGUNS DIAS DA SEMANA";
  const precisaQualComercio = comercio === "SIM";

  const camposPreenchidos =
    nomeCliente &&
    tempoProblema &&
    ocorreSempre &&
    (!precisaDiaSemana || diasSemana) &&
    periodo &&
    comodos &&
    eletrodomestico &&
    comercio &&
    (!precisaQualComercio || qualComercio) &&
    meioComunicacao &&
    pontoReferencia &&
    contato;

  const texto = `PARCEIRO ${nomeCliente || "XXX"}, RECLAMA QUE ESTÁ OCORRENDO OSCILAÇÃO CONSTANTE NA INSTALAÇÃO HÁ MAIS ${tempoProblema || "XXX"}.

INFORMA QUE OCORRE SEMPRE: ${ocorreSempre || "XXX"}
${precisaDiaSemana ? `QUAIS? ${diasSemana || "XXX"}\n` : ""}
O PROBLEMA ACONTECE NO PERÍODO: ${periodo || "XXX"}

ACONTECE EM TODOS OS CÔMODOS DA INSTALAÇÃO OU APENAS EM ALGUNS CÔMODOS? ${comodos || "XXX"}

O CLIENTE ADQUIRIU ALGUM ELETRODOMÉSTICO OU EQUIPAMENTO ELÉTRICO RECENTEMENTE? ${eletrodomestico || "XXX"}

O CLIENTE TEM CONHECIMENTO DE ALGUM COMÉRCIO, OFICINA OU INDÚSTRIA PRÓX. A SUA RESIDÊNCIA? ${comercio || "XXX"}${precisaQualComercio ? ` - QUAL: ${qualComercio || "XXX"}` : ""}

MEIO DE COMUNICAÇÃO: ${meioComunicacao || "XXX"}
PONTO DE REFERÊNCIA: ${pontoReferencia || "XXX"}
CONTATO: ${contato || "XXX"}`;

  selectedText.textContent = texto;

const camposObrigatoriosNivelTensao = [
  "tensao_nomeCliente",
  "tensao_tempoProblema",
  "tensao_ocorreSempre",
  "tensao_periodo",
  "tensao_comodos",
  "tensao_eletrodomestico",
  "tensao_comercio",
  "tensao_meioComunicacao",
  "tensao_pontoReferencia",
  "tensao_contato"
];

if (precisaDiaSemana) {
  camposObrigatoriosNivelTensao.push("tensao_diasSemana");
}

if (precisaQualComercio) {
  camposObrigatoriosNivelTensao.push("tensao_qualComercio");
}

atualizarCamposObrigatoriosScript(camposObrigatoriosNivelTensao);

  if (camposPreenchidos) {
    copyButton.disabled = false;

    scriptSelecionado = {
      titulo: "NIVEL DE TENSAO",
      texto: texto
    };
  } else {
    copyButton.disabled = true;
    scriptSelecionado = null;
  }
}

// ================= SCRIPT DINÂMICO - DEVOLUÇÃO DE CRÉDITO =================
function abrirFormularioDevolucaoCredito() {

  scriptSelecionado = {
    titulo: "DEVOLUÇÃO DE CRÉDITO EM ESPECIE",
    texto: ""
  };

  scriptsWorkArea.classList.remove("hidden");
  scriptsWorkArea.classList.remove("simple-mode");

  scriptDynamicFormCard.classList.remove("hidden");
  scriptResultCard.classList.remove("hidden");

  scriptDynamicBadge.textContent = "Devolução de Crédito em Espécie";
  selectedTitle.textContent = "Script gerado";

  scriptDynamicFields.innerHTML = `

    <div class="dynamic-script-alert complaint-field full">
  <strong>Prezado colaborador (a),</strong>

  <p>
    Em caso de dúvidas, orientamos que as informações sejam consultadas na ferramenta Aprende+ da Equatorial Energia.
  </p>

  <p>
    ⚠️ Não esquecer de realizar o bloqueio do crédito depois de abrir a nota. Dúvidas como bloquear chamem a liderança.
  </p>

  <p>
    📋 Não esquecer de lançar a nota do serviço no link de acompanhamento do Controle de Qualidade.
  </p>
</div>

    <div class="complaint-field">
      <label>Valor do crédito</label>
      <input id="credito_valor" type="text">
    </div>

    <div class="complaint-field">
      <label>Origem do crédito</label>
      <select id="credito_origem">
        <option value="">Selecione...</option>
        <option>PAGAMENTO EM DUPLICIDADE</option>
        <option>FATURAMENTO INCORRETO</option>
        <option>ESTORNO/CANCELAMENTO DE FATURA</option>
        <option>SERVIÇOS COBRADO E NÃO EXECUTADOS</option>
        <option>COMPENSAÇÃO DE INDICADORES</option>
      </select>
    </div>

    <div class="complaint-field">
      <label>Conta contrato</label>
      <input id="credito_cc" type="text">
    </div>

    <div class="complaint-field">
      <label>Instalação</label>
      <input id="credito_instalacao" type="text">
    </div>

    <div class="complaint-field">
      <label>Número do Parceiro</label>
      <input id="credito_parceiro" type="text">
    </div>

    <div class="complaint-field">
      <label>Situação IN</label>
      <select id="credito_situacao">
        <option value="">Selecione...</option>
        <option>LIGADO</option>
        <option>CORTADO</option>
        <option>DESLIGADO</option>
      </select>
    </div>

    <div class="complaint-field full">
      <label>Titular</label>
      <input id="credito_titular" type="text">
    </div>

    <div class="complaint-field full">
      <label>Endereço</label>
      <input id="credito_endereco" type="text">
    </div>

    <div class="complaint-field">
      <label>CPF</label>
      <input id="credito_cpf" type="text">
    </div>

    <div class="complaint-field">
      <label>RG</label>
      <input id="credito_rg" type="text">
    </div>

    <div class="complaint-field">
      <label>Data de nascimento</label>
      <input id="credito_nascimento" type="text" maxlength="10">
    </div>

    <div class="complaint-field">
      <label>Telefone</label>
      <input id="credito_telefone" type="text" maxlength="15">
    </div>

    <div class="complaint-field">
      <label>Service Request</label>
      <input id="credito_sr" type="text">
    </div>

<div class="complaint-field">
  <label>Cidade</label>

  <select id="credito_cidade">
    <option value="">Selecione...</option>

    <option>Santarém - PA</option>
    <option>Monte Alegre - PA</option>
    <option>Óbidos - PA</option>
    <option>Oriximiná - PA</option>
    <option>Juruti - PA</option>
    <option>Alenquer - PA</option>
    <option>Novo Progresso - PA</option>
    <option>Rurópolis - PA</option>
    <option>Itaituba - PA</option>
  </select>
</div>

    <div class="complaint-field full">
      <label>Autoriza conta de terceiros?</label>
      <select id="credito_terceiros">
        <option value="">Selecione...</option>
        <option>SIM</option>
        <option>NÃO</option>
      </select>
    </div>

    <div id="areaRepresentante" class="hidden">

      <div class="complaint-field full">
        <label>Responsável legal</label>
        <input id="credito_responsavel" type="text">
      </div>

      <div class="complaint-field full">
        <label>Endereço representante</label>
        <input id="credito_endereco_representante" type="text">
      </div>

      <div class="complaint-field">
        <label>CPF representante</label>
        <input id="credito_cpf_representante" type="text">
      </div>

      <div class="complaint-field">
        <label>RG representante</label>
        <input id="credito_rg_representante" type="text">
      </div>

      <div class="complaint-field">
        <label>Data nascimento representante</label>
        <input id="credito_nascimento_representante" type="text" maxlength="10">
      </div>

      <div class="complaint-field">
        <label>Telefone representante</label>
        <input id="credito_tel_representante" type="text" maxlength="15">
      </div>

      <div class="complaint-field">
        <label>Vínculo</label>
        <input id="credito_vinculo" type="text">
      </div>

      <div class="complaint-field">
        <label>Tipo documento apresentado</label>
        <input id="credito_documento" type="text">
      </div>

    </div>

    <div class="complaint-field">
      <label>Referência</label>
      <input id="credito_referencia" type="text">
    </div>

    <div class="complaint-field">
      <label>Conta bancária ou ordem de pagamento?</label>
      <select id="credito_tipo_pagamento">
        <option value="">Selecione...</option>
        <option>CONTA BANCÁRIA</option>
        <option>ORDEM DE PAGAMENTO</option>
      </select>
    </div>

    <div id="areaBanco" class="hidden">

      <div class="complaint-field">
        <label>Banco</label>
        <input id="credito_banco" type="text">
      </div>

      <div class="complaint-field">
        <label>Conta</label>
<input id="credito_conta" type="text" placeholder="Ex: 949">

<label>Dígito da conta</label>
<input id="credito_digito_conta" type="text" maxlength="1" placeholder="Ex: 0">
      </div>

      <div class="complaint-field">
        <label>Agência</label>
<input id="credito_agencia" type="text" placeholder="Ex: 36411">

<label>Dígito da agência</label>
<input id="credito_digito_agencia" type="text" maxlength="1" placeholder="Ex: 8">
      </div>

      <div class="complaint-field">
        <label>Tipo de conta</label>
        <select id="credito_tipo_conta">
          <option value="">Selecione...</option>
          <option>POUPANÇA</option>
          <option>CORRENTE</option>
        </select>
      </div>

    </div>

    <div class="complaint-field full">
      <button id="baixarFormularioCredito" class="copy-script-button">
        <i class="fa-solid fa-file-excel"></i>
        Baixar formulário preenchido
      </button>
    </div>
  `;

  document
    .querySelectorAll("#scriptDynamicFields input, #scriptDynamicFields select")
    .forEach(campo => {
      campo.addEventListener("input", gerarScriptDevolucaoCredito);
      campo.addEventListener("change", gerarScriptDevolucaoCredito);
    });

  document
    .getElementById("credito_terceiros")
    .addEventListener("change", function () {

      document
        .getElementById("areaRepresentante")
        .classList.toggle("hidden", this.value !== "SIM");

      gerarScriptDevolucaoCredito();
    });

  document
    .getElementById("credito_tipo_pagamento")
    .addEventListener("change", function () {

      document
        .getElementById("areaBanco")
        .classList.toggle(
          "hidden",
          this.value !== "CONTA BANCÁRIA"
        );

      gerarScriptDevolucaoCredito();
    });

  document
  .getElementById("baixarFormularioCredito")
  .addEventListener("click", baixarFormularioCredito);

aplicarMascaraData(
  document.getElementById("credito_nascimento")
);

aplicarMascaraData(
  document.getElementById("credito_nascimento_representante")
);

aplicarMascaraTelefone(
  document.getElementById("credito_telefone")
);

aplicarMascaraTelefone(
  document.getElementById("credito_tel_representante")
);

gerarScriptDevolucaoCredito();
}

// ================= GERAR SCRIPT =================
function gerarScriptDevolucaoCredito() {

  const valor =
    document.getElementById("credito_valor")?.value || "";

  const origem =
    document.getElementById("credito_origem")?.value || "";

  const texto = `PARCEIRO SOLICITA A DEVOLUÇÃO DE CRÉDITO DE VALOR DE R$ ${valor}

ONDE O MESMO DESEJA QUE SEJA DEVOLVIDO EM SUA CONTA BANCÁRIA.

SEGUE DOCUMENTAÇÃO EM ANEXO

ORIGEM DO CRÉDITO: ${origem}

PARCEIRO CIENTE DO PRAZO DE ATENDIMENTO DA SOLICITAÇÃO DE 30 DIAS.`;

  selectedText.textContent = texto;

  atualizarCamposObrigatoriosScript([
    "credito_valor",
    "credito_origem"
  ]);

  if (valor && origem) {

    copyButton.disabled = false;

    scriptSelecionado = {
      titulo: "DEVOLUÇÃO DE CRÉDITO EM ESPECIE",
      texto: texto
    };

  } else {

    copyButton.disabled = true;
    scriptSelecionado = null;
  }
}

// ================= BAIXAR EXCEL =================
async function baixarFormularioCredito() {

  const response = await fetch("formularios/devolucao_credito.xlsx");

  const arrayBuffer = await response.arrayBuffer();

  const workbook = new ExcelJS.Workbook();

  await workbook.xlsx.load(arrayBuffer);

  const sheet = workbook.getWorksheet("FORM_I");

  function valor(id) {
    return document.getElementById(id)?.value || "";
  }

  // ================= DADOS TITULAR =================
  sheet.getCell("F11").value = valor("credito_cc");
  sheet.getCell("M11").value = valor("credito_instalacao");
  sheet.getCell("Y11").value = valor("credito_parceiro");
  sheet.getCell("AD11").value = valor("credito_situacao");

  sheet.getCell("F13").value = valor("credito_titular");
  sheet.getCell("F15").value = valor("credito_endereco");

  sheet.getCell("F17").value = valor("credito_cpf");
  sheet.getCell("L17").value = valor("credito_rg");
  sheet.getCell("R17").value = valor("credito_nascimento");
  sheet.getCell("AA17").value = valor("credito_telefone");

  sheet.getCell("AC73").value = valor("credito_sr");
  sheet.getCell("H71").value = valor("credito_cidade");

  // ================= TERCEIROS =================
  const terceiros = valor("credito_terceiros");

  if (terceiros === "SIM") {
    sheet.getCell("F25").value = "X";
  }

  if (terceiros === "NÃO") {
    sheet.getCell("D25").value = "X";
  }

  // ================= REPRESENTANTE =================
  sheet.getCell("F27").value = valor("credito_responsavel");
  sheet.getCell("F29").value = valor("credito_endereco_representante");

  sheet.getCell("F31").value = valor("credito_cpf_representante");
  sheet.getCell("L31").value = valor("credito_rg_representante");
  sheet.getCell("R31").value = valor("credito_nascimento_representante");
  sheet.getCell("AA31").value = valor("credito_tel_representante");

  sheet.getCell("F33").value = valor("credito_vinculo");
  sheet.getCell("Q33").value = valor("credito_documento");

  // ================= VALORES =================
  sheet.getCell("N39").value = valor("credito_valor");
  sheet.getCell("W39").value = valor("credito_referencia");

  // ================= PAGAMENTO =================
  const tipoPagamento = valor("credito_tipo_pagamento");

  if (tipoPagamento === "CONTA BANCÁRIA") {
    sheet.getCell("D49").value = "X";
  }

  if (tipoPagamento === "ORDEM DE PAGAMENTO") {
    sheet.getCell("X49").value = "X";
  }

  // ================= DADOS BANCÁRIOS =================
  sheet.getCell("F51").value = valor("credito_banco");
  sheet.getCell("N51").value = valor("credito_conta");
sheet.getCell("T51").value = valor("credito_digito_conta");

sheet.getCell("F55").value = valor("credito_agencia");
sheet.getCell("K55").value = valor("credito_digito_agencia");

  const tipoConta = valor("credito_tipo_conta");

  if (tipoConta === "POUPANÇA") {
    sheet.getCell("N55").value = "X";
  }

  if (tipoConta === "CORRENTE") {
    sheet.getCell("R55").value = "X";
  }

  // ================= DOWNLOAD =================
  const buffer = await workbook.xlsx.writeBuffer();

  const blob = new Blob(
    [buffer],
    {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    }
  );

  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);

  link.download =
    `DEVOLUCAO_CREDITO_${valor("credito_parceiro") || "CLIENTE"}.xlsx`;

  link.click();
}

// ================= MÁSCARA DATA =================
function aplicarMascaraData(input) {
  if (!input) return;

  input.addEventListener("input", () => {
    let valor = input.value.replace(/\D/g, "");

    if (valor.length > 8) {
      valor = valor.slice(0, 8);
    }

    if (valor.length >= 5) {
      valor = valor.slice(0, 2) + "/" + valor.slice(2, 4) + "/" + valor.slice(4);
    } else if (valor.length >= 3) {
      valor = valor.slice(0, 2) + "/" + valor.slice(2);
    }

    input.value = valor;
  });
}

// ================= MÁSCARA TELEFONE =================
function aplicarMascaraTelefone(input) {
  if (!input) return;

  input.addEventListener("input", () => {

    let valor = input.value.replace(/\D/g, "");

    if (valor.length > 11) {
      valor = valor.slice(0, 11);
    }

    if (valor.length > 6) {
      valor =
        "(" + valor.slice(0, 2) + ") " +
        valor.slice(2, 7) + "-" +
        valor.slice(7);
    } else if (valor.length > 2) {
      valor =
        "(" + valor.slice(0, 2) + ") " +
        valor.slice(2);
    }

    input.value = valor;
  });
}

// ================= CAMPOS OBRIGATÓRIOS - SCRIPTS DINÂMICOS =================
function atualizarCamposObrigatoriosScript(idsCampos) {
  let temCampoVazio = false;

  idsCampos.forEach(id => {
    const campo = document.getElementById(id);
    if (!campo) return;

    const vazio = !campo.value.trim();

    campo.classList.toggle("campo-obrigatorio-erro", vazio);
    campo.classList.toggle("campo-obrigatorio-ok", !vazio);

    if (vazio) {
      temCampoVazio = true;
    }
  });

  let aviso = document.getElementById("scriptRequiredMessage");

  if (temCampoVazio) {
    if (!aviso) {
      aviso = document.createElement("div");
      aviso.id = "scriptRequiredMessage";
      aviso.className = "script-required-message";
      aviso.textContent = "Preencha todos os campos obrigatórios para copiar o registro.";
      scriptDynamicFormCard.appendChild(aviso);
    }
  } else if (aviso) {
    aviso.remove();
  }
}

// ================= LIMPAR SCRIPT DINÂMICO =================
if (clearDynamicScriptButton) {
  clearDynamicScriptButton.addEventListener("click", () => {
    document
      .querySelectorAll("#scriptDynamicFields input, #scriptDynamicFields select, #scriptDynamicFields textarea")
      .forEach(campo => {
        campo.value = "";
      });

    if (scriptDynamicBadge.textContent === "Nível de Tensão") {
  document.getElementById("tensaoDiasSemanaArea")?.classList.add("hidden");
  document.getElementById("tensaoQualComercioArea")?.classList.add("hidden");
  gerarScriptNivelTensao();
} else if (scriptDynamicBadge.textContent === "Devolução de Crédito em Espécie") {
  document.getElementById("areaRepresentante")?.classList.add("hidden");
  document.getElementById("areaBanco")?.classList.add("hidden");
  gerarScriptDevolucaoCredito();
} else {
  gerarScriptDeslocamentoRamal();
}
  });
}

// ================= ATIVAR BUSCA E CÓPIA DOS SCRIPTS =================
if (searchInput && scriptsList && selectedTitle && selectedText && copyButton && copyFeedback) {
  scriptsList.classList.add("scripts-list-hidden");
  scriptsInitialMessage.classList.remove("hidden");

  searchInput.addEventListener("focus", () => {
    renderScripts(searchInput.value);
  });

  searchInput.addEventListener("input", () => {
    renderScripts(searchInput.value);

    scriptsWorkArea.classList.add("hidden");
    scriptsWorkArea.classList.remove("simple-mode");

    scriptDynamicFormCard.classList.add("hidden");
    scriptResultCard.classList.add("hidden");

    selectedTitle.textContent = "Script";
    selectedText.textContent = "Selecione um script para visualizar o conteúdo.";

    copyButton.disabled = true;
    copyButton.innerHTML = `<i class="fa-regular fa-copy"></i> Copiar`;
    copyButton.classList.remove("copied");
    copyFeedback.textContent = "";

    scriptSelecionado = null;
  });

  clearScriptSearchButton.addEventListener("click", () => {
    searchInput.value = "";

scriptsList.classList.add("scripts-list-hidden");
scriptsInitialMessage.classList.remove("hidden");

    scriptsWorkArea.classList.add("hidden");
    scriptsWorkArea.classList.remove("simple-mode");

    scriptDynamicFormCard.classList.add("hidden");
    scriptResultCard.classList.add("hidden");

    selectedTitle.textContent = "Script";
    selectedText.textContent = "Selecione um script para visualizar o conteúdo.";

    copyButton.disabled = true;
    copyButton.innerHTML = `<i class="fa-regular fa-copy"></i> Copiar`;
    copyButton.classList.remove("copied");
    copyFeedback.textContent = "";

    scriptSelecionado = null;
  });

  copyButton.addEventListener("click", async () => {
    if (!scriptSelecionado || !scriptSelecionado.texto) return;

    await navigator.clipboard.writeText(scriptSelecionado.texto);

    copyButton.classList.add("copied");
    copyButton.innerHTML = `<i class="fa-solid fa-check"></i> Copiado!`;
    copyFeedback.textContent = "Texto copiado com sucesso!";

    setTimeout(() => {
      copyButton.classList.remove("copied");
      copyButton.innerHTML = `<i class="fa-regular fa-copy"></i> Copiar`;
      copyFeedback.textContent = "";
    }, 2000);
  });
}

// ================= REGISTROS DE RECLAMAÇÃO =================

const complaintType = document.getElementById("complaintType");
const complaintDynamicFields = document.getElementById("complaintDynamicFields");
const complaintResultText = document.getElementById("complaintResultText");
const copyComplaintButton = document.getElementById("copyComplaintButton");
const copyComplaintFeedback = document.getElementById("copyComplaintFeedback");

const complaintFields = {
  cnr: [
    ["valorFatura", "Valor da fatura", "text"],
    ["descricao", "Descrição da reclamação", "textarea"],
    ["solucao", "Solução pretendida", "textarea"],
    ["analise", "Análise do atendente", "textarea"],
    ["meioResposta", "Meio de resposta da reclamação", "select", ["TELEFONE", "CARTA", "E-MAIL"]],
    ["whatsapp", "Aceita receber resposta / fatura via WhatsApp?", "select", ["SIM", "NÃO"]],
    ["telefone", "Telefone para contato", "text"],
    ["horario", "Melhor horário para contato", "select", ["MANHÃ", "TARDE"]],
    ["email", "E-mail", "text"],
    ["autoriza", "Autoriza terceiros?", "select", ["SIM", "NÃO"]],
    ["complementares", "Informações complementares", "textarea"]
  ],

  periodica: [
    ["faturaReclamada", "Fatura reclamada", "text"],
    ["valorFatura", "Valor da fatura", "text"],
    ["descricao", "Descrição da reclamação", "textarea"],
    ["solucao", "Solução pretendida", "textarea"],
    ["analise", "Análise do atendente", "textarea"],
    ["meioResposta", "Meio de resposta da reclamação", "select", ["TELEFONE", "CARTA", "E-MAIL"]],
    ["whatsapp", "Aceita receber resposta / fatura via WhatsApp?", "select", ["SIM", "NÃO"]],
    ["telefone", "Telefone para contato", "text"],
    ["horario", "Melhor horário para contato", "select", ["MANHÃ", "TARDE"]],
    ["email", "E-mail", "text"],
    ["autoriza", "Autoriza terceiros?", "select", ["SIM", "NÃO"]],
    ["complementares", "Informações complementares", "textarea"]
  ],

  mla: [
    ["faturaReclamada", "Fatura reclamada", "text"],
    ["valorFatura", "Valor da fatura", "text"],
    ["meioResposta", "Meio de resposta da reclamação", "select", ["TELEFONE", "CARTA", "E-MAIL"]],
    ["whatsapp", "Aceita receber resposta / fatura via WhatsApp?", "select", ["SIM", "NÃO"]],
    ["telefone", "Telefone para contato", "text"],
    ["horario", "Melhor horário para contato", "select", ["MANHÃ", "TARDE"]],
    ["email", "E-mail", "text"],
    ["autoriza", "Autoriza terceiros?", "select", ["SIM", "NÃO"]],
    ["complementares", "Informações complementares", "textarea"]
  ],

  pagaNaoBaixada: [
    ["faturaReclamada", "Fatura reclamada", "text"],
    ["valorFatura", "Valor da fatura", "text"],
    ["dataPagamento", "Data do pagamento", "text"],
    ["modalidade", "Modalidade de pagamento", "select", ["PIX", "DÉBITO", "CRÉDITO", "CÓDIGO DE BARRAS"]],
    ["localPagamento", "Local do pagamento", "text"],
    ["meioResposta", "Meio de resposta da reclamação", "select", ["TELEFONE", "CARTA", "E-MAIL"]],
    ["whatsapp", "Aceita receber resposta / fatura via WhatsApp?", "select", ["SIM", "NÃO"]],
    ["telefone", "Telefone para contato", "text"],
    ["horario", "Melhor horário para contato", "select", ["MANHÃ", "TARDE"]],
    ["email", "E-mail", "text"],
    ["autoriza", "Autoriza terceiros?", "select", ["SIM", "NÃO"]]
  ],

  leituraInicial: [
    ["faturaReclamada", "Fatura reclamada", "text"],
    ["valorFatura", "Valor da fatura", "text"],
    ["tipoServico", "Reativação ou fiscalização", "select", ["REATIVAÇÃO", "FISCALIZAÇÃO"]],
    ["numeroNota", "Número da nota", "text"],
    ["dataLigacao", "Data da ligação", "text"],
    ["leituraLigacao", "Leitura no dia da ligação", "text"],
    ["leituraAnterior", "Leitura anterior da fatura reclamada", "text"],
    ["meioResposta", "Meio de resposta da reclamação", "select", ["TELEFONE", "CARTA", "E-MAIL"]],
    ["whatsapp", "Aceita receber resposta / fatura via WhatsApp?", "select", ["SIM", "NÃO"]],
    ["telefone", "Telefone para contato", "text"],
    ["horario", "Melhor horário para contato", "select", ["MANHÃ", "TARDE"]],
    ["email", "E-mail", "text"],
    ["autoriza", "Autoriza terceiros?", "select", ["SIM", "NÃO"]]
  ],

  geradora: [
  ["faturaReclamada", "Fatura reclamada", "text"],
  ["valorFatura", "Valor da fatura", "text"],
  ["meioResposta", "Meio de resposta da reclamação", "select", ["TELEFONE", "CARTA", "E-MAIL"]],
  ["whatsapp", "Aceita receber resposta / fatura via WhatsApp?", "select", ["SIM", "NÃO"]],
  ["telefone", "Telefone para contato", "text"],
  ["horario", "Melhor horário para contato", "select", ["MANHÃ", "TARDE"]],
  ["email", "E-mail", "text"],
  ["autoriza", "Autoriza terceiros?", "select", ["SIM", "NÃO"]],
  ["complementares", "Informações complementares", "textarea"]
],

erroLeituraAtual: [
  ["faturaReclamada", "Fatura reclamada", "text"],
  ["valorFatura", "Valor da fatura", "text"],
  ["dataFoto", "Data da foto apresentada pelo cliente", "text"],
  ["leituraFoto", "Leitura que está na foto apresentada", "text"],
  ["meioResposta", "Meio de resposta da reclamação", "select", ["TELEFONE", "CARTA", "E-MAIL"]],
  ["whatsapp", "Aceita receber resposta / fatura via WhatsApp?", "select", ["SIM", "NÃO"]],
  ["telefone", "Telefone para contato", "text"],
  ["horario", "Melhor horário para contato", "select", ["MANHÃ", "TARDE"]],
  ["email", "E-mail", "text"],
  ["autoriza", "Autoriza terceiros?", "select", ["SIM", "NÃO"]],
  ["complementares", "Informações complementares", "textarea"]
],

  prazos: [
  ["notaReclamada", "Nota reclamada", "text"],
  ["servico", "Qual o serviço?", "text"],
  ["medida", "Em qual medida se encontra a nota?", "text"],
  ["prazoAtendimento", "Qual era o prazo de atendimento?", "select", ["60 DIAS", "120 DIAS", "365 DIAS"]],
  ["dataConclusao", "Data limite de conclusão", "text"],
  ["artigoAneel", "Número do artigo", "text"],
  ["meioResposta", "Meio de resposta da reclamação", "select", ["TELEFONE", "CARTA", "E-MAIL"]],
  ["whatsapp", "Aceita receber resposta / fatura via WhatsApp?", "select", ["SIM", "NÃO"]],
  ["telefone", "Telefone para contato", "text"],
  ["horario", "Melhor horário para contato", "select", ["MANHÃ", "TARDE"]],
  ["email", "E-mail", "text"],
  ["autoriza", "Autoriza terceiros?", "select", ["SIM", "NÃO"]],
  ["complementares", "Informações complementares", "textarea"]
],
};

function montarCamposReclamacao(tipo) {
  if (!complaintDynamicFields) return;

  if (!tipo) {
    complaintDynamicFields.innerHTML = `
      <div class="complaint-empty-state">
        <i class="fa-regular fa-hand-pointer"></i>
        <strong>Selecione um tipo de reclamação</strong>
        <span>Após selecionar, os campos específicos aparecerão aqui.</span>
      </div>
    `;
    complaintResultText.value = "";
    copyComplaintButton.disabled = true;
    return;
  }

  complaintDynamicFields.innerHTML = "";

// ================= AVISO - FERRAMENTA DE ANÁLISE DE FATURA =================

const tipologiasComAvisoAnaliseFatura = [
  "periodica",
  "mla",
  "leituraInicial",
  "geradora",
  "erroLeituraAtual"
];

if (tipologiasComAvisoAnaliseFatura.includes(tipo)) {
  const avisoAnaliseFatura = document.createElement("div");

  avisoAnaliseFatura.className = "complaint-analysis-warning";

  avisoAnaliseFatura.innerHTML = `
    <div class="complaint-analysis-warning-icon">
      <i class="fa-solid fa-triangle-exclamation"></i>
    </div>

    <div class="complaint-analysis-warning-content">
      <strong>AVISO OPERACIONAL</strong>

      <p>
        Prezado colaborador, após a abertura da reclamação, deverá ser realizada a pesquisa na ferramenta de análise de reclamação, com posterior download no formato “Excel” e anexação na nota de reclamação.
      </p>

      <p>
        O referido procedimento é obrigatório e, na ausência da ferramenta anexada, o colaborador estará sujeito à aplicação de Feedback Corretivo.
      </p>

      <p>
        <b>Obs.:</b> Em caso de indisponibilidade da ferramenta, deverá ser anexado à nota de reclamação o print do incidente sistêmico apresentado no momento da tentativa de acesso.
      </p>

      <a href="http://10.6.1.18/reports/browse/CORP-RELACIONAMENTO%20COM%20O%20CLIENTE/FERRAMENTA%20DE%20ANALISE%20DE%20FATURA" target="_blank" rel="noopener noreferrer">
        Abrir ferramenta de análise
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </div>
  `;

  complaintDynamicFields.appendChild(avisoAnaliseFatura);
}

  complaintFields[tipo].forEach(campo => {
    const [id, label, type, options] = campo;

    const wrapper = document.createElement("div");
    wrapper.className = "complaint-field";

    let inputHtml = "";

    if (type === "textarea") {
      inputHtml = `<textarea id="${id}" data-complaint-field rows="3"></textarea>`;
    } else if (type === "select") {
      inputHtml = `
        <select id="${id}" data-complaint-field>
          <option value="">Selecione...</option>
          ${options.map(op => `<option value="${op}">${op}</option>`).join("")}
        </select>
      `;
    } else {
      inputHtml = `<input id="${id}" data-complaint-field type="text" autocomplete="off" />`;
    }

    wrapper.innerHTML = `
      <label for="${id}">${label}</label>
      ${inputHtml}
    `;

    complaintDynamicFields.appendChild(wrapper);
  });

  document.querySelectorAll("[data-complaint-field]").forEach(input => {
    input.addEventListener("input", gerarTextoReclamacao);
    input.addEventListener("change", gerarTextoReclamacao);
  });

  gerarTextoReclamacao();
}

function valorCampo(id) {
  const campo = document.getElementById(id);
  if (!campo || !campo.value.trim()) return "";
  return campo.value.trim().toUpperCase();
}

function marcarOpcao(valorSelecionado, opcao) {
  return valorSelecionado === opcao ? "X" : " ";
}

function blocoContato() {
  const meio = valorCampo("meioResposta");
  const whatsapp = valorCampo("whatsapp");
  const horario = valorCampo("horario");
  const autoriza = valorCampo("autoriza");
  const telefone = valorCampo("telefone") || "(DDD) XXXXX";
  const email = valorCampo("email") || "NÃO INFORMADO";

  return `MEIO DE RESPOSTA DA RECLAMAÇÃO: TELEFONE (${marcarOpcao(meio, "TELEFONE")}) CARTA (${marcarOpcao(meio, "CARTA")}) E-MAIL (${marcarOpcao(meio, "E-MAIL")})

ACEITA RECEBER RESPOSTA / FATURA VIA WHATSAPP: SIM (${marcarOpcao(whatsapp, "SIM")}) NÃO (${marcarOpcao(whatsapp, "NÃO")})

TELEFONE PARA CONTATO: ${telefone}

MELHOR HORÁRIO PARA CONTATO: MANHÃ (${marcarOpcao(horario, "MANHÃ")}) TARDE (${marcarOpcao(horario, "TARDE")})

E-MAIL: ${email}

AUTORIZA TERCEIROS: SIM (${marcarOpcao(autoriza, "SIM")}) NÃO (${marcarOpcao(autoriza, "NÃO")})`;
}

function cienciaPrazo(dias = "10 DIAS ÚTEIS") {
  return `CLIENTE CIENTE DO PRAZO DE ATÉ ${dias} PARA RESPOSTA. CIENTE QUE A FATURA FICARÁ BLOQUEADA PARA SUSPENSÃO DURANTE O PERÍODO DA RECLAMAÇÃO. CIENTE QUE CASO IMPROCEDENTE SERÁ COBRADO MULTAS, JUROS E CORREÇÃO MONETÁRIA POR ATRASO NO PAGAMENTO, PERMANECENDO INALTERADO O VENCIMENTO. ORIENTADO QUE CASO NÃO CONCORDE COM A RESPOSTA DA EMPRESA PODERÁ INTERPOR RECURSO JUNTO A OUVIDORIA DA DISTRIBUIDORA.`;
}

function gerarTextoReclamacao() {
  const tipo = complaintType.value;

document.querySelectorAll("[data-complaint-field]").forEach(campo => {
  const vazio = !campo.value.trim();

  campo.classList.toggle("campo-obrigatorio-erro", vazio);
  campo.classList.toggle("campo-obrigatorio-ok", !vazio);
});

  if (!tipo) return;

  const insistencia = document.querySelector('input[name="complaintInsistencia"]:checked')?.value;
  const prefixoIC = insistencia === "sim"
    ? `IC - APÓS TODOS OS ESCLARECIMENTOS CLIENTE OPTOU POR DAR SEGUIMENTO A ABERTURA DA RECLAMAÇÃO\n\n`
    : "";

  let texto = "";

  if (tipo === "cnr") {
    texto = `RECLAMAÇÃO FATURA DE CONSUMO NÃO REGISTRADO (CNR) DE VALOR R$ ${valorCampo("valorFatura") || "0,00"}.

DESCRIÇÃO DA RECLAMAÇÃO: ${valorCampo("descricao")}

SOLUÇÃO PRETENDIDA: ${valorCampo("solucao")}

ANÁLISE DO ATENDENTE: ${valorCampo("analise")}

${blocoContato()}

INFORMAÇÕES COMPLEMENTARES: ${valorCampo("complementares")}

${cienciaPrazo("15 DIAS")}`;
  }

  if (tipo === "periodica") {
    texto = `RECLAMAÇÃO DA FATURA DO MÊS ${valorCampo("faturaReclamada")} VALOR R$ ${valorCampo("valorFatura")}

DESCRIÇÃO DA RECLAMAÇÃO: ${valorCampo("descricao")}

SOLUÇÃO PRETENDIDA: ${valorCampo("solucao")}

ANÁLISE DO ATENDENTE: ${valorCampo("analise")}

${blocoContato()}

INFORMAÇÕES COMPLEMENTARES: ${valorCampo("complementares")}

${cienciaPrazo()}`;
  }

  if (tipo === "mla") {
    texto = `RECLAMAÇÃO DA FATURA DO MÊS ${valorCampo("faturaReclamada")} VALOR R$ ${valorCampo("valorFatura")}

DESCRIÇÃO DA RECLAMAÇÃO: CLIENTE RECLAMA DA FATURA DO MÊS ${valorCampo("faturaReclamada")}, ONDE HOUVE COBRANÇA DUPLICADA DA FATURA RECLAMADA DE FORMA INDEVIDA EM SUA INSTALAÇÃO.

SOLUÇÃO PRETENDIDA: CANCELAMENTO DA FATURA DUPLICADA INDEVIDA

ANÁLISE DO ATENDENTE: EM ANÁLISE NO SISTEMA, CLIENTE É ATENDIDO PELO PROJETO PROGRAMA LUZ PARA TODOS REMOTOS, ONDE A COBRANÇA REFERENTE À FATURA ${valorCampo("faturaReclamada")} HOUVE DUPLICIDADE DE COBRANÇA APÓS CADASTRO BAIXA RENDA REALIZADO NA INSTALAÇÃO, SENDO A COBRANÇA GERADA DE FORMA INDEVIDA AO CLIENTE.

${blocoContato()}

INFORMAÇÕES COMPLEMENTARES: ${valorCampo("complementares")}

${cienciaPrazo()}`;
  }

  if (tipo === "pagaNaoBaixada") {
    texto = `RECLAMAÇÃO DA FATURA DO MÊS ${valorCampo("faturaReclamada")} VALOR R$ ${valorCampo("valorFatura")}

DESCRIÇÃO DA RECLAMAÇÃO: CLIENTE INFORMA QUE REALIZOU O PAGAMENTO DA FATURA ${valorCampo("faturaReclamada")} NO VALOR DE R$ ${valorCampo("valorFatura")} NA DATA DO DIA ${valorCampo("dataPagamento")} PELA MODALIDADE DE ${valorCampo("modalidade")}, NO LOCAL ${valorCampo("localPagamento")}, CONFORME COMPROVANTE DE PAGAMENTO EM ANEXO. CONTUDO, ATÉ O PRESENTE MOMENTO O VALOR AINDA NÃO FOI BAIXADO NO SISTEMA.

SOLUÇÃO PRETENDIDA: SOLICITO A BAIXA DO VALOR.

ANÁLISE DO ATENDENTE: EM ANÁLISE, FOI VERIFICADO QUE O COMPROVANTE SE TRATA DE COMPROVANTE DE PAGAMENTO. AS INFORMAÇÕES NO COMPROVANTE ESTÃO CORRETAS, O VALOR NÃO GEROU CRÉDITO E NÃO ENTROU NO SISTEMA CONFORME A TRANSAÇÃO FPL9 EM LISTA DE PAGAMENTOS.

${blocoContato()}

INFORMAÇÕES COMPLEMENTARES: EM ANEXO O COMPROVANTE DE PAGAMENTO, HISTÓRICO DE FATURAS ONDE MOSTRA A FATURA EM ABERTO E LISTA DE PAGAMENTO DA TRANSAÇÃO FPL9.

${cienciaPrazo()}`;
  }

  if (tipo === "leituraInicial") {
    texto = `RECLAMAÇÃO DA FATURA DO MÊS ${valorCampo("faturaReclamada")} VALOR R$ ${valorCampo("valorFatura")}

DESCRIÇÃO DA RECLAMAÇÃO: CLIENTE RECLAMA DA FATURA REFERENTE A ${valorCampo("faturaReclamada")}, INFORMANDO VALOR ELEVADO. RELATA QUE SE TRATA DA PRIMEIRA FATURA APÓS ${valorCampo("tipoServico")} E QUE NÃO ADQUIRIU NOVOS EQUIPAMENTOS QUE JUSTIFIQUEM O CONSUMO. INFORMA AINDA QUE, NO MOMENTO DA LIGAÇÃO, PODE TER SIDO REGISTRADA LEITURA INCORRETA DO MEDIDOR.

SOLUÇÃO PRETENDIDA: SOLICITA REAJUSTE DA FATURA DE ACORDO COM A LEITURA INICIAL NO DIA DA SUA LIGAÇÃO.

ANÁLISE DO ATENDENTE: PROCEDENTE, POIS, DE ACORDO COM A NOTA DE ${valorCampo("tipoServico")} ${valorCampo("numeroNota")}, COM EVIDÊNCIAS DO DIA ${valorCampo("dataLigacao")}, NA QUAL CONSTA LEITURA ${valorCampo("leituraLigacao")}, IDENTIFICA-SE ERRO NA IMPLEMENTAÇÃO DA LEITURA INICIAL, UMA VEZ QUE NA FATURA RECLAMADA ${valorCampo("faturaReclamada")} FOI LANÇADA A LEITURA ${valorCampo("leituraAnterior")}. DIANTE DISSO, FAZ-SE NECESSÁRIO O REAJUSTE DA FATURA.

${blocoContato()}

INFORMAÇÕES COMPLEMENTARES: ERRO NA LEITURA INICIAL. NECESSÁRIO REFORMA DA FATURA.

${cienciaPrazo()}`;
  }

  if (tipo === "geradora") {
    texto = `RECLAMAÇÃO DA FATURA DO MÊS ${valorCampo("faturaReclamada")} VALOR R$ ${valorCampo("valorFatura")}

DESCRIÇÃO DA RECLAMAÇÃO: CLIENTE RELATA QUE SUA UNIDADE COM SISTEMA DE GERAÇÃO PRÓPRIA APRESENTOU REGISTRO DE ENERGIA GERADA NO PERÍODO FATURADO, PORÉM INFORMA QUE NÃO HOUVE A DEVIDA COMPENSAÇÃO DESSE CRÉDITO NO CONSUMO DA UNIDADE CONSUMIDORA ASSOCIADA.

SOLUÇÃO PRETENDIDA: SOLICITA VERIFICAÇÃO QUANTO AO PROCESSAMENTO DA ENERGIA INJETADA NA REDE, BEM COMO A CORRETA APLICAÇÃO DOS CRÉDITOS CONFORME REGRAS DE COMPENSAÇÃO VIGENTES.

ANÁLISE DO ATENDENTE: APÓS ANÁLISE DA FATURA, FOI IDENTIFICADO QUE HÁ REGISTRO DE ENERGIA INJETADA, PORÉM OS CRÉDITOS NÃO FORAM APLICADOS NA COMPENSAÇÃO DO CONSUMO. DESSA FORMA, A RECLAMAÇÃO É PROCEDENTE, SENDO NECESSÁRIA A DEVIDA REGULARIZAÇÃO.

${blocoContato()}

INFORMAÇÕES COMPLEMENTARES: ${valorCampo("complementares")}

${cienciaPrazo()}`;
  }

  if (tipo === "erroLeituraAtual") {
    texto = `RECLAMAÇÃO DA FATURA DO MÊS ${valorCampo("faturaReclamada")} VALOR R$ ${valorCampo("valorFatura")}

DESCRIÇÃO DA RECLAMAÇÃO: CLIENTE RELATA QUE A LEITURA QUE ESTÁ NO SEU EQUIPAMENTO ESTÁ MENOR DO QUE A LEITURA QUE ESTÁ NA SUA FATURA. CLIENTE APRESENTOU FOTO DO MEDIDOR DO DIA ${valorCampo("dataFoto")} E A LEITURA QUE ESTÁ NO EQUIPAMENTO É ${valorCampo("leituraFoto")} (EM ANEXO).

SOLUÇÃO PRETENDIDA: REAJUSTE DA FATURA, DE ACORDO COM A LEITURA APRESENTADA.

ANÁLISE DO ATENDENTE: APÓS ANÁLISE DA FATURA, FOI IDENTIFICADO QUE A LEITURA APRESENTADA PELO CLIENTE ESTÁ DESCRESCENTE EM RELAÇÃO À LEITURA LANÇADA NA FATURA. DESSA FORMA, A RECLAMAÇÃO É PROCEDENTE, SENDO NECESSÁRIA A REFORMA DA FATURA.

${blocoContato()}

INFORMAÇÕES COMPLEMENTARES: ${valorCampo("complementares")}

${cienciaPrazo()}`;
  }

  if (tipo === "prazos") {
  const numeroArtigo = valorCampo("artigoAneel");

const artigo = numeroArtigo
  ? ` CONFORME O ARTIGO ${numeroArtigo} DA RESOLUÇÃO 1000/2021 DA ANEEL, O PRAZO MÁXIMO PARA CONCLUSÃO É DE ${valorCampo("prazoAtendimento")}, CONFIGURANDO DESCUMPRIMENTO DO ATENDIMENTO PELA DISTRIBUIDORA.`
  : "";

  texto = `RECLAMAÇÃO DA NOTA ${valorCampo("notaReclamada")} SERVIÇO DE ${valorCampo("servico")}

DESCRIÇÃO DA RECLAMAÇÃO: CLIENTE RECLAMA DE ATRASO NA EXECUÇÃO DA ${valorCampo("servico")}. CONFORME TERMO DE ACEITE, O PRAZO LIMITE PARA FINALIZAÇÃO ERA ${valorCampo("dataConclusao")}, PORÉM O SERVIÇO AINDA NÃO FOI REALIZADO.

SOLUÇÃO PRETENDIDA: SOLICITA PROVIDÊNCIAS URGENTES E ATUALIZAÇÃO SOBRE O ATENDIMENTO.

ANÁLISE DO ATENDENTE: APÓS ANÁLISE, IDENTIFICOU-SE QUE A NOTA ENCONTRA-SE NA ETAPA DE ${valorCampo("medida")}. O PRAZO DO SISTEMA INDICAVA CONCLUSÃO ATÉ ${valorCampo("dataConclusao")}, O QUE NÃO OCORREU.${artigo}

${blocoContato()}

INFORMAÇÕES COMPLEMENTARES: ${valorCampo("complementares")}

${cienciaPrazo()}`;
}
  complaintResultText.value = prefixoIC + texto;
  copyComplaintButton.disabled = false;
}

if (complaintType) {
  complaintType.addEventListener("change", () => {
    montarCamposReclamacao(complaintType.value);
  });

  document.querySelectorAll('input[name="complaintInsistencia"]').forEach(radio => {
    radio.addEventListener("change", gerarTextoReclamacao);
  });
}

if (copyComplaintButton) {
  copyComplaintButton.addEventListener("click", async () => {
    if (!complaintResultText.value.trim()) return;

    await navigator.clipboard.writeText(complaintResultText.value);

    copyComplaintButton.classList.add("copied");
    copyComplaintButton.innerHTML = `<i class="fa-solid fa-check"></i> Copiado!`;
    copyComplaintFeedback.textContent = "Texto copiado com sucesso!";

    setTimeout(() => {
      copyComplaintButton.classList.remove("copied");
      copyComplaintButton.innerHTML = `<i class="fa-regular fa-copy"></i> Copiar`;
      copyComplaintFeedback.textContent = "";
    }, 2000);
  });
}

// ================= BUSCA GERADOR DE EMAIL =================
const emailSearchInput = document.getElementById("emailSearchInput");
const emailTypesList = document.getElementById("emailTypesList");
const emailInitialMessage = document.getElementById("emailInitialMessage");
const clearEmailSearchButton = document.getElementById("clearEmailSearchButton");

if (emailSearchInput && emailTypesList) {
  const emailItems = emailTypesList.querySelectorAll(".script-item");

  emailTypesList.classList.add("scripts-list-hidden");

  if (emailInitialMessage) {
    emailInitialMessage.classList.remove("hidden");
  }

  emailItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(6px)";

    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, index * 30);

    item.addEventListener("click", () => {
      emailItems.forEach(i => i.classList.remove("selected"));
      item.classList.add("selected");

      emailTypesList.classList.add("scripts-list-hidden");

      if (emailInitialMessage) {
        emailInitialMessage.classList.add("hidden");
      }
    });
  });

  emailSearchInput.addEventListener("focus", () => {
    emailTypesList.classList.remove("scripts-list-hidden");

    if (emailInitialMessage) {
      emailInitialMessage.classList.add("hidden");
    }

    emailItems.forEach(item => {
      item.style.display = "flex";
    });
  });

  emailSearchInput.addEventListener("input", () => {
    const termo = emailSearchInput.value.toLowerCase().trim();
    let encontrados = 0;

    emailTypesList.classList.remove("scripts-list-hidden");

    if (emailInitialMessage) {
      emailInitialMessage.classList.add("hidden");
    }

    emailItems.forEach(item => {
      const texto = item.innerText.toLowerCase();
      const encontrou = texto.includes(termo);

      item.style.display = encontrou ? "flex" : "none";

      if (encontrou) encontrados++;
    });

    let empty = document.getElementById("emailEmptyState");

    if (encontrados === 0) {
      if (!empty) {
        empty = document.createElement("div");
        empty.id = "emailEmptyState";
        empty.className = "script-empty";
        empty.innerHTML = `
          <i class="fa-regular fa-folder-open"></i>
          <strong>Nenhum tipo de e-mail encontrado</strong>
          <span>Tente pesquisar por outro termo.</span>
        `;
        emailTypesList.appendChild(empty);
      }
    } else if (empty) {
      empty.remove();
    }
  });

  if (clearEmailSearchButton) {
  clearEmailSearchButton.addEventListener("click", () => {
    emailSearchInput.value = "";

    emailTypesList.classList.add("scripts-list-hidden");

    if (emailInitialMessage) {
      emailInitialMessage.classList.remove("hidden");
    }

    emailItems.forEach(item => {
      item.style.display = "flex";
      item.classList.remove("selected");
    });

    const empty = document.getElementById("emailEmptyState");
    if (empty) {
      empty.remove();
    }

    emailTipoSelecionado = "";

    document.getElementById("selectedEmailTitle").textContent = "Selecione um tipo de e-mail";

    document.getElementById("emailDynamicFields").innerHTML = `
      <div class="complaint-empty-state">
        <i class="fa-regular fa-envelope"></i>
        <strong>Selecione um tipo de e-mail</strong>
        <span>Após selecionar, os campos específicos aparecerão aqui.</span>
      </div>
    `;

    document.getElementById("emailTo").value = "";
    document.getElementById("emailCc").value = "";
    document.getElementById("emailSubject").value = "";
    document.getElementById("emailBody").value = "";

    document.getElementById("generateEmailButton").disabled = true;

document.querySelector("#emailPage .email-work-area")?.classList.add("hidden");

document.getElementById("emailWorkArea")?.classList.add("hidden");

document.getElementById("emailFormCard")?.classList.add("hidden");

document.getElementById("emailPreviewCard")?.classList.add("hidden");
  });
}
}

// ================= BUSCA CAMPOS RECLAMAÇÃO =================
const complaintFilterInput = document.getElementById("complaintFilterInput");

if (complaintFilterInput) {
  complaintFilterInput.addEventListener("input", () => {
    const termo = complaintFilterInput.value.toLowerCase().trim();

    document.querySelectorAll("#complaintDynamicFields .complaint-field").forEach(field => {
      const texto = field.innerText.toLowerCase();
      field.style.display = texto.includes(termo) ? "block" : "none";
    });
  });
}

// ================= BUSCA TIPO DE RECLAMAÇÃO =================
const complaintTypeSearchInput = document.getElementById("complaintTypeSearchInput");
const complaintTypesList = document.getElementById("complaintTypesList");
const clearComplaintSearchButton = document.getElementById("clearComplaintSearchButton");

if (complaintTypeSearchInput && complaintTypesList && complaintType) {
  const complaintTypeItems = complaintTypesList.querySelectorAll(".script-item");

  complaintTypesList.classList.add("scripts-list-hidden");

  complaintTypeSearchInput.addEventListener("focus", () => {
    complaintTypesList.classList.remove("scripts-list-hidden");
  });

  complaintTypeSearchInput.addEventListener("input", () => {
    const termo = complaintTypeSearchInput.value.toLowerCase().trim();

    complaintTypesList.classList.remove("scripts-list-hidden");

    complaintTypeItems.forEach(item => {
      const texto = item.innerText.toLowerCase();
      item.style.display = texto.includes(termo) ? "flex" : "none";
    });
  });

  complaintTypeItems.forEach(item => {
    item.addEventListener("click", () => {
      complaintTypeItems.forEach(i => i.classList.remove("selected"));
      item.classList.add("selected");

      const tipo = item.dataset.value;
      const titulo = item.querySelector("strong").innerText;

      complaintType.value = tipo;
      complaintTypeSearchInput.value = titulo;

      montarCamposReclamacao(tipo);

const complaintWorkArea = document.getElementById("complaintWorkArea");

if (complaintWorkArea) {
  complaintWorkArea.classList.remove("hidden");
}

      complaintTypesList.classList.add("scripts-list-hidden");
    });
  });

  document.addEventListener("click", (e) => {
    const clicouDentro =
      complaintTypeSearchInput.contains(e.target) ||
      complaintTypesList.contains(e.target);

    if (!clicouDentro) {
      complaintTypesList.classList.add("scripts-list-hidden");
    }
  });

  if (clearComplaintSearchButton) {
    clearComplaintSearchButton.addEventListener("click", () => {
      complaintTypeSearchInput.value = "";
      complaintType.value = "";

      complaintTypeItems.forEach(item => {
        item.style.display = "flex";
        item.classList.remove("selected");
      });

      complaintTypesList.classList.add("scripts-list-hidden");

      const complaintWorkArea = document.getElementById("complaintWorkArea");
      if (complaintWorkArea) {
        complaintWorkArea.classList.add("hidden");
      }

      complaintDynamicFields.innerHTML = `
        <div class="complaint-empty-state">
          <i class="fa-regular fa-hand-pointer"></i>
          <strong>Selecione um tipo de reclamação</strong>
          <span>Após selecionar, os campos específicos aparecerão aqui.</span>
        </div>
      `;

      complaintResultText.value = "";
      copyComplaintButton.disabled = true;
      copyComplaintButton.classList.remove("copied");
      copyComplaintButton.innerHTML = "Copiar";
      copyComplaintFeedback.textContent = "";

      document.querySelector('input[name="complaintInsistencia"][value="nao"]').checked = true;
    });
  }
}

// ================= GERADOR DE EMAIL =================

let emailTipoSelecionado = "";

// ================= VALIDAÇÃO CAMPOS OBRIGATÓRIOS EMAIL =================
function atualizarCamposObrigatoriosEmail() {
  const campos = document.querySelectorAll(
    "#emailDynamicFields input, #emailDynamicFields select, #emailDynamicFields textarea"
  );

  let temCampoVazio = false;
  let primeiroCampoVazio = null;

  campos.forEach(campo => {
    const vazio = !campo.value.trim();

    campo.classList.toggle("campo-obrigatorio-erro", vazio);
    campo.classList.toggle("campo-obrigatorio-ok", !vazio);

    if (vazio && !primeiroCampoVazio) {
      primeiroCampoVazio = campo;
    }

    if (vazio) {
      temCampoVazio = true;
    }
  });

  return {
    valido: !temCampoVazio,
    primeiroCampoVazio
  };
}

function validarCamposEmailObrigatorios() {
  const resultado = atualizarCamposObrigatoriosEmail();

  if (!resultado.valido) {
    resultado.primeiroCampoVazio.focus();
    alert("Preencha todos os campos antes de gerar o e-mail.");
    return false;
  }

  return true;
}

// clique nos tipos de email
const emailDynamicFieldsArea = document.getElementById("emailDynamicFields");

if (emailDynamicFieldsArea) {
  emailDynamicFieldsArea.addEventListener("input", atualizarCamposObrigatoriosEmail);
  emailDynamicFieldsArea.addEventListener("change", atualizarCamposObrigatoriosEmail);
}

document.querySelectorAll("#emailTypesList .script-item").forEach(btn => {
  btn.addEventListener("click", () => {
    const tipo = btn.dataset.type || "";

    document.querySelectorAll("#emailTypesList .script-item").forEach(i => i.classList.remove("selected"));
    btn.classList.add("selected");

    document.getElementById("selectedEmailTitle").textContent = btn.querySelector("strong")?.innerText || "E-mail selecionado";

    emailTipoSelecionado = tipo;

document.querySelector("#emailPage .email-work-area")?.classList.remove("hidden");

    document.getElementById("emailTo").value = "";
    document.getElementById("emailCc").value = "";
    document.getElementById("emailSubject").value = "";
    document.getElementById("emailBody").value = "";

    if (tipo === "poda") {
      document.getElementById("emailDynamicFields").innerHTML = `
        <div class="complaint-field">
          <label>Número da Autorização da SEMMA</label>
          <input id="email_numero" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Solicitante</label>
          <input id="email_solicitante" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Conta contrato</label>
          <input id="email_conta" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Telefone</label>
          <input id="email_telefone" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>E-mail</label>
          <input id="email_email" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Rua</label>
          <input id="email_rua" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Número</label>
          <input id="email_numero_endereco" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Complemento</label>
          <input id="email_complemento" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Bairro</label>
          <input id="email_bairro" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Cidade</label>
          <input id="email_cidade" autocomplete="off">
        </div>
      `;

      document.getElementById("generateEmailButton").disabled = false;

} else if (tipo === "plptRemotoMla") {

  document.getElementById("emailDynamicFields").innerHTML = `
    <div class="complaint-field">
      <label>Nome do cliente</label>
      <input id="email_cliente" autocomplete="off">
    </div>

    <div class="complaint-field">
      <label>CPF</label>
      <input id="email_cpf" autocomplete="off">
    </div>

    <div class="complaint-field">
      <label>Nome da comunidade</label>
      <input id="email_comunidade" autocomplete="off">
    </div>

    <div class="complaint-field">
      <label>Nome da cidade</label>
      <input id="email_cidade" autocomplete="off">
    </div>
  `;

  document.getElementById("generateEmailButton").disabled = false;

} else if (tipo === "documentoJudicialDescumprimento") {

  document.getElementById("emailDynamicFields").innerHTML = `

    <div style="background:#ffe5e5; padding:12px; border-radius:8px; font-size:13px; margin-bottom:10px;">
      <strong>ATENÇÃO:</strong><br><br>
      Antes de prosseguir, entrar em contato com o Relacionamento com o Cliente (preferencialmente Nayra Freitas)
      para confirmar se a distribuidora já foi notificada pelo oficial de justiça.
    </div>

    <div class="complaint-field">
      <label>Tipo de documento judicial</label>
      <select id="email_tipo_documento">
        <option value="">Selecione...</option>
        <option>SENTENÇA</option>
        <option>LIMINAR</option>
        <option>DECISÃO</option>
        <option>INTIMAÇÃO</option>
        <option>CITAÇÃO</option>
      </select>
    </div>

    <div class="complaint-field">
      <label>Número do processo</label>
      <input id="email_processo" placeholder="Ex: 0800518-38.2020.8.14.0115">
    </div>

    <div class="complaint-field">
      <label>Nome do cliente</label>
      <input id="email_cliente">
    </div>

    <div class="complaint-field">
      <label>Conta contrato</label>
      <input id="email_conta">
    </div>

    <div class="complaint-field">
      <label>Agência</label>
      <select id="email_agencia">
        <option value="">Selecione...</option>
        <option>SANTARÉM</option>
        <option>ITAITUBA</option>
        <option>ORIXIMINÁ</option>
        <option>ÓBIDOS</option>
        <option>MONTE ALEGRE</option>
        <option>ALENQUER</option>
        <option>JURUTI</option>
        <option>NOVO PROGRESSO</option>
        <option>RURÓPOLIS</option>
      </select>
    </div>

    <div class="complaint-field">
      <label>Data da entrega</label>
      <input type="date" id="email_data">
    </div>

    <div class="complaint-field">
      <label>Hora da entrega</label>
      <input type="time" id="email_hora">
    </div>
  `;

  document.getElementById("generateEmailButton").disabled = false;

} else if (tipo === "recebimentoDocumentoJudicial") {

  document.getElementById("emailDynamicFields").innerHTML = `

    <div class="complaint-field">
      <label>Tipo de documento judicial</label>
      <select id="email_tipo_documento">
        <option value="">Selecione...</option>
        <option>SENTENÇA</option>
        <option>CITAÇÃO</option>
        <option>INTIMAÇÃO</option>
        <option>DECISÃO</option>
        <option>LIMINAR</option>
      </select>
    </div>

    <div class="complaint-field">
      <label>Documento entregue por oficial de justiça?</label>
      <select id="email_oficial">
        <option value="">Selecione...</option>
        <option value="sim">SIM</option>
        <option value="nao">NÃO</option>
      </select>
    </div>

    <div id="areaAvisoJudicial"></div>
    <div id="areaCamposJudicial"></div>
  `;

  document.getElementById("email_oficial").addEventListener("change", () => {
    const oficial = document.getElementById("email_oficial").value;
    const aviso = document.getElementById("areaAvisoJudicial");
    const campos = document.getElementById("areaCamposJudicial");

    aviso.innerHTML = "";
    campos.innerHTML = "";

    if (oficial === "nao") {

      aviso.innerHTML = `
        <div style="background:#fff3cd; padding:12px; border-radius:8px; font-size:13px;">
          <strong>Prezado colaborador,</strong><br><br>
          Documentos judiciais não devem ser recebidos diretamente na agência quando apresentados por clientes ou advogados.<br><br>
          Encaminhar para Relacionamento com o Cliente (Nayra Freitas) e verificar se já houve intimação formal.
        </div>
      `;

      document.getElementById("generateEmailButton").disabled = true;

    }

    if (oficial === "sim") {

      campos.innerHTML = `
        <div class="complaint-field">
          <label>Número do processo (Ex: 0800518-38.2020.8.14.0115)</label>
          <input id="email_processo">
        </div>

        <div class="complaint-field">
          <label>Nome do cliente</label>
          <input id="email_cliente">
        </div>

        <div class="complaint-field">
          <label>Conta contrato</label>
          <input id="email_conta">
        </div>

        <div class="complaint-field">
          <label>Agência</label>
          <select id="email_agencia">
            <option value="">Selecione...</option>
            <option>SANTARÉM</option>
            <option>ITAITUBA</option>
            <option>ORIXIMINÁ</option>
            <option>ÓBIDOS</option>
            <option>MONTE ALEGRE</option>
            <option>ALENQUER</option>
            <option>JURUTI</option>
            <option>NOVO PROGRESSO</option>
            <option>RURÓPOLIS</option>
          </select>
        </div>

        <div class="complaint-field">
          <label>Data da entrega</label>
          <input type="date" id="email_data">
        </div>

        <div class="complaint-field">
          <label>Hora da entrega</label>
          <input type="time" id="email_hora">
        </div>
      `;

      document.getElementById("generateEmailButton").disabled = false;
    }

  });

  document.getElementById("generateEmailButton").disabled = true;

} else if (tipo === "processarTrocaProcedente") {

  document.getElementById("emailDynamicFields").innerHTML = `
    <div class="complaint-field">
      <label>Nota de troca de titularidade</label>

      <div id="notasTrocaContainer">
        <input class="nota-troca-input" autocomplete="off">
      </div>

      <button type="button" id="addNotaTrocaButton" class="add-field-btn">
        <i class="fa-solid fa-plus"></i> Adicionar outra nota
      </button>
    </div>
  `;

  document.getElementById("addNotaTrocaButton").addEventListener("click", () => {
    const container = document.getElementById("notasTrocaContainer");

    const input = document.createElement("input");
    input.className = "nota-troca-input";
    input.autocomplete = "off";
    input.style.marginTop = "8px";

    container.appendChild(input);
  });

  document.getElementById("generateEmailButton").disabled = false;

    } else if (tipo === "furtoTrafoQueimado") {

      document.getElementById("emailDynamicFields").innerHTML = `
        <div class="complaint-field">
          <label>Tipo de ocorrência</label>
          <select id="email_ocorrencia">
            <option value="">Selecione</option>
            <option value="furto">FURTO DE TRANSFORMADOR</option>
            <option value="queimado">TRAFO QUEIMADO</option>
          </select>
        </div>

        <div class="complaint-field">
          <label>Conta contrato</label>
          <input id="email_conta" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Nota</label>
          <input id="email_nota" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Cidade do TRAFO</label>
          <input id="email_cidade" autocomplete="off">
        </div>
      `;

      document.getElementById("generateEmailButton").disabled = false;

} else if (tipo === "oficioCliente") {

  document.getElementById("emailDynamicFields").innerHTML = `
    <div class="complaint-field">
      <label>Nome do parceiro / cliente</label>
      <input id="email_nome_parceiro" autocomplete="off">
    </div>

    <div class="complaint-field">
      <label>Nome da agência</label>
      <select id="email_agencia">
        <option value="">Selecione...</option>
        <option>SANTARÉM</option>
        <option>ITAITUBA</option>
        <option>ORIXIMINÁ</option>
        <option>ÓBIDOS</option>
        <option>MONTE ALEGRE</option>
        <option>ALENQUER</option>
        <option>JURUTI</option>
        <option>NOVO PROGRESSO</option>
        <option>RURÓPOLIS</option>
      </select>
    </div>

    <div class="complaint-field">
      <label>Possui conta contrato?</label>
      <select id="email_possui_conta">
        <option value="">Selecione...</option>
        <option value="sim">SIM</option>
        <option value="nao">NÃO</option>
      </select>
    </div>

    <div id="emailOficioClienteContaArea"></div>
  `;

  document.getElementById("email_possui_conta").addEventListener("change", () => {
    const possuiConta = document.getElementById("email_possui_conta").value;
    const area = document.getElementById("emailOficioClienteContaArea");

    area.innerHTML = "";

    if (possuiConta === "sim") {
      area.innerHTML = `
        <div class="complaint-field">
          <label>Conta contrato</label>
          <input id="email_conta" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Possui nota de serviço para tratativa?</label>
          <select id="email_possui_nota">
            <option value="">Selecione...</option>
            <option value="sim">SIM</option>
            <option value="nao">NÃO</option>
          </select>
        </div>

        <div id="emailOficioClienteNotaArea"></div>
      `;

      document.getElementById("email_possui_nota").addEventListener("change", () => {
        const possuiNota = document.getElementById("email_possui_nota").value;
        const notaArea = document.getElementById("emailOficioClienteNotaArea");

        notaArea.innerHTML = "";

        if (possuiNota === "sim") {
          notaArea.innerHTML = `
            <div class="complaint-field">
              <label>Nota de serviço</label>
              <input id="email_nota" autocomplete="off">
            </div>
          `;
        }
      });
    }
  });

  document.getElementById("generateEmailButton").disabled = false;

    } else if (tipo === "conexaoMla") {

      document.getElementById("emailDynamicFields").innerHTML = `
        <div class="complaint-field">
          <label>Nome da comunidade</label>
          <input id="email_comunidade" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Nome do cliente</label>
          <input id="email_cliente" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Telefone para retorno</label>
          <input id="email_telefone" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>E-mail para retorno</label>
          <input id="email_email" autocomplete="off">
        </div>
      `;

      document.getElementById("generateEmailButton").disabled = false;

    } else if (tipo === "oficioAssociacaoMoradores") {

      document.getElementById("emailDynamicFields").innerHTML = `
        <div class="complaint-field">
          <label>Nome da associação (Ex: Bairro da Floresta / Comunidade Pérola do Maicá)</label>
          <input id="email_associacao" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Solicitante</label>
          <input id="email_solicitante" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Telefone para retorno</label>
          <input id="email_telefone" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>E-mail para retorno</label>
          <input id="email_email" autocomplete="off">
        </div>
      `;

      document.getElementById("generateEmailButton").disabled = false;

    } else if (tipo === "estornoTrocaTitularidadeFaturas") {

      document.getElementById("emailDynamicFields").innerHTML = `
        <div class="complaint-field">
          <label>Motivo do estorno da troca de titularidade</label>
          <textarea id="email_motivo"></textarea>
        </div>

        <div class="complaint-field">
          <label>Conta contrato atual</label>
          <input id="email_conta" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Instalação</label>
          <input id="email_instalacao" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Titular atual</label>
          <input id="email_titular_atual" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Parceiro do atual titular</label>
          <input id="email_parceiro_atual" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Titular anterior</label>
          <input id="email_titular_anterior" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Parceiro do titular anterior</label>
          <input id="email_parceiro_anterior" autocomplete="off">
        </div>

        <div id="emailFaturasEstornoArea">
          <div class="complaint-field">
            <label>Referência da fatura</label>
            <input class="email_fatura_estorno_referencia" autocomplete="off" placeholder="Ex: 03/2026">
          </div>

          <div class="complaint-field">
            <label>Valor da fatura</label>
            <input class="email_fatura_estorno_valor" autocomplete="off" placeholder="Ex: R$ 796,64">
          </div>
        </div>

        <div class="email-actions">
          <button id="addFaturaEstornoButton" class="copy-script-button" type="button">
            <i class="fa-solid fa-plus"></i>
            Adicionar fatura
          </button>
        </div>
      `;

      document.getElementById("generateEmailButton").disabled = false;

      document.getElementById("addFaturaEstornoButton").addEventListener("click", () => {
        const area = document.getElementById("emailFaturasEstornoArea");

        const linha = document.createElement("div");
        linha.className = "email-fatura-row";
        linha.innerHTML = `
          <div class="complaint-field">
            <label>Referência da fatura</label>
            <input class="email_fatura_estorno_referencia" autocomplete="off" placeholder="Ex: 04/2026">
          </div>

          <div class="complaint-field">
            <label>Valor da fatura</label>
            <input class="email_fatura_estorno_valor" autocomplete="off" placeholder="Ex: R$ 1.645,46">
          </div>
        `;

        area.appendChild(linha);
      });

    } else if (tipo === "transferenciaTrocaTitularidadeFaturas") {

      document.getElementById("emailDynamicFields").innerHTML = `
        <div class="complaint-field">
          <label>Motivo da troca de titularidade</label>
          <textarea id="email_motivo"></textarea>
        </div>

        <div class="complaint-field">
          <label>Conta contrato atual</label>
          <input id="email_conta" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Instalação</label>
          <input id="email_instalacao" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Titular atual</label>
          <input id="email_titular_atual" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Parceiro do atual titular</label>
          <input id="email_parceiro_atual" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Novo titular</label>
          <input id="email_novo_titular" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Parceiro do novo titular</label>
          <input id="email_parceiro_novo" autocomplete="off">
        </div>

        <div id="emailFaturasArea">
          <div class="complaint-field">
            <label>Referência da fatura</label>
            <input class="email_fatura_referencia" autocomplete="off" placeholder="Ex: 03/2026">
          </div>

          <div class="complaint-field">
            <label>Valor da fatura</label>
            <input class="email_fatura_valor" autocomplete="off" placeholder="Ex: R$ 796,64">
          </div>
        </div>

        <div class="email-actions">
          <button id="addFaturaButton" class="copy-script-button" type="button">
            <i class="fa-solid fa-plus"></i>
            Adicionar fatura
          </button>
        </div>
      `;

      document.getElementById("generateEmailButton").disabled = false;

      document.getElementById("addFaturaButton").addEventListener("click", () => {
        const area = document.getElementById("emailFaturasArea");

        const linha = document.createElement("div");
        linha.className = "email-fatura-row";
        linha.innerHTML = `
          <div class="complaint-field">
            <label>Referência da fatura</label>
            <input class="email_fatura_referencia" autocomplete="off" placeholder="Ex: 04/2026">
          </div>

          <div class="complaint-field">
            <label>Valor da fatura</label>
            <input class="email_fatura_valor" autocomplete="off" placeholder="Ex: R$ 1.645,46">
          </div>
        `;

        area.appendChild(linha);
      });

    } else if (tipo === "retiradaNegativacao") {

      document.getElementById("emailDynamicFields").innerHTML = `
        <div class="complaint-field">
          <label>Cliente apresentou evidência do APP/SITE do Serasa que mostra que está negativado?</label>
          <select id="email_evidencia_serasa">
            <option value="">Selecione</option>
            <option value="sim">SIM</option>
            <option value="nao">NÃO</option>
          </select>
        </div>

        <div id="emailRetiradaNegativacaoArea"></div>
      `;

      document.getElementById("generateEmailButton").disabled = true;

      document.getElementById("email_evidencia_serasa").addEventListener("change", () => {
        const evidencia = document.getElementById("email_evidencia_serasa").value;
        const area = document.getElementById("emailRetiradaNegativacaoArea");

        document.getElementById("emailTo").value = "";
        document.getElementById("emailCc").value = "";
        document.getElementById("emailSubject").value = "";
        document.getElementById("emailBody").value = "";
        document.getElementById("generateEmailButton").disabled = true;

        if (evidencia === "nao") {
          area.innerHTML = `
            <div class="complaint-empty-state aviso-carta">
              <i class="fa-solid fa-circle-info"></i>
              <strong>Atenção</strong>
              <span>
Prezado colaborador,

Para continuidade da solicitação e maior assertividade na tratativa, é obrigatório que o cliente apresente evidência de que seu CPF encontra-se negativado, por meio de print ou foto obtidos diretamente no aplicativo ou site da Serasa.

Observação: Não serão aceitas imagens provenientes de instituições bancárias ou estabelecimentos comerciais (como Magazine Luiza, Americanas, entre outros), uma vez que utilizam sistemas distintos e podem não refletir a situação atualizada. As evidências devem, obrigatoriamente, ser emitidas pela Serasa.
              </span>
            </div>
          `;
        }

        if (evidencia === "sim") {
          area.innerHTML = `
            <div class="complaint-field">
              <label>O débito da fatura já se encontra arrecadado no sistema SAP?</label>
              <select id="email_debito_arrecadado_negativacao">
                <option value="">Selecione</option>
                <option value="sim">SIM</option>
                <option value="nao">NÃO</option>
              </select>
            </div>

            <div id="emailRetiradaNegativacaoDados"></div>
          `;

          document.getElementById("email_debito_arrecadado_negativacao").addEventListener("change", () => {
            const arrecadado = document.getElementById("email_debito_arrecadado_negativacao").value;
            const dados = document.getElementById("emailRetiradaNegativacaoDados");

            document.getElementById("emailTo").value = "";
            document.getElementById("emailCc").value = "";
            document.getElementById("emailSubject").value = "";
            document.getElementById("emailBody").value = "";
            document.getElementById("generateEmailButton").disabled = true;

            if (arrecadado === "nao") {
              dados.innerHTML = `
                <div class="complaint-empty-state aviso-carta">
                  <i class="fa-solid fa-circle-info"></i>
                  <strong>Atenção</strong>
                  <span>
Prezado colaborador,

Considerando que o referido débito ainda não se encontra atualizado no sistema da Equatorial (SAP CRM), orientamos aguardar a efetivação da arrecadação, a qual ocorre de forma automática.

Ressaltamos que somente após a devida atualização no sistema será realizada a retirada de negativação automática, também no prazo interno de 5 dias.
                  </span>
                </div>
              `;
            }

            if (arrecadado === "sim") {
              dados.innerHTML = `
                <div class="complaint-field">
                  <label>Nome</label>
                  <input id="email_nome" autocomplete="off">
                </div>

                <div class="complaint-field">
                  <label>CPF/CNPJ</label>
                  <input id="email_documento" autocomplete="off">
                </div>

                <div class="complaint-field">
                  <label>Conta contrato</label>
                  <input id="email_conta" autocomplete="off">
                </div>
              `;

              document.getElementById("generateEmailButton").disabled = false;
            }
          });
        }
      });

    } else if (tipo === "oficioPoderPublico") {

  document.getElementById("emailDynamicFields").innerHTML = `
    <div class="complaint-field">
      <label>Órgão do Ofício</label>
      <select id="email_orgao">
        <option value="">Selecione...</option>
        <option value="orgaosGerais">PROCON, MINISTÉRIO PÚBLICO, POLÍCIA CIVIL, POLÍCIA MILITAR, BOMBEIRO, DEFENSORIA PÚBLICA, JUIZADO</option>
        <option value="prefeitura">PREFEITURA (ENTIDADES MUNICIPAIS)</option>
        <option value="camara">CÂMARA DE VEREADORES</option>
      </select>
    </div>

    <div id="camposComplementaresOficio"></div>
  `;

  const orgaoSelect = document.getElementById("email_orgao");
  const campos = document.getElementById("camposComplementaresOficio");

  orgaoSelect.addEventListener("change", () => {

    if (orgaoSelect.value === "prefeitura") {

      campos.innerHTML = `
        <div class="complaint-field">
          <label>De qual cidade é?</label>
          <select id="email_cidade_oficio">
            <option value="">Selecione...</option>
            <option>SANTARÉM E REGIÃO</option>
            <option>ORIXIMINÁ</option>
            <option>ÓBIDOS</option>
            <option>MONTE ALEGRE</option>
            <option>ALENQUER</option>
            <option>JURUTI</option>
            <option>ITAITUBA E REGIÃO</option>
            <option>NOVO PROGRESSO</option>
            <option>RURÓPOLIS</option>
            <option>MOJUÍ DOS CAMPOS</option>
            <option>BELTERRA</option>
          </select>
        </div>

        <div class="complaint-field">
          <label>Número do Ofício (Ex: 0254/2024)</label>
          <input id="email_numero_oficio" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Nome do Ofício (Ex: GAB / PCMI - REITERAÇÃO DE SOLICITAÇÕES NÃO RESPONDIDAS)</label>
          <input id="email_nome_oficio" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Solicitante</label>
          <input id="email_solicitante" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Telefone para retorno</label>
          <input id="email_telefone" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>E-mail para retorno</label>
          <input id="email_email" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Qual agência recebeu o ofício?</label>
          <select id="email_agencia">
            <option value="">Selecione...</option>
            <option>SANTARÉM</option>
            <option>ITAITUBA</option>
            <option>ORIXIMINÁ</option>
            <option>ÓBIDOS</option>
            <option>MONTE ALEGRE</option>
            <option>ALENQUER</option>
            <option>JURUTI</option>
            <option>NOVO PROGRESSO</option>
            <option>RURÓPOLIS</option>
          </select>
        </div>
      `;

    } else if (orgaoSelect.value === "camara") {

      campos.innerHTML = `
        <div class="complaint-field">
          <label>De qual cidade é?</label>
          <select id="email_cidade_oficio">
            <option value="">Selecione...</option>
            <option>SANTARÉM</option>
            <option>ORIXIMINÁ</option>
            <option>ÓBIDOS</option>
            <option>MONTE ALEGRE</option>
            <option>ALENQUER</option>
            <option>JURUTI</option>
            <option>ITAITUBA</option>
            <option>NOVO PROGRESSO</option>
            <option>RURÓPOLIS</option>
            <option>MOJUÍ DOS CAMPOS</option>
            <option>BELTERRA</option>
          </select>
        </div>

        <div class="complaint-field">
          <label>Número do Ofício (Ex: 254/2024)</label>
          <input id="email_numero_oficio" autocomplete="off">
        </div>

        <div class="complaint-field">
  <label>Nome do Ofício (Ex: GAB / CMJ - SOLICITAÇÃO DE INFORMAÇÕES)</label>
  <input id="email_nome_oficio" autocomplete="off">
</div>

        <div class="complaint-field">
          <label>Solicitante</label>
          <input id="email_solicitante" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Telefone para retorno</label>
          <input id="email_telefone" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>E-mail para retorno</label>
          <input id="email_email" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Qual agência recebeu o ofício?</label>
          <select id="email_agencia">
            <option value="">Selecione...</option>
            <option>SANTARÉM</option>
            <option>ITAITUBA</option>
            <option>ORIXIMINÁ</option>
            <option>ÓBIDOS</option>
            <option>MONTE ALEGRE</option>
            <option>ALENQUER</option>
            <option>JURUTI</option>
            <option>NOVO PROGRESSO</option>
            <option>RURÓPOLIS</option>
          </select>
        </div>
      `;

    } else if (orgaoSelect.value === "orgaosGerais") {

      campos.innerHTML = `
        <div class="complaint-field">
          <label>Número do Ofício (Ex: 525/2021)</label>
          <input id="email_numero_oficio" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Nome do Ofício (Ex: DCP/NP ou GAB/PCMI)</label>
          <input id="email_nome_oficio" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Telefone para retorno</label>
          <input id="email_telefone" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>E-mail para retorno</label>
          <input id="email_email" autocomplete="off">
        </div>

        <div class="complaint-field">
          <label>Agência</label>
          <select id="email_agencia">
            <option value="">Selecione...</option>
            <option>SANTARÉM</option>
            <option>ITAITUBA</option>
            <option>ORIXIMINÁ</option>
            <option>ÓBIDOS</option>
            <option>MONTE ALEGRE</option>
            <option>ALENQUER</option>
            <option>JURUTI</option>
            <option>NOVO PROGRESSO</option>
            <option>RURÓPOLIS</option>
          </select>
        </div>
      `;

    } else {
      campos.innerHTML = "";
    }

  });

  document.getElementById("generateEmailButton").disabled = false;

    } else if (tipo === "cadastroLogradouro") {

  const opcoesLogradouro = `
    <option value="">Selecione</option>
    <option value="RUA">RUA</option>
    <option value="TRAVESSA">TRAVESSA</option>
    <option value="ALAMEDA">ALAMEDA</option>
    <option value="ESTRADA">ESTRADA</option>
    <option value="AVENIDA">AVENIDA</option>
    <option value="RODOVIA">RODOVIA</option>
    <option value="QUADRA">QUADRA</option>
    <option value="RAMAL">RAMAL</option>
    <option value="BECO">BECO</option>
    <option value="VIELA">VIELA</option>
    <option value="PRAÇA">PRAÇA</option>
    <option value="ACESSO">ACESSO</option>
  `;

  document.getElementById("emailDynamicFields").innerHTML = `
    <div id="logradouroArea">
      <div class="logradouro-item">
        <h3>Logradouro 1</h3>

        <div class="complaint-field">
          <label>Localidade</label>
          <input class="email_localidade_logradouro">
        </div>

        <div class="complaint-field">
          <label>Bairro</label>
          <input class="email_bairro_logradouro">
        </div>

        <div class="complaint-field">
          <label>Tipo de logradouro</label>
          <select class="email_tipo_logradouro">
            ${opcoesLogradouro}
          </select>
        </div>

        <div class="complaint-field">
          <label>Quantidade de ligações</label>
          <input class="email_qtd_logradouro">
        </div>

        <div class="complaint-field">
          <label>Nome do logradouro</label>
          <input class="email_nome_logradouro">
        </div>
      </div>
    </div>

    <div class="email-actions">
      <button id="addLogradouroButton" class="copy-script-button" type="button">
        <i class="fa-solid fa-plus"></i>
        Adicionar outro logradouro
      </button>

      <button id="gerarPlanilhaLogradouro" class="copy-script-button" type="button">
        <i class="fa-solid fa-file-excel"></i>
        Gerar planilha de logradouro
      </button>
    </div>
  `;

  document.getElementById("generateEmailButton").disabled = true;

  document.getElementById("addLogradouroButton").addEventListener("click", () => {
    const area = document.getElementById("logradouroArea");
    const total = area.querySelectorAll(".logradouro-item").length + 1;

    const novo = document.createElement("div");
    novo.className = "logradouro-item";
    novo.innerHTML = `
      <h3>Logradouro ${total}</h3>

      <div class="complaint-field">
        <label>Localidade</label>
        <input class="email_localidade_logradouro">
      </div>

      <div class="complaint-field">
        <label>Bairro</label>
        <input class="email_bairro_logradouro">
      </div>

      <div class="complaint-field">
        <label>Tipo de logradouro</label>
        <select class="email_tipo_logradouro">
          ${opcoesLogradouro}
        </select>
      </div>

      <div class="complaint-field">
        <label>Quantidade de ligações</label>
        <input class="email_qtd_logradouro">
      </div>

      <div class="complaint-field">
        <label>Nome do logradouro</label>
        <input class="email_nome_logradouro">
      </div>
    `;

    area.appendChild(novo);
    document.getElementById("generateEmailButton").disabled = true;
  });

  document.getElementById("gerarPlanilhaLogradouro").addEventListener("click", async () => {
    const itens = document.querySelectorAll(".logradouro-item");
    const logradouros = [];

    for (const item of itens) {
      const localidade = item.querySelector(".email_localidade_logradouro")?.value.trim();
      const bairro = item.querySelector(".email_bairro_logradouro")?.value.trim();
      const tipoLogradouro = item.querySelector(".email_tipo_logradouro")?.value.trim();
      const qtdLigacoes = item.querySelector(".email_qtd_logradouro")?.value.trim();
      const nomeLogradouro = item.querySelector(".email_nome_logradouro")?.value.trim();

      if (!localidade || !bairro || !tipoLogradouro || !qtdLigacoes || !nomeLogradouro) {
        alert("Preencha todos os campos de todos os logradouros antes de gerar a planilha.");
        return;
      }

      logradouros.push({
        localidade,
        bairro,
        tipoLogradouro,
        qtdLigacoes,
        nomeLogradouro
      });
    }

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Plan1");

    sheet.views = [{ showGridLines: false }];
    sheet.pageSetup = {
      paperSize: 9,
      orientation: "landscape",
      fitToPage: true,
      fitToWidth: 1,
      fitToHeight: 1
    };

    sheet.getColumn("A").width = 18;
    sheet.getColumn("B").width = 24;
    sheet.getColumn("C").width = 16;
    sheet.getColumn("D").width = 20;
    sheet.getColumn("E").width = 32;
    sheet.getColumn("F").width = 34;

    sheet.getRow(1).height = 38;
    sheet.getRow(2).height = 38;
    sheet.getRow(3).height = 34;
    sheet.getRow(4).height = 20;
    sheet.getRow(5).height = 42;

    const azulTitulo = "0070C0";
    const azulFaixa = "5B8CC0";
    const azulCabecalho = "00B0F0";
    const azulEscuro = "0070C0";
    const rosa = "E6A0A0";
    const preto = "000000";

    sheet.mergeCells("A1:F2");
    const titulo = sheet.getCell("A1");
    titulo.value = "Gerência de Gestão Comercial\nÁrea de Leitura & Cadastro";
    titulo.font = {
      name: "Arial",
      bold: true,
      size: 14,
      color: { argb: azulTitulo }
    };
    titulo.alignment = { horizontal: "center", vertical: "middle", wrapText: true };

    for (let row = 1; row <= 2; row++) {
      for (let col = 1; col <= 6; col++) {
        sheet.getCell(row, col).border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" }
        };
      }
    }

    sheet.mergeCells("A3:F3");
    const faixa = sheet.getCell("A3");
    faixa.value = "Planilha para Solicitação de Códigos de Logradouros novos.";
    faixa.font = {
      name: "Arial",
      bold: true,
      size: 12,
      color: { argb: preto }
    };
    faixa.alignment = { horizontal: "center", vertical: "middle" };
    faixa.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: azulFaixa }
    };

    for (let col = 1; col <= 6; col++) {
      sheet.getCell(3, col).border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" }
      };
    }

    for (let col = 1; col <= 6; col++) {
      const cell = sheet.getCell(4, col);
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: azulEscuro }
      };
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" }
      };
    }

    const headers = [
      "Localidade",
      "Bairro",
      "Tipo:R,Tv.Av,Vc,Et.QD",
      "Qtde. de Instalações",
      "Nome do logradouro",
      "Observação /Complemento"
    ];

    headers.forEach((texto, index) => {
      const cell = sheet.getCell(5, index + 1);
      cell.value = texto;
      cell.font = {
        name: "Arial",
        bold: true,
        size: 10,
        color: { argb: preto }
      };
      cell.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: index === 3 ? rosa : azulCabecalho }
      };
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" }
      };
    });

    const estiloDados = {
      name: "Arial Narrow",
      size: 11,
      bold: true,
      color: { argb: "1F4E79" }
    };

    logradouros.forEach((logradouro, index) => {
      const linha = 6 + index;

      sheet.getRow(linha).height = 22;

      sheet.getCell(`A${linha}`).value = logradouro.localidade.toUpperCase();
      sheet.getCell(`B${linha}`).value = logradouro.bairro.toUpperCase();
      sheet.getCell(`C${linha}`).value = logradouro.tipoLogradouro.toUpperCase();
      sheet.getCell(`D${linha}`).value = Number(logradouro.qtdLigacoes);
      sheet.getCell(`E${linha}`).value = logradouro.nomeLogradouro.toUpperCase();
      sheet.getCell(`F${linha}`).value = "";

      ["A", "B", "C", "D", "E", "F"].forEach(coluna => {
        const cell = sheet.getCell(`${coluna}${linha}`);
        cell.font = estiloDados;
        cell.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
      });
    });

    const ultimaLinha = Math.max(21, 5 + logradouros.length);

    for (let row = 6; row <= ultimaLinha; row++) {
      sheet.getRow(row).height = 22;

      for (let col = 1; col <= 6; col++) {
        const cell = sheet.getCell(row, col);
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" }
        };
      }
    }

    sheet.eachRow(row => {
      row.eachCell(cell => {
        cell.font = {
          ...cell.font,
          name: cell.font?.name || "Arial"
        };
      });
    });

    sheet.pageSetup.printArea = `A1:F${ultimaLinha}`;

    const buffer = await workbook.xlsx.writeBuffer();

    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Cadastro_Logradouro_Preenchido.xlsx";
    link.click();

    document.getElementById("generateEmailButton").disabled = false;
  });

    } else if (tipo === "cancelarDesligamentoTrocaProcedente") {

      document.getElementById("emailDynamicFields").innerHTML = `
        <div class="complaint-field">
          <label>Nota de desligamento</label>
          <div id="notasDesligamentoContainer">
            <input class="nota-desligamento-input" autocomplete="off">
          </div>

          <button type="button" id="addNotaDesligamentoButton" class="add-field-btn">
  <i class="fa-solid fa-plus"></i> Adicionar outra nota
</button>
        </div>
      `;

      document.getElementById("addNotaDesligamentoButton").addEventListener("click", () => {
        const container = document.getElementById("notasDesligamentoContainer");

        const input = document.createElement("input");
        input.className = "nota-desligamento-input";
        input.autocomplete = "off";
        input.style.marginTop = "8px";

        container.appendChild(input);
      });

      document.getElementById("generateEmailButton").disabled = false;

    } else if (tipo === "cartaAnuencia") {

      document.getElementById("emailDynamicFields").innerHTML = `
        <div class="complaint-field">
          <label>O status da intimação está PROTESTADO ou CONFIRMADO?</label>
          <select id="email_status_intimacao">
            <option value="">Selecione</option>
            <option value="confirmado">CONFIRMADO</option>
            <option value="protestado">PROTESTADO</option>
          </select>
        </div>

        <div id="emailCartaAnuenciaArea"></div>
      `;

      document.getElementById("generateEmailButton").disabled = true;

      document.getElementById("email_status_intimacao").addEventListener("change", () => {
        const status = document.getElementById("email_status_intimacao").value;
        const area = document.getElementById("emailCartaAnuenciaArea");

        document.getElementById("emailTo").value = "";
        document.getElementById("emailCc").value = "";
        document.getElementById("emailSubject").value = "";
        document.getElementById("emailBody").value = "";
        document.getElementById("generateEmailButton").disabled = true;

        if (status === "confirmado") {
          area.innerHTML = `
            <div class="complaint-empty-state aviso-carta">
              <i class="fa-solid fa-circle-info"></i>
              <strong>Atenção</strong>
              <span>
Prezado colaborador,

Caso o status da intimação esteja como CONFIRMADO, orientar o cliente a comparecer ao cartório no qual foi intimado para realizar o pagamento da fatura, acrescido da taxa de intimação junto ao órgão competente.

Caso o cliente tenha efetuado o pagamento da fatura enquanto o status da intimação ainda constava como CONFIRMADO, informar que o título seguirá para protesto, conforme a Lei do Protesto (Lei nº 9.492/1997). Nessa situação, será necessário aguardar a atualização do status da intimação para PROTESTADO, para que então seja possível solicitar a carta de anuência.
              </span>
            </div>
          `;
        }

        if (status === "protestado") {
          area.innerHTML = `
            <div class="complaint-field">
              <label>O débito da fatura já se encontra arrecadado no sistema SAP CRM?</label>
              <select id="email_debito_arrecadado">
                <option value="">Selecione</option>
                <option value="nao">NÃO</option>
                <option value="sim">SIM</option>
              </select>
            </div>

            <div id="emailCartaAnuenciaDados"></div>
          `;

          document.getElementById("email_debito_arrecadado").addEventListener("change", () => {
            const arrecadado = document.getElementById("email_debito_arrecadado").value;
            const dados = document.getElementById("emailCartaAnuenciaDados");

            document.getElementById("emailTo").value = "";
            document.getElementById("emailCc").value = "";
            document.getElementById("emailSubject").value = "";
            document.getElementById("emailBody").value = "";
            document.getElementById("generateEmailButton").disabled = true;

            if (arrecadado === "nao") {
              dados.innerHTML = `
                <div class="complaint-empty-state aviso-carta">
                  <i class="fa-solid fa-circle-info"></i>
                  <strong>Atenção</strong>
                  <span>
Prezado colaborador,

Considerando que o referido débito ainda não se encontra atualizado no sistema da Equatorial (SAP CRM), orientamos aguardar a efetivação da arrecadação, a qual ocorre de forma automática.

Ressaltamos que somente após a devida atualização no sistema será possível realizar a solicitação da carta de anuência.
                  </span>
                </div>
              `;
            }

            if (arrecadado === "sim") {
              dados.innerHTML = `
                <div class="complaint-field">
                  <label>Titular</label>
                  <input id="email_titular" autocomplete="off">
                </div>

                <div class="complaint-field">
                  <label>CPF / CNPJ</label>
                  <input id="email_documento" autocomplete="off">
                </div>

                <div class="complaint-field">
                  <label>Conta contrato</label>
                  <input id="email_conta" autocomplete="off">
                </div>
              `;

              document.getElementById("generateEmailButton").disabled = false;
            }
          });
        }
      });

} else if (tipo === "emailSupervisaoOutros") {

  document.getElementById("emailDynamicFields").innerHTML = `

    <div class="complaint-field">
      <label>Assunto</label>
      <input id="email_assunto_livre" autocomplete="off">
    </div>

    <div class="complaint-field">
      <label>Texto do e-mail</label>
      <textarea id="email_texto_livre" rows="6" style="resize: vertical;"></textarea>
    </div>

  `;

  document.getElementById("generateEmailButton").disabled = false;

    } else {

      document.getElementById("emailDynamicFields").innerHTML = `
        <div class="complaint-empty-state">
          <i class="fa-regular fa-envelope"></i>
          <strong>Modelo ainda não configurado</strong>
          <span>Esse tipo de e-mail será configurado posteriormente.</span>
        </div>
      `;

      document.getElementById("generateEmailButton").disabled = true;
    }

  });
});


// ================= GERAR EMAIL =================

document.getElementById("generateEmailButton").addEventListener("click", () => {

if (!validarCamposEmailObrigatorios()) return;

if (emailTipoSelecionado === "emailSupervisaoOutros") {

  const assunto = document.getElementById("email_assunto_livre")?.value || "";
  const textoInput = document.getElementById("email_texto_livre")?.value || "";
const texto = normalizarTextoLivre(textoInput);

  document.getElementById("emailTo").value =
    "kleberton.cruz@cgbengenharia.com.br;";

  document.getElementById("emailCc").value =
    "tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br;";

  document.getElementById("emailSubject").value =
    assunto.toUpperCase();

  document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezado Kleberton,

${texto}`;

  return;
}

if (emailTipoSelecionado === "documentoJudicialDescumprimento") {

  const tipo = document.getElementById("email_tipo_documento")?.value || "";
  const processo = document.getElementById("email_processo")?.value || "";
  const cliente = document.getElementById("email_cliente")?.value || "";
  const conta = document.getElementById("email_conta")?.value || "";
  const agencia = document.getElementById("email_agencia")?.value || "";

  const dataInput = document.getElementById("email_data")?.value || "";
  const data = dataInput ? dataInput.split("-").reverse().join("/") : "";

  const hora = document.getElementById("email_hora")?.value || "";

  document.getElementById("emailTo").value =
    "descumprimento@equatorialenergia.com.br";

  document.getElementById("emailCc").value =
    "evelyn.mattos@equatorialenergia.com.br; juliana.lima@equatorialenergia.com.br; aline.riker@equatorialenergia.com.br; nayra.pinto@equatorialenergia.com.br; miriam.godinho@equatorialenergia.com.br; tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; kleberton.cruz@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br; carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br; amanda.regina@cgbengenharia.com.br; marlisson.jean@cgbengenharia.com.br; marciele.barbosa@cgbengenharia.com.br;";

  document.getElementById("emailSubject").value =
    `DESCUMPRIMENTO - PROCESSO N° ${processo} / ${formatarTextoPadrao(cliente)} - CONTA CONTRATO: ${conta} - ${formatarTextoPadrao(agencia)}`.toUpperCase();

  document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezados,

Encaminhamos, para conhecimento e análise, o processo judicial nº ${processo}, referente à cliente ${formatarTextoPadrao(cliente)}, conta contrato ${conta}.

O documento foi apresentado pelo cliente na agência de atendimento de ${formatarTextoPadrao(agencia)}, na data de ${data} às ${hora}, com alegação de descumprimento de decisão judicial de ${tipo.toLowerCase()}.

Permanecemos à disposição para quaisquer esclarecimentos adicionais.`;

  return;
}

if (emailTipoSelecionado === "recebimentoDocumentoJudicial") {

  const tipo = document.getElementById("email_tipo_documento")?.value || "";
  const processo = document.getElementById("email_processo")?.value || "";
  const cliente = document.getElementById("email_cliente")?.value || "";
  const conta = document.getElementById("email_conta")?.value || "";
  const agencia = document.getElementById("email_agencia")?.value || "";

  const dataInput = document.getElementById("email_data")?.value || "";
  const data = dataInput ? dataInput.split("-").reverse().join("/") : "";

  const hora = document.getElementById("email_hora")?.value || "";

  document.getElementById("emailTo").value =
    "liminar@equatorialenergia.com.br; juridico.pa@equatorialenergia.com.br;";

  document.getElementById("emailCc").value =
    "evelyn.mattos@equatorialenergia.com.br; juliana.lima@equatorialenergia.com.br; aline.riker@equatorialenergia.com.br; nayra.pinto@equatorialenergia.com.br; miriam.godinho@equatorialenergia.com.br; tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; kleberton.cruz@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br; carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br; amanda.regina@cgbengenharia.com.br; marlisson.jean@cgbengenharia.com.br; marciele.barbosa@cgbengenharia.com.br;";

  document.getElementById("emailSubject").value =
    `${tipo} - PROCESSO N° ${processo} / ${formatarTextoPadrao(cliente)} - CONTA CONTRATO: ${conta} - ${formatarTextoPadrao(agencia)}`.toUpperCase();

  document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezados,

Encaminhamos, para conhecimento e análise, o processo judicial nº ${processo}, referente à cliente ${formatarTextoPadrao(cliente)} conta contrato ${conta}, entregue na agência de ${formatarTextoPadrao(agencia)} na data de ${data} às ${hora}.

Permanecemos à disposição para quaisquer esclarecimentos adicionais.`;

  return;
}

  if (emailTipoSelecionado === "poda") {
    const numero = document.getElementById("email_numero")?.value.trim() || "";
    const solicitante = document.getElementById("email_solicitante")?.value.trim() || "";
    const conta = document.getElementById("email_conta")?.value.trim() || "";
    const telefone = document.getElementById("email_telefone")?.value.trim() || "";
    const email = document.getElementById("email_email")?.value.trim() || "";

    const rua = document.getElementById("email_rua")?.value.trim() || "";
    const numeroEndereco = document.getElementById("email_numero_endereco")?.value.trim() || "";
    const complemento = document.getElementById("email_complemento")?.value.trim() || "";
    const bairro = document.getElementById("email_bairro")?.value.trim() || "";
    const cidade = document.getElementById("email_cidade")?.value.trim() || "";

    const endereco = `${rua}, Nº ${numeroEndereco}${complemento ? ", " + complemento : ""}, Bairro: ${bairro}, Cidade: ${cidade}`;
    const hoje = new Date().toLocaleDateString("pt-BR");

    document.getElementById("emailTo").value =
      "vanessa.maia@equatorialenergia.com.br; jerlison.tavares@equatorialenergia.com.br; jose.junior1@equatorialenergia.com.br";

    document.getElementById("emailCc").value =
      "paola.moreira@equatorialenergia.com.br; lana.gomes@equatorialenergia.com.br; nayra.pinto@equatorialenergia.com.br; gilliard.vaz@equatorialenergia.com.br; juliana.lima@equatorialenergia.com.br; tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; aline.riker@equatorialenergia.com.br; kleberton.cruz@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br;  carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br; amanda.regina@cgbengenharia.com.br; marlisson.jean@cgbengenharia.com.br; marciele.barbosa@cgbengenharia.com.br;";

    document.getElementById("emailSubject").value =
      `SOLICITAÇÃO PODA DE ÁRVORE Nº ${numero} - CONTA CONTRATO: ${conta} – ${cidade}`.toUpperCase();

    document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezados,

Segue solicitação poda de árvore entregue hoje ${hoje} na agência Santarém, cliente está ciente que será realizado a comunicação ao mesmo em até 20 dias, para informar data prevista para atendimento da sua solicitação.

Solicitante: ${solicitante}
Telefone: ${telefone}
Endereço: ${endereco}
E-mail: ${email}`;

    return;
  }
  if (emailTipoSelecionado === "cancelarDesligamentoTrocaProcedente") {
    const notas = Array.from(document.querySelectorAll(".nota-desligamento-input"))
      .map(input => input.value.trim())
      .filter(valor => valor !== "");

    const notasFormatadas = notas.join("\n");

    document.getElementById("emailTo").value =
      "aline.riker@equatorialenergia.com.br";

    document.getElementById("emailCc").value =
      "tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; kleberton.cruz@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br; carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br; juliana.lima@equatorialenergia.com.br; amanda.regina@cgbengenharia.com.br; marlisson.jean@cgbengenharia.com.br; marciele.barbosa@cgbengenharia.com.br;";

    document.getElementById("emailSubject").value =
      "PRIORIDADE - CANCELAMENTO DE DESLIGAMENTO";

    document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezada Aline,

Solicito seu apoio para cancelamento da nota de desligamento, considerando a existência de nota de troca de titularidade procedente para a mesma unidade consumidora.

Nota de desligamento:
${notasFormatadas}

A supervisão da agência segue em cópia, ciente e de acordo com a solicitação.

Permaneço à disposição para quaisquer esclarecimentos adicionais.`;

    return;
  }

if (emailTipoSelecionado === "oficioCliente") {

  const parceiro = document.getElementById("email_nome_parceiro")?.value.trim() || "";
  const agencia = document.getElementById("email_agencia")?.value || "";
  const possuiConta = document.getElementById("email_possui_conta")?.value || "";
  const conta = document.getElementById("email_conta")?.value.trim() || "";
  const possuiNota = document.getElementById("email_possui_nota")?.value || "";
  const nota = document.getElementById("email_nota")?.value.trim() || "";

  const linhaConta = possuiConta === "sim" && conta
    ? `\nConta contrato: ${conta}`
    : "";

  const linhaNota = possuiNota === "sim" && nota
    ? `\nNota: ${nota}`
    : "";

  const assuntoConta = possuiConta === "sim" && conta
    ? ` - CONTA CONTRATO: ${conta}`
    : "";

  document.getElementById("emailTo").value =
    "aline.riker@equatorialenergia.com.br;";

  document.getElementById("emailCc").value =
    "tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; kleberton.cruz@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br;  carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br; juliana.lima@equatorialenergia.com.br; gilliard.vaz@equatorialenergia.com.br; amanda.regina@cgbengenharia.com.br; marlisson.jean@cgbengenharia.com.br; marciele.barbosa@cgbengenharia.com.br;";

  document.getElementById("emailSubject").value =
    `OFÍCIO - CLIENTE: ${parceiro}${assuntoConta} - AGÊNCIA ${formatarTextoPadrao(agencia)}`.toUpperCase();

  document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezada Aline,

Encaminhamos, para conhecimento e tratativa, o ofício entregue na agência de ${formatarTextoPadrao(agencia)}, conforme documento anexo.
${linhaConta}${linhaNota}

Permanecemos à disposição para quaisquer esclarecimentos adicionais.`;

  return;
}

if (emailTipoSelecionado === "processarTrocaProcedente") {

  const notas = Array.from(document.querySelectorAll(".nota-troca-input"))
    .map(input => input.value.trim())
    .filter(valor => valor !== "");

  const notasFormatadas = notas.join("\n");

  document.getElementById("emailTo").value =
    "claudianne.oliveira@equatorialservicos.com.br";

  document.getElementById("emailCc").value =
    "tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; kleberton.cruz@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br;  carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br; juliana.lima@equatorialenergia.com.br; aline.riker@equatorialenergia.com.br; rodrigo.machado@equatorialservicos.com.br; amanda.regina@cgbengenharia.com.br; marlisson.jean@cgbengenharia.com.br; marciele.barbosa@cgbengenharia.com.br;";

  document.getElementById("emailSubject").value =
    "EQTL PA - PROCESSAMENTO DE TROCA DE TITULARIDADE - REGIONAL OESTE";

  document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezada Claudianne,

Solicito seu apoio no processamento da(s) troca(s) de titularidade, considerando a procedência da(s) solicitação(ões), conforme dados abaixo:

Nota(s) de troca de titularidade:
${notasFormatadas}

A supervisão da agência, Kleberton Viana, segue em cópia, ciente e de acordo com a solicitação.

Permaneço à disposição para quaisquer esclarecimentos adicionais.`;

  return;
}

  if (emailTipoSelecionado === "furtoTrafoQueimado") {
    const ocorrencia = document.getElementById("email_ocorrencia")?.value || "";
    const conta = document.getElementById("email_conta")?.value.trim() || "";
    const nota = document.getElementById("email_nota")?.value.trim() || "";
    const cidade = document.getElementById("email_cidade")?.value.trim() || "";

    const tituloOcorrencia = ocorrencia === "furto"
      ? "FURTO DE TRANSFORMADOR"
      : "TRAFO QUEIMADO";

    document.getElementById("emailTo").value =
      "maria.santos.silva@equatorialenergia.com.br";

    document.getElementById("emailCc").value =
      "e.silva@equatorialenergia.com.br; pedro.souza@equatorialenergia.com.br; tiago.lauriano@equatorialenergia.com.br; aldelino.silva@equatorialenergia.com.br; edmilson.junior@equatorialenergia.com.br; gilliard.vaz@equatorialenergia.com.br; aline.riker@equatorialenergia.com.br; juliana.lima@equatorialenergia.com.br; tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; kleberton.cruz@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br;  carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br; amanda.regina@cgbengenharia.com.br; marlisson.jean@cgbengenharia.com.br; marciele.barbosa@cgbengenharia.com.br;";

    document.getElementById("emailSubject").value =
      `${tituloOcorrencia} - CONTA CONTRATO: ${conta} - ${cidade}`.toUpperCase();

    if (ocorrencia === "furto") {
      document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezados,

Encaminhamos para conhecimento e devidas providências a ocorrência de furto de transformador, informada por cliente que compareceu à agência de atendimento em Santarém, conforme boletim de ocorrência apresentado e em anexo.

Segue dados para análise:

Conta contrato: ${conta}
Nota: ${nota}
Cidade: ${cidade}

A supervisão da agência, Kleberton Viana, encontra-se em cópia para acompanhamento e apoio, caso necessário.`;
    } else {
      document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezados,

Encaminhamos para conhecimento e devidas providências a ocorrência de TRAFO queimado, informada por cliente que compareceu à agência de atendimento em Santarém.

Segue dados para análise:

Conta contrato: ${conta}
Nota: ${nota}
Cidade: ${cidade}

A supervisão da agência, Kleberton Viana, encontra-se em cópia para acompanhamento e apoio, caso necessário.`;
    }

    return;
  }

if (emailTipoSelecionado === "plptRemotoMla") {
  const cliente = formatarNomeProprio(document.getElementById("email_cliente")?.value.trim() || "");
  const cpf = document.getElementById("email_cpf")?.value.trim() || "";
  const comunidade = document.getElementById("email_comunidade")?.value.trim() || "";
  const cidade = formatarNomeProprio(document.getElementById("email_cidade")?.value.trim() || "");

  document.getElementById("emailTo").value =
    "eduardo.ribeiro@cgbengenharia.com.br";

  document.getElementById("emailCc").value =
    "tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; kleberton.cruz@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br; carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br; amanda.regina@cgbengenharia.com.br; marlisson.jean@cgbengenharia.com.br; marciele.barbosa@cgbengenharia.com.br;";

  document.getElementById("emailSubject").value =
    "SOLICITAÇÃO DE CADASTRO PLPT REMOTO (MLA) NO SISTEMA SAP";

  document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezado Eduardo,

Cliente compareceu à agência de atendimento presencial em busca de informações relacionadas às suas faturas. Em análise, identificamos que o mesmo é atendido pelo programa PLPT Remoto (MLA), contudo, o cadastro ainda não se encontra efetivado no sistema SAP.

Diante disso, solicito vosso apoio na realização do devido cadastro, conforme informações abaixo:

Nome do Parceiro: ${cliente}
CPF: ${cpf}
Comunidade: ${comunidade}
Cidade: ${cidade}

A supervisão da agência, na pessoa do Sr. Kleberton Viana, ora copiado, permanece à disposição para suporte e informações adicionais.`;

  return;
}

  if (emailTipoSelecionado === "conexaoMla") {
    const comunidade = document.getElementById("email_comunidade")?.value.trim() || "";
    const cliente = document.getElementById("email_cliente")?.value.trim() || "";
    const telefone = document.getElementById("email_telefone")?.value.trim() || "";
    const email = document.getElementById("email_email")?.value.trim() || "";

    document.getElementById("emailTo").value =
      "geraldo.silva@equatorialenergia.com.br; yuri.souza@equatorialenergia.com.br; matheus.c.soares@equatorialenergia.com.br";

    document.getElementById("emailCc").value =
      "juliana.lima@equatorialenergia.com.br; aline.riker@equatorialenergia.com.br; suzane.oliveira@equatorialenergia.com.br; nayra.pinto@equatorialenergia.com.br; gilliard.vaz@equatorialenergia.com.br; miriam.godinho@equatorialenergia.com.br; meciano.evaristo@equatorialenergia.com.br; carlindo.junior@equatorialenergia.com.br; tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; kleberton.cruz@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br;  carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br; amanda.regina@cgbengenharia.com.br; marlisson.jean@cgbengenharia.com.br; marciele.barbosa@cgbengenharia.com.br;";

    document.getElementById("emailSubject").value =
      `SOLICITAÇÃO DE ADESÃO – PROJETO PLPT REMOTO – ${comunidade}`.toUpperCase();

    document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezados,

Encaminhamos, para conhecimento e análise, o ofício entregue na agência de Santarém da ${comunidade}, referente à solicitação de adesão ao Projeto PLPT Remoto, conforme documento anexo.

Segue dados do solicitante:

Nome: ${formatarTextoPadrao(cliente)}
Telefone para retorno: ${telefone}
E-mail para retorno: ${email}

Permanecemos à disposição para quaisquer esclarecimentos adicionais.`;

    return;
  }

  if (emailTipoSelecionado === "oficioAssociacaoMoradores") {
    const associacao = document.getElementById("email_associacao")?.value.trim() || "";
    const solicitante = document.getElementById("email_solicitante")?.value.trim() || "";
    const telefone = document.getElementById("email_telefone")?.value.trim() || "";
    const email = document.getElementById("email_email")?.value.trim() || "";

    const nomeUpper = associacao.toUpperCase();

    let preposicao = "DA";

    if (nomeUpper.startsWith("BAIRRO")) {
      preposicao = "DO";
    } else if (nomeUpper.startsWith("COMUNIDADE")) {
      preposicao = "DA";
    }

    document.getElementById("emailTo").value =
      "aline.riker@equatorialenergia.com.br";

    document.getElementById("emailCc").value =
      "nayra.pinto@equatorialenergia.com.br; gilliard.vaz@equatorialenergia.com.br; miriam.godinho@equatorialenergia.com.br; juliana.lima@equatorialenergia.com.br; carlindo.junior@equatorialenergia.com.br; suzane.oliveira@equatorialenergia.com.br; meciano.evaristo@equatorialenergia.com.br; tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; kleberton.cruz@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br; carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br; amanda.regina@cgbengenharia.com.br; marlisson.jean@cgbengenharia.com.br; marciele.barbosa@cgbengenharia.com.br;";

    document.getElementById("emailSubject").value =
      `OFICIO - ASSOCIAÇÃO DE MORADORES ${preposicao} ${associacao}`.toUpperCase();

    document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezados (as),

Segue oficio entregue na agência de Santarém ${preposicao.toLowerCase()} ${associacao}, conforme anexo,

Solicitante: ${solicitante}
Telefone de retorno: ${telefone}
E-mail de retorno: ${email}`;

    return;
  }

  if (emailTipoSelecionado === "estornoTrocaTitularidadeFaturas") {
    const motivo = document.getElementById("email_motivo")?.value.trim() || "";
    const conta = document.getElementById("email_conta")?.value.trim() || "";
    const instalacao = document.getElementById("email_instalacao")?.value.trim() || "";
    const titularAtual = document.getElementById("email_titular_atual")?.value.trim() || "";
    const parceiroAtual = document.getElementById("email_parceiro_atual")?.value.trim() || "";
    const titularAnterior = document.getElementById("email_titular_anterior")?.value.trim() || "";
    const parceiroAnterior = document.getElementById("email_parceiro_anterior")?.value.trim() || "";

    const referencias = document.querySelectorAll(".email_fatura_estorno_referencia");
    const valores = document.querySelectorAll(".email_fatura_estorno_valor");

    let faturasTexto = "";

    referencias.forEach((ref, index) => {
      const referencia = ref.value.trim();
      const valor = valores[index]?.value.trim() || "";

      if (referencia || valor) {
        faturasTexto += `${referencia} – ${valor}\n`;
      }
    });

    document.getElementById("emailTo").value =
      "kleberton.cruz@cgbengenharia.com.br";

    document.getElementById("emailCc").value =
      "tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br; carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br; amanda.regina@cgbengenharia.com.br; marlisson.jean@cgbengenharia.com.br; marciele.barbosa@cgbengenharia.com.br;";

    document.getElementById("emailSubject").value =
      "EQTL PA - ESTORNO DE TROCA DE TITULARIDADE COM FATURA - REGIONAL OESTE";

    document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezado Kleberton,

Solicito seu apoio para solicitação de estorno de troca de titularidade com faturas, conforme dados abaixo:

Motivo: ${motivo}

Dados da unidade consumidora:
Conta contrato atual: ${conta}
Instalação: ${instalacao}

Titular atual:
Nome: ${titularAtual}
Parceiro do atual titular: ${parceiroAtual}

Titular anterior:
Nome: ${titularAnterior}
Parceiro do titular anterior: ${parceiroAnterior}

Faturas em aberto:
${faturasTexto}

Permaneço à disposição para quaisquer esclarecimentos adicionais.`;

    return;
  }

  if (emailTipoSelecionado === "transferenciaTrocaTitularidadeFaturas") {
    const motivo = document.getElementById("email_motivo")?.value.trim() || "";
    const conta = document.getElementById("email_conta")?.value.trim() || "";
    const instalacao = document.getElementById("email_instalacao")?.value.trim() || "";
    const titularAtual = document.getElementById("email_titular_atual")?.value.trim() || "";
    const parceiroAtual = document.getElementById("email_parceiro_atual")?.value.trim() || "";
    const novoTitular = document.getElementById("email_novo_titular")?.value.trim() || "";
    const parceiroNovo = document.getElementById("email_parceiro_novo")?.value.trim() || "";

    const referencias = document.querySelectorAll(".email_fatura_referencia");
    const valores = document.querySelectorAll(".email_fatura_valor");

    let faturasTexto = "";

    referencias.forEach((ref, index) => {
      const referencia = ref.value.trim();
      const valor = valores[index]?.value.trim() || "";

      if (referencia || valor) {
        faturasTexto += `${referencia} – ${valor}\n`;
      }
    });

    document.getElementById("emailTo").value =
      "kleberton.cruz@cgbengenharia.com.br";

    document.getElementById("emailCc").value =
      "tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br;  carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br; amanda.regina@cgbengenharia.com.br; marlisson.jean@cgbengenharia.com.br; marciele.barbosa@cgbengenharia.com.br;";

    document.getElementById("emailSubject").value =
      "EQTL PA - TRANSFERÊNCIA DE TROCA DE TITULARIDADE E FATURA - REGIONAL OESTE";

    document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezado Kleberton,

Solicito seu apoio para solicitação de troca de titularidade com transferência de faturas, conforme dados abaixo:

Motivo: ${motivo}

Dados da unidade consumidora:
Conta contrato atual: ${conta}
Instalação: ${instalacao}

Titular atual:
Nome: ${titularAtual}
Parceiro do atual titular: ${parceiroAtual}

Novo titular:
Nome: ${novoTitular}
Parceiro do novo titular: ${parceiroNovo}

Faturas em aberto:
${faturasTexto}

Permaneço à disposição para quaisquer esclarecimentos adicionais.`;

    return;
  }

  if (emailTipoSelecionado === "retiradaNegativacao") {
    const nome = document.getElementById("email_nome")?.value.trim() || "";
    const documento = document.getElementById("email_documento")?.value.trim() || "";
    const conta = document.getElementById("email_conta")?.value.trim() || "";

    document.getElementById("emailTo").value =
      "claudianna.gomes@equatorialenergia.com.br";

    document.getElementById("emailCc").value =
      "tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; kleberton.cruz@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br;  carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br; amanda.regina@cgbengenharia.com.br; marlisson.jean@cgbengenharia.com.br; marciele.barbosa@cgbengenharia.com.br;";

    document.getElementById("emailSubject").value =
      `SOLICITAÇÃO DE RETIRADA DE NEGATIVAÇÃO - CPF: ${documento} - CONTA CONTRATO: ${conta}`;

    document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezada Claudiana,

Solicito seu apoio na análise e retirada de negativação, conforme dados abaixo.
Ressalto que o cliente apresentou evidência de negativação junto à Serasa, conforme documento anexo.

Nome: ${nome}
CPF/CNPJ: ${documento}
Conta contrato: ${conta}

Permaneço à disposição para quaisquer esclarecimentos adicionais.`;

    return;
  }

  if (emailTipoSelecionado === "oficioPoderPublico") {
  const orgao = document.getElementById("email_orgao")?.value || "";
  const numero = document.getElementById("email_numero_oficio")?.value.trim() || "";
  const nome = document.getElementById("email_nome_oficio")?.value.trim() || "";
  const telefone = document.getElementById("email_telefone")?.value.trim() || "";
  const email = document.getElementById("email_email")?.value.trim() || "";
  const agencia = document.getElementById("email_agencia")?.value || "";
  const cidade = document.getElementById("email_cidade_oficio")?.value || "";
  const solicitante = document.getElementById("email_solicitante")?.value.trim() || "";

  const copiaBase =
    "tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; kleberton.cruz@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br;  carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br; juliana.lima@equatorialenergia.com.br; aline.riker@equatorialenergia.com.br; nayra.pinto@equatorialenergia.com.br; gilliard.vaz@equatorialenergia.com.br; miriam.godinho@equatorialenergia.com.br; meciano.evaristo@equatorialenergia.com.br; amanda.regina@cgbengenharia.com.br; marlisson.jean@cgbengenharia.com.br; marciele.barbosa@cgbengenharia.com.br;";

  function aplicarRoteamentoPorCidade(cidadeSelecionada) {
    const grupoSuzane = ["SANTARÉM E REGIÃO", "SANTARÉM", "MOJUÍ DOS CAMPOS", "BELTERRA"];
    const grupoCarlindo = ["ORIXIMINÁ", "ÓBIDOS", "MONTE ALEGRE", "ALENQUER", "JURUTI"];
    const grupoLeydiane = ["ITAITUBA E REGIÃO", "ITAITUBA", "NOVO PROGRESSO", "RURÓPOLIS"];

    if (grupoSuzane.includes(cidadeSelecionada)) {
      document.getElementById("emailTo").value =
        "suzane.oliveira@equatorialenergia.com.br;";

      document.getElementById("emailCc").value =
        `${copiaBase} carlindo.junior@equatorialenergia.com.br; leydiane.fernandes@equatorialenergia.com.br; sandra.hermes@equatorialenergia.com.br; paulo.l.silva@equatorialenergia.com.br;`;
    }

    if (grupoCarlindo.includes(cidadeSelecionada)) {
      document.getElementById("emailTo").value =
        "carlindo.junior@equatorialenergia.com.br;";

      document.getElementById("emailCc").value =
        `${copiaBase} suzane.oliveira@equatorialenergia.com.br; leydiane.fernandes@equatorialenergia.com.br; sandra.hermes@equatorialenergia.com.br; paulo.l.silva@equatorialenergia.com.br;`;
    }

    if (grupoLeydiane.includes(cidadeSelecionada)) {
      document.getElementById("emailTo").value =
        "leydiane.fernandes@equatorialenergia.com.br;";

      document.getElementById("emailCc").value =
        `${copiaBase} suzane.oliveira@equatorialenergia.com.br; carlindo.junior@equatorialenergia.com.br; sandra.hermes@equatorialenergia.com.br; paulo.l.silva@equatorialenergia.com.br;`;
    }
  }

  if (orgao === "prefeitura") {
    aplicarRoteamentoPorCidade(cidade);

    document.getElementById("emailSubject").value =
      `OFÍCIO ${numero} - PREFEITURA MUNICIPAL DE ${formatarTextoPadrao(cidade)} - AGÊNCIA ${formatarTextoPadrao(agencia)}`.toUpperCase();

    document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezados,

Encaminhamos, para conhecimento, o ofício entregue na agência de ${formatarTextoPadrao(agencia)}, oriundo da Prefeitura Municipal de ${formatarTextoPadrao(cidade)}, conforme documento anexo.

Solicitante: ${solicitante}
Telefone para retorno: ${telefone}
E-mail para retorno: ${email}`;

    return;
  }

  if (orgao === "camara") {
    aplicarRoteamentoPorCidade(cidade);

    document.getElementById("emailSubject").value =
      `OFÍCIO ${numero} - CÂMARA DE VEREADORES DE ${formatarTextoPadrao(cidade)} - AGÊNCIA ${formatarTextoPadrao(agencia)}`.toUpperCase();

    document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezados,

Encaminhamos, para conhecimento, o ofício entregue na agência de ${formatarTextoPadrao(agencia)}, oriundo da Câmara de Vereadores de ${formatarTextoPadrao(cidade)}, conforme documento anexo.

Solicitante: ${solicitante}
Telefone para retorno: ${telefone}
E-mail para retorno: ${email}`;

    return;
  }

  if (orgao === "orgaosGerais") {
    document.getElementById("emailTo").value =
      "oficiospa@equatorialenergia.com.br; oficio.backoffice@olmadv.com.br;";

    document.getElementById("emailCc").value =
      `${copiaBase} suzane.oliveira@equatorialenergia.com.br; carlindo.junior@equatorialenergia.com.br; leydiane.fernandes@equatorialenergia.com.br; sandra.hermes@equatorialenergia.com.br; paulo.l.silva@equatorialenergia.com.br;`;

    document.getElementById("emailSubject").value =
      `OFÍCIO N° ${numero} - ${nome} - AGÊNCIA ${formatarTextoPadrao(agencia)}`.toUpperCase();

    document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezados,

Encaminhamos, para conhecimento, o Ofício nº ${numero} – ${nome}, entregue na agência de ${formatarTextoPadrao(agencia)}, conforme documento anexo.

Segue contato para retorno:
Telefone: ${telefone}
E-mail: ${email}`;

    return;
  }
}

  if (emailTipoSelecionado === "cadastroLogradouro") {
    document.getElementById("emailTo").value =
      "laura.lima@dinamo.srv.br; vinicius.costa@dinamo.srv.br";

    document.getElementById("emailCc").value =
      "rosiane.ferreira@equatorialenergia.com.br; tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; kleberton.cruz@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br; carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br; amanda.regina@cgbengenharia.com.br; marlisson.jean@cgbengenharia.com.br; marciele.barbosa@cgbengenharia.com.br;";

    document.getElementById("emailSubject").value =
      "EQTL PA - SOLICITAÇÃO DE CADASTRO DE LOGRADOURO - REGIONAL OESTE";

    document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezados(as),

Solicito o cadastro de logradouro no sistema SAP CRM, conforme dados informados na planilha em anexo.

Permaneço à disposição para quaisquer dúvidas ou esclarecimentos.`;

    return;
  }

  if (emailTipoSelecionado === "cartaAnuencia") {
    const titular = document.getElementById("email_titular")?.value.trim() || "";
    const documento = document.getElementById("email_documento")?.value.trim() || "";
    const conta = document.getElementById("email_conta")?.value.trim() || "";

    document.getElementById("emailTo").value =
      "s_protesto@equatorialenergia.com.br";

    document.getElementById("emailCc").value =
      "ISRAEL.SOUSA@EQUATORIALENERGIA.COM.BR; gilliard.vaz@equatorialenergia.com.br; aline.riker@equatorialenergia.com.br; juliana.lima@equatorialenergia.com.br; tulia.lopes@cgbengenharia.com.br; carlos.almeida@cgbengenharia.com.br; kleberton.cruz@cgbengenharia.com.br; eveline.gato@cgbengenharia.com.br; marliane.santos@cgbengenharia.com.br; adilson.coelho@cgbengenharia.com.br; julyanne.rodrigues@cgbengenharia.com.br; luana.caires@cgbengenharia.com.br; ana.lopes@cgbengenharia.com.br;  carolina.silva@cgbengenharia.com.br; marciele.ferreira@cgbengenharia.com.br; abel.tabosa@cgbengenharia.com.br; amanda.regina@cgbengenharia.com.br; marlisson.jean@cgbengenharia.com.br; marciele.barbosa@cgbengenharia.com.br;";

    document.getElementById("emailSubject").value =
      `EQTL PA - SOLICITAÇÃO DE CARTA DE ANUÊNCIA - CONTA CONTRATO: ${conta} - REGIONAL OESTE`;

    document.getElementById("emailBody").value =
`${saudacaoHorario()}

Prezados,

Solicito a liberação da carta de anuência, tendo em vista que o débito intimado já se encontra com status PROTESTADO, bem como devidamente arrecadado no sistema SAP.

Segue dados para análise:

Titular: ${titular}
Conta contrato: ${conta}
CPF/CNPJ: ${documento}
Distribuidora: Pará

Permanecemos à disposição para quaisquer esclarecimentos adicionais.`;

    return;
  }

});


// ================= COPIAR EMAIL =================

document.querySelectorAll("[data-copy-target]").forEach(btn => {
  btn.addEventListener("click", async () => {
    const id = btn.getAttribute("data-copy-target");
    const campo = document.getElementById(id);

    if (!campo || !campo.value.trim()) return;

    await navigator.clipboard.writeText(campo.value);

    btn.classList.add("copied");
    btn.innerHTML = `<i class="fa-solid fa-check"></i> Copiado!`;

    setTimeout(() => {
      btn.classList.remove("copied");
      btn.innerHTML = `Copiar`;
    }, 2000);
  });
});