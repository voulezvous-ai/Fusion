export class AISDK {
  async query(prompt: string) {
    try {
      const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
        body: JSON.stringify({ prompt }),
      });
      return await response.json();
    } catch (error) {
      console.error('Fallback to Gemini');
      return await fetch('https://api.gemini.com/generate', {
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.GEMINI_API_KEY}` },
        body: JSON.stringify({ prompt }),
      });
    }
  }
}