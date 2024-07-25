"use client"

import { useState, useRef, useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { updateLinks } from "@/actions"
import { InsertLink } from '@/db/schema/links';


const data = [
  {
    title: "OpenAI Website",
    description: "The official website of OpenAI, the company behind ChatGPT.",
    url: "https://openai.com"
  },
  {
    title: "MDN Web Docs",
    description: "Comprehensive documentation for web technologies (HTML, CSS, JavaScript).",
    url: "https://developer.mozilla.org/en-US/"
  },
  {
    title: "Example Blog Post",
    description: "An interesting article about a specific topic.",
    url: "https://www.exampleblog.com/article1"
  }
];

const initialState = { title: "", description: "", url: "" }

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      Add
    </Button>
  );
}


export function MainForm() {
  const [state, formAction] = useFormState(updateLinks, { status: "" });
  const [link, setLink] = useState({ title: "", description: "", url: "" });
  const [links, setLinks] = useState<any[]>(data);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (field: keyof InsertLink, value: string) => {
    setLink(prevLink => ({
      ...prevLink,
      [field]: value
    }));
  }

  useEffect(() => {
    if (state.status === 'success') {
      // Reset form only if submission was successful
      setLink(initialState)
    }
  }, [state.status]);

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Link Manager</h1>
        <Button variant="ghost">Profile</Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Upload Link</CardTitle>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-4">
                <Input
                  name="title"
                  placeholder="Add link title here"
                  value={link.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                />
                <Input
                  name="url"
                  placeholder="Paste your link url here"
                  value={link.url}
                  onChange={(e) => handleChange('url', e.target.value)}
                />
                <Textarea
                  name="description"
                  placeholder="Enter the description"
                  value={link.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                />
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Your Uploaded Links</CardTitle>
            </CardHeader>
            <CardContent>
              <Input placeholder="Search links" className="mb-4" />
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index} className="border-b pb-2">
                    {link.title && <p className="text-sm">{link.title}</p>}
                    <a className="font-medium hover:underline">{link.url}</a>
                    {link.description && <p className="text-sm">{link.description.slice(0, 50)}...</p>}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* <footer className="mt-8 text-center text-sm text-gray-500">
        <p>&copy; 2024 Root App. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="hover:underline">About</a> |
          <a href="#" className="hover:underline ml-2">Privacy Policy</a> |
          <a href="#" className="hover:underline ml-2">Contact Us</a>
        </div>
      </footer> */}
    </div>
  );
}