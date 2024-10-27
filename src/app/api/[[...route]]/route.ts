import { Hono } from 'hono'
import { handle } from 'hono/vercel'

const app = new Hono().basePath('/api')

app.get('/hello', async (c) => {
  return c.json({ msg: 'Hello World!' })
})

app.get('/project/:projectId', async (c) => {
  const { projectId } = c.req.param()
  return c.json({ project: projectId })
})

export const GET = handle(app)
export const POST = handle(app)
