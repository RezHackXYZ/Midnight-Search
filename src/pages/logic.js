import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: localStorage.getItem("geminiApiKey") });

export async function search(query) {
	const response = await ai.models.generateContent({
		model: "gemini-2.0-flash-lite",
		contents: query,
	});
	alert(response.text);
}

//gemini-2.0-flash-lite
