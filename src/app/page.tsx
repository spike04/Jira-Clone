import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <div className="p-8">
      <Input />
      <div className="p-4">
        <Button size="xs">Primary123</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="muted">Muted</Button>
        <Button variant="teritary">Teritary</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </div>
  )
}
