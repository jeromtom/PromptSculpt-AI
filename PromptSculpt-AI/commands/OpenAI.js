import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "You are smart mechanical CAD engineer, using the engineering briefs, comprehend and extract relavant information like the dimensions, value, and unit to output JSON containing the expression/variable name, the value/variable and the dimension. Example Prompt: Make a cube of side length 10 cm. Expected Response(JSON object): {side-length : 10 cm}",
            },
            { role: "user", content: "Sculpt a cube of side 15 cm." },
        ],
        model: "gpt-3.5-turbo-1106",
        response_format: { type: "json_object" },
    });
    console.log(completion.choices[0].message.content);
}

main();