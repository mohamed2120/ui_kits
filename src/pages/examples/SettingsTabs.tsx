import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/ui/Tabs'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/ui/Card'
import { Input } from '@/ui/Input'
import { Switch } from '@/ui/Switch'
import { Checkbox } from '@/ui/Checkbox'
import { Button } from '@/ui/Button'
import { Alert } from '@/ui/Alert'

export function SettingsTabs() {
  const [tab, setTab] = useState('profile')

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink">Settings</h1>
        <p className="text-organic-muted mt-1">Manage your account and preferences</p>
      </div>

      <Tabs value={tab} onValueChange={setTab}>
        <TabsList variant="pill">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Update your name and email</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input label="Display name" placeholder="Your name" defaultValue="Alice Chen" />
              <Input label="Email" type="email" placeholder="you@example.com" defaultValue="alice@example.com" />
              <Button>Save changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Choose how you receive updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-organic-ink">Email notifications</p>
                  <p className="text-sm text-organic-muted">Receive order and account emails</p>
                </div>
                <Switch label="" defaultChecked aria-label="Email notifications" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-organic-ink">Marketing emails</p>
                  <p className="text-sm text-organic-muted">Tips, offers, and product updates</p>
                </div>
                <Switch label="" aria-label="Marketing emails" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-organic-ink">Push notifications</p>
                  <p className="text-sm text-organic-muted">Browser and mobile push</p>
                </div>
                <Switch label="" defaultChecked aria-label="Push notifications" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>Password and two-factor authentication</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert variant="default" title="Tip">
                Use a strong, unique password and enable 2FA for better security.
              </Alert>
              <Input label="Current password" type="password" placeholder="••••••••" aria-label="Current password" />
              <Input label="New password" type="password" placeholder="••••••••" aria-label="New password" />
              <Input label="Confirm new password" type="password" placeholder="••••••••" aria-label="Confirm new password" />
              <Checkbox label="Enable two-factor authentication" />
              <Button>Update password</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
