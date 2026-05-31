import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { portfolioData } from '@/data/portfolioData';

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  : null;

const getMockResponse = (message: string, language: string): string => {
  const lowerMessage = message.toLowerCase();

  if (language === 'ar') {
    if (lowerMessage.includes('مهارة') || lowerMessage.includes('skill')) {
      return `مرحباً! أنا متخصص في:\n\n**الواجهات الأمامية:**\n${portfolioData.skillsCategories.frontend.slice(0, 5).join(', ')}\n\n**الواجهات الخلفية:**\n${portfolioData.skillsCategories.backend.slice(0, 5).join(', ')}\n\n**قواعد البيانات:**\n${portfolioData.skillsCategories.database.join(', ')}`;
    } else if (
      lowerMessage.includes('مشروع') ||
      lowerMessage.includes('project')
    ) {
      return `لقد طورت عدة مشاريع رائعة:\n\n${portfolioData.projects
        .slice(0, 3)
        .map(
          (p) =>
            `📌 **${p.title_ar || p.title}**: ${p.description_ar || p.description}`,
        )
        .join('\n\n')}`;
    } else if (
      lowerMessage.includes('تجربة') ||
      lowerMessage.includes('experience')
    ) {
      return `خبرتي المهنية:\n\n${portfolioData.experience
        .slice(0, 3)
        .map(
          (e) =>
            `🏢 **${e.role_ar || e.role}** في ${e.company_ar || e.company}\n${e.duration}\n${e.desc_ar || e.desc}`,
        )
        .join('\n\n')}`;
    } else if (
      lowerMessage.includes('خدمة') ||
      lowerMessage.includes('service')
    ) {
      return `الخدمات التي أقدمها:\n\n${portfolioData.services.map((s) => `✨ **${s.title_ar || s.title}**\n${s.desc_ar || s.desc}`).join('\n\n')}`;
    }
    return `شكراً على سؤالك! أنا أحمد خالد كمال، مطور Full Stack متخصص في بناء تطبيقات ويب حديثة. يمكنك أن تسأل عن مهاراتي أو مشاريعي أو خبرتي المهنية أو الخدمات التي أقدمها.`;
  } else {
    if (lowerMessage.includes('skill')) {
      return `Hello! I specialize in:\n\n**Frontend Skills:**\n${portfolioData.skillsCategories.frontend.slice(0, 5).join(', ')}\n\n**Backend Skills:**\n${portfolioData.skillsCategories.backend.slice(0, 5).join(', ')}\n\n**Database:**\n${portfolioData.skillsCategories.database.join(', ')}`;
    } else if (lowerMessage.includes('project')) {
      return `Here are some of my recent projects:\n\n${portfolioData.projects
        .slice(0, 3)
        .map((p) => `📌 **${p.title}**: ${p.description}`)
        .join('\n\n')}`;
    } else if (lowerMessage.includes('experience')) {
      return `My professional experience:\n\n${portfolioData.experience
        .slice(0, 3)
        .map(
          (e) => `🏢 **${e.role}** at ${e.company}\n${e.duration}\n${e.desc}`,
        )
        .join('\n\n')}`;
    } else if (lowerMessage.includes('service')) {
      return `Services I offer:\n\n${portfolioData.services.map((s) => `✨ **${s.title}**\n${s.desc}`).join('\n\n')}`;
    }
    return `Hi! I'm Ahmed Khalid Kamal, a Full Stack Developer specializing in building modern web applications. Feel free to ask me about my skills, projects, experience, or services!`;
  }
};

const systemPrompt = `You are Ahmed Khalid Kamal's professional AI assistant. You help visitors learn about his skills, experience, projects, and services based on his portfolio data.

Portfolio Information:
- Name: ${portfolioData.profile.name}
- Roles: ${portfolioData.profile.roles.join(', ')}
- Bio: ${portfolioData.profile.bio}
- Experience: ${portfolioData.profile.experienceYears}
- Completed Projects: ${portfolioData.profile.completedProjects}

Education:
${portfolioData.education.map((edu) => `- ${edu.degree}: ${edu.major} (${edu.duration})`).join('\n')}

Experience:
${portfolioData.experience.map((exp) => `- ${exp.role} at ${exp.company} (${exp.duration}): ${exp.desc}`).join('\n')}

Skills:
- Frontend: ${portfolioData.skillsCategories.frontend.join(', ')}
- Backend: ${portfolioData.skillsCategories.backend.join(', ')}
- Database: ${portfolioData.skillsCategories.database.join(', ')}
- Tools: ${portfolioData.skillsCategories.tools.join(', ')}

Services:
${portfolioData.services.map((s) => `- ${s.title}: ${s.desc}`).join('\n')}

Projects:
${portfolioData.projects.map((p) => `- ${p.title} (${p.category}): ${p.longDescription}`).join('\n')}

Rules:
1. Answer questions about Ahmed's skills, experience, projects, and services
2. Be professional and helpful
3. If asked something outside the portfolio scope, politely redirect to relevant portfolio info
4. Keep responses concise and clear
5. Be friendly and engaging
6. Always answer in the same language as the question (English or Arabic)`;

export async function POST(request: NextRequest) {
  try {
    const { message, language = 'en' } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 },
      );
    }

    // Use mock responses in development or if quota is exceeded
    const hasValidApiKey = process.env.OPENAI_API_KEY?.startsWith('sk-');

    try {
      if (!hasValidApiKey || !openai) {
        const reply = getMockResponse(message, language);
        return NextResponse.json({
          reply,
          success: true,
          mode: 'dev',
        });
      }

      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: systemPrompt,
          },
          {
            role: 'user',
            content: message,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      });

      const reply =
        response.choices[0].message.content || 'No response generated';

      return NextResponse.json({
        reply,
        success: true,
        mode: 'openai',
      });
    } catch (apiError: any) {
      // Fallback to mock response if API fails
      console.error('OpenAI API Error:', apiError?.message);
      const fallbackReply = getMockResponse(message, language);
      return NextResponse.json({
        reply: fallbackReply,
        success: true,
        mode: 'fallback',
      });
    }
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process message', details: String(error) },
      { status: 500 },
    );
  }
}
