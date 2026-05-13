import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.all('/proxy', async (req, res) => {
    const { url, method, data, headers } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        const response = await axios({
            method: method || 'GET',
            url: url,
            data: data,
            headers: {
                ...headers,
                // Avoid host mismatch issues
                'host': new URL(url).host
            },
            // Don't follow redirects automatically if you want to handle them, 
            // but for a simple proxy, default is usually fine.
            validateStatus: () => true, // Accept all status codes
        });

        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(500).json({
            error: 'Proxy request failed',
            message: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
