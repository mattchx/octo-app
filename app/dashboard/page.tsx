"use client"
// todo: look up if forms can be server components or not
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function CreatorForm() {
  const [links, setLinks] = useState([{ title: '', description: '', url: '' }])

  const handleLinkChange = (index, field, value) => {
    // const newLinks = [...links]
    // newLinks?[index][field] = value
    // setLinks(...newLinks)
  }

  const addLink = () => {
    setLinks([...links, { title: '', description: '', url: '' }])
  }

  const removeLink = (index) => {
    const newLinks = links.filter((_, i) => i !== index)
    setLinks(newLinks)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      name: e.target.name.value,
      bio: e.target.bio.value,
      avatarUrl: e.target.avatarUrl.value,
      links
    })
    // Here you would typically send this data to your backend or state management system
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Content Creator Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" name="bio" placeholder="Short bio or tagline" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="avatarUrl">Avatar URL</Label>
              <Input id="avatarUrl" name="avatarUrl" placeholder="https://example.com/avatar.jpg" type="url" />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Links</h3>
              {links.map((link, index) => (
                <Card key={index} className="p-4">
                  <div className="space-y-2">
                    <Input
                      placeholder="Link Title"
                      value={link.title}
                      onChange={(e) => handleLinkChange(index, 'title', e.target.value)}
                      required
                    />
                    <Input
                      placeholder="Link Description"
                      value={link.description}
                      onChange={(e) => handleLinkChange(index, 'description', e.target.value)}
                      required
                    />
                    <Input
                      placeholder="URL"
                      type="url"
                      value={link.url}
                      onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                      required
                    />
                    <Button type="button" variant="destructive" onClick={() => removeLink(index)}>
                      Remove Link
                    </Button>
                  </div>
                </Card>
              ))}
              <Button type="button" onClick={addLink}>Add Link</Button>
            </div>
            
            <Button type="submit">Save Profile</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}