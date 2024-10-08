import { Hono } from 'hono';

import { hashGenerator } from './api/hash';

const app = new Hono();

app.post('/api/hash', hashGenerator);
app.all('/api/hash', (c) => {
	return c.json({ error: 'Method not allowed' }, 405);
});

app.get('/', (c) => {
	const html = `
<!DOCTYPE html>
<html lang="ja-JP">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>hono.workers.ichihai.dev</title>
	</head>
	<body>
		<h1>hono.workers.ichihai.dev</h1>
		<p>
			HonoとCloudflare WorkersでWeb APIを作っているものです。
			<a href="https://zenn.dev/azukiazusa/articles/hono-cloudflare-workers-rest-api"
				>Hono + Cloudflare Workers で REST API を作ってみよう</a
			>
			を参考にしています。
		</p>
	</body>
</html>
    `;
	return c.html(html);
});

export default app;
