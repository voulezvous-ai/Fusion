import { z } from 'zod';

export const MCP_TOOLS = {
  sttTranscribe: {
    endpoint: "https://api.stt.com/v1",
    method: "POST",
    schema: z.object({ audio: z.string().base64() }),
  },
  paymentProcess: {
    endpoint: "https://api.payment.com/charge",
    method: "POST",
    schema: z.object({ amount: z.number().positive() }),
  },
};