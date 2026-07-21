import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

// Hardcoded context for RAG
const CONTEXT = `
You are an AI assistant for JSWS (Jamila Sultan Welfare Society). 
JSWS provides healthcare with compassion, hope, and humanity.
We have services like a laboratory, doctors, and volunteer opportunities.
Answer the user's questions based on this information.
If they ask something you don't know, kindly tell them to contact us directly.
`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const systemMessage = {
    role: 'system',
    content: CONTEXT
  };

  try {
    const result = streamText({
      model: google('gemini-2.5-flash'), // or gemini-1.5-flash depending on SDK version
      messages: [systemMessage, ...messages],
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Error in chat route:", error);
    return new Response('Error connecting to AI Provider. Please ensure GOOGLE_GENERATIVE_AI_API_KEY is set.', { status: 500 });
  }
}
