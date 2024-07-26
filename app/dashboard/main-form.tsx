"use client"

import { useState, useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { updateLinks } from "@/actions"
import { InsertLink } from '@/db/schema/links';


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
  );
}