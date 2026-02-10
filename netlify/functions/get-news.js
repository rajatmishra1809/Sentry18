export async function handler(event, context) {

    const API_KEY = process.env.GNEWS_API_KEY;

    const city = event.queryStringParameters.city;

    if (!city) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "City required" })
        };
    }

    const url = `https://gnews.io/api/v4/search?q="${city}" AND (crime OR violence OR safety)&lang=en&max=3&apikey=${API_KEY}`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };

    } catch (error) {

        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch news" })
        };

    }
}
