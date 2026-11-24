// Envio do diagnóstico por e-mail usando o Web3Forms (https://web3forms.com).
// A chave fica na variável PUBLIC_WEB3FORMS_KEY do arquivo .env — veja o README.
// Sem chave configurada, o envio é SIMULADO: o site continua funcionando

const ENDPOINT = 'https://api.web3forms.com/submit';
const PLACEHOLDER = 'INSIRA_A_CHAVE_DO_WEB3FORMS';

export interface DiagnosticAnswer {
  pergunta: string;
  resposta: string;
}

export interface DiagnosticPayload {
  nome: string;
  email: string;
  respostas: DiagnosticAnswer[];
  /** Idioma em que a pessoa respondeu (ex.: "English"). */
  idioma: string;
  /** Campo anti-spam: se vier marcado, o Web3Forms descarta o envio. */
  botcheck: boolean;
}

interface Web3FormsResponse {
  success: boolean;
  message?: string;
  body?: { message?: string };
}

const accessKey = (import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '').trim();

export const isWeb3FormsConfigured = accessKey !== '' && accessKey !== PLACEHOLDER;

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function sendDiagnostic(payload: DiagnosticPayload): Promise<void> {
  if (!isWeb3FormsConfigured) {
    console.warn(
      '[Bitzar] Web3Forms não configurado (PUBLIC_WEB3FORMS_KEY). Envio simulado — nenhum e-mail foi enviado.',
      payload,
    );
    await wait(600);
    return;
  }

  // Cada campo vira uma linha no e-mail que o Web3Forms envia.
  const answers = Object.fromEntries(payload.respostas.map((r) => [r.pergunta, r.resposta]));

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Novo diagnóstico pelo site — ${payload.nome}`,
      from_name: 'Site Bitzar',
      replyto: payload.email,
      Nome: payload.nome,
      'E-mail': payload.email,
      'Idioma do site': payload.idioma,
      ...answers,
      botcheck: payload.botcheck,
    }),
  });

  const result = (await response.json().catch(() => null)) as Web3FormsResponse | null;

  if (!response.ok || !result?.success) {
    const message = result?.body?.message ?? result?.message ?? `HTTP ${response.status}`;
    throw new Error(`Web3Forms: ${message}`);
  }
}