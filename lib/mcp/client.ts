import { MCP_TOOLS } from './tools';

export async function request(tool: keyof typeof MCP_TOOLS, data: unknown) {
  const { endpoint, schema } = MCP_TOOLS[tool];
  const validatedData = schema.parse(data); // Validating data with Zod
  return fetch(endpoint, { method: MCP_TOOLS[tool].method, body: JSON.stringify(validatedData) });
}