import { Card, CardHeader, CardTitle, CardContent } from '@/ui/Card'
import { Input } from '@/ui/Input'
import { Button } from '@/ui/Button'
import { Checkbox } from '@/ui/Checkbox'

export function AuthDemo() {
  return (
    <div className="space-y-10 max-w-md mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Auth Pages</h1>
        <p className="text-organic-muted mt-1 text-sm">Login, register, and forgot password flows</p>
      </div>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <p className="text-sm text-organic-muted mt-1">Enter your credentials</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input label="Email" type="email" placeholder="you@company.com" aria-label="Email" />
          <Input label="Password" type="password" placeholder="••••••••" aria-label="Password" />
          <div className="flex items-center justify-between">
            <Checkbox id="remember" label="Remember me" />
            <a href="#forgot" className="text-sm text-organic-sage hover:underline">Forgot password?</a>
          </div>
          <Button fullWidth>Sign in</Button>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardContent className="pt-6">
          <p className="text-sm text-organic-muted text-center">
            Don’t have an account? <a href="#register" className="text-organic-sage hover:underline">Register</a>
          </p>
        </CardContent>
      </Card>

      <section id="register" className="scroll-mt-8">
        <h2 className="text-lg font-semibold text-organic-ink border-b border-organic-border pb-2 mb-4">Register</h2>
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Create account</CardTitle>
            <p className="text-sm text-organic-muted mt-1">Sign up with your email</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input label="Full name" type="text" placeholder="Your name" aria-label="Full name" />
            <Input label="Email" type="email" placeholder="you@company.com" aria-label="Email" />
            <Input label="Password" type="password" placeholder="••••••••" aria-label="Password" />
            <Input label="Confirm password" type="password" placeholder="••••••••" aria-label="Confirm password" />
            <Checkbox id="terms" label="I agree to the terms and conditions" />
            <Button fullWidth variant="primary">Create account</Button>
          </CardContent>
        </Card>
      </section>

      <section id="forgot" className="scroll-mt-8">
        <h2 className="text-lg font-semibold text-organic-ink border-b border-organic-border pb-2 mb-4">Forgot password</h2>
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Reset password</CardTitle>
            <p className="text-sm text-organic-muted mt-1">Enter your email to receive a reset link</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input label="Email" type="email" placeholder="you@company.com" aria-label="Email" />
            <Button fullWidth>Send reset link</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
