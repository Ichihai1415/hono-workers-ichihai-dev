/*Generate with Copilot*/

import { Context } from 'hono';
import { sha256 } from 'crypto-hash';

export const hashGenerator = async (c: Context) => {
	// /api/hash?t=x または bodyに { "t": "x" }  //"",無指定の場合
	const text = c.req.query('t') || (await c.req.json()).t;
	if (!text) {
		return c.json({ error: 'a parameter "text" must be specified.' }, 400);
	}
	const hash = await sha256(text);
	return c.json({ hash });
};
